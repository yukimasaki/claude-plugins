---
version: alpha
name: pixiv
description: A Japanese illustration community where the gallery grid is the product. Pixiv Blue (`#0096fa`) carries every CTA and link, hot pink (`#ff4060`) is reserved for likes and bookmarks, and the entire chrome runs on a system-ui font stack so first paint stays fast on slow networks. The shell is a soft grey canvas (`#eeeeee`) with white card surfaces, organized into thumbnail grids that auto-fill from 2 to 6 columns. Mood — clean, gallery-first, systematic, lightweight.

colors:
  primary: "#0096fa"
  primary-hover: "#0069b5"
  ink: "#222222"
  body: "#464a4d"
  muted: "#8c8c8c"
  disabled: "#b8b8b8"
  canvas: "#eeeeee"
  surface: "#ffffff"
  surface-elevated: "#ffffff"
  hairline: "#d6d6d6"
  on-primary: "#ffffff"
  like: "#ff4060"
  success: "#00c853"
  warning: "#f5a623"
  error: "#ff0000"

typography:
  display-xl:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  display-lg:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  title-lg:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  caption:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  label:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: 0

rounded:
  sm: 4px
  md: 8px
  pill: 20px

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

pixiv is a Japanese illustrator community whose UI is built around two surfaces: a dense, scrolling thumbnail grid for discovery, and a generous artwork-detail page for viewing. The chrome stays out of the way — system-ui fonts, soft-grey canvas, thin borders, restrained accent — because the artwork is the content. The product avoids Web-font loading on first paint to keep the gallery interactive immediately on slow connections.

Mood words — clean, gallery-first, systematic, lightweight.

## Colors

**pixiv Blue `#0096fa`** is the only saturated color in the chrome. It carries primary CTAs, links, focus states, and active-tab indicators. Its hover variant is the deeper `#0069b5`.

**Heart Pink `#ff4060`** is reserved for the like / bookmark control — it signals affection, never status. The bookmark button is a 20px-radius pill with a `#ff4060` border and matching icon, never a solid fill.

The neutral ladder is the "charcoal" scale: `#464a4d` for body, `#8c8c8c` for captions, `#b8b8b8` for disabled, `#d6d6d6` for borders. Page canvas is `#eeeeee` (intentionally not pure white — the soft grey lets thumbnails breathe), card surfaces are `#ffffff`. Pure black is forbidden; ink runs at `#222222` at most.

## Typography

The font chain leads with **system-ui** in the live site to avoid Web-font cost; we substitute Inter for Latin and Noto Sans JP for kanji here so the design system is reproducible cross-platform. The chain is `Inter → Noto Sans JP → Hiragino Sans → Yu Gothic → system-ui`.

Type ladder — 10 / 12 / 14 / 16 / 22 / 28 px. Body sits at 14px (`body-md`), captions at 12px, and minimum text at 10px. Line-height stays at 1.6 minimum on body; 1.4 on display headings. Letter-spacing is 0 — pixiv never adjusts kerning, leaning on the system fonts' defaults.

## Layout

- 4-based spacing scale — 4 / 8 / 12 / 16 / 24 / 32
- Container max-width 1224px with 16px horizontal padding
- Thumbnail grid uses `auto-fill, minmax(...)` and runs 2 to 6 columns
- Gutter 12 to 24px depending on viewport
- Breakpoints — Mobile ≤ 767px, Tablet ≤ 1023px, Desktop > 1023px

## Elevation & Depth

Light shadow stack. Cards float on a soft canvas with `0 1px 4px rgba(0,0,0,0.08)`; dropdowns and popovers use `0 2px 8px rgba(0,0,0,0.12)`; modals use `0 4px 16px rgba(0,0,0,0.16)`. The grey canvas does most of the depth work — shadows are a faint accent, not the structure.

## Shapes

Border radius is 4px on buttons, inputs, and cards. The bookmark / like control is the one exception, using a 20px pill radius. Thumbnails preserve their natural aspect ratio — never crop to a fixed shape.

## Components

**Buttons** — Primary fills `#0096fa` with white text, weight 700, 4px radius, 8/24 padding. Secondary is transparent fill with 1px `#0096fa` border and `#0096fa` text. Bookmark uses 1px `#ff4060` border on transparent fill at 20px radius.

**Inputs** — White fill, 1px `#d6d6d6` border, 4px radius, 14px text, 8/12 padding, 36px tall. Focus border swaps to 1px `#0096fa`.

**Thumbnail cards** — White fill, no border, 4px radius, 0 padding (image fills the card edge to edge). Shadow `0 1px 4px rgba(0,0,0,0.08)`. Title and metadata sit below the image, not overlaid.

## Do's and Don'ts

**Do**
- Lead with system-ui-style fonts to keep first paint fast
- Reserve `#0096fa` for primary actions and links
- Reserve `#ff4060` for like / bookmark, never for errors
- Keep the canvas at `#eeeeee` so white thumbnail cards lift visually
- Preserve thumbnail aspect ratio

**Don't**
- Use pure `#000000` text on the grid — the muted grey scale is the brand
- Drop body font-size below 12px
- Add saturated accents beyond `#0096fa` and `#ff4060`
- Stretch or crop thumbnails to a fixed aspect
- Stack heavy drop shadows on cards (the canvas already provides separation)

## Agent Prompt Guide

**Bias toward** — pixiv Blue primary, hot-pink bookmark accent, charcoal-scale neutrals, soft-grey `#eeeeee` canvas with white surfaces, auto-fill thumbnail grids, system-ui-leading font stack, 4px radius with 20px pill on bookmarks.

**Reject** — pure black text, body line-height < 1.6, custom Web fonts as primary face, overlay text on raw thumbnails without a scrim, additional saturated accents beyond blue and pink.
