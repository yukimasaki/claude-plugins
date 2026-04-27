# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.1](https://github.com/yukimasaki/claude-plugins/compare/v0.1.1...v0.1.1) (2026-04-27)


### Bug Fixes

* **readme:** hero の &lt;video&gt; ソースを絶対 URL に変更（GitHub WebUI で表示されない問題の修正） ([d9a78c4](https://github.com/yukimasaki/claude-plugins/commit/d9a78c4ca7fe4db3c10635502251d5e5acc860c0))


### Documentation

* hero を Markdown 形式（raw URL + 画像）に変更 — GitHub WebUI 表示の確実性を優先 ([0fc69c3](https://github.com/yukimasaki/claude-plugins/commit/0fc69c34f0cb9eec914a529929e95046b4088c86))

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
