<div align="center">

# claude-plugins

**Personal Claude Code plugin marketplace**

[![License: MIT](https://img.shields.io/badge/license-MIT-green?style=flat-square)](./LICENSE)
[![Claude Code](https://img.shields.io/badge/Claude_Code-Plugin-blueviolet?style=flat-square)](https://docs.anthropic.com/en/docs/claude-code)

<br>

Yuki Masaki が個人で開発・公開している Claude Code プラグイン群。
コミュニティへの貢献と、デザインワークフローの標準化への賛同を目的としています。

</div>

<br>

> **Disclaimer**: このリポジトリは Anthropic 社、Claude™、または Claude Design™ と提携・関係していません。
> "Claude" は Anthropic 社の商標です。

<br>

## 目次

- [セットアップ](#セットアップ)
- [利用可能なプラグイン](#利用可能なプラグイン)
- [対応環境](#対応環境)
- [開発ガイド](#開発ガイド)
- [ライセンスとクレジット](#ライセンスとクレジット)

<br>

## セットアップ

### 1. マーケットプレイスの追加

Claude Code 内で以下を実行:

```
/plugin marketplace add yukimasaki/claude-plugins
```

### 2. プラグインのインストール

```
/plugin install design-director@kit
```

<br>

## 利用可能なプラグイン

### design-director

デザイン駆動のプロトタイピング支援スキル。
自然言語ブリーフから美学探索 → 3 案生成 → 深掘り → 納品までを対話で進めるエージェントスキル。

| 項目 | 内容 |
|---|---|
| 起動 | `/design-director` |
| サブコマンド | `default` / `update` / `serve` / `list` / `export` / `edit` / `memory` / `reset` / `status` |
| 出力 | `.design-studio/projects/{slug}/` に React JSX バリエーション + HANDOFF.md |
| ギャラリー | `/design-director serve` で `http://localhost:3000` |

詳細は [`plugins/design-director/skills/design-director/README.md`](./plugins/design-director/skills/design-director/README.md) を参照。

<br>

## 対応環境

| 環境 | 対応 | 備考 |
|:-----|:----:|:-----|
| Claude Code CLI | ○ | マーケットプレイスから自動インストール |
| Claude Desktop（Code タブ） | ○ | 同上 |
| VS Code / JetBrains 拡張 | ○ | 同上 |

<br>

## 開発ガイド

### ローカルテスト

```bash
claude --plugin-dir ./plugins/design-director
```

### バリデーション

```bash
claude plugin validate .
```

### 新しいデザイン参照を追加したい

`plugins/design-director/skills/design-director/references/design-md/` 配下にファイルを追加する PR を歓迎します。
詳細は [CONTRIBUTING.md](./CONTRIBUTING.md) を参照してください。

<br>

## ライセンスとクレジット

このリポジトリは [MIT License](./LICENSE) で配布されています。

vendored upstream プロジェクトのクレジット・帰属表示は [ATTRIBUTIONS.md](./ATTRIBUTIONS.md) を参照してください。

<br>

---

<div align="center">

Built with [Claude Code](https://docs.anthropic.com/en/docs/claude-code)

</div>
