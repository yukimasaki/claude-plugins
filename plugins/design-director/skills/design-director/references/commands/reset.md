# /design-director reset

`.design-studio/` 配下を **クリーンアップ** するコマンド。破壊的動作の
ため、中身を事前に棚卸しし、projects があればバックアップ提案を先に行う。
削除実行は **ユーザーの明示同意後のみ**。

## 前提

- 引数: なし
- `.design-studio/` が未作成なら「何もクリーンアップする対象がない」と
  loud で返して終了（副作用なし）
- 本コマンドは `.design-studio/` 全体を削除する破壊的コマンドである。
  ユーザー確認なしに `rm` 相当の処理を実行してはならない（CLAUDE.md
  「Executing actions with care」遵守）

## ワークフロー

### 1. 中身の棚卸し

`.design-studio/` が存在する場合、以下を silently に取得し、loud で
サマリ表示する:

| 項目 | 取得方法 |
|------|---------|
| projects 数 | `.design-studio/projects/*/manifest.json` の件数（Glob） |
| memory.md 有無 + 最終更新 | `fs.stat .design-studio/memory.md` |
| .upstream-cache サイズ | `du -sh .design-studio/.upstream-cache/ 2>/dev/null`（無い場合は skip） |
| 最終 update 日時 | `references/.upstream-state.json` の各 repo `lastSyncedAt` |
| dev server 起動状態 | `ss -tlnp 2>/dev/null | grep ":3000"` |

表示例:

```
.design-studio/ の中身:
  - projects: 3 件（ops-dashboard-v1, fintech-landing, onboarding-slides）
  - memory.md: あり（最終更新 2026-04-24）
  - .upstream-cache: 24 MB
  - 最終 update: awesome-claude-design 2026-04-23 / open-codesign 未実行
  - dev server: 起動中（PID 12345、/design-director serve 由来）
```

### 2. バックアップ提案（projects ≥ 1）

projects が 1 件以上あれば、削除前にバックアップするか聞く:

```
projects が 3 件あります。削除前に ./design-studio-backup-{YYYYMMDD-HHMMSS}/
に退避しますか？

  1. バックアップしてから削除（推奨）
  2. バックアップせず削除
  3. キャンセル
```

projects が 0 件でも、memory.md が存在する場合は簡易に「memory.md は
退避する？」を 1 回だけ聞く（ユーザーが自然言語で書いた文脈なので
取り戻しにくい）。

### 3. dev server 停止の確認

dev server が起動中なら、削除前に停止するかを loud で確認:

```
dev server が起動中です（PID 12345）。
`pkill -9 -f "bun dev"` で停止してから削除を進めます。続行しますか？
```

ユーザー承認後に停止。停止はしない場合、削除中にファイルロックで
失敗する可能性を loud で警告する。

### 4. バックアップ実行（ケース 1 選択時）

1. `fs.cp` 相当で `.design-studio/` 全体を `./design-studio-backup-{timestamp}/`
   に再帰コピー
2. `.upstream-cache` はサイズが大きくなりがちなので、`du` の結果から
   想定所要時間を loud で提示（「24 MB なら数秒で完了する見込み」等）
3. コピー完了を報告してからステップ 5 へ

### 5. 削除実行

1. **最終確認** を loud で実施（「`.design-studio/` を削除します。よろしい
   ですか？ (y / N)」）
2. 承認後に `fs.rm -rf .design-studio/` 相当で削除
3. 削除完了を loud で報告

### 6. 次アクション案内

```
✅ .design-studio/ を削除しました。

次のアクション:
- 新規プロトタイプを作る → `/design-director`（setup-studio が自動実行される）
- バックアップから復元したい → `mv ./design-studio-backup-{timestamp}/
  .design-studio/`
```

## Example Run

### ケース 1: projects あり → バックアップ後削除

```
> User: /design-director reset

> Claude: .design-studio/ の中身:
  - projects: 3 件（ops-dashboard-v1, fintech-landing, onboarding-slides）
  - memory.md: あり（最終更新 2026-04-24）
  - .upstream-cache: 24 MB
  - 最終 update: awesome-claude-design 2026-04-23 / open-codesign 未実行
  - dev server: 停止中

  projects 3 件あるので、削除前にバックアップ提案します。
  1. バックアップしてから削除（推奨）
  2. バックアップせず削除
  3. キャンセル

> User: 1

> Claude:（fs.cp で ./design-studio-backup-20260425-103012/ に再帰コピー、
  24 MB 相当を数秒で完了）
  バックアップ完了。続いて削除を実行します。よろしいですか？ (y / N)

> User: y

> Claude:（fs.rm -rf）
  ✅ .design-studio/ を削除しました。
  バックアップ: ./design-studio-backup-20260425-103012/

  次のプロトタイプを作るなら `/design-director`、戻すなら
  mv でバックアップディレクトリをリネームしてください。
```

### ケース 2: projects 0 件 → バックアップ不要で即削除確認

```
> User: /design-director reset

> Claude: .design-studio/ の中身:
  - projects: 0 件
  - memory.md: なし
  - .upstream-cache: 0 MB（未作成）
  - dev server: 停止中

  projects も memory.md もありません。バックアップは不要に見えます。
  削除してよろしいですか？ (y / N)

> User: y

> Claude:（fs.rm -rf）
  ✅ .design-studio/ を削除しました。
  次回 `/design-director` を実行すると setup-studio が自動で走ります。
```

### ケース 3: ユーザーがキャンセル

```
> User: /design-director reset

> Claude:（棚卸し loud 表示）
  ... バックアップ提案 ...

> User: キャンセル

> Claude: 了解。何も削除していません。
  現状のまま続けるなら `/design-director edit {project}` で既存
  プロジェクトを触れます。
```

### ケース 4: 未セットアップ

```
> User: /design-director reset

> Claude: .design-studio/ は存在しません。クリーンアップ対象がないので
  何もせず終了します。
```

## エラー時の分岐

| 事象 | 対処 |
|------|------|
| `.design-studio/` 未作成 | 上記ケース 4 の案内で終了（副作用なし）|
| バックアップコピー失敗（ディスク容量不足、権限） | 失敗箇所を loud で提示し、削除は実行しない（復元可能な状態を保つ） |
| `.upstream-cache` が大きすぎて長時間かかる | サイズと想定所要時間を事前に提示し、ユーザーに「時間を許容 / バックアップせず削除」を選ばせる |
| 削除権限不足（`EACCES`） | `ls -la .design-studio/` の結果を提示し、権限確認を促す |
| dev server が動作中で削除に失敗 | `pkill -9 -f "bun dev"` で停止してからリトライする旨を案内 |
| バックアップ dir の衝突（同秒内で再実行） | サフィックス `-2` を付けて回避（export.md と同じ方針）|

## 対応する decisions.md

- Q8-2: サブコマンド構成のうち `reset` は `.design-studio/` のクリーン
  アップを担当
- Q1-5: `.design-studio/` は gitignore 対象で、プロジェクト内で完結
- memory（feedback_kill_dev_server）: dev server 停止は `pkill -9` で
  確実に（Phase 3 retrospective の学び）
- memory（feedback_no_workaround）: その場しのぎの削除はしない。projects
  があれば必ずバックアップ提案を先に行う
- CLAUDE.md「Executing actions with care」: 破壊的動作はユーザー確認必須
