# Rendering HTML to PNG / WebM (Playwright)

Convert any self-contained HTML prototype into a stable PNG snapshot and / or an animated WebM, suitable for README heroes, social previews, Slack shares, and slide decks.

---

## Goal

Take an HTML file produced by `design-director` (or any other source) and produce two artifacts:

1. **`<name>.png`** — a 1280×640 (or any size) static screenshot, with animations *paused at a deliberate frame* so the result is reproducible.
2. **`<name>.webm`** — a video recording of the same page playing for a configurable duration.

## When to use this

- The user wants to share a design prototype outside Claude Code (Slack, X, blog post, slide deck).
- A README needs a hero / social-preview image.
- The user is preparing samples for a public repo and wants a static snapshot alongside the live HTML.

If the goal is *only* to view a design in a browser, skip rendering entirely and run `/design-director serve`.

## Two paths

### Path A (recommended): use the bundled CLI

The repo ships a tiny CLI at `tools/render/`:

```bash
cd tools/render
bun install   # first run only
bun render.mjs <input.html> [options]
```

Examples:

```bash
# Match what samples/hero/ uses
bun render.mjs ../../samples/hero/index.html --name hero
# → ../../samples/hero/hero.png + hero.webm

# PNG-only at a custom size, no video
bun render.mjs ./design.html --size 1920x1080 --no-webm

# WebM-only with a longer loop
bun render.mjs ./animation.html --no-png --duration 12000
```

Flags: `--out <dir>` `--name <basename>` `--size <WxH>` `--duration <ms>` `--wait <ms>` `--no-png` `--no-webm` `--help`.

This is the path you should reach for first. The script is ~100 lines, single file, MIT-licensed inside this repo. Read it, fork it, modify it.

### Path B: write your own (when you can't use the bundled CLI)

If you're rendering inside a different repo / sandbox / CI runner, here is the minimum viable Playwright script that produces equivalent output:

```js
import { chromium } from "playwright";
import { dirname, resolve, join } from "node:path";
import { readdirSync, renameSync, unlinkSync } from "node:fs";

const inputPath = resolve("./hero.html");
const outDir = dirname(inputPath);
const baseName = "hero";
const width = 1280;
const height = 640;
const duration = 6000;

const browser = await chromium.launch();

// ---------- PNG ----------
{
  const page = await browser.newPage({
    viewport: { width, height },
    deviceScaleFactor: 1,        // keep this 1 — retina blows up file size
  });
  await page.goto("file://" + inputPath, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(500);
  await page.addStyleTag({
    content: `*, *::before, *::after {
      animation-play-state: paused !important;
      transition: none !important;
    }`,
  });
  await page.waitForTimeout(200);
  await page.screenshot({
    path: join(outDir, `${baseName}.png`),
    type: "png",
    clip: { x: 0, y: 0, width, height },
  });
  await page.close();
}

// ---------- WebM ----------
{
  const context = await browser.newContext({
    viewport: { width, height },
    recordVideo: { dir: outDir, size: { width, height } },
  });
  const page = await context.newPage();
  await page.goto("file://" + inputPath, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(duration);
  await page.close();
  await context.close();

  // Playwright writes a hash-named file — rename it.
  for (const f of readdirSync(outDir).filter(f => f.endsWith(".webm"))) {
    const src = join(outDir, f);
    const dst = join(outDir, `${baseName}.webm`);
    if (src !== dst) {
      try { unlinkSync(dst); } catch {}
      renameSync(src, dst);
    }
  }
}

await browser.close();
```

Save as `render.mjs`, then:

```bash
npm install playwright   # or: bun add playwright
node render.mjs          # or: bun render.mjs
```

## Key techniques

### Wait for `document.fonts.ready`

Web fonts (Google Fonts, locally hosted) load *after* `networkidle`. Capturing before fonts are ready produces a screenshot in the system fallback face — wrong glyphs, wrong metrics. Always:

```js
await page.evaluate(() => document.fonts.ready);
```

### Pause animations before PNG capture

Designs with CSS `@keyframes` animations are in motion when you screenshot. Without pausing, you get a random in-between frame — sometimes mid-fade, sometimes mid-bounce, never the deliberate state the design expresses.

The fix is a single CSS injection right before the screenshot:

```css
*, *::before, *::after {
  animation-play-state: paused !important;
  transition: none !important;
}
```

`!important` is required to defeat inline animation declarations. Wait ~200ms after injection so paused state propagates.

### Use `deviceScaleFactor: 1` for SPI / README

GitHub Social Preview accepts up to 5 MB. A retina (2×) capture of a 1280×640 design produces a 2560×1280 PNG at often 2-3× the file size — for no visible benefit, since github.com renders the SPI at the small size anyway. Ship 1×.

If the artifact is for a print / hi-DPI surface (not GitHub), then 2× makes sense. Default to 1× and only opt in to retina when you have a reason.

### Handle the WebM filename rename

Playwright's `recordVideo` doesn't let you set the output filename — it writes a hash-named `.webm` to the configured directory at context close. After `await context.close()`, scan the directory and rename:

```js
for (const f of readdirSync(outDir).filter(f => f.endsWith(".webm"))) {
  // remove any old <name>.webm, then move the new one in
}
```

## Anti-patterns

- **`deviceScaleFactor: 2` for README / SPI**: quadruples file size, GitHub renders it the same.
- **Skipping `document.fonts.ready`**: produces fallback-font screenshots. Subtle bug — looks "almost right" until you compare side-by-side.
- **Capturing without pausing animations**: random in-between frame. Always pause before screenshotting.
- **Re-using the same Playwright `page` for PNG and WebM**: you can't — `recordVideo` is set on the *context*, not the page, and must be enabled at context creation. Use two contexts.
- **Forgetting to `await context.close()`**: Playwright flushes the WebM file on context close. Without it, you get an empty / corrupt file.
- **Running the recording for too short a duration**: if your animation is a 6s loop and you record for 2s, the WebM cuts mid-cycle. Default to one full loop + buffer.

## Related recipes

- `recipes/social-preview-image.md` — using the PNG output as a GitHub SPI
- `recipes/github-readme-rendering.md` — picking PNG vs WebM vs SVG vs `<video>` for README embedding
