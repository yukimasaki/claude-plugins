/**
 * scripts/extract-url.ts
 *
 * `/design-director extract <url>` の Stage 1 実装。
 *
 * 任意 URL（または保存済み HTML）をヘッドレス Chromium で開き、
 * `getComputedStyle()` から evidence を集めて `DESIGN.observed.yaml` と
 * 3 ビューポート分のスクリーンショット、生 HTML を出力する。
 *
 * 設計の核は二段構造: script は raw な evidence の収集だけを行い、canonical な
 * DESIGN.md（公式仕様準拠）は skill 側で LLM に書かせる。詳細は
 * `references/commands/extract.md` を参照。
 */

import { chromium, type Page } from "playwright";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// ============================== Types ==============================

export type ExtractOptions = {
  /** 取得対象 URL（`fromHtmlPath` と排他） */
  url?: string;
  /** ローカル HTML ファイルから抽出（403 fallback 用、`url` と排他） */
  fromHtmlPath?: string;
  /** 出力ディレクトリ名。既定は hostname から派生 */
  slug?: string;
  /** 出力ベースディレクトリ。既定は `<cwd>/.design-studio/extracted` */
  outputBaseDir?: string;
  /** メインビューポート。既定 1280x800 */
  viewport?: { width: number; height: number };
  /** ナビゲーションタイムアウト ms。既定 30000 */
  navigationTimeoutMs?: number;
  /** スクリーンショット幅（既定 [360, 768, 1280]） */
  screenshotWidths?: number[];
};

export type ColorEntry = {
  value: string;
  srgb: string | null;
  srgb_hex: string | null;
  count: number;
  samples: string[];
};

export type ResolvedColor = {
  value: string;
  srgb: string | null;
  srgb_hex: string | null;
};

export type CjkSignals = {
  font_loaded: boolean;
  lang_attr: boolean;
  og_locale: string | null;
  tld_jp: boolean;
  font_chain_jp: boolean;
};

export type RadiusEntry = {
  value: string;
  count: number;
  semantic_hint?: string;
};

export type TypographyCluster = {
  cluster_size: string;
  font_family: string;
  font_weight: string;
  line_height: string;
  letter_spacing: string;
  font_feature_settings: string;
  text_transform: string;
  font_variant_numeric: string;
  samples: string[];
  in_first_viewport: boolean;
  avg_area_px2: number;
  count: number;
};

export type RawElementObservation = {
  selector: string;
  tag: string;
  classNames: string[];
  rect: { width: number; height: number; x: number; y: number };
  inFirstViewport: boolean;
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing: string;
  fontFeatureSettings: string;
  fontVariationSettings: string;
  textTransform: string;
  fontVariantNumeric: string;
  color: string;
  colorSrgb: string | null;
  backgroundColor: string;
  backgroundColorSrgb: string | null;
  ancestorBackground: string;
  ancestorBackgroundSrgb: string | null;
  borderRadius: string;
  borderTopColor: string;
  borderTopColorSrgb: string | null;
  borderTopWidth: string;
  paddingTop: string;
  paddingRight: string;
  paddingBottom: string;
  paddingLeft: string;
  gap: string;
};

export type BucketedColors = {
  bg_of_body: ResolvedColor;
  text_on_canvas: ColorEntry[];
  text_on_non_canvas: ColorEntry[];
  button_backgrounds: ColorEntry[];
  link_colors: ColorEntry[];
  border_colors: ColorEntry[];
};

export type ObservedYaml = {
  url: string;
  source: "url" | "html-file";
  extracted_at: string;
  viewport: string;
  custom_properties: Record<string, string>;
  custom_properties_srgb: Record<string, string>;
  colors: BucketedColors;
  typography: TypographyCluster[];
  radius_observed: RadiusEntry[];
  spacing_observed: {
    paddings_clustered: string[];
    gaps: string[];
  };
  fonts_resolved: string[];
  is_cjk: boolean;
  is_cjk_signals: CjkSignals;
  exemplar_hints: string[];
  warnings: string[];
};

export type ExtractResult = {
  outputDir: string;
  observedYamlPath: string;
  warnings: string[];
};

// ============================== Pure helpers ==============================

/**
 * URL またはホスト名から、ディレクトリ slug を作る。
 * 例: "https://www.example.co.jp/path" → "example-co-jp"
 */
export function slugFromUrl(input: string): string {
  let host = "";
  try {
    host = new URL(input).hostname;
  } catch {
    host = input;
  }
  if (host.startsWith("www.")) host = host.slice(4);
  const slug = host
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug || "site";
}

/**
 * 数値配列を相対トレランスでクラスタリング。
 * 隣り合う値の差が `last * tolerancePct` 以下なら同クラスタ。
 *
 * 例: [16, 16.5, 64] tolerance=0.05 → [[16, 16.5], [64]]
 */
export function clusterValues(values: number[], tolerancePct: number): number[][] {
  if (values.length === 0) return [];
  const sorted = [...values].sort((a, b) => a - b);
  const clusters: number[][] = [];
  let current: number[] = [sorted[0]];
  for (let i = 1; i < sorted.length; i++) {
    const v = sorted[i];
    const last = current[current.length - 1];
    const inCluster = last === 0 ? v === 0 : Math.abs(v - last) / Math.max(last, 1e-9) <= tolerancePct;
    if (inCluster) {
      current.push(v);
    } else {
      clusters.push(current);
      current = [v];
    }
  }
  clusters.push(current);
  return clusters;
}

/**
 * "16px" 形式の文字列配列をクラスタリングし、各クラスタの中央値を px 文字列で返す。
 * 0px は常に独立クラスタ。
 */
export function clusterPxValues(pxValues: string[], tolerancePct: number): string[] {
  const numbers: number[] = [];
  for (const v of pxValues) {
    const m = /^(\d+(?:\.\d+)?)px$/.exec((v ?? "").trim());
    if (m) numbers.push(parseFloat(m[1]));
  }
  const clusters = clusterValues(numbers, tolerancePct);
  return clusters.map((c) => {
    // sort 済み cluster の最小値を代表値にする（より「丸い」値が先頭に来やすい）
    const repr = c[0];
    return `${roundTo(repr, 0.5)}px`;
  });
}

function roundTo(n: number, step: number): number {
  return Math.round(n / step) * step;
}

/**
 * "rgb(r, g, b)" / "rgba(r, g, b, a)" を sRGB hex 文字列に変換する。
 * alpha が 1 のときは 6 桁、それ以外は 8 桁。受理できない入力は null。
 */
export function rgbStringToHex(s: string): string | null {
  if (!s) return null;
  const m = /^rgba?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\s*(?:,\s*([\d.]+)\s*)?\)$/.exec(
    s.trim(),
  );
  if (!m) return null;
  const clamp255 = (n: number) => Math.max(0, Math.min(255, Math.round(n)));
  const r = clamp255(parseFloat(m[1]));
  const g = clamp255(parseFloat(m[2]));
  const b = clamp255(parseFloat(m[3]));
  const toHex = (n: number) => n.toString(16).padStart(2, "0");
  const base = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  if (m[4] === undefined) return base;
  const a = parseFloat(m[4]);
  if (!Number.isFinite(a)) return null;
  const alpha = clamp255(a * 255);
  if (alpha === 255) return base;
  return base + toHex(alpha);
}

const CJK_FONT_REGEX =
  /noto.*(cjk|jp|kr|sc|tc)|hiragino|yu[\s-]?gothic|meiryo|ms[\s-]?p?gothic|source han/i;

/**
 * CJK サイト判定。5 経路の signal を OR で合算し、判定根拠も返す。
 *
 * - font_loaded: document.fonts に CJK フォント family が含まれる
 * - lang_attr: <html lang="ja|zh|ko"> （ja-JP / zh-Hans 等のサブタグも許容）
 * - og_locale: <meta property="og:locale"> の値が CJK ロケールなら値そのものを保持
 * - tld_jp: hostname が .jp で終わる
 * - font_chain_jp: observed font-family chain や CP 値に CJK フォント名
 */
export function computeIsCjk(opts: {
  fontsResolved: string[];
  langAttr: string;
  ogLocale: string | null;
  hostname: string;
  fontChains: string[];
}): { is_cjk: boolean; is_cjk_signals: CjkSignals } {
  const font_loaded = opts.fontsResolved.some((f) => CJK_FONT_REGEX.test(f ?? ""));
  const lang_attr = /^(ja|zh|ko)(-|$)/i.test((opts.langAttr ?? "").trim());
  const ogTrim = opts.ogLocale ? opts.ogLocale.trim() : "";
  const og_locale = ogTrim && /^(ja|zh|ko)/i.test(ogTrim) ? ogTrim : null;
  const tld_jp = /\.jp$/i.test(opts.hostname);
  const font_chain_jp = opts.fontChains.some((f) => CJK_FONT_REGEX.test(f ?? ""));
  const is_cjk = font_loaded || lang_attr || !!og_locale || tld_jp || font_chain_jp;
  return {
    is_cjk,
    is_cjk_signals: { font_loaded, lang_attr, og_locale, tld_jp, font_chain_jp },
  };
}

type ColorBucket = Map<string, { srgb: string | null; count: number; samples: Set<string> }>;

/**
 * raw observation から色を role-context バケットに分類する。
 * whole-page frequency ではなく、要素の役割（canvas / button / link / border）で
 * 別バケットに入れる。
 */
export function bucketColorsByRole(
  observations: RawElementObservation[],
  bodyBg: ResolvedColor,
): BucketedColors {
  const textOnCanvas: ColorBucket = new Map();
  const textOnNonCanvas: ColorBucket = new Map();
  const buttonBg: ColorBucket = new Map();
  const linkColor: ColorBucket = new Map();
  const borderColor: ColorBucket = new Map();

  const bump = (map: ColorBucket, value: string, srgb: string | null, sample: string) => {
    if (!value || isTransparent(value)) return;
    const cur = map.get(value) ?? { srgb, count: 0, samples: new Set<string>() };
    cur.count += 1;
    if (cur.samples.size < 5) cur.samples.add(sample);
    // 同一 value で srgb が後から取れたら採用する（先勝ちで null なら更新）
    if (cur.srgb === null && srgb !== null) cur.srgb = srgb;
    map.set(value, cur);
  };

  for (const o of observations) {
    const isLikelyButton =
      o.tag === "button" ||
      o.classNames.some((c) => /btn|button|cta/i.test(c));
    const isLikelyLink = o.tag === "a" && !isLikelyButton;
    const sample = describeSelector(o);

    if (isLikelyButton) {
      bump(buttonBg, o.backgroundColor, o.backgroundColorSrgb, sample);
    }
    if (isLikelyLink) {
      bump(linkColor, o.color, o.colorSrgb, sample);
    }

    // border (1〜3px のみを hairline 候補に)
    const bw = parsePx(o.borderTopWidth);
    if (bw !== null && bw >= 0.5 && bw <= 3) {
      bump(borderColor, o.borderTopColor, o.borderTopColorSrgb, sample);
    }

    // text bucket: canvas vs non-canvas
    if (sameColor(o.ancestorBackground, bodyBg.value)) {
      bump(textOnCanvas, o.color, o.colorSrgb, sample);
    } else {
      bump(textOnNonCanvas, o.color, o.colorSrgb, sample);
    }
  }

  return {
    bg_of_body: bodyBg,
    text_on_canvas: toColorEntries(textOnCanvas),
    text_on_non_canvas: toColorEntries(textOnNonCanvas),
    button_backgrounds: toColorEntries(buttonBg),
    link_colors: toColorEntries(linkColor),
    border_colors: toColorEntries(borderColor),
  };
}

function toColorEntries(m: ColorBucket): ColorEntry[] {
  return Array.from(m.entries())
    .map(([value, { srgb, count, samples }]) => ({
      value,
      srgb,
      srgb_hex: srgb ? rgbStringToHex(srgb) : null,
      count,
      samples: Array.from(samples),
    }))
    .sort((a, b) => b.count - a.count);
}

function describeSelector(o: RawElementObservation): string {
  const cls = o.classNames.length > 0 ? `.${o.classNames[0]}` : "";
  return `${o.tag}${cls}`;
}

function isTransparent(color: string): boolean {
  if (!color) return true;
  const c = color.replace(/\s+/g, "").toLowerCase();
  if (c === "transparent") return true;
  // rgba(...,0) / rgba(...,0.0)
  const m = /^rgba?\([^)]*?,\s*0(?:\.0+)?\)$/i.exec(c);
  return m !== null;
}

function sameColor(a: string, b: string): boolean {
  return normalizeColor(a) === normalizeColor(b);
}

function normalizeColor(c: string): string {
  if (!c) return "";
  return c.replace(/\s+/g, "").toLowerCase();
}

function parsePx(v: string): number | null {
  const m = /^(\d+(?:\.\d+)?)px$/.exec((v ?? "").trim());
  return m ? parseFloat(m[1]) : null;
}

/**
 * typography observation を font-size でクラスタリングし、cluster ごとに
 * 代表値（最頻 font-family / weight / line-height）を返す。
 * display 候補は first-viewport + rendered area > 100px² でフィルタ。
 */
export function clusterTypography(
  observations: RawElementObservation[],
  tolerancePct = 0.05,
): TypographyCluster[] {
  const eligible = observations.filter((o) => {
    const ff = (o.fontFamily ?? "").trim();
    const fs = parsePx(o.fontSize);
    if (!ff || fs === null) return false;
    return true;
  });

  // group by font-size cluster
  const sizes = eligible
    .map((o) => parsePx(o.fontSize))
    .filter((n): n is number => n !== null);
  const sizeClusters = clusterValues(sizes, tolerancePct);
  const clusterRanges = sizeClusters.map((c) => ({
    min: Math.min(...c),
    max: Math.max(...c),
    median: c[Math.floor(c.length / 2)],
  }));

  const clusters: TypographyCluster[] = [];
  for (const range of clusterRanges) {
    const members = eligible.filter((o) => {
      const fs = parsePx(o.fontSize);
      return fs !== null && fs >= range.min && fs <= range.max;
    });
    if (members.length === 0) continue;

    // for display-size clusters, prefer first-viewport + area-significant elements
    const isDisplaySize = range.median >= 32;
    const display = isDisplaySize
      ? members.filter(
          (o) => o.inFirstViewport && o.rect.width * o.rect.height > 100,
        )
      : members;
    const pickFrom = display.length > 0 ? display : members;

    const familyMode = mode(pickFrom.map((o) => o.fontFamily));
    const weightMode = mode(pickFrom.map((o) => o.fontWeight));
    const lineHeightMode = mode(pickFrom.map((o) => o.lineHeight));
    const letterSpacingMode = mode(pickFrom.map((o) => o.letterSpacing));
    const featModeRaw = mode(pickFrom.map((o) => o.fontFeatureSettings));
    const transformMode = mode(pickFrom.map((o) => o.textTransform));
    const variantMode = mode(pickFrom.map((o) => o.fontVariantNumeric));

    const samples = Array.from(
      new Set(pickFrom.slice(0, 5).map((o) => describeSelector(o))),
    );

    const totalArea = pickFrom.reduce(
      (s, o) => s + Math.max(0, o.rect.width * o.rect.height),
      0,
    );
    const avgArea = pickFrom.length > 0 ? Math.round(totalArea / pickFrom.length) : 0;

    clusters.push({
      cluster_size: `${roundTo(range.median, 0.5)}px`,
      font_family: familyMode,
      font_weight: weightMode,
      line_height: lineHeightMode,
      letter_spacing: letterSpacingMode,
      font_feature_settings: featModeRaw,
      text_transform: transformMode,
      font_variant_numeric: variantMode,
      samples,
      in_first_viewport: pickFrom.some((o) => o.inFirstViewport),
      avg_area_px2: avgArea,
      count: members.length,
    });
  }
  // largest sizes first
  return clusters.sort(
    (a, b) => parsePx(b.cluster_size)! - parsePx(a.cluster_size)!,
  );
}

function mode<T>(values: T[]): T {
  const counts = new Map<T, number>();
  for (const v of values) counts.set(v, (counts.get(v) ?? 0) + 1);
  let best: T = values[0];
  let bestCount = -1;
  for (const [v, c] of counts) {
    if (c > bestCount) {
      best = v;
      bestCount = c;
    }
  }
  return best;
}

/**
 * radius の集計。0px は `none`、9999px 以上は `pill` のヒントを付ける。
 */
export function aggregateRadius(values: string[]): RadiusEntry[] {
  const counts = new Map<string, number>();
  for (const v of values) {
    const px = parsePx(v);
    if (px === null) continue;
    const key = `${roundTo(px, 0.5)}px`;
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return Array.from(counts.entries())
    .map(([value, count]) => {
      const px = parsePx(value)!;
      let semantic_hint: string | undefined;
      if (px === 0) semantic_hint = "none";
      else if (px >= 9999) semantic_hint = "pill";
      return { value, count, ...(semantic_hint ? { semantic_hint } : {}) };
    })
    .sort((a, b) => parsePx(a.value)! - parsePx(b.value)!);
}

/**
 * hostname と CJK 判定から、`references/design-md/` 内の近そうな exemplar を
 * 2〜3 件返す。簡易ヒューリスティクス（hostname token / japanese-* family）。
 *
 * `availableFiles` は frontmatter を持つファイルのみ渡すこと（caller で filter）。
 */
export function pickNearestExemplars(opts: {
  hostname: string;
  isCjk: boolean;
  availableFiles: string[];
  limit?: number;
}): string[] {
  const { hostname, isCjk, availableFiles } = opts;
  const limit = opts.limit ?? 3;
  const tokens = hostname
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .split(/\s+/)
    .filter((t) => t.length >= 3 && t !== "com" && t !== "www" && t !== "co" && t !== "jp");

  const scored = availableFiles.map((f) => {
    const lower = f.toLowerCase();
    const basename = path.basename(lower, ".md");
    let score = 0;
    for (const t of tokens) {
      if (basename === t) score += 100;
      else if (basename.includes(t) || t.includes(basename)) score += 30;
      else if (lower.includes(t)) score += 10;
    }
    if (isCjk) {
      if (lower.includes("japanese-")) score += 5;
    } else {
      if (!lower.includes("japanese-")) score += 1;
    }
    return { file: f, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.file);
}

/**
 * ObservedYaml を YAML 文字列に整形する。
 * yaml パッケージ依存を増やさないため手書き。出力構造は固定。
 */
export function formatObservedYaml(data: ObservedYaml): string {
  const lines: string[] = [];
  const push = (s: string) => lines.push(s);

  push(`url: ${yamlString(data.url)}`);
  push(`source: ${data.source}`);
  push(`extracted_at: ${data.extracted_at}`);
  push(`viewport: ${data.viewport}`);
  push("");
  push("custom_properties:");
  const ckeys = Object.keys(data.custom_properties).sort();
  if (ckeys.length === 0) push("  {}");
  else {
    for (const k of ckeys) {
      push(`  ${yamlKey(k)}: ${yamlString(data.custom_properties[k])}`);
    }
  }
  push("");
  push("custom_properties_srgb:");
  const cpSrgbKeys = Object.keys(data.custom_properties_srgb).sort();
  if (cpSrgbKeys.length === 0) push("  {}");
  else {
    for (const k of cpSrgbKeys) {
      push(`  ${yamlKey(k)}: ${yamlString(data.custom_properties_srgb[k])}`);
    }
  }
  push("");
  push("colors:");
  push("  bg_of_body:");
  push(`    value: ${yamlString(data.colors.bg_of_body.value)}`);
  push(`    srgb: ${yamlNullableString(data.colors.bg_of_body.srgb)}`);
  push(`    srgb_hex: ${yamlNullableString(data.colors.bg_of_body.srgb_hex)}`);
  emitColorList("text_on_canvas", data.colors.text_on_canvas, push);
  emitColorList("text_on_non_canvas", data.colors.text_on_non_canvas, push);
  emitColorList("button_backgrounds", data.colors.button_backgrounds, push);
  emitColorList("link_colors", data.colors.link_colors, push);
  emitColorList("border_colors", data.colors.border_colors, push);
  push("");
  push("typography:");
  if (data.typography.length === 0) push("  []");
  for (const t of data.typography) {
    push(`  - cluster_size: ${yamlString(t.cluster_size)}`);
    push(`    font_family: ${yamlString(t.font_family)}`);
    push(`    font_weight: ${yamlString(t.font_weight)}`);
    push(`    line_height: ${yamlString(t.line_height)}`);
    push(`    letter_spacing: ${yamlString(t.letter_spacing)}`);
    push(`    font_feature_settings: ${yamlString(t.font_feature_settings)}`);
    push(`    text_transform: ${yamlString(t.text_transform)}`);
    push(`    font_variant_numeric: ${yamlString(t.font_variant_numeric)}`);
    push(`    in_first_viewport: ${t.in_first_viewport}`);
    push(`    avg_area_px2: ${t.avg_area_px2}`);
    push(`    count: ${t.count}`);
    push(`    samples: [${t.samples.map(yamlString).join(", ")}]`);
  }
  push("");
  push("radius_observed:");
  if (data.radius_observed.length === 0) push("  []");
  for (const r of data.radius_observed) {
    const hint = r.semantic_hint ? `, semantic_hint: ${yamlString(r.semantic_hint)}` : "";
    push(`  - { value: ${yamlString(r.value)}, count: ${r.count}${hint} }`);
  }
  push("");
  push("spacing_observed:");
  push(
    `  paddings_clustered: [${data.spacing_observed.paddings_clustered.map(yamlString).join(", ")}]`,
  );
  push(`  gaps: [${data.spacing_observed.gaps.map(yamlString).join(", ")}]`);
  push("");
  push("fonts_resolved:");
  if (data.fonts_resolved.length === 0) push("  []");
  for (const f of data.fonts_resolved) push(`  - ${yamlString(f)}`);
  push("");
  push(`is_cjk: ${data.is_cjk}`);
  push("is_cjk_signals:");
  push(`  font_loaded: ${data.is_cjk_signals.font_loaded}`);
  push(`  lang_attr: ${data.is_cjk_signals.lang_attr}`);
  push(`  og_locale: ${yamlNullableString(data.is_cjk_signals.og_locale)}`);
  push(`  tld_jp: ${data.is_cjk_signals.tld_jp}`);
  push(`  font_chain_jp: ${data.is_cjk_signals.font_chain_jp}`);
  push("");
  push("exemplar_hints:");
  if (data.exemplar_hints.length === 0) push("  []");
  for (const e of data.exemplar_hints) push(`  - ${yamlString(e)}`);
  push("");
  push("warnings:");
  if (data.warnings.length === 0) push("  []");
  for (const w of data.warnings) push(`  - ${yamlString(w)}`);
  push("");
  return lines.join("\n");
}

function emitColorList(name: string, entries: ColorEntry[], push: (s: string) => void) {
  if (entries.length === 0) {
    push(`  ${name}: []`);
    return;
  }
  push(`  ${name}:`);
  for (const e of entries) {
    push(`    - value: ${yamlString(e.value)}`);
    push(`      srgb: ${yamlNullableString(e.srgb)}`);
    push(`      srgb_hex: ${yamlNullableString(e.srgb_hex)}`);
    push(`      count: ${e.count}`);
    push(`      samples: [${e.samples.map(yamlString).join(", ")}]`);
  }
}

function yamlString(s: string): string {
  if (s === undefined || s === null) return '""';
  if (s === "") return '""';
  // Always quote with double quotes and escape minimally.
  return '"' + String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"';
}

function yamlNullableString(s: string | null | undefined): string {
  if (s === null || s === undefined) return "null";
  return yamlString(s);
}

function yamlKey(k: string): string {
  // Quote keys that contain non-identifier chars.
  if (/^[A-Za-z_][A-Za-z0-9_-]*$/.test(k)) return k;
  return yamlString(k);
}

// ============================== Browser layer ==============================

const COOKIE_HIDE_CSS = `
[class*="cookie" i], [class*="consent" i], [class*="gdpr" i],
[id*="cookie" i], [id*="consent" i], [id*="gdpr" i],
[aria-modal="true"], [role="dialog"] { display: none !important; }
`;

const TARGET_SELECTORS = [
  "body", "main", "article", "section",
  "h1", "h2", "h3", "h4", "h5", "h6",
  "p", "li", "blockquote", "label",
  "a", "button",
  '[role="button"]', "input", "textarea",
  '[class*="btn" i]', '[class*="cta" i]', '[class*="button" i]',
  '[class*="card" i]', '[class*="hero" i]',
  "nav", "header", "footer",
];

/**
 * 抽出本体。ブラウザ起動 → evidence 収集 → ファイル出力。
 */
export async function extractUrl(opts: ExtractOptions): Promise<ExtractResult> {
  if (!opts.url && !opts.fromHtmlPath) {
    throw new Error("extractUrl: `url` か `fromHtmlPath` のいずれかが必要");
  }
  const viewport = opts.viewport ?? { width: 1280, height: 800 };
  const screenshotWidths = opts.screenshotWidths ?? [360, 768, 1280];
  const navTimeout = opts.navigationTimeoutMs ?? 30000;

  const slug = opts.slug ?? slugFromUrl(opts.url ?? path.basename(opts.fromHtmlPath ?? "site"));
  const outputBase = opts.outputBaseDir ?? path.join(process.cwd(), ".design-studio", "extracted");
  const outputDir = path.join(outputBase, slug);
  await fs.mkdir(outputDir, { recursive: true });

  const warnings: string[] = [];
  let browser;
  try {
    browser = await chromium.launch({ headless: true });
  } catch (err: any) {
    if (err?.message?.includes("Executable doesn't exist") || err?.message?.includes("missing dependencies")) {
      throw new Error(
        [
          "Playwright Chromium が未インストールか、システム依存ライブラリが不足しています。",
          "次のコマンドで導入してください:",
          "  bun add playwright",
          "  sudo bun x playwright install --with-deps chromium",
          `元のエラー: ${err.message}`,
        ].join("\n"),
      );
    }
    throw err;
  }

  try {
    const context = await browser.newContext({ viewport });
    const page = await context.newPage();

    // Stage A: navigate
    if (opts.fromHtmlPath) {
      const html = await fs.readFile(opts.fromHtmlPath, "utf-8");
      await page.setContent(html, { waitUntil: "networkidle", timeout: navTimeout });
    } else {
      try {
        await page.goto(opts.url!, { waitUntil: "networkidle", timeout: navTimeout });
      } catch (err: any) {
        warnings.push(
          `networkidle 待機が失敗（${err?.message ?? err}）。waitUntil=load にフォールバックして続行。`,
        );
        await page.goto(opts.url!, { waitUntil: "load", timeout: navTimeout });
      }
    }

    // 403 / Cloudflare challenge の検知
    const title = await page.title();
    const visibleText = await page.evaluate(() => document.body?.innerText?.slice(0, 1000) ?? "");
    if (
      /attention required|just a moment|cloudflare|access denied|403/i.test(title) ||
      /attention required|just a moment|cloudflare/i.test(visibleText)
    ) {
      warnings.push(
        "Cloudflare challenge / 403 を検出。ブラウザで手動保存した HTML を `--from-html <path>` で渡すと回避できます。",
      );
    }

    // Stage B: hide cookie/consent banners and modals
    await page.addStyleTag({ content: COOKIE_HIDE_CSS }).catch(() => undefined);

    // Stage C: scroll to fire lazyload, then return to top
    await page.evaluate(async () => {
      const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
      const max = document.body?.scrollHeight ?? 0;
      let y = 0;
      while (y < max) {
        window.scrollBy(0, 600);
        y += 600;
        await sleep(80);
      }
      window.scrollTo(0, 0);
      await sleep(200);
    });

    // Stage D: collect evidence
    const evidence = await collectEvidence(page, viewport);

    // Stage E: screenshots at multiple widths
    for (const w of screenshotWidths) {
      try {
        await page.setViewportSize({ width: w, height: viewport.height });
        await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => r(null))));
        await page.screenshot({
          path: path.join(outputDir, `screenshot-${w}.png`),
          fullPage: false,
          type: "png",
        });
      } catch (err: any) {
        warnings.push(`スクリーンショット失敗 (width=${w}): ${err?.message ?? err}`);
      }
    }

    // restore main viewport for HTML save
    await page.setViewportSize(viewport);
    const html = await page.content();
    await fs.writeFile(path.join(outputDir, "page.html"), html, "utf-8");

    // Stage F: aggregate to ObservedYaml
    const bodyBgRaw = evidence.bodyBackground?.value ?? "rgb(255, 255, 255)";
    const bodyBgSrgb = evidence.bodyBackground?.srgb ?? null;
    const bodyBg: ResolvedColor = {
      value: bodyBgRaw,
      srgb: bodyBgSrgb,
      srgb_hex: bodyBgSrgb ? rgbStringToHex(bodyBgSrgb) : null,
    };
    const colors = bucketColorsByRole(evidence.observations, bodyBg);
    const typography = clusterTypography(evidence.observations);
    const radius_observed = aggregateRadius(
      evidence.observations.map((o) => o.borderRadius).filter(Boolean),
    );
    const allPaddings = evidence.observations.flatMap((o) => [
      o.paddingTop, o.paddingRight, o.paddingBottom, o.paddingLeft,
    ]).filter(Boolean);
    const paddings_clustered = clusterPxValues(allPaddings, 0.10);
    const gaps = clusterPxValues(
      evidence.observations.map((o) => o.gap).filter(Boolean),
      0.10,
    );

    const hostname = opts.url ? safeHostname(opts.url) : slug;
    const fontChains = [
      ...evidence.observations.map((o) => o.fontFamily),
      ...Object.entries(evidence.customProperties)
        .filter(([k]) => /font-?family/i.test(k))
        .map(([, v]) => v),
    ];
    const { is_cjk, is_cjk_signals } = computeIsCjk({
      fontsResolved: evidence.fontsResolved,
      langAttr: evidence.langAttr,
      ogLocale: evidence.ogLocale,
      hostname,
      fontChains,
    });
    const exemplarFiles = await listFrontmatterDesignMdFiles().catch(() => [] as string[]);
    const exemplar_hints = pickNearestExemplars({
      hostname,
      isCjk: is_cjk,
      availableFiles: exemplarFiles,
    });

    if (
      is_cjk &&
      !is_cjk_signals.font_loaded &&
      /(\.jp$|note\.com|qiita\.com|zenn\.dev|smarthr|cookpad)/i.test(hostname)
    ) {
      warnings.push(
        "日本語サイトと判定しましたが Noto CJK 等の resolved フォントが検出できませんでした。`sudo apt install fonts-noto-cjk` を検討してください。",
      );
    }

    const observed: ObservedYaml = {
      url: opts.url ?? `file://${path.resolve(opts.fromHtmlPath!)}`,
      source: opts.fromHtmlPath ? "html-file" : "url",
      extracted_at: new Date().toISOString(),
      viewport: `${viewport.width}x${viewport.height}`,
      custom_properties: evidence.customProperties,
      custom_properties_srgb: evidence.customPropertiesSrgb,
      colors,
      typography,
      radius_observed,
      spacing_observed: { paddings_clustered, gaps },
      fonts_resolved: evidence.fontsResolved,
      is_cjk,
      is_cjk_signals,
      exemplar_hints,
      warnings,
    };

    const yamlText = formatObservedYaml(observed);
    const observedYamlPath = path.join(outputDir, "DESIGN.observed.yaml");
    await fs.writeFile(observedYamlPath, yamlText, "utf-8");

    return { outputDir, observedYamlPath, warnings };
  } finally {
    await browser.close().catch(() => undefined);
  }
}

function safeHostname(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}

async function listFrontmatterDesignMdFiles(): Promise<string[]> {
  const here = fileURLToPath(import.meta.url);
  const designMdRoot = path.resolve(path.dirname(here), "..", "references", "design-md");
  const out: string[] = [];
  async function walk(dir: string, rel: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      const full = path.join(dir, e.name);
      const r = rel ? `${rel}/${e.name}` : e.name;
      if (e.isDirectory()) {
        await walk(full, r);
      } else if (e.isFile() && e.name.endsWith(".md")) {
        try {
          const fd = await fs.open(full, "r");
          const buf = Buffer.alloc(4);
          await fd.read(buf, 0, 4, 0);
          await fd.close();
          if (buf.toString("utf-8").startsWith("---")) {
            out.push(r);
          }
        } catch {
          // skip
        }
      }
    }
  }
  await walk(designMdRoot, "");
  return out;
}

type PageEvidence = {
  observations: RawElementObservation[];
  customProperties: Record<string, string>;
  customPropertiesSrgb: Record<string, string>;
  fontsResolved: string[];
  bodyBackground: { value: string; srgb: string | null };
  langAttr: string;
  ogLocale: string | null;
};

async function collectEvidence(
  page: Page,
  viewport: { width: number; height: number },
): Promise<PageEvidence> {
  return await page.evaluate(
    ({ targetSelectors, viewportH }) => {
      const isTransparent = (c: string) => {
        if (!c) return true;
        const s = c.replace(/\s+/g, "").toLowerCase();
        if (s === "transparent") return true;
        return /^rgba\([^)]*?,0(\.0+)?\)$/.test(s);
      };

      // sRGB resolver: 1x1 canvas に CSS color を塗って getImageData で
      // gamut-mapped rgba を読む。これでブラウザに lab/oklch/oklab/color() 等の
      // CSS Color Module 4 値を sRGB 整数に変換させる。
      const probeCanvas = document.createElement("canvas");
      probeCanvas.width = 1;
      probeCanvas.height = 1;
      const probeCtx = probeCanvas.getContext("2d", { willReadFrequently: true });
      const toSrgb = (color: string): string | null => {
        if (!probeCtx) return null;
        if (!color) return null;
        const c = color.trim();
        if (c === "" || c === "transparent") return null;
        if (typeof CSS === "undefined" || !CSS.supports("color", c)) return null;
        try {
          probeCtx.clearRect(0, 0, 1, 1);
          // 透明初期化のあと不正値で fillStyle が拒否されても
          // CSS.supports 側で弾いているので probeCtx は信頼できる
          probeCtx.fillStyle = "rgba(0, 0, 0, 0)";
          probeCtx.fillStyle = c;
          probeCtx.fillRect(0, 0, 1, 1);
          const data = probeCtx.getImageData(0, 0, 1, 1).data;
          const r = data[0], g = data[1], b = data[2], a = data[3];
          if (a === 0) return null;
          if (a === 255) return `rgb(${r}, ${g}, ${b})`;
          const alpha = Math.round((a / 255) * 1000) / 1000;
          return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        } catch {
          return null;
        }
      };

      const resolveBg = (el: Element | null): string => {
        let cur: Element | null = el;
        while (cur) {
          const cs = getComputedStyle(cur);
          const bg = cs.backgroundColor;
          if (!isTransparent(bg)) return bg;
          cur = cur.parentElement;
        }
        return getComputedStyle(document.body).backgroundColor;
      };

      // :root custom properties (raw + sRGB-resolved for color-like values)
      const customProperties: Record<string, string> = {};
      const customPropertiesSrgb: Record<string, string> = {};
      const rootStyle = getComputedStyle(document.documentElement);
      for (let i = 0; i < rootStyle.length; i++) {
        const name = rootStyle[i];
        if (name && name.startsWith("--")) {
          const v = rootStyle.getPropertyValue(name).trim();
          if (!v) continue;
          customProperties[name] = v;
          if (typeof CSS !== "undefined" && CSS.supports("color", v)) {
            const srgb = toSrgb(v);
            if (srgb !== null) customPropertiesSrgb[name] = srgb;
          }
        }
      }

      const seen = new Set<Element>();
      const obs: any[] = [];
      for (const sel of targetSelectors as string[]) {
        let nodes: Element[];
        try {
          nodes = Array.from(document.querySelectorAll(sel));
        } catch {
          continue;
        }
        for (const el of nodes) {
          if (seen.has(el)) continue;
          seen.add(el);
          const cs = getComputedStyle(el);
          const rect = el.getBoundingClientRect();
          if (rect.width === 0 || rect.height === 0) {
            // hidden / collapsed; skip but allow body etc.
            if (el !== document.body && el !== document.documentElement) continue;
          }
          const tag = el.tagName.toLowerCase();
          const classNames = (el.getAttribute("class") ?? "")
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, 3);
          const color = cs.getPropertyValue("color");
          const backgroundColor = cs.getPropertyValue("background-color");
          const ancestorBackground = resolveBg(el.parentElement ?? el);
          const borderTopColor = cs.getPropertyValue("border-top-color");
          obs.push({
            selector: tag + (classNames[0] ? `.${classNames[0]}` : ""),
            tag,
            classNames,
            rect: {
              width: Math.round(rect.width),
              height: Math.round(rect.height),
              x: Math.round(rect.x),
              y: Math.round(rect.y),
            },
            inFirstViewport: rect.y < viewportH && rect.y + rect.height > 0,
            fontFamily: cs.getPropertyValue("font-family"),
            fontSize: cs.getPropertyValue("font-size"),
            fontWeight: cs.getPropertyValue("font-weight"),
            lineHeight: cs.getPropertyValue("line-height"),
            letterSpacing: cs.getPropertyValue("letter-spacing"),
            fontFeatureSettings: cs.getPropertyValue("font-feature-settings"),
            fontVariationSettings: cs.getPropertyValue("font-variation-settings"),
            textTransform: cs.getPropertyValue("text-transform"),
            fontVariantNumeric: cs.getPropertyValue("font-variant-numeric"),
            color,
            colorSrgb: toSrgb(color),
            backgroundColor,
            backgroundColorSrgb: toSrgb(backgroundColor),
            ancestorBackground,
            ancestorBackgroundSrgb: toSrgb(ancestorBackground),
            borderRadius: cs.getPropertyValue("border-radius"),
            borderTopColor,
            borderTopColorSrgb: toSrgb(borderTopColor),
            borderTopWidth: cs.getPropertyValue("border-top-width"),
            paddingTop: cs.getPropertyValue("padding-top"),
            paddingRight: cs.getPropertyValue("padding-right"),
            paddingBottom: cs.getPropertyValue("padding-bottom"),
            paddingLeft: cs.getPropertyValue("padding-left"),
            gap: cs.getPropertyValue("gap"),
          });
        }
      }

      const bodyBg = resolveBg(document.body);
      const bodyBgSrgb = toSrgb(bodyBg);
      const fontsResolved = Array.from(
        new Set(Array.from((document as any).fonts ?? []).map((f: any) => f.family)),
      ) as string[];

      const langAttr = (document.documentElement.getAttribute("lang") ?? "").trim();
      const ogMeta = document.querySelector('meta[property="og:locale"]');
      const ogLocale = ogMeta?.getAttribute("content")?.trim() || null;

      return {
        observations: obs as unknown as RawElementObservation[],
        customProperties,
        customPropertiesSrgb,
        fontsResolved,
        bodyBackground: { value: bodyBg, srgb: bodyBgSrgb },
        langAttr,
        ogLocale,
      };
    },
    { targetSelectors: TARGET_SELECTORS, viewportH: viewport.height },
  );
}

// ============================== CLI ==============================

type ParsedArgs = ExtractOptions & { _help?: boolean };

export function parseArgs(argv: string[]): ParsedArgs {
  const out: ParsedArgs = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "-h" || a === "--help") {
      out._help = true;
    } else if (a === "--from-html") {
      out.fromHtmlPath = argv[++i];
    } else if (a === "--slug") {
      out.slug = argv[++i];
    } else if (a === "--output") {
      out.outputBaseDir = argv[++i];
    } else if (a === "--viewport") {
      const v = argv[++i] ?? "";
      const m = /^(\d+)x(\d+)$/.exec(v);
      if (!m) throw new Error(`--viewport は WxH 形式で指定してください（例: 1280x800）。受け取った値: ${v}`);
      out.viewport = { width: parseInt(m[1], 10), height: parseInt(m[2], 10) };
    } else if (!a.startsWith("-") && !out.url) {
      out.url = a;
    } else if (a.startsWith("-")) {
      throw new Error(`未知のオプション: ${a}`);
    }
  }
  return out;
}

const HELP = `使い方: bun scripts/extract-url.ts <url> [options]

引数:
  <url>                抽出対象 URL（--from-html 使用時は省略可）

オプション:
  --from-html <path>   URL の代わりにローカル HTML を読む（403 fallback）
  --slug <name>        出力ディレクトリ名（既定: hostname 由来）
  --output <dir>       出力ベースディレクトリ（既定: ./.design-studio/extracted）
  --viewport <WxH>     メインビューポート（既定: 1280x800）
  -h, --help           このヘルプを表示

出力:
  <output>/<slug>/DESIGN.observed.yaml
  <output>/<slug>/screenshot-{360,768,1280}.png
  <output>/<slug>/page.html
`;

async function main() {
  let opts: ParsedArgs;
  try {
    opts = parseArgs(process.argv.slice(2));
  } catch (err: any) {
    console.error(err?.message ?? err);
    console.error(HELP);
    process.exit(2);
  }
  if (opts._help || (!opts.url && !opts.fromHtmlPath)) {
    console.log(HELP);
    process.exit(opts._help ? 0 : 2);
  }
  try {
    const res = await extractUrl(opts);
    console.log(`✓ 抽出完了: ${res.outputDir}`);
    console.log(`  observed.yaml: ${res.observedYamlPath}`);
    if (res.warnings.length > 0) {
      console.log("\nwarnings:");
      for (const w of res.warnings) console.log(`  - ${w}`);
    }
  } catch (err: any) {
    console.error(`✗ 抽出失敗: ${err?.message ?? err}`);
    process.exit(1);
  }
}

function isCliEntry(): boolean {
  const argv1 = process.argv[1];
  if (!argv1) return false;
  return fileURLToPath(import.meta.url) === path.resolve(argv1);
}

if (isCliEntry()) {
  await main();
}
