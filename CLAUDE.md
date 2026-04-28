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

現在は **v0.x 系（pre-1.0）** で、`release-please-config.json` に以下 2 フラグが入っています:

- `bump-minor-pre-major: true` — pre-1.0 では BREAKING を MAJOR ではなく **MINOR** に格下げ
- `bump-patch-for-minor-pre-major: true` — pre-1.0 では `feat` を MINOR ではなく **PATCH** に格下げ

その結果、pre-1.0 の bump は次のとおりです:

| type | 例 | release-please の挙動（pre-1.0） |
|---|---|---|
| `feat` | 新プラグイン追加、subcommand 追加、UI 機能追加 | **PATCH bump（v0.X.Y → v0.X.Y+1）** Release PR 生成 |
| `fix` | プラグインの不具合修正 | **PATCH bump** Release PR 生成 |
| `feat!` または body に `BREAKING CHANGE:` | 非互換な変更（subcommand 削除、引数仕様変更等） | **MINOR bump（v0.X → v0.X+1.0）** Release PR 生成 |
| `chore` / `docs` / `ci` / `refactor` / `style` / `test` / `build` | 内部整備、CI、ドキュメント、リファクタ | **何もしない**（Unreleased に蓄積） |

v1.0 リリース後は上記フラグの効果が外れ、`feat` → MINOR / BREAKING → MAJOR に昇格する想定です。

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

## DESIGN.md フォーマット規約

`plugins/design-director/skills/design-director/references/design-md/` 配下の DESIGN.md は [google-labs-code/design.md](https://github.com/google-labs-code/design.md) 公式仕様に従う **YAML frontmatter + Markdown 本文** の二層構造で記述します。新規ファイルおよび更新時はこの形式に揃えてください。

### 必須 frontmatter

- `version`: 通常 `alpha`
- `name`: ブランド/システム名
- `description`: 末尾に `Mood — <3〜5 語>` を含む 1 段落（Layer 2b の `when_to_use` シグナルとして使われる）
- `colors`: フラットな `key: "#hex"` マップ（`primary` / `ink` / `body` / `surface` / `hairline` / `on-primary` / `success` / `error` 等）
- `typography`: role-keyed オブジェクト。各 role に `fontFamily` / `fontSize` / `fontWeight` / `lineHeight` / `letterSpacing` を持たせる
- `rounded`: スケール（`none` / `xs` / `sm` / `md` / `lg` / `xl` / `pill` / `full` 等）→ px
- `spacing`: スケール（数値キーまたは `xxs` / `xs` / `sm` / `md` / `lg` / `xl` / `xxl` / `section` 等）→ px

### 任意 frontmatter

- `components`: コンポーネント単位の合成トークン。値はリテラルか `{colors.primary}` 形式の参照

### Markdown 本文

`## Colors` / `## Typography` / `## Components` 等のセクションで、frontmatter のトークンに対する適用ニュアンス（hierarchy / contrast / motion 等）を補足します。

### 既存ファイルの状態

リポジトリには公式仕様に変換済みのファイルと、kzhrknt/awesome-design-md-jp 等から取り込んだ legacy prose 形式のファイルが混在しています（`japanese-*` / `remix/` / `warm/claude` / `warm/mercury` 等は変換済み、`terminal/` / `editorial/` の多くは legacy prose）。新規 PR は必ず公式仕様で書き、既存ファイルの修正時は段階的に変換しても構いません。

スキル本体の運用ルールは [SKILL.md](./plugins/design-director/skills/design-director/SKILL.md) を参照。
