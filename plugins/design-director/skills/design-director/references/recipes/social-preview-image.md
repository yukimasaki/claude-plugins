# Social Preview Image (and README hero, in one shot)

How to ship a GitHub Social Preview Image (SPI) and a README hero from the same `design-director` session, without rendering them twice.

---

## Goal

One PNG that doubles as the **GitHub Social Preview Image** (the thumbnail Slack / X / Discord show when someone pastes your repo URL) and the **README hero** (the image at the top of the rendered README on github.com). Plus, optionally, an animated WebM that lives next to the static PNG in `samples/` for visitors who clone or browse the source.

## Time

| Step | Wall-clock |
|---|---|
| 1. Brief & explore in design-director | 5–15 min |
| 2. Pick a single variation | 1 min |
| 3. Render to PNG (+ WebM) via `tools/render/` | 1 min |
| 4. Wire it into README + GitHub Settings | 3 min |
| **Total** | **~10–20 min** |

## Inputs

- A self-contained HTML hero file (the design-director output, e.g. `samples/hero/index.html`)
- `tools/render/` checked out and `bun install`-ed
- Repo write access (for README) + repo settings access (for SPI upload)

## Constraints

GitHub's Social Preview Image is *strict*:

- **Format**: PNG or JPG. **SVG and WebM are not accepted** — animated formats are silently rejected by the upload UI.
- **Size**: 1280×640 is the canonical size and the dimensions GitHub crops to. 640×320 also works but renders blurry on retina screens.
- **File size**: ≤ 5 MB. With a typography-heavy hero this is trivially satisfied; with photographs it is not.
- **Visibility**: Once uploaded, GitHub serves it from `https://repository-images.githubusercontent.com/...`. There's no API — you upload by hand at *Repo → Settings → General → Social preview*.

## Steps

### 1. Design the hero so PNG = SPI

The trick is to design at 1280×640 from the start, treating the artifact as both. Constraints to bake in:

- **Title large, install / CTA legible at thumbnail size.** A 1280×640 PNG, when rendered as a Slack unfurl, may shrink to ~600×300. Test by squinting at the design tile in the gallery: can you still read the project name?
- **No motion-dependent meaning.** The static frame must communicate the value alone — "wait until the animation loops" is not an option for SPI viewers. If a card animates in, design so the *final* frame stands on its own.
- **No rotting info.** No version numbers, calendar years, or counted nouns. SPI is the most long-lived surface the repo has — every release re-rendering it is friction. (See `prompts/output-rules.v1.txt` § "Rotting information in long-lived artifacts".)

### 2. Render with `tools/render/`

```bash
cd tools/render
bun install   # first run only
bun render.mjs ../../samples/hero/index.html --name hero
```

This writes:

- `samples/hero/hero.png` — 1280×640, animations paused at the final stable frame, `deviceScaleFactor: 1` (retina would 4× the file size)
- `samples/hero/hero.webm` — same size, ~6s loop (animated companion for `samples/`, not for SPI)

If you only want the SPI PNG, add `--no-webm`.

### 3. Embed in README

Use the **raw URL Markdown image** form, not `<img>`:

```markdown
![my-repo hero](https://raw.githubusercontent.com/<owner>/<repo>/main/samples/hero/hero.png)
```

GitHub auto-renders raw URLs of images and videos in Markdown. HTML `<video>` tags are unreliable on github.com (see `recipes/github-readme-rendering.md` for why).

### 4. Upload to GitHub Settings

This step is manual — there's no `gh` API for SPI:

1. Open *Repo → Settings → General*.
2. Scroll to **Social preview**.
3. Click **Edit** → **Upload an image** → pick `samples/hero/hero.png`.
4. Save. Test by pasting the repo URL in Slack / X / Discord and verifying the unfurl.

GitHub may take a few minutes to propagate; an aggressive cache-bust query string in the README URL doesn't help SPI but doesn't hurt.

## Co-existence pattern (recommended)

Ship all three from the same hero:

| Artifact | Role | Where it lives |
|---|---|---|
| `index.html` | Source | `samples/hero/index.html` (committed, viewable on github.com via raw) |
| `hero.png` | SPI + README hero | `samples/hero/hero.png` |
| `hero.webm` | Animated bonus | `samples/hero/hero.webm` (downloadable, not embedded in README) |

The README links to all three, with the PNG embedded inline and the WebM / HTML offered as "see the animated version" / "see the source".

## Anti-patterns

- **Rendering at retina (`deviceScaleFactor: 2`)**: produces a 2560×1280 PNG that GitHub crops or rejects, and quadruples file size for no visible benefit.
- **Trying to use a WebM as the SPI**: GitHub silently fails the upload. Always submit a still PNG.
- **Capturing the animation mid-frame**: the PNG looks broken. Always pause animations before screenshotting (the `tools/render/` script does this; if you write your own, see `recipes/render-to-png-webm.md`).
- **Letting the design drift between hero and SPI**: produces inconsistent first impressions. Use the same source HTML for both.
- **Embedding version numbers in the design**: forces you to re-render and re-upload on every release. Use a `shields.io` badge in the README *body* if you want a live version, not in the image.

## Related recipes

- `recipes/render-to-png-webm.md` — Playwright internals if you can't use `tools/render/`
- `recipes/github-readme-rendering.md` — what does and doesn't render on github.com
