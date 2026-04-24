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

---

詳細な参照ファイルの読み込み方針（プログレッシブ開示）は後続セクション
「参照ファイルの読み込み方針」を、サブコマンド各種の挙動は「サブコマンド
一覧」を参照する。
