import { promises as fs } from "node:fs";
import path from "node:path";

export type JsxSource = {
  /** プロジェクトルート（projects/{slug}/）からの相対パス */
  path: string;
  /** ソース本体（UTF-8） */
  source: string;
};

export type PreviewPayload = {
  jsxSources: JsxSource[];
  css: string;
};

export type LoadResult =
  | { ok: true; payload: PreviewPayload }
  | { ok: false; error: string };

/**
 * プロトタイプを iframe で表示するための素材を、ディスクから読み込んで返す。
 *
 * - `components/*.jsx` を先に、`variations/{variation}.jsx` を最後に並べる
 *   （Claude Design handoff の読み込み順序を踏襲。先に登録された関数・コン
 *   ポーネントを後段で参照できる）
 * - `styles.css` があれば同梱、なければ空文字列
 * - 変数名の衝突や文法エラーは API 層では検知せず、iframe 側 Babel で
 *   報告する（preview.html がエラーを画面に出す）
 */
export async function loadProjectPreview(
  slug: string,
  variation: string,
): Promise<LoadResult> {
  const projectDir = path.join(process.cwd(), "projects", slug);
  try {
    const stat = await fs.stat(projectDir);
    if (!stat.isDirectory()) {
      return { ok: false, error: `project not found: ${slug}` };
    }
  } catch {
    return { ok: false, error: `project not found: ${slug}` };
  }

  const jsxSources: JsxSource[] = [];

  // components/*.jsx（存在しなければスキップ）
  const componentsDir = path.join(projectDir, "components");
  try {
    const entries = await fs.readdir(componentsDir);
    const jsxFiles = entries.filter((e) => e.endsWith(".jsx")).sort();
    for (const name of jsxFiles) {
      const abs = path.join(componentsDir, name);
      const source = await fs.readFile(abs, "utf8");
      jsxSources.push({ path: `components/${name}`, source });
    }
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code !== "ENOENT") {
      return { ok: false, error: `failed to read components/: ${(err as Error).message}` };
    }
  }

  // variations/{variation}.jsx（必須）
  const variationFile = `${variation}.jsx`;
  const variationPath = path.join(projectDir, "variations", variationFile);
  try {
    const source = await fs.readFile(variationPath, "utf8");
    jsxSources.push({ path: `variations/${variationFile}`, source });
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") {
      return { ok: false, error: `variation not found: ${variation}` };
    }
    return { ok: false, error: `failed to read variation: ${(err as Error).message}` };
  }

  // styles.css（任意）
  let css = "";
  try {
    css = await fs.readFile(path.join(projectDir, "styles.css"), "utf8");
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code !== "ENOENT") {
      return { ok: false, error: `failed to read styles.css: ${(err as Error).message}` };
    }
  }

  return { ok: true, payload: { jsxSources, css } };
}
