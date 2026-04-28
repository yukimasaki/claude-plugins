---
version: alpha
name: SmartHR
description: A Japanese B2B SaaS work UI that builds trust through restraint. Warm-gray (Stone scale) neutrals replace pure black-and-white, a single saturated blue (`#0077c7`) carries every primary action, and the brand teal (`#00c4cc`) is reserved for illustrations and charts where it cannot collapse against text. Information density is high — tables, forms, employee records — so the type system runs at 16px body with line-height 1.6 and Yu Gothic / Noto Sans JP for legible kanji. Mood — trustworthy, accessible, neutral, efficient.

colors:
  primary: "#0077c7"
  primary-hover: "#005ea6"
  brand: "#00c4cc"
  link: "#0071c1"
  accent: "#ff9900"
  ink: "#23221e"
  body: "#4e4c49"
  muted: "#706d65"
  disabled: "#c1bdb7"
  canvas: "#f8f7f6"
  surface: "#ffffff"
  surface-soft: "#f2f1f0"
  surface-strong: "#edebe8"
  hairline: "#d6d3d0"
  hairline-strong: "#aaa69f"
  on-primary: "#ffffff"
  success: "#4bb47d"
  warning: "#ffcc17"
  error: "#e01e5a"

typography:
  display-xl:
    fontFamily: "Inter, AdjustedYuGothic, Yu Gothic, YuGothic, Noto Sans JP, Hiragino Sans, system-ui, sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  display-lg:
    fontFamily: "Inter, AdjustedYuGothic, Yu Gothic, YuGothic, Noto Sans JP, Hiragino Sans, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  title-lg:
    fontFamily: "Inter, AdjustedYuGothic, Yu Gothic, YuGothic, Noto Sans JP, Hiragino Sans, system-ui, sans-serif"
    fontSize: 19.2px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, AdjustedYuGothic, Yu Gothic, YuGothic, Noto Sans JP, Hiragino Sans, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, AdjustedYuGothic, Yu Gothic, YuGothic, Noto Sans JP, Hiragino Sans, system-ui, sans-serif"
    fontSize: 13.7px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  caption:
    fontFamily: "Inter, AdjustedYuGothic, Yu Gothic, YuGothic, Noto Sans JP, Hiragino Sans, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  label:
    fontFamily: "Inter, AdjustedYuGothic, Yu Gothic, YuGothic, Noto Sans JP, Hiragino Sans, system-ui, sans-serif"
    fontSize: 10.7px
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: 0.1em

rounded:
  none: 0px
  sm: 4px
  md: 6px
  lg: 8px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 16px
  "4": 24px
  "5": 32px
  "6": 40px
---

## Overview

SmartHR is a Japanese B2B SaaS for HR / labor administration. The UI must carry dense data — employees, payroll, mynumber records, leave balances — without ever feeling cold or hostile. The visual posture is "trustworthy office tool, not consumer SaaS." Stone-scale warm grays replace neutral grays, the canvas (`#f8f7f6`) is just-off-white, and ink (`#23221e`) is just-off-black. Pure black and pure gray are explicitly avoided.

Mood words — trustworthy, accessible, neutral, efficient.

## Colors

Two blues do different jobs and must not be confused. **Brand teal `#00c4cc`** is for the SmartHR logo, illustrations, and chart fills only — it fails contrast on white text and is banned from UI controls. **Product blue `#0077c7`** carries every primary button, focus ring, and active tab. **Link blue `#0071c1`** is reserved for inline text links so they read as "link" not "button."

The Stone scale (`#f8f7f6` / `#edebe8` / `#aaa69f` / `#4e4c49`) is the entire neutral palette. Status colors are dialed-down rather than neon: error `#e01e5a`, warning `#ffcc17`, success `#4bb47d`. Charts use a fixed 9-color rotation starting from `#00c4cc`.

## Typography

The Japanese face is **Yu Gothic** (游ゴシック), wrapped in an `AdjustedYuGothic` `@font-face` so Windows can map Medium → 400 (otherwise Windows renders it spider-thin):

```css
@font-face { font-family: AdjustedYuGothic; font-weight: 400; src: local("Yu Gothic Medium"); }
@font-face { font-family: AdjustedYuGothic; font-weight: 700; src: local("Yu Gothic Bold"); }
```

The `font-family` chain is **latin face → AdjustedYuGothic → Yu Gothic → Noto Sans JP → Hiragino Sans → system-ui**. Body line-height is 1.6 (the brand spec says 1.5 but kanji at that ratio reads cramped — JP design-director floor lifts to 1.6). letter-spacing is 0 throughout; never negative, since negative spacing fuses kanji.

Type ladder — 10.7 / 12 / 13.7 / 16 / 19.2 / 24 / 32 px. The 16px body is the rem anchor.

## Layout

- 8px-based spacing scale — 4 / 8 / 16 / 24 / 32 / 40
- Product UI is full-width with a left sidebar; corporate site uses a max-width container
- Touch targets ≥ 44px square
- Breakpoints — SP ≤ 599px, Tablet 600–959px, Desktop ≥ 960px

## Elevation & Depth

Mostly flat. Cards and dropdowns use a level-1 shadow (`0 2px 4px rgba(0,0,0,0.10)`); modals and dialogs use level-2 (`0 4px 8px rgba(0,0,0,0.15)`). The base UI relies on hairline borders (`#d6d3d0`) for separation rather than shadow stacks.

## Shapes

Border radius is 6px on buttons and inputs, 4px on tags / badges, 0px on tables. No pill shapes — SmartHR avoids consumer-app curvature.

## Components

**Buttons** — Primary fills `#0077c7` with white text, weight 700, 6px radius, 8/16 padding. Secondary is transparent fill with 1px `#0077c7` border + `#0077c7` text. Danger fills `#e01e5a`.

**Inputs** — White fill, 1px `#d6d3d0` border, 6px radius, 16px text, 8/12 padding. Focus ring is 2px `#0077c7` (border thickens, no outer ring).

**Tables** — Header row on `#edebe8`, body rows on `#ffffff`, alternating rows on `#f8f7f6` (COLUMN token). Bulk-action toolbar fills `#d6d3d0`. Borders are 1px `#d6d3d0` between rows.

## Do's and Don'ts

**Do**
- Use `AdjustedYuGothic` `@font-face` shim on Windows or the type will render too light
- Use Stone-scale warm grays — never `#808080` or pure-gray neutrals
- Reserve `#00c4cc` for brand surfaces (logo, hero illustration, chart fills) only
- Keep body line-height at 1.6 minimum for kanji legibility

**Don't**
- Use brand teal `#00c4cc` on text or small UI controls (fails contrast on white)
- Mix `#0077c7` and `#0071c1` interchangeably — `#0077c7` is for actions, `#0071c1` is for inline links
- Use pill-shaped buttons or heavy drop shadows
- Set `font-weight: 400` on Yu Gothic without the `AdjustedYuGothic` mapping

## Agent Prompt Guide

**Bias toward** — Stone-scale warm grays, single product-blue accent, 6px radius, hairline borders, dense tables, sidebar shell, 16px / line-height 1.6 body, Yu Gothic + Noto Sans JP fallback chain.

**Reject** — pure-gray neutrals, brand-teal text, pill buttons, drop-shadow cards, two saturated accents on the same surface, line-height < 1.6 on body.
