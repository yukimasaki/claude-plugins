# /design-director edit `<project>`

指定プロジェクトを **再オープン** し、ユーザーの自然言語フィードバック
で既存バリエーションを更新 or 新バリエーションを追加するコマンド。
default.md のステップ 5-7（深掘り → 検証 → 納品）を単体で呼び出す形。

## 前提

- 引数: `<project>`（プロジェクト slug、必須）
- 対象プロジェクトが `.design-studio/projects/{project}/` に存在し、
  `manifest.json` が valid（Q2-6 の 7 フィールド）であること
- `.design-studio/` 未作成の場合は「まだセットアップされていない」旨を
  提示してコマンドを終了（`/design-director` を先に実行するよう案内。
  edit はゼロから作るコマンドではない）
- Q3-2 の「ループ中はサブコマンドを設けない」が edit 内の対話にも
  適用される。ユーザーからの「もっとコンパクトに」「色を暖かく」等の
  自然言語フィードバックで反映ステップを回す

## ワークフロー

### 1. プロジェクトの検証

1. `.design-studio/projects/{project}/` の存在確認。無ければ
   `/design-director list` で一覧を見直すよう案内して終了
2. `manifest.json` を Read し、Q2-6 の 7 フィールドが揃っているか
   確認。壊れていたら該当箇所をユーザーに提示し、手修正 or
   `/design-director reset` による整理を案内して終了
3. 既存 `variations[]` の命名規則を把握する（`variation-a/b/c` 系か
   `variation-1/2/3` 系か）。以降の新バリエーション追加時はこの
   命名を踏襲する

### 2. コンテキストのウォームアップ

1. `.design-studio/memory.md` があれば Read し、過去対話の要点を
   silently に頭に入れる（loud には表示しない）
2. `components/`, `variations/`, `styles.css` を silently に把握
3. ユーザーに「どのバリエーションを触る？ 既存の調整 / 新バリエーション
   追加 / バリエーション切替のどれ？」を loud で聞く

### 3. 編集意図の整理

以下のパターンに振り分けて、ステップ 4-6 のどのサブステップを回すかを
決める:

| パターン | 該当ステップ |
|----------|-------------|
| 既存バリエーションの微調整（色、余白、タイポ、コピー） | 4a |
| 既存バリエーションの構造変更（レイアウト、コンポーネント追加） | 4a + 4b |
| 新バリエーション追加 | 4c |
| `selectedVariation` の変更のみ | 4d |

複数パターンが混ざる場合はユーザーに順番を確認してから進める。

### 4. 編集実行

#### 4a. 既存バリエーションの微調整 / 構造変更

1. 対象 `variations/{selected}.jsx` を Read
2. `tweaks-protocol.v1.txt` / `editmode-protocol.v1.txt` 流で、
   ユーザーのフィードバックを解釈（silently）
3. 影響範囲を決定（単一 JSX か、共通 `components/` も触るか、
   `styles.css` のトークンを変えるか）
4. Edit で最小差分を当てる。トークン（CSS 変数）で済むなら `styles.css`
   を優先し、JSX 改変は避ける（リグレッションを小さく保つ方針）
5. 変更したファイルを loud で箇条書き報告

#### 4b. 構造変更（コンポーネント追加・削除）

1. 新規コンポーネントは `components/{Name}.jsx` に単一 default export で
   配置（default.md の納品ルールと同じ）
2. 既存コンポーネントを削る場合は、それを参照している variation / 他
   コンポーネントが無いかを silently に grep し、孤立した import を
   同じ commit で削除する
3. JSX の相対 import パスは `./` 系で揃える（default.md と同じ方針）

#### 4c. 新バリエーション追加

1. `manifest.json` の `variations[]` から次の命名を決定:
   - `variation-a/b/c` 系なら `variation-d`
   - `variation-1/2/3` 系なら `variation-4`
2. 必要なら 3 秒だけ silently に既存 variation を比較し、**同じ families
   の中で未網羅の方向性** を提案（default.md のバリエーション方針を
   流用）。提案を loud でユーザーに 1 行サマリとして提示
3. 承認を得たら `variations/{new}.jsx` を Write で新規作成
4. `manifest.json` の `variations[]` に新エントリを追加:
   ```json
   { "name": "variation-d", "summary": "…1 行サマリ…" }
   ```
5. 新バリエーションが `selectedVariation` でない限り、`selectedVariation`
   は変更しない

#### 4d. selectedVariation の切替のみ

1. ユーザーが「B 案で確定したい」等と言った場合、`manifest.json` の
   `selectedVariation` を該当名に更新
2. HANDOFF.md の再生成（ステップ 6）を走らせて、統合情報が最新
   バリエーションに揃うようにする

### 5. プリフライト再チェック（silently + 必要時 loud）

default.md ステップ 6 のプリフライト 12 項目を silently にセルフチェックする。
4a/4c のどちらで回ったかに関わらず、変更後の成果物に対して実施。

- **silently で問題なし**: ステップ 6（納品）へ
- **6 項目以上 NG**: 強制的にステップ 4 に戻り、編集を組み直す旨を loud で伝える
- **1-5 項目 NG**: 該当項目のみ loud で報告し、ユーザーに修正 or skip を選ばせる

### 6. 納品の再生成

1. `manifest.json` に `lastEditedAt` を現在時刻（ISO 8601）で記録。
   フィールドが既存 manifest に無ければ新規追加（Q2-6 の 7 フィールドに
   後方互換で追加される「編集履歴」フィールドとして扱う）
2. `HANDOFF.md` を再生成（default.md の納品テンプレートで、最新の
   `selectedVariation` / `variations[]` / 変更履歴反映）
3. `{project}.html`（React CDN + Babel standalone の単体動作 HTML）も
   再生成（Q9-2）
4. 変更点サマリを loud で報告し、`/design-director serve` でブラウザ
   確認するか `/design-director export {project}` でバンドル書き出しに
   進むかの 2 択を案内

## Example Run

### ケース 1: 既存バリエーションの色味トーンダウン

```
> User: /design-director edit ops-dashboard-v1

> Claude: manifest を読んだ。現在の selectedVariation は variation-b、
  バリエーションは a/b/c の 3 案。どれを触る？ もしくは新規 4 案目を
  追加する？

> User: b の色を datadog よりもう少し落ち着いた感じにしたい。
  警告色の赤を朱色じゃなくてオレンジ寄りにして。

> Claude:（silently に variations/variation-b.jsx を Read。色トークンが
  styles.css に切り出されていたので、そちらを編集）
  `styles.css` の `--color-warn` を `#ef4444` → `#f97316` に変更。
  他バリエーションに影響するから、a と c は同じトークンを使ってない
  か確認済み（独自色で上書きされてた）。影響範囲は B 案のみ。

  プリフライト再チェック:
  ✅ #6 パレット: WCAG AA 通過（オレンジ / 背景 14:1）
  他項目は変更なし。

  manifest.lastEditedAt を 2026-04-25T10:12:34Z に更新、HANDOFF.md と
  ops-dashboard-v1.html を再生成した。ブラウザで見るなら
  `/design-director serve`。
```

### ケース 2: 4 つ目のバリエーション追加

```
> User: /design-director edit fintech-landing

> Claude: manifest を読んだ。既存は variation-a/b/c の 3 案、editorial
  ファミリー。4 案目の方向性はある？ 無ければ提案する。

> User: 提案して

> Claude:（silently に既存 3 案の特徴を整理）
  - A: サーバ系の静かな editorial
  - B: 密度高めの linear 系
  - C: warm + 写真主体

  4 案目の候補として "mercury 寄りの高彩度 + 強コントラスト" を提案。
  既存ファミリーの editorial 内だが、まだ試していない「色を攻める」
  方向。これで進める？

> User: OK、それで。

> Claude:（variations/variation-d.jsx を Write、manifest.variations に
  append）
  - variation-d を追加（mercury 寄り高彩度）
  - selectedVariation は既存の variation-a のまま
  - HANDOFF.md と fintech-landing.html を再生成

  ブラウザで 4 案を並べて見るなら `/design-director serve`。
```

## エラー時の分岐

| 事象 | 対処 |
|------|------|
| 存在しない project slug | `/design-director list` で一覧を見直すよう案内して終了 |
| `manifest.json` が壊れている | 壊れ箇所をユーザーに提示し、手修正 or `/design-director reset` を案内して終了 |
| バリエーション命名の衝突（既に `variation-d` がある） | さらに次の命名（`variation-e` 等）を提案してユーザー確認 |
| `lastEditedAt` の書き込みに失敗 | ファイルパーミッションを確認する旨を loud で案内（`ls -la` の結果提示） |
| HANDOFF.md の再生成で想定外のエラー | 原因を loud で提示し、該当箇所の手修正を促す。必要なら `/design-director reset` で最初から |
| プリフライト 6 項目以上 NG | 強制的にステップ 4 に戻り、ユーザーに編集方針の再相談を依頼 |

## 対応する decisions.md

- Q2-6: manifest.json の 7 フィールド + 編集用 `lastEditedAt` の後方互換追加
- Q3-2: ループ中はサブコマンドを設けない（edit 内の対話にも適用）
- Q6-1: 対話重視寄りの状況適応
- Q6-3: `.design-studio/memory.md` のコンテキストをウォームアップに使う
- Q8-2: サブコマンド構成のうち `edit` は既存プロジェクトの再オープンを担当
- Q9-4: HANDOFF.md は納品ステップで自動生成、edit でも再生成する
- 参照: `references/prompts/tweaks-protocol.v1.txt`,
  `references/prompts/editmode-protocol.v1.txt`（編集ループの流儀）
