import crypto from "node:crypto";
import { promises as fs } from "node:fs";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { globby } from "globby";
import { simpleGit } from "simple-git";

export type UpstreamRepo = "awesome-claude-design" | "open-codesign";

export type FileMapping = {
  upstreamGlob: string;
  toLocalPath: (upstreamRelPath: string) => string;
  excludePatterns?: string[];
};

export type RepoConfig = {
  url: string;
  mappings: FileMapping[];
};

export const REPOS: Record<UpstreamRepo, RepoConfig> = {
  "awesome-claude-design": {
    url: "https://github.com/rohitg00/awesome-claude-design.git",
    mappings: [
      {
        upstreamGlob: "design-md/**/*.md",
        toLocalPath: (p) => p,
      },
      {
        upstreamGlob: "prompts/*.md",
        toLocalPath: (p) => `prompt-packs/${path.basename(p)}`,
        excludePatterns: ["prompts/README.md"],
      },
      {
        upstreamGlob: "recipes/*.md",
        toLocalPath: (p) => p,
      },
    ],
  },
  "open-codesign": {
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

export async function enumerateUpstreamFiles(
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

export async function enumerateVendoredFiles(
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

export function formatSummary(
  repo: UpstreamRepo,
  headSha: string,
  diff: DiffEntry[],
): string {
  const config = REPOS[repo];
  const categories: Record<DiffEntry["kind"], DiffEntry[]> = {
    new: [],
    changed: [],
    deleted: [],
    unchanged: [],
  };
  for (const entry of diff) categories[entry.kind].push(entry);

  const lines: string[] = [];
  lines.push(`# upstream diff — ${repo}`, "");
  lines.push(`- url: ${config.url}`);
  lines.push(`- head commit: ${headSha}`);
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

  return lines.join("\n");
}

export type CheckRepoOptions = {
  repo: UpstreamRepo;
  upstreamUrl?: string;
  vendoredRoot?: string;
};

export type CheckRepoResult = {
  summaryMarkdown: string;
  diff: DiffEntry[];
  headSha: string;
};

export async function checkRepo(
  opts: CheckRepoOptions,
): Promise<CheckRepoResult> {
  const config = REPOS[opts.repo];
  const upstreamUrl = opts.upstreamUrl ?? config.url;
  const vendoredRoot = opts.vendoredRoot ?? VENDORED_ROOT;

  const cloneDir = await mkdtemp(
    path.join(tmpdir(), `claude-plugins-upstream-${opts.repo}-`),
  );
  try {
    await simpleGit().clone(upstreamUrl, cloneDir, ["--depth", "1"]);
    const headSha = (await simpleGit(cloneDir).revparse(["HEAD"])).trim();

    const upstream = await enumerateUpstreamFiles(cloneDir, config.mappings);
    const vendored = await enumerateVendoredFiles(vendoredRoot, config.mappings);
    const diff = computeDiff(vendored, upstream);
    const summaryMarkdown = formatSummary(opts.repo, headSha, diff);

    return { summaryMarkdown, diff, headSha };
  } finally {
    await rm(cloneDir, { recursive: true, force: true });
  }
}

function isUpstreamRepo(value: string): value is UpstreamRepo {
  return value === "awesome-claude-design" || value === "open-codesign";
}

function printUsage(): void {
  process.stderr.write(
    [
      "usage: check-diff-upstream [repo]",
      "",
      "  repo (省略時は全 upstream を順に検査):",
      "    awesome-claude-design",
      "    open-codesign",
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
