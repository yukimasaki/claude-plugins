# modes — ターゲットコミュニティ別の規範

ツイートが受け入れられる **コミュニティ規範** に応じて、絵文字 / ハッシュ
タグ / 構成の許容範囲を切り替える。

## 一覧

| mode | ファイル | 1 行サマリ |
|---|---|---|
| `oss-dev` | [oss-dev.md](./oss-dev.md) | OSS / dev / AI コミュニティ向け（dev Twitter）。絵文字 0-1 / hashtag なし / 煽り厳禁 |
| `general` | [general.md](./general.md) | 副業・生活情報・一般向け。絵文字 1-3 / hashtag 0-3 / 共感型 OK |

## 選び方の目安

- **OSS / 個人プラグイン / AI ツールの告知** → `oss-dev`
- **生活ハック / 副業 / 趣味系の発信** → `general`

迷ったら告知対象の **読者像** で選ぶ:
- 読者がコードを書く人 → `oss-dev`
- 読者が情報収集者 / 一般 → `general`

## 新しい mode を追加するには

1. `references/modes/{name}.md` を新規作成。記載項目:
   - 想定読者
   - 絵文字 / ハッシュタグの許容数
   - 推奨される構成（フック・本文・CTA の長さや形式）
   - 該当コミュニティの NG（コミュニティ固有の地雷）
2. 本ファイル（`_index.md`）の表に 1 行追加
3. SKILL.md には触らない

## モードと persona の優先順位

mode と persona の指定が衝突する場合（例: `general` mode は絵文字 1-3 個
許容、`understated` persona は絵文字 0 個志向）、**persona の指示が優先**。
mode は **上限** を定めるのみで、下限は強制しない。

例: `general` mode + `understated` persona → 絵文字なしで生成（persona の
0 個志向が勝つ、mode の 1-3 個は許容範囲なので付けなくても問題ない）。
