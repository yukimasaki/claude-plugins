# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.1](https://github.com/yukimasaki/claude-plugins/compare/v0.4.0...v0.4.1) (2026-04-28)


### Features

* **design-director:** getdesign.md カタログから 51 サイトを取り込み 85 サイトに拡張 ([#24](https://github.com/yukimasaki/claude-plugins/issues/24)) ([06ff13a](https://github.com/yukimasaki/claude-plugins/commit/06ff13af483dcafff4d7fd5c3bc890397000de77)), closes [#1](https://github.com/yukimasaki/claude-plugins/issues/1)

## [0.4.0](https://github.com/yukimasaki/claude-plugins/compare/v0.3.0...v0.4.0) (2026-04-27)


### ⚠ BREAKING CHANGES

* **design-director:** vendored design-md ファイルの形式が prose Markdown から DESIGN.md 公式仕様（[google-labs-code/design.md](https://github.com/google-labs-code/design.md)、 Apache-2.0）の フロントマター + Markdown 本文 に変わる。skill が `colors:` / `typography:` / `rounded:` / `spacing:` トークンを構造化された値として読む 前提に変更。npx @google/design.md lint で 0 errors を確認済み。
* **design-director:** /design-director update サブコマンドを削除した。upstream の更新はメンテナがリポルートの scripts/check-diff-upstream.ts で差分を 検出して PR で取り込む流れに変更する。

### Features

* **design-director:** /design-director update を削除しメンテナ用ステートレス検出器に再構成 ([#19](https://github.com/yukimasaki/claude-plugins/issues/19)) ([bccf4da](https://github.com/yukimasaki/claude-plugins/commit/bccf4da053d8480705f98032e77f62f2f14cae21)), closes [#1](https://github.com/yukimasaki/claude-plugins/issues/1)
* **design-director:** vendored DESIGN.md を公式仕様 (フロントマター付き Markdown) に統一 ([#22](https://github.com/yukimasaki/claude-plugins/issues/22)) ([981a176](https://github.com/yukimasaki/claude-plugins/commit/981a1767341b0cf3c7cbef7f352eef563a256bb6)), closes [#1](https://github.com/yukimasaki/claude-plugins/issues/1)

## [0.3.0](https://github.com/yukimasaki/claude-plugins/compare/v0.2.0...v0.3.0) (2026-04-27)


### Features

* **buzzounce:** プラグイン新設 — persona / mode / post-type 選択型の告知ツイート生成スキル ([12395b2](https://github.com/yukimasaki/claude-plugins/commit/12395b2a1acde020ad567a5ca8f63f668661041d))
* **buzzounce:** 告知ツイート生成プラグインを新設（Phase 3.5、第 2 プラグイン追加） ([45b5fde](https://github.com/yukimasaki/claude-plugins/commit/45b5fde42ec2c6586eb1b7763dde16134c4b89b6))
* **marketplace:** buzzounce を kit マーケットプレイスに追加 ([549dbcb](https://github.com/yukimasaki/claude-plugins/commit/549dbcb80177fdabb3a88c563664d7523ad0f2d7))

## [0.2.0](https://github.com/yukimasaki/claude-plugins/compare/v0.1.2...v0.2.0) (2026-04-27)


### Features

* **design-director:** anti-slop に「抽象モチーフは中身を持つ」項目を追加 ([9e8fd01](https://github.com/yukimasaki/claude-plugins/commit/9e8fd01e404b8e010f9ed40e5093a3bf88530269))
* **design-director:** Issue [#12](https://github.com/yukimasaki/claude-plugins/issues/12) — A 3 項目 + B recipe 3 本 + render tool 公開 ([331e3bf](https://github.com/yukimasaki/claude-plugins/commit/331e3bfbc789bb88ee012077d7db3436452239a2))
* **design-director:** recipes/github-readme-rendering.md を追加 ([b0e8336](https://github.com/yukimasaki/claude-plugins/commit/b0e833626ebc5e8958656ad3aae2d59017a40dd4))
* **design-director:** recipes/render-to-png-webm.md を追加 ([6a5b8da](https://github.com/yukimasaki/claude-plugins/commit/6a5b8daeed1949dbd2416138257d20c28329b13f))
* **design-director:** recipes/social-preview-image.md を追加 ([9e89642](https://github.com/yukimasaki/claude-plugins/commit/9e89642d1c6c93b2c3369908eac93f0bbb3346b7))
* **design-director:** tools/render/ を Step 7 / export.md から認識可能に ([30a6710](https://github.com/yukimasaki/claude-plugins/commit/30a67102fca3571f6ac485f7c18fef6da6372019))
* **design-director:** 修正の保存方法を毎回確認するプロトコルを追加 ([634ce2d](https://github.com/yukimasaki/claude-plugins/commit/634ce2d2d2b259543e15bc388058416cd4c9f6d6))
* **design-director:** 長寿命アーティファクトの腐情報チェックを追加 ([4abf449](https://github.com/yukimasaki/claude-plugins/commit/4abf449e25aa1d61d5f1028c3d8a9ab8105d72fd))
* **tools:** tools/render/ を新設 — 汎用 PNG / WebM レンダリング CLI ([be93ce4](https://github.com/yukimasaki/claude-plugins/commit/be93ce444c0c36806cfaf1f4eb45aa1f82797e77))

## [0.1.2](https://github.com/yukimasaki/claude-plugins/compare/v0.1.1...v0.1.2) (2026-04-27)


### Bug Fixes

* **readme:** hero の &lt;video&gt; ソースを絶対 URL に変更（GitHub WebUI で表示されない問題の修正） ([d9a78c4](https://github.com/yukimasaki/claude-plugins/commit/d9a78c4ca7fe4db3c10635502251d5e5acc860c0))


### Documentation

* hero を Markdown 形式（raw URL + 画像）に変更 — GitHub WebUI 表示の確実性を優先 ([0fc69c3](https://github.com/yukimasaki/claude-plugins/commit/0fc69c34f0cb9eec914a529929e95046b4088c86))
* README hero から webm リンクを削除（GitHub WebUI で再生されないため） ([0618183](https://github.com/yukimasaki/claude-plugins/commit/06181836abb3c182adf887e81fb192e38670272e))

## [0.1.1](https://github.com/yukimasaki/claude-plugins/compare/v0.1.0...v0.1.1) (2026-04-27)


### Bug Fixes

* **release-please:** include-component-in-tag: false を追加（既存 v0.1.0 タグ形式と整合） ([26cd1ed](https://github.com/yukimasaki/claude-plugins/commit/26cd1edff99005703b5c5988270a7253c64cbb58))

## [Unreleased]

## [0.1.0] - 2026-04-27

Initial public release of the `kit` marketplace.

### Added

#### Marketplace

- Marketplace manifest (`.claude-plugin/marketplace.json`) named `kit`.
- Bilingual `README` (English default, 日本語 in `README.ja.md`) with badges, TL;DR, Quick Start, Features, FAQ.
- Bilingual `CONTRIBUTING` (English default, 日本語 in `CONTRIBUTING.ja.md`).
- `SECURITY.md` directing vulnerability reports to GitHub Private Vulnerability Reporting.
- Issue Forms (`bug_report.yml`, `feature_request.yml`) and `PULL_REQUEST_TEMPLATE.md`.
- `ISSUE_TEMPLATE/config.yml` routing questions to Discussions and security reports to Security advisories.
- CI workflows: plugin manifest validation (`@anthropic-ai/claude-code` on Node 20), markdownlint, actionlint.
- `dependabot.yml` for monthly GitHub Actions updates.
- `.markdownlint-cli2.jsonc` documentation lint configuration.

#### `design-director` plugin (v0.1.0)

- Conversational design-driven prototyping skill.
- Subcommands: `default`, `update`, `serve`, `list`, `export`, `edit`, `memory`, `reset`, `status`.
- Local gallery via `serve` for side-by-side variation comparison.
- Output: React JSX variations and `HANDOFF.md` under `.design-studio/projects/{slug}/`.
- `homepage` field in `plugin.json` linking to the skill README.

[Unreleased]: https://github.com/yukimasaki/claude-plugins/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/yukimasaki/claude-plugins/releases/tag/v0.1.0
