---
version: alpha
name: Mercari
description: Mercari is Japan's dominant C2C marketplace, and its web UI carries that scale through an extremely clean, white-background, grid-first surface. The hero color is Mercari Red `#ff333f`, but it is rationed strictly to CTAs and active tab states — the bulk of the page lives in a two-tone gray system where headings (`#666666`) are intentionally lighter than body text (`#333333`). Body type sits at 15px (not the conventional 16px) with line-height 1.4 across the entire site, giving the layout a tight, transactional rhythm. Mood — clean, transactional, trustworthy, efficient.

colors:
  primary: "#ff333f"
  primary-hover: "#e62d38"
  link: "#0073cc"
  ink: "#333333"
  body: "#333333"
  muted: "#666666"
  canvas: "#ffffff"
  surface: "#ffffff"
  surface-soft: "#f5f5f5"
  hairline: "#e0e0e0"
  on-primary: "#ffffff"
  success: "#43a047"
  warning: "#f9a825"
  error: "#ff333f"

typography:
  display-xl:
    fontFamily: "Helvetica Neue, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  display-lg:
    fontFamily: "Helvetica Neue, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  title-lg:
    fontFamily: "Helvetica Neue, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "Helvetica Neue, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "Helvetica Neue, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  caption:
    fontFamily: "Helvetica Neue, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  label:
    fontFamily: "Helvetica Neue, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: 0

rounded:
  none: 0px
  sm: 4px
  md: 4px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 16px
  "4": 24px
  "5": 36px
  "6": 64px
---

## Overview

Mercari's web frontend is built on Panda CSS and reads as a deliberately clean, white marketplace shell. The product grid is the core surface — high information density (many cards per row) but always with adequate gutter. There is exactly one accent color — Mercari Red `#ff333f` — and the design pays close attention to where it appears: only on the primary "出品" CTA and the active tab indicator. Everything else is gray.

Mood words — clean, transactional, trustworthy, efficient.

## Colors

The two-tone gray system is unusual: body text is `#333333` (darker), but section headings are `#666666` (lighter) — the opposite of most design systems. This pulls user attention toward product cards and away from chrome. Active tab text uses Mercari Red `#ff333f`; inactive tabs use the lighter `#666666`. Inline links use `#0073cc`. Hairlines and dividers use `#e0e0e0` against `#ffffff` surface.

## Typography

Font stack is **Helvetica Neue / Arial first**, then Mercari's custom-metric "Hiragino Kaku Gothic ProN Custom" / "Hiragino Sans Custom" / "Meiryo Custom" — note the `Custom` suffix, which is a Mercari-specific `@font-face` definition that adjusts vertical metrics (ascent/descent) for cleaner alignment with Latin glyphs. The hybrid chain we ship here drops the `Custom` suffix for portability and falls back to standard Hiragino / Noto Sans JP / Yu Gothic.

Body sits at **15px / weight 400**, not 16px. Section headings at 20px / 700. Letter-spacing is `normal` (0) on every role. Upstream uses line-height 1.4 across the site; for the design-director floor we lift body / caption / label to 1.6 to keep kanji legible — display / title stay at 1.4. `palt` is **not** used.

## Layout

- 4 / 8 / 16 / 24 / 36 / 64 spacing scale derived from `--grid-layout-*` tokens
- Grid gutter 24px (`--grid-layout-gutter`), inset 16px (`--grid-layout-inset`)
- Page padding — top 40px, bottom 64px, horizontal 36px
- Product grid is responsive: typically 4–6 columns on desktop, 2–3 on mobile
- Touch targets ≥ 44px square; iOS form inputs stay at 16px to prevent zoom

## Elevation & Depth

Mercari mostly uses z-index layering instead of shadow stacks. Cards stay flat against the white canvas; the marketplace relies on hairlines and gutters for separation. Documented z-tiers — menu 1100, navigation 1200, modal 1400, snackbar 1500, tooltip 1600. Modals carry a subtle ambient shadow but the base UI is shadowless.

## Shapes

Border radius is **4px on buttons and tags, 0px on inputs**. No pill shapes. The corner radius is small enough to read as "tidy" rather than "soft" — consistent with the transactional brand voice.

## Components

**Buttons** — Primary "出品" fills `#ff333f` with white text, weight 700, 14px, 4px radius. Secondary "ログイン" is white background with `#333333` text, no border, weight 400. The contrast in weight (700 vs 400) signals which is the action.

**Tabs** — White background. Active tab text is `#ff333f` weight 700 with a red underline indicator. Inactive tab text is `#666666` weight 700 (same weight, different color).

**Inputs** — White fill, **0px radius**, 16px text (preventing iOS zoom), 22.4px line-height, `#333333` text, hairline `#e0e0e0` border.

**Product cards** — Plain white surface with subtle hairline; price text in body weight, item title in `#333333`.

## Do's and Don'ts

**Do**
- Reserve `#ff333f` for primary CTA and active states only
- Keep body at 15px (Mercari's distinctive base size)
- Use `#666666` for headings and `#333333` for body — yes, headings are lighter
- Use Helvetica Neue first in the font chain, then JP faces
- Keep button radius at 4px and input radius at 0px
- Maintain body line-height ≥ 1.6 for kanji legibility

**Don't**
- Spread Mercari Red across backgrounds, hover states, or text colors
- Use 16px for body type — 15px is the Mercari signature
- Apply `palt` or any `font-feature-settings` — Mercari runs with defaults
- Add letter-spacing — every role on the site is `normal`
- Use pill or large-radius buttons — 4px is the rule
- Use `#333333` on headings (the "lighter heading" pattern is a brand cue)

## Agent Prompt Guide

**Bias toward** — single Mercari Red accent, two-tone gray system with lighter headings, white-canvas grid, 15px body type, 4px button radius, Helvetica Neue + Hiragino chain, hairline-based separation, transactional density.

**Reject** — Mercari Red as background fill, pill or rounded buttons, `palt` / typographic ornament, multiple saturated accents, line-height < 1.6 on body, headings darker than body, large radii on cards or inputs.
