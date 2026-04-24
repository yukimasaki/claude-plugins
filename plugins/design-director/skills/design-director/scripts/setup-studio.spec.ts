import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { setupStudio } from "./setup-studio";

describe("setupStudio", () => {
  let tmpRoot: string;

  beforeEach(async () => {
    tmpRoot = await fs.mkdtemp(path.join(os.tmpdir(), "design-studio-test-"));
  });

  afterEach(async () => {
    await fs.rm(tmpRoot, { recursive: true, force: true });
  });

  it("初回実行でテンプレートがコピーされ projects / .upstream-cache が作られる", async () => {
    const result = await setupStudio({ targetRoot: tmpRoot, install: false });

    expect(result.skipped).toBe(false);
    expect(result.studioDir).toBe(path.join(tmpRoot, ".design-studio"));

    await expectExists(path.join(result.studioDir, "package.json"));
    await expectExists(path.join(result.studioDir, "tsconfig.json"));
    await expectExists(path.join(result.studioDir, "app", "layout.tsx"));
    await expectExists(path.join(result.studioDir, "app", "page.tsx"));
    await expectExists(path.join(result.studioDir, "lib", "list-projects.ts"));
    await expectExists(path.join(result.studioDir, "public", "runtime", "preview.html"));
    await expectExists(path.join(result.studioDir, "projects"));
    await expectExists(path.join(result.studioDir, ".upstream-cache"));
  });

  it(".design-studio/ が既に存在する場合はスキップする", async () => {
    const studioDir = path.join(tmpRoot, ".design-studio");
    await fs.mkdir(studioDir, { recursive: true });
    await fs.writeFile(path.join(studioDir, "marker.txt"), "pre-existing");

    const result = await setupStudio({ targetRoot: tmpRoot, install: false });

    expect(result.skipped).toBe(true);
    // pre-existing ファイルがそのまま残り、テンプレートで上書きされていないこと
    const marker = await fs.readFile(path.join(studioDir, "marker.txt"), "utf8");
    expect(marker).toBe("pre-existing");
    // package.json はコピーされていない
    await expectNotExists(path.join(studioDir, "package.json"));
  });

  it("任意の templateDir を指定してコピー元を差し替えられる", async () => {
    const customTemplate = path.join(tmpRoot, "custom-template");
    await fs.mkdir(customTemplate, { recursive: true });
    await fs.writeFile(path.join(customTemplate, "custom-marker.txt"), "from custom");

    const result = await setupStudio({
      targetRoot: tmpRoot,
      install: false,
      templateDir: customTemplate,
    });

    expect(result.skipped).toBe(false);
    const copied = await fs.readFile(
      path.join(result.studioDir, "custom-marker.txt"),
      "utf8",
    );
    expect(copied).toBe("from custom");
    await expectExists(path.join(result.studioDir, "projects"));
  });
});

async function expectExists(p: string): Promise<void> {
  await expect(fs.stat(p)).resolves.toBeDefined();
}

async function expectNotExists(p: string): Promise<void> {
  await expect(fs.stat(p)).rejects.toMatchObject({ code: "ENOENT" });
}
