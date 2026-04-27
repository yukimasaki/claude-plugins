# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
