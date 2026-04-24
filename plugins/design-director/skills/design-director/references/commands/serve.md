# /design-director serve

`.design-studio/` 配下の **Next.js ギャラリー** を起動してブラウザで
プロジェクト一覧 + バリエーションプレビューを確認させるコマンド。

## 前提

- 引数: なし
- `.design-studio/` 未作成時は先に `setup-studio.ts` を走らせる（同時に
  `bun install` も完走する）
- 既に Next.js dev server が起動済みの場合はそれを検出し、再利用する

## ワークフロー

### 1. セットアップ判定

1. `.design-studio/` の存在確認
2. 未作成なら `setup-studio.ts` を実行し、完走を待つ
3. `.design-studio/node_modules/` が無い場合は `cd .design-studio && bun install`
   を先に実行（`setup-studio.ts` の中で走るが、途中停止していた場合の保険）

### 2. ポート 3000 の使用状況確認

1. `ss -tlnp 2>/dev/null | grep ":3000"` でリッスン中プロセスを調べる
2. 空いている → ステップ 3 へ
3. 使用中 → ステップ 2b へ

#### 2b. 既存プロセスの扱い

1. `ps -p <pid>` でコマンドラインを確認
2. それが `.design-studio/` で起動された bun dev なら **再利用提案**:
   - 「port 3000 で既に起動済み。`http://localhost:3000` を開いてください」
3. それ以外（別プロジェクトの dev server 等）なら **ポート競合を報告**:
   - ユーザーに、既存プロセスを止めるか別ポート（3001 等）で起動するかを聞く
   - `PORT=3001 bun dev` の起動指示をユーザー操作に委ねる（勝手に kill しない）

### 3. dev server の起動

1. `cd .design-studio && bun dev` を background で起動する
   - Bash tool の `run_in_background: true` を使う
2. PID をユーザーに伝える（停止時に `pkill -9 -f "bun dev"` または `kill -9 <pid>`）
3. 起動確認: 10 秒以内に `curl -sI http://localhost:3000` で 200 が返ることを
   確認。失敗時はログを Read してエラー内容をユーザーに提示

### 4. ユーザーへの案内

- ギャラリー URL: `http://localhost:3000`
- プロジェクト詳細: `http://localhost:3000/{project-slug}`
- 停止方法: `pkill -9 -f "bun dev"`（全 bun dev プロセスを停止）
- プロジェクト 0 件時はギャラリーが空メッセージを出す旨を添える

## Example Run

### ケース 1: 初回起動

```
> User: /design-director serve

> Claude: port 3000 は空いているので、新規に起動する。
  `cd .design-studio && bun dev` を background 実行中...
  （3 秒待機）
  起動完了（PID 12345）。ブラウザで http://localhost:3000 を開いて
  確認できる。停止は `pkill -9 -f "bun dev"`。
```

### ケース 2: 既存 dev server が生きている

```
> User: /design-director serve

> Claude: port 3000 は既に使用中（PID 12345、.design-studio/ 経由の bun dev）。
  再利用できる。ブラウザで http://localhost:3000 を開いてください。
  別プロセスを起動したい場合は `pkill -9 -f "bun dev"` で止めてから
  再度 `/design-director serve` を実行してください。
```

### ケース 3: 別プロジェクトが port 3000 を専有

```
> User: /design-director serve

> Claude: port 3000 は他のプロセスが使用中（PID 22345、コマンド: next dev
  from /home/user/repos/other-project）。以下どちらにしますか？
  1. 既存プロセスを止めて design-studio を起動
  2. 別ポート（3001 等）で design-studio を起動

> User: 2 で

> Claude: `cd .design-studio && PORT=3001 bun dev` を background 実行中...
  起動完了（PID 23456）。http://localhost:3001 で確認できる。
```

## エラー時の分岐

| 事象 | 対処 |
|------|------|
| `.design-studio/` 未作成 | `setup-studio.ts` を先に実行する旨を伝え、自動実行の許可を取る |
| `bun install` 未完走 | 手動で `cd .design-studio && bun install` を促す |
| dev server が 10 秒以内に応答しない | 起動ログを Read して原因提示（typescript エラー / port 競合 / next.config の問題）|
| ポート 3000 が別プロセス専有 | 上記ケース 3 の分岐。勝手に kill しない（ユーザー確認必須）|
| `pkill -9 -f "bun dev"` が無関係な bun dev も止めるリスク | 停止対象を明示してユーザーに確認（`ps aux | grep "bun dev"` の結果提示）|

## 対応する decisions.md

- Q1-6: `.design-studio/` 未作成なら setup-studio を先に実行
- Q8-2: サブコマンド構成のうち `serve` は Next.js ギャラリー起動を担当
- memory（feedback_kill_dev_server）: 開発サーバ停止は `pkill -9` で確実に
  （Phase 3 retrospective の学び）
