import { describe, expect, it } from "vitest";
import type { HerdrPane } from "./herdr.ts";
import { isInside, parseWorktreePaths, selectTabsToClose } from "./tabs.ts";

const pane = (
  tabId: string,
  cwd?: string,
): HerdrPane => ({
  pane_id: `${tabId}:p1`,
  tab_id: tabId,
  workspace_id: "w1",
  cwd,
});

describe("parseWorktreePaths", () => {
  it("porcelain 出力から worktree のパスだけを拾う", () => {
    const stdout = [
      "worktree /home/u/repo",
      "HEAD abc",
      "branch refs/heads/main",
      "",
      "worktree /home/u/repo-53",
      "HEAD def",
      "branch refs/heads/feat/53",
    ].join("\n");
    expect(parseWorktreePaths(stdout)).toEqual([
      "/home/u/repo",
      "/home/u/repo-53",
    ]);
  });

  it("空の出力では空配列を返す", () => {
    expect(parseWorktreePaths("")).toEqual([]);
  });
});

describe("isInside", () => {
  it("同じパスは中とみなす", () => {
    expect(isInside("/home/u/repo", "/home/u/repo")).toBe(true);
  });

  it("配下のパスは中とみなす", () => {
    expect(isInside("/home/u/repo", "/home/u/repo/src")).toBe(true);
  });

  it("接頭辞が同じだけの兄弟パスは中とみなさない", () => {
    expect(isInside("/home/u/repo", "/home/u/repo-53")).toBe(false);
  });
});

describe("selectTabsToClose", () => {
  const tabs = [
    { tab_id: "w1:t1", label: "53" },
    { tab_id: "w1:t2", label: "53" },
    { tab_id: "w1:t3", label: "99" },
  ];

  it("自リポジトリの worktree にいるタブだけを閉じる", () => {
    const selection = selectTabsToClose({
      issue: 53,
      tabs,
      panes: [
        pane("w1:t1", "/home/u/repo-53"),
        pane("w1:t2", "/home/u/other-repo-53"),
      ],
      ownedPaths: ["/home/u/repo", "/home/u/repo-53"],
    });
    expect(selection.close).toEqual(["w1:t1"]);
    expect(selection.skipped).toEqual(["w1:t2"]);
  });

  it("ラベルが違うタブには触れない", () => {
    const selection = selectTabsToClose({
      issue: 53,
      tabs,
      panes: [pane("w1:t3", "/home/u/repo-99")],
      ownedPaths: ["/home/u/repo-99"],
    });
    expect(selection.close).not.toContain("w1:t3");
    expect(selection.skipped).not.toContain("w1:t3");
  });

  it("cwd が分からないタブは閉じずに skipped に入れる", () => {
    const selection = selectTabsToClose({
      issue: 53,
      tabs: [{ tab_id: "w1:t1", label: "53" }],
      panes: [pane("w1:t1", undefined)],
      ownedPaths: ["/home/u/repo"],
    });
    expect(selection.close).toEqual([]);
    expect(selection.skipped).toEqual(["w1:t1"]);
  });

  it("pane が 1 つも無いタブは閉じない", () => {
    const selection = selectTabsToClose({
      issue: 53,
      tabs: [{ tab_id: "w1:t1", label: "53" }],
      panes: [],
      ownedPaths: ["/home/u/repo"],
    });
    expect(selection.close).toEqual([]);
    expect(selection.skipped).toEqual(["w1:t1"]);
  });

  it("worktree 配下のサブディレクトリにいる pane でも自分のものと判定する", () => {
    const selection = selectTabsToClose({
      issue: 53,
      tabs: [{ tab_id: "w1:t1", label: "53" }],
      panes: [pane("w1:t1", "/home/u/repo-53/packages/app")],
      ownedPaths: ["/home/u/repo-53"],
    });
    expect(selection.close).toEqual(["w1:t1"]);
  });
});
