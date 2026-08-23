/**
 * ブランチ名の生成。
 *
 * 優先順位は `--branch` の明示指定 > Issue タイトル由来の自動生成 > 番号のみの
 * フォールバック（設計判断 D7 の 3 層解決を、ブランチ名に当てはめたもの）。
 */

/** Conventional Commits 風の接頭辞（`feat:` / `fix(scope):`）を拾うための正規表現 */
const CONVENTIONAL_PREFIX = /^\s*([a-z]+)(?:\([^)]*\))?!?\s*:\s*/i;

/** ブランチ名に使える type。Issue タイトルの接頭辞がこれ以外なら既定値に倒す */
const KNOWN_TYPES = new Set([
  "feat",
  "fix",
  "hotfix",
  "refactor",
  "chore",
  "docs",
  "test",
  "ci",
  "build",
  "perf",
  "style",
]);

const DEFAULT_TYPE = "feat";

/** slug の最大長。長いタイトルをそのまま入れるとパス名が読みにくくなるため切り詰める */
const SLUG_MAX_LENGTH = 48;

export type BranchNameInput = {
  issue: number;
  /** `gh issue view --json title` の値。取得できなければ null */
  title?: string | null;
  /** `--branch=` による明示指定。あれば無条件で採用する */
  explicit?: string | null;
  /** 設定ファイルの `worktree.branch`。既定は `{type}/{issue}-{slug}` */
  template?: string;
};

export const DEFAULT_BRANCH_TEMPLATE = "{type}/{issue}-{slug}";

/**
 * Issue タイトルから slug を作る。
 *
 * ASCII 英数以外は区切りとして落とすため、日本語のみのタイトルでは null を返す
 * （呼び出し側は番号だけのフォールバック名に倒す）。
 */
export function slugify(title: string | null | undefined): string | null {
  if (!title) return null;
  const withoutPrefix = title.replace(CONVENTIONAL_PREFIX, "");
  // 日本語混じりのタイトルから ASCII だけ拾うと、意味の通らない断片が残る
  // （「Issue 番号から worktree を作る」→ `issue-worktree`）。
  // 断片で名付けるより番号だけの方が読めるので、非 ASCII が混ざる時点で諦める。
  if (/[^\x00-\x7F]/.test(withoutPrefix)) return null;
  const slug = withoutPrefix
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  if (!slug) return null;
  return slug.slice(0, SLUG_MAX_LENGTH).replace(/-+$/g, "") || null;
}

/** Issue タイトルの接頭辞から type を推定する。未知・不在なら `feat` */
export function detectType(title: string | null | undefined): string {
  if (!title) return DEFAULT_TYPE;
  const matched = CONVENTIONAL_PREFIX.exec(title);
  if (!matched) return DEFAULT_TYPE;
  const type = matched[1].toLowerCase();
  return KNOWN_TYPES.has(type) ? type : DEFAULT_TYPE;
}

/**
 * ブランチ名を決める。
 *
 * slug が取れないときはテンプレートの `-{slug}` ごと落として `feat/123` の形にする
 * （`feat/123-` のような末尾ハイフンを作らないため）。
 */
export function buildBranchName(input: BranchNameInput): string {
  const explicit = input.explicit?.trim();
  if (explicit) return explicit;

  const template = input.template ?? DEFAULT_BRANCH_TEMPLATE;
  const slug = slugify(input.title);
  const type = detectType(input.title);

  const rendered = template
    .replace(/\{type\}/g, type)
    .replace(/\{issue\}/g, String(input.issue))
    .replace(/\{slug\}/g, slug ?? "");

  return rendered
    .split("/")
    .map((segment) =>
      segment.replace(/-{2,}/g, "-").replace(/^-+|-+$/g, ""),
    )
    .filter((segment) => segment.length > 0)
    .join("/");
}
