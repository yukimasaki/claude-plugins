---
version: alpha
name: Toyota
description: A premium Japanese automaker site that pairs Apple-system fonts with a strict letter-spacing rule for refined Japanese rendering. Toyota.jp leads with `SF Pro` for Latin and `Hiragino Kaku Gothic ProN` for kanji, applies a 0.04em letter-spacing globally, and chooses an off-black `#222222` for ink rather than pure black to keep the type from feeling severe. The signature Toyota Red (`#eb0a1e`) is reserved for logo and emphasis surfaces — never for body text or large flat backgrounds. Layout is image-led for vehicle pages and information-dense for news. Mood — premium, refined, trustworthy, precise.

colors:
  primary: "#222222"
  brand-red: "#eb0a1e"
  brand-red-hover: "#cc0000"
  ink: "#222222"
  body: "#222222"
  muted: "#666666"
  disabled: "#999999"
  canvas: "#ffffff"
  surface: "#ffffff"
  surface-soft: "#f5f5f5"
  hairline: "#dddddd"
  hairline-soft: "#eeeeee"
  on-primary: "#ffffff"
  on-brand: "#ffffff"
  success: "#388e3c"
  warning: "#f9a825"
  error: "#d32f2f"

typography:
  display-xl:
    fontFamily: "SF Pro, Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.04em
  display-lg:
    fontFamily: "SF Pro, Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.04em
  title-lg:
    fontFamily: "SF Pro, Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.04em
  title-md:
    fontFamily: "SF Pro, Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.04em
  body-md:
    fontFamily: "SF Pro, Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0.04em
  body-sm:
    fontFamily: "SF Pro, Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0.04em
  caption:
    fontFamily: "SF Pro, Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0.04em
  label:
    fontFamily: "SF Pro, Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: 0.1em

rounded:
  sm: 4px
  md: 4px
  lg: 8px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 16px
  "4": 24px
  "5": 40px
  "6": 64px
---

## Overview

Toyota's corporate site is a premium-feeling automaker presence — vehicle hero photography over generous white surfaces, with a typographic system that treats type as part of the product polish rather than UI chrome. The design posture is "Apple-adjacent restraint with Japanese-engineering precision."

Mood words — premium, refined, trustworthy, precise.

## Colors

Ink is intentionally `#222222`, not `#000000` — the off-black keeps long Japanese sentences from feeling oppressive. Body text, secondary text (`#666666`), and disabled (`#999999`) form a neutral ladder. Surfaces stay near-white: page `#ffffff`, soft band `#f5f5f5`, hairlines `#dddddd` (default) and `#eeeeee` (cards).

**Toyota Red `#eb0a1e`** is the signature accent. It appears on the logo, key emphasis surfaces, and brand-led CTAs. It is *not* used for body text, large filled backgrounds, or generic action buttons — those default to ink-filled `#222222` instead. Status colors are warm-saturated (error `#d32f2f`, warning `#f9a825`, success `#388e3c`) and appear sparingly.

## Typography

The Latin face is **SF Pro** (Apple's system font), with `-apple-system` and `system-ui` as direct fallbacks. The Japanese face is **Hiragino Kaku Gothic ProN**, with Meiryo as Windows fallback. The hybrid stack here keeps SF Pro at the head, falling through Inter for non-Apple environments, then into the JP cascade.

Toyota's signature typographic move is `letter-spacing: 0.04em` applied globally — this slightly opens up kanji and katakana for a more refined feel, and it carries through every level of the type ladder. Body line-height is 1.5 in upstream spec but lifted to 1.6 here for the JP design-director floor. Heading line-height is 1.5 (upstream) lifted to 1.5–1.6 across the board.

The 40px display is reserved for vehicle name headings (e.g. "bZ4X"). Section headings sit at 20–28px. The 16px body is the rem anchor.

## Layout

- 4px-based spacing scale — 4 / 8 / 16 / 24 / 40 / 64
- Container max-width 1200px with 20px horizontal padding
- 12-column grid, 20px gutter
- Touch targets ≥ 44px (WCAG)
- Breakpoints — Mobile ≤ 767, Tablet ≤ 1024, Desktop > 1024

## Elevation & Depth

Three-step ladder. Level 1: `0 2px 8px rgba(0,0,0,0.08)` — vehicle thumbnail cards, news cards. Level 2: `0 4px 16px rgba(0,0,0,0.12)` — dropdowns, popovers. Level 3: `0 8px 32px rgba(0,0,0,0.16)` — modals, dialogs. Most surfaces are flat with hairlines; shadows are reserved for genuine elevation moments.

## Shapes

Border-radius is restrained: 4px on buttons and inputs, 8px on cards. No pill buttons, no fully square corners. The brand reads "precise machined component," not "playful consumer app."

## Components

**Buttons** — Primary fills `#222222` (ink), white text, weight 700, 4px radius, 12/32 padding. Secondary uses transparent fill with `#222222` border and text. Brand variant fills `#eb0a1e` Toyota Red with white — used for signature CTAs only.

**Inputs** — White fill, 1px `#dddddd` border, 4px radius, 16px text, 10/12 padding, 44px tall. Focus border switches to `#222222`.

**Cards** — White fill, 1px `#eeeeee` border, 8px radius, 24px internal padding, Level 1 shadow. Vehicle thumbnails use this card pattern with full-bleed imagery on top.

**Heading scale** — vehicle names use display-xl (40px / 700 / lh 1.5), section headings use 20–28px / 700, body sits at 16px / 400 / lh 1.6 with `0.04em` letter-spacing inherited.

## Do's and Don'ts

**Do**
- Apply `letter-spacing: 0.04em` globally — this is the brand's signature typographic move
- Use ink `#222222`, not pure `#000000` — the off-black is intentional
- Reserve Toyota Red `#eb0a1e` for logo, signature CTAs, and emphasis surfaces only
- Lead the Latin chain with SF Pro / system-ui for Apple-environment quality

**Don't**
- Use pure `#000000` text — too severe for the brand
- Use Toyota Red as a body text color or as a flat large-area background
- Set `letter-spacing` to 0 — drops the brand's signature refinement
- Drop body line-height below 1.6 — kanji crowd at 16px otherwise

## Agent Prompt Guide

**Bias toward** — SF Pro Latin + Hiragino ProN JP stack, ink `#222222` (not pure black), `letter-spacing: 0.04em` globally, 4px button radii, restrained palette with Toyota Red as accent only, large vehicle-name display (40px / 700), 16px body at line-height 1.6.

**Reject** — pure black text, pill buttons, Toyota Red on body or large backgrounds, zero letter-spacing, line-height below 1.6, garish status colors, drop-shadow heavy cards.
