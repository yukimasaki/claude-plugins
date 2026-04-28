---
version: alpha
name: Rakuten Ichiba
description: A Japanese e-commerce mall built around maximum information density. Rakuten Crimson (`#bf0000`) saturates the chrome — header, sale prices, primary CTAs — while Meiryo-led type sits at a tight 12px body so every viewport inch carries product, price, point promo, or genre link. The palette is small and the geometry is rectangular; flat hairline borders (`#dddddd`) do the work that drop shadows would do on a Western marketplace. Mood — dense, commercial, lively, utilitarian.

colors:
  primary: "#bf0000"
  primary-hover: "#990000"
  accent: "#ff8c00"
  ink: "#333333"
  body: "#666666"
  muted: "#999999"
  disabled: "#cccccc"
  canvas: "#ffffff"
  surface: "#ffffff"
  surface-soft: "#f6f6f6"
  hairline: "#dddddd"
  hairline-light: "#eeeeee"
  on-primary: "#ffffff"
  success: "#008000"
  warning: "#ff8c00"
  error: "#bf0000"

typography:
  display-xl:
    fontFamily: "Inter, Meiryo, Hiragino Kaku Gothic ProN, Noto Sans JP, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  display-lg:
    fontFamily: "Inter, Meiryo, Hiragino Kaku Gothic ProN, Noto Sans JP, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  title-lg:
    fontFamily: "Inter, Meiryo, Hiragino Kaku Gothic ProN, Noto Sans JP, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, Meiryo, Hiragino Kaku Gothic ProN, Noto Sans JP, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, Meiryo, Hiragino Kaku Gothic ProN, Noto Sans JP, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  caption:
    fontFamily: "Inter, Meiryo, Hiragino Kaku Gothic ProN, Noto Sans JP, system-ui, sans-serif"
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  label:
    fontFamily: "Inter, Meiryo, Hiragino Kaku Gothic ProN, Noto Sans JP, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: 0

rounded:
  none: 0px
  sm: 2px
  md: 4px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 12px
  "4": 16px
  "5": 24px
  "6": 32px
---

## Overview

Rakuten Ichiba is Japan's largest virtual shopping mall. The UI's job is to surface as much merchandise as possible above the fold — banners, ranking lists, recently-viewed strips, point promos, genre nav — so the layout chooses information density over breathing room. Pure flat geometry, hairline dividers, no rounded "card" theater. Body text is intentionally smaller (the live site runs 12px, with 1.1 line-height); we lift line-height to 1.6 here as a JP-design-director floor since cramped kanji is unsafe outside of the original measurable.

Mood words — dense, commercial, lively, utilitarian.

## Colors

**Rakuten Crimson `#bf0000`** is the brand's whole identity — header background, primary CTA, sale-price text, focus border. It pulls double duty as the danger / sale color; the team treats "discount" and "buy" as the same emotional signal. The `primary-hover` variant `#990000` is the only documented state.

**Orange `#ff8c00`** is reserved for point-incentive badges and warning notices. **Green `#008000`** is reserved for stock-in / shipping-included signals.

The neutral ladder is grey-on-grey: `#333333` for headings, `#666666` for body copy, `#999999` for captions. Page canvas is `#ffffff`, alternating rows / section panels lift to `#f6f6f6`. Borders use `#dddddd` at full strength and `#eeeeee` for sub-dividers.

## Typography

The face is **Meiryo** (メイリオ), the legacy Windows UI font, with Hiragino Kaku Gothic ProN as the macOS fallback. The chain is `latin → Meiryo → Hiragino Kaku Gothic ProN → Noto Sans JP → system-ui`. Letter-spacing is 0 throughout — negative spacing fuses kanji, which is why Rakuten never sets it.

Type ladder — 10 / 12 / 14 / 16 / 20 / 24 px. Body sits at 12px (`body-sm`); price text uses 14px / 700; sale price uses 16px / 700 in `#bf0000`. The 16px slot is the section-heading anchor (`title-lg`), not the body anchor.

## Layout

- 4-based spacing scale — 4 / 8 / 12 / 16 / 24 / 32
- Container max-width 1120px, no horizontal page padding
- Product grid is 4–6 columns at desktop with 8–12px gutters
- Breakpoints — Mobile ≤ 767px, Tablet ≤ 1023px, Desktop > 1023px

## Elevation & Depth

Almost entirely flat. Element separation is done with `#dddddd` borders, not shadow. Dropdowns get a level-1 shadow (`0 1px 3px rgba(0,0,0,0.12)` in source); modals get level-2. Cards never lift.

## Shapes

Border radius is 4px on buttons and inputs, 0px on product cards and tables. No pill shapes. Rakuten's visual grammar is rectangular by intention.

## Components

**Buttons** — Primary fills `#bf0000` with white text, weight 700, 4px radius, 8/16 padding. Secondary is white fill with a 2px `#bf0000` border and `#bf0000` text. Point-promo button fills `#ff8c00`.

**Inputs** — White fill, 1px `#cccccc` border, 4px radius, 14px text, 6/8 padding, 32px tall. Focus border swaps to 1px `#bf0000`.

**Product cards** — White fill, 1px `#dddddd` border, 0px radius, 8px padding, no shadow. Densely packed with thumbnail, title, price, point badge, shipping flag.

## Do's and Don'ts

**Do**
- Lead the font stack with Meiryo, not a Western face
- Reserve `#bf0000` for sale prices, primary CTAs, and brand chrome
- Reserve `#ff8c00` for point-promo badges
- Use `#dddddd` hairlines to divide instead of shadow stacks
- Keep cards rectangular (0px radius)

**Don't**
- Add pill buttons or large radii — Rakuten geometry is rectangular
- Stack drop shadows on product cards
- Lead the font chain with a Western face when the content is JP-first
- Drop body line-height below 1.6 in this token system
- Invent a second saturated accent — Crimson + Orange + Green is the whole scheme

## Agent Prompt Guide

**Bias toward** — Rakuten Crimson primary, Meiryo-led JP-first font stack, 4px radius (or 0px on cards), hairline `#dddddd` borders, dense product grids, multi-row promo banners, alternating `#f6f6f6` row stripes.

**Reject** — pastel accent colors, drop-shadow cards, pill buttons, Western-face-first font chains, body line-height < 1.6, gradients on CTAs.
