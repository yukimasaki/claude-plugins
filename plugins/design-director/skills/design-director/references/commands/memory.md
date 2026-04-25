# /design-director memory

`.design-studio/memory.md`（プロジェクト横断のコンテキスト保存ファイル）
の内容を確認・追記・編集するコマンド。Q6-3 の「Claude Code 本体メモリを
使わず自己完結」の方針に従い、このファイルだけでプロジェクト文脈を
維持する。

**重要**（`/design-director` セッション内の記憶要求全般）:

ユーザーが `/design-director` のワークフロー中に「覚えておいて」「記憶して」
「remember」等と指示した場合、保存先は **常に `.design-studio/memory.md`** で
あって、Claude Code 本体の auto memory（`~/.claude/projects/.../memory/`、
auto memory スキル等）ではない。

- auto memory スキル（`Recalled / wrote N memories`）が起動しようとしたら
  **即座に stop し**、代わりに `.design-studio/memory.md` を Edit / Write する
- 既に auto memory に書いてしまった場合は、該当ファイルを削除してから
  `.design-studio/memory.md` に書き直す。ユーザーにも「auto memory ではなく
  スキル側の memory.md に保存し直した」と loud で報告する
- この原則は SKILL.md 上部「運用ルール > メモリと永続化」にも記載

## 前提

- 引数: なし
- `.design-studio/` が未作成の場合は「まだセットアップされていません」
  を案内して終了（setup-studio は自動実行しない、memory は副作用を
  持たない参照・軽編集コマンド）
- `.design-studio/memory.md` は初回の `/design-director`（新規生成）
  実行時に自動生成される。それ以前に本コマンドを呼ぶとファイルが
  存在しない

## ワークフロー

### 1. ファイル存在確認

1. `.design-studio/` が無い → 「まだセットアップされていません」
   + `/design-director` を先に実行する案内で終了
2. `.design-studio/memory.md` が無い → 「まだ memory が作成されていません」
   + 次回 `/design-director` 実行時に自動生成される旨を案内して終了
3. あれば次へ

### 2. 内容表示

1. `.design-studio/memory.md` を全文 Read
2. Markdown そのままを loud で表示（加工しない）。長い場合は
   「以下が現在の memory（N 行）」のヘッダを付けて表示

### 3. 追記・編集の有無を確認

ユーザーに次のいずれかを聞く（質問は 1 回のみ）:

- 追記したい内容があれば教えてください
- 削除 or 書き換えしたい箇所があれば範囲を指定してください
- 表示だけで OK ならその旨

### 4. Edit で反映（追記・編集指示があった場合のみ）

1. 追記: 既存末尾に `---` 区切りで追記するか、指定セクションに
   追加するかをユーザーの意図から判断（Q6-3 で「自然言語で保存」と
   定めているので強い構造化はしない）
2. 削除・書き換え: Edit で最小差分を当てる
3. **編集指示が曖昧で反映場所が判断できない**場合は、具体的な見出し or
   近傍の文字列をユーザーに確認してから Edit する（推測で書き換えない）
4. 差分を loud で提示して完了を報告

## Example Run

### ケース 1: 表示のみ

```
> User: /design-director memory

> Claude: 以下が現在の memory（23 行）:

  ---
  ## プロジェクト全般
  -  系の案件は青系パレット固定（ブランドカラー #2563eb）
  - エンジニア向け UI は density 高め、caption 12px 許容
  - 

  ## 2026-04 案件
  - ops-dashboard-v1: datadog 系 data-dense、運用エンジニア向け
  - fintech-landing: editorial、mercury 寄りの高彩度で variation-d 追加
  ---

  追記・編集したい内容があれば教えてください。表示だけなら完了です。
```

### ケース 2: 追記指示

```
> User: /design-director memory

> Claude: （現在の memory を loud で表示）

> User: 「請求書関連の案件ではブランドカラーを青に固定」を
  プロジェクト全般に追記しといて。

> Claude:（Edit で `## プロジェクト全般` セクション末尾に追加）
  追記した 1 行:
    - 請求書関連の案件ではブランドカラーを青（#2563eb）に固定

  他に追記はある？
```

### ケース 3: まだ memory が作成されていない

```
> User: /design-director memory

> Claude: .design-studio/memory.md はまだ作成されていません。
  初回の `/design-director` 実行時に自動で作られるので、先に新規
  プロジェクトを 1 つ作ってから再度呼んでください。
```

### ケース 4: 未セットアップ

```
> User: /design-director memory

> Claude: .design-studio/ がまだセットアップされていません。
  `/design-director` を実行すると初回セットアップと memory.md の
  自動生成が始まります。
```

## エラー時の分岐

| 事象 | 対処 |
|------|------|
| `.design-studio/` 未作成 | 上記ケース 4 の案内で終了 |
| `memory.md` 未作成 | 上記ケース 3 の案内で終了 |
| ファイルパーミッション不足（Read 失敗） | `ls -la .design-studio/memory.md` の結果を提示し、権限確認を促す |
| 編集指示が曖昧で反映場所が判断できない | 具体的な見出し or 近傍文字列をユーザーに確認してから Edit する |
| 削除指示された箇所が存在しない | 該当箇所が見つからない旨を loud で返し、別の記述がないか確認する |

## 対応する decisions.md

- Q6-3: `.design-studio/memory.md` にプロジェクトコンテキストを自然言語で保存
- Q8-2: サブコマンド構成のうち `memory` は memory.md の表示・編集を担当
- memory（feedback_always_explain_clearly）: 表示前に現在の状態を loud で
  1 行サマリとして添える（「以下が現在の memory（N 行）」）
