# post-types — 投稿の目的別テンプレ一覧

何を伝えたいかで type を選ぶ。1 ツイート = 1 type を基本とする。

## 一覧

| post-type | ファイル | 1 行サマリ |
|---|---|---|
| `release` | [release.md](./release.md) | 新 OSS / 新バージョン / 機能リリースの告知 |
| `dogfood` | [dogfood.md](./dogfood.md) | 自作ツールで自作の素材を作った系（自己参照ストーリー） |
| `tip` | [tip.md](./tip.md) | tips / コツ / before-after の共有（数字フックが効く） |
| `show-and-tell` | [show-and-tell.md](./show-and-tell.md) | 作ってみた / 試してみた系 |
| `lesson` | [lesson.md](./lesson.md) | 失敗談 / 学び（"軽い自虐" が活きる） |

## 選び方の目安

| やりたいこと | 推奨 type |
|---|---|
| 新機能 / 新バージョンを知らせたい | `release` |
| 自作のツールで自作の素材を作った話を共有 | `dogfood` |
| 短時間でできるテクニック / 改善を共有 | `tip` |
| 作ったものを見せたい（成果物のお披露目） | `show-and-tell` |
| 失敗・気づき・教訓を共有したい | `lesson` |

迷ったら **告知の中身** で判断:
- 製品・バージョンが主役 → `release`
- ストーリー・気づきが主役 → `dogfood` / `lesson`
- 知見・テクが主役 → `tip`
- 完成物 / 試行が主役 → `show-and-tell`

## 新しい post-type を追加するには

1. `references/post-types/{name}.md` を新規作成。記載項目:
   - いつ使うか（具体例）
   - 典型構成（フック / 本文 / CTA）
   - 推奨文字数
   - 典型添付パターン（→ `attachments.md` と連動）
   - NG 構成（混同しやすい他 type との切り分け）
   - 例文 2 件以上
2. 本ファイル（`_index.md`）の表に 1 行追加
3. SKILL.md には触らない

## post-type と他軸の組み合わせ

post-type は **persona** と **mode** と独立に組み合わせ可能。例:

- `release` × `understated` × `oss-dev` → 個人 OSS の控えめ release 告知
- `release` × `formal` × `oss-dev` → 公式アカウントの release 告知
- `dogfood` × `casual` × `general` → 親しげな自己参照ストーリー
- `lesson` × `understated` × `oss-dev` → 失敗談を控えめに

衝突がある場合は **persona の指定が優先**（→ `modes/_index.md`）。
