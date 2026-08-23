import { describe, expect, it } from "vitest";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  agmsgScriptsDirCandidates,
  findAgmsgScriptsDir,
  pluginAgmsgScriptsDirCandidates,
} from "./agmsg.ts";

describe("agmsgScriptsDirCandidates", () => {
  it("AGMSG_HOME を最優先で探す", () => {
    const candidates = agmsgScriptsDirCandidates(
      { AGMSG_HOME: "/opt/agmsg" },
      "/home/u",
    );
    expect(candidates[0]).toBe("/opt/agmsg/scripts");
    expect(candidates).toContain("/home/u/.agents/skills/agmsg/scripts");
  });

  it("AGMSG_HOME が無ければ既定の場所だけを探す", () => {
    expect(agmsgScriptsDirCandidates({}, "/home/u")).toEqual([
      "/home/u/.agents/skills/agmsg/scripts",
      "/home/u/.claude/skills/agmsg/scripts",
    ]);
  });
});

describe("pluginAgmsgScriptsDirCandidates", () => {
  it("marketplace / cache / バージョン付きキャッシュのどれも候補にする", () => {
    const home = makeHome({
      ".claude/plugins/marketplaces/acme-agmsg/scripts": true,
      ".claude/plugins/cache/acme-agmsg/agmsg/1.1.10/scripts": true,
    });
    const candidates = pluginAgmsgScriptsDirCandidates(home);
    expect(candidates).toContain(
      path.join(home, ".claude/plugins/marketplaces/acme-agmsg/scripts"),
    );
    expect(candidates).toContain(
      path.join(home, ".claude/plugins/cache/acme-agmsg/agmsg/1.1.10/scripts"),
    );
  });

  it("agmsg と無関係なプラグインは候補にしない", () => {
    const home = makeHome({
      ".claude/plugins/marketplaces/other-plugin/scripts": true,
    });
    expect(pluginAgmsgScriptsDirCandidates(home)).toEqual([]);
  });
});

describe("findAgmsgScriptsDir", () => {
  it("未導入なら null を返す", () => {
    expect(findAgmsgScriptsDir({}, "/nonexistent-home")).toBeNull();
  });

  it("プラグインとして入れた agmsg も見つける", () => {
    const home = makeHome({
      ".claude/plugins/cache/acme-agmsg/agmsg/1.1.10/scripts": true,
    });
    expect(findAgmsgScriptsDir({}, home)).toBe(
      path.join(home, ".claude/plugins/cache/acme-agmsg/agmsg/1.1.10/scripts"),
    );
  });
});

/** 指定した scripts ディレクトリに send.sh を置いた一時 HOME を作る */
function makeHome(scriptDirs: Record<string, boolean>): string {
  const home = mkdtempSync(path.join(os.tmpdir(), "mk-session-agmsg-"));
  for (const relative of Object.keys(scriptDirs)) {
    const dir = path.join(home, relative);
    mkdirSync(dir, { recursive: true });
    writeFileSync(path.join(dir, "send.sh"), "");
  }
  return home;
}
