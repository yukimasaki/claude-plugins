# buzzounce

OSS / AI / 個人開発まわりの **X (Twitter) 告知ツイート** を、ユーザーが
選択した **persona × mode × post-type** の組み合わせに沿って対話的に
生成するスキル。投稿に画像 / 動画を添付する前提で、各添付素材の内容を
把握し、文面と素材が補完関係になるように調整する。

`buzzounce` = `buzz` + `(an)nounce` の portmanteau。「**1 オンスのバズを
craft する**」をコンセプトに、煽り・誇張・AI 調敬語を排した日本語ツイート
を生成する。

## いつ起動するか

- 個人 OSS / プラグイン / AI ツール等の **新規公開・新バージョン告知** を
  X に投稿したいとき
- 自作で自作の素材を作った系の **ドッグフード投稿** を組み立てたいとき
- 失敗談 / 学び / tips / 「作ってみた」を **キャッチーかつ嫌味なく** 共有
  したいとき
- `/buzzounce [subcommand]` で呼び出す（当面 default の `/buzzounce` のみ）

**併存する類似スキルとの棲み分け**: `design-director` は **デザイン
プロトタイプ** の対話生成、`buzzounce` は **告知文** の対話生成。
buzzounce は素材生成は行わず、ユーザーが用意済み（または design-director
等で生成済み）の画像 / 動画を前提に文面のみ作る。

## 運用ルール

本スキル実行中は以下を守る。

### メモリ・永続化

- 0.1.0 では **メモリ・永続化を行わない**。毎回起動時にブリーフから収集
  する設計。
- `.design-studio/` 等、他スキルの作業領域には触らない。
- ユーザーが「覚えておいて」と指示したら、Claude Code 本体の auto memory
  に保存する（buzzounce 専用の永続領域は持たない）。

### 対話モード

- ステップ 2-4 のループ中はサブコマンドを設けず、自然言語フィードバック
  で回す。
- ユーザーの指示が曖昧でも、各軸（mode / persona / post-type / 添付素材）
  の `_index.md` を見せて選んでもらう形で進める。

### 文体・トーンの絶対ルール

- **AI 調敬語禁止**（「本日は〜のご紹介です」「お役立てください」等）。
  自動生成感が漏れる。
- **煽りワード禁止**（"最強"・"神"・"革命的"・"知らないと損" 等）。OSS /
  dev コミュニティ規範に反する。
- **嫌な印象を与える表現全般を避ける**（マウント・ひけらかし・過剰自慢）。

詳しくは `references/anti-slop.md` 参照。

## ワークフロー（5 step）

スキル起動から納品までの標準フロー。**ステップ 3-4 はループ可能** で、
ユーザーからの自然言語フィードバック（「もっと短く」「『頑張りました』
を抜いて」等）で何度でも繰り返す。

### (1) ブリーフ収集

何を告知するか、どの軸で書くかを集める。

1. **告知の中身**: URL / 事実 / 数値 / 何が新しいか をユーザーから受け取る
2. **添付素材の把握**（必須）:
   - 「画像 / 動画を添付する予定はありますか？」と必ず確認
   - あり の場合は **何枚（何本）** / **各 N 枚目の順番と内容** を聞く
     （例: 1 枚目 = hero 画像、2 枚目 = ギャラリー UI、3 枚目 = 制作
     プロセス、動画 1 本 = 30 秒デモ）
   - 詳しい運用は `references/attachments.md` に従う
3. **4 軸を確定**:
   - **mode**: `oss-dev` / `general` のいずれか →
     `references/modes/_index.md` を提示して選んでもらう
   - **persona**: `understated` / `formal` / `casual` のいずれか →
     `references/personas/_index.md` を提示
   - **post-type**: `release` / `dogfood` / `tip` / `show-and-tell` /
     `lesson` のいずれか → `references/post-types/_index.md` を提示
   - **文字数上限**: `140` / `280`（default 280）

### (2) 候補生成

選択した軸で 3 案を並列生成する。

- 通常 **3 案**。角度違い（短/中/長 or 角度 A/B/C のいずれか）で出力
- 各案の文末・冒頭フックを変えて差をつける
- 生成前に `references/anti-slop.md` を silently セルフチェック

### (3) 選択深掘り `[ループ]`

ユーザーが選んだ案を磨く。

- 「もっと短く」「冒頭を逆説に」「自虐は抜く」等の自然言語フィードバック
  を受けて、最小差分の修正を当てる
- ペルソナの声から逸脱しないよう `personas/{選択}.md` を都度参照
- 必要なら 3 案再生成も提示

### (4) self-check `[ループ]`

`references/self-check.md` の 7 項目を silently 実行し、結果をユーザーに
報告する。

- ターゲット明確 / 具体的事実 / リンク踏む動機 / 過剰宣伝でない / persona
  整合 / anti-slop に該当しない / **添付と文面が重複していない**
- 引っかかった項目があれば step (3) へ戻る

### (5) 納品

- コピペ用 plain text を 1 つ出力
- 任意で 短/中/長 の併産（140 字版・280 字版など）
- 画像 / 動画の何枚目に何があるかを再確認の上、投稿時の操作（添付順序・
  alt text 等）への注意点を loud で伝える

## 参照ファイルの読み込み方針（プログレッシブ開示）

`references/` 配下は **段階的に load** する。組み合わせ（3 personas × 2
modes × 5 post-types = 30 通り）でも、毎回読むのは小さなファイル数個に
抑える設計。

### Layer 0（常時）

- `SKILL.md`（自分自身、スキル起動時に読み込まれる）

### Layer 1（常時）

スキル起動時に必ず読む:

- `references/anti-slop.md` — 全 mode 共通の NG 表現リスト
- `references/self-check.md` — 投稿前チェックリスト 7 項目
- `references/attachments.md` — 添付素材ありき / なしきの文面調整ガイド

### Layer 2-index（必要時）

ユーザーに「どれにする？」と聞くタイミングで読む:

- `references/personas/_index.md` — persona 一覧
- `references/modes/_index.md` — mode 一覧
- `references/post-types/_index.md` — post-type 一覧

### Layer 2 condition-based（条件 load、各 1 個のみ）

ユーザーが選択を確定した時点で、対応する 1 ファイルのみ読む:

| カテゴリ | 読むファイル（例） |
|---|---|
| persona | `references/personas/{選択}.md` |
| mode | `references/modes/{選択}.md` |
| post-type | `references/post-types/{選択}.md` |

### 拡張（将来）

- 新しい persona / mode / post-type を追加するには、対応ディレクトリに
  ファイルを 1 個追加し、`_index.md` に 1 行登録するだけで済む。
  SKILL.md には触らない（Open/Closed 原則）。

## Subcommand 一覧

`/buzzounce [subcommand]` の形式で呼び出す。0.1.0 では default のみ提供。

| コマンド | 動作 |
|---|---|
| `/buzzounce` | 新規告知ツイート生成（デフォルト動作）。引数なしで対話開始 |

将来追加候補（後日 issue 化）:

- `/buzzounce list` — 過去案の一覧表示（メモリ実装後）
- `/buzzounce edit` — 過去案の再編集
- `/buzzounce persona` — persona 一覧表示
- `/buzzounce post` — X API 経由で直接投稿（API key 取り扱いが要る）
