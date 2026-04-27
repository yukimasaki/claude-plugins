**English** | [日本語](./CONTRIBUTING.ja.md)

# Contributing to claude-plugins

PRs and Issues are welcome. This document focuses on the rules for **adding design references**.

## Adding design references (`design-md/`)

The directory `plugins/design-director/skills/design-director/references/design-md/` contains Markdown files describing brand or product designs, organized by category.

```
references/design-md/
├── brutalist/   # e.g. the-verge.md
├── cinematic/   # e.g. bmw.md, ferrari.md
├── data-dense/
├── editorial/
├── glass/
├── indie/
├── playful/
├── remix/
├── terminal/
└── warm/
```

### How to submit

1. **Choose a category**: pick the existing category that best fits. If none fits, propose a new category in your PR.
2. **File name**: `{brand-or-product-name}.md` (lowercase, hyphen-separated).
3. **File content**: import **verbatim** from upstream (public repo, blog, official design system docs, etc.).
4. **Update `ATTRIBUTIONS.md`**: in the same PR, add a row to the "design-md/ contributions" table:

   ```markdown
   | brutalist | the-verge.md | https://example.com/source | MIT | 2026-04-26 |
   ```

5. **License compatibility**: confirm the source license is MIT-compatible (MIT / BSD / Apache-2.0). GPL/AGPL family is not accepted.
6. **Always include the upstream `Source URL`**: required for traceability.

### Categorization

Choosing the right category is the **contributor's responsibility**. If your reference doesn't clearly fit any existing category, explain in the PR:

- How it differs from existing categories
- What other references might join the new category

The maintainer reviews PRs for overall consistency.

## Bug reports / feature requests

Use [GitHub Issues](https://github.com/yukimasaki/claude-plugins/issues). Templates will guide you through the required information.

## Commit messages

[Conventional Commits](https://www.conventionalcommits.org/) is recommended (Japanese is fine):

```
feat(design-director): add new cinematic style
docs(contributing): update design reference submission steps
```

## License

By submitting a PR, you agree that your contribution will be released under the [MIT License](./LICENSE).
