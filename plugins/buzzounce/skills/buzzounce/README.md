# buzzounce

OSS / AI / 個人開発の **X (Twitter) 告知ツイート** を、選択可能な **persona ×
mode × post-type** の組み合わせで対話的に生成する Agent Skill。

`buzzounce` = `buzz` + `(an)nounce` の portmanteau。「**1 オンスのバズを
craft する**」をコンセプトに、煽り・誇張・AI 調敬語を排した日本語ツイート
を生成する。

## 概要

- **入力**: 自然言語のブリーフ（「v0.2.0 を release した、画像 1 枚目に
  hero、リンクは GitHub」等）
- **出力**: コピペで投稿できる plain text のツイート文（短/中/長 を併産可）
- **特徴**: ブリーフ収集 → 候補 3 案生成 → 選択深掘り → self-check → 納品
  の 5 ステップを対話で回す。**persona × mode × post-type** の 3 軸選択で
  文体・コミュニティ規範・投稿目的を切り替える。**画像 / 動画の添付前提**
  で文面と素材の重複を回避する責務を持つ。

## 起動

```bash
# プロジェクトのルートで Claude Code を起動
claude

# スキル発動
/buzzounce
```

ブリーフ収集ステップで以下を順に確認される:

1. **何を告知するか**（URL / 事実 / 数値）
2. **添付素材**（画像 / 動画の有無、何枚、各 N 枚目の内容）
3. **mode**（`oss-dev` / `general` のいずれか）
4. **persona**（`understated` / `formal` / `casual` のいずれか）
5. **post-type**（`release` / `dogfood` / `tip` / `show-and-tell` / `lesson`）
6. **文字数上限**（`140` / `280`、デフォルト 280）

軸選択時は各カテゴリの `_index.md` を提示するので、その中から 1 つ選ぶ。

## 3 軸の組み合わせ

合計 **3 personas × 2 modes × 5 post-types = 30 通り** の表現が可能。

### persona — 文体ペルソナ

| persona | サマリ |
|---|---|
| `understated` | 控えめ・誠実・craft 重視・浮つかない。個人 OSS / dev 向け |
| `formal` | 公式アカウント風、ですます徹底、業務告知向け |
| `casual` | 親しげで軽い、フランク敬語（タメ口は不可） |

詳細: [`references/personas/`](references/personas/)

### mode — ターゲットコミュニティ規範

| mode | サマリ |
|---|---|
| `oss-dev` | OSS / dev / AI コミュニティ。絵文字 0-1 / hashtag なし / 煽り厳禁 |
| `general` | 副業・生活情報・一般。絵文字 1-3 / hashtag 0-3 / 共感型 OK |

詳細: [`references/modes/`](references/modes/)

### post-type — 投稿目的別テンプレ

| post-type | サマリ |
|---|---|
| `release` | 新 OSS / 新バージョン / 機能リリース告知 |
| `dogfood` | 自作で自作の素材を作った系（自己参照ストーリー） |
| `tip` | tips / コツ / before-after の共有 |
| `show-and-tell` | 作ってみた / 試してみた |
| `lesson` | 失敗談 / 学び（軽い自虐が活きる） |

詳細: [`references/post-types/`](references/post-types/)

## ワークフロー

### (1) ブリーフ収集

スキルが告知内容、添付素材、3 軸（mode / persona / post-type）と文字数を
順に確認する。`_index.md` を提示して選んでもらう形。

### (2) 候補生成

通常 **3 案** を並列出力。角度違い（短/中/長 or 角度 A/B/C）で差をつける。

### (3) 選択深掘り `[ループ]`

ユーザーが選んだ案を「もっと短く」「冒頭を逆説に」等の自然言語フィード
バックで磨く。

### (4) self-check

7 項目チェックを silently 実行し、結果を loud で報告:

1. ターゲット読者が明確か
2. 具体的事実（URL / 数値 / 名前）が入っているか
3. リンクを踏む動機があるか
4. 過剰自己宣伝になっていないか
5. 選択した persona の声に整合しているか
6. anti-slop NG リストに該当していないか
7. 添付素材と文面が重複していない / 補完関係になっているか

### (5) 納品

コピペ用 plain text を出力。任意で短/中/長の併産。

## 利用例

### 例 1: release 告知（understated × oss-dev × 添付なし）

```
> User: /buzzounce

> Claude: 何を告知しますか？

> User: claude-plugins v0.2.0 を公開した。design-director に告知ツイート
  生成スキル buzzounce を追加。リンクは GitHub のリポジトリ。

> Claude: 画像 / 動画を添付する予定はありますか？

> User: なし

> Claude: mode は oss-dev / general のどちら？

> User: oss-dev

> Claude: persona は understated / formal / casual のどれ？

> User: understated

> Claude: post-type は release / dogfood / tip / show-and-tell / lesson
  のどれ？

> User: release

> Claude: 候補 3 案を出します。
  ...（3 案表示）

> User: 1 番でいきたい。少しだけ短く。

> Claude:（修正）self-check OK。納品します。
  ...（最終 plain text）
```

### 例 2: dogfood 告知（understated × oss-dev × 添付 1 枚）

```
> User: /buzzounce

> Claude: 何を告知しますか？

> User: 自分のプラグイン buzzounce で自分の告知ツイートを書いた。
  製品の使い方デモを兼ねている。

> Claude: 画像 / 動画を添付しますか？

> User: 1 枚。スクショで「buzzounce が出力したツイート文」が見える画像。

> Claude:（添付内容を踏まえ、文面では画像説明を再描写しない方針で生成）
  3 案出します。
  ...
```

## ファイル構造

```
plugins/buzzounce/
├── .claude-plugin/
│   └── plugin.json
└── skills/
    └── buzzounce/
        ├── SKILL.md                ← Layer 0（常時 load）
        ├── README.md               ← このファイル
        └── references/
            ├── anti-slop.md        ← Layer 1（常時 load）
            ├── self-check.md       ← Layer 1（常時 load）
            ├── attachments.md      ← Layer 1（常時 load）
            ├── personas/
            │   ├── _index.md       ← Layer 2-index
            │   ├── understated.md  ← Layer 2-pers（条件 load）
            │   ├── formal.md
            │   └── casual.md
            ├── modes/
            │   ├── _index.md
            │   ├── oss-dev.md
            │   └── general.md
            └── post-types/
                ├── _index.md
                ├── release.md
                ├── dogfood.md
                ├── tip.md
                ├── show-and-tell.md
                └── lesson.md
```

## 拡張方法

### 新しい persona / mode / post-type を追加するには

1. 対応ディレクトリ（`personas/` / `modes/` / `post-types/`）に
   ファイルを 1 個追加。テンプレは既存ファイル（`understated.md` / `oss-dev.md` /
   `release.md` 等）を参照
2. 対応する `_index.md` の表に 1 行追加
3. SKILL.md には触らない（Layer 2 の選択肢に自動で出る）

### 軸間の優先順位

mode と persona の指定が衝突する場合（例: `general` mode は絵文字 1-3 個
許容、`understated` persona は絵文字 0 個志向）、**persona の指示が優先**。
mode は **上限** を定めるのみ。

詳細: [`references/modes/_index.md`](references/modes/_index.md) 末尾参照。

## トラブルシューティング

| 症状 | 原因 / 対処 |
|---|---|
| 候補が AI 調敬語っぽい | `references/anti-slop.md` の NG リストを確認。「本日は〜のご紹介です」「お役立ていただければ」等が混入していないか |
| persona の文末ルールから逸脱した候補が出る | persona ファイル（例: `understated.md`）の「文末」セクションを再 load させる。ユーザー側から「ですます基調で」と明示してもよい |
| 添付素材を考慮した文面になっていない | step (1) ブリーフ収集で「画像 / 動画の有無 / 各 N 枚目の内容」を聞き直す。`references/attachments.md` の 3 項目チェックリストを参照 |
| self-check で 7 番目（添付重複）が常に NG | 1 枚目に映っているもの（hero / UI / ロゴ等）を文面でも詳細に描写してしまっている。文面側を「なぜそれを見るべきか / 背景」に寄せる |
| 投稿後にエンゲージメントが伸びない | self-check の 1-3 項目（ターゲット明確 / 具体的事実 / リンク踏む動機）を再確認。動機が弱い場合は post-type を `tip` / `lesson` に変えると効くことがある |

## ライセンス

MIT。詳細はリポジトリルートの [LICENSE](../../../../LICENSE) を参照。

このスキル本体は本リポジトリで独自に作られたもので、vendored 依存は
ない（→ design-director と異なり upstream 同期は不要）。
