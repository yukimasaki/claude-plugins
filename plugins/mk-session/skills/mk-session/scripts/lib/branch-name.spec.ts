import { describe, expect, it } from "vitest";
import {
  buildBranchName,
  detectType,
  slugify,
} from "./branch-name.ts";

describe("slugify", () => {
  it("ASCII タイトルを kebab-case にする", () => {
    expect(slugify("Add worktree bootstrap plugin")).toBe(
      "add-worktree-bootstrap-plugin",
    );
  });

  it("Conventional Commits の接頭辞を落とす", () => {
    expect(slugify("feat(mk-session): add tab bootstrap")).toBe(
      "add-tab-bootstrap",
    );
  });

  it("記号混じりを 1 つのハイフンに畳む", () => {
    expect(slugify("Fix: `--no-track` / upstream (again)!!")).toBe(
      "no-track-upstream-again",
    );
  });

  it("非 ASCII のみのタイトルでは null を返す", () => {
    expect(slugify("エージェントセッションを一括セットアップ")).toBeNull();
  });

  it("日本語混じりのタイトルは ASCII 断片を作らず null を返す", () => {
    expect(
      slugify("feat(mk-session): Issue 番号から worktree を作るプラグイン"),
    ).toBeNull();
  });

  it("長すぎるタイトルを切り詰め、末尾のハイフンを残さない", () => {
    const slug = slugify(
      "aaaaaaaaaa bbbbbbbbbb cccccccccc dddddddddd eeeee ffffffffff",
    );
    expect(slug).toBe("aaaaaaaaaa-bbbbbbbbbb-cccccccccc-dddddddddd-eeee");
    expect(slug!.length).toBeLessThanOrEqual(48);
  });

  it("タイトルが無いときは null を返す", () => {
    expect(slugify(null)).toBeNull();
    expect(slugify("")).toBeNull();
  });
});

describe("detectType", () => {
  it("既知の接頭辞をそのまま使う", () => {
    expect(detectType("fix: broken delivery")).toBe("fix");
    expect(detectType("docs(readme): update")).toBe("docs");
  });

  it("未知の接頭辞と接頭辞なしは feat に倒す", () => {
    expect(detectType("wip: something")).toBe("feat");
    expect(detectType("Add plugin")).toBe("feat");
    expect(detectType(null)).toBe("feat");
  });
});

describe("buildBranchName", () => {
  it("明示指定を無条件に優先する", () => {
    expect(
      buildBranchName({
        issue: 53,
        title: "feat: something",
        explicit: "chore/53-custom",
      }),
    ).toBe("chore/53-custom");
  });

  it("タイトルから type と slug を組み立てる", () => {
    expect(
      buildBranchName({ issue: 53, title: "feat: add mk-session plugin" }),
    ).toBe("feat/53-add-mk-session-plugin");
  });

  it("slug が取れないときは番号だけに落とす", () => {
    expect(
      buildBranchName({ issue: 53, title: "エージェントセッション" }),
    ).toBe("feat/53");
  });

  it("設定ファイルのテンプレートに従う", () => {
    expect(
      buildBranchName({
        issue: 53,
        title: "fix: delivery off",
        template: "{type}/issue-{issue}-{slug}",
      }),
    ).toBe("fix/issue-53-delivery-off");
  });

  it("slug なし + slug 始まりのテンプレートでも壊れない", () => {
    expect(
      buildBranchName({
        issue: 53,
        title: null,
        template: "{slug}/{issue}",
      }),
    ).toBe("53");
  });
});
