# design-director

あらゆるプロダクト（アプリ UI、ランディング、スライド、資料、マーケ素材、
データ可視化、ロゴ、メール等）のデザインプロトタイプを **対話的に探索・
生成・納品** するための Agent Skill。

[Claude Design](https://claude.com/) の振る舞いと [Open CoDesign](https://github.com/OpenCoworkAI/open-codesign)
のプロンプト体系を vendored で取り込み、[awesome-claude-design](https://github.com/rohitg00/awesome-claude-design)
の美学プリセット（editorial / terminal / warm / data-dense / cinematic /
playful / glass / brutalist / indie + remix）に基づいて方向性を選択させる。

## 概要

- **入力**: 自然言語のブリーフ（「業務向けの chat UI を data-dense
  寄りで」等）
- **出力**: `.design-studio/projects/{slug}/` に React JSX バリエーション +
  HANDOFF.md + 単体動作 HTML（React CDN + Babel standalone）
- **特徴**: 美学探索 → 3 案生成 → 深掘り → プリフライトチェック → 納品の
  7 ステップを対話で回す。サブコマンドや選択肢 UI に頼らず、自然言語
  フィードバック（「色を暖かく」「もっとコンパクトに」等）でループする

## クイックスタート

```bash
# プロジェクトのルートで Claude Code を起動
claude

# スキル発動
/design-director
```

skill が「対象ユーザー / ブランド制約 / 納期 / タイプ」の 4 項目を
silently に集めようとするので、わかる範囲で答える。あとは美学選択 → 3
バリエーション生成までは自動で進む。

ブラウザで確認するには:

```
/design-director serve
```

→ `http://localhost:3000` で `.design-studio/` 配下のギャラリーが起動する。

別環境に持ち出すには:

```
/design-director export {project-slug}
```

→ `./handoff-{slug}-{timestamp}/` に React CDN + Babel で単体動作する
バンドルが出力される。

## コマンド一覧

`/design-director [subcommand] [args]` の形式。各コマンドの詳細
ワークフローは `references/commands/{name}.md` を参照。

### コア（4 種）

| コマンド | 動作 | 詳細 |
|---|---|---|
| `/design-director` | 新規デザイン生成（デフォルト） | [`references/commands/default.md`](references/commands/default.md) |
| `/design-director serve` | `.design-studio/` の Next.js ギャラリーを起動 | [`references/commands/serve.md`](references/commands/serve.md) |
| `/design-director list` | 生成済みプロジェクト一覧表示 | [`references/commands/list.md`](references/commands/list.md) |
| `/design-director export <project>` | バンドルとしてエクスポート（handoff 形式） | [`references/commands/export.md`](references/commands/export.md) |

### 補助（4 種）

| コマンド | 動作 | 詳細 |
|---|---|---|
| `/design-director edit <project>` | 既存プロジェクトの編集・バリエーション追加 | [`references/commands/edit.md`](references/commands/edit.md) |
| `/design-director memory` | `.design-studio/memory.md` の確認・編集 | [`references/commands/memory.md`](references/commands/memory.md) |
| `/design-director reset` | `.design-studio/` をクリーンアップ（バックアップ提案あり） | [`references/commands/reset.md`](references/commands/reset.md) |
| `/design-director status` | 現在の状態（dev server / プロジェクト数 / memory.md） | [`references/commands/status.md`](references/commands/status.md) |

> upstream の取り込みはメンテナの責務。差分検出はリポルートの
> [`scripts/check-diff-upstream.ts`](../../../../scripts/check-diff-upstream.ts)
> で行う（ユーザー向けサブコマンドはなし）。

## `.design-studio/` の構造

skill は呼び出し元プロジェクトのルート直下に `.design-studio/` を作る
（`.gitignore` 対象、プロジェクトを汚染しない）:

```
.design-studio/
├── app/                          # Next.js ギャラリー（serve で起動）
├── projects/
│   └── {slug}/
│       ├── components/*.jsx      # 再利用コンポーネント
│       ├── variations/*.jsx      # バリエーション
│       ├── styles.css            # デザイントークン + 共通スタイル
│       ├── manifest.json         # 7 フィールド（title / createdAt / aesthetic / type / variations / selectedVariation / tokenSource）
│       ├── HANDOFF.md            # 統合担当向けサマリー
│       └── {slug}.html           # React CDN + Babel で単体動作する HTML
└── memory.md                     # プロジェクト横断の自然言語コンテキスト
```

## 利用例

### 新規デザイン生成

```
> User: /design-director

> Claude: 4 つだけ確認させて。
  1. 対象ユーザーは？
  2. 既存ブランド・参考サイトはある？
  3. ダーク前提 or ライト前提？
  4. 1 画面 or 複数画面？

> User: B2B SaaS、データ多め、参考は datadog、ダーク、1 画面

> Claude: data-dense ファミリーで進める。3 案生成中…
  → variations/variation-a.jsx, variation-b.jsx, variation-c.jsx
  プリフライト 12 項目チェック OK。
  ブラウザで見るなら /design-director serve、書き出すなら export。
```

### 既存プロジェクトの編集

```
> User: /design-director edit ops-dashboard-v1

> Claude: manifest を読んだ。selectedVariation は B、a/b/c の 3 案。
  どれを触る？ もしくは新規 4 案目を追加？

> User: B の警告色をオレンジ寄りに落として

> Claude:（styles.css の --color-warn を変更）
  HANDOFF.md と {slug}.html を再生成。
```

### バンドル書き出し

```
> User: /design-director export ops-dashboard-v1

> Claude: デフォルトは ./handoff-ops-dashboard-v1-20260425-103000/。
  別パス指定する？

> User: OK

> Claude:（fs.cp で全ファイルコピー）
  ✅ エクスポート完了。
  ブラウザで {slug}.html を開けば単体動作。
  別 Claude Code セッションで HANDOFF.md を渡せば統合作業に引き継げる。
```

## トラブルシューティング

| 症状 | 原因 / 対処 |
|---|---|
| `bun dev` 起動で `multiple lockfiles` 警告 → 親プロジェクトの Next.js が立つ | cwd を `.design-studio/` にしてから起動。`/design-director serve` は内部で `cd .design-studio && bun dev` を 1 回の Bash 呼び出しでまとめて実行する |
| `{project}.html` の iframe が真っ白 | outer script に `</script` リテラルが混入していると HTML パーサが script を早期終了する。`references/handoff-html-spec.md` の section 4 自己チェックで grep し、`<` を全て `\x3c` でエスケープする |
| skill 中に「覚えておいて」と言ったら Claude Code 本体の auto memory が起動 | skill 運用ルール違反。`.design-studio/memory.md` のみに保存する。`SKILL.md` 上部「運用ルール > メモリと永続化」と `references/commands/memory.md` 冒頭の「重要」ブロック参照 |
| `.design-studio/` を消したい | `/design-director reset` を使う（バックアップ提案 → 最終確認 → 削除の 2 段階確認） |
| port 3000 が他プロセスに占有されている | `/design-director serve` がケース 3「別ポートで起動」を提案する。`PORT=3001` で別ポート起動可 |
| `.design-studio/.upstream-cache/` や `.design-studio/.upstream-state.json` が残っている | 過去バージョン（v0.3.x 以前）の残骸。本バージョンでは生成しないので手動で `rm -rf` して問題なし |

## ライセンスと vendored 資産

`references/` 配下の vendored 資産:

- `prompts/`, `design-skills/`, `builtin-skills/` — [OpenCoworkAI/open-codesign](https://github.com/OpenCoworkAI/open-codesign) より
- `design-md/`, `prompt-packs/`, `recipes/` — [rohitg00/awesome-claude-design](https://github.com/rohitg00/awesome-claude-design) より

vendored ファイルは無改変で保持する。upstream の更新追従はメンテナが
[`scripts/check-diff-upstream.ts`](../../../../scripts/check-diff-upstream.ts)
で差分を検出して PR で取り込む（ユーザー向けの取り込みコマンドは提供しない）。
詳細な帰属表示はリポジトリルートの [ATTRIBUTIONS.md](../../../../ATTRIBUTIONS.md) を参照。
