# CLAUDE.md — claude-plugins 開発ガイド

このリポジトリで作業する際の規約をまとめたものです。Claude Code が自動的に読み込みます。

## コミットメッセージ

日本語の [Conventional Commits](https://www.conventionalcommits.org/) 形式で書きます。

```
<type>(<scope>): <subject>
```

例:

```
feat(design-director): リサイズ可能なギャラリー UI を追加
fix(design-director): serve コマンドの port 衝突を回避
docs(readme): Quick Start のコマンドを最新化
ci(release-please): include-component-in-tag を false に変更
chore(plan): Phase 3.7 を追加
```

### release-please 連動の重要ポイント

このリポは [release-please](https://github.com/googleapis/release-please) で SemVer リリースを自動化しています。**コミットの `type` が直接リリース挙動を決める**ので、選択を慎重に。

| type | 例 | release-please の挙動 |
|---|---|---|
| `feat` | 新プラグイン追加、subcommand 追加、UI 機能追加 | **MINOR bump（v0.X.0）** Release PR 生成 |
| `fix` | プラグインの不具合修正 | **PATCH bump（v0.0.X）** Release PR 生成 |
| `feat!` または body に `BREAKING CHANGE:` | 非互換な変更（subcommand 削除、引数仕様変更等） | **MAJOR bump（vX.0.0）** |
| `chore` / `docs` / `ci` / `refactor` / `style` / `test` / `build` | 内部整備、CI、ドキュメント、リファクタ | **何もしない**（Unreleased に蓄積） |

### type 選択のチェックリスト

- ユーザーが利用する機能を増やした → `feat`
- ユーザーが遭遇するバグを直した → `fix`
- README / CONTRIBUTING / コメントなどドキュメント変更 → `docs`
- GitHub Actions / dependabot / release-please 設定の変更 → `ci`
- ツール設定 / ビルド系 / その他の整備 → `chore`
- コードリファクタ（外部から見た挙動に変化なし） → `refactor`

**迷ったら `chore` を選びます**。意図せず Release PR を発火させるよりも安全側に倒す方針です。

### 強制リリースが必要な場合

ドキュメント整備のみでも一区切りつけたい時は、commit footer に `Release-As:` を入れると release-please が指定バージョンで Release PR を生成します:

```
chore(readme): リブランディング

Release-As: 0.2.0
```

## Git 運用ルール

- コミットメッセージに `Co-Authored-By` フッターを付けない
- main への直接 push は避ける（branch protection で PR 必須。緊急時は admin bypass で push 可能）
- Release PR（`chore(main): release X.Y.Z`）は CI が green になってから squash merge する

## デザイン参照ファイル追加

`plugins/design-director/skills/design-director/references/design-md/` への追加 PR の手順は [CONTRIBUTING.md](./CONTRIBUTING.md) を参照。
