**English** | [日本語](./README.ja.md)

# How this hero image was made

The hero for `yukimasaki/claude-plugins` ([`hero.png`](./hero.png) / [`hero.webm`](./hero.webm) / [`index.html`](./index.html)) was **100% generated through one conversation with Claude Code + the `design-director` skill**.

This page publishes the prompts from that session almost verbatim — a **"making-of" log**. Mimic the prompts and you can build your own hero image with the same process.

> Tools: Claude Code (Opus 4.7) · `design-director@kit` v0.1.1
> Date: 2026-04-27 (single continuous session)
> Original session was conducted in Japanese. Each prompt below is shown in English translation; see [`README.ja.md`](./README.ja.md) for the verbatim transcript.

---

## 7 steps × 13 turns

`design-director`'s standard workflow is 7 steps: **prep → context → aesthetic direction → variation generation → selection & refinement → verification → delivery**. This session split generation and refinement across 13 turns. Each user prompt below is shown in chronological order.

---

### Turn 1: Brief — "I want a hero image"

> Can you make a hero image for the README?

→ design-director responded: "Yes, as JSX/HTML; rendering to PNG needs a separate step." Offered three paths: A. SVG direct, B. JSX → screenshot, C. Headless Chrome automation.

### Turn 2: Lock down purpose / tone / text

design-director asked the standard 3 onboarding questions: **use case / tone / text content + motif**.

> 1. Should also double as the SPI! (the thumbnail when the GitHub URL is shared)
> 2. Let's make 6 variations across the tones you mentioned
> 3. Recommend something

→ design-director proposed the text composition (Title + tagline + sub-copy + install command + 3-card parallel motif). Approved.

### Turn 3: Generate one variation per aesthetic, in parallel

Six families generated into `.design-studio/projects/claude-plugins-hero/variations/`: `editorial` / `terminal` / `cinematic` / `brutalist` / `warm` / `glass`. Comparable side-by-side via the gallery `index.html`.

### Turn 4: Narrow to four

> I like Cinematic, Brutalist, Warm, and Glass

→ Editorial / Terminal dropped.

### Turn 5: Per-aesthetic feedback → polish the four

> Let's go with B and C.
>
> - Cinematic: colors and text size are good, but the abstract shapes could be more concrete like Glass (**just rounded rectangles don't convey meaning**). What if the right-side ABC slots became Cinematic / Glass / Editorial cards? That would make a hero that symbolizes design-director itself.
> - Brutalist: really eye-catching! **Make 4 more variations**.
> - Glass: pretty, but **the title is small** and it looks **generic** — it'll get lost.

→ Cinematic's right panels became mini-previews; 4 brutalist derivatives generated (monochrome / red / typography-only / collage); Glass converted to **dark palette + 168px title**.

### Turn 6: Adopt brutalist → swap right panels

> In Brutalist 1 (yellow), put Glass (updated) and Terminal (dropped) into the A and B slots.

→ A → Glass mini (purple gradient + translucent frosted card); B → Terminal mini (dark bg + `$claude_` monospace + green caret).

### Turn 7: Generate candidates for the C slot

> Nice! What card should I put in C?
> Make 4 standalone card variations using different aesthetics.

→ design-director laid out 4 candidates (Warm / Editorial / Playful / Data-dense) on a `c-options.html` comparison page.

### Turn 8: Pick C

> Let's go with #3.

→ Playful (pink gradient + chunky "Aa" + 3 dots) dropped into C.

### Turn 9: Unify the 3 cards + ABC as one phrase

> Looking good! Let's commit to brutalist and refine.
> Next: I want to unify the design across A / B / C cards.
> Instead of "Aa", show text like the B card does.
> Maybe ABC could form one connected phrase?

design-director offered four phrase options:

| # | A | B | C | Story |
|:-:|---|---|---|---|
| 1 | `explore.` | `$ generate` | `ship!` | design-director's workflow |
| 2 | `design.` | `driven.` | `prototype.` | tagline split |
| 3 | `aesthetics` | `variations` | `jsx` | input → process → output |
| 4 | `pick.` | `$ run` | `ship it!` | verb-heavy |

User reply:

> A. Let's go with option 1: `explore.` / `$ generate` / `ship!`
> B. B-1 (drop A's frosted frame, plain text like B/C)
> C. OK (text size unified at ~48px)

→ All three cards now frameless, text-led; the row reads as a workflow narrative.

### Turn 10: Strip the "rotting" info

> Drop the version label from the "PLUGIN MARKETPLACE" badge — updating it every release would be annoying.

→ `Plugin Marketplace · v0.1.1` → `Plugin Marketplace`

design-director flagged "the `2026` in the meta line will rot the same way."

> B (delete it)

→ `MIT — Public OSS — 2026` → `MIT — Public OSS`

> The horizontal line also disappeared. The one on the right of PUBLIC OSS.

The em-dash on the right of "Public OSS" had been part of the `2026` span's prefix and went with it. Restored:

```css
.meta span:last-child::after { content: ' —'; }
```

### Turn 11: Move to a versioning system

> Delete everything except brutalist.html and have index.html show only that.
> Future edit instructions should be saved as brutalist-v1, brutalist-v2, etc., and added to index.html.

→ 5 of 6 variations deleted; `index.html` rewritten to consume a `versions` array with the latest at the top. From now on each new edit creates `brutalist-vN.html` and prepends an entry.

### Turn 12: v2 — add animations

> Now make v2 with the following:
> Add small animation elements to "explore." and "ship!" texts, like the small animation in NO.02.
>
> - NO.01 is up to you.
> - NO.03 should have an animation that looks like it's **playfully popping out**.

design-director's response:

- **A (Glass)**: `shimmer` light sweep — light passing through the glass on a 4.5s loop
- **B (Terminal)**: existing caret blink preserved
- **C (Playful)**: `bang-pop` — `!` bounces with cubic-bezier overshoot, combining bounce + rotate + scale; the 3 dots also pulse with a 0.18s staggered sequence

### Turn 13: Adopt v2 → publish

> Looks great! I'll officially adopt v2.

→ `brutalist.html` renamed to `brutalist-v1.html`; `brutalist-v2.html` becomes the canonical version.

After this, the files in this directory (PNG / WebM / HTML / this README) were generated and the main READMEs were updated to embed the hero as a `<video>` — which is what you saw on the way here.

---

## Takeaways

| Observation | Lesson |
|---|---|
| The 3 onboarding questions decided 90% of direction | **Lock use case / tone / text content first** — the rest follows |
| 6 → 4 → 1 narrowing is low-cost | **Generate broad, then prune** beats per-option debate |
| "Just rounded rectangles don't convey meaning" was the turning point | **Abstract motifs fail when there's nothing inside.** Replacing them with concrete mini-previews turned the panels into "windows into the marketplace" |
| ABC reading as `explore. → $ generate → ship!` | **Aligning three cells into one sentence** does more than visual harmony — the headline reads as the product's value proposition |
| One blinking caret → animations on every card | **A dynamic tool generated this dynamic image** becomes self-evident at a glance |

---

## Tools used

- [Claude Code](https://claude.com/claude-code) v2.1.119
- [`design-director`](../../plugins/design-director) plugin v0.1.1
- Model: Claude Opus 4.7 (1M context)

## Re-rendering PNG / WebM

If you change the source HTML, regenerate the binaries with:

```bash
cd tools/render
bun install   # first run only
bun render.mjs ../../samples/hero/index.html --name hero
```

→ writes `samples/hero/hero.png` (1280×640 static, animations paused) and `samples/hero/hero.webm` (1280×640, ~6s loop). The render tool itself lives in [`tools/render/`](../../tools/render) (MIT, shipped with this repo), built on Playwright. See its [README](../../tools/render/README.md) for all options.

---

## Try it yourself

```
/plugin marketplace add yukimasaki/claude-plugins
/plugin install design-director@kit
/design-director
```

Sample first prompt:

> I want to make a hero image for my repository — 1280×640, doubling as a GitHub Social Preview Image.

Answer the 3 onboarding questions (use case / tone / text content), pick one aesthetic from the generated set, and iterate with feedback. Expect **30–60 minutes** to land on something equivalent to what you see above.
