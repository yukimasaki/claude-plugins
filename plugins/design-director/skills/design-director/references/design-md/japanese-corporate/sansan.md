---
version: alpha
name: Sansan
description: A confident enterprise SaaS aesthetic from a Japanese business-card and contacts platform. Sansan leads with a deep navy (`#042a6d`) for brand surface and a brighter blue (`#2566d4`) for CTAs, both sitting on near-white. Headings are Helvetica-led and large (up to 54.8px display) with weight 700, while body copy stays at 14px to project a working-tool density. The original site sets body line-height to 1.0 — that is intentionally tight for hero metrics and would be unreadable for long copy, so this token set lifts the body floor to a JP-safe 1.6. Mood — confident, professional, navy, enterprise.

colors:
  primary: "#2566d4"
  navy: "#042a6d"
  ink: "#1a1a1a"
  body: "#1a1a1a"
  muted: "#666666"
  disabled: "#999999"
  canvas: "#ffffff"
  surface: "#ffffff"
  surface-soft: "#f5f5f5"
  hairline: "#dddddd"
  hairline-soft: "#eeeeee"
  on-primary: "#ffffff"
  on-navy: "#ffffff"
  success: "#2e8b57"
  warning: "#f5a623"
  error: "#cc0000"

typography:
  display-xl:
    fontFamily: "Inter, Yu Gothic, YuGothic, Noto Sans JP, Hiragino Sans, system-ui, sans-serif"
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  display-lg:
    fontFamily: "Inter, Yu Gothic, YuGothic, Noto Sans JP, Hiragino Sans, system-ui, sans-serif"
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  title-lg:
    fontFamily: "Inter, Yu Gothic, YuGothic, Noto Sans JP, Hiragino Sans, system-ui, sans-serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  title-md:
    fontFamily: "Inter, Yu Gothic, YuGothic, Noto Sans JP, Hiragino Sans, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, Yu Gothic, YuGothic, Noto Sans JP, Hiragino Sans, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, Yu Gothic, YuGothic, Noto Sans JP, Hiragino Sans, system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  caption:
    fontFamily: "Inter, Yu Gothic, YuGothic, Noto Sans JP, Hiragino Sans, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  label:
    fontFamily: "Inter, Yu Gothic, YuGothic, Noto Sans JP, Hiragino Sans, system-ui, sans-serif"
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

Sansan is a Japanese B2B SaaS for business-card management and corporate contacts. The visual posture is "confident enterprise tool" — generous hero scale, deep navy authority on dark backdrops, and a clean working surface in the working areas. The marketing site uses very large display headings (up to 54.8px / 700) over white, with two distinct blues handling brand vs. action.

Mood words — confident, professional, navy, enterprise.

## Colors

Two blues do separate jobs and must not be confused. **Sansan Navy `#042a6d`** is the brand surface — used on full-bleed dark sections, navy banners, and the on-dark variant of CTAs. **Sansan Blue `#2566d4`** carries CTAs, links, and focus on light surfaces. Navy is never used for text against white (the contrast is fine, but it visually fights the action blue).

Body text sits on `#1a1a1a` — slightly off-black so type doesn't feel severe. Muted `#666666` and disabled `#999999` round out the neutral ladder. Surfaces are `#ffffff` page and `#f5f5f5` band; hairlines split between `#dddddd` (default) and `#eeeeee` (lighter card outline).

## Typography

The latin face is Helvetica (the live site uses lowercase `helvetica` first), paired with **Yu Gothic** as the JP face — both `YuGothic` (macOS) and `Yu Gothic` (Windows) appear in the chain. The hybrid stack here puts Inter at the head, then Yu Gothic, with Noto Sans JP and Hiragino as further fallbacks.

The live site sets body `line-height: 1.0`, which is appropriate only for hero numerals and would be unreadable for paragraph copy. This token set lifts the body floor to **1.6** per JP design-director rules; component overrides can drop down to 1.4 for tight metric displays only. Heading line-height is 1.4 throughout. `letterSpacing` is 0 across the board.

## Layout

- 4px-based spacing scale — 4 / 8 / 16 / 24 / 40 / 64
- Container max-width 1200px with 20px horizontal padding
- 12-column grid, 24px gutter
- Touch targets ≥ 44px (WCAG)
- Breakpoints — Mobile ≤ 767, Tablet ≤ 1023, Desktop > 1024

## Elevation & Depth

Three-step shadow ladder. Level 1 (cards, dropdowns): `0 2px 8px rgba(0,0,0,0.08)`. Level 2 (modals, popovers): `0 4px 16px rgba(0,0,0,0.12)`. Level 3 (dialogs, floating panels): `0 8px 32px rgba(0,0,0,0.16)`. The base UI is otherwise flat — most separation comes from hairlines and large vertical spacing.

## Shapes

Border-radius is 4px on buttons and inputs; cards step up to 8px. No pill shapes; no fully square corners. The brand keeps shapes restrained — confidence comes from scale and color, not curvature.

## Components

**Buttons** — Primary fills `#2566d4`, white text, weight 700, 4px radius, 12/32 padding. Secondary is transparent fill with `#2566d4` border and text. Navy variant (for dark sections) fills `#042a6d` with white. Heights run 44–48px on the marketing site.

**Inputs** — White fill, 1px `#dddddd` border, 4px radius, 14px text, 10/14 padding, 44px tall. Focus border switches to `#2566d4`.

**Tables** — Header row on `#f5f5f5`, hairlines `#dddddd`, body rows white. Numeric columns right-aligned. Typical of working-tool density.

**Cards** — White fill, 1px `#eeeeee` border, 8px radius, 24px internal padding, Level 1 shadow.

## Do's and Don'ts

**Do**
- Reserve Sansan Navy `#042a6d` for full-bleed brand surfaces and on-dark CTAs only
- Use Sansan Blue `#2566d4` for every CTA, link, and focus on light surfaces
- Lift body line-height to ≥ 1.6 for any paragraph copy (the upstream 1.0 is metric-only)
- Pair Helvetica-led latin with Yu Gothic for both macOS and Windows JP coverage

**Don't**
- Use Sansan Navy as text on white — it visually fights `#2566d4` action blue
- Use pure `#000000` for body — `#1a1a1a` is the floor
- Apply `line-height: 1.0` to multi-line Japanese text — kanji collide
- Capitalize Helvetica as `Helvetica` if you want pixel-parity with the live site (the upstream uses lowercase)

## Agent Prompt Guide

**Bias toward** — two-blue palette (Navy brand + Action blue), large display headings (40–56px / 700), Helvetica-led latin with Yu Gothic JP, body line-height 1.6, 4px radii, three-step shadow ladder, 14px body density.

**Reject** — pure black text, pill buttons, single-blue palettes (you need both Navy and Action), body line-height below 1.6, negative letter-spacing, mixing Sansan Navy with action blue inside the same component.
