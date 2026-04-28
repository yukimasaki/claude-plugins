---
version: alpha
name: Money Forward
description: A solid, dependable Japanese fintech UI that treats household finance the way an accountant would — with calm density and no flourish. Hiragino Kaku Gothic Pro leads the type stack, the page runs at 14px body for high information density, and a single confident green (`#4db848`) carries the brand without ever shouting. Headings stay at weight 500 medium rather than bold, and surfaces stay near-white with quiet hairline separators. The result reads as "trusted ledger," not "consumer app." Mood — solid, dependable, efficient, understated.

colors:
  primary: "#4db848"
  primary-hover: "#3a9a35"
  ink: "#333333"
  body: "#333333"
  muted: "#666666"
  disabled: "#999999"
  canvas: "#ffffff"
  surface: "#ffffff"
  surface-soft: "#f5f5f5"
  hairline: "#dddddd"
  hairline-soft: "#eeeeee"
  on-primary: "#ffffff"
  success: "#27ae60"
  warning: "#f39c12"
  error: "#e74c3c"

typography:
  display-xl:
    fontFamily: "Inter, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  display-lg:
    fontFamily: "Inter, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  title-lg:
    fontFamily: "Inter, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 17px
    fontWeight: 500
    lineHeight: 1.7
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  caption:
    fontFamily: "Inter, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  label:
    fontFamily: "Inter, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: 0.04em

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
  "5": 32px
  "6": 48px
---

## Overview

Money Forward is a Japanese personal-finance and SaaS suite for budgeting, expense tracking, and corporate accounting. The UI must hold a lot of numbers per screen without ever feeling cramped or panicky. The visual posture is "professional ledger." Headings stay medium-weight, the canvas stays white, and the only saturated color in the room is the brand green CTA.

Mood words — solid, dependable, efficient, understated.

## Colors

The brand green `#4db848` is the single accent. It carries primary CTAs, focus, and the active state on tabs and toggles; on hover it darkens to `#3a9a35`. Everything else is grayscale: ink `#333333` for both headings and body, muted `#666666` for secondary text, disabled `#999999` for placeholders. Hairlines are `#dddddd` between rows and `#eeeeee` for card outlines.

Status colors are warm-saturated rather than neon: error `#e74c3c`, warning `#f39c12`, success `#27ae60`. They appear sparingly — most of the surface area stays neutral.

## Typography

The Japanese face is **Hiragino Kaku Gothic Pro** — the upstream spec leads with the JP face name (`"ヒラギノ角ゴ Pro W3"`), so the hybrid Inter-first stack here is paired with Hiragino Sans first among the JP fallbacks. `letterSpacing` stays at 0 throughout (the live site never tracks); we set it to `0.04em` only on uppercase labels.

`lineHeight` is 1.6 on body — the upstream uses 1.5 (21px / 14px), but the JP design-director floor lifts to 1.6 so kanji at 14px don't crowd. Headings sit at 1.5 minimum. The 14px body is the rem anchor — Money Forward chooses density over warmth, so do not bump body to 16px without reason.

Headings are weight 500 (medium), never 700 (bold). This is the single most important brand rule — bold headings instantly read as "the wrong site."

## Layout

- 4px-based spacing scale — 4 / 8 / 16 / 24 / 32 / 48
- Container max-width 980px with 20px horizontal padding
- 12-column grid, 20px gutter
- Breakpoints — Mobile ≤ 767, Tablet ≤ 1024, Desktop > 1024
- Touch targets ≥ 44px square (WCAG)

## Elevation & Depth

Mostly flat. Level 1 (cards, list rows) uses `0 1px 3px rgba(0,0,0,0.08)`. Level 2 (dropdowns, popovers) uses `0 2px 8px rgba(0,0,0,0.12)`. Level 3 (modals) uses `0 4px 16px rgba(0,0,0,0.15)`. Most of the UI separates surfaces with hairlines instead of stacking shadows.

## Shapes

Border-radius is uniformly 4px on buttons, inputs, and small surfaces. Cards step up to 4–8px. No pill shapes; no fully square corners. The brand intentionally avoids playful curvature.

## Components

**Buttons** — Primary fills `#4db848`, white text, weight 500, 4px radius, 8/24 padding. Secondary is transparent fill with 1px `#dddddd` border and `#333333` text. Hover darkens green to `#3a9a35`.

**Inputs** — White fill, 1px `#dddddd` border, 4px radius, 14px text, 8/12 padding, 36px tall. Focus border switches to `#4db848` (no outer ring).

**Tables** — Header row on `#f5f5f5`, body rows on `#ffffff`, hairlines `#dddddd`. Numeric columns right-aligned. Row height stays compact.

**Cards** — White fill, `#eeeeee` 1px border, 4px radius, 20px internal padding, single Level 1 shadow.

## Do's and Don'ts

**Do**
- Use Hiragino Kaku Gothic Pro at the head of the JP fallback chain
- Hold body line-height ≥ 1.6 so 14px kanji breathe
- Keep heading weight at 500; reserve 700 only for inline emphasis on body
- Maintain 14px body density — this is the brand's information posture

**Don't**
- Apply `palt` / proportional kerning — the brand intentionally runs flat metrics
- Use bold (700) on section headings — instantly reads as "wrong site"
- Drop body line-height below 1.6 (kanji collide at 14px)
- Use a single-font fallback chain — Windows environments need Meiryo / sans-serif

## Agent Prompt Guide

**Bias toward** — single-green primary, weight 500 medium headings, 4px radii, hairline-separated tables, 14px body, line-height 1.6, near-white canvas, near-zero letter-spacing.

**Reject** — bold (700) headings, neon status colors, pill buttons, heavy drop-shadows, `palt` kerning, negative letter-spacing, two saturated accents on the same view.
