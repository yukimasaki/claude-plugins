# GitHub README Rendering — what works and what doesn't

A field guide to embedding visuals in a github.com-rendered README. Saves you from "it works locally / it works in VS Code preview / it does not work on github.com".

---

## Goal

Predictably display images, animations, and video previews in your README on github.com. Avoid the trap of using a syntax that *renders in your editor* but is silently dropped or sanitized by GitHub's renderer.

## The reliability table

| Form | Renders on github.com? | Animates? | Notes |
|---|---|---|---|
| `![alt](raw-url.png)` | ✅ always | — | Always works for PNG / JPG / GIF |
| `![alt](raw-url.gif)` | ✅ always | ✅ | Heavy bandwidth; weak compression |
| `![alt](raw-url.svg)` with **SMIL** animation | ✅ usually | ✅ via SMIL | `awesome-claude-code` and many README "tickers" use this |
| Bare `https://...mp4` URL on its own line | ✅ | ✅ | GitHub auto-detects and renders an inline video player |
| Bare `https://...webm` URL on its own line | ⚠️ sometimes | depends | WebM auto-render is inconsistent across browsers / GitHub builds |
| `<video>` HTML tag | ❌ usually | — | GitHub's HTML sanitizer often strips `src` / drops the tag entirely |
| `<img src="raw.webm">` | ❌ | — | `<img>` doesn't play video |
| Hosted asset on user-attachments (drag-and-drop into Issue) | ✅ | ✅ | The most reliable way to host MP4/WebM, but URL is opaque |

## Steps to pick a form

### 1. Static image → use `![]()` Markdown

```markdown
![my-repo hero](https://raw.githubusercontent.com/<owner>/<repo>/main/samples/hero/hero.png)
```

This is the only form you should use for PNG / JPG / GIF. Do **not** use `<img>` — it works but adds zero value over the Markdown form.

### 2. Animated thing that should "just play" inline

In rough order of reliability:

1. **GIF**: works everywhere but huge files for non-trivial motion.
2. **Animated SVG with SMIL** (`<animate>`, `<animateTransform>`): renders inside an `<img>` tag on github.com. Small files. Best when the animation is geometric / typographic. See `awesome-claude-code` for live examples.
3. **MP4 raw URL**: paste a bare URL on its own line in the Markdown source — GitHub auto-renders a player. WebM is less consistent.
4. **`<video>` HTML**: don't bother. GitHub's HTML allow-list strips attributes inconsistently and the tag often disappears entirely.

### 3. Animated thing that's optional / "for the curious"

Don't try to embed it. Link to it:

```markdown
![hero](raw-url.png)

> [Animated version](raw-url.webm) · [HTML source](index.html)
```

This is what `samples/hero/` does in this repo: PNG inline, WebM and HTML linked. The reader who *wants* motion clicks through; the default reader sees a clean static image.

## SMIL SVG: the underused option

If your design is geometric (caret blink, dot bounce, type-on, sparkline), animated SVG with SMIL is the most reliable way to ship motion in a README:

```xml
<svg width="200" height="40" xmlns="http://www.w3.org/2000/svg">
  <text x="0" y="30" font-size="24" font-family="monospace">claude</text>
  <rect x="100" y="8" width="3" height="24" fill="black">
    <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
  </rect>
</svg>
```

Embed via `![alt](raw.svg)` — the `<animate>` runs inside the `<img>` on github.com.

Limits:

- No JS-driven animation.
- Filter / blend effects can be inconsistent across browsers.
- Authoring is tedious for complex motion. Good for typography and geometric loops; not good for anything that would naturally be a 3D scene or video.

## Hosting the raw assets

For files committed to the repo:

```
https://raw.githubusercontent.com/<owner>/<repo>/<branch>/<path>
```

Use `main` (or your default branch) rather than a commit SHA so the URL stays valid as you update the file. If you need a frozen version, use a tag: `.../v0.2.0/samples/hero/hero.png`.

For files **not** committed (one-off uploads), drag a file into a GitHub Issue / PR comment — GitHub returns a `user-images.githubusercontent.com` URL that you can use anywhere.

## markdownlint friction

If you use `markdownlint-cli2`, `MD034` (no-bare-urls) will flag the auto-rendering bare URLs you need for video. Disable it for files where you intentionally rely on auto-render:

```jsonc
// .markdownlint-cli2.jsonc
{
  "config": {
    "MD034": false
  }
}
```

Or scope the disable narrowly with inline comments:

```markdown
<!-- markdownlint-disable MD034 -->
https://github.com/<owner>/<repo>/raw/main/samples/hero/hero.mp4
<!-- markdownlint-enable MD034 -->
```

## Anti-patterns

- **Using `<video>` tags and assuming they'll render**: they often won't. Test on a real github.com page (not a local preview, not an IDE preview) before shipping.
- **Embedding 50 MB GIFs**: README pages re-fetch on every visit. A 5 MB MP4 / WebM via raw URL is far better than a 50 MB GIF.
- **Relying on `cache-bust` query strings to fix display issues**: they don't help; the real fix is using a form GitHub actually renders.
- **Hot-linking from third-party hosts**: works until the host rate-limits, blocks GitHub's IPs, or stops serving the asset. Always either commit to the repo or upload via the Issue / PR drag-drop trick.

## Related recipes

- `recipes/social-preview-image.md` — designing one PNG that doubles as SPI + README hero
- `recipes/render-to-png-webm.md` — producing the PNG / WebM via Playwright

## Further reading

- [Embedding video in GitHub README (bobbyhadz)](https://bobbyhadz.com/blog/embed-video-into-github-readme-markdown) — practical walk-through of the formats above
- [GitHub Markdown spec](https://github.github.com/gfm/) — auth on the GFM dialect
