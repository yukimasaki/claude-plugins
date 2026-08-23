import { describe, expect, it } from "vitest";
import { extractTabId, parseHerdrResult, parsePanes } from "./herdr.ts";

const TAB_CREATE = JSON.stringify({
  id: "cli:tab:create",
  result: { tab_id: "w3E:t9", workspace_id: "w3E", type: "tab_created" },
});

const PANE_LIST = JSON.stringify({
  id: "cli:pane:list",
  result: {
    type: "pane_list",
    panes: [
      { pane_id: "w3E:p9", tab_id: "w3E:t9", workspace_id: "w3E" },
      {
        pane_id: "w3E:p10",
        tab_id: "w3E:t9",
        workspace_id: "w3E",
        agent: "claude",
      },
      {
        pane_id: "w3E:p2",
        tab_id: "w3E:t2",
        workspace_id: "w3E",
      },
    ],
  },
});

describe("parseHerdrResult", () => {
  it("最終行の JSON から result を取り出す", () => {
    expect(parseHerdrResult(`warning: something\n${TAB_CREATE}`)).toMatchObject({
      tab_id: "w3E:t9",
    });
  });

  it("JSON でない応答はエラー", () => {
    expect(() => parseHerdrResult("not json")).toThrow(/JSON/);
  });

  it("空の応答はエラー", () => {
    expect(() => parseHerdrResult("  \n")).toThrow(/空/);
  });
});

describe("extractTabId", () => {
  it("tab_id を取り出す", () => {
    expect(extractTabId(TAB_CREATE)).toBe("w3E:t9");
  });

  it("入れ子の tab.tab_id にも対応する", () => {
    const nested = JSON.stringify({ result: { tab: { tab_id: "w1:t1" } } });
    expect(extractTabId(nested)).toBe("w1:t1");
  });
});

describe("parsePanes", () => {
  it("pane 一覧を取り出す", () => {
    const panes = parsePanes(PANE_LIST);
    expect(panes.map((pane) => pane.pane_id)).toEqual([
      "w3E:p9",
      "w3E:p10",
      "w3E:p2",
    ]);
  });

  it("panes が無い応答では空配列", () => {
    expect(parsePanes(JSON.stringify({ result: { type: "x" } }))).toEqual([]);
  });
});
