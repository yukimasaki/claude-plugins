import { spawnSync } from "node:child_process";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export type SetupOptions = {
  /** `.design-studio/` を作るプロジェクトのルートパス */
  targetRoot: string;
  /** false の場合 bun install を走らせない（テストから呼ぶため） */
  install?: boolean;
  /** 検証用。既定は同梱テンプレート */
  templateDir?: string;
};

export type SetupResult = {
  skipped: boolean;
  studioDir: string;
};

/**
 * `.design-studio/` を初回セットアップする。
 * 既に存在する場合はスキップする（decisions.md Q1-6）。
 */
export async function setupStudio(opts: SetupOptions): Promise<SetupResult> {
  const studioDir = path.join(opts.targetRoot, ".design-studio");
  if (await exists(studioDir)) {
    return { skipped: true, studioDir };
  }

  const templateDir = opts.templateDir ?? defaultTemplateDir();
  await fs.cp(templateDir, studioDir, { recursive: true });

  await fs.mkdir(path.join(studioDir, "projects"), { recursive: true });

  if (opts.install !== false) {
    const res = spawnSync("bun", ["install"], {
      cwd: studioDir,
      stdio: "inherit",
    });
    if (res.status !== 0) {
      throw new Error(`bun install failed with exit code ${res.status}`);
    }
  }

  return { skipped: false, studioDir };
}

async function exists(p: string): Promise<boolean> {
  try {
    await fs.stat(p);
    return true;
  } catch {
    return false;
  }
}

function defaultTemplateDir(): string {
  const here = fileURLToPath(import.meta.url);
  return path.resolve(path.dirname(here), "..", "templates", "nextjs-studio");
}

// CLI entry: `bun scripts/setup-studio.ts [targetRoot]`
if (isCliEntry()) {
  const targetRoot = process.argv[2] ?? process.cwd();
  setupStudio({ targetRoot })
    .then((res) => {
      if (res.skipped) {
        console.log(`design-studio already exists: ${res.studioDir}`);
      } else {
        console.log(`design-studio created: ${res.studioDir}`);
      }
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}

function isCliEntry(): boolean {
  const argv1 = process.argv[1];
  if (!argv1) return false;
  return fileURLToPath(import.meta.url) === path.resolve(argv1);
}
