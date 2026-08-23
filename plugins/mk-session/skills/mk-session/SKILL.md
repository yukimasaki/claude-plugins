---
name: mk-session
description: >-
  Issue 番号から「作業用 worktree + ターミナルタブ + コーディングエージェント」を
  1 コマンドでセットアップし、agmsg の疎通確認（往復 1 回）まで済ませるスキル。
  トリガー: 「セッションを作って」「Issue XXX の作業環境を用意して」「worktree とタブを立てて」
  「エージェントを立ち上げて」「mk-session」「make session」など、Issue 単位の作業場所と
  担当エージェントを用意する依頼で使用する。
  既に worktree セットアップ手順（mk-wktree 等）を持つリポジトリでは、その手順に委譲する。
  片付けも本スキルが持つ: 「セッションを閉じて」「タブと worktree を片付けて」
  「mk-session cleanup」なども本スキルを呼ぶ。
argument-hint: "<issue-number> [--branch=<name>] [--team=<name>] [--agent=<cmd>] [--yolo] | cleanup <issue-number>..."
allowed-tools: Bash(bun:*), Bash(git:*), Bash(gh:*), Bash(herdr:*), Bash(ls:*), Bash(cat:*), Bash(command:*), Read, Skill
---

# mk-session

Issue 番号を 1 つ渡すと、次の状態までを作る。

1. 作業用 worktree（ブランチ・env・依存インストール込み）
2. herdr のタブと、その中で動くコーディングエージェント
3. agmsg の team 参加と受信モード
4. **親 → 子 → 親 の往復メッセージが通ること**

4 が通って初めて完了。1〜3 で止めると「タブはあるのに指示が届かない」状態が生まれ、
結局あとから人が join / actas / monitor を手で足すことになる。

## 実行の分担

| 段 | 誰が実行するか | なぜ |
|---|---|---|
| worktree | 既存手順があればその skill、無ければ `setup-worktree.ts` | リポジトリ固有の事前チェックや env の扱いを二重管理しないため |
| タブ〜疎通確認 | `attach-session.ts` 1 本 | 段を分けると途中で止まりやすいため、スクリプトに固める |
| 判断・報告 | この SKILL.md を読んでいる Claude | 委譲先の呼び出しと、結果の要約 |

## 入力形式

```text
# セットアップ（既定）
/mk-session 123
/mk-session #123
/mk-session 123 --branch=feat/123-custom
/mk-session 123 --team acme-3691     # Epic の既存 team に相乗りする
/mk-session 123 --agent codex            # 起動するエージェントを変える
/mk-session 123 --yolo                   # 権限確認を飛ばして起動する

# 片付け
/mk-session cleanup 123
/mk-session cleanup 123 124
```

`--dry-run` を足すと、実行予定のコマンドだけを出して何も作らない。

## 実行手順（セットアップ）

各スクリプトは最終行に `MK_SESSION_RESULT=<JSON>` を出す。**この JSON を読んで次の段を決める。**

### 1. worktree 段

```bash
bun "${CLAUDE_PLUGIN_ROOT}/skills/mk-session/scripts/setup-worktree.ts" <issue> [--branch=<name>] [--team=<name>] [--agent=<cmd>] [--yolo] [--dry-run]
```

`MK_SESSION_RESULT` の `action` で分岐する。

- `action: "delegate"` — 既存の worktree 手順があるリポジトリ。`skillName` の skill を呼ぶ:

  ```text
  Skill(<skillName>, <issue>)
  ```

  委譲先が終わったら、作られた worktree のパスを確かめる:

  ```bash
  git worktree list --porcelain | grep -A1 "^worktree " | head -20
  ```

- `action: "created"` — 内蔵手順で作成済み。`path` / `branch` をそのまま次の段に渡す。

**BLOCK された場合**（同名の worktree が既にある / ブランチが既にある）はスクリプトが exit 1 で止まる。
握りつぶして先へ進まず、出力に出ている指示（`cleanup` か `--branch` の指定）をユーザーに提示する。

### 2. セッション段

```bash
bun "${CLAUDE_PLUGIN_ROOT}/skills/mk-session/scripts/attach-session.ts" <issue> \
  --path <worktree-path> \
  --title "<Issue タイトル>" \
  [--team=<name>] [--agent=<cmd>] [--yolo] [--workspace=<id>] [--timeout=<sec>] [--task="<本題>"]
```

herdr の workspace は `--workspace` か環境変数 `HERDR_WORKSPACE_ID` から解決する。
このスクリプトが行うのは次の 6 つ。

1. `herdr tab create`（ラベルは Issue 番号のみ）
2. `herdr agent start`（初期プロンプトに actas / mode monitor / ready 返信を埋め込む）
3. タブ作成時に余る空ペイン（起動前に居た pane）を close
4. `join.sh` で親（既定名 `lead`）と子を同じ team に入れる
5. `delivery.sh set monitor` で子の受信モードを有効化する
6. 疎通確認: 子の ready を待ち、続いて親からトークン付きメッセージを送って返信を待つ

終了コードの意味:

| exit | 意味 | 次にすること |
|---|---|---|
| 0 | 疎通確認まで成功 | 完了報告を書く |
| 3 | 前提ツール未導入などで一部をスキップして正常終了 | 何をスキップしたかを報告に含める |
| 2 | 疎通確認がタイムアウト | 成功と報告しない。到達段と `/mk-session cleanup <issue>` を案内する |
| 1 | 入力エラー | 出力の指示に従う |

### 3. 完了報告

次の項目を必ず含める。

- worktree のパスとブランチ名
- herdr のタブ名（= Issue 番号）とペイン ID
- agmsg の team 名と、疎通テストの往復結果
- スキップした段があればその理由

## 実行手順（片付け）

```bash
bun "${CLAUDE_PLUGIN_ROOT}/skills/mk-session/scripts/cleanup-session.ts" cleanup <issue> [<issue>...]
```

このスクリプトが畳むのは**セッション層だけ**（herdr タブと agmsg の team 登録）。
worktree とブランチの削除は、作る側と同じく既存手順へ委譲する。

- 既存手順があるリポジトリ: `Skill(<skillName>, cleanup <issue>)`
- 無いリポジトリ: `git worktree remove <path>` と `git branch -d <branch>` をユーザーに確認してから実行する

## 設定ファイル

リポジトリの `.claude/mk-session.json` で上書きできる。未配置なら既定値で動く。

```json
{
  "worktree": {
    "delegate": "auto",
    "path": "../{repo}-{issue}",
    "branch": "{type}/{issue}-{slug}",
    "env": [".env.local"],
    "install": "bun install"
  },
  "agent": {
    "command": "claude",
    "agmsgType": "claude-code",
    "launchArgs": ["--model", "default"],
    "sessionNameFlag": "-n"
  },
  "team": "{repo}-{issue}",
  "handshakeTimeoutSec": 90
}
```

解決順は **既定値 < 設定ファイル < コマンド引数**。項目の詳細は [README.md](./README.md) を参照。

## 注意

- **権限確認を飛ばす起動は既定では行わない。** `launchArgs` に書くか `--yolo` を付けたときだけ。
  ただし権限確認ありのまま起動すると、子は初期プロンプトの `send.sh` 実行で許可待ちになり、
  疎通確認がタイムアウトする。自動で最後まで通したいリポジトリでは `launchArgs` に
  `--dangerously-skip-permissions` を書いておく。
- **疎通確認が済むまで、実装セッションに作業指示を出さない。** 送信側には成功と出るのに、
  返信だけが片道で消える事故が起きる。
- **タブのラベルは Issue 番号のみ。** 説明はエージェントのセッション名（`-n`）側に渡す。
