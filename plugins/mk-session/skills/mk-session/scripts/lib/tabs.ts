/**
 * 閉じてよいタブの選別。
 *
 * herdr のタブラベルは Issue 番号だけなので、同じ workspace に別リポジトリの
 * 同じ番号のセッションがあるとラベルだけでは区別できない。タブに属する pane の
 * cwd がこのリポジトリの worktree 配下かを確かめてから閉じる。
 */
import path from "node:path";
import type { HerdrPane } from "./herdr.ts";

export type TabCandidate = {
  tab_id: string;
  label?: string;
};

export type TabSelection = {
  /** 自リポジトリのものと確認できたので閉じるタブ */
  close: string[];
  /** ラベルは一致するが自リポジトリのものと確認できなかったタブ */
  skipped: string[];
};

/** `git worktree list --porcelain` から worktree のパスを取り出す */
export function parseWorktreePaths(stdout: string): string[] {
  return stdout
    .split("\n")
    .filter((line) => line.startsWith("worktree "))
    .map((line) => path.resolve(line.slice("worktree ".length).trim()))
    .filter((value) => value.length > 0);
}

/** `dir` そのものか、その配下かどうか */
export function isInside(dir: string, target: string): boolean {
  const base = path.resolve(dir);
  const candidate = path.resolve(target);
  return candidate === base || candidate.startsWith(base + path.sep);
}

/**
 * 閉じるタブを決める。
 *
 * cwd が分からない pane しか無いタブは閉じない。閉じ損ねはユーザーが手で
 * 閉じられるが、他リポジトリの作業中セッションを閉じるのは取り返しがつかない。
 */
export function selectTabsToClose(input: {
  issue: number;
  tabs: TabCandidate[];
  panes: HerdrPane[];
  ownedPaths: string[];
}): TabSelection {
  const label = String(input.issue);
  const owned = input.ownedPaths.map((value) => path.resolve(value));
  const close: string[] = [];
  const skipped: string[] = [];

  for (const tab of input.tabs) {
    if (tab.label !== label) continue;
    const cwds = input.panes
      .filter((pane) => pane.tab_id === tab.tab_id)
      .map((pane) => pane.cwd)
      .filter((cwd): cwd is string => typeof cwd === "string" && cwd.length > 0);
    const isOurs = cwds.some((cwd) =>
      owned.some((base) => isInside(base, cwd))
    );
    if (isOurs) close.push(tab.tab_id);
    else skipped.push(tab.tab_id);
  }

  return { close, skipped };
}
