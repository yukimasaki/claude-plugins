import crypto from "node:crypto";
import { promises as fs } from "node:fs";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { globby } from "globby";
import { simpleGit } from "simple-git";

export type UpstreamRepo = "getdesign-md" | "open-codesign";

export type FileMapping = {
  upstreamGlob: string;
  toLocalPath: (upstreamRelPath: string) => string;
  excludePatterns?: string[];
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
    // 19 サイト: rohitg00 由来 35 サイトのうち getdesign.md カタログに存在する分。
    // 残り 16 サイト（8 単体ブランド + 8 remix）は getdesign.md に無いため
    // 本 PR では自前で DESIGN.md 公式仕様に手動変換し、ここでは追跡しない。
    // 後続 PR #2-2 で 24 件追加予定（合計 43 エントリ）。
    vendoredToUpstream: {
      "design-md/warm/claude.md": "design-md/claude/DESIGN.md",
      "design-md/editorial/linear.md": "design-md/linear.app/DESIGN.md",
      "design-md/editorial/vercel.md": "design-md/vercel/DESIGN.md",
      "design-md/data-dense/mongodb.md": "design-md/mongodb/DESIGN.md",
      "design-md/data-dense/clickhouse.md": "design-md/clickhouse/DESIGN.md",
      "design-md/data-dense/posthog.md": "design-md/posthog/DESIGN.md",
      "design-md/cinematic/bmw.md": "design-md/bmw/DESIGN.md",
      "design-md/cinematic/cohere.md": "design-md/cohere/DESIGN.md",
      "design-md/cinematic/ferrari.md": "design-md/ferrari/DESIGN.md",
      "design-md/cinematic/lamborghini.md": "design-md/lamborghini/DESIGN.md",
      "design-md/cinematic/minimax.md": "design-md/minimax/DESIGN.md",
      "design-md/cinematic/nvidia.md": "design-md/nvidia/DESIGN.md",
      "design-md/cinematic/renault.md": "design-md/renault/DESIGN.md",
      "design-md/cinematic/runway.md": "design-md/runwayml/DESIGN.md",
      "design-md/playful/figma.md": "design-md/figma/DESIGN.md",
      "design-md/glass/apple.md": "design-md/apple/DESIGN.md",
      "design-md/terminal/ollama.md": "design-md/ollama/DESIGN.md",
      "design-md/terminal/opencode.md": "design-md/opencode.ai/DESIGN.md",
      "design-md/terminal/warp.md": "design-md/warp/DESIGN.md",
    },
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
      const buf = await fs.readFile(path.join(repoDir, match));
      result.push({
        upstreamPath: match,
        localPath: mapping.toLocalPath(match),
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
    const sample = m.toLocalPath(
      m.upstreamGlob.replace(/\*\*?/g, "x").replace(/\*/g, "x"),
    );
    const prefix = sample.split(path.sep)[0];
    if (prefix) localPathPrefixes.add(prefix);
  }

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
  return value === "getdesign-md" || value === "open-codesign";
}

function printUsage(): void {
  process.stderr.write(
    [
      "usage: check-diff-upstream [repo]",
      "",
      "  repo (省略時は全 upstream を順に検査):",
      "    getdesign-md  (https://getdesign.md — DESIGN.md 公式仕様カタログ、HTTP fetch ベース)",
      "    open-codesign (OpenCoworkAI/open-codesign — prompts / design-skills / builtin-skills、git clone ベース)",
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
