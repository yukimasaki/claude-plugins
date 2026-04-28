---
version: alpha
name: MUJI
description: MUJI's online store is the digital expression of the brand's "no-brand quality goods" philosophy — ornament removed, whitespace doing the talking, and a single warm kinari (unbleached) tone replacing decoration. The palette is built from kinari `#f4eede` and beige `#e0ceaa` against off-black ink `#3c3c43`, with the deep MUJI Red `#7f0019` reserved for logo and rare accents. Body type runs at 16px with line-height 1.6 across nearly every element to enforce a calm, even rhythm. Mood — quiet, restrained, natural, unadorned.

colors:
  primary: "#3c3c43"
  brand-red: "#7f0019"
  accent-red: "#dd0c14"
  kinari: "#f4eede"
  beige: "#e0ceaa"
  ink: "#3c3c43"
  body: "#3c3c43"
  muted: "#6d6d72"
  subtle: "#76767b"
  disabled: "#9d9da0"
  canvas: "#ffffff"
  surface: "#ffffff"
  surface-soft: "#f5f5f5"
  hairline: "#d8d8d9"
  hairline-light: "#ebebec"
  on-primary: "#ffffff"
  success: "#43a047"
  warning: "#f9a825"
  error: "#dd0c14"

typography:
  display-xl:
    fontFamily: "Helvetica Neue, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: 0
  display-lg:
    fontFamily: "Helvetica Neue, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 26px
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: 0
  title-lg:
    fontFamily: "Helvetica Neue, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: 0.1em
  body-md:
    fontFamily: "Helvetica Neue, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "Helvetica Neue, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  caption:
    fontFamily: "Helvetica Neue, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  label:
    fontFamily: "Helvetica Neue, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: 0.04em

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
  "5": 32px
  "6": 48px
---

## Overview

MUJI's online store mirrors the physical retail philosophy: products on plain backgrounds, generous breathing room, and almost no decorative chrome. The palette is anchored by kinari (unbleached cream `#f4eede`) and beige (`#e0ceaa`) — both used sparingly as section backgrounds rather than UI accents. Ink is `#3c3c43` (a soft off-black, never pure `#000`), and the rest of the neutral scale is a 12-step warm gray ramp. Brand red `#7f0019` exists but is held in reserve for the logo and high-stakes moments only.

Mood words — quiet, restrained, natural, unadorned.

## Colors

The neutral system carries the entire interface. Text Primary `#3c3c43` does double duty as the primary CTA fill — that's how restrained the brand is. Background is plain white `#ffffff`; section backgrounds switch to `#f5f5f5` or kinari `#f4eede` for warmth. Hairlines use `#d8d8d9` (medium) and `#ebebec` (light) to imply structure without drawing it.

MUJI Red `#7f0019` is a deep wine red, not a vivid red, and is used only on logo / rare accents. The brighter `#dd0c14` is reserved for sale tags, errors, and limited "new" badges.

## Typography

The font chain is **`Helvetica Neue, Arial` first, then JP fallbacks** — Latin glyphs lead because that's the brand's preferred Latin face, and Japanese resolves through Noto Sans JP / Hiragino Kaku Gothic ProN / Meiryo. No Mincho. No serif. No `palt`.

The signature decision is line-height: nearly every text role runs at 1.6, including most headings. That gives MUJI its even, contemplative rhythm. The one exception is h3-style titles, which use tight line-height 1.15 with wide letter-spacing (~0.1em) to create a quiet contrast — represented here as `title-lg`. Body weight is 400; headings step up to 700 with no intermediate semibold.

## Layout

- 12-step spacing scale from 4px (XXXXS) through 96px (XXXXL)
- Container max-width approx 1120px, horizontal padding 16–32px
- Product grid 2–4 columns with 16–24px gutter
- Touch targets ≥ 44px square per WCAG
- Breakpoints — Mobile ≤ 767px, Tablet ≤ 1024px, Desktop > 1024px

## Elevation & Depth

Effectively flat. Cards have no shadow — they're separated by the lightest possible hairline (`#ebebec`). Hover may add an extremely subtle level-1 lift (`0 1px 2px rgba(0,0,0,0.08)`); dropdowns use level-2 (`0 2px 8px rgba(0,0,0,0.1)`). Anything heavier than this reads as "not MUJI".

## Shapes

Border radius is 4px on buttons and tags. Inputs and cards use 0px — sharp corners reinforce the brand's clean-line industrial-design heritage. No pill shapes, no large radii, no rounded hero panels.

## Components

**Buttons** — Primary fills `#3c3c43` (the body text color) with white text, 4px radius, 12px / weight 700. Secondary is transparent with 1px `#d8d8d9` border and `#3c3c43` text. Brand Accent fills `#7f0019` and is reserved for special promotions only.

**Inputs** — White fill, 1px `#d8d8d9` border, **0px radius** (a deliberate choice), 16px text, 8/12 padding. Focus thickens the border to `#3c3c43`.

**Cards** — White fill, 1px `#ebebec` border, 0px radius, 16px padding, no shadow.

**Section panels** — Kinari `#f4eede` for hero/feature sections, beige `#e0ceaa` for warm-tone callouts, `#f5f5f5` for plain alternating bands.

## Do's and Don'ts

**Do**
- Use ink `#3c3c43` for text, never pure `#000`
- Hold body line-height at 1.6 across the board for the calm MUJI rhythm
- Use kinari `#f4eede` and beige `#e0ceaa` as section backgrounds for warmth
- Keep buttons at 4px radius and inputs at 0px
- Use the 12-step spacing scale consistently
- Lead the font stack with Helvetica Neue / Arial, then JP fallbacks

**Don't**
- Use MUJI Red `#7f0019` as a wide-area background — it's a logo accent only
- Apply `palt` — MUJI prefers the unkerned, plain composition
- Use border-radius ≥ 8px — large radii feel un-MUJI
- Use pure black `#000` for body text or pure black/saturated drop shadows
- Add multiple saturated accents — the design earns its warmth from neutrals, not color

## Agent Prompt Guide

**Bias toward** — kinari + beige + warm-gray neutrals, off-black `#3c3c43` ink, single muted CTA color, 4px / 0px radii, hairline-only separation, line-height 1.6 across roles, Helvetica Neue + Noto Sans JP chain, generous whitespace.

**Reject** — pure black/white-only palettes, large rounded corners, decorative shadows or gradients, `palt` and other typographic ornaments, saturated brand red as a primary fill, line-height < 1.6 on body.
