# Attributions

このリポジトリには以下の upstream プロジェクトから派生・同梱したコンテンツが含まれています。
すべて MIT License 互換のため、本リポジトリも MIT License で配布しています。

各 upstream の LICENSE 全文は [`licenses/`](./licenses/) ディレクトリに格納されています。

## Vendored Sources

### OpenCoworkAI / open-codesign

- **Source**: <https://github.com/OpenCoworkAI/open-codesign>
- **License**: MIT License — Copyright (c) 2026 OpenCoworkAI Contributors
- **License text**: [`licenses/open-codesign-LICENSE`](./licenses/open-codesign-LICENSE)
- **Vendored at commit**: `dcb5510e5be5`（取得日: 2026-04-25）
- **Vendored paths**:
  - `plugins/design-director/skills/design-director/references/prompts/`
  - `plugins/design-director/skills/design-director/references/design-skills/`
  - `plugins/design-director/skills/design-director/references/builtin-skills/`
- **Modifications**: 以下のファイルにローカルな追記を加えています（upstream にはまだ反映していません）:
  - `references/prompts/anti-slop.v1.txt` — 「抽象モチーフは中身を持つ」項目を "What slop looks like" リストに追加（[Issue #12](https://github.com/yukimasaki/claude-plugins/issues/12) A-1）
  - `references/prompts/anti-slop-digest.v1.txt` — 上記と対応する 1 行を digest にも追加（A-1）
  - `references/prompts/output-rules.v1.txt` — 長寿命アーティファクト（README hero / SPI 等）への version 番号 / 年号 / 序数の埋め込みを禁じる「Rotting information in long-lived artifacts」セクションを追加（[Issue #12](https://github.com/yukimasaki/claude-plugins/issues/12) A-4）
  - `references/prompts/pre-flight.v1.txt` — 項目 #8（Anti-slop guard）に abstract decorative shapes の検査を追記、新規項目 #9（Rot check, 長寿命アーティファクトのみ）を追加（A-4）

### rohitg00 / awesome-claude-design

- **Source**: <https://github.com/rohitg00/awesome-claude-design>
- **License**: MIT License — Copyright (c) 2026 Rohit Ghumare
- **License text**: [`licenses/awesome-claude-design-LICENSE`](./licenses/awesome-claude-design-LICENSE)
- **Vendored at commit**: `7f60ee56b934`（取得日: 2026-04-25）
- **Vendored paths**:
  - `plugins/design-director/skills/design-director/references/design-md/`
  - `plugins/design-director/skills/design-director/references/prompt-packs/`
  - `plugins/design-director/skills/design-director/references/recipes/`
- **Modifications**: upstream 由来のファイルは無改変。`references/recipes/` には本リポジトリ独自の recipe を追加しています:
  - `references/recipes/social-preview-image.md` — GitHub SPI と README hero を 1 つの hero HTML から作る手順（[Issue #12](https://github.com/yukimasaki/claude-plugins/issues/12) B-1）
  - `references/recipes/github-readme-rendering.md` — github.com で確実に表示される画像 / 動画形式の選び方（B-2）
  - `references/recipes/render-to-png-webm.md` — Playwright で HTML → PNG / WebM 変換する手順（同梱の `tools/render/` の使い方を含む）（B-3）

  これらは upstream には存在しないファイルなので、awesome-claude-design 側のライセンスは適用されません（本リポジトリの MIT ライセンスのみ）。

## design-md/ への追加コントリビューション

`plugins/design-director/skills/design-director/references/design-md/` には、
コントリビューターが PR で追加した個別の design 参照ファイルが含まれる場合があります。
追加ファイルの出典は、ファイル単位で本セクションに追記する責任を負います。
詳細は [CONTRIBUTING.md](./CONTRIBUTING.md) を参照してください。

| Category | File | Source URL | License | 追加日 |
|---|---|---|---|---|
| _（追加コントリビューションが入った時に追記）_ | | | | |

## トレードマークについて

このリポジトリは **Anthropic 社、Claude™、または Claude Design™ のいずれとも提携・関係していません**。
"Claude" / "Claude Design" は Anthropic 社の商標です。

参照しているブランド名・製品名・デザインシステム名は、
それぞれの所有者の知的財産です。本リポジトリでは設計ワークフローの教育・実演目的でのみ参照しています。

## データ・プライバシーに関する注意

design-director スキルを利用する際は、Anthropic の
[Privacy Policy](https://www.anthropic.com/legal/privacy) を確認してください。
