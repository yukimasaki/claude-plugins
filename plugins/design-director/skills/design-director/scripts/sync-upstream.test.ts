import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  computeDiff,
  computeHash,
  loadState,
  type RepoState,
  saveState,
  type State,
  type UpstreamFile,
} from "./sync-upstream";

describe("computeHash", () => {
  it("'hello world' に対して既知の SHA256 を返す", () => {
    expect(computeHash("hello world")).toBe(
      "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
    );
  });

  it("同じ入力に対して同じハッシュを返す（決定性）", () => {
    expect(computeHash("abc")).toBe(computeHash("abc"));
  });

  it("Buffer と string で同じ内容なら同じハッシュになる", () => {
    expect(computeHash("abc")).toBe(computeHash(Buffer.from("abc")));
  });
});

describe("computeDiff", () => {
  const current: UpstreamFile[] = [
    { localPath: "a.md", upstreamPath: "src/a.md", hash: "h-a" },
    { localPath: "b.md", upstreamPath: "src/b.md", hash: "h-b-new" },
    { localPath: "c.md", upstreamPath: "src/c.md", hash: "h-c" },
  ];

  it("prev なしなら全て new", () => {
    const diff = computeDiff(undefined, current);
    expect(diff).toHaveLength(3);
    expect(diff.every((e) => e.kind === "new")).toBe(true);
  });

  it("new / changed / unchanged / deleted を全カテゴリ判定", () => {
    const prev: RepoState = {
      lastSyncedCommit: "abc",
      lastSyncedAt: "2026-04-20T00:00:00.000Z",
      files: {
        "b.md": { upstreamPath: "src/b.md", hash: "h-b-old" },
        "c.md": { upstreamPath: "src/c.md", hash: "h-c" },
        "d.md": { upstreamPath: "src/d.md", hash: "h-d" },
      },
    };
    const diff = computeDiff(prev, current);
    const byKind = Object.fromEntries(
      diff.map((e) => [e.localPath, e.kind]),
    );
    expect(byKind).toEqual({
      "a.md": "new",
      "b.md": "changed",
      "c.md": "unchanged",
      "d.md": "deleted",
    });
  });

  it("changed には prevHash と新 hash を両方含む", () => {
    const prev: RepoState = {
      lastSyncedCommit: "abc",
      lastSyncedAt: "2026-04-20T00:00:00.000Z",
      files: {
        "b.md": { upstreamPath: "src/b.md", hash: "h-b-old" },
      },
    };
    const diff = computeDiff(prev, [current[1]]);
    expect(diff[0]).toEqual({
      kind: "changed",
      localPath: "b.md",
      upstreamPath: "src/b.md",
      prevHash: "h-b-old",
      hash: "h-b-new",
    });
  });
});

describe("loadState / saveState", () => {
  let tmpDir: string;

  beforeEach(async () => {
    tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "sync-state-test-"));
  });

  afterEach(async () => {
    await fs.rm(tmpDir, { recursive: true, force: true });
  });

  it("欠損ファイルなら空 state ({}) を返す", async () => {
    const state = await loadState(path.join(tmpDir, "nonexistent.json"));
    expect(state).toEqual({});
  });

  it("saveState → loadState が round-trip する", async () => {
    const stateFile = path.join(tmpDir, "state.json");
    const state: State = {
      "awesome-claude-design": {
        lastSyncedCommit: "abc1234",
        lastSyncedAt: "2026-04-25T00:00:00.000Z",
        files: {
          "recipes/one.md": {
            upstreamPath: "recipes/one.md",
            hash: "h1",
          },
        },
      },
    };
    await saveState(stateFile, state);
    const loaded = await loadState(stateFile);
    expect(loaded).toEqual(state);
  });

  it("壊れた JSON は throw する", async () => {
    const stateFile = path.join(tmpDir, "broken.json");
    await fs.writeFile(stateFile, "{not json");
    await expect(loadState(stateFile)).rejects.toThrow();
  });

  it("zod スキーマ違反は loadState で throw する", async () => {
    const stateFile = path.join(tmpDir, "invalid.json");
    await fs.writeFile(
      stateFile,
      JSON.stringify({
        "awesome-claude-design": {
          lastSyncedCommit: "abc",
          // lastSyncedAt 欠損 → zod error
          files: {},
        },
      }),
    );
    await expect(loadState(stateFile)).rejects.toThrow();
  });

  it("saveState は不正な state を reject する", async () => {
    const stateFile = path.join(tmpDir, "out.json");
    const invalid = {
      "awesome-claude-design": {
        lastSyncedCommit: "abc",
        lastSyncedAt: "2026-04-25T00:00:00.000Z",
        files: {
          "a.md": { upstreamPath: "a.md", hash: 123 },
        },
      },
    } as unknown as State;
    await expect(saveState(stateFile, invalid)).rejects.toThrow();
  });
});
