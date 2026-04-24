---
name: design-director
description: あらゆるプロダクト（アプリ UI、スライド、資料、マーケ素材等）のデザインプロトタイプを対話的に探索・生成・納品する。Claude Design の Agent Skills 版。
allowed-tools: AskUserQuestion, Read, Write, Edit, Glob, Grep, Bash, Task, WebFetch, WebSearch
---

# design-director

あらゆるプロダクトのデザインプロトタイプを、**美学の探索 → バリエーション
生成 → 選択深掘り → 納品** のサイクルで対話的に作るスキル。

open-codesign のプロンプト体系（IP 保護・anti-slop・preflight 等）と
awesome-claude-design の美学プリセット（editorial / terminal / warm /
data-dense / cinematic / playful / glass / brutalist / indie）を vendored
資産として取り込み、それらを **プログレッシブに** 参照しながらデザインを
進める。

## いつ起動するか

- プロダクトのデザインプロトタイプを作りたいとき（アプリ UI、ランディング、
  スライド、資料、マーケ素材、データ可視化、ロゴ、メール等）
- 既存コードベースのデザインを改善したいとき（現状のトークン・UI を起点に
  新しい方向性を探索）
- `/design-director [subcommand]` で呼び出す（サブコマンド一覧は下記）

**併存する類似スキルとの棲み分け**: `/web-design-engineer`（組み込み）、
`/ui-vignette`（機能紹介用イラスト）とは独立。本スキルは「Claude Design 相当
の探索型プロトタイピング」を担う。

## 7 ステップのワークフロー

スキル発動から成果物納品までの標準フロー。**ステップ 4〜7 はループ可能**
で、ユーザーからの自然言語フィードバック（「もっとコンパクトに」「色を
暖かく」等）で何度でも繰り返す。サブコマンドや選択肢形式の UI は設けず、
**自由記述での対話** を貫く。

### (1) 環境準備

`.design-studio/` の存在確認と初回セットアップ。

- `.design-studio/` が無ければ Next.js ギャラリー（App Router + TypeScript）
  を生成し、`bun install` まで完走させる
- 既に存在する場合はスキップ（成果物だけ追加する）
- `.design-studio/` は gitignore 対象、プロジェクトを汚染しない

### (2) コンテキスト収集

何を・誰のために・どんな制約で作るかを集める。

- ユーザーの意図（ブリーフ、参考リンク、既存デザイン等）を受け取る
- 既存コードベースを自律探索（`packages/design-tokens/`、`components/`、
  既存 UI ファイル等）。見つからなければユーザーに尋ねる
- デザイントークンの扱いを選択（既存トークン準拠 / 新規探索）
- プロジェクトコンテキストは `.design-studio/memory.md` に自然言語で保存し、
  次回以降活用（Claude Code 本体のメモリは使わない）

### (3) 美学方向性の決定

どの美学ファミリーで攻めるか、方向性のトーンを絞る。

- `references/design-md/` 配下の 9 美学ファミリー（+ remix）から候補を提示
  し、ユーザーが選ぶ
- 迷ったら `prompt-packs/family-picker.md` を使ってユーザーに質問を投げる
- 決定した美学に該当する `design-md/{family}/*.md` を選び、以降の生成で
  トーン・レイアウト・フォント選定の基準にする

### (4) バリエーション生成 `[ループ]`

方向性の異なるバリエーションを並べて提示する。

- **通常 3 案**（状況に応じて 2〜4 案）を生成
- 各案はファイル単位で `.design-studio/projects/{name}/variations/` に
  JSX として保存し、ギャラリーページに並べて比較できるようにする
- 生成前に `pre-flight.v1.txt` の 12 項目を silently セルフチェックする
  （artifact type / 感情トーン / 密度 / 比較 / 注目数値 / パレット /
  タイポラダー / anti-slop ガード）

### (5) 選択と深掘り `[ループ]`

ユーザーが選んだ方向を更に磨く。

- 選ばれた案を `selectedVariation` として `manifest.json` に記録
- ユーザーの自然言語フィードバック（「もっと余白を」「色を暖かく」等）を
  受けて、変更の最小セット を当てていく（`tweaks-protocol.v1.txt` と
  `editmode-protocol.v1.txt` に従う）

### (6) 検証 `[ループ]`

- open-codesign の 12 項目 **プリフライトチェックを必須で実行** し、結果を
  ユーザーに報告する（該当なし項目は skip、引っかかったら ④ に戻る）
- `bun dev` でギャラリーを起動し、ユーザーにブラウザ確認を促す
- フィードバックがあれば ④ からループ再開

### (7) 納品 `[ループ]`

- `.design-studio/projects/{name}/` に成果物一式（components / variations /
  styles.css / manifest.json / HANDOFF.md / {project}.html）を配置
- HANDOFF.md はプロトタイプ生成時に自動生成（何のためのプロト、選ばれた
  美学、バリエーションの経緯、見るべきファイル）
- `/design-director export <project>` でバンドル（React CDN + Babel で単体
  動作する HTML + JSX）を書き出せる

## 参照ファイルの読み込み方針（プログレッシブ開示）

`references/` 配下は open-codesign と awesome-claude-design の vendored 資産。
全てを毎回読むとコンテキストを食い潰すため、**2 段階のプログレッシブ開示**
で読む: (1) スキル本体が **カテゴリ単位** の大まかな採否を決める、(2) 各
vendored ファイルの先頭 `when_to_use` コメントで **最終判断** をする。

### (1) 常時読む（Layer 1）

どの生成タスクでも最初に読む。スキルのベース人格・anti-slop・出力規約の
アンカー:

- `references/prompts/identity.v1.txt` — エージェントのペルソナ・価値観
- `references/prompts/workflow.v1.txt` — open-codesign 側の 7 ステップ
  （ディレクターとしての詳細版。本スキルの 7 ステップの粒度と相補的）
- `references/prompts/anti-slop-digest.v1.txt` — 「generated っぽさ」回避
  の凝縮版（フル版は `anti-slop.v1.txt`）
- `references/prompts/pre-flight.v1.txt` — 12 項目プリフライト（ステップ 4・6
  で silently セルフチェック）
- `references/prompts/output-rules.v1.txt` — アーティファクトタグ・出力
  フォーマット規約
- `references/prompts/safety.v1.txt` + `references/prompts/safety.v1.txt`
  — 安全制約（vendored +  追加拡張、後者で上書きしない）

### (2) `type` に応じて 1 つ選ぶ（Layer 2a）

成果物タイプが決まった時点で、対応する JSX テンプレートを 1 つだけ読む:

| type | 読むファイル |
|---|---|
| `landing` | `references/design-skills/landing-page.jsx` |
| `dashboard` | `references/design-skills/dashboard.jsx` |
| `hero` | `references/design-skills/heroes.jsx` |
| `pricing` | `references/design-skills/pricing.jsx` |
| `chat-ui` | `references/design-skills/chat-ui.jsx` |
| `data-table` | `references/design-skills/data-table.jsx` |
| `footer` | `references/design-skills/footers.jsx` |
| `calendar` | `references/design-skills/calendar.jsx` |
| `editorial` / `long-form` | `references/design-skills/editorial-typography.jsx` |
| `slide-deck` / `pitch-deck` | `references/design-skills/slide-deck.jsx` |
| `chart` / `data-viz` | `references/design-skills/chart-svg.jsx` |
| `glass` / `depth` | `references/design-skills/glassmorphism.jsx` |

型が複合する場合は主タイプを 1 つ選ぶ（pre-flight #1 と同じ判断基準）。

### (3) `aesthetic` に応じて 1 つ選ぶ（Layer 2b）

ステップ 3 で決定した美学に対応する DESIGN.md を 1 つだけ読む:

| 美学ファミリー | ディレクトリ | 代表例 |
|---|---|---|
| editorial | `references/design-md/editorial/` | linear / vercel |
| terminal | `references/design-md/terminal/` | opencode / ollama / warp |
| warm | `references/design-md/warm/` | claude / mercury |
| data-dense | `references/design-md/data-dense/` | datadog / posthog / mongodb / clickhouse |
| cinematic | `references/design-md/cinematic/` | nvidia / runway / bmw / ferrari / lamborghini / cohere / minimax / renault / tavus |
| playful | `references/design-md/playful/` | figma / canva / toss |
| glass | `references/design-md/glass/` | apple / arc |
| brutalist | `references/design-md/brutalist/` | the-verge |
| indie | `references/design-md/indie/` | granola |
| remix | `references/design-md/remix/` | linear-x-claude / vercel-x-pitchfork 等 |

### (4) 必要に応じて読む（Layer 2c）

以下はタスク性質に応じて選択的に読む:

- `references/builtin-skills/*.md` — より専門的な領域用
  - `data-viz-recharts.md`: Recharts を使う可視化
  - `frontend-design-anti-slop.md`: anti-slop の深掘り
  - `mobile-mock.md`: デバイスフレーム付きモバイル UI
  - `pitch-deck.md`: ピッチデッキ専用の詳細ガイド
- `references/recipes/*.md` — 13 件の「完成までの手順書」。具体的な
  ユースケース（Figma → DESIGN.md、ランディング 20 分完成、pitch-deck
  from README 等）でマッチするものがあれば読む
- `references/prompt-packs/*.md` — 6 件の「対話プロンプト部品」。美学決定
  支援（`family-picker.md`）、ブランド抽出（`brand-to-design-md.md`）、
  既存サイト監査（`audit-live-site.md`）、リミックス（`remix-two-brands.md`）、
  3 デザイナー議論（`3-designer-debate.md`）、デフォルト破り
  （`break-default-aesthetic.md`）

### 最終判断はファイル冒頭のシグナルで

Layer 2 で候補を絞ったあとは、各 vendored ファイルの **冒頭のシグナル** を
読んで最終的な採否を決める。カテゴリ別の場所:

- `design-skills/*.jsx`: 先頭の `// when_to_use: ...` コメント（open-codesign
  由来の規約）
- `builtin-skills/*.md`: YAML frontmatter の `description:` フィールド
- `design-md/*.md`: `# 見出し` 直後の 1〜2 行のキャッチ（「〜向けの
  リファレンス DESIGN.md」等）
- `prompt-packs/*.md` / `recipes/*.md`: `# 見出し` 直後の 1 行サマリ
- `prompts/*.txt`: 冒頭数行が目的と対象を述べるプレーンテキスト

スキル本体の分類表と矛盾する場合はファイル側のシグナルを優先する（upstream
の変更に追従しやすくするため）。以降は本ドキュメントでは総称として
「`when_to_use` シグナル」と呼ぶ。

## サブコマンド一覧

`/design-director [subcommand] [args]` の形式で呼び出す。**コア 5 種 + 補助
4 種 = 計 9 種**。本セクションは概要表のみで、各コマンドの詳細ワークフロー
は Phase 5（コア）・Phase 6（補助）で本ドキュメントに追記する。

### コア（5 種）

| コマンド | 動作 |
|---|---|
| `/design-director` | 新規デザイン生成（デフォルト動作）。引数なしで対話開始。詳細: [`references/commands/default.md`](references/commands/default.md) |
| `/design-director update` | upstream（awesome-claude-design / open-codesign）から更新取り込み。詳細: [`references/commands/update.md`](references/commands/update.md) |
| `/design-director serve` | `.design-studio/` の Next.js ギャラリーを起動。詳細: [`references/commands/serve.md`](references/commands/serve.md) |
| `/design-director list` | 生成済みプロジェクトの一覧表示。詳細: [`references/commands/list.md`](references/commands/list.md) |
| `/design-director export <project>` | 指定プロジェクトをバンドルとしてエクスポート（handoff 形式のポータブル HTML + JSX）。詳細: [`references/commands/export.md`](references/commands/export.md) |

### 補助（4 種）

| コマンド | 動作 |
|---|---|
| `/design-director edit <project>` | 既存プロジェクトの編集・バリエーション追加を継続。詳細: [`references/commands/edit.md`](references/commands/edit.md) |
| `/design-director memory` | `memory.md` の内容確認・編集 |
| `/design-director reset` | `.design-studio/` をクリーンアップ（生成物のバックアップを提案） |
| `/design-director status` | 現在の状態（dev server 起動状態、最終 update 日時等） |

> 各コマンドの詳細なワークフロー（引数・対話シーケンス・副作用）は
> Phase 5（コア 5 種）・Phase 6（補助 4 種）で本 SKILL.md に追記する。
> 現段階では概要表のみを提供する。
