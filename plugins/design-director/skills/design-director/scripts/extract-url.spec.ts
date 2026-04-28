import { describe, expect, it } from "vitest";
import {
  aggregateRadius,
  bucketColorsByRole,
  clusterPxValues,
  clusterTypography,
  clusterValues,
  computeIsCjk,
  formatObservedYaml,
  parseArgs,
  pickNearestExemplars,
  rgbStringToHex,
  slugFromUrl,
  type RawElementObservation,
  type ObservedYaml,
  type ResolvedColor,
} from "./extract-url";

const WHITE_BG: ResolvedColor = {
  value: "rgb(255, 255, 255)",
  srgb: "rgb(255, 255, 255)",
  srgb_hex: "#ffffff",
};

describe("slugFromUrl", () => {
  it("hostname を dash 区切り小文字に変換する", () => {
    expect(slugFromUrl("https://note.com/path")).toBe("note-com");
    expect(slugFromUrl("https://www.example.co.jp/")).toBe("example-co-jp");
    expect(slugFromUrl("https://Linear.app")).toBe("linear-app");
    expect(slugFromUrl("https://my-site.io")).toBe("my-site-io");
  });

  it("URL でない文字列もそれっぽい slug にする", () => {
    expect(slugFromUrl("hello world!!")).toBe("hello-world");
  });

  it("空入力には fallback slug を返す", () => {
    expect(slugFromUrl("")).toBe("site");
  });
});

describe("clusterValues", () => {
  it("相対トレランスでクラスタ分割する", () => {
    expect(clusterValues([16, 16.5, 64], 0.05)).toEqual([[16, 16.5], [64]]);
  });

  it("空配列は空のまま", () => {
    expect(clusterValues([], 0.05)).toEqual([]);
  });

  it("0 は独立クラスタになる", () => {
    expect(clusterValues([0, 0, 4], 0.05)).toEqual([[0, 0], [4]]);
  });

  it("ソートされていない入力を昇順クラスタとして返す（差が tolerance を超えれば split）", () => {
    // 16→17 は 6.25%（>5%）で別クラスタ。64→64.5 は 0.78% で同クラスタ。
    expect(clusterValues([64, 16, 17, 64.5], 0.05)).toEqual([[16], [17], [64, 64.5]]);
  });
});

describe("rgbStringToHex", () => {
  it("rgb(r, g, b) を 6 桁 hex に変換", () => {
    expect(rgbStringToHex("rgb(31, 31, 31)")).toBe("#1f1f1f");
    expect(rgbStringToHex("rgb(0, 0, 0)")).toBe("#000000");
    expect(rgbStringToHex("rgb(255, 255, 255)")).toBe("#ffffff");
    expect(rgbStringToHex("rgb(0, 119, 199)")).toBe("#0077c7");
  });

  it("alpha=1 の rgba は 6 桁 hex に正規化する", () => {
    expect(rgbStringToHex("rgba(31, 31, 31, 1)")).toBe("#1f1f1f");
  });

  it("alpha < 1 の rgba は 8 桁 hex で alpha を保持する", () => {
    expect(rgbStringToHex("rgba(0, 0, 0, 0.5)")).toBe("#00000080");
    expect(rgbStringToHex("rgba(0, 0, 0, 0)")).toBe("#00000000");
  });

  it("空白を含む入力も受理する", () => {
    expect(rgbStringToHex("  rgb(  31 ,  31 ,  31  )  ")).toBe("#1f1f1f");
  });

  it("rgb / rgba 形式以外の値は null", () => {
    expect(rgbStringToHex("transparent")).toBeNull();
    expect(rgbStringToHex("lab(50 0 0)")).toBeNull();
    expect(rgbStringToHex("oklch(0.7 0.1 200)")).toBeNull();
    expect(rgbStringToHex("#fff")).toBeNull();
    expect(rgbStringToHex("")).toBeNull();
    expect(rgbStringToHex("not a color")).toBeNull();
  });
});

describe("computeIsCjk", () => {
  const baseInput = {
    fontsResolved: [] as string[],
    langAttr: "",
    ogLocale: null as string | null,
    hostname: "example.com",
    fontChains: [] as string[],
  };

  it("全 signal が false なら is_cjk: false", () => {
    const r = computeIsCjk(baseInput);
    expect(r.is_cjk).toBe(false);
    expect(r.is_cjk_signals).toEqual({
      font_loaded: false,
      lang_attr: false,
      og_locale: null,
      tld_jp: false,
      font_chain_jp: false,
    });
  });

  it("lang=ja のみで is_cjk: true", () => {
    const r = computeIsCjk({ ...baseInput, langAttr: "ja" });
    expect(r.is_cjk).toBe(true);
    expect(r.is_cjk_signals.lang_attr).toBe(true);
  });

  it("lang=ja-JP / zh-Hans / ko-KR も拾う", () => {
    expect(computeIsCjk({ ...baseInput, langAttr: "ja-JP" }).is_cjk_signals.lang_attr).toBe(true);
    expect(computeIsCjk({ ...baseInput, langAttr: "zh-Hans" }).is_cjk_signals.lang_attr).toBe(true);
    expect(computeIsCjk({ ...baseInput, langAttr: "ko-KR" }).is_cjk_signals.lang_attr).toBe(true);
  });

  it("lang=en は CJK 扱いしない", () => {
    expect(computeIsCjk({ ...baseInput, langAttr: "en" }).is_cjk).toBe(false);
    expect(computeIsCjk({ ...baseInput, langAttr: "en-US" }).is_cjk).toBe(false);
  });

  it("og_locale=ja_JP は値そのものを保持して is_cjk: true", () => {
    const r = computeIsCjk({ ...baseInput, ogLocale: "ja_JP" });
    expect(r.is_cjk).toBe(true);
    expect(r.is_cjk_signals.og_locale).toBe("ja_JP");
  });

  it("og_locale=en_US は CJK 扱いせず og_locale は null", () => {
    const r = computeIsCjk({ ...baseInput, ogLocale: "en_US" });
    expect(r.is_cjk).toBe(false);
    expect(r.is_cjk_signals.og_locale).toBeNull();
  });

  it("hostname が .jp で終われば tld_jp: true", () => {
    expect(computeIsCjk({ ...baseInput, hostname: "example.jp" }).is_cjk_signals.tld_jp).toBe(true);
    expect(computeIsCjk({ ...baseInput, hostname: "example.co.jp" }).is_cjk_signals.tld_jp).toBe(true);
    expect(computeIsCjk({ ...baseInput, hostname: "example.com" }).is_cjk_signals.tld_jp).toBe(false);
  });

  it("font-family chain に CJK フォント名があれば font_chain_jp: true", () => {
    const r = computeIsCjk({
      ...baseInput,
      fontChains: [
        '-apple-system, "Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif',
      ],
    });
    expect(r.is_cjk).toBe(true);
    expect(r.is_cjk_signals.font_chain_jp).toBe(true);
  });

  it("fonts_resolved に Noto Sans JP があれば font_loaded: true", () => {
    const r = computeIsCjk({
      ...baseInput,
      fontsResolved: ["Inter", "Noto Sans JP"],
    });
    expect(r.is_cjk).toBe(true);
    expect(r.is_cjk_signals.font_loaded).toBe(true);
  });

  it("system font だけの日本語サイト相当の入力でも tld+lang+chain で拾える", () => {
    // .jp ドメイン + lang=ja + system font 経由の Noto Sans JP chain。
    // fonts_resolved は空（Web font が無いため）
    const r = computeIsCjk({
      fontsResolved: [],
      langAttr: "ja",
      ogLocale: null,
      hostname: "anonymized-product.example.jp",
      fontChains: [
        '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans JP", "Hiragino Sans", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif',
      ],
    });
    expect(r.is_cjk).toBe(true);
    expect(r.is_cjk_signals.font_loaded).toBe(false);
    expect(r.is_cjk_signals.lang_attr).toBe(true);
    expect(r.is_cjk_signals.tld_jp).toBe(true);
    expect(r.is_cjk_signals.font_chain_jp).toBe(true);
  });
});

describe("clusterPxValues", () => {
  it('"NNpx" 文字列をクラスタリングして代表値を返す', () => {
    const out = clusterPxValues(["4px", "4px", "8px", "16px", "16.4px"], 0.05);
    expect(out).toEqual(["4px", "8px", "16px"]);
  });

  it("不正な値は無視する", () => {
    const out = clusterPxValues(["8px", "auto", "", "8px"], 0.05);
    expect(out).toEqual(["8px"]);
  });
});

describe("bucketColorsByRole", () => {
  const baseObs = (over: Partial<RawElementObservation> = {}): RawElementObservation => ({
    selector: "p",
    tag: "p",
    classNames: [],
    rect: { width: 100, height: 20, x: 0, y: 0 },
    inFirstViewport: true,
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
    letterSpacing: "0px",
    fontFeatureSettings: "normal",
    fontVariationSettings: "normal",
    textTransform: "none",
    fontVariantNumeric: "normal",
    color: "rgb(0, 0, 0)",
    colorSrgb: "rgb(0, 0, 0)",
    backgroundColor: "rgba(0, 0, 0, 0)",
    backgroundColorSrgb: null,
    ancestorBackground: "rgb(255, 255, 255)",
    ancestorBackgroundSrgb: "rgb(255, 255, 255)",
    borderRadius: "0px",
    borderTopColor: "rgba(0, 0, 0, 0)",
    borderTopColorSrgb: null,
    borderTopWidth: "0px",
    paddingTop: "0px",
    paddingRight: "0px",
    paddingBottom: "0px",
    paddingLeft: "0px",
    gap: "0px",
    ...over,
  });

  it("body 背景と同色背景上のテキストは text_on_canvas に入る", () => {
    const r = bucketColorsByRole(
      [baseObs({
        color: "rgb(34, 34, 34)",
        colorSrgb: "rgb(34, 34, 34)",
        ancestorBackground: "rgb(255, 255, 255)",
      })],
      WHITE_BG,
    );
    expect(r.text_on_canvas[0].value).toBe("rgb(34, 34, 34)");
    expect(r.text_on_canvas[0].srgb).toBe("rgb(34, 34, 34)");
    expect(r.text_on_canvas[0].srgb_hex).toBe("#222222");
    expect(r.text_on_non_canvas).toEqual([]);
  });

  it("button 背景は button_backgrounds に入る", () => {
    const r = bucketColorsByRole(
      [
        baseObs({
          tag: "button",
          backgroundColor: "rgb(0, 119, 199)",
          backgroundColorSrgb: "rgb(0, 119, 199)",
        }),
      ],
      WHITE_BG,
    );
    expect(r.button_backgrounds[0].value).toBe("rgb(0, 119, 199)");
    expect(r.button_backgrounds[0].srgb_hex).toBe("#0077c7");
  });

  it("a タグの color は link_colors に入る（btn class が無い場合）", () => {
    const r = bucketColorsByRole(
      [baseObs({ tag: "a", color: "rgb(0, 119, 199)", colorSrgb: "rgb(0, 119, 199)" })],
      WHITE_BG,
    );
    expect(r.link_colors[0].value).toBe("rgb(0, 119, 199)");
    expect(r.link_colors[0].srgb_hex).toBe("#0077c7");
  });

  it("a.btn は button 扱いされ link_colors には入らない", () => {
    const r = bucketColorsByRole(
      [
        baseObs({
          tag: "a",
          classNames: ["btn"],
          color: "rgb(255, 255, 255)",
          colorSrgb: "rgb(255, 255, 255)",
          backgroundColor: "rgb(0, 119, 199)",
          backgroundColorSrgb: "rgb(0, 119, 199)",
        }),
      ],
      WHITE_BG,
    );
    expect(r.button_backgrounds[0].value).toBe("rgb(0, 119, 199)");
    expect(r.link_colors).toEqual([]);
  });

  it("transparent / rgba(...,0) は無視される", () => {
    const r = bucketColorsByRole(
      [
        baseObs({ color: "transparent", colorSrgb: null }),
        baseObs({ color: "rgba(0,0,0,0)", colorSrgb: null }),
      ],
      WHITE_BG,
    );
    expect(r.text_on_canvas).toEqual([]);
  });

  it("border 1〜3px のみが border_colors に入る", () => {
    const r = bucketColorsByRole(
      [
        baseObs({
          borderTopColor: "rgb(229, 229, 229)",
          borderTopColorSrgb: "rgb(229, 229, 229)",
          borderTopWidth: "1px",
        }),
        baseObs({
          borderTopColor: "rgb(0, 0, 0)",
          borderTopColorSrgb: "rgb(0, 0, 0)",
          borderTopWidth: "10px",
        }),
      ],
      WHITE_BG,
    );
    expect(r.border_colors).toHaveLength(1);
    expect(r.border_colors[0].value).toBe("rgb(229, 229, 229)");
    expect(r.border_colors[0].srgb_hex).toBe("#e5e5e5");
  });

  it("頻度の降順でソートされる", () => {
    const r = bucketColorsByRole(
      [
        baseObs({ color: "rgb(50, 50, 50)", colorSrgb: "rgb(50, 50, 50)" }),
        baseObs({ color: "rgb(100, 100, 100)", colorSrgb: "rgb(100, 100, 100)" }),
        baseObs({ color: "rgb(100, 100, 100)", colorSrgb: "rgb(100, 100, 100)" }),
      ],
      WHITE_BG,
    );
    expect(r.text_on_canvas[0].value).toBe("rgb(100, 100, 100)");
    expect(r.text_on_canvas[0].count).toBe(2);
  });

  it("LAB 値を value で保ちつつ srgb_hex に sRGB hex を付与する", () => {
    // ground truth: lab(8.36 0 0) ≈ #1f1f1f だが、bucketColorsByRole は
    // page.evaluate 側で resolve 済みの srgb 文字列に依存する pure 関数なので
    // ここでは srgb をそのまま渡したときに hex が伝播することだけ確認する
    const r = bucketColorsByRole(
      [
        baseObs({
          color: "lab(8.36 0 0)",
          colorSrgb: "rgb(31, 31, 31)",
          ancestorBackground: "rgb(255, 255, 255)",
        }),
      ],
      WHITE_BG,
    );
    expect(r.text_on_canvas[0].value).toBe("lab(8.36 0 0)");
    expect(r.text_on_canvas[0].srgb_hex).toBe("#1f1f1f");
  });
});

describe("clusterTypography", () => {
  const baseObs = (over: Partial<RawElementObservation> = {}): RawElementObservation => ({
    selector: "p",
    tag: "p",
    classNames: [],
    rect: { width: 200, height: 40, x: 0, y: 0 },
    inFirstViewport: true,
    fontFamily: "Inter, sans-serif",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
    letterSpacing: "0px",
    fontFeatureSettings: "normal",
    fontVariationSettings: "normal",
    textTransform: "none",
    fontVariantNumeric: "normal",
    color: "rgb(0, 0, 0)",
    colorSrgb: "rgb(0, 0, 0)",
    backgroundColor: "rgba(0,0,0,0)",
    backgroundColorSrgb: null,
    ancestorBackground: "rgb(255, 255, 255)",
    ancestorBackgroundSrgb: "rgb(255, 255, 255)",
    borderRadius: "0px",
    borderTopColor: "rgba(0,0,0,0)",
    borderTopColorSrgb: null,
    borderTopWidth: "0px",
    paddingTop: "0px",
    paddingRight: "0px",
    paddingBottom: "0px",
    paddingLeft: "0px",
    gap: "0px",
    ...over,
  });

  it("font-size でクラスタを作り、大きい順に並べる", () => {
    const out = clusterTypography(
      [
        baseObs({ tag: "p", fontSize: "16px" }),
        baseObs({ tag: "p", fontSize: "16px" }),
        baseObs({ tag: "h1", fontSize: "64px", rect: { width: 800, height: 80, x: 0, y: 100 } }),
      ],
    );
    expect(out[0].cluster_size).toBe("64px");
    expect(out[1].cluster_size).toBe("16px");
  });

  it("display サイズでは first-viewport 外を除外する", () => {
    const out = clusterTypography(
      [
        // 64px だが viewport 外 + 面積ゼロ → display 候補から弾かれる
        baseObs({
          tag: "h1",
          fontSize: "64px",
          rect: { width: 0, height: 0, x: -9999, y: -9999 },
          inFirstViewport: false,
        }),
        // 32px の通常要素
        baseObs({
          tag: "h2",
          fontSize: "32px",
          rect: { width: 200, height: 40, x: 0, y: 100 },
          inFirstViewport: true,
        }),
      ],
    );
    expect(out.find((c) => c.cluster_size === "32px")).toBeDefined();
  });

  it("空入力には空配列を返す", () => {
    expect(clusterTypography([])).toEqual([]);
  });
});

describe("aggregateRadius", () => {
  it("0px は semantic_hint=none を付ける", () => {
    const out = aggregateRadius(["0px", "0px", "4px"]);
    const zero = out.find((r) => r.value === "0px");
    expect(zero?.semantic_hint).toBe("none");
  });

  it("9999px は pill ヒント", () => {
    const out = aggregateRadius(["9999px"]);
    expect(out[0].semantic_hint).toBe("pill");
  });

  it("値の昇順にソートされる", () => {
    const out = aggregateRadius(["16px", "4px", "8px"]);
    expect(out.map((r) => r.value)).toEqual(["4px", "8px", "16px"]);
  });
});

describe("pickNearestExemplars", () => {
  const files = [
    "japanese-corporate/smarthr.md",
    "japanese-editorial/note.md",
    "japanese-consumer/mercari.md",
    "warm/claude.md",
    "warm/mercury.md",
    "remix/linear-x-claude.md",
    "editorial/linear.md",
  ];

  it("hostname 完全一致のファイルを最優先する", () => {
    const out = pickNearestExemplars({
      hostname: "note.com",
      isCjk: true,
      availableFiles: files,
    });
    expect(out[0]).toBe("japanese-editorial/note.md");
  });

  it("CJK サイトでは japanese-* が優先される", () => {
    const out = pickNearestExemplars({
      hostname: "unknown.jp",
      isCjk: true,
      availableFiles: files,
      limit: 3,
    });
    expect(out.every((f) => f.startsWith("japanese-"))).toBe(true);
  });

  it("非 CJK サイトでは japanese-* 以外が優先される", () => {
    const out = pickNearestExemplars({
      hostname: "claude.ai",
      isCjk: false,
      availableFiles: files,
    });
    expect(out[0]).toBe("warm/claude.md");
  });

  it("limit を尊重する", () => {
    const out = pickNearestExemplars({
      hostname: "any",
      isCjk: false,
      availableFiles: files,
      limit: 2,
    });
    expect(out).toHaveLength(2);
  });
});

describe("formatObservedYaml", () => {
  const minimal: ObservedYaml = {
    url: "https://example.com",
    source: "url",
    extracted_at: "2026-04-28T00:00:00.000Z",
    viewport: "1280x800",
    custom_properties: { "--brand": "#ff0066" },
    custom_properties_srgb: { "--brand": "#ff0066" },
    colors: {
      bg_of_body: {
        value: "rgb(255, 255, 255)",
        srgb: "rgb(255, 255, 255)",
        srgb_hex: "#ffffff",
      },
      text_on_canvas: [
        {
          value: "rgb(0, 0, 0)",
          srgb: "rgb(0, 0, 0)",
          srgb_hex: "#000000",
          count: 10,
          samples: ["p", "h1"],
        },
      ],
      text_on_non_canvas: [],
      button_backgrounds: [],
      link_colors: [],
      border_colors: [],
    },
    typography: [
      {
        cluster_size: "64px",
        font_family: "Inter",
        font_weight: "700",
        line_height: "1.05",
        letter_spacing: "-1.5px",
        font_feature_settings: "normal",
        text_transform: "none",
        font_variant_numeric: "normal",
        samples: ["h1.hero"],
        in_first_viewport: true,
        avg_area_px2: 12345,
        count: 1,
      },
    ],
    radius_observed: [{ value: "0px", count: 5, semantic_hint: "none" }],
    spacing_observed: { paddings_clustered: ["0px", "16px"], gaps: ["8px"] },
    fonts_resolved: ["Inter"],
    is_cjk: false,
    is_cjk_signals: {
      font_loaded: false,
      lang_attr: false,
      og_locale: null,
      tld_jp: false,
      font_chain_jp: false,
    },
    exemplar_hints: ["editorial/linear.md"],
    warnings: ["test warning"],
  };

  it("YAML として valid な構造を出力する（key スマッチ）", () => {
    const out = formatObservedYaml(minimal);
    expect(out).toContain('url: "https://example.com"');
    expect(out).toContain("source: url");
    expect(out).toContain('viewport: 1280x800');
    expect(out).toContain('"--brand": "#ff0066"');
    expect(out).toContain("custom_properties_srgb:");
    expect(out).toContain("  bg_of_body:");
    expect(out).toContain('    value: "rgb(255, 255, 255)"');
    expect(out).toContain('    srgb_hex: "#ffffff"');
    expect(out).toContain('      srgb_hex: "#000000"');
    expect(out).toContain('cluster_size: "64px"');
    expect(out).toContain('value: "0px", count: 5, semantic_hint: "none"');
    expect(out).toContain('paddings_clustered: ["0px", "16px"]');
    expect(out).toContain("is_cjk: false");
    expect(out).toContain("is_cjk_signals:");
    expect(out).toContain("  font_loaded: false");
    expect(out).toContain("  og_locale: null");
    expect(out).toContain("exemplar_hints:");
    expect(out).toContain('  - "editorial/linear.md"');
    expect(out).toContain('  - "test warning"');
  });

  it("空配列は [] / 空オブジェクトは {} で出る", () => {
    const empty: ObservedYaml = {
      ...minimal,
      custom_properties_srgb: {},
      typography: [],
      fonts_resolved: [],
      exemplar_hints: [],
      warnings: [],
      radius_observed: [],
    };
    const out = formatObservedYaml(empty);
    expect(out).toContain("typography:\n  []");
    expect(out).toContain("fonts_resolved:\n  []");
    expect(out).toContain("custom_properties_srgb:\n  {}");
  });

  it("ダブルクオートを正しくエスケープする", () => {
    const escaped: ObservedYaml = {
      ...minimal,
      warnings: ['She said "hi"'],
    };
    const out = formatObservedYaml(escaped);
    expect(out).toContain('"She said \\"hi\\""');
  });

  it("srgb / srgb_hex が null のときは null リテラルで出る", () => {
    const withNulls: ObservedYaml = {
      ...minimal,
      colors: {
        ...minimal.colors,
        bg_of_body: { value: "transparent", srgb: null, srgb_hex: null },
        text_on_canvas: [
          {
            value: "transparent",
            srgb: null,
            srgb_hex: null,
            count: 1,
            samples: ["p"],
          },
        ],
      },
      is_cjk: true,
      is_cjk_signals: {
        ...minimal.is_cjk_signals,
        og_locale: "ja_JP",
        lang_attr: true,
      },
    };
    const out = formatObservedYaml(withNulls);
    expect(out).toContain("    srgb: null");
    expect(out).toContain("    srgb_hex: null");
    expect(out).toContain('  og_locale: "ja_JP"');
    expect(out).toContain("  lang_attr: true");
  });
});

describe("parseArgs", () => {
  it("URL のみ指定", () => {
    expect(parseArgs(["https://example.com"]).url).toBe("https://example.com");
  });

  it("--from-html を解釈", () => {
    const o = parseArgs(["--from-html", "saved.html"]);
    expect(o.fromHtmlPath).toBe("saved.html");
    expect(o.url).toBeUndefined();
  });

  it("--viewport を WxH で解釈", () => {
    const o = parseArgs(["https://x", "--viewport", "1440x900"]);
    expect(o.viewport).toEqual({ width: 1440, height: 900 });
  });

  it("不正な --viewport は throw", () => {
    expect(() => parseArgs(["--viewport", "1440-900"])).toThrow();
  });

  it("--slug / --output を解釈", () => {
    const o = parseArgs(["https://x", "--slug", "foo", "--output", "/tmp/bar"]);
    expect(o.slug).toBe("foo");
    expect(o.outputBaseDir).toBe("/tmp/bar");
  });

  it("--help を _help=true にする", () => {
    expect(parseArgs(["--help"])._help).toBe(true);
  });

  it("未知のオプションは throw", () => {
    expect(() => parseArgs(["--nope"])).toThrow();
  });
});
