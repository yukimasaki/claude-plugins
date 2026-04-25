# /design-director export `<project>`

指定プロジェクトを **ポータブルバンドル** として書き出すコマンド。
Claude Design 互換の handoff 形式で、`.design-studio/projects/{project}/`
の全ファイルをユーザー指定のディレクトリにコピーする。ビルド不要、
`{project}.html` をブラウザで開くだけで単体動作（React CDN + Babel
standalone、Q9-2）。

## 前提

- 引数: `<project>`（プロジェクト slug、必須）
- 対象プロジェクトが `.design-studio/projects/{project}/` に存在し、
  manifest.json が valid であること
- `{project}.html` が生成済み（`/design-director` の納品ステップ 7 で
  自動生成される）

**重要な注意**: export は **バンドルを書き出すだけ**。既存コードベースへの
統合はスキル責務外（Q9-3）。統合したい場合は通常の Claude Code を別途
起動し、バンドル内の `HANDOFF.md` を読ませて実装を依頼する。

## ワークフロー

### 1. project slug の検証

1. `.design-studio/projects/{project}/` の存在確認
2. `manifest.json` を Read して valid な manifest であることを確認（Q2-6
   の 7 フィールド）
3. `{project}.html` の存在確認:
   - **存在する** → ステップ 2 へ進む
   - **存在しない** → **export コマンドはここで停止する**。export 中に
     skill が silently に HTML を生成してはならない（過去に観測した
     品質ブレの再発防止）。ユーザーに以下を loud で案内して終了:
     ```
     `{project}.html` がまだ生成されていません。納品ステップが
     完了していない可能性があります。先に `/design-director edit
     {project}` を実行して HTML を再生成してから、export を再実行
     してください。
     ```
   - **例外**: ユーザーが「export 内で再生成してくれ」と **明示的に
     指示した** 場合のみ、`references/handoff-html-spec.md` の手順に
     従って HTML を再生成する。その際も spec の section 4 自己チェックは
     必須。曖昧な指示で勝手に再生成しない

### 2. 出力先の対話決定

1. デフォルトパスを提案: `./handoff-{project}-{YYYYMMDD-HHMMSS}/`
   （Q9-1）
2. ユーザーが別パス（絶対 or 相対）を指定したらそれを採用
3. 出力先が既存の場合、以下いずれかを選ばせる:
   - 別名（サフィックス `-2` 等）で回避
   - 上書き（ユーザーの明示同意必須）
   - キャンセル

### 3. 再帰コピー

1. 出力先ディレクトリを mkdir
2. `fs.cp` 相当で `.design-studio/projects/{project}/` の全ファイルを
   再帰コピー:
   - `components/*.jsx`
   - `variations/*.jsx`
   - `styles.css`
   - `manifest.json`
   - `HANDOFF.md`
   - `{project}.html`
3. サブディレクトリ構造を保持したままコピー

### 4. ポータブルサニティチェック

コピー後、バンドル単体で動作することを silently に確認:

1. `{project}.html` が React CDN / Babel standalone / 相対参照の JSX を
   読み込む構造になっているか
2. 他の `.design-studio/` 配下や絶対パスを参照していないか
3. 問題があれば警告を表示（直ちには処理を止めず、ユーザーに通知）

### 5. 完了報告 + 次のアクション案内

```
✅ エクスポート完了

配置パス: {absolute_path}
ファイル数: N

次のアクション:
- ブラウザで確認: ファイルマネージャで `{output}/{project}.html` を
  開くか、`file://{absolute_path}/{project}.html` をブラウザに貼る
- バンドルを共有: フォルダごと zip するか、git に push
- 既存コードベースへの統合: 本コマンドの責務外（Q9-3）。別の Claude Code
  セッションを起動し、HANDOFF.md を渡して「このプロトタイプを実装して」
  と依頼してください。バンドル側の `HANDOFF.md` / `variations/*.jsx` /
  `styles.css` が統合に必要な情報を全て持っています
```

## Example Run

### ケース 1: デフォルトパスで書き出し

```
> User: /design-director export ops-dashboard-v1

> Claude: 出力先を `./handoff-ops-dashboard-v1-20260425-032547/` に
  するけど OK？ 別パスが良ければ指定して。

> User: OK

> Claude:（fs.cp で 8 ファイルを再帰コピー）
  ✅ エクスポート完了
  配置パス: /home/user/project/handoff-ops-dashboard-v1-20260425-032547
  ファイル数: 8

  次のアクション:
  - ブラウザで確認: `file:///home/user/project/handoff-ops-dashboard-v1-20260425-032547/ops-dashboard-v1.html` を開く
  - 既存コードベースへの統合: 別の Claude Code セッションを起動して、
    バンドル内の HANDOFF.md を読ませて実装を依頼してください
```

### ケース 2: ユーザー指定パスで書き出し

```
> User: /design-director export fintech-landing

> Claude: デフォルトは `./handoff-fintech-landing-20260425-034011/`。
  別パスが良ければ指定して。

> User: ~/Desktop/landing-review/ に書き出して

> Claude:（fs.cp 実行）
  ✅ エクスポート完了
  配置パス: /home/user/Desktop/landing-review
  ...
```

### ケース 3: 出力先が既存

```
> User: /design-director export ops-dashboard-v1

> Claude: デフォルトの `./handoff-ops-dashboard-v1-20260425-035142/` は
  既に存在してる。以下どうする？
  1. 別名（`-2` サフィックス）で書き出す
  2. 上書き（既存の内容は消える）
  3. キャンセル

> User: 1 で

> Claude:（`./handoff-ops-dashboard-v1-20260425-035142-2/` に書き出し）
  ✅ エクスポート完了...
```

## エラー時の分岐

| 事象 | 対処 |
|------|------|
| 存在しない project slug | `/design-director list` で一覧を見直すよう案内 |
| manifest.json が壊れている | Issue を伝え、`/design-director edit <project>` で修復 or 手動で manifest 確認 |
| `{project}.html` 未生成 | export を停止し、ユーザーに `/design-director edit <project>` 実行を促して終了。silently に再生成してはならない（ステップ 1-3 参照、 で品質ブレの根本原因と判明）|
| 出力先が既存 | 上記ケース 3 の分岐（勝手に上書きしない）|
| コピー先のパーミッション不足 | ユーザーに書き込み権限の確認を促す |
| 実コピー中にエラー | 中途半端に書かれた出力先を削除するか確認（途中残骸を残さない）|

## 対応する decisions.md

- Q9-1: 出力先デフォルトは `./handoff-{project}-{timestamp}/`、ユーザー
  指定可
- Q9-2: バンドル構成は Claude Design 互換。`{project}.html` が React CDN
  + Babel で単体動作
- Q9-3: 既存コードベースへの統合はスキル責務外
- Q9-4: HANDOFF.md は納品ステップで自動生成済み（本コマンドは再生成しない）
- Q9-5: export = 「個別プロジェクトのバンドルエクスポート」のみ
