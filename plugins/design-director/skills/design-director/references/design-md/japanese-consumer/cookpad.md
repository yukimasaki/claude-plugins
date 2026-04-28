---
version: alpha
name: Cookpad
description: Cookpad is Japan's dominant home-cooking UGC platform, and its web UI is built around a warm, kitchen-table mood rather than a glossy media-app aesthetic. The canvas is the off-white `#f8f6f2` (not pure white), ink is the near-black `#0f0f0f`, and the single accent is Cookpad Orange `#f28c06` carrying CTAs, focus states, and brand surfaces. Type is set in `noto-sans` (Adobe Fonts) at 16px / line-height 1.5 with semibold-only headings (weight 600, never 700) for a softer authority. Mood — warm, homely, approachable, practical.

colors:
  primary: "#f28c06"
  primary-hover: "#d97a00"
  ink: "#0f0f0f"
  body: "#0f0f0f"
  muted: "#757575"
  disabled: "#bdbdbd"
  canvas: "#f8f6f2"
  surface: "#ffffff"
  hairline: "#e0e0e0"
  on-primary: "#ffffff"
  success: "#43a047"
  warning: "#f9a825"
  error: "#e53935"

typography:
  display-xl:
    fontFamily: "noto-sans, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  display-lg:
    fontFamily: "noto-sans, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  title-lg:
    fontFamily: "noto-sans, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.556
    letterSpacing: 0
  body-md:
    fontFamily: "noto-sans, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "noto-sans, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  caption:
    fontFamily: "noto-sans, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  label:
    fontFamily: "noto-sans, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: 0

rounded:
  sm: 4px
  md: 8px
  lg: 12px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 16px
  "4": 24px
  "5": 32px
  "6": 48px
---

## Overview

Cookpad is built for home cooks browsing for "what to make tonight" — its visual posture has to feel friendly and lived-in, not editorial or corporate. The defining choice is canvas: `#f8f6f2`, a warm off-white. Setting recipe cards (`#ffffff` surface) on this slightly creamy canvas is what creates the kitchen-table mood. Ink is `#0f0f0f` (a near-black, not `#000`), and the only saturated color is Cookpad Orange `#f28c06`.

Mood words — warm, homely, approachable, practical.

## Colors

Surface (`#ffffff`) sits on canvas (`#f8f6f2`) — that 5% warmth differential is the whole brand. Hairlines `#e0e0e0` separate cards. Cookpad Orange `#f28c06` is the primary fill, focus border, and brand accent; its hover `#d97a00` is reserved for press states only. Status colors (success `#43a047`, warning `#f9a825`, error `#e53935`) follow standard semantics and rarely appear in editorial content — they're functional UI signals.

## Typography

The body face is **`noto-sans`** — Adobe Fonts' served version of Noto Sans — placed first in the chain, then standard `Noto Sans JP` / `Hiragino Sans` / `Yu Gothic` fallbacks. The system stack (`system-ui`, `-apple-system`, `Segoe UI`, `Roboto`, `Helvetica`, `Arial`) sits behind those when the Adobe font fails to load.

Cookpad's signature typographic decisions: headings use **weight 600 (semibold)**, never 700, giving authority without harshness; and `font-feature-settings: "liga"` is enabled to render Latin ligatures (fi, fl) cleanly inside recipe titles that mix Japanese and Latin glyphs. Upstream uses negative letter-spacing (`-0.4px`) and line-height 1.5 — for the design-director floor we set letter-spacing to 0 and lift body line-height to 1.6, while keeping the title-lg's signature 1.556 to honor the heading rhythm.

`palt` is not used.

## Layout

- 4 / 8 / 16 / 24 / 32 / 48 spacing scale (XS through XXL)
- Container max-width 1080px with 16px horizontal padding
- Recipe grid 2–4 columns responsive, 16px gutter
- Touch targets ≥ 44px square
- Breakpoints — Mobile ≤ 767px, Tablet ≤ 1023px, Desktop > 1024px

## Elevation & Depth

Soft, warm shadows. Recipe cards lift with `0 1px 3px rgba(0,0,0,0.08)` against the canvas. Dropdowns / popovers go to level 2 (`0 4px 8px rgba(0,0,0,0.10)`); modals to level 3 (`0 8px 24px rgba(0,0,0,0.15)`). Hairlines do additional work to separate cards on the warm canvas — shadows alone aren't enough on `#f8f6f2`.

## Shapes

Border radius — 4px (sm), 8px (md, used on buttons and inputs), 12px (lg, used on recipe cards). The 12px card radius is a key brand cue: it's softer than typical Japanese SaaS but sharper than consumer chat apps. No pill shapes.

## Components

**Buttons** — Primary fills `#f28c06` with white text, weight 600, 8px radius, 8/24 padding. Secondary is transparent fill with 1px `#e0e0e0` border and `#0f0f0f` text, same radius. Hover swaps primary fill to `#d97a00`.

**Inputs** — White fill, 1px `#e0e0e0` border, 8px radius, 16px text, 8/12 padding, 40px height. Focus ring is 1px `#f28c06` (border swap, no outer ring).

**Recipe cards** — White surface against the warm canvas, 1px `#e0e0e0` border, 12px radius, 16px padding, level-1 shadow on hover. The recipe image fills the top with the same 12px radius on top corners.

## Do's and Don'ts

**Do**
- Use canvas `#f8f6f2` (warm off-white), never pure `#ffffff` for the page background
- Use ink `#0f0f0f` for body text, never pure `#000`
- Set heading weight to 600 (semibold) — never 700 (bold)
- Apply `font-feature-settings: "liga"` to enable clean Latin ligatures
- Lead the font chain with `noto-sans` from Adobe Fonts, then JP fallbacks
- Use 12px radius on recipe cards specifically — it's a brand cue

**Don't**
- Use pure white `#ffffff` for the canvas — the warmth disappears
- Use `font-weight: 700` on headings — Cookpad uses 600 across the system
- Add `palt` — Cookpad does not apply Japanese proportional kerning
- Use square or pill-shaped buttons — 8px is the rule
- Use letter-spacing > 0 on headings — Cookpad's voice is tight, not airy
- Drop the Adobe `noto-sans` reference — the rendered weight differs from system Noto Sans JP

## Agent Prompt Guide

**Bias toward** — warm off-white canvas `#f8f6f2`, near-black `#0f0f0f` ink, single Cookpad Orange accent, semibold (600) headings, `noto-sans` Adobe-Fonts first in the chain, 8px button / 12px card radii, `liga` enabled, soft level-1 card shadow.

**Reject** — pure white canvas, weight-700 headings, `palt` ornament, square or pill buttons, multiple saturated accents on one surface, line-height < 1.6 on body, hairline-only separation against the warm canvas (use a soft shadow as well).
