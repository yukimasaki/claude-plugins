# /design-director status

`.design-studio/` 周辺の **現在の状態** を一覧表示する診断コマンド。
dev server 起動状態・最終 update 日時・プロジェクト数・memory.md 有無を
Markdown 表で返す。副作用なし（Read only）。

## 前提

- 引数: なし
- `.design-studio/` 有無どちらでも動作する（未作成時は案内のみ、
  setup-studio は自動実行しない）
- 本コマンドは読み取り専用。ファイル変更は一切行わない

## ワークフロー

### 1. セットアップ状態の確認

1. `.design-studio/` が存在しない → 「まだセットアップされていません」の
   loud 案内で終了（`/design-director` で初回セットアップが始まる旨を添える）
2. 存在すれば次へ

### 2. 4 つの状態を並列取得

silently に以下を同時に取得する:

#### 2a. dev server 起動状態

1. `ss -tlnp 2>/dev/null | grep ":3000"` で port 3000 のリッスン
   プロセスを調べる
2. `ss` が無い環境では `lsof -i :3000 2>/dev/null` にフォールバック
3. プロセスが `.design-studio/` 由来の `bun dev` なら「起動中（PID N）」、
   別プロセスなら「他プロセスが占有中（PID N、コマンド: …）」、
   無ければ「停止中」

#### 2b. 最終 update 日時

1. `.design-studio/.upstream-state.json` を Read
2. JSON が破損している or 空 `{}` なら「未実行」
3. 各 repo（`awesome-claude-design`, `open-codesign`）ごとに
   `lastSyncedAt` を抽出
4. 未登録の repo は「未実行」と表示

#### 2c. プロジェクト数

1. `.design-studio/projects/*/manifest.json` の Glob で件数を数える
2. `list.md` と同じ方針で、壊れた manifest は skip（「N 件表示中
   (M 件は壊れているので skip)」のように件数補記）

#### 2d. memory.md 有無と最終更新

1. `fs.stat .design-studio/memory.md`（存在確認 + mtime 取得）
2. 存在 → 「あり（最終更新 YYYY-MM-DD）」
3. 無し → 「なし」

### 3. 整形表示

Markdown 表で loud に出力する:

```
| 項目 | 状態 |
|------|------|
| dev server | 起動中（PID 12345） |
| 最終 update | awesome-claude-design: 2026-04-23 / open-codesign: 未実行 |
| プロジェクト数 | 3 件 |
| memory.md | あり（最終更新 2026-04-24） |
```

### 4. 次アクション案内

状態に応じて 1-2 個だけ提案する（全部列挙はしない）:

- projects 0 件 → 「`/design-director` で新規プロトタイプを作れる」
- dev server 停止中 + projects ≥ 1 → 「`/design-director serve` で
  ギャラリーを起動できる」
- 最終 update が 7 日以上前 → 「`/design-director update` で upstream 差分を
  取り込める」
- memory.md なし → 案内不要（初回 `/design-director` 実行時に自動生成される）

## Example Run

### ケース 1: 全て揃っている

```
> User: /design-director status

> Claude:
  | 項目 | 状態 |
  |------|------|
  | dev server | 起動中（PID 12345） |
  | 最終 update | awesome-claude-design: 2026-04-23 / open-codesign: 2026-04-22 |
  | プロジェクト数 | 3 件 |
  | memory.md | あり（最終更新 2026-04-24） |

  直近で upstream 更新してないので、気になる差分があれば
  `/design-director update` で取り込めます。
```

### ケース 2: セットアップ直後

```
> User: /design-director status

> Claude:
  | 項目 | 状態 |
  |------|------|
  | dev server | 停止中 |
  | 最終 update | awesome-claude-design: 未実行 / open-codesign: 未実行 |
  | プロジェクト数 | 0 件 |
  | memory.md | なし |

  まだプロジェクトがありません。`/design-director` で最初の
  プロトタイプを生成してください。
```

### ケース 3: 未セットアップ

```
> User: /design-director status

> Claude: .design-studio/ がまだセットアップされていません。
  `/design-director` を実行すると初回セットアップが始まります。
```

### ケース 4: dev server は別プロセスが占有

```
> User: /design-director status

> Claude:
  | 項目 | 状態 |
  |------|------|
  | dev server | 他プロセスが占有中（PID 22345、next dev from /home/user/other-project） |
  | 最終 update | awesome-claude-design: 2026-04-23 / open-codesign: 未実行 |
  | プロジェクト数 | 2 件 |
  | memory.md | あり（最終更新 2026-04-20） |

  port 3000 が別プロジェクトに使われてます。design-studio を起動するなら
  既存プロセスを止めるか、`/design-director serve` 実行時に別ポート
  （3001 等）を指定してください。
```

### ケース 5: 壊れた manifest 混じり

```
> User: /design-director status

> Claude:
  | 項目 | 状態 |
  |------|------|
  | dev server | 停止中 |
  | 最終 update | awesome-claude-design: 2026-04-23 / open-codesign: 2026-04-22 |
  | プロジェクト数 | 2 件（1 件は manifest.json が壊れているので skip） |
  | memory.md | あり（最終更新 2026-04-24） |

  壊れた manifest は `/design-director edit {slug}` で修復するか、
  `/design-director reset` で整理してください。
```

## エラー時の分岐

| 事象 | 対処 |
|------|------|
| `.design-studio/` 未作成 | 上記ケース 3 の案内で終了（副作用なし）|
| `ss` コマンドが見つからない | `lsof -i :3000` にフォールバック。両方失敗したら「dev server 状態: 判定不可」と loud で表示 |
| `.upstream-state.json` が壊れている（zod 失敗） | 「最終 update: 判定不可（state ファイル破損）」と loud で表示。`.design-studio/.upstream-state.json` の内容確認をユーザーに依頼 |
| 壊れた manifest.json が projects に混在 | `list.md` 同様に skip + 件数補記（ケース 5 の例）|
| ファイル権限不足 | `ls -la .design-studio/` の結果提示で権限確認を促す |

## 対応する decisions.md

- Q1-5: `.design-studio/` の存在確認は冪等、無ければ案内のみ
- Q7-5: `.design-studio/.upstream-state.json` の読み取り
- Q8-2: サブコマンド構成のうち `status` は現在状態の診断を担当
- Phase 3 の `lib/list-projects.ts` と同じ「壊れた manifest は skip + warn」
  方針を status でも踏襲
- memory（feedback_explain_then_propose）: 表の後に 1-2 件だけ次アクション
  を提案する（全部列挙しない）
