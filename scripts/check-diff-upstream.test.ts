import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  computeDiff,
  computeHash,
  enumerateUpstreamFilesGit,
  enumerateUpstreamFilesHttp,
  enumerateVendoredFilesGit,
  enumerateVendoredFilesHttp,
  type HttpFetcher,
  KZHRKNT_FAMILY_MAP,
  REPOS,
  type UpstreamFile,
} from "./check-diff-upstream";

describe("REPOS マッピング関数", () => {
  it("open-codesign/prompts は dir を変えファイル名はそのまま（.v1.txt は upstream 側の既存命名）", () => {
    const config = REPOS["open-codesign"];
    if (config.kind !== "git") throw new Error("expected git config");
    const m = config.mappings.find(
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
    const config = REPOS["open-codesign"];
    if (config.kind !== "git") throw new Error("expected git config");
    const m = config.mappings.find(
      (x) => x.upstreamGlob === "packages/core/src/design-skills/*.jsx",
    );
    expect(
      m?.toLocalPath("packages/core/src/design-skills/heroes.jsx"),
    ).toBe("design-skills/heroes.jsx");
  });

  it("getdesign-md は HTTP backend で 70 サイトの vendoredToUpstream を持つ（getdesign.md カタログ全件）", () => {
    const config = REPOS["getdesign-md"];
    if (config.kind !== "http") throw new Error("expected http config");
    expect(config.baseUrl).toBe("https://getdesign.md");
    expect(Object.keys(config.vendoredToUpstream).length).toBe(70);
  });

  it("getdesign-md は TLD 付きサイトを vendoredToUpstream で正規化", () => {
    const config = REPOS["getdesign-md"];
    if (config.kind !== "http") throw new Error("expected http config");
    // linear → linear.app
    expect(config.vendoredToUpstream["design-md/editorial/linear.md"]).toBe(
      "design-md/linear.app/DESIGN.md",
    );
    // opencode → opencode.ai
    expect(config.vendoredToUpstream["design-md/terminal/opencode.md"]).toBe(
      "design-md/opencode.ai/DESIGN.md",
    );
    // runway → runwayml
    expect(config.vendoredToUpstream["design-md/cinematic/runway.md"]).toBe(
      "design-md/runwayml/DESIGN.md",
    );
  });

  it("awesome-design-md-jp は git backend で kzhrknt/awesome-design-md-jp を指す", () => {
    const config = REPOS["awesome-design-md-jp"];
    if (config.kind !== "git") throw new Error("expected git config");
    expect(config.url).toBe(
      "https://github.com/kzhrknt/awesome-design-md-jp.git",
    );
    expect(config.mappings.length).toBe(1);
    expect(config.mappings[0].vendoredPrefix).toBe("design-md");
  });

  it("awesome-design-md-jp は KZHRKNT_FAMILY_MAP に基づき japanese-* family へマップ", () => {
    const config = REPOS["awesome-design-md-jp"];
    if (config.kind !== "git") throw new Error("expected git config");
    const mapping = config.mappings[0];
    expect(mapping.toLocalPath("design-md/smarthr/DESIGN.md")).toBe(
      "design-md/japanese-corporate/smarthr.md",
    );
    expect(mapping.toLocalPath("design-md/muji/DESIGN.md")).toBe(
      "design-md/japanese-consumer/muji.md",
    );
    expect(mapping.toLocalPath("design-md/note/DESIGN.md")).toBe(
      "design-md/japanese-editorial/note.md",
    );
    expect(mapping.toLocalPath("design-md/studio/DESIGN.md")).toBe(
      "design-md/japanese-creative/studio.md",
    );
  });

  it("awesome-design-md-jp は KZHRKNT_FAMILY_MAP 未登録のサイトを null で skip", () => {
    const config = REPOS["awesome-design-md-jp"];
    if (config.kind !== "git") throw new Error("expected git config");
    expect(
      config.mappings[0].toLocalPath("design-md/unknown-site/DESIGN.md"),
    ).toBeNull();
  });

  it("KZHRKNT_FAMILY_MAP は 25 エントリで全て japanese-* family を指す", () => {
    const validFamilies = new Set([
      "japanese-corporate",
      "japanese-consumer",
      "japanese-editorial",
      "japanese-creative",
    ]);
    const entries = Object.entries(KZHRKNT_FAMILY_MAP);
    expect(entries.length).toBe(25);
    for (const [, family] of entries) {
      expect(validFamilies.has(family)).toBe(true);
    }
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

describe("enumerateUpstreamFilesGit (excludePatterns)", () => {
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

    const files = await enumerateUpstreamFilesGit(tmpDir, [
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

    const files = await enumerateUpstreamFilesGit(tmpDir, [
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

describe("enumerateVendoredFilesGit", () => {
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

    const result = await enumerateVendoredFilesGit(tmpDir, [
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
    const result = await enumerateVendoredFilesGit(tmpDir, [
      {
        upstreamGlob: "design-md/**/*.md",
        toLocalPath: (p) => p,
      },
    ]);
    expect(result.size).toBe(0);
  });
});

describe("enumerateUpstreamFilesHttp", () => {
  it("各 vendoredToUpstream エントリに対し fetch を呼び結果を UpstreamFile に変換", async () => {
    const calls: string[] = [];
    const fetcher: HttpFetcher = async (url) => {
      calls.push(url);
      return { ok: true, body: Buffer.from(`body-of-${url.split("/").pop()}`) };
    };

    const result = await enumerateUpstreamFilesHttp({
      baseUrl: "https://example.com",
      vendoredToUpstream: {
        "design-md/playful/airbnb.md": "design-md/airbnb/DESIGN.md",
        "design-md/editorial/linear.md": "design-md/linear.app/DESIGN.md",
      },
      fetcher,
    });

    // localPath（vendoredToUpstream のキー）の昇順で fetch される
    expect(calls).toEqual([
      "https://example.com/design-md/linear.app/DESIGN.md",
      "https://example.com/design-md/airbnb/DESIGN.md",
    ]);
    expect(result.files.map((f) => f.localPath)).toEqual([
      "design-md/editorial/linear.md",
      "design-md/playful/airbnb.md",
    ]);
    expect(result.failures).toEqual([]);
  });

  it("baseUrl 末尾と upstreamPath 先頭のスラッシュ重複を正規化する", async () => {
    const calls: string[] = [];
    const fetcher: HttpFetcher = async (url) => {
      calls.push(url);
      return { ok: true, body: Buffer.from("ok") };
    };

    await enumerateUpstreamFilesHttp({
      baseUrl: "https://example.com/",
      vendoredToUpstream: { "v.md": "/up.md" },
      fetcher,
    });

    expect(calls).toEqual(["https://example.com/up.md"]);
  });

  it("404 や network error は failures に集約され files には含まれない", async () => {
    const fetcher: HttpFetcher = async (url) => {
      if (url.endsWith("/missing.md")) {
        return { ok: false, status: 404, reason: "Not Found" };
      }
      if (url.endsWith("/broken.md")) {
        return { ok: false, status: 0, reason: "ECONNREFUSED" };
      }
      return { ok: true, body: Buffer.from("ok") };
    };

    const result = await enumerateUpstreamFilesHttp({
      baseUrl: "https://example.com",
      vendoredToUpstream: {
        "good.md": "good.md",
        "missing.md": "missing.md",
        "broken.md": "broken.md",
      },
      fetcher,
    });

    expect(result.files.map((f) => f.localPath)).toEqual(["good.md"]);
    expect(result.failures.map((f) => f.localPath).sort()).toEqual([
      "broken.md",
      "missing.md",
    ]);
    const missing = result.failures.find((f) => f.localPath === "missing.md");
    expect(missing?.reason).toContain("404");
  });
});

describe("enumerateVendoredFilesHttp", () => {
  let tmpDir: string;

  beforeEach(async () => {
    tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "vendored-http-"));
  });

  afterEach(async () => {
    await fs.rm(tmpDir, { recursive: true, force: true });
  });

  it("vendoredToUpstream のキーセットだけを対象にしハッシュを返す", async () => {
    await fs.mkdir(path.join(tmpDir, "design-md", "warm"), { recursive: true });
    await fs.mkdir(path.join(tmpDir, "design-md", "indie"), { recursive: true });
    await fs.writeFile(
      path.join(tmpDir, "design-md", "warm", "claude.md"),
      "claude content",
    );
    // indie/granola は claim 外なので返ってこない
    await fs.writeFile(
      path.join(tmpDir, "design-md", "indie", "granola.md"),
      "granola content",
    );

    const result = await enumerateVendoredFilesHttp(tmpDir, {
      "design-md/warm/claude.md": "design-md/claude/DESIGN.md",
      // granola は intentional に含めない
    });

    expect([...result.keys()]).toEqual(["design-md/warm/claude.md"]);
    expect(result.get("design-md/warm/claude.md")).toBe(
      computeHash("claude content"),
    );
  });

  it("対象ファイルが存在しない場合は単に skip する（throw しない）", async () => {
    const result = await enumerateVendoredFilesHttp(tmpDir, {
      "design-md/missing/file.md": "design-md/missing/DESIGN.md",
    });
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
