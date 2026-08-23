import { describe, expect, it } from "vitest";
import { parseArgs, parseIssueNumber } from "./cli.ts";

describe("parseIssueNumber", () => {
  it("# 付きも受け付ける", () => {
    expect(parseIssueNumber("53")).toBe(53);
    expect(parseIssueNumber("#53")).toBe(53);
  });

  it("数字でないものは弾く", () => {
    expect(() => parseIssueNumber("feat/53")).toThrow(/53/);
  });
});

describe("parseArgs", () => {
  it("Issue 番号だけを渡せる", () => {
    const parsed = parseArgs(["53"]);
    expect(parsed).toMatchObject({ mode: "setup", issues: [53], dryRun: false });
    expect(parsed.overrides).toEqual({});
  });

  it("= 区切りと空白区切りの両方を受ける", () => {
    expect(parseArgs(["53", "--team=retocare-3691"]).overrides.team).toBe(
      "retocare-3691",
    );
    expect(parseArgs(["53", "--team", "retocare-3691"]).overrides.team).toBe(
      "retocare-3691",
    );
  });

  it("--branch と --agent と --yolo を拾う", () => {
    const parsed = parseArgs([
      "#53",
      "--branch",
      "chore/53-custom",
      "--agent",
      "codex",
      "--yolo",
    ]);
    expect(parsed.branch).toBe("chore/53-custom");
    expect(parsed.overrides.agent).toBe("codex");
    expect(parsed.overrides.yolo).toBe(true);
  });

  it("--task で子に渡す本題を差し替えられる", () => {
    expect(parseArgs(["53", "--task", "疎通だけ確認して待機して"]).task).toBe(
      "疎通だけ確認して待機して",
    );
  });

  it("cleanup モードは複数の Issue 番号を受ける", () => {
    const parsed = parseArgs(["cleanup", "53", "54"]);
    expect(parsed).toMatchObject({ mode: "cleanup", issues: [53, 54] });
  });

  it("setup は複数指定を拒否する", () => {
    expect(() => parseArgs(["53", "54"])).toThrow(/1 件ずつ/);
  });

  it("Issue 番号が無ければエラー", () => {
    expect(() => parseArgs(["--yolo"])).toThrow(/Issue 番号/);
  });

  it("未知のオプションはエラー", () => {
    expect(() => parseArgs(["53", "--unknown"])).toThrow(/--unknown/);
  });

  it("値が抜けたオプションはエラー", () => {
    expect(() => parseArgs(["53", "--team", "--yolo"])).toThrow(/--team/);
  });

  it("--timeout は正の秒数のみ受ける", () => {
    expect(parseArgs(["53", "--timeout=30"]).overrides.handshakeTimeoutSec)
      .toBe(30);
    expect(() => parseArgs(["53", "--timeout=0"])).toThrow(/秒数/);
  });
});
