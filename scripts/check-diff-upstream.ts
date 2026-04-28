import crypto from "node:crypto";
import { promises as fs } from "node:fs";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { globby } from "globby";
import { simpleGit } from "simple-git";

export type UpstreamRepo =
  | "getdesign-md"
  | "awesome-design-md-jp"
  | "open-codesign";

export type FileMapping = {
  upstreamGlob: string;
  /**
   * upstream の相対パスを vendored 上のローカルパスに変換する。
   * `null` を返すと「このファイルは取り込み対象外」として skip する
   * （familyMap で限定取り込みする場合等に使う）。
   */
  toLocalPath: (upstreamRelPath: string) => string | null;
  excludePatterns?: string[];
  /**
   * vendored 側のスキャン起点ディレクトリ。`toLocalPath` がサンプル入力で
   * null を返すケース（familyMap 等）では prefix を自動推定できないため
   * 明示指定が必要。未指定なら upstreamGlob/toLocalPath から自動推定する。
   */
  vendoredPrefix?: string;
  /**
   * vendored 側のうち、本 mapping が「所有」する localPath を判定する。
   * 指定すると enumerateVendoredFiles の deletion 検出が本セットに限定され、
   * 別 upstream / 自前メンテのファイルを deleted と誤判定しない。
   * 未指定なら vendoredPrefix 配下の全ファイルを所有とみなす。
   */
  claimsVendoredPath?: (localPath: string) => boolean;
};

/**
 * kzhrknt/awesome-design-md-jp（25 サイト、日本企業）を rohitg00 流の
 * family 体系に振り分ける表。本リポでは欧米中心の 10 family に加えて
 * 日本市場向け 4 family（japanese-corporate / japanese-consumer /
 * japanese-editorial / japanese-creative）を新設し、JP サイトはそちらに
 * 配置する。
 */
export const KZHRKNT_FAMILY_MAP: Record<string, string> = {
  // japanese-corporate (7)
  smarthr: "japanese-corporate",
  freee: "japanese-corporate",
  moneyforward: "japanese-corporate",
  cybozu: "japanese-corporate",
  sansan: "japanese-corporate",
  toyota: "japanese-corporate",
  mec: "japanese-corporate",
  // japanese-consumer (9)
  apple: "japanese-consumer",
  muji: "japanese-consumer",
  mercari: "japanese-consumer",
  cookpad: "japanese-consumer",
  tabelog: "japanese-consumer",
  rakuten: "japanese-consumer",
  pixiv: "japanese-consumer",
  abema: "japanese-consumer",
  line: "japanese-consumer",
  // japanese-editorial (5)
  note: "japanese-editorial",
  qiita: "japanese-editorial",
  zenn: "japanese-editorial",
  connpass: "japanese-editorial",
  wired: "japanese-editorial",
  // japanese-creative (4)
  studio: "japanese-creative",
  droga5: "japanese-creative",
  notion: "japanese-creative",
  novasell: "japanese-creative",
};

export type GitRepoConfig = {
  kind: "git";
  url: string;
  mappings: FileMapping[];
};

export type HttpRepoConfig = {
  kind: "http";
  baseUrl: string;
  /**
   * vendored 上の localPath → upstream の相対パスへのマッピング。
   * このレコードのキーが「監視対象 vendored ファイル」を兼ねる。
   * vendored 側にあってマップに無い localPath は本 upstream の関心外
   * （別 upstream 由来 or 自前メンテ）として deletion 検出から除外する。
   */
  vendoredToUpstream: Record<string, string>;
};

export type RepoConfig = GitRepoConfig | HttpRepoConfig;

export const REPOS: Record<UpstreamRepo, RepoConfig> = {
  "getdesign-md": {
    kind: "http",
    baseUrl: "https://getdesign.md",
    // 70 サイト: getdesign.md カタログ全件をカバー（sitemap.xml 起源、2026-04-28 時点）。
    // family 分類はメンテナの主観判断で rohitg00 流の 10 family に振り分け。
    // 別途 16 サイト（8 単体 + 8 remix、getdesign.md に無いもの）は自前変換で
    // vendor 済み（design-md/{family}/{slug}.md 形式、本マップには含めない）。
    //
    // 形式状況（Issue #31 / PR #34 時点）:
    // - 12 サイト（airbnb / airtable / apple / binance / bmw / bmw-m / bugatti /
    //   cal / claude / clay / clickhouse / cohere）は upstream 自身が公式仕様
    //   配信、本リポジトリは無改変 vendor → 本スクリプトで「変更なし」報告
    // - 残り 58 サイトは upstream の legacy prose を本リポジトリで公式仕様
    //   （frontmatter YAML + Markdown body）に再構成済み → 本スクリプトで
    //   「変更」報告（drift 永続化、upstream の追加 migration 待ちで再追従可）
    vendoredToUpstream: {
      // warm (3)
      "design-md/warm/claude.md": "design-md/claude/DESIGN.md",
      "design-md/warm/coinbase.md": "design-md/coinbase/DESIGN.md",
      "design-md/warm/uber.md": "design-md/uber/DESIGN.md",
      // editorial (14)
      "design-md/editorial/cal.md": "design-md/cal/DESIGN.md",
      "design-md/editorial/ibm.md": "design-md/ibm/DESIGN.md",
      "design-md/editorial/kraken.md": "design-md/kraken/DESIGN.md",
      "design-md/editorial/linear.md": "design-md/linear.app/DESIGN.md",
      "design-md/editorial/mintlify.md": "design-md/mintlify/DESIGN.md",
      "design-md/editorial/mistral.md": "design-md/mistral.ai/DESIGN.md",
      "design-md/editorial/revolut.md": "design-md/revolut/DESIGN.md",
      "design-md/editorial/sanity.md": "design-md/sanity/DESIGN.md",
      "design-md/editorial/stripe.md": "design-md/stripe/DESIGN.md",
      "design-md/editorial/superhuman.md": "design-md/superhuman/DESIGN.md",
      "design-md/editorial/vercel.md": "design-md/vercel/DESIGN.md",
      "design-md/editorial/vodafone.md": "design-md/vodafone/DESIGN.md",
      "design-md/editorial/wise.md": "design-md/wise/DESIGN.md",
      "design-md/editorial/x.md": "design-md/x.ai/DESIGN.md",
      // data-dense (8)
      "design-md/data-dense/airtable.md": "design-md/airtable/DESIGN.md",
      "design-md/data-dense/clay.md": "design-md/clay/DESIGN.md",
      "design-md/data-dense/clickhouse.md": "design-md/clickhouse/DESIGN.md",
      "design-md/data-dense/hashicorp.md": "design-md/hashicorp/DESIGN.md",
      "design-md/data-dense/meta.md": "design-md/meta/DESIGN.md",
      "design-md/data-dense/mongodb.md": "design-md/mongodb/DESIGN.md",
      "design-md/data-dense/posthog.md": "design-md/posthog/DESIGN.md",
      "design-md/data-dense/sentry.md": "design-md/sentry/DESIGN.md",
      // cinematic (16)
      "design-md/cinematic/bmw.md": "design-md/bmw/DESIGN.md",
      "design-md/cinematic/bmw-m.md": "design-md/bmw-m/DESIGN.md",
      "design-md/cinematic/bugatti.md": "design-md/bugatti/DESIGN.md",
      "design-md/cinematic/cohere.md": "design-md/cohere/DESIGN.md",
      "design-md/cinematic/elevenlabs.md": "design-md/elevenlabs/DESIGN.md",
      "design-md/cinematic/ferrari.md": "design-md/ferrari/DESIGN.md",
      "design-md/cinematic/lamborghini.md": "design-md/lamborghini/DESIGN.md",
      "design-md/cinematic/minimax.md": "design-md/minimax/DESIGN.md",
      "design-md/cinematic/nike.md": "design-md/nike/DESIGN.md",
      "design-md/cinematic/nvidia.md": "design-md/nvidia/DESIGN.md",
      "design-md/cinematic/playstation.md": "design-md/playstation/DESIGN.md",
      "design-md/cinematic/renault.md": "design-md/renault/DESIGN.md",
      "design-md/cinematic/runway.md": "design-md/runwayml/DESIGN.md",
      "design-md/cinematic/spacex.md": "design-md/spacex/DESIGN.md",
      "design-md/cinematic/spotify.md": "design-md/spotify/DESIGN.md",
      "design-md/cinematic/tesla.md": "design-md/tesla/DESIGN.md",
      // playful (9)
      "design-md/playful/airbnb.md": "design-md/airbnb/DESIGN.md",
      "design-md/playful/expo.md": "design-md/expo/DESIGN.md",
      "design-md/playful/figma.md": "design-md/figma/DESIGN.md",
      "design-md/playful/framer.md": "design-md/framer/DESIGN.md",
      "design-md/playful/intercom.md": "design-md/intercom/DESIGN.md",
      "design-md/playful/miro.md": "design-md/miro/DESIGN.md",
      "design-md/playful/pinterest.md": "design-md/pinterest/DESIGN.md",
      "design-md/playful/shopify.md": "design-md/shopify/DESIGN.md",
      "design-md/playful/zapier.md": "design-md/zapier/DESIGN.md",
      // glass (5)
      "design-md/glass/apple.md": "design-md/apple/DESIGN.md",
      "design-md/glass/lovable.md": "design-md/lovable/DESIGN.md",
      "design-md/glass/mastercard.md": "design-md/mastercard/DESIGN.md",
      "design-md/glass/notion.md": "design-md/notion/DESIGN.md",
      "design-md/glass/starbucks.md": "design-md/starbucks/DESIGN.md",
      // brutalist (3)
      "design-md/brutalist/binance.md": "design-md/binance/DESIGN.md",
      "design-md/brutalist/the-verge.md": "design-md/theverge/DESIGN.md",
      "design-md/brutalist/wired.md": "design-md/wired/DESIGN.md",
      // indie (3)
      "design-md/indie/composio.md": "design-md/composio/DESIGN.md",
      "design-md/indie/resend.md": "design-md/resend/DESIGN.md",
      "design-md/indie/webflow.md": "design-md/webflow/DESIGN.md",
      // terminal (9)
      "design-md/terminal/cursor.md": "design-md/cursor/DESIGN.md",
      "design-md/terminal/ollama.md": "design-md/ollama/DESIGN.md",
      "design-md/terminal/opencode.md": "design-md/opencode.ai/DESIGN.md",
      "design-md/terminal/raycast.md": "design-md/raycast/DESIGN.md",
      "design-md/terminal/replicate.md": "design-md/replicate/DESIGN.md",
      "design-md/terminal/supabase.md": "design-md/supabase/DESIGN.md",
      "design-md/terminal/together.md": "design-md/together.ai/DESIGN.md",
      "design-md/terminal/voltagent.md": "design-md/voltagent/DESIGN.md",
      "design-md/terminal/warp.md": "design-md/warp/DESIGN.md",
    },
  },
  "awesome-design-md-jp": {
    kind: "git",
    url: "https://github.com/kzhrknt/awesome-design-md-jp.git",
    mappings: [
      {
        // upstream は `design-md/{site}/DESIGN.md` のフラット構造（25 サイト）。
        // KZHRKNT_FAMILY_MAP に登録されたサイトのみ取り込み、未登録は null で skip。
        // 配置先は本リポ独自の japanese-* 4 family（rohitg00 体系の延長）。
        upstreamGlob: "design-md/*/DESIGN.md",
        toLocalPath: (p) => {
          const segments = p.split("/");
          const site = segments[1];
          if (!site) return null;
          const family = KZHRKNT_FAMILY_MAP[site];
          if (!family) return null;
          return `design-md/${family}/${site}.md`;
        },
        vendoredPrefix: "design-md",
        claimsVendoredPath: (p) => {
          // 期待形式: design-md/japanese-{family}/{site}.md
          const m = p.match(/^design-md\/(japanese-[^/]+)\/(.+)\.md$/);
          if (!m) return false;
          return KZHRKNT_FAMILY_MAP[m[2]] === m[1];
        },
      },
    ],
  },
  "open-codesign": {
    kind: "git",
    url: "https://github.com/OpenCoworkAI/open-codesign.git",
    mappings: [
      {
        upstreamGlob: "packages/core/src/prompts/*.txt",
        toLocalPath: (p) => `prompts/${path.basename(p)}`,
      },
      {
        upstreamGlob: "packages/core/src/design-skills/*.jsx",
        toLocalPath: (p) => `design-skills/${path.basename(p)}`,
      },
      {
        upstreamGlob: "packages/core/src/skills/builtin/*.md",
        toLocalPath: (p) => `builtin-skills/${path.basename(p)}`,
      },
    ],
  },
};

export const VENDORED_ROOT = path.join(
  "plugins",
  "design-director",
  "skills",
  "design-director",
  "references",
);

export type UpstreamFile = {
  upstreamPath: string;
  localPath: string;
  hash: string;
};

export type DiffEntry =
  | { kind: "new"; localPath: string; upstreamPath: string; hash: string }
  | {
      kind: "changed";
      localPath: string;
      upstreamPath: string;
      vendoredHash: string;
      upstreamHash: string;
    }
  | { kind: "unchanged"; localPath: string; upstreamPath: string; hash: string }
  | {
      kind: "deleted";
      localPath: string;
      vendoredHash: string;
    };

export function computeHash(content: Buffer | string): string {
  return crypto.createHash("sha256").update(content).digest("hex");
}

export async function enumerateUpstreamFilesGit(
  repoDir: string,
  mappings: FileMapping[],
): Promise<UpstreamFile[]> {
  const seen = new Set<string>();
  const result: UpstreamFile[] = [];
  for (const mapping of mappings) {
    const matches = await globby(mapping.upstreamGlob, {
      cwd: repoDir,
      onlyFiles: true,
      dot: false,
      ignore: mapping.excludePatterns,
    });
    for (const match of matches) {
      if (seen.has(match)) continue;
      seen.add(match);
      const localPath = mapping.toLocalPath(match);
      if (localPath === null) continue;
      const buf = await fs.readFile(path.join(repoDir, match));
      result.push({
        upstreamPath: match,
        localPath,
        hash: computeHash(buf),
      });
    }
  }
  result.sort((a, b) => a.localPath.localeCompare(b.localPath));
  return result;
}

/** @deprecated 後方互換のため残置。新規コードは enumerateUpstreamFilesGit を使う */
export const enumerateUpstreamFiles = enumerateUpstreamFilesGit;

export type HttpFetcher = (url: string) => Promise<HttpFetchResult>;

export type HttpFetchResult =
  | { ok: true; body: Buffer }
  | { ok: false; status: number; reason: string };

const defaultHttpFetcher: HttpFetcher = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      return { ok: false, status: res.status, reason: res.statusText };
    }
    const arrayBuffer = await res.arrayBuffer();
    return { ok: true, body: Buffer.from(arrayBuffer) };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { ok: false, status: 0, reason: message };
  }
};

export type HttpEnumerateOptions = {
  baseUrl: string;
  vendoredToUpstream: Record<string, string>;
  fetcher?: HttpFetcher;
};

export type HttpEnumerateResult = {
  files: UpstreamFile[];
  /** fetch に失敗した localPath とエラー情報（404 / network error 等） */
  failures: { localPath: string; upstreamPath: string; reason: string }[];
};

export async function enumerateUpstreamFilesHttp(
  opts: HttpEnumerateOptions,
): Promise<HttpEnumerateResult> {
  const fetcher = opts.fetcher ?? defaultHttpFetcher;
  const files: UpstreamFile[] = [];
  const failures: HttpEnumerateResult["failures"] = [];

  const entries = Object.entries(opts.vendoredToUpstream).sort(([a], [b]) =>
    a.localeCompare(b),
  );

  for (const [localPath, upstreamPath] of entries) {
    const url = joinUrl(opts.baseUrl, upstreamPath);
    const res = await fetcher(url);
    if (!res.ok) {
      failures.push({
        localPath,
        upstreamPath,
        reason: `HTTP ${res.status} (${res.reason})`,
      });
      continue;
    }
    files.push({
      upstreamPath,
      localPath,
      hash: computeHash(res.body),
    });
  }

  return { files, failures };
}

function joinUrl(baseUrl: string, relPath: string): string {
  const trimmedBase = baseUrl.replace(/\/+$/, "");
  const trimmedPath = relPath.replace(/^\/+/, "");
  return `${trimmedBase}/${trimmedPath}`;
}

export async function enumerateVendoredFilesGit(
  vendoredRoot: string,
  mappings: FileMapping[],
): Promise<Map<string, string>> {
  const localPathPrefixes = new Set<string>();
  for (const m of mappings) {
    if (m.vendoredPrefix) {
      localPathPrefixes.add(m.vendoredPrefix);
      continue;
    }
    const sample = m.toLocalPath(
      m.upstreamGlob.replace(/\*\*?/g, "x").replace(/\*/g, "x"),
    );
    if (!sample) continue;
    const prefix = sample.split(path.sep)[0];
    if (prefix) localPathPrefixes.add(prefix);
  }

  // 各 mapping の claimsVendoredPath が指定されていれば、本 mapping が claim
  // する localPath だけ採用する。未指定なら全ファイル採用（後方互換）。
  const claims: ((localPath: string) => boolean)[] = mappings
    .map((m) => m.claimsVendoredPath)
    .filter((c): c is (localPath: string) => boolean => Boolean(c));
  const hasClaims = claims.length > 0;
  const isClaimed = (localPath: string): boolean =>
    !hasClaims || claims.some((c) => c(localPath));

  const result = new Map<string, string>();
  for (const prefix of localPathPrefixes) {
    const dir = path.join(vendoredRoot, prefix);
    let exists = false;
    try {
      const stat = await fs.stat(dir);
      exists = stat.isDirectory();
    } catch {
      exists = false;
    }
    if (!exists) continue;
    const matches = await globby("**/*", {
      cwd: dir,
      onlyFiles: true,
      dot: false,
    });
    for (const match of matches) {
      const localPath = path.join(prefix, match).split(path.sep).join("/");
      if (!isClaimed(localPath)) continue;
      const buf = await fs.readFile(path.join(dir, match));
      result.set(localPath, computeHash(buf));
    }
  }
  return result;
}

/** @deprecated 後方互換のため残置。新規コードは enumerateVendoredFilesGit を使う */
export const enumerateVendoredFiles = enumerateVendoredFilesGit;

/**
 * HTTP 版の vendored 列挙: vendoredToUpstream のキーセットだけを対象にする。
 * これにより別 upstream 由来 / 自前メンテのファイルが deletion と誤検知されない。
 */
export async function enumerateVendoredFilesHttp(
  vendoredRoot: string,
  vendoredToUpstream: Record<string, string>,
): Promise<Map<string, string>> {
  const result = new Map<string, string>();
  for (const localPath of Object.keys(vendoredToUpstream)) {
    const full = path.join(vendoredRoot, localPath);
    let buf: Buffer;
    try {
      buf = await fs.readFile(full);
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code === "ENOENT") continue;
      throw err;
    }
    result.set(localPath, computeHash(buf));
  }
  return result;
}

export function computeDiff(
  vendored: Map<string, string>,
  upstream: UpstreamFile[],
): DiffEntry[] {
  const entries: DiffEntry[] = [];
  const upstreamByLocalPath = new Map(upstream.map((f) => [f.localPath, f]));

  for (const file of upstream) {
    const vendoredHash = vendored.get(file.localPath);
    if (vendoredHash === undefined) {
      entries.push({
        kind: "new",
        localPath: file.localPath,
        upstreamPath: file.upstreamPath,
        hash: file.hash,
      });
    } else if (vendoredHash === file.hash) {
      entries.push({
        kind: "unchanged",
        localPath: file.localPath,
        upstreamPath: file.upstreamPath,
        hash: file.hash,
      });
    } else {
      entries.push({
        kind: "changed",
        localPath: file.localPath,
        upstreamPath: file.upstreamPath,
        vendoredHash,
        upstreamHash: file.hash,
      });
    }
  }

  for (const [localPath, vendoredHash] of vendored) {
    if (!upstreamByLocalPath.has(localPath)) {
      entries.push({
        kind: "deleted",
        localPath,
        vendoredHash,
      });
    }
  }

  entries.sort((a, b) => {
    const order = { new: 0, changed: 1, deleted: 2, unchanged: 3 } as const;
    if (order[a.kind] !== order[b.kind]) return order[a.kind] - order[b.kind];
    return a.localPath.localeCompare(b.localPath);
  });
  return entries;
}

export type SummarySource =
  | { kind: "git"; url: string; headSha: string }
  | { kind: "http"; baseUrl: string; failures: HttpEnumerateResult["failures"] };

export function formatSummary(
  repo: UpstreamRepo,
  source: SummarySource,
  diff: DiffEntry[],
): string {
  const categories: Record<DiffEntry["kind"], DiffEntry[]> = {
    new: [],
    changed: [],
    deleted: [],
    unchanged: [],
  };
  for (const entry of diff) categories[entry.kind].push(entry);

  const lines: string[] = [];
  lines.push(`# upstream diff — ${repo}`, "");
  if (source.kind === "git") {
    lines.push(`- url: ${source.url}`);
    lines.push(`- head commit: ${source.headSha}`);
  } else {
    lines.push(`- base url: ${source.baseUrl}`);
  }
  lines.push(`- checked at: ${new Date().toISOString()}`, "");

  lines.push(`## 新規 (${categories.new.length})`);
  for (const e of categories.new) {
    if (e.kind !== "new") continue;
    lines.push(
      `- ${e.localPath} ← ${e.upstreamPath} (sha256: ${e.hash.slice(0, 12)}…)`,
    );
  }
  if (categories.new.length === 0) lines.push("（なし）");
  lines.push("");

  lines.push(`## 変更 (${categories.changed.length})`);
  for (const e of categories.changed) {
    if (e.kind !== "changed") continue;
    lines.push(
      `- ${e.localPath} ← ${e.upstreamPath}`,
      `  vendored: ${e.vendoredHash.slice(0, 12)}… / upstream: ${e.upstreamHash.slice(0, 12)}…`,
    );
  }
  if (categories.changed.length === 0) lines.push("（なし）");
  lines.push("");

  lines.push(`## 削除 (${categories.deleted.length})`);
  for (const e of categories.deleted) {
    if (e.kind !== "deleted") continue;
    lines.push(
      `- ${e.localPath} (vendored: ${e.vendoredHash.slice(0, 12)}…, upstream から消失)`,
    );
  }
  if (categories.deleted.length === 0) lines.push("（なし）");
  lines.push("");

  lines.push(`## 変更なし (${categories.unchanged.length})`);
  lines.push(
    `（詳細省略。計 ${categories.unchanged.length} ファイルが SHA256 一致）`,
  );
  lines.push("");

  if (source.kind === "http" && source.failures.length > 0) {
    lines.push(`## fetch 失敗 (${source.failures.length})`);
    for (const f of source.failures) {
      lines.push(`- ${f.localPath} ← ${f.upstreamPath} : ${f.reason}`);
    }
    lines.push("");
  }

  return lines.join("\n");
}

export type CheckRepoOptions = {
  repo: UpstreamRepo;
  vendoredRoot?: string;
  /** HTTP backend の差し替え（テスト用） */
  fetcher?: HttpFetcher;
  /** git backend の clone URL 上書き（テスト用） */
  upstreamUrl?: string;
};

export type CheckRepoResult = {
  summaryMarkdown: string;
  diff: DiffEntry[];
};

export async function checkRepo(
  opts: CheckRepoOptions,
): Promise<CheckRepoResult> {
  const config = REPOS[opts.repo];
  const vendoredRoot = opts.vendoredRoot ?? VENDORED_ROOT;

  if (config.kind === "git") {
    return checkRepoGit(opts.repo, config, vendoredRoot, opts.upstreamUrl);
  }
  return checkRepoHttp(opts.repo, config, vendoredRoot, opts.fetcher);
}

async function checkRepoGit(
  repo: UpstreamRepo,
  config: GitRepoConfig,
  vendoredRoot: string,
  upstreamUrl: string | undefined,
): Promise<CheckRepoResult> {
  const url = upstreamUrl ?? config.url;
  const cloneDir = await mkdtemp(
    path.join(tmpdir(), `claude-plugins-upstream-${repo}-`),
  );
  try {
    await simpleGit().clone(url, cloneDir, ["--depth", "1"]);
    const headSha = (await simpleGit(cloneDir).revparse(["HEAD"])).trim();

    const upstream = await enumerateUpstreamFilesGit(cloneDir, config.mappings);
    const vendored = await enumerateVendoredFilesGit(vendoredRoot, config.mappings);
    const diff = computeDiff(vendored, upstream);
    const summaryMarkdown = formatSummary(
      repo,
      { kind: "git", url, headSha },
      diff,
    );

    return { summaryMarkdown, diff };
  } finally {
    await rm(cloneDir, { recursive: true, force: true });
  }
}

async function checkRepoHttp(
  repo: UpstreamRepo,
  config: HttpRepoConfig,
  vendoredRoot: string,
  fetcher: HttpFetcher | undefined,
): Promise<CheckRepoResult> {
  const { files, failures } = await enumerateUpstreamFilesHttp({
    baseUrl: config.baseUrl,
    vendoredToUpstream: config.vendoredToUpstream,
    fetcher,
  });
  const vendored = await enumerateVendoredFilesHttp(
    vendoredRoot,
    config.vendoredToUpstream,
  );
  const diff = computeDiff(vendored, files);
  const summaryMarkdown = formatSummary(
    repo,
    { kind: "http", baseUrl: config.baseUrl, failures },
    diff,
  );
  return { summaryMarkdown, diff };
}

function isUpstreamRepo(value: string): value is UpstreamRepo {
  return (
    value === "getdesign-md" ||
    value === "awesome-design-md-jp" ||
    value === "open-codesign"
  );
}

function printUsage(): void {
  process.stderr.write(
    [
      "usage: check-diff-upstream [repo]",
      "",
      "  repo (省略時は全 upstream を順に検査):",
      "    getdesign-md         (https://getdesign.md — DESIGN.md 公式仕様カタログ、HTTP fetch ベース)",
      "    awesome-design-md-jp (kzhrknt/awesome-design-md-jp — 日本企業 25 サイト、git clone ベース)",
      "    open-codesign        (OpenCoworkAI/open-codesign — prompts / design-skills / builtin-skills、git clone ベース)",
      "",
    ].join("\n"),
  );
}

export async function main(argv: string[]): Promise<number> {
  const arg = argv[2];
  let repos: UpstreamRepo[];

  if (!arg) {
    repos = Object.keys(REPOS) as UpstreamRepo[];
  } else if (arg === "--help" || arg === "-h") {
    printUsage();
    return 0;
  } else if (isUpstreamRepo(arg)) {
    repos = [arg];
  } else {
    process.stderr.write(`error: 未知の upstream "${arg}"\n\n`);
    printUsage();
    return 1;
  }

  let exitCode = 0;
  for (const repo of repos) {
    try {
      const result = await checkRepo({ repo });
      process.stdout.write(result.summaryMarkdown);
      if (!result.summaryMarkdown.endsWith("\n")) process.stdout.write("\n");
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      process.stderr.write(`error (${repo}): ${message}\n`);
      exitCode = 1;
    }
  }
  return exitCode;
}

function isCliEntry(): boolean {
  const entry = process.argv[1];
  if (!entry) return false;
  return fileURLToPath(import.meta.url) === path.resolve(entry);
}

if (isCliEntry()) {
  main(process.argv).then((code) => {
    process.exit(code);
  });
}
