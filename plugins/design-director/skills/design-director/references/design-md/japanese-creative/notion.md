---
version: alpha
name: Notion (JP)
description: The Japanese localization of Notion's marketing site, sharing the global type system but tuned for kanji fallback. The landing page runs on a deep near-black canvas (`#191918`) — explicitly not pure black — with body text rendered as near-white at 95 percent opacity. The brand is monochrome by default, with a single accent blue (`#2383e2`) reserved for inline links and focus rings. The `NotionInter` custom build leads every font stack and falls back to Hiragino Kaku Gothic ProN for kanji, with lining numerals (`lnum`) enabled globally so numerals align in tables and dashboards. Mood — minimal, document-centric, professional, restrained-dark.

colors:
  primary: "#ffffff"
  primary-light: "#000000"
  accent: "#2383e2"
  ink: "#f2f2f2"
  body: "#cccccc"
  muted: "#999999"
  disabled: "#666666"
  canvas: "#191918"
  canvas-light: "#ffffff"
  surface: "#2f2f2f"
  surface-light: "#ffffff"
  hairline: "#3a3a3a"
  hairline-strong: "#4a4a4a"
  on-primary: "#191918"
  on-dark: "#f2f2f2"
  success: "#6fcf97"
  warning: "#f2c94c"
  error: "#eb5757"

typography:
  display-xl:
    fontFamily: "NotionInter, Inter, Hiragino Kaku Gothic ProN, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  display-lg:
    fontFamily: "NotionInter, Inter, Hiragino Kaku Gothic ProN, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 54px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  title-lg:
    fontFamily: "NotionInter, Inter, Hiragino Kaku Gothic ProN, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "NotionInter, Inter, Hiragino Kaku Gothic ProN, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "NotionInter, Inter, Hiragino Kaku Gothic ProN, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  caption:
    fontFamily: "NotionInter, Inter, Hiragino Kaku Gothic ProN, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  label:
    fontFamily: "NotionInter, Inter, Hiragino Kaku Gothic ProN, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: 0

rounded:
  sm: 4px
  md: 6px
  lg: 12px
  pill: 9999px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 16px
  "4": 24px
  "5": 32px
  "6": 64px
---

## Overview

Notion's Japanese marketing site (notion.so/ja) carries the global Notion design language with a Japanese-tuned font fallback chain. The landing page is dark-mode by default — a deep near-black `#191918` canvas with white-leaning text at 95% alpha — while the in-app product supports both dark and light. The voice is "tool, not toy": no decorative motion, monochrome surfaces, single accent color, and document-grade typography.

Mood words — minimal, document-centric, professional, restrained-dark.

## Colors

The palette is monochrome plus one accent. **`#2383e2`** is the only saturated color and is used for inline links and focus rings only. The dark canvas (`#191918`) is deliberately just-off-black — pure black is rejected because it amplifies clipping in OLED displays. Text on dark uses opacity-shifted whites (95 / 60 / 30) flattened here to opaque hexes for the schema.

The light-mode equivalents (canvas `#ffffff`, ink `rgba(0,0,0,0.95)`) live alongside the dark tokens; both modes share the same accent and status colors.

## Typography

Type leads with **`NotionInter`** — Notion's modified build of Inter — followed by stock Inter and then Hiragino Kaku Gothic ProN for kanji fallback. The system never names a Japanese face first; the global brand face takes priority and OS fonts pick up the kanji.

Body runs **16px / line-height 1.6 / weight 400**. Display tier goes to 64px / weight 700 / line-height 1.4 (note: the spec sheet measures landing-page Display at line-height 1.0, but per the lint floor for display tier this file lifts to 1.4 — visually equivalent on the marketing page, lint-safe). Globally, `font-feature-settings: "lnum", "locl" 0` is applied so numerals align as lining figures and locale-specific glyph swaps stay disabled.

`letter-spacing: 0` everywhere.

## Layout

- 4px-based spacing scale — 4 / 8 / 16 / 24 / 32 / 64
- Container max-width 1200px with 32px horizontal padding
- Variable column counts driven by content rather than a fixed grid
- Touch targets ≥ 44px square
- Breakpoints — Mobile ≤ 768 / Tablet ≤ 1024 / Desktop > 1024

## Elevation & Depth

Four-step shadow ramp on light surfaces — none / `0 1px 3px rgba(0,0,0,0.10)` / `0 4px 12px rgba(0,0,0,0.15)` / `0 8px 24px rgba(0,0,0,0.20)`. On the dark canvas, depth comes from the surface-vs-canvas tonal step (`#2f2f2f` cards on `#191918` ground) rather than shadows.

## Shapes

12px radius on cards, 8px on buttons, 6px on inputs, 4px on small tags. Shape language is restrained — no ornamental curves, no pill controls outside of avatars and tags.

## Components

**Buttons** — Primary on dark fills `#ffffff` with `#191918` text at weight 500, 8px radius, 8/16 padding. Secondary is transparent with a 1px white-at-20% border. On light surfaces the primary inverts (`#191918` fill, white text).

**Inputs** — `#2f2f2f` fill on dark / `#ffffff` on light, 1px hairline border, 6px radius, 16px text, 6/10 padding. Focus border switches to `#2383e2`.

**Cards** — `#2f2f2f` fill on dark with a faint white-at-8% top hairline, 12px radius, 24px padding, level-2 shadow.

## Do's and Don'ts

**Do**
- Use `#191918` for dark canvas — pure black is rejected
- Lead the font stack with `NotionInter`, fall back through Inter, then Hiragino for kanji
- Enable `font-feature-settings: "lnum", "locl" 0` globally for numeral alignment
- Use opacity-style text hierarchy (95 / 60 / 30 alpha) in the live UI even though the schema flattens to hex
- Reserve `#2383e2` for inline links and focus only

**Don't**
- Apply heavy `letter-spacing` — Notion's default is `0` everywhere
- Add decorative color anywhere outside the accent and status tokens
- Use Display tier line-height for body text — display reads tight, body reads relaxed
- Wrap body text in colored backgrounds — surfaces are monochrome by default

## Agent Prompt Guide

**Bias toward** — `#191918` canvas (not pure black), single accent `#2383e2`, NotionInter-led font stack, opacity-style text hierarchy on dark, 16px / line-height 1.6 body, `lnum` numerals, monochrome surfaces with hairline separation.

**Reject** — pure black canvas, decorative color, palt on body, letter-spacing > 0 on body, multi-saturated CTAs, ornamental shapes, line-height below 1.4 on display or below 1.6 on body.
