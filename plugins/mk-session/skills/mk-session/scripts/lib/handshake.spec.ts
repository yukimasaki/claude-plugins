import { describe, expect, it } from "vitest";
import {
  buildHandshakeToken,
  buildKickoffPrompt,
  buildProbeMessage,
  buildStandbyPrompt,
  hasHandshakeReply,
  parseHistory,
  shellQuote,
} from "./handshake.ts";

const HISTORY = [
  "  ○ [2026-08-23T05:00:00Z] lead → 53: mk-session-handshake-53-abc 受け取ったら返信して",
  "  ● [2026-08-23T05:00:12Z] 53 → lead: mk-session-handshake-53-abc ready",
  "No message history.",
].join("\n");

describe("parseHistory", () => {
  it("履歴行を from / to / body に分解する", () => {
    const entries = parseHistory(HISTORY);
    expect(entries).toHaveLength(2);
    expect(entries[1]).toMatchObject({ from: "53", to: "lead" });
    expect(entries[1].body).toContain("ready");
  });

  it("履歴が空のときは空配列", () => {
    expect(parseHistory("No message history.")).toEqual([]);
  });
});

describe("hasHandshakeReply", () => {
  const entries = parseHistory(HISTORY);
  const token = "mk-session-handshake-53-abc";

  it("子から親への返信にトークンがあれば成立", () => {
    expect(hasHandshakeReply(entries, { from: "53", to: "lead", token })).toBe(
      true,
    );
  });

  it("親が送った分だけでは成立しない", () => {
    const onlySent = parseHistory(HISTORY.split("\n")[0]);
    expect(hasHandshakeReply(onlySent, { from: "53", to: "lead", token })).toBe(
      false,
    );
  });

  it("別のトークンの返信では成立しない", () => {
    expect(
      hasHandshakeReply(entries, {
        from: "53",
        to: "lead",
        token: "mk-session-handshake-53-zzz",
      }),
    ).toBe(false);
  });
});

describe("buildHandshakeToken", () => {
  it("Issue 番号とスタンプから一意なトークンを作る", () => {
    expect(buildHandshakeToken(53, "abc")).toBe("mk-session-handshake-53-abc");
  });
});

describe("buildKickoffPrompt", () => {
  const prompt = buildKickoffPrompt({
    issue: 53,
    team: "claude-plugins-53",
    lead: "lead",
    readyToken: "mk-session-handshake-53-abc",
    agmsgScriptsDir: "/home/u/.agents/skills/agmsg/scripts",
  });

  it("actas → monitor → ready 返信 の順を指示する", () => {
    expect(prompt.indexOf("/agmsg actas 53")).toBeLessThan(
      prompt.indexOf("/agmsg mode monitor"),
    );
    expect(prompt.indexOf("/agmsg mode monitor")).toBeLessThan(
      prompt.indexOf("send.sh"),
    );
  });

  it("ready の返信コマンドに team・宛先・トークンが入る", () => {
    expect(prompt).toContain(
      "send.sh claude-plugins-53 53 lead 'mk-session-handshake-53-abc ready'",
    );
  });

  it("親から届く疎通確認への応答も先に指示しておく", () => {
    expect(prompt).toContain("返信コマンドをそのまま実行");
  });

  it("本題は初期化のあとに置く", () => {
    expect(prompt.indexOf("send.sh")).toBeLessThan(prompt.indexOf("本題"));
    expect(prompt).toContain("#53 を取得して着手して");
  });
});

describe("buildStandbyPrompt", () => {
  it("Issue の取得と要約を指示し、そこで止めることを明記する", () => {
    const prompt = buildStandbyPrompt({ issue: 53 });
    expect(prompt).toContain("gh issue view 53");
    expect(prompt).toContain("要約");
    expect(prompt).toContain("指示待ちで停止");
  });

  it("実装に入らないことを明示する", () => {
    const prompt = buildStandbyPrompt({ issue: 53 });
    expect(prompt).toContain("実装・ブランチ操作・ファイルの変更は始めない");
  });

  it("agmsg には触れない（既定のセットアップは疎通を前提にしない）", () => {
    const prompt = buildStandbyPrompt({ issue: 53, title: "タブを直す" });
    expect(prompt).not.toContain("agmsg");
    expect(prompt).not.toContain("send.sh");
  });

  it("タイトルが分かっていれば冒頭に添える", () => {
    expect(buildStandbyPrompt({ issue: 53, title: "タブを直す" })).toContain(
      "#53（タブを直す）",
    );
  });

  it("--task の指定があればそれをそのまま渡す", () => {
    expect(buildStandbyPrompt({ issue: 53, task: "別の指示" })).toBe("別の指示");
  });
});

describe("buildProbeMessage", () => {
  it("返信コマンドを本文に丸ごと含める", () => {
    const body = buildProbeMessage({
      issue: 53,
      team: "claude-plugins-53",
      lead: "lead",
      token: "mk-session-probe-53-xyz",
      agmsgScriptsDir: "/home/u/.agents/skills/agmsg/scripts",
    });
    expect(body).toContain(
      "send.sh claude-plugins-53 53 lead 'mk-session-probe-53-xyz ok'",
    );
  });
});

describe("shellQuote", () => {
  it("安全な文字だけの値はそのまま返す", () => {
    expect(shellQuote("acme-53")).toBe("acme-53");
    expect(shellQuote("/home/u/.agents/scripts/send.sh")).toBe(
      "/home/u/.agents/scripts/send.sh",
    );
  });

  it("空白を含む値を包む", () => {
    expect(shellQuote("epic 42")).toBe("'epic 42'");
  });

  it("メタ文字を含む値を包む", () => {
    expect(shellQuote("a;rm -rf /")).toBe("'a;rm -rf /'");
    expect(shellQuote("a`b`")).toBe("'a`b`'");
    expect(shellQuote("$(id)")).toBe("'$(id)'");
  });

  it("シングルクオートを含む値を壊さずに包む", () => {
    expect(shellQuote("it's")).toBe("'it'\\''s'");
  });

  it("空文字も包む", () => {
    expect(shellQuote("")).toBe("''");
  });
});

describe("空白入りの team 名でもコマンドが壊れない", () => {
  const base = {
    issue: 42,
    team: "epic 42",
    lead: "lead",
    agmsgScriptsDir: "/home/my agents/scripts",
  };

  it("起動プロンプトの send.sh がすべてクォートされる", () => {
    const prompt = buildKickoffPrompt({ ...base, readyToken: "tok" });
    expect(prompt).toContain(
      "'/home/my agents/scripts/send.sh' 'epic 42' 42 lead 'tok ready'",
    );
  });

  it("疎通メッセージの返信コマンドがすべてクォートされる", () => {
    const message = buildProbeMessage({ ...base, token: "tok" });
    expect(message).toContain(
      "'/home/my agents/scripts/send.sh' 'epic 42' 42 lead 'tok ok'",
    );
  });
});
