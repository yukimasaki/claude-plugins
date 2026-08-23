/**
 * リポジトリ側の事実を読む層（git / gh / 設定ファイル）。
 */
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { run } from "./exec.ts";

export const CONFIG_RELATIVE_PATH = path.join(".claude", "mk-session.json");

export function getRepoRoot(cwd = process.cwd()): string {
  const result = run("git", ["rev-parse", "--show-toplevel"], { cwd });
  if (result.status !== 0 || !result.stdout) {
    throw new Error("git リポジトリの中で実行してください");
  }
  return result.stdout;
}

export function getRepoName(repoRoot: string): string {
  return path.basename(repoRoot);
}

/** origin の既定ブランチ。解決できなければ main に倒す */
export function getDefaultBranch(repoRoot: string): string {
  const symbolic = run(
    "git",
    ["symbolic-ref", "--quiet", "--short", "refs/remotes/origin/HEAD"],
    { cwd: repoRoot },
  );
  if (symbolic.status === 0 && symbolic.stdout) {
    return symbolic.stdout.replace(/^origin\//, "");
  }
  const remote = run("git", ["remote", "show", "origin"], { cwd: repoRoot });
  const matched = /HEAD branch:\s*(\S+)/.exec(remote.stdout);
  return matched?.[1] ?? "main";
}

/** `.claude/skills/<name>/SKILL.md` の有無。委譲判定に渡す */
export function makeSkillExists(repoRoot: string): (name: string) => boolean {
  return (name: string) =>
    existsSync(path.join(repoRoot, ".claude", "skills", name, "SKILL.md"));
}

/** 設定ファイルを読む。未配置なら undefined（既定値で解決される） */
export function loadConfigFile(repoRoot: string): unknown {
  const configPath = path.join(repoRoot, CONFIG_RELATIVE_PATH);
  if (!existsSync(configPath)) return undefined;
  try {
    return JSON.parse(readFileSync(configPath, "utf8"));
  } catch (error) {
    throw new Error(
      `${CONFIG_RELATIVE_PATH} を JSON として読めません: ${
        (error as Error).message
      }`,
    );
  }
}

export type IssueInfo = {
  number: number;
  title: string | null;
  state: string | null;
  url: string | null;
  /** gh が未導入・未認証で取得できなかった場合 true */
  unavailable: boolean;
};

/** Issue のタイトルと状態を取る。取れなくてもブランチ名は番号だけで作れる */
export function fetchIssue(issue: number, cwd: string): IssueInfo {
  const result = run(
    "gh",
    ["issue", "view", String(issue), "--json", "title,state,url"],
    { cwd },
  );
  if (result.status !== 0) {
    return {
      number: issue,
      title: null,
      state: null,
      url: null,
      unavailable: true,
    };
  }
  try {
    const parsed = JSON.parse(result.stdout) as {
      title?: string;
      state?: string;
      url?: string;
    };
    return {
      number: issue,
      title: parsed.title ?? null,
      state: parsed.state ?? null,
      url: parsed.url ?? null,
      unavailable: false,
    };
  } catch {
    return {
      number: issue,
      title: null,
      state: null,
      url: null,
      unavailable: true,
    };
  }
}
