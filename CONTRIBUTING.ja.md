[English](./CONTRIBUTING.md) | **日本語**

# claude-plugins へのコントリビューション

PR・Issue を歓迎します。このドキュメントは特に **デザイン参照ファイルの追加** に関するルールを定めます。

## デザイン参照ファイル（design-md/）の追加

`plugins/design-director/skills/design-director/references/design-md/` には、ブランドや製品のデザインを記述した
Markdown ファイルが、カテゴリディレクトリ単位で整理されています。

```
references/design-md/
├── brutalist/   # 例: the-verge.md
├── cinematic/   # 例: bmw.md, ferrari.md
├── data-dense/
├── editorial/
├── glass/
├── indie/
├── playful/
├── remix/
├── terminal/
└── warm/
```

### 追加 PR の手順

1. **配置先の判断**: 既存カテゴリのいずれかに合うかを検討。合わない場合は新規カテゴリの作成を提案
2. **ファイル名**: `{brand-or-product-name}.md`（小文字、ハイフン区切り）
3. **ファイル内容**: upstream（公開リポ・ブログ・公式デザインシステムドキュメントなど）から **無改変** で取り込む
4. **ATTRIBUTIONS.md への追記**: PR と同時に `ATTRIBUTIONS.md` の "design-md/ への追加コントリビューション" 表に行を追加:

   ```markdown
   | brutalist | the-verge.md | https://example.com/source | MIT | 2026-04-26 |
   ```

5. **ライセンス確認**: 取り込み元のライセンスが MIT 互換（MIT / BSD / Apache-2.0 など）であることを確認。GPL/AGPL 系は不可
6. **upstream の `Source URL` を必ず記載**: トレーサビリティ確保のため

### 配置の判断

カテゴリ分けの判断は **コントリビューターの責務** です。明確に既存カテゴリに当てはまらない場合は、PR 内で
新規カテゴリ提案の根拠（既存カテゴリとの差異、想定される類似ファイル群など）を説明してください。
メンテナは PR レビューで全体整合性を確認します。

## バグ報告 / 機能要望

GitHub Issues に投稿してください。

## コミットメッセージ

日本語の Conventional Commits 形式を推奨します（必須ではない）:

```
feat(design-director): 新しい cinematic スタイルを追加
docs(contributing): デザイン参照ファイル追加手順を更新
```

## ライセンス

PR を投稿することで、その内容を [MIT License](./LICENSE) で公開することに同意したものとみなします。
