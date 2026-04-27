import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  computeDiff,
  computeHash,
  enumerateUpstreamFiles,
  enumerateVendoredFiles,
  REPOS,
  type UpstreamFile,
} from "./check-diff-upstream";

describe("REPOS マッピング関数", () => {
  it("awesome-claude-design/prompts は dir を prompt-packs に置換、名前は維持", () => {
    const m = REPOS["awesome-claude-design"].mappings.find(
      (x) => x.upstreamGlob === "prompts/*.md",
    );
    expect(m?.toLocalPath("prompts/audit-live-site.md")).toBe(
      "prompt-packs/audit-live-site.md",
    );
  });

  it("awesome-claude-design/prompts は README.md を excludePatterns で弾く", () => {
    const m = REPOS["awesome-claude-design"].mappings.find(
      (x) => x.upstreamGlob === "prompts/*.md",
    );
    expect(m?.excludePatterns).toContain("prompts/README.md");
  });

  it("awesome-claude-design/design-md はそのまま保持", () => {
    const m = REPOS["awesome-claude-design"].mappings.find(
      (x) => x.upstreamGlob === "design-md/**/*.md",
    );
    expect(m?.toLocalPath("design-md/warm/mercury.md")).toBe(
      "design-md/warm/mercury.md",
    );
  });

  it("open-codesign/prompts は dir を変えファイル名はそのまま（.v1.txt は upstream 側の既存命名）", () => {
    const m = REPOS["open-codesign"].mappings.find(
      (x) => x.upstreamGlob === "packages/core/src/prompts/*.txt",
    );
    expect(m?.toLocalPath("packages/core/src/prompts/anti-slop.v1.txt")).toBe(
      "prompts/anti-slop.v1.txt",
    );
    expect(
      m?.toLocalPath("packages/core/src/prompts/anti-slop.v1.txt"),
    ).not.toContain(".v1.v1.");
  });

  it("open-codesign/design-skills は dir だけ変えて basename を維持", () => {
    const m = REPOS["open-codesign"].mappings.find(
      (x) => x.upstreamGlob === "packages/core/src/design-skills/*.jsx",
    );
    expect(
      m?.toLocalPath("packages/core/src/design-skills/heroes.jsx"),
    ).toBe("design-skills/heroes.jsx");
  });
});

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

describe("enumerateUpstreamFiles (excludePatterns)", () => {
  let tmpDir: string;

  beforeEach(async () => {
    tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "enum-excl-"));
  });

  afterEach(async () => {
    await fs.rm(tmpDir, { recursive: true, force: true });
  });

  it("excludePatterns に該当するファイルは列挙されない", async () => {
    await fs.mkdir(path.join(tmpDir, "prompts"), { recursive: true });
    await fs.writeFile(
      path.join(tmpDir, "prompts", "README.md"),
      "# readme (should be excluded)",
    );
    await fs.writeFile(
      path.join(tmpDir, "prompts", "family-picker.md"),
      "# family picker",
    );

    const files = await enumerateUpstreamFiles(tmpDir, [
      {
        upstreamGlob: "prompts/*.md",
        toLocalPath: (p) => `prompt-packs/${path.basename(p)}`,
        excludePatterns: ["prompts/README.md"],
      },
    ]);

    expect(files.map((f) => f.upstreamPath)).toEqual([
      "prompts/family-picker.md",
    ]);
  });

  it("excludePatterns 未指定なら全ファイルが列挙される", async () => {
    await fs.mkdir(path.join(tmpDir, "prompts"), { recursive: true });
    await fs.writeFile(path.join(tmpDir, "prompts", "README.md"), "readme");
    await fs.writeFile(path.join(tmpDir, "prompts", "real.md"), "real");

    const files = await enumerateUpstreamFiles(tmpDir, [
      {
        upstreamGlob: "prompts/*.md",
        toLocalPath: (p) => `prompt-packs/${path.basename(p)}`,
      },
    ]);

    expect(files.map((f) => f.upstreamPath).sort()).toEqual([
      "prompts/README.md",
      "prompts/real.md",
    ]);
  });
});

describe("enumerateVendoredFiles", () => {
  let tmpDir: string;

  beforeEach(async () => {
    tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "vendored-scan-"));
  });

  afterEach(async () => {
    await fs.rm(tmpDir, { recursive: true, force: true });
  });

  it("各 mapping の出力プレフィックス配下を再帰スキャンしハッシュを返す", async () => {
    await fs.mkdir(path.join(tmpDir, "design-md", "warm"), { recursive: true });
    await fs.mkdir(path.join(tmpDir, "prompt-packs"), { recursive: true });
    await fs.writeFile(
      path.join(tmpDir, "design-md", "warm", "mercury.md"),
      "# mercury",
    );
    await fs.writeFile(
      path.join(tmpDir, "prompt-packs", "family-picker.md"),
      "# fp",
    );

    const result = await enumerateVendoredFiles(tmpDir, [
      {
        upstreamGlob: "design-md/**/*.md",
        toLocalPath: (p) => p,
      },
      {
        upstreamGlob: "prompts/*.md",
        toLocalPath: (p) => `prompt-packs/${path.basename(p)}`,
      },
    ]);

    expect([...result.keys()].sort()).toEqual([
      "design-md/warm/mercury.md",
      "prompt-packs/family-picker.md",
    ]);
    expect(result.get("design-md/warm/mercury.md")).toBe(computeHash("# mercury"));
  });

  it("スキャン対象のディレクトリが存在しない場合は空 Map を返す", async () => {
    const result = await enumerateVendoredFiles(tmpDir, [
      {
        upstreamGlob: "design-md/**/*.md",
        toLocalPath: (p) => p,
      },
    ]);
    expect(result.size).toBe(0);
  });
});

describe("computeDiff", () => {
  const upstream: UpstreamFile[] = [
    { localPath: "a.md", upstreamPath: "src/a.md", hash: "h-a" },
    { localPath: "b.md", upstreamPath: "src/b.md", hash: "h-b-new" },
    { localPath: "c.md", upstreamPath: "src/c.md", hash: "h-c" },
  ];

  it("vendored が空なら全て new", () => {
    const diff = computeDiff(new Map(), upstream);
    expect(diff).toHaveLength(3);
    expect(diff.every((e) => e.kind === "new")).toBe(true);
  });

  it("new / changed / unchanged / deleted を全カテゴリ判定", () => {
    const vendored = new Map<string, string>([
      ["b.md", "h-b-old"],
      ["c.md", "h-c"],
      ["d.md", "h-d"],
    ]);
    const diff = computeDiff(vendored, upstream);
    const byKind = Object.fromEntries(diff.map((e) => [e.localPath, e.kind]));
    expect(byKind).toEqual({
      "a.md": "new",
      "b.md": "changed",
      "c.md": "unchanged",
      "d.md": "deleted",
    });
  });

  it("changed には vendoredHash と upstreamHash を両方含む", () => {
    const vendored = new Map<string, string>([["b.md", "h-b-old"]]);
    const diff = computeDiff(vendored, [upstream[1]]);
    expect(diff[0]).toEqual({
      kind: "changed",
      localPath: "b.md",
      upstreamPath: "src/b.md",
      vendoredHash: "h-b-old",
      upstreamHash: "h-b-new",
    });
  });

  it("deleted には vendoredHash のみ含み upstreamPath は持たない", () => {
    const vendored = new Map<string, string>([["d.md", "h-d"]]);
    const diff = computeDiff(vendored, []);
    expect(diff[0]).toEqual({
      kind: "deleted",
      localPath: "d.md",
      vendoredHash: "h-d",
    });
  });
});
