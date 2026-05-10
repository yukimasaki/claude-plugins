---
name: design-director
description: あらゆるプロダクト（アプリ UI、スライド、資料、マーケ素材等）のデザインプロトタイプを対話的に探索・生成・納品する。Claude Design の Agent Skills 版。
allowed-tools: AskUserQuestion, Read, Write, Edit, Glob, Grep, Bash, Task, WebFetch, WebSearch
---

# design-director

あらゆるプロダクトのデザインプロトタイプを、**美学の探索 → バリエーション
生成 → 選択深掘り → 納品** のサイクルで対話的に作るスキル。

open-codesign のプロンプト体系（IP 保護・anti-slop・preflight 等）と、
[DESIGN.md 公式仕様](https://github.com/google-labs-code/design.md) 準拠の
美学プリセット（editorial / terminal / warm / data-dense / cinematic /
playful / glass / brutalist / indie / remix の 10 family）を vendored 資産
として取り込み、それらを **プログレッシブに** 参照しながらデザインを進める。
DESIGN.md は frontmatter（YAML、machine-readable トークン）+ Markdown 本文
（human-readable rationale）の二層構造で、`colors:` / `typography:` /
`rounded:` / `spacing:` 等のトークンを基本値として CSS / 設定に展開する。

## いつ起動するか

- プロダクトのデザインプロトタイプを作りたいとき（アプリ UI、ランディング、
  スライド、資料、マーケ素材、データ可視化、ロゴ、メール等）
- 既存コードベースのデザインを改善したいとき（現状のトークン・UI を起点に
  新しい方向性を探索）
- `/design-director [subcommand]` で呼び出す（サブコマンド一覧は下記）

**併存する類似スキルとの棲み分け**: `/web-design-engineer`（組み込み）、
`/ui-vignette`（機能紹介用イラスト）とは独立。本スキルは「Claude Design 相当
の探索型プロトタイピング」を担う。

## 運用ルール

本スキル実行中は以下を守る。サブコマンド個別の記述より優先される。

### メモリと永続化（Q6-3）

- プロジェクト文脈・ユーザーの好み・記憶すべき制約は **すべて
  `.design-studio/memory.md`** に自然言語で保存する
- **Claude Code 本体の auto memory（`~/.claude/projects/.../memory/`、
  auto memory スキル等）は使わない**。ユーザーが「覚えておいて」「記憶して」
  「remember」等と指示した場合も、保存先は `.design-studio/memory.md` のみ。
  auto memory が起動しようとしたら **明示的に stop し**、
  `.design-studio/memory.md` への Write / Edit に切り替える
- 誤って auto memory に書いてしまった場合は、該当ファイルを削除してから
  `.design-studio/memory.md` に書き直す。ユーザーにも「auto memory ではなく
  スキル側の memory.md に保存し直した」と loud で報告する
- スキル外の副作用を出さない: 本スキルの対話ログ・plan ファイル・task 管理を
  `.claude/` 配下や `~/.claude/` 配下に作らない

### 対話モード

- ステップ 4-7 のループ中はサブコマンドを設けず、自然言語フィードバックで
  回す（Q3-2）
- ユーザーの指示が曖昧ならオンボーディング（対象 / 制約 / トーン）を
  silently 深掘りしてから先に進む（Q6-1）

### ディベート系 prompt-pack の結果提示

`references/prompt-packs/` 配下のディベート系 prompt-pack
（`3-designer-debate.md` / `4-party-debate-with-user.md` /
`break-default-aesthetic.md` / 将来追加されるもの）を用いて設計判断・推奨案を
出力する場合、最終結果は **以下 2 点をセット** で提示することを必須とする:

1. **ユーザー操作フローでの説明** — 「ユーザーが画面を開く → ボタンを押す →
   こう変わる」という時系列の自然言語で書く。技術用語（モード名 / state 名 /
   関数名 / ファイルパス）を本文に持ち込まない。実装具体度は Action Items /
   Minority Report 等の補足セクションで上げる
2. **新旧の ASCII モック** — Before / After を並べ、視覚的に体験差を比較できる
   形で提示する

提示順は SYNTHESIS 本文（操作フロー）→ ASCII モック（Before / After）→
Action Items の順を守る。各 prompt-pack 個別ファイルの Format 節と矛盾した
場合は本ルールを優先する。

### 破壊的動作

- `.design-studio/` を消すコマンド（`reset`）は毎回ユーザー確認を取る
  （CLAUDE.md「Executing actions with care」）。バックアップ提案 → 最終確認
  の 2 段階を省略しない

## 7 ステップのワークフロー

スキル発動から成果物納品までの標準フロー。**ステップ 4〜7 はループ可能**
で、ユーザーからの自然言語フィードバック（「もっとコンパクトに」「色を
暖かく」等）で何度でも繰り返す。サブコマンドや選択肢形式の UI は設けず、
**自由記述での対話** を貫く。

### (1) 環境準備

`.design-studio/` の存在確認と初回セットアップ。

- `.design-studio/` が無ければ Next.js ギャラリー（App Router + TypeScript）
  を生成し、`bun install` まで完走させる。**初回セットアップが数十秒
  かかってもこの手順を省略して静的 HTML や `.html` 直書きで代替してはいけない**。
  variations は React コンポーネントとして直接 import される設計のため、
  Next.js なしの構成は仕様外
- 既に存在する場合はスキップ（成果物だけ追加する）
- `.design-studio/` は gitignore 対象、プロジェクトを汚染しない

### (2) コンテキスト収集

何を・誰のために・どんな制約で作るかを集める。

- ユーザーの意図（ブリーフ、参考リンク、既存デザイン等）を受け取る
- 既存コードベースを自律探索（design-tokens / components / 既存 UI ファイル等の
  典型ディレクトリ）。見つからなければユーザーに尋ねる
- デザイントークンの扱いを選択（既存トークン準拠 / 新規探索）
- プロジェクトコンテキストは `.design-studio/memory.md` に自然言語で保存
  （詳細は本ドキュメント上部「運用ルール > メモリと永続化」を参照）

### (3) 美学方向性の決定

どの美学ファミリーで攻めるか、方向性のトーンを絞る。

- `references/design-md/` 配下の 9 美学ファミリー（+ remix）から候補を提示
  し、ユーザーが選ぶ
- 迷ったら `prompt-packs/family-picker.md` を使ってユーザーに質問を投げる
- 決定した美学に該当する `design-md/{family}/*.md` を選び、フロントマター
  の `colors:` / `typography:` / `rounded:` / `spacing:` トークンを基本値とし、
  Markdown 本文の `## Colors` / `## Typography` / `## Components` 等で
  適用ニュアンスを補足する（[DESIGN.md 公式仕様](https://github.com/google-labs-code/design.md)
  準拠）

### (4) バリエーション生成 `[ループ]`

方向性の異なるバリエーションを並べて提示する。

- **通常 3 案**（状況に応じて 2〜4 案）を生成
- 各案は `.design-studio/projects/{name}/variations/{slug}.tsx` として
  保存する。形式は **関数コンポーネント + インラインスタイル + トークン定数**
  のピュア JSX/TSX で、雛形は `references/design-skills/*.jsx`
  （`landing-page.jsx` / `dashboard.jsx` / `heroes.jsx` 等）と同形にする
- **「HTML の方が速い・軽い」は誤り**。本スキルでは常に JSX/TSX のほうが
  生成が速く安定する。HTML は `<div class="…">` の中身を 1 トークンずつ
  予測する必要があり予測アンカーが弱いが、JSX は関数コンポーネント・props・
  既知のトークン定数（`SERIF`, `SANS`, `TWEAK_DEFAULTS` 等）が予測アンカー
  として効く。「シンプルだから HTML」「軽いから HTML」「後で JSX 化すればいい」
  という合理化はしない
- **禁止パターン**:
  - `.design-studio/projects/{name}/variations/` 配下に `.html` を直接置く
  - `` const html = `<!doctype html>...` `` のように HTML を template literal に詰める
  - `<iframe srcDoc={html}>` で HTML 文字列を読み込ませる擬似 JSX
- ギャラリーは各 variation を **React コンポーネントとして直接 import する**
  前提（iframe 経由ではない）
- 生成前に `pre-flight.v1.txt` の 11 項目を silently セルフチェックする
  （artifact type / 感情トーン / 密度 / 比較 / 注目数値 / パレット /
  タイポラダー / anti-slop ガード / rot check / CJK typography /
  JSX/TSX フォーマット）

### (5) 選択と深掘り `[ループ]`

ユーザーが選んだ方向を更に磨く。

- 選ばれた案を `selectedVariation` として `manifest.json` に記録
- ユーザーの自然言語フィードバック（「もっと余白を」「色を暖かく」等）を
  受けて、変更の最小セット を当てていく（`tweaks-protocol.v1.txt` と
  `editmode-protocol.v1.txt` に従う）
- **修正の保存方法を毎回ユーザーに確認する**。修正指示を受けたら、変更を
  反映する **前** に以下のどちらにするかを尋ねる:
  1. **上書き**: 既存ファイル（例: `brutalist.tsx`）をそのまま書き換える
  2. **新スナップショット**: `brutalist-v2.tsx` のように連番付きで新規
     ファイルを作成し、index ページで並列比較できるようにする
  - スナップショット運用は「あの時の v1 が良かった」と戻れる利点があり、
    制作プロセスを後から開示する際の素材にもなる（ヒーロー制作の実例 →
    `samples/hero/`）
  - ユーザーが「以降はずっと上書きで」「v3 として」など方針を示したら、
    その指示に従う。指示変更があれば即座に従う（毎回確認しないモードに
    切り替わる）
  - 連番は採用版 → 改修版の流れで `-v2`, `-v3` ... と単調増加。`-v1` は
    最初の採用版で、改修して `-v2` を作った時点で `-v1` を後付けする
    リネームでも良い

### (6) 検証 `[ループ]`

- open-codesign の 11 項目 **プリフライトチェックを必須で実行** し、結果を
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
- 配布用の **画像 / 動画**（README hero, GitHub Social Preview Image,
  Slack / X シェア用）が必要な場合は同梱の `tools/render/` を Bash で
  呼ぶ。`bun render.mjs <bundle.html> --name <slug>` で PNG / WebM が
  出力される。詳細は `references/recipes/render-to-png-webm.md` /
  `recipes/social-preview-image.md` / `recipes/github-readme-rendering.md`
  参照

## 参照ファイルの読み込み方針（プログレッシブ開示）

`references/` 配下は open-codesign の prompts / design-skills / builtin-skills、getdesign.md（DESIGN.md 公式仕様）の design-md 70 サイト、kzhrknt/awesome-design-md-jp の japanese-* 25 サイト、rohitg00/awesome-claude-design の prompt-packs / recipes / family 体系の継承、本リポジトリ独自変換の design-md/ 15 サイト（7 単体 + remix 8）と recipes 3 件で構成される vendored 資産（design-md 合計 110 サイト = 70 + 25 + 15）。
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
- `references/prompts/pre-flight.v1.txt` — 11 項目プリフライト（ステップ 4・6
  で silently セルフチェック）
- `references/prompts/output-rules.v1.txt` — アーティファクトタグ・出力
  フォーマット規約
- `references/prompts/safety.v1.txt` — 安全制約（vendored、無改変で保持）
- `references/prompts/japanese-typography.v1.txt` — **CJK タイポグラフィ規約**
  （fallback chain / line-height 1.7 / palt / 禁則 / 混植）。**ブリーフ・参考
  リンク・対象市場が日本語または日本市場と判定された場合のみ Layer 1 に追加で
  読込**。判定は明示フラグなし、Claude の文脈推定（ブリーフ言語、参考サイトの
  ドメイン、ターゲットの記述）で行う

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
| brutalist | `references/design-md/brutalist/` | the-verge / binance / wired |
| indie | `references/design-md/indie/` | granola / composio / resend / webflow |
| remix | `references/design-md/remix/` | linear-x-claude / vercel-x-pitchfork 等 |
| japanese-corporate | `references/design-md/japanese-corporate/` | smarthr / freee / cybozu / sansan |
| japanese-consumer | `references/design-md/japanese-consumer/` | mercari / muji / cookpad / abema |
| japanese-editorial | `references/design-md/japanese-editorial/` | note / qiita / zenn |
| japanese-creative | `references/design-md/japanese-creative/` | studio / droga5 / novasell |

> 日本語ブリーフ・日本市場向け生成と判定された場合は **`japanese-*` family
> を優先候補** にする（4 family 計 25 サイト）。Layer 1 で
> `japanese-typography.v1.txt` も読込済みであることを前提に、CJK ルール
> （line-height 1.7、palt、禁則、混植）を適用する

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
- `references/prompt-packs/*.md` — 7 件の「対話プロンプト部品」。美学決定
  支援（`family-picker.md`）、ブランド抽出（`brand-to-design-md.md`）、
  既存サイト監査（`audit-live-site.md`）、リミックス（`remix-two-brands.md`）、
  3 デザイナー議論（`3-designer-debate.md`、自動完走モード）、3 デザイナー +
  ユーザー参加の合同ディベート（`4-party-debate-with-user.md`、各論点で
  ユーザーに問いを投げて回答を待つ双方向モード。ユーザー本人が動機を整理
  しきれていない時に使う）、デフォルト破り（`break-default-aesthetic.md`）

### 最終判断はファイル冒頭のシグナルで

Layer 2 で候補を絞ったあとは、各 vendored ファイルの **冒頭のシグナル** を
読んで最終的な採否を決める。カテゴリ別の場所:

- `design-skills/*.jsx`: 先頭の `// when_to_use: ...` コメント（open-codesign
  由来の規約）
- `builtin-skills/*.md`: YAML frontmatter の `description:` フィールド
- `design-md/*.md`: ファイル冒頭の **フロントマター `name:` / `description:` フィールド**
  （[DESIGN.md 公式仕様](https://github.com/google-labs-code/design.md) 準拠、本リポジトリの第一級形式）。
  `description:` には aesthetic の要約と末尾に `Mood — ...` 形式の mood word が含まれる。
  本リポジトリの 110 サイトはすべて公式仕様で揃っている。内訳:
  (1) upstream（getdesign.md）から取り込んだ 70 サイトのうち 12 サイトは upstream
  自身が公式仕様で配信しているものを忠実に vendor、残り 58 サイトは upstream の
  legacy prose 配信を本リポジトリで frontmatter 形式に再構成（Issue #31、SHA drift
  状態）。
  (2) japanese-* 25 サイトは kzhrknt/awesome-design-md-jp の legacy prose 配信を
  本リポジトリで frontmatter に再構成済み（Issue #28、SHA drift 状態）。
  (3) remix 8 サイトと自前手動変換 7 サイトは本リポジトリ独自の hand-crafted。
  upstream（getdesign.md / kzhrknt）が将来公式仕様に移行した場合の再追従用に
  fallback として、`# 見出し` 直後の段落をシグナルとして読む経路も skill に残してある
- `prompt-packs/*.md` / `recipes/*.md`: `# 見出し` 直後の 1 行サマリ
- `prompts/*.txt`: 冒頭数行が目的と対象を述べるプレーンテキスト

スキル本体の分類表と矛盾する場合はファイル側のシグナルを優先する（upstream
の変更に追従しやすくするため）。以降は本ドキュメントでは総称として
「`when_to_use` シグナル」と呼ぶ。

## サブコマンド一覧

`/design-director [subcommand] [args]` の形式で呼び出す。**コア 5 種 + 補助
4 種 = 計 9 種**。本セクションは概要表のみで、各コマンドの詳細ワークフロー
は Phase 5（コア）・Phase 6（補助）で本ドキュメントに追記する。

> upstream（awesome-claude-design / open-codesign 等）の取り込みは
> **メンテナの責務** とし、ユーザー向けサブコマンドは公開しない。
> メンテナ用の差分検出スクリプトはリポルートの
> [`scripts/check-diff-upstream.ts`](../../../../scripts/check-diff-upstream.ts)
> にある。

### コア（5 種）

| コマンド | 動作 |
|---|---|
| `/design-director` | 新規デザイン生成（デフォルト動作）。引数なしで対話開始。詳細: [`references/commands/default.md`](references/commands/default.md) |
| `/design-director serve` | `.design-studio/` の Next.js ギャラリーを起動。詳細: [`references/commands/serve.md`](references/commands/serve.md) |
| `/design-director list` | 生成済みプロジェクトの一覧表示。詳細: [`references/commands/list.md`](references/commands/list.md) |
| `/design-director export <project>` | 指定プロジェクトをバンドルとしてエクスポート（handoff 形式のポータブル HTML + JSX）。詳細: [`references/commands/export.md`](references/commands/export.md) |
| `/design-director extract <url>` | 任意の URL から DESIGN.md ドラフトを 2 段抽出（Playwright で evidence 収集 → LLM が canonical 形式に整形）。詳細: [`references/commands/extract.md`](references/commands/extract.md) |

### 補助（4 種）

| コマンド | 動作 |
|---|---|
| `/design-director edit <project>` | 既存プロジェクトの編集・バリエーション追加を継続。詳細: [`references/commands/edit.md`](references/commands/edit.md) |
| `/design-director memory` | `memory.md` の内容確認・編集。詳細: [`references/commands/memory.md`](references/commands/memory.md) |
| `/design-director reset` | `.design-studio/` をクリーンアップ（生成物のバックアップを提案）。詳細: [`references/commands/reset.md`](references/commands/reset.md) |
| `/design-director status` | 現在の状態（dev server 起動状態、最終生成日時等）。詳細: [`references/commands/status.md`](references/commands/status.md) |

> 各コマンドの詳細なワークフロー（引数・対話シーケンス・副作用）は
> Phase 5（コア 4 種）・Phase 6（補助 4 種）で本 SKILL.md に追記する。
> 現段階では概要表のみを提供する。
