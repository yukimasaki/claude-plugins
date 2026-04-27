[English](./README.md) | **日本語**

# このヒーロー画像はどう作られたか

`yukimasaki/claude-plugins` のヒーロー画像（[`hero.png`](./hero.png) / [`hero.webm`](./hero.webm) / [`index.html`](./index.html)）は、**100% Claude Code + `design-director` スキルとの対話で生成**されました。

このページは、そのセッションのプロンプトをほぼそのまま公開する **「制作ログ」** です。実際のやり取りを真似すれば、同じプロセスで自分のヒーロー画像が作れます。

> Tools: Claude Code (Opus 4.7) · `design-director@kit` v0.1.1
> 制作: 2026-04-27（連続セッション 1 回）

---

## 7 ステップ × 13 ターン

`design-director` の標準ワークフローは 7 ステップ（環境準備 → コンテキスト収集 → 美学方向性決定 → バリエーション生成 → 選択深掘り → 検証 → 納品）。今回は **生成と深掘りを 13 ターンに分割**。各ターンの実プロンプトを時系列で並べます。

---

### Turn 1: ヒーロー画像作りたい（ブリーフ）

> README.md ヒーロー用の画像って作れる？

→ design-director は「JSX/HTML として作れる、PNG にするには別途レンダリング必要」と回答。3 つの選択肢（SVG 直生成 / JSX → スクショ / headless で PNG 自動化）を提示。

### Turn 2: 用途 / トーン / テキストを確定

オンボーディングの 3 問に対する回答：

> 1. SPI も兼ねようかな！GitHub を共有した際のサムネイルってことだよね？
> 2. トーンはそれらから 6 パターン作ろう
> 3. おすすめは

→ design-director が「Title + tagline + sub-copy + install + 3 案並列モチーフ」のテキスト構成を提案、承認。

### Turn 3: 6 美学を 1 案ずつ並列生成

`editorial` / `terminal` / `cinematic` / `brutalist` / `warm` / `glass` の 6 案を 1 つの index で比較できる状態に。

### Turn 4: 4 案に絞る

> Cinematic、Brutalist、Warm、Glass が気に入った

→ Editorial / Terminal をドロップ。

### Turn 5: 個別フィードバック → 4 案ブラッシュアップ

> BC で行こうかな。
>
> - Cinematic: 色合いや文字の大きさは good、抽象的な図形は Glass のように具体度を上げてもいいかも（**ただの角丸四角だと意味が分からん**）。右端の ABC はそれぞれ Cinematic, Glass, Editorial のカードに差し替えたら、design-director を象徴する SPI になりそうだね。
> - Brutalist: すごく目立つね！**さらに 4 案ほど作ってみて**
> - Glass: きれいだけど **タイトルが小さい**ね。**ありきたり**だから埋もれそう

→ Cinematic 右パネルをミニプレビュー化、Brutalist 4 派生（monochrome / red / typography-only / collage）、Glass を **ダーク転換 + 168px タイトル**へ。

### Turn 6: brutalist 採用 → 右パネル組み替え

> Brutalist 1 — yellow の AB の部分に
>
> - Glass (updated)
> - Terminal (dropped)
>
> を当てはめて。

→ A → Glass mini（紫グラデ + 半透明 frosted card）、B → Terminal mini（黒背景 + `$claude_` monospace + 緑カーソル）。

### Turn 7: C スロットの候補生成

> いいね！C にはどのカードを当てはめよう
> 別の美学で単体カードを 4 案つくって

→ Warm / Editorial / Playful / Data-dense の 4 候補を `c-options.html` に並列展示。

### Turn 8: C スロット決定

> 3 を当てはめようかな。

→ Playful（ピンクグラデ + チャンキー "Aa" + 3 dots）を C スロットに。

### Turn 9: 3 カードの統一 + ABC で 1 フレーズ

> いいね！brutalist を採用する方向で詰めていきましょう。
> 次は、ABC 各カードのデザインを統一したい。
> Aa と表示するのではなく、B カードのようにテキストを表示させたい
> ABC で一つのフレーズになるようにするのもありかな？

design-director がフレーズ 4 案を提示：

| # | A | B | C | 物語 |
|:-:|---|---|---|---|
| 1 | `explore.` | `$ generate` | `ship!` | design-director のワークフロー |
| 2 | `design.` | `driven.` | `prototype.` | タグライン分割 |
| 3 | `aesthetics` | `variations` | `jsx` | 入出力 |
| 4 | `pick.` | `$ run` | `ship it!` | 動詞メイン |

回答：

> A. 1 explore. $generate ship! で行きましょう。
> B. B-1（A の frosted 枠を取って統一）
> C. OK（テキストサイズ ~48px 揃え）

→ 3 カード共通でフレームなし、`explore. → $ generate → ship!` がワークフロー narrative として立つ。

### Turn 10: 「腐る情報」の除去

> 「PLUGIN MARKETPLACE」のタグからバージョン表記を削除して（更新が面倒になってしまうので）

→ `Plugin Marketplace · v0.1.1` → `Plugin Marketplace`

design-director が「`2026` も同じ理屈で腐る」と提案。

> B（削除）

→ `MIT — Public OSS — 2026` → `MIT — Public OSS`

> 横線も消えたね
> PUBLIC OSS の右側の横線だよ

em-dash（`—`）が一緒に消えていたので復活：

```css
.meta span:last-child::after { content: ' —'; }
```

### Turn 11: バージョニング体制へ

> brutalist.html 以外は削除して index.html に brutalist のみを表示するようにして。
> 今後の編集指示は brutalist-v1, brutalist-v2 のような感じで index.html に追加していってほしい。

→ 6 案中 5 案を削除、`index.html` を versions 配列ベースに刷新。新しい指示ごとに `brutalist-vN.html` 追加 + 配列先頭にエントリ追加、というルールに。

### Turn 12: v2 にアニメーション追加

> では v2 として以下を作って。
> NO.02 のように小さなアニメーション要素を「explore.」や「ship!」のテキストにも加えたい。
>
> - NO.01 はおまかせ。
> - NO.03 は **楽しそうに飛び出してきそうなアニメーション**で

design-director の対応：

- **A (Glass)**: `shimmer` ライトスイープ（ガラスを光が通過する 4.5 秒ループ）
- **B (Terminal)**: 既存の caret 点滅維持
- **C (Playful)**: `bang-pop` — `!` が cubic-bezier overshoot で **bounce + rotate + scale**、加えて 3 dots が **0.18 秒ずつ stagger** した sequenced bounce

### Turn 13: v2 正式採用 → 公開

> いいね！v2 を正式採用します。

→ `brutalist.html` を `brutalist-v1.html` にリネーム、`brutalist-v2.html` を採用版に確定。

その後、本ファイル群（PNG / WebM / HTML / この README）が `samples/hero/` に書き出され、メイン README に `<video>` で埋め込まれた。

---

## 学び

| 観察 | 教訓 |
|---|---|
| オンボーディングの 3 問で 90% の方向性が決まった | **用途・トーン・テキストの 3 軸** を最初に確定するのが効く |
| 6 美学 → 4 → 1 と絞るプロセスは決断コストが低い | **広く出して狭める** が個別議論より速い |
| 「ただの角丸四角だと意味分からん」が転換点 | **抽象モチーフは "中身が見えない" と機能しない**。具体的なミニプレビューに置き換えたことで「marketplace の中身を覗かせる窓」という意味が生まれた |
| ABC で `explore. → $ generate → ship!` | **3 つを 1 物語に整列**させると、見出しを読むだけでプロダクト価値が伝わる |
| caret 1 つ → 全カードへ展開 | **動的ツールが作った動的画像** という自己参照が一目で伝わる |

---

## 使用ツール

- [Claude Code](https://claude.com/claude-code) v2.1.119
- [`design-director`](../../plugins/design-director) plugin v0.1.1
- モデル: Claude Opus 4.7（1M コンテキスト）

## レンダリング手順（PNG / WebM 再生成）

成果物の HTML を変更したあと、PNG / WebM を再生成するには：

```bash
cd tools/render
bun install   # 初回のみ
bun render.mjs ../../samples/hero/index.html --name hero
```

→ `samples/hero/hero.png`（1280×640 静止、アニメ停止）と `samples/hero/hero.webm`（1280×640 ~6 秒アニメ）が出力される。レンダリングツール本体は [`tools/render/`](../../tools/render)（MIT、リポジトリ同梱）に Playwright で組まれている。オプション一覧は [README](../../tools/render/README.md) 参照。

---

## あなたも作ってみる

```
/plugin marketplace add yukimasaki/claude-plugins
/plugin install design-director@kit
/design-director
```

最初のプロンプト例：

> 自分のリポジトリのヒーロー画像を作りたい。1280×640 で GitHub Social Preview Image 兼用。

オンボーディングの 3 問（用途 / トーン / テキスト要素）に答え、生成された美学から 1 つ絞り、フィードバックを返すだけ。所要時間 **30〜60 分**で同等のものが作れます。
