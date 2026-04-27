# tools/render

A small Playwright-based CLI that renders an HTML file to a static PNG and/or an animated WebM. Used to produce the hero, social-preview image, and sample assets shipped under [`samples/`](../../samples/).

## Why this exists

`design-director` generates HTML prototypes, but GitHub README headers, social-preview images, and SNS share cards need **rasterized** assets (PNG / WebM). This tool fills that last-mile gap: it loads any self-contained HTML in headless Chromium, waits for fonts and animations to settle, and writes images / videos at the dimensions you ask for.

The script is intentionally **single-file and easy to fork** — copy it into your own project and tweak as needed.

## Install

```bash
cd tools/render
bun install
```

(Node + npm should also work; the script uses Node-standard `parseArgs` and Playwright's npm package.)

## Usage

```
bun render.mjs <input.html> [options]
```

### Options

| Flag | Default | Description |
|---|---|---|
| `--out <dir>` | dirname of input | Output directory |
| `--name <basename>` | input basename | Output basename (without extension) |
| `--size <WxH>` | `1280x640` | Viewport size in pixels |
| `--duration <ms>` | `6000` | WebM recording duration |
| `--wait <ms>` | `500` | Settle time after `fonts.ready` before capture |
| `--no-png` | off | Skip PNG output |
| `--no-webm` | off | Skip WebM output |
| `--help` | — | Show usage |

### Examples

Re-render the claude-plugins hero (matches what ships in `samples/hero/`):

```bash
cd tools/render
bun render.mjs ../../samples/hero/index.html --name hero
# → samples/hero/hero.png  (1280×640 static, animations paused)
# → samples/hero/hero.webm (1280×640, ~6s loop)
```

Render any prototype to PNG only at a custom size:

```bash
bun render.mjs ./design.html --size 1920x1080 --no-webm
# → ./design.png
```

WebM only with a longer loop:

```bash
bun render.mjs ./animation.html --no-png --duration 12000
# → ./animation.webm
```

## How it works

For PNG:

1. Launch headless Chromium at the requested viewport with `deviceScaleFactor: 1` (retina would 4× the pixels and blow up the file).
2. Wait for `networkidle` and `document.fonts.ready` so web fonts paint.
3. Inject CSS that pauses every animation (`animation-play-state: paused`) and disables transitions, so the screenshot captures a stable frame instead of a random in-between.
4. Take a clipped screenshot at the exact requested size.

For WebM:

1. Open a fresh Playwright context with `recordVideo` enabled.
2. Wait the configured `--duration` so animations have time to play through.
3. Close the context, which flushes the recording. Playwright writes a hash-named file; this script renames it to `<basename>.webm`.

## Output stability

- PNG output is deterministic for static designs: same input HTML + same Chromium version → same bytes.
- Animated WebM has small frame-timing variation between runs. Don't rely on byte-equality; rely on visual equivalence.

## License

MIT, same as the rest of the repository.
