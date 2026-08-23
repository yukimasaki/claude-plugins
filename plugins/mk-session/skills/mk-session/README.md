# mk-session

Issue 番号を 1 つ渡すと、その Issue を担当する作業環境とエージェントを丸ごと用意するスキル。

```text
/mk-session 123
```

これだけで、worktree の作成からエージェントへメッセージが届く状態までが揃う。

## 何をするか

| 段 | 内容 |
|---|---|
| worktree | ブランチを切り、env を symlink し、依存をインストールする |
| タブ | herdr で Issue 番号をラベルにしたタブを作る |
| エージェント | そのタブでコーディングエージェントを起動する |
| 受信設定 | agmsg の team に参加させ、受信モードを monitor にする |
| 疎通確認 | 親 → 子 → 親 の往復メッセージが通ることを確かめる |

**疎通確認まで通って初めて完了**とする。タブができた時点で終わると、指示が届かないタブが残る。

## 前提

- [git](https://git-scm.com/) / [GitHub CLI](https://cli.github.com/)（`gh` はブランチ名の自動生成に使う。無くても番号だけの名前で動く）
- [herdr](https://github.com/fujibee/herdr)（タブとエージェントの起動に使う。未導入なら worktree の準備までで正常終了する）
- [agmsg](https://agmsg.cc)（エージェント間メッセージ。未導入なら team 参加と疎通確認をスキップする）
  - 探索順は `$AGMSG_HOME/scripts` → `~/.agents/skills/agmsg/scripts` → `~/.claude/skills/agmsg/scripts`
    → Claude Code プラグインとして入れた `~/.claude/plugins/{marketplaces,cache}/*agmsg*/**/scripts`
- [Bun](https://bun.sh/)（スクリプトの実行）

## 既存の worktree 手順がある場合

`.claude/skills/mk-wktree/SKILL.md`（または `mk-worktree`）を持つリポジトリでは、
**worktree の作成をその手順に委譲する**。事前チェックや env の扱いはリポジトリごとの
事情を織り込んでいるため、プラグインが自前の作り方で上書きすると二重管理になる。

委譲するかどうかは `worktree.delegate` で決まる。

| 値 | 挙動 |
|---|---|
| `"auto"`（既定） | `mk-wktree` / `mk-worktree` を探し、あれば委譲する |
| `"none"` | 既存手順があっても内蔵手順で作る |
| skill 名 | その skill に委譲する。見つからなければエラー（黙って内蔵手順に倒さない） |

## 設定

リポジトリの `.claude/mk-session.json` に置く。未配置なら既定値で動く。
サンプルは [samples/mk-session.json](./samples/mk-session.json)。

| キー | 既定値 | 説明 |
|---|---|---|
| `worktree.delegate` | `"auto"` | 委譲先の決め方（上表） |
| `worktree.path` | `"../{repo}-{issue}"` | worktree を作る場所 |
| `worktree.branch` | `"{type}/{issue}-{slug}"` | ブランチ名のテンプレート |
| `worktree.env` | `[".env.local"]` | メインクローンから symlink するファイル |
| `worktree.install` | ロックファイルから推定 | 依存インストールのコマンド |
| `agent.command` | `"claude"` | 起動するエージェント |
| `agent.agmsgType` | コマンドから推定 | agmsg の agent type |
| `agent.launchArgs` | `claude なら ["--model", "default"]`、それ以外は `[]` | 起動時の引数 |
| `agent.sessionNameFlag` | `claude なら "-n"`、それ以外は `null` | セッション表示名を渡すフラグ。不要なら `null` |
| `team` | `"{repo}-{issue}"` | agmsg の team 名 |
| `handshakeTimeoutSec` | `90` | 疎通確認の待ち時間（秒） |

`agent.launchArgs` と `agent.sessionNameFlag` の既定値は claude 固有（`--model default` / `-n`）
なので、`agent.command` を別のエージェントに変えた場合は既定値を当てない。別エージェントに
渡したい引数は `launchArgs` に明示する。

テンプレートで使える変数は**項目ごとに違う**。未対応の変数は置換されず、
`{type}` のような文字列がそのままパス名やブランチ名に残るので注意。

| 項目 | 使える変数 |
|---|---|
| `worktree.branch` | `{type}` `{issue}` `{slug}` |
| `worktree.path` | `{repo}` `{issue}` `{branch}` |
| `team` | `{repo}` `{issue}` |

設定の解決順は **既定値 < `.claude/mk-session.json` < コマンド引数**。

## コマンド引数

| 引数 | 説明 |
|---|---|
| `--branch=<name>` | ブランチ名を明示指定する |
| `--team=<name>` | team 名を指定する（Epic の既存 team に相乗りするとき） |
| `--agent=<cmd>` | 起動するエージェントを変える（agmsg の type も追従する） |
| `--yolo` | 権限確認を飛ばす引数を足す（claude / codex のみ。他は `launchArgs` に明示する） |
| `--workspace=<id>` | herdr の workspace を指定する（既定は `HERDR_WORKSPACE_ID`） |
| `--timeout=<sec>` | 疎通確認の待ち時間を変える |
| `--lead=<name>` | 親（呼び出し側）の agmsg 名を変える（既定 `lead`） |
| `--task="<本題>"` | 子に渡す本題を差し替える（既定は Issue の取得と着手） |
| `--dry-run` | 実行予定のコマンドだけを出して何も作らない |

## 権限について

既定の起動は `claude --model default` で、**権限確認を飛ばす引数は付かない**。
飛ばしたい場合だけ、設定ファイルの `launchArgs` に書くか `--yolo` を付ける。

なお権限確認ありのまま起動すると、子は初期プロンプトの `send.sh` 実行で許可待ちになり、
疎通確認はタイムアウトする。1 コマンドで最後まで通したいリポジトリでは、
`launchArgs` に `--dangerously-skip-permissions` を書いておく。

## 片付け

```text
/mk-session cleanup 123
```

herdr のタブと agmsg の team 登録を畳む。worktree とブランチの削除は、
作る側と同じく既存手順（`mk-wktree cleanup` 等）へ委譲する。

対象タブは作る側と同じ workspace（`--workspace` か `HERDR_WORKSPACE_ID`）から探す。
親（`lead`）の team 登録を外すのは `team` テンプレートが `{issue}` を含むときだけで、
`--team` で既存 team に相乗りした場合は他の Issue のために残す。

## トラブルシュート

| 症状 | 原因と対処 |
|---|---|
| `worktree の作成先が既に存在します` で止まる | 前回の残骸。`/mk-session cleanup <issue>` で畳んでから再実行する |
| `ブランチが既に存在します` で止まる | `--branch=` で別名を指定するか、既存ブランチを整理する |
| `herdr の workspace id が分かりません` | `HERDR_WORKSPACE_ID` を設定するか `--workspace` を渡す |
| 疎通確認がタイムアウトする | 子が権限確認で止まっているか、受信モードが無効。`--yolo` を付けるか、子のタブで `/agmsg mode monitor` を実行する |
| タブは残るがエージェントが出ない | `agent-not-started` で終了する。root pane は残すので、そのタブで起動コマンドを直接試して原因を見る |
| エージェントが起動しない | `agent.command` が PATH にあるか確認する |

## 開発

```bash
bun install
bun run test        # 単体テスト
bun run typecheck   # 型チェック
```

スクリプトの構成は次のとおり。

| ファイル | 役割 |
|---|---|
| `scripts/setup-worktree.ts` | 委譲判定と、内蔵の worktree 作成 |
| `scripts/attach-session.ts` | タブ作成 → エージェント起動 → team 参加 → 疎通確認 |
| `scripts/cleanup-session.ts` | セッション層の片付け |
| `scripts/lib/*.ts` | 純ロジック（ブランチ名・設定解決・委譲判定・疎通判定）と外部コマンドのラッパ |
