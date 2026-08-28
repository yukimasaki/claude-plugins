---
name: mk-session
description: >-
  Issue 番号から「作業用 worktree + ターミナルタブ + コーディングエージェント」を
  1 コマンドでセットアップし、そのセッションに Issue を取得させて指示待ちで待機させるスキル。
  トリガー: 「セッションを作って」「Issue XXX の作業環境を用意して」「worktree とタブを立てて」
  「エージェントを立ち上げて」「mk-session」「make session」など、Issue 単位の作業場所と
  担当エージェントを用意する依頼で使用する。
  Epic + サブ Issue を統括するオーケストレーションモードは `--orchestrate` を付けたときだけ動く。
  既に worktree セットアップ手順（mk-wktree 等）を持つリポジトリでは、その手順に委譲する。
  片付けも本スキルが持つ: 「セッションを閉じて」「タブと worktree を片付けて」
  「mk-session cleanup」なども本スキルを呼ぶ。
argument-hint: "<issue-number> [--branch=<name>] [--orchestrate] [--team=<name>] [--agent=<cmd>] [--yolo] | cleanup <issue-number>..."
allowed-tools: Bash(bun:*), Bash(git:*), Bash(gh:*), Bash(herdr:*), Bash(ls:*), Bash(cat:*), Bash(command:*), Read, Skill
---

# mk-session

Issue 番号を 1 つ渡すと、次の状態までを作る。

1. 作業用 worktree（ブランチ・env・依存インストール込み）
2. herdr のタブと、その中で動くコーディングエージェント
3. そのセッションが Issue を読み込み、要約を出して**指示待ちで止まっている**こと

**作業は始めさせない。** 立ち上げの目的は「Issue を読み終えたセッションが、指示を受けられる
状態で待っていること」であって、実装を走らせることではない。人が要約を見て方針を決める前に
着手されると、後から差し戻すことになる。

`--orchestrate` を付けたときだけ、Epic + サブ Issue を統括するモードで立ち上がる。

## 2 つのモード

| | 既定（待機） | `--orchestrate`（統括） |
|---|---|---|
| 起動後の子 | Issue を取得して要約し、止まる | `actas` / `mode monitor` を有効化し、ready を返して着手する |
| agmsg | 一切触れない | team 参加・受信モード・往復の疎通確認まで**必須** |
| agmsg が無いとき | 影響なし | タブを作る前に exit 2 で止まる |
| 完了条件 | タブとエージェントが立ち、Issue の要約が出ていること | 親 → 子 → 親 の往復メッセージが通ること |

統括モードで疎通確認を完了条件にするのは、「タブはあるのに指示が届かない」状態を残さない
ため。送信側には成功と出るのに返信だけが片道で消える事故が実際に起きる。

## 実行の分担

| 段 | 誰が実行するか | なぜ |
|---|---|---|
| worktree | 既存手順があればその skill、無ければ `setup-worktree.ts` | リポジトリ固有の事前チェックや env の扱いを二重管理しないため |
| タブ〜起動（と統括時の疎通確認） | `attach-session.ts` 1 本 | 段を分けると途中で止まりやすいため、スクリプトに固める |
| 判断・報告 | この SKILL.md を読んでいる Claude | 委譲先の呼び出しと、結果の要約 |

## 入力形式

```text
# セットアップ（既定 = Issue を取得して待機）
/mk-session 123
/mk-session #123
/mk-session 123 --branch=feat/123-custom
/mk-session 123 --agent codex            # 起動するエージェントを変える
/mk-session 123 --yolo                   # 権限確認を飛ばして起動する

# オーケストレーション（Epic + サブ Issue の統括）
/mk-session 123 --orchestrate
/mk-session 123 --orchestrate --team acme-3691   # Epic の既存 team に相乗りする

# 片付け
/mk-session cleanup 123
/mk-session cleanup 123 124
```

`--dry-run` を足すと、実行予定のコマンドだけを出して何も作らない。

`--team` は team 名を変えるだけで、モードには影響しない。オーケストレーションは
`--orchestrate` を明示したときだけ動く。

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

  `incomplete` が空でないときは exit 3 で返る。worktree は作れているので次の段へ進んでよいが、
  **完了報告で「成功」と書かない**。`incomplete` に `install` が入っていれば依存が入っていないので、
  worktree のパスと再実行するコマンド（`installCommand`）をユーザーに提示する。

**BLOCK された場合**（同名の worktree が既にある / ブランチが既にある）はスクリプトが exit 1 で止まる。
握りつぶして先へ進まず、出力に出ている指示（`cleanup` か `--branch` の指定）をユーザーに提示する。

**`--branch` は内蔵経路専用**。委譲先がブランチ名の指定を受ける保証がないため、委譲経路で
`--branch` を渡すと exit 1 で止まる。指定した名前で作りたいときは `--delegate none` を併用する。

### 2. セッション段

```bash
bun "${CLAUDE_PLUGIN_ROOT}/skills/mk-session/scripts/attach-session.ts" <issue> \
  --path <worktree-path> \
  --title "<Issue タイトル>" \
  [--orchestrate] [--team=<name>] [--agent=<cmd>] [--yolo] [--workspace=<id>] [--timeout=<sec>] [--task="<本題>"]
```

herdr の workspace は `--workspace` か環境変数 `HERDR_WORKSPACE_ID` から解決する。

既定（待機モード）でこのスクリプトが行うのは次の 4 つ。

1. `herdr tab create`（ラベルは Issue 番号のみ）
2. `herdr agent start`（起動プロンプトは「Issue を取得 → 要約 → 指示待ちで停止」）
3. タブ作成時に余る空ペイン（起動前に居た pane）を close
4. 結果を `MK_SESSION_RESULT` に出す

`--orchestrate` を付けると、上の 1 の前に agmsg の有無を確かめ、1 と 2 のあいだに team 参加と
受信モードの設定を挟み、3 のあとに疎通確認を足す。

1. agmsg が見つからなければ**タブを作る前に** exit 2（`agmsg-missing`）
2. `herdr tab create`
3. `join.sh` で親（既定名 `lead`）と子を同じ team に入れる
4. `delivery.sh set monitor` で子の受信モードを有効化する
5. `herdr agent start`（起動プロンプトに actas / mode monitor / ready 返信を埋め込む）
6. 余る空ペインを close
7. 疎通確認: 子の ready を待ち、続いて親からトークン付きメッセージを送って返信を待つ

3〜4 を起動より前に置くのは、`send.sh` が team 未登録の送信者を拒否するため。
起動後に join すると、子が 1 ターン目に返す ready が落ちる。join / delivery が
失敗した場合は疎通確認を待たず `agmsg-setup-failed`（exit 2）で止める。

終了コードの意味:

| exit | 意味 | 次にすること |
|---|---|---|
| 0 | 既定はタブとエージェントの起動まで成功／統括モードは疎通確認まで成功 | 完了報告を書く |
| 3 | herdr 未導入などで一部をスキップして正常終了 | 何をスキップしたかを報告に含める |
| 2 | 統括モードの前提不足（`agmsg-missing`）／疎通確認のタイムアウト／エージェント未起動 | 成功と報告しない。到達段と `/mk-session cleanup <issue>` を案内する |
| 1 | 入力エラー | 出力の指示に従う |

### 3. 完了報告

次の項目を必ず含める。

- worktree のパスとブランチ名
- herdr のタブ名（= Issue 番号）とペイン ID
- モード（`MK_SESSION_RESULT` の `mode`）。既定の `standby` なら「起動したセッションは
  Issue を読んで指示待ちで止まっている」と書き、**次の指示はユーザーが出すもの**として渡す。
  呼び出し元が勝手に作業指示を送らない
- 統括モード（`mode: "orchestrate"`）のときは agmsg の team 名と疎通テストの往復結果
- スキップした段があればその理由

## 実行手順（片付け）

```bash
bun "${CLAUDE_PLUGIN_ROOT}/skills/mk-session/scripts/cleanup-session.ts" cleanup <issue> [<issue>...]
```

このスクリプトが畳むのは**セッション層だけ**（herdr タブと agmsg の team 登録）。
タブのラベルは Issue 番号だけなので、同じ workspace に別リポジトリの同じ番号のセッションが
あると区別できない。pane の cwd がこのリポジトリの worktree 配下のタブだけを閉じ、確認できな
かったタブは閉じずに `skippedTabs` に入れて返す。**`skippedTabs` が空でなければ完了報告に含め、
どのタブを閉じなかったかをユーザーに伝える。**
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

`team` と `handshakeTimeoutSec` が効くのは `--orchestrate` のときだけ。

解決順は **既定値 < 設定ファイル < コマンド引数**。項目の詳細は [README.md](./README.md) を参照。

## 注意

- **権限確認を飛ばす起動は既定では行わない。** `launchArgs` に書くか `--yolo` を付けたときだけ。
  統括モードでは、権限確認ありのまま起動すると子が初期プロンプトの `send.sh` 実行で許可待ちになり、
  疎通確認がタイムアウトする。自動で最後まで通したいリポジトリでは `launchArgs` に
  `--dangerously-skip-permissions` を書いておく。
- **統括モードでは、疎通確認が済むまで実装セッションに作業指示を出さない。** 送信側には成功と
  出るのに、返信だけが片道で消える事故が起きる。
- **既定のモードでは、呼び出し元は子に作業を始めさせない。** 立ち上げの完了報告までがこのスキルの
  仕事で、次に何をするかはユーザーが決める。
- **タブのラベルは Issue 番号のみ。** 説明はエージェントのセッション名（`-n`）側に渡す。
