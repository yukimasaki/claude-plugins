/**
 * worktree 段の委譲判定（設計判断 D3）。
 *
 * 既に worktree セットアップ手順を持つリポジトリでは、その手順を優先する。
 * 事前チェックや env の扱いはリポジトリ固有の事情を織り込んでいるため、
 * プラグインが自前の作り方を上書きすると同じことを 2 か所で管理することになる。
 */

/** `delegate: "auto"` のときに探す skill 名。先に見つかったものを使う */
export const AUTO_DELEGATE_CANDIDATES = ["mk-wktree", "mk-worktree"];

export type DelegateDecision =
  | { mode: "skill"; skillName: string; reason: string }
  | { mode: "builtin"; reason: string };

export type ResolveDelegateInput = {
  /** 設定値。"auto" | "none" | skill 名 */
  setting: string;
  /** `.claude/skills/<name>/SKILL.md` があるかを返す */
  skillExists: (name: string) => boolean;
};

export function resolveDelegate(input: ResolveDelegateInput): DelegateDecision {
  const setting = input.setting.trim();

  if (setting === "none") {
    return { mode: "builtin", reason: 'delegate: "none" が指定されている' };
  }

  if (setting === "auto") {
    for (const candidate of AUTO_DELEGATE_CANDIDATES) {
      if (input.skillExists(candidate)) {
        return {
          mode: "skill",
          skillName: candidate,
          reason: `既存の ${candidate} skill を検出した`,
        };
      }
    }
    return {
      mode: "builtin",
      reason: `既存の worktree 手順が見つからない (探した skill: ${
        AUTO_DELEGATE_CANDIDATES.join(", ")
      })`,
    };
  }

  if (!input.skillExists(setting)) {
    // 明示指定が解決できないのは設定ミス。内蔵手順で黙って代替すると、
    // 「委譲したつもりが別の作り方で作られていた」に気付けない。
    throw new Error(
      `worktree.delegate に指定された skill が見つかりません: ${setting}`,
    );
  }

  return {
    mode: "skill",
    skillName: setting,
    reason: `worktree.delegate で ${setting} が明示指定されている`,
  };
}
