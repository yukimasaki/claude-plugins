import crypto from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { globby } from "globby";
import { simpleGit } from "simple-git";
import { z } from "zod";

export type UpstreamRepo = "awesome-claude-design" | "open-codesign";

export type FileMapping = {
  upstreamGlob: string;
  toLocalPath: (upstreamRelPath: string) => string;
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
        toLocalPath: (p) => `prompts/${path.basename(p, ".txt")}.v1.txt`,
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

const FileRecordSchema = z.object({
  upstreamPath: z.string(),
  hash: z.string(),
});

const RepoStateSchema = z.object({
  lastSyncedCommit: z.string(),
  lastSyncedAt: z.string(),
  files: z.record(z.string(), FileRecordSchema),
});

export const StateSchema = z.record(z.string(), RepoStateSchema);

export type RepoState = z.infer<typeof RepoStateSchema>;
export type State = z.infer<typeof StateSchema>;

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
      prevHash: string;
      hash: string;
    }
  | { kind: "unchanged"; localPath: string; upstreamPath: string; hash: string }
  | {
      kind: "deleted";
      localPath: string;
      upstreamPath: string;
      prevHash: string;
    };

export type RunSyncOptions = {
  repo: UpstreamRepo;
  upstreamUrl?: string;
  cacheDir?: string;
  stateFile?: string;
  targetRoot?: string;
};

export type RunSyncResult = {
  summaryMarkdown: string;
  diff: DiffEntry[];
};

export function computeHash(content: Buffer | string): string {
  return crypto.createHash("sha256").update(content).digest("hex");
}

export async function loadState(stateFile: string): Promise<State> {
  let raw: string;
  try {
    raw = await fs.readFile(stateFile, "utf8");
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return {};
    throw err;
  }
  const parsed = JSON.parse(raw);
  return StateSchema.parse(parsed);
}

export async function saveState(
  stateFile: string,
  state: State,
): Promise<void> {
  StateSchema.parse(state);
  await fs.mkdir(path.dirname(stateFile), { recursive: true });
  await fs.writeFile(stateFile, `${JSON.stringify(state, null, 2)}\n`);
}

/**
 * `.upstream-cache/{repo}/` に upstream repo を用意する。
 * 既存の .git があれば fetch + reset --hard origin/HEAD で強制追従、
 * なければ新規 clone する（キャッシュは ephemeral なので履歴書き換えに
 * 追従することを優先）。
 */
export async function ensureUpstreamCache(
  url: string,
  cacheDir: string,
): Promise<{ repoDir: string; headSha: string }> {
  const gitDir = path.join(cacheDir, ".git");
  const cacheExists = await pathExists(gitDir);

  try {
    if (cacheExists) {
      const git = simpleGit(cacheDir);
      await git.fetch("origin");
      await git.reset(["--hard", "origin/HEAD"]);
    } else {
      await fs.mkdir(path.dirname(cacheDir), { recursive: true });
      await simpleGit().clone(url, cacheDir);
    }
    const headSha = (await simpleGit(cacheDir).revparse(["HEAD"])).trim();
    return { repoDir: cacheDir, headSha };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    throw new Error(
      `upstream ${url} のクローン/プルに失敗: ${message}`,
    );
  }
}

async function pathExists(p: string): Promise<boolean> {
  try {
    await fs.stat(p);
    return true;
  } catch {
    return false;
  }
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

export function computeDiff(
  prev: RepoState | undefined,
  current: UpstreamFile[],
): DiffEntry[] {
  const entries: DiffEntry[] = [];
  const currentByLocalPath = new Map(current.map((f) => [f.localPath, f]));

  for (const file of current) {
    const prevFile = prev?.files[file.localPath];
    if (!prevFile) {
      entries.push({
        kind: "new",
        localPath: file.localPath,
        upstreamPath: file.upstreamPath,
        hash: file.hash,
      });
    } else if (prevFile.hash === file.hash) {
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
        prevHash: prevFile.hash,
        hash: file.hash,
      });
    }
  }

  if (prev) {
    for (const [localPath, record] of Object.entries(prev.files)) {
      if (!currentByLocalPath.has(localPath)) {
        entries.push({
          kind: "deleted",
          localPath,
          upstreamPath: record.upstreamPath,
          prevHash: record.hash,
        });
      }
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
  prevCommit: string | undefined,
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
  lines.push(`# upstream sync summary — ${repo}`, "");
  lines.push(`- url: ${config.url}`);
  lines.push(`- prev commit: ${prevCommit ?? "(初回)"}`);
  lines.push(`- head commit: ${headSha}`);
  lines.push(`- synced at: ${new Date().toISOString()}`, "");

  lines.push(`## 新規 (${categories.new.length})`);
  for (const e of categories.new) {
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
      `- ${e.localPath} ← ${e.upstreamPath} (sha256: ${e.prevHash.slice(0, 12)}… → ${e.hash.slice(0, 12)}…)`,
    );
  }
  if (categories.changed.length === 0) lines.push("（なし）");
  lines.push("");

  lines.push(`## 削除 (${categories.deleted.length})`);
  for (const e of categories.deleted) {
    lines.push(`- ${e.localPath} (upstream から消失)`);
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

function defaultCacheDir(targetRoot: string, repo: UpstreamRepo): string {
  return path.join(targetRoot, ".design-studio", ".upstream-cache", repo);
}

function defaultStateFile(): string {
  const here = fileURLToPath(import.meta.url);
  const skillRoot = path.resolve(path.dirname(here), "..");
  return path.join(skillRoot, "references", ".upstream-state.json");
}

export async function runSync(opts: RunSyncOptions): Promise<RunSyncResult> {
  const config = REPOS[opts.repo];
  const targetRoot = opts.targetRoot ?? process.cwd();
  const cacheDir =
    opts.cacheDir ?? defaultCacheDir(targetRoot, opts.repo);
  const stateFile = opts.stateFile ?? defaultStateFile();
  const upstreamUrl = opts.upstreamUrl ?? config.url;

  const { repoDir, headSha } = await ensureUpstreamCache(upstreamUrl, cacheDir);
  const state = await loadState(stateFile);
  const prev = state[opts.repo];
  const currentFiles = await enumerateUpstreamFiles(repoDir, config.mappings);
  const diff = computeDiff(prev, currentFiles);
  const summaryMarkdown = formatSummary(
    opts.repo,
    prev?.lastSyncedCommit,
    headSha,
    diff,
  );

  const newRepoState: RepoState = {
    lastSyncedCommit: headSha,
    lastSyncedAt: new Date().toISOString(),
    files: Object.fromEntries(
      currentFiles.map((f) => [
        f.localPath,
        { upstreamPath: f.upstreamPath, hash: f.hash },
      ]),
    ),
  };
  await saveState(stateFile, { ...state, [opts.repo]: newRepoState });

  return { summaryMarkdown, diff };
}

function isUpstreamRepo(value: string): value is UpstreamRepo {
  return value === "awesome-claude-design" || value === "open-codesign";
}

function printUsage(): void {
  process.stderr.write(
    [
      "usage: sync-upstream <repo>",
      "",
      "  <repo>:",
      "    awesome-claude-design",
      "    open-codesign",
      "",
    ].join("\n"),
  );
}

export async function main(argv: string[]): Promise<number> {
  const repo = argv[2];
  if (!repo || !isUpstreamRepo(repo)) {
    printUsage();
    return 1;
  }

  try {
    const result = await runSync({ repo });
    process.stdout.write(result.summaryMarkdown);
    if (!result.summaryMarkdown.endsWith("\n")) {
      process.stdout.write("\n");
    }
    return 0;
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    process.stderr.write(`error: ${message}\n`);
    return 1;
  }
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
