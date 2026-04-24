import { promises as fs } from "node:fs";
import path from "node:path";
import type { Manifest, ProjectEntry } from "./types";

/**
 * `.design-studio/projects/*` を走査して、manifest.json を持つディレクトリだけ
 * ProjectEntry として返す。createdAt 降順にソート。
 *
 * - Next.js は `.design-studio/` を cwd として起動するため、`process.cwd()` から
 *   相対で projects/ を解決する
 * - 半端な JSON や欠損フィールドのあるディレクトリは console.warn で報告して
 *   スキップ（スキルが生成途中のプロジェクトを置いているケースをカバー）
 */
export async function listProjects(): Promise<ProjectEntry[]> {
  const projectsDir = path.join(process.cwd(), "projects");

  let entries: string[];
  try {
    const dirents = await fs.readdir(projectsDir, { withFileTypes: true });
    entries = dirents.filter((d) => d.isDirectory()).map((d) => d.name);
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }
    throw err;
  }

  const results: ProjectEntry[] = [];
  for (const slug of entries) {
    const manifestPath = path.join(projectsDir, slug, "manifest.json");
    try {
      const raw = await fs.readFile(manifestPath, "utf8");
      const manifest = JSON.parse(raw) as Manifest;
      if (!isValidManifest(manifest)) {
        console.warn(`[list-projects] invalid manifest: ${manifestPath}`);
        continue;
      }
      results.push({ ...manifest, slug });
    } catch (err) {
      const code = (err as NodeJS.ErrnoException).code;
      if (code === "ENOENT") {
        console.warn(`[list-projects] missing manifest.json: ${slug}`);
      } else {
        console.warn(`[list-projects] failed to read ${manifestPath}:`, err);
      }
    }
  }

  results.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  return results;
}

function isValidManifest(obj: unknown): obj is Manifest {
  if (!obj || typeof obj !== "object") return false;
  const m = obj as Record<string, unknown>;
  return (
    typeof m.title === "string" &&
    typeof m.createdAt === "string" &&
    typeof m.aesthetic === "string" &&
    typeof m.type === "string" &&
    Array.isArray(m.variations) &&
    (m.selectedVariation === null || typeof m.selectedVariation === "string") &&
    (m.tokenSource === "existing" || m.tokenSource === "new" || m.tokenSource === "custom")
  );
}
