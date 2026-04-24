import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { simpleGit } from "simple-git";

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

export type RepoState = {
  lastSyncedCommit: string;
  lastSyncedAt: string;
  files: Record<string, { upstreamPath: string; hash: string }>;
};

export type State = Record<string, RepoState>;

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

export function computeHash(_content: Buffer | string): string {
  throw new Error("computeHash: not implemented ()");
}

export async function loadState(_stateFile: string): Promise<State> {
  throw new Error("loadState: not implemented ()");
}

export async function saveState(
  _stateFile: string,
  _state: State,
): Promise<void> {
  throw new Error("saveState: not implemented ()");
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
  _repoDir: string,
  _mappings: FileMapping[],
): Promise<UpstreamFile[]> {
  throw new Error("enumerateUpstreamFiles: not implemented ()");
}

export function computeDiff(
  _prev: RepoState | undefined,
  _current: UpstreamFile[],
): DiffEntry[] {
  throw new Error("computeDiff: not implemented ()");
}

export function formatSummary(
  _repo: UpstreamRepo,
  _prevCommit: string | undefined,
  _headSha: string,
  _diff: DiffEntry[],
): string {
  throw new Error("formatSummary: not implemented ()");
}

export async function runSync(_opts: RunSyncOptions): Promise<RunSyncResult> {
  throw new Error("runSync: not implemented ()");
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
