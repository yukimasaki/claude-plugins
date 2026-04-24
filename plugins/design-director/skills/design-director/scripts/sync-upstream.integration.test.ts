import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import { simpleGit } from "simple-git";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { loadState, runSync } from "./sync-upstream";

/**
 * ダミー upstream リポを tmpdir に作り、runSync を呼び出して
 * clone → 差分なし → 変更 → 追加 → 削除 の 5 シナリオを
 * 1 本のフローで検証する。
 *
 * 各シナリオを個別 it() に分けると upstream の準備が重複するため、
 * 進化するストーリーを 1 本のテストで辿る。アサーションが失敗した
 * 段階が分かるよう各ステップで expect.soft は使わず、通常の expect で
 * 即座に止まるようにしている。
 */
describe("runSync (integration)", () => {
  let tmpRoot: string;
  let upstreamRepoDir: string;
  let cacheDir: string;
  let stateFile: string;

  beforeEach(async () => {
    tmpRoot = await fs.mkdtemp(path.join(os.tmpdir(), "sync-upstream-it-"));
    upstreamRepoDir = path.join(tmpRoot, "upstream");
    cacheDir = path.join(tmpRoot, "cache");
    stateFile = path.join(tmpRoot, "state.json");
    await fs.mkdir(upstreamRepoDir, { recursive: true });
    const git = simpleGit(upstreamRepoDir);
    await git.init(["--initial-branch=main"]);
    await git.addConfig("user.email", "test@example.com");
    await git.addConfig("user.name", "test");
    await git.addConfig("commit.gpgsign", "false");
  });

  afterEach(async () => {
    await fs.rm(tmpRoot, { recursive: true, force: true });
  });

  async function commitUpstream(relPath: string, content: string): Promise<void> {
    const full = path.join(upstreamRepoDir, relPath);
    await fs.mkdir(path.dirname(full), { recursive: true });
    await fs.writeFile(full, content);
    const git = simpleGit(upstreamRepoDir);
    await git.add(".");
    await git.commit(`update ${relPath}`);
  }

  async function removeUpstream(relPath: string): Promise<void> {
    const full = path.join(upstreamRepoDir, relPath);
    await fs.rm(full);
    const git = simpleGit(upstreamRepoDir);
    await git.add(".");
    await git.commit(`remove ${relPath}`);
  }

  function callSync() {
    return runSync({
      repo: "awesome-claude-design",
      upstreamUrl: upstreamRepoDir,
      cacheDir,
      stateFile,
    });
  }

  it(
    "初回 clone → 差分なし → 変更 → 追加 → 削除 の 5 シナリオを検証",
    { timeout: 30_000 },
    async () => {
      // --- シナリオ 1: 初回 clone + 全ファイル new ---
      await commitUpstream("design-md/warm/mercury.md", "# mercury v1");
      const r1 = await callSync();
      expect(r1.diff.filter((e) => e.kind === "new")).toHaveLength(1);
      expect(r1.summaryMarkdown).toContain("## 新規 (1)");
      expect(r1.summaryMarkdown).toContain("design-md/warm/mercury.md");
      const s1 = await loadState(stateFile);
      expect(s1["awesome-claude-design"]?.files["design-md/warm/mercury.md"]).toBeDefined();

      // --- シナリオ 2: 差分なし（upstream 変化なしで再実行）---
      const r2 = await callSync();
      expect(r2.diff.filter((e) => e.kind === "unchanged")).toHaveLength(1);
      expect(r2.diff.filter((e) => e.kind !== "unchanged")).toHaveLength(0);

      // --- シナリオ 3: 既存ファイルを変更 ---
      await commitUpstream("design-md/warm/mercury.md", "# mercury v2");
      const r3 = await callSync();
      expect(r3.diff.filter((e) => e.kind === "changed")).toHaveLength(1);
      expect(r3.summaryMarkdown).toContain("## 変更 (1)");

      // --- シナリオ 4: ファイルを追加 ---
      await commitUpstream("recipes/new-recipe.md", "## new recipe");
      const r4 = await callSync();
      expect(r4.diff.filter((e) => e.kind === "new")).toHaveLength(1);
      expect(r4.diff.filter((e) => e.kind === "unchanged")).toHaveLength(1);

      // --- シナリオ 5: ファイルを削除 ---
      await removeUpstream("design-md/warm/mercury.md");
      const r5 = await callSync();
      const deleted = r5.diff.filter((e) => e.kind === "deleted");
      expect(deleted).toHaveLength(1);
      expect(deleted[0].localPath).toBe("design-md/warm/mercury.md");
      expect(r5.summaryMarkdown).toContain("## 削除 (1)");
      const s5 = await loadState(stateFile);
      expect(
        s5["awesome-claude-design"]?.files["design-md/warm/mercury.md"],
      ).toBeUndefined();
      expect(
        s5["awesome-claude-design"]?.files["recipes/new-recipe.md"],
      ).toBeDefined();
    },
  );
});
