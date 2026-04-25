# `{project}.html` 生成仕様（handoff バンドル用 single-page HTML）

design-director が納品時に書き出す **単体動作 HTML** の構造・実装ルール・
自己チェック手順を定める。decisions.md Q9-2「ビルド不要、ポータブル、
failure point が少ない」を満たすため、React CDN + Babel standalone +
inline JSX の構成で 1 ファイルに収める。

## 適用対象

- `/design-director`（新規生成）の納品ステップ
- `/design-director edit <project>` の納品再生成
- `/design-director export <project>` 中の HTML 不在時は **再生成禁止**。
  ユーザーに `edit` 実行を促す（export.md ステップ 1-3 参照）

本仕様を **読まずに HTML を書いてはならない**。skill 実行 Claude は
納品の HTML 生成サブステップで必ず本ファイルを Read してから生成する。

## 1. DOM 構造（必須要素）

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>{プロジェクトタイトル} — design-director handoff</title>
  <style>/* outer chrome の最小スタイル */</style>
</head>
<body>
  <div class="dd-shell">
    <header class="dd-header">
      <div class="dd-brand">
        <span class="dd-brand-mark">{頭文字}</span>
        <span class="dd-title">{プロジェクトタイトル}</span>
      </div>
      <span class="dd-meta">{slug · type · aesthetic}</span>
      <span class="dd-spacer"></span>
      <a class="dd-handoff-link" href="./HANDOFF.md">HANDOFF.md</a>
    </header>
    <nav class="dd-tabs">
      <!-- variation 数だけ button.dd-tab を生成。最初のものに .active を付与 -->
      <button class="dd-tab active" data-idx="0">{variation 1 ラベル}</button>
      <!-- ... -->
    </nav>
    <main class="dd-stage">
      <div class="dd-iframe-wrap">
        <iframe class="dd-iframe" id="dd-preview" title="preview"></iframe>
      </div>
    </main>
  </div>

  <!-- storage scripts（実行されない、テキストとして保持） -->
  <script type="text/x-design-director-css" id="dd-styles">
    /* styles.css の内容をそのまま inline */
  </script>
  <script type="text/x-design-director-jsx" id="dd-{variation-id-1}">
    /* variations/{variation-id-1}.jsx の内容をそのまま inline */
  </script>
  <!-- バリエーション分繰り返し -->

  <!-- bootstrap script（実行される、最後に 1 つだけ） -->
  <script>
    /* セクション 4 の正解実装をコピー */
  </script>
</body>
</html>
```

### 必須 CSS class（最小、自由に拡張不可ではない）

| class | 役割 |
|---|---|
| `.dd-shell` | 100vh 全体コンテナ、flex column |
| `.dd-header` | 上部メタ表示 |
| `.dd-tabs` | バリエーション切替タブ群（横スクロール可） |
| `.dd-tab` / `.dd-tab.active` | 個別タブ |
| `.dd-stage` | iframe 表示エリア |
| `.dd-iframe-wrap` / `.dd-iframe` | プレビュー iframe |

各 class の具体スタイルはプロジェクトの美学に合わせて自由（暖色 / 暗色等）。

## 2. script 内の escape ルール（最重要）

ブラウザの HTML パーサは `<script>` の内側で `</script` を見つけると即座に
script を終了する。**コメント・文字列・正規表現 内であっても問答無用で
終了する**。E2E で観測されたバグの根本原因はここ。

### 必須ルール

1. **bootstrap script の JS 文字列内に `<` を生で書かない**。常に `\x3c` を使う:
   - ❌ NG: `'<script src="...">'`
   - ✅ OK: `'\x3cscript src="...">'`
2. **正規表現リテラルでも `<` を `\x3c` に**:
   - ❌ NG: `/<\/script/gi`
   - ✅ OK: `/\x3c\/script/gi`
3. **コメントに `</script` を含めない**:
   - ❌ NG: `// embedded </script handling` ← これだけで script 終了
   - ✅ OK: `// embedded close-tag handling`
4. **コメントに `<script` も含めない**（一部ブラウザの quirk 回避）

### storage script は escape 不要

`text/x-design-director-jsx` や `text/x-design-director-css` で **type が
非実行型** の storage script は、中身に `<` を生で書いても OK。なぜなら:

- ブラウザは storage script を「テキスト保管」として扱う
- 中身に `</style>` `</script>` 等が含まれない限り早期終端しない
- variation の JSX に普通の JSX タグ（`<div>` 等）は含まれてよい

ただし、variation JSX 内に **`</script>` が含まれる場合のみ** `<\/script>`
等にエスケープして書くこと（`</style>` も同様）。これは bootstrap が
srcdoc を組み立てる際の規約と一致させるため。

## 3. bootstrap script の正解実装

下のコードをそのままコピーし、`SOURCES` 配列だけ manifest.json の
`variations[]` から自動生成して埋める。**コメント含めてこの形を維持
すること**（修正したくなる場合は本仕様書ごと PR で更新）。

```js
<script>
(function () {
  // 文字列内の "<" は \x3c で書く。outer の HTML パース時に
  // タグ開始リテラルが含まれず曖昧性ゼロ
  var STYLES = document.getElementById('dd-styles').textContent;
  var SOURCES = [/* 例: "variation-a", "variation-b", "variation-c" */];
  var iframe = document.getElementById('dd-preview');
  var tabs = document.querySelectorAll('.dd-tab');

  function buildSrcdoc(jsx) {
    var safeStyles = STYLES.replace(/\x3c\/style/gi, '\x3c\\/style');
    var safeJsx = jsx.replace(/\x3c\/script/gi, '\x3c\\/script');
    return [
      '\x3c!DOCTYPE html>',
      '\x3chtml lang="ja">\x3chead>\x3cmeta charset="utf-8">\x3cmeta name="viewport" content="width=device-width,initial-scale=1">',
      '\x3cstyle>' + safeStyles + '\x3c/style>',
      '\x3cscript crossorigin src="https://unpkg.com/react@18.3.1/umd/react.development.js">\x3c/script>',
      '\x3cscript crossorigin src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js">\x3c/script>',
      '\x3cscript src="https://unpkg.com/@babel/standalone@7/babel.min.js">\x3c/script>',
      '\x3c/head>\x3cbody>\x3cdiv id="root">\x3c/div>',
      '\x3cscript type="text/babel" data-presets="react">',
      safeJsx,
      '\x3c/script>',
      '\x3c/body>\x3c/html>'
    ].join('\n');
  }

  function show(idx) {
    var id = SOURCES[idx];
    var jsx = document.getElementById('dd-' + id).textContent;
    iframe.srcdoc = buildSrcdoc(jsx);
    tabs.forEach(function (t, i) {
      t.classList.toggle('active', i === idx);
    });
  }

  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { show(i); });
  });

  show(0);
})();
</script>
```

### 注意点

- React 18 UMD を使う（`react.development.js` / `react-dom.development.js`）
- Babel standalone v7（`data-presets="react"`）。それ以前のバージョンは使わない
- 各 variation の JSX 末尾に `ReactDOM.createRoot(document.getElementById('root')).render(<App />);` を必ず含める

## 4. 生成後の自己チェック（必須）

納品ステップで HTML を Write した **直後に** 以下のチェックを skill 自身が
Bash で実行する。失敗したら HTML 生成からやり直す。

### 4-1. `</script` 出現数

```bash
grep -c "</script" .design-studio/projects/{slug}/{slug}.html
```

期待値: **`storage script 数 + 1`**（= variation 数 + dd-styles + bootstrap）。

例: 3 variation なら 5（dd-styles 1 + variation 3 + bootstrap 1）。

数が合わなければ outer script 内に `</script` リテラルが混入している
可能性 → 該当箇所を grep で特定し `\x3c/script` に修正。

### 4-2. `</style` の outer 出現

```bash
grep -n "</style" .design-studio/projects/{slug}/{slug}.html
```

期待値: outer の `<style>` の close（`</style>`）と dd-styles storage の
close（`</script>` で閉じる、`</style>` ではない）。outer の `</style>` は
1 件のみ。それ以上出現したら混入している。

### 4-3. variation storage script の存在

`manifest.json` の `variations[]` 全エントリについて、対応する
`<script type="text/x-design-director-jsx" id="dd-{variation-id}">` が
HTML 内に存在することを grep で確認:

```bash
for v in $(jq -r '.variations[] | if type=="object" then .name else . end' .design-studio/projects/{slug}/manifest.json); do
  grep -q "id=\"dd-${v}\"" .design-studio/projects/{slug}/{slug}.html || echo "MISSING: ${v}"
done
```

何も出力されなければ全 variation が含まれている。

### 4-4. JS 構文チェック（任意・推奨）

bootstrap script だけ抜き出して `node --check` で文法検証:

```bash
# bootstrap script の行範囲は HTML 末尾の <script> ... </script>
# 行範囲 N1〜N2 を sed で抽出して node --check する
```

行範囲の決定が面倒なら skip 可。ただし 4-1〜4-3 は **必須**。

## 5. アンチパターン早見表

| やってはいけない | なぜダメか |
|---|---|
| 文字列に生の `<` を書く（`'<script>'`） | outer HTML パーサが `</script` を見つけて script を早期終端 |
| 正規表現に生の `<` を書く（`/<\/script/`） | 同上 |
| コメントに `</script` を書く | コメントでも script は終端する |
| `'<' + '/script>'` のような分割技で escape | 一部 brower で曖昧性が残ったケースを で確認。素直に `\x3c` を使う |
| storage script の中身を勝手に escape | 二重エスケープで JSX が壊れる |
| Babel v6 を使う | `data-presets="react"` は v7 専用 |
| React 19 系 / 17 系を混ぜる | `createRoot` API は 18 から、17 以前と非互換 |

## 対応する decisions.md

- Q2-3: 生成物のコンポーネントは `.jsx` 形式（Claude Design handoff 互換）
- Q9-2: バンドル構成は React CDN + Babel で単体動作、ビルド不要
- Q9-4: HANDOFF.md は納品ステップで自動生成。本ファイルは `{project}.html`
  の同等仕様
