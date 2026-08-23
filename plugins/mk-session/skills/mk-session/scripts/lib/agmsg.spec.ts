import { describe, expect, it } from "vitest";
import { agmsgScriptsDirCandidates, findAgmsgScriptsDir } from "./agmsg.ts";

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

describe("findAgmsgScriptsDir", () => {
  it("未導入なら null を返す", () => {
    expect(findAgmsgScriptsDir({}, "/nonexistent-home")).toBeNull();
  });
});
