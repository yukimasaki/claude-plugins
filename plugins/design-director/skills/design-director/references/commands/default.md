# /design-director

引数なしで呼び出されたときに起動する **新規デザイン生成フロー**。
ユーザーの意図を集めてから、美学を選び、3 案前後のバリエーションを
並べて比較させる。`.design-studio/projects/{name}/` に成果物一式を
書き出すところまでが 1 サイクル。

## 前提

- 引数: なし（自然言語での対話開始）
- `.design-studio/` 未作成時は先に `setup-studio.ts` を走らせる。SKILL.md
  「7 ステップのワークフロー」のステップ (1) を呼び出し、`.design-studio/`
  セットアップ + `bun install` を完走させる
- Q3-2 の「ループ中はサブコマンドを設けない（自由記述で回す）」が本コマンド
  のワークフロー全体に適用される。ユーザーからの「もっとコンパクトに」
  「色を暖かく」等の自然言語フィードバックでステップ 4-7 を回す

## ワークフロー

### 1. 環境準備

1. `.design-studio/` の存在を確認する
2. 未作成なら `.claude/skills/design-director/scripts/setup-studio.ts` を
   `bun` で実行し、作成 + `bun install` 完走を待つ
3. 既存なら skip（ステップ 7 で成果物だけ追加する）

### 2. コンテキスト収集

ユーザーから **最低限 4 項目** を silently に集める。足りなければ 1 問 1 答
で聞く。すでにブリーフが渡されていれば即ステップ 3。

| 項目 | 例 |
|---|---|
| 成果物タイプ | landing / dashboard / pitch-deck / email / slide / figure 等 |
| 対象ユーザー | 想定読み手、業界、熟練度 |
| ブランド制約 | 既存カラー / 既存トーン / 参考サイト |
| 納期・範囲 | 1 画面 or 複数画面、ハイファイ or ワイヤー相当 |

ユーザーが `existing_project`（過去に生成したもの）を指定した場合は
`.design-studio/projects/{name}/manifest.json` + `memory.md` を Read し、
コンテキスト収集を skip して当該 project の続きから始める（編集継続は
`/design-director edit <project>` 推奨、default は明示的に別プロジェクト
扱い）。

### 3. 美学方向性の決定

1. ユーザーが美学を明示している（「warm editorial で」「terminal-like に」）
   → 対応する `references/design-md/{family}/` を確認し、代表ファイルを Read
2. 不明瞭なら `references/prompt-packs/family-picker.md` の 3 問フォーマット
   を踏襲して質問を投げる（本質問は **silently ではなく loud** に出す）
3. 決定後、選ばれた `design-md/{family}/*.md` を Read して以降のトーン・
   レイアウト・タイポ基準にする
4. `manifest.json` に `aesthetic` / `family` フィールドを書き込む準備をする

### 4. バリエーション生成 `[ループ]`

方向性の異なるバリエーションを並べて提示する。

1. **通常 3 案**（Q3 の基本方針）。状況に応じて 2-4 案に調整:
   - 案数を増やす: 美学が複数キャンディ段階、or ユーザーが明示的に要求
   - 案数を減らす: 既にフィードバックが具体的で方向性が絞れているとき
2. 各案は `.design-studio/projects/{name}/variations/{variation}.jsx`
   として保存（React 18 UMD + Babel standalone で動く JSX）
3. `references/design-skills/{type}.jsx` を参照して骨格を写し、`design-md/
   {family}/*.md` でトーンを合わせる
4. 生成前に `references/prompts/pre-flight.v1.txt` の 12 項目を **silently**
   セルフチェック（artifact type / 感情トーン / 密度 / 比較 / 注目数値 /
   パレット / タイポラダー / anti-slop ガード 等）
5. `manifest.json` の `variations[]` に各案のメタ情報を追加
6. ユーザーに 3 案を並列提示し、「どの方向が響く？ 必要なら案の混ぜ方も
   聞いて」と促す

### 5. 選択と深掘り `[ループ]`

1. ユーザーが選んだ案を `manifest.selectedVariation` に記録
2. 「もっと余白を」「色を暖かく」等の自然言語フィードバックを受ける
3. `references/prompts/tweaks-protocol.v1.txt` の規約に従って **変更の最小
   セット** を当てる（全面書き直しは避ける）
4. `references/prompts/editmode-protocol.v1.txt` の規約に従い、既存コンポー
   ネントを壊さないまま差分を当てる
5. 変更を当てたら `variations/{selected}.jsx` を Edit、`styles.css` も
   必要に応じて更新
6. フィードバックが尽きたらステップ 6 へ。新しい方向性を試したくなったら
   ステップ 4 に戻る（案追加 or 再生成）

### 6. 検証 `[ループ]`

1. `references/prompts/pre-flight.v1.txt` の 12 項目を **ユーザー向けに loud
   で報告** する（該当なしは skip）
2. 該当する全項目のうち **6 項目以上 NG** なら強制的にステップ 4 に戻り
   案を組み直す
3. 1-5 項目 NG なら「こう直したい」と合意した上でステップ 5 のループに戻る
4. 全項目 PASS か軽微な NG のみなら次へ
5. `/design-director serve` の案内を添えてブラウザ確認を促す。フィード
   バックがあれば適切なステップに戻る

### 7. 納品 `[ループ]`

1. `.design-studio/projects/{name}/` 配下を整える:
   - `components/*.jsx` — 再利用コンポーネント
   - `variations/*.jsx` — バリエーション
   - `styles.css` — デザイントークン + 共通スタイル
   - `manifest.json` — Q2-6 の 7 フィールド（title / createdAt /
     aesthetic / type / variations / selectedVariation / tokenSource）
   - `HANDOFF.md` — **プロトタイプ生成時に自動生成**（Q9-4）。統合担当に
     渡すためのサマリー
   - `{project}.html` — React CDN + Babel で単体動作するポータブル HTML
2. HANDOFF.md には下記を含める（Q9-4）:
   - プロトタイプの目的（何を解決するか）
   - 選ばれた美学 / 方向性
   - バリエーションの経緯（案 A-C の違い、なぜ selected を選んだか）
   - 見るべきファイル（主要コンポーネント / デザイントークン / エントリ
     ポイント）
3. ユーザーに納品パスと次のアクション候補を案内:
   - 続きを編集: `/design-director edit <project>`
   - ブラウザで確認: `/design-director serve`
   - バンドル書き出し: `/design-director export <project>`

## Example Run

### ケース 1: ダッシュボードの新規生成

```
> User: B2B の SaaS ダッシュボードのデザインがほしい。データが多いやつ。

> Claude: 方向性を詰める前に 4 つだけ確認させて。
  1. 対象ユーザーは？（エンジニア / マーケ / 経営層 等）
  2. 既存ブランド・参考サイトはある？
  3. ダークモード前提 or ライト前提？
  4. 1 画面のモックで十分 or 複数画面？

> User:
  1. 運用エンジニア、数値監視メイン
  2. Datadog と Grafana に近いトーン
  3. ダーク前提
  4. まずは 1 画面

> Claude: data-dense ファミリー（datadog / posthog / mongodb / clickhouse）
  が合いそう。この中だと datadog が最も運用監視寄りだからデフォルトに
  するけど、posthog のほうが密度高めで攻めた方向。どっちを軸に？

> User: datadog で。

> Claude: 了解。3 案で出す:
  - Variation A: サイドナビ固定、12 カラムグリッド、シグナル系統色
  - Variation B: 上部タブ、密度 20% 増、ログストリーム帯付き
  - Variation C: 分割ビュー（左メトリクス / 右ログ）、コンパクト版
  生成中...（ステップ 4 で 3 ファイル書き出し）

> Claude: 3 案を `.design-studio/projects/ops-dashboard-v1/variations/` に
  置いた。どれが一番近い？ `/design-director serve` でギャラリーから
  比較できるよ。
```

### ケース 2: プリフライトチェックの報告

```
> Claude:（ステップ 6）プリフライトチェックの結果:
  ✅ #1 artifact type: dashboard（density floor: 6 セクション満たす）
  ✅ #2 感情トーン: data-dense / professional（datadog 基準に整合）
  ✅ #3 密度: 12 カラム × 8 行、白地率 32%
  ⚠️  #4 比較: before/after の並列表示を 1 か所追加推奨
  ✅ #5 注目数値: MAU / p95 を big-number で配置
  ✅ #6 パレット: シグナル 4 色 + グレー 5 階調で WCAG AA 通過
  ✅ #7 タイポラダー: display/h1/body/caption の 4 階
  ✅ #8 anti-slop: ロレム無し、ロゴは monogram 構築、hotlink 無し
  ... (他は該当なし or PASS)

  #4 だけ軽微。ユーザー操作フィードバックを追加するなら左側カラムに
  24h 前比較チップを足すのが自然だけど、今回は skip でいい？
```

## エラー時の分岐

| 事象 | 対処 |
|------|------|
| setup-studio が network で落ちる | `bun install` のリトライをユーザーに促す。3 回目失敗ならメッセージを添えて停止 |
| setup-studio が permission で落ちる | cwd の書き込み権限を確認する旨をユーザーに伝える（`ls -la` で権限チェック） |
| プリフライト 12 項目中 6 項目以上 NG | ステップ 4 に強制的に戻り、案を組み直す旨をユーザーに伝える |
| `design-md/{family}/*.md` の Read 失敗 | `/design-director update` の実行を提案（vendored ファイル欠損の可能性） |
| プロジェクト名の衝突（既存 slug） | ユーザーに新しい slug を提案（`-v2` サフィックス等）、または `/design-director edit` に誘導 |

## 対応する decisions.md

- Q3-1: 7 ステップのワークフロー
- Q3-2: ループ中はサブコマンドを設けない
- Q3-3: プリフライトチェック必須 + ブラウザ確認促し
- Q6-1: 対話重視寄りの状況適応
- Q6-2: 既存コードベースの自律探索
- Q6-3: `.design-studio/memory.md` にコンテキスト保存
- Q6-4: `safety.v1.txt` + `safety.v1.txt` の遵守
- Q9-4: HANDOFF.md の自動生成
