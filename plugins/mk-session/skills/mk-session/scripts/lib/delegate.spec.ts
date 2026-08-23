import { describe, expect, it } from "vitest";
import { resolveDelegate } from "./delegate.ts";

const has = (...names: string[]) => (name: string) => names.includes(name);

describe("resolveDelegate", () => {
  it("auto: 既存 skill があれば委譲する", () => {
    const decision = resolveDelegate({
      setting: "auto",
      skillExists: has("mk-wktree"),
    });
    expect(decision).toMatchObject({ mode: "skill", skillName: "mk-wktree" });
  });

  it("auto: 既存 skill が無ければ内蔵手順を使う", () => {
    const decision = resolveDelegate({
      setting: "auto",
      skillExists: has(),
    });
    expect(decision.mode).toBe("builtin");
  });

  it("auto: 表記揺れの skill 名も拾う", () => {
    const decision = resolveDelegate({
      setting: "auto",
      skillExists: has("mk-worktree"),
    });
    expect(decision).toMatchObject({ mode: "skill", skillName: "mk-worktree" });
  });

  it("none: 既存 skill があっても内蔵手順を使う", () => {
    const decision = resolveDelegate({
      setting: "none",
      skillExists: has("mk-wktree"),
    });
    expect(decision.mode).toBe("builtin");
  });

  it("明示指定: 存在すればその skill に委譲する", () => {
    const decision = resolveDelegate({
      setting: "bootstrap-worktree",
      skillExists: has("bootstrap-worktree"),
    });
    expect(decision).toMatchObject({
      mode: "skill",
      skillName: "bootstrap-worktree",
    });
  });

  it("明示指定: 存在しなければ内蔵手順に倒さずエラーにする", () => {
    expect(() =>
      resolveDelegate({ setting: "missing-skill", skillExists: has() }),
    ).toThrow(/missing-skill/);
  });
});
