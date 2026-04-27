# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0](https://github.com/yukimasaki/claude-plugins/compare/claude-plugins-v0.1.0...claude-plugins-v0.2.0) (2026-04-27)


### Features

* claude-plugins マーケットプレイス基盤を整備 ([ab6aa23](https://github.com/yukimasaki/claude-plugins/commit/ab6aa2348a8cd584e13d97169c051fa56ec9270d))
* **design-director:** .jsx 動的ロード機構を実装 ([1ddc203](https://github.com/yukimasaki/claude-plugins/commit/1ddc203f4ab9d223059f595c4803b7ec26e6b16a))
* **design-director:** awesome-claude-design design-md を vendored 配置 ([39eab51](https://github.com/yukimasaki/claude-plugins/commit/39eab51008baf44bbf9d88bad603549034ce216b))
* **design-director:** awesome-claude-design prompts を prompt-packs として vendored 配置 ([faf8f91](https://github.com/yukimasaki/claude-plugins/commit/faf8f9198f639af7d0489f35758d1c5b65f41331))
* **design-director:** awesome-claude-design recipes を vendored 配置 ([d0b681c](https://github.com/yukimasaki/claude-plugins/commit/d0b681c8f011f703e857463fb4d0352a6312453b))
* **design-director:** Next.js テンプレート骨格を配置 ([c2d020f](https://github.com/yukimasaki/claude-plugins/commit/c2d020fea7074d69c0803971a905ef61a60b53a8))
* **design-director:** open-codesign builtin-skills を vendored 配置 ([9134c5b](https://github.com/yukimasaki/claude-plugins/commit/9134c5b8ef273f805da63b1ed2c1ab8999fcbf21))
* **design-director:** open-codesign design-skills を vendored 配置 ([4223aa4](https://github.com/yukimasaki/claude-plugins/commit/4223aa46b2cdceaea399a087974df23269d37ad4))
* **design-director:** open-codesign prompts を vendored 配置 ([7f7b781](https://github.com/yukimasaki/claude-plugins/commit/7f7b781c0199b2ece4b5fd9b1f11850016cb26d2))
* **design-director:** Phase 2 完了 — スキル骨格の作成 ([3fb6516](https://github.com/yukimasaki/claude-plugins/commit/3fb65164b7678645318e6ccbb855e5897ff1610f))
* **design-director:** Phase 3 完了 — Next.js 環境セットアップ ([296f7d6](https://github.com/yukimasaki/claude-plugins/commit/296f7d6865d02871f9b5005a69859f0f011e51d9))
* **design-director:** Phase 4 完了 — upstream 同期スクリプト ([19e79e3](https://github.com/yukimasaki/claude-plugins/commit/19e79e3752fab89698c77365a3e5ddbf262768f8))
* **design-director:** setup-studio.ts とユニットテストを実装 ([7da241c](https://github.com/yukimasaki/claude-plugins/commit/7da241c7305e357f2aefdad5b599ca87b82aace9))
* **design-director:** SKILL.md 雛形を配置 ([69f513b](https://github.com/yukimasaki/claude-plugins/commit/69f513bd08d278b33510c571339370a80139ebbb))
* **design-director:** upstream キャッシュの clone/pull 実装 ([92d5f17](https://github.com/yukimasaki/claude-plugins/commit/92d5f1761b6d3b8dacf6e5eff312d0bfae11afab))
* **design-director:** upstream 同期スクリプトの骨格 ([14b8c41](https://github.com/yukimasaki/claude-plugins/commit/14b8c418c5685892f5ccbb4934b788eda3ac431e))
* **design-director:** upstream 差分検出と Markdown サマリー ([9453602](https://github.com/yukimasaki/claude-plugins/commit/9453602a271d954ca038601c1a7c71a3231dc67f))
* **design-director:** upstream-state.json の読み書きと zod 検証 ([6776c40](https://github.com/yukimasaki/claude-plugins/commit/6776c4081c5a22556020b071515bdd5e17aedd88))
* **design-director:** ギャラリーページを実装 ([397b04f](https://github.com/yukimasaki/claude-plugins/commit/397b04fd7eeea119c21a2e2beedc90364665eb56))
* **design-director:** サブコマンド9種の概要表を追加 ([74ab466](https://github.com/yukimasaki/claude-plugins/commit/74ab466a807d2d44be396270f521eb61b26dcc62))
* **design-director:** プログレッシブ開示インデックスを追加 ([cb465a4](https://github.com/yukimasaki/claude-plugins/commit/cb465a41178d10f559e056f41c8cfd34fdb55cb4))
* **design-director:** プロジェクト詳細ページを実装 ([6373cc1](https://github.com/yukimasaki/claude-plugins/commit/6373cc1ae9b0fa69dc57e46a777f9858d60681fe))
* Phase 1 — Public 化準備（README モダン化・i18n・GitHub 設定・plugin.json 充実） ([d8c2526](https://github.com/yukimasaki/claude-plugins/commit/d8c2526bf00a852c13874d9eac4ae18df7eb6a6e))


### Bug Fixes

* **design-director:** open-codesign prompts の .v1. 二重挿入を修正 ([6d765d6](https://github.com/yukimasaki/claude-plugins/commit/6d765d687f2421036838dfee2283792eefa435c6))
* **design-director:** sync-upstream の cwd 依存と README.md 混入を修正 ([80603c7](https://github.com/yukimasaki/claude-plugins/commit/80603c7b39ef5f7ff2cbb3cc5965de4b03b5a977))

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
