# personas — 文体ペルソナ一覧

ツイートの **文体・人格** を決めるペルソナ。1 ツイート = 1 ペルソナで生成
する。

## 一覧

| persona | ファイル | 1 行サマリ |
|---|---|---|
| `understated` | [understated.md](./understated.md) | 控えめ・誠実・craft 重視・浮つかない。OSS / dev コミュニティ向け |
| `formal` | [formal.md](./formal.md) | 公式アカウント風、ですます徹底、業務告知向け |
| `casual` | [casual.md](./casual.md) | 親しげで軽い、フランク敬語（タメ口は使わない） |

## 選び方の目安

- **個人プロジェクト / 個人 OSS の告知** → `understated`（推し）
- **会社・チーム公式の業務告知** → `formal`
- **コミュニティ向けの軽い共有 / 雑談的な投稿** → `casual`

迷ったら `understated`。OSS / dev 文脈で外しにくく、AI 調や煽り感が出る
リスクが最も低い。

## 新しい persona を追加するには

1. `references/personas/{name}.md` を新規作成。テンプレ:
   - 一人称
   - 文末
   - 動機 / 心動く対象
   - 自己評価語
   - 真似したい / 真似しない（参考にする実在人物の特徴）
   - NG 表現
   - 例文 2 件以上（post-type 別に）
2. 本ファイル（`_index.md`）の表に 1 行追加（name / file / 1 行サマリ）
3. SKILL.md には触らない（自動的に Layer 2-pers の選択肢に出る）

## ペルソナ間で共通の制約

すべての persona は以下を守る:

- AI 調敬語禁止（→ `anti-slop.md`）
- 煽りワード禁止（→ `anti-slop.md`）
- 嫌な印象を与える表現禁止
- mode の制約（絵文字数 / hashtag 数）に従う

ペルソナ固有のルール（一人称・文末等）は mode の制約より **優先される**。
