# /design-director extract &lt;url&gt;

任意の URL（または保存済み HTML）から **DESIGN.md ドラフト** を二段階で
抽出する。Stage 1（script）でブラウザ evidence を集め、Stage 2（skill の
LLM）で canonical な DESIGN.md（[google-labs-code/design.md](https://github.com/google-labs-code/design.md)
公式仕様）を生成する。

## 前提

- 引数: `<url>` 必須（ただし `--from-html <path>` 指定時は省略可）
- skill ディレクトリで `bun install` 済みであること（`playwright` を依存に
  含む）。未導入なら本コマンド実行時にスクリプトが案内する
- `bun x playwright install --with-deps chromium` 済みであること。WSL では
  apt 依存が必要なため `sudo` が要る — 初回のみユーザーに手動実行を促す
- `.design-studio/` の存在確認はせず、`<cwd>/.design-studio/extracted/<slug>/`
  に書き出す。同名ディレクトリがあれば上書き

### 倫理 / 法的配慮

抽出対象サイトの **ToS / robots.txt を尊重** する。bot 検知（Cloudflare /
Akamai 等）に対するバイパスは行わない方針。403 / challenge を検出した場合は
ユーザーに `--from-html` フォールバックを案内する（ユーザーがブラウザで
正規にアクセスしたページを保存したものを食わせる経路）。

## ワークフロー

### 1. 引数のパースと初期検証

1. `<url>` または `--from-html <path>` を受け取る。両方無ければ help を出して
   exit 2
2. `--slug` / `--output` / `--viewport` のオプションをパース
3. URL の妥当性を `new URL()` で検証。失敗したらユーザーにフォーマットを
   案内して exit

### 2. Stage 1 — ブラウザ evidence 収集（script 実行）

`bun scripts/extract-url.ts <url> [options]` を Bash で呼ぶ。スクリプトが
内部で以下を行う:

1. **Playwright Chromium 起動**（headless）。未インストールなら friendly
   エラーで exit
2. **ページ取得**: `page.goto(url, { waitUntil: "networkidle" })`。タイム
   アウト時は `waitUntil: "load"` にフォールバックして warnings に記録
3. **403 / Cloudflare 検出**: `<title>` と `body.innerText` を見て、challenge
   ページなら warnings に記録（処理は続行する）
4. **クッキー / モーダル非表示**: `addStyleTag()` で `[class*="cookie" i]` /
   `[role="dialog"]` 等を `display: none !important`
5. **lazyload 発火**: 600px ずつスクロールして bottom まで進めてから top に戻す
6. **evidence 収集**: `page.evaluate()` 内で
   - `:root` の CSS custom properties（`--*`）を全部読む
   - 14 種のセレクタ（body/h1-h6/p/li/a/button/[role=button]/[class*=btn]/
     [class*=card]/[class*=hero]/nav/header/footer/...）を走査
   - 各要素から font-* / color / background / border / padding / gap を
     `getPropertyValue` で取得（CSSStyleDeclaration の enumerable 問題を回避）
   - 親要素を遡って `ancestorBackground`（透明でない直近 bg）を解決
   - `[...document.fonts].map(f => f.family)` で実際にロードされたフォント
7. **スクリーンショット**: 360 / 768 / 1280 の 3 幅で `screenshot-{w}.png`
8. **HTML 保存**: `page.content()` を `page.html` として保存
9. **集計**: bucketColorsByRole / clusterTypography / aggregateRadius /
   clusterPxValues で role-context バケットに整理
10. **exemplar_hints の計算**: hostname + CJK 判定で
    `references/design-md/` 内の frontmatter 持ちファイルから 2〜3 件選ぶ
11. **DESIGN.observed.yaml** をフォーマットして書き出し

スクリプト終了時の出力:

```
✓ 抽出完了: .design-studio/extracted/note-com
  observed.yaml: .design-studio/extracted/note-com/DESIGN.observed.yaml

warnings:
  - networkidle 待機が失敗。waitUntil=load にフォールバックして続行。
```

### 3. Stage 2 — DESIGN.md ドラフト生成（LLM）

スクリプトが生成した artifact を Read して、canonical な DESIGN.md を
LLM 自身が書く。

1. `<output>/<slug>/DESIGN.observed.yaml` を Read
2. `screenshot-1280.png`（と必要に応じて 360/768）を Read。スクリーンショット
   は LLM の visual context として使う
3. `observed.yaml` の `exemplar_hints` に列挙されたファイル（最大 3）を
   `references/design-md/` から Read。frontmatter のスキーマを exemplar
   として参照する
4. **CLAUDE.md の DESIGN.md フォーマット規約** に従って frontmatter を組み
   立てる:
   - `version: alpha`
   - `name`: hostname から推定（`note.com` → "note"）。確信が無ければ
     ユーザーに確認
   - `description`: 1 段落、末尾に `Mood — <3〜5 語>` を含める。スクリーン
     ショットの印象を反映
   - `colors`: observed の `bg_of_body` / `text_on_canvas` 上位 / `button_backgrounds`
     上位 / `link_colors` / `border_colors` を `primary` / `ink` / `body` /
     `surface` / `hairline` / `accent` 等の **canonical role に手動マッピ
     ング**。CSS custom properties に `--color-primary` 等があればそれを
     優先する
   - `typography`: observed の typography cluster を上位順に `display-xl`
     / `display-lg` / `heading-lg` / `body` / `caption` 等に割り当てる。
     viewport 内 + 大面積のクラスタを display 系に当てる
   - `rounded`: observed の radius 値をスケール（none/xs/sm/md/lg/xl/pill）
     に並び替える
   - `spacing`: observed の paddings_clustered を数値スケール（"0":0px,
     "1":4px, ...）に変換
5. Markdown 本文に `## Colors` / `## Typography` / `## Components` セクション
   を書く。スクリーンショットから読み取れる適用ニュアンス（hierarchy /
   contrast / motion 等）を 3〜5 段落で
6. `<output>/<slug>/DESIGN.md` に Write

### 4. ユーザー報告と promote 提案

1. 出力されたドラフトのパスを報告し、内容のサマリ（採用された美学 family /
   主要トークン 5〜7 件）を 5 行程度で提示
2. **AskUserQuestion** で promote の意思を確認:
   - **promote する**: `references/design-md/extracted/<slug>.md` に move
     し、メンテナレビュー（PR）を経て正式取り込みを促す
   - **このまま手元に残す**: `.design-studio/extracted/<slug>/DESIGN.md` に
     置いたまま、ユーザーが自由に編集
   - **破棄する**: `<output>/<slug>/` を削除確認の上で消す
3. 自動 promote はしない（公式仕様準拠の品質保証はメンテナレビューを通す
   方針）

## Example Run

### ケース 1: 通常の URL 抽出

```
> User: /design-director extract https://linear.app

> Claude:（Stage 1）bun scripts/extract-url.ts https://linear.app を実行
  ✓ 抽出完了: .design-studio/extracted/linear-app
    DESIGN.observed.yaml / screenshot-{360,768,1280}.png / page.html

  (Stage 2) observed.yaml と screenshot-1280.png、exemplar_hints の
  editorial/linear.md を読みました。

  抽出したトークンの主軸:
  - bg: #08090a（near-black）
  - ink: #f7f8f8 / muted: rgba(255,255,255,0.6)
  - accent: #5e6ad2（brand indigo-violet）
  - typography: Inter Variable / display 64px / body 14px-510 weight
  - rounded: 4 / 8 / 12 / pill
  - palt: 検出なし

  .design-studio/extracted/linear-app/DESIGN.md にドラフトを書きました。
  references/design-md/extracted/linear-app.md に promote しますか？
```

### ケース 2: 403（Cloudflare）→ HTML fallback

```
> User: /design-director extract https://note.com

> Claude:（Stage 1 実行）
  warnings:
    - Cloudflare challenge / 403 を検出。ブラウザで手動保存した HTML を
      `--from-html <path>` で渡すと回避できます。

  抽出は失敗ではないが challenge ページの evidence を取ってしまった可能性が
  高い。ブラウザで note.com を開いて「ページを保存」した HTML ファイルが
  あれば、--from-html で再実行してください:

    /design-director extract https://note.com --from-html ~/Downloads/note.html

> User: 保存しました。~/dl/note-home.html

> Claude:（Stage 1 を --from-html で再実行）
  ✓ 抽出完了: .design-studio/extracted/note-com
  ...
```

### ケース 3: 日本語サイトで CJK フォント未導入

```
> Claude:（Stage 1）
  warnings:
    - 日本語サイトと推測されますが Noto CJK 等の resolved フォントが検出
      できませんでした。`sudo apt install fonts-noto-cjk` を検討してください。

  日本語サイトは declared font-family chain（"Hiragino Kaku Gothic ProN"
  等）を取得できているので DESIGN.md の intent は捉えられます。ただし
  line-height / palt の実機 rendering 検証は CJK フォント導入後に再実行
  推奨です。

  Stage 2 を続行しますか？（rendering 値はやや不正確になる可能性）
```

## エラー時の分岐

| 事象 | 対処 |
|------|------|
| Playwright 未インストール | `bun add playwright && sudo bun x playwright install --with-deps chromium` を案内する非ゼロ exit |
| Chromium のシステム依存ライブラリ不足（WSL の `libnss3.so` 等） | `sudo bun x playwright install-deps chromium` の実行を案内 |
| 403 / Cloudflare challenge | warnings に記録し、`--from-html <path>` フォールバックの使い方を loud で案内 |
| networkidle timeout（30s） | `waitUntil: "load"` で再試行し warnings に記録、部分結果を出す |
| CJK フォント未導入（fonts_resolved に Noto CJK 系なし） | warnings に記録するのみ。DESIGN.md は intent 駆動なので継続可 |
| `<url>` のフォーマット不正 | help 表示して exit 2 |
| `--from-html <path>` のファイル不在 | パス確認のメッセージを出して exit 1 |
| Stage 2 の exemplar_hints が空（design-md/ 全件 prose 形式の場合） | warnings に記録し、frontmatter スキーマは CLAUDE.md 規約から直接組み立てる |

## 対応する decisions.md

- 現時点で個別 decisions なし（Issue #17 の対応として追加）
- DESIGN.md 出力フォーマットは [CLAUDE.md「DESIGN.md フォーマット規約」](../../../../../CLAUDE.md#designmd-フォーマット規約)
  に準拠
- 関連 Issue: #17（本コマンド本体）/ #28（japanese-* SHA drift）/ #31
  （英語 design-md の公式仕様変換）
