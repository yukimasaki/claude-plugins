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

### getdesign.md (VoltAgent team)

- **Source**: <https://getdesign.md> （ホームは <https://github.com/VoltAgent/awesome-design-md>）
- **License**: MIT License (CLI / リポジトリ部分) — Copyright (c) 2026 VoltAgent
- **License text**: [`licenses/getdesign-LICENSE`](./licenses/getdesign-LICENSE)
- **取得日**: 2026-04-28
- **Vendored paths** (70 サイト、getdesign.md カタログ全件カバー):
  - `plugins/design-director/skills/design-director/references/design-md/{warm,editorial,data-dense,cinematic,playful,glass,brutalist,indie,terminal}/*.md` （family 振り分けはメンテナの主観判断）
- **取得方法**: `https://getdesign.md/design-md/{site}/DESIGN.md` から HTTP fetch（または `npx getdesign@latest add {site}` CLI）
- **配信形式の補足**: getdesign.md は 2026-04 時点で DESIGN.md 公式仕様（フロントマター付き Markdown）への移行を進めており、配信される 70 サイトのうち約 12 サイトは新仕様、約 58 サイトは依然 legacy prose（`# 見出し` + `## 1. Visual Theme & Atmosphere` 構造）。本リポジトリは upstream の状態を忠実に vendor している。新仕様化が進めば `bun run scripts/check-diff-upstream.ts getdesign-md` で SHA 不一致を検知して PR で取り込み追従できる
- **利用根拠**: [getdesign.md Terms of Service](https://getdesign.md/terms) Section 5「Free Content」 が public directory の DESIGN.md ファイルに対し "free to browse, download, and use in your projects" を許諾。Section 7 の再配布禁止は paid deliverables（Catalog DESIGN.md / Vibecoder kit 等）のみが対象で、本プラグインが利用する free public DESIGN.md は対象外
- **Modifications**: 無改変。getdesign.md からの取得時の SHA256 と vendored ファイルの SHA256 が一致することを `scripts/check-diff-upstream.ts getdesign-md` で検証可能
- **Trademark notice**: vendored 各 DESIGN.md は対応するブランド（Apple / Linear / Vercel 等）の **公開ページから推定された design tokens** であり、当該ブランドのロゴ・著作物の複製ではありません。本プラグインは特定ブランドの impersonation 目的で使用しません

### kzhrknt / awesome-design-md-jp

- **Source**: <https://github.com/kzhrknt/awesome-design-md-jp>
- **License**: MIT License — Copyright (c) 2026 awesome-design-md-jp contributors
- **License text**: [`licenses/awesome-design-md-jp-LICENSE`](./licenses/awesome-design-md-jp-LICENSE)
- **Vendored at commit**: `b1dbe3f22575`（取得日: 2026-04-28）
- **Vendored paths** (25 サイト、日本企業 / 日本市場向け):
  - `plugins/design-director/skills/design-director/references/design-md/japanese-corporate/` — smarthr / freee / moneyforward / cybozu / sansan / toyota / mec
  - `plugins/design-director/skills/design-director/references/design-md/japanese-consumer/` — apple / muji / mercari / cookpad / tabelog / rakuten / pixiv / abema / line
  - `plugins/design-director/skills/design-director/references/design-md/japanese-editorial/` — note / qiita / zenn / connpass / wired
  - `plugins/design-director/skills/design-director/references/design-md/japanese-creative/` — studio / droga5 / notion / novasell
- **取得方法**: `git clone --depth 1 https://github.com/kzhrknt/awesome-design-md-jp.git` → `cp design-md/{site}/DESIGN.md` → `references/design-md/japanese-{family}/{site}.md`
- **配信形式**: legacy prose（`# DESIGN.md — Brand` + `## 1. Visual Theme & Atmosphere` 構造）。本リポジトリの skill は両形式（DESIGN.md 公式仕様 / legacy prose）対応済み（PR #2-1）
- **Modifications**: 無改変。`scripts/check-diff-upstream.ts awesome-design-md-jp` で SHA256 一致を検証可能
- **family 振り分け**: 本リポジトリ独自の判断で `japanese-corporate` / `japanese-consumer` / `japanese-editorial` / `japanese-creative` の 4 family に分類（rohitg00 体系の延長）
- **Trademark notice**: vendored 各 DESIGN.md は対応する日本ブランド（SmartHR / 無印良品 / メルカリ等）の **公開ページから推定された design tokens** であり、当該ブランドのロゴ・著作物の複製ではありません
- **連動する Layer**: `references/prompts/japanese-typography.v1.txt` で CJK タイポグラフィ規約（fallback chain / 行間 / palt / 禁則 / 混植）を Layer 1 として併用

### DESIGN.md 公式仕様 (Google Labs)

- **Source**: <https://github.com/google-labs-code/design.md>
- **License**: Apache License 2.0 — Google LLC
- **License text**: [`licenses/google-design-md-spec-LICENSE`](./licenses/google-design-md-spec-LICENSE)
- **採用範囲**: 仕様（フロントマター + Markdown 本文の二層構造、token schema、section 順序）に準拠して vendored DESIGN.md を author/validate する。`npx @google/design.md lint` を CI で利用可能
- **vendored したファイル**: なし（仕様書のみ参照、CLI は npm 経由で都度取得）

### rohitg00 / awesome-claude-design (歴史的参照、PR #2-1 で参照終了)

- **Source**: <https://github.com/rohitg00/awesome-claude-design>
- **License**: MIT License — Copyright (c) 2026 Rohit Ghumare
- **License text**: [`licenses/awesome-claude-design-LICENSE`](./licenses/awesome-claude-design-LICENSE)
- **Status**: PR #2-1（2026-04-28）で **upstream 参照を終了**。`design-md/` は getdesign.md（DESIGN.md 公式仕様準拠）由来 70 サイト + 自前手動変換 15 サイトに置き換え済み（PR #2-2 で 51 サイト追加 + the-verge を upstream 由来に切替）
- **継承**: rohitg00 由来の **prompt-packs / recipes** および **family 分類体系**（warm / editorial / data-dense / cinematic / playful / glass / brutalist / indie / terminal / **remix**）は本プラグインで継続利用。特に **remix family の 8 サイト**（`linear-x-claude` / `vercel-x-pitchfork` / `mercury-x-linear` / `ollama-x-elevenlabs` / `warp-x-sentry` / `stripe-x-a24` / `notion-x-duolingo` / `granola-x-criterion`）は rohitg00 が hand-crafted した 2 ブランド aesthetic の blend で、本リポジトリで DESIGN.md 公式仕様に変換のうえ継承している
- **Vendored paths** (継承分):
  - `plugins/design-director/skills/design-director/references/prompt-packs/`
  - `plugins/design-director/skills/design-director/references/recipes/`
  - `plugins/design-director/skills/design-director/references/design-md/remix/` （8 サイトの hand-crafted blend、DESIGN.md 仕様に変換済み）
  - `plugins/design-director/skills/design-director/references/design-md/{family}/` の getdesign.md カタログ外 7 サイト（mercury / datadog / tavus / canva / toss / arc / granola）— rohitg00 由来の prose を本リポジトリで DESIGN.md 仕様に変換。**the-verge は PR #2-2 で getdesign.md `theverge` 由来に置き換え**（vendored ファイル名は `the-verge.md` を維持）
- **Modifications**: `references/recipes/` には本リポジトリ独自の recipe を追加しています:
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
