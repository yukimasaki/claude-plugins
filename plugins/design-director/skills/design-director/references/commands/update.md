# /design-director update

awesome-claude-design / open-codesign の **upstream 更新を取り込む**
コマンド。スクリプトは差分検出 + Markdown サマリー出力のみを担当し
（`scripts/sync-upstream.ts`）、実ファイルの書き換えは Claude Code が
Read/Edit/Write で行う（Q7-3「スクリプトは検出器、Claude はマージャー」）。

## 前提

- 引数（任意）: `awesome-claude-design` | `open-codesign`（省略時は対話で選択）
- `.design-studio/` 未作成時は先に `setup-studio.ts` を走らせる（`.upstream-cache/`
  の器が必要）
- `scripts/sync-upstream.ts` は Phase 4 で実装済み。本コマンドはそれを呼び出す
  オーケストレーター

## ワークフロー

### 1. 追跡リポの確定

1. 引数があればそれを採用
2. 無ければユーザーに対話で聞く:
   - `awesome-claude-design`（design-md / prompts → prompt-packs / recipes）
   - `open-codesign`（prompts.v1.txt / design-skills / builtin-skills）

### 2. 同期スクリプトの実行

1. Bash で `bun .claude/skills/design-director/scripts/sync-upstream.ts <repo>`
   を呼び出す（**絶対パスで呼ぶこと**。スクリプトは `findTargetRoot()` で
   cwd から `.design-studio/` の親リポルートを自動検出するため、`.design-studio/`
   内から呼ばれても `.design-studio/.design-studio/.upstream-cache/` のような
   二重ネストは起きない）
2. stdout に出る Markdown サマリーをキャプチャ
3. スクリプトは **vendored ファイルの書き換えをしない**。
   `.design-studio/.upstream-cache/{repo}/` が上書きされ、
   `.design-studio/.upstream-state.json` の当該 repo エントリが最新に
   マーキングされる（state は `.design-studio/` 配下の ephemeral な
   runtime state で gitignored）
4. **bootstrap 判定**: 実行前に `.design-studio/.upstream-state.json` が空 `{}`
   だった場合、スクリプトは全 upstream ファイルを「新規」として分類する
   （state に prev hash が無いため）。このとき vendored ファイルは Phase 1
   で SHA256 一致済みなので、**実ファイル反映は不要** であり、ステップ 4-5
   では以下のどちらかを案内する:
   - 「state だけ初期化して実ファイルは触らない」（既定推奨）
   - SHA256 突合で local と upstream が一致する件のみ `unchanged` に
     再分類し、不一致だけユーザーに提示

### 3. 差分の要約提示

サマリーを Claude 側で読み、ユーザーに噛み砕いて提示する:

- 新規 (N): upstream に新しく追加された候補
- 変更 (M): 既存 vendored と hash 不一致
- 削除 (K): upstream から消えたが vendored には残っている
- 変更なし (U): 省略（件数だけ伝える）

新規・変更・削除 の 3 グループそれぞれについて、**ファイル一覧 + 粒度の
取り込み判断** をユーザーに求める。

### 4. 取り込み承認の取得

ユーザーは以下のいずれかで答える:

- 「全部取り込む」→ 新規 + 変更 を全て反映、削除も実施
- 「新規のみ」→ 新規だけ反映、変更・削除は保留
- 「このファイルだけ」→ ファイル単位で指定
- 「やめる」→ 何もせず終了（state.json はスクリプトが既に更新済みだが、
  vendored ファイルは不変）

### 5. 実ファイルの反映

1. 承認されたファイルごとに、`.upstream-cache/{repo}/{upstreamPath}` から
   内容を Read
2. 対応する `.claude/skills/design-director/references/{localPath}` に
   Write（新規）or Edit（変更）
3. 削除承認されたファイルは `fs.rm` 相当で消す
4. ** 拡張（``）は常に保持**。state.json に入って
   おらず upstream にも現れないので、自動的に対象外になる（過去に
   設計済み）

### 6. 結果の報告

- 反映したファイル一覧（path と操作: added / updated / removed）
- スキップしたファイル（保留中の差分）
- 次のアクション提案:
  - 変更点を動作確認したい → `/design-director serve`
  - vendored ファイル（`references/` 配下）の git diff をレビューして
    commit 化（ユーザーの commit 判断は手動）。`.design-studio/.upstream-state.json`
    自体は gitignored なので commit 対象ではない

## Example Run

```
> User: /design-director update

> Claude: どちらを更新する？
  - awesome-claude-design（美学 DESIGN.md / prompt-packs / recipes）
  - open-codesign（JSX design-skills / builtin-skills / prompts）

> User: awesome-claude-design

> Claude: sync スクリプトを走らせた。結果:
  - 新規 2: design-md/remix/claude-x-linear.md, recipes/wireframe-from-screenshot.md
  - 変更 1: design-md/warm/mercury.md（sha256: abc... → def...）
  - 削除 0
  - 変更なし 52

  新規 2 件は中身を見た感じ一通り追加する価値がある。mercury.md の変更は
  微調整（h1 のサイズ変更と paragraph spacing 調整）だけど、 側で
  何か編集した覚えはある？

> User: mercury は触ってないので上書きで OK。新規も全部入れて。

> Claude: 承知。反映します:
  - added: references/design-md/remix/claude-x-linear.md
  - added: references/recipes/wireframe-from-screenshot.md
  - updated: references/design-md/warm/mercury.md
  `.design-studio/.upstream-state.json`（gitignored）も更新済み。
  変更点をギャラリーで確認するなら `/design-director serve`。
  コミットはそちらで手動にお願い（`git add references/ && git commit`、
  state は gitignored なので混入しない）。
```

## エラー時の分岐

| 事象 | 対処 |
|------|------|
| network 断（git clone 失敗） | スクリプトは「upstream ... のクローン/プルに失敗」で終了。ユーザーに再試行を提案 |
| state.json の zod 検証エラー | state ファイルの破損を検知。ユーザーに `.design-studio/.upstream-state.json` の内容確認を依頼、必要なら `{}` にリセット |
| `` が upstream に偶然出現 | マッピング対象外（upstream glob と localPath 規約上あり得ないが、万一なら明示的にスキップ + ユーザー通知） |
| ユーザーが既に vendored ファイルを手編集済み | 「手編集とマージしますか？」と確認。Claude が 3-way の merge を手当て（ours/theirs を提示） |
| upstream の構造変更（glob マッピング変更） | `scripts/sync-upstream.ts` の REPOS 定数の更新が必要。ユーザーに「マッピング更新用 Issue が必要」と伝える |

## 対応する decisions.md

- Q7-1: 取り込みスクリプト + スキルがマージ
- Q7-2: 2 リポ切り替え可能
- Q7-3: スクリプト = 検出器 / Claude = マージャー
- Q7-4: `.design-studio/.upstream-cache/` に clone
- Q7-5: `.design-studio/.upstream-state.json` で SHA256 比較（Phase 7 で
  tracked `references/` 配下から ephemeral `.design-studio/` 配下に移行）
- Q7-6: マッピング表は REPOS 定数（sync-upstream.ts 内）
- Q6-5: `` は vendored と分離、upstream 更新時に保持
- Q1-6: `.design-studio/` 未作成なら setup-studio を先に実行
