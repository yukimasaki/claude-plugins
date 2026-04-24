# /design-director list

生成済みプロジェクトの一覧を確認するコマンド。
`.design-studio/projects/*/manifest.json` を走査し、title / createdAt /
aesthetic / type / バリエーション数を整形表示する。

## 前提

- 引数: なし
- `.design-studio/` 未作成時は「まだセットアップされていない」旨と
  `/design-director` の実行を促すメッセージのみ表示（setup-studio を
  自動実行しない、list は副作用を持たない参照コマンド）

## ワークフロー

### 1. プロジェクトディレクトリの列挙

1. `.design-studio/projects/` の存在確認
2. 無い or 中身が空 → ステップ 4（空メッセージ）
3. あり → Glob で `.design-studio/projects/*/manifest.json` を列挙

### 2. manifest の読み込みとフィルタ

各 manifest.json を Read し、下記フィールドを抽出する（Q2-6）:

- `title` — プロジェクト名
- `createdAt` — 生成日時（ISO 8601）
- `aesthetic` — 美学（warm / terminal / data-dense 等）
- `type` — 成果物タイプ（landing / dashboard / pitch-deck 等）
- `variations[]` — バリエーション配列（長さを表示）
- `selectedVariation` — 選ばれた案（null 許容）
- `slug` — ディレクトリ名（manifest には含まれないが、親ディレクトリ名を
  使う）

壊れた JSON / 必須フィールド欠損の manifest は **console.warn 相当で skip**
し、ユーザーには「X 件表示中（N 件は壊れているのでスキップ）」と補記。
この方針は `lib/list-projects.ts` の既存実装（Phase 3 の listProjects）と
同じ。

### 3. 整形表示

`createdAt` 降順でソートして Markdown 表で出力する:

```
| slug | title | type | aesthetic | variations | selected | createdAt |
|------|-------|------|-----------|------------|----------|-----------|
| ops-dashboard-v1 | 運用監視ダッシュボード | dashboard | data-dense | 3 | variation-b | 2026-04-25 |
| ... |
```

プロジェクト数が 10 を超える場合は **上位 10 + 残件数** の形で表示し、
全件見たい場合は `.design-studio/projects/` を直接開くか `/design-director
serve` でブラウザギャラリーを開くよう案内する。

### 4. 空状態 / セットアップ前

`.design-studio/` 未作成時:

```
.design-studio/ がまだセットアップされていません。
`/design-director` を実行すると初回セットアップと新規生成が始まります。
```

プロジェクト 0 件時:

```
まだプロジェクトがありません。
`/design-director` を実行して最初のプロトタイプを生成してください。
```

## Example Run

### ケース 1: 3 プロジェクトある

```
> User: /design-director list

> Claude:
  | slug | title | type | aesthetic | variations | selected | createdAt |
  |------|-------|------|-----------|------------|----------|-----------|
  | ops-dashboard-v1 | 運用監視ダッシュボード | dashboard | data-dense | 3 | variation-b | 2026-04-25 |
  | fintech-landing | 決済 SaaS ランディング | landing | editorial | 3 | variation-a | 2026-04-22 |
  | onboarding-slides | オンボーディング資料 | pitch-deck | warm | 4 | - | 2026-04-18 |

  続きを編集したいときは `/design-director edit <slug>`、ブラウザで
  並べて見たいときは `/design-director serve`。
```

### ケース 2: プロジェクト 0 件

```
> User: /design-director list

> Claude:
  まだプロジェクトがありません。
  `/design-director` を実行して最初のプロトタイプを生成してください。
```

### ケース 3: セットアップ前

```
> User: /design-director list

> Claude:
  .design-studio/ がまだセットアップされていません。
  `/design-director` を実行すると初回セットアップと新規生成が始まります。
```

### ケース 4: 壊れた manifest がある

```
> User: /design-director list

> Claude:
  | slug | title | ... |
  | ops-dashboard-v1 | 運用監視ダッシュボード | ... |
  | fintech-landing | 決済 SaaS ランディング | ... |

  2 件表示中（1 件は manifest.json が壊れていたのでスキップしました:
  broken-project）。該当ディレクトリを `/design-director reset` で
  整理するか、手動で `.design-studio/projects/broken-project/
  manifest.json` を修復してください。
```

## エラー時の分岐

| 事象 | 対処 |
|------|------|
| `.design-studio/` 未作成 | 空メッセージ + setup-studio ガイダンス |
| `projects/` が空ディレクトリ | 「まだプロジェクトがありません」メッセージ |
| 壊れた manifest.json | skip + ユーザー通知（上記ケース 4）|
| 必須フィールド欠損 | 同じく skip + 通知 |
| ファイルパーミッション不足 | ユーザーに `ls -la .design-studio/projects/` で権限確認を促す |

## 対応する decisions.md

- Q2-6: manifest.json の 7 フィールド
- Q8-2: サブコマンド構成のうち `list` は一覧表示を担当
- Phase 3 の lib/list-projects.ts の方針（壊れた manifest は warn して skip）
  を踏襲
