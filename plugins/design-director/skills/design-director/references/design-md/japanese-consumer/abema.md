---
version: alpha
name: ABEMA
description: A Japanese streaming UI built around dark immersion and content-first thumbnail grids. Pure black canvas (`#000000`) lets the artwork carry color while ABEMA Green (`#00b900`) marks every actionable surface and ABEMA Pink (`#ff0077`) flags premium and highlight content. Type runs through CopyRight, ABEMA's house font, with Hiragino Sans and BIZ UDGothic fallbacks; horizontal carousels of 16:9 program cards are the dominant layout. Mood — immersive, vivid, entertainment-first, content-forward.

colors:
  primary: "#00b900"
  primary-hover: "#009900"
  accent: "#ff0077"
  ink: "#ffffff"
  body: "#ffffff"
  body-secondary: "#b3b3b3"
  muted: "#808080"
  disabled: "#616161"
  canvas: "#000000"
  surface: "#1a1a1a"
  surface-elevated: "#212121"
  hairline: "#2a2a2a"
  on-primary: "#ffffff"
  on-accent: "#ffffff"
  success: "#00b900"
  warning: "#ff9800"
  error: "#e53935"

typography:
  display-xl:
    fontFamily: "CopyRight, Inter, Hiragino Sans, BIZ UDGothic, Noto Sans JP, Meiryo, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  display-lg:
    fontFamily: "CopyRight, Inter, Hiragino Sans, BIZ UDGothic, Noto Sans JP, Meiryo, system-ui, sans-serif"
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  title-lg:
    fontFamily: "CopyRight, Inter, Hiragino Sans, BIZ UDGothic, Noto Sans JP, Meiryo, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "CopyRight, Inter, Hiragino Sans, BIZ UDGothic, Noto Sans JP, Meiryo, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "CopyRight, Inter, Hiragino Sans, BIZ UDGothic, Noto Sans JP, Meiryo, system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  caption:
    fontFamily: "CopyRight, Inter, Hiragino Sans, BIZ UDGothic, Noto Sans JP, Meiryo, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  label:
    fontFamily: "CopyRight, Inter, Hiragino Sans, BIZ UDGothic, Noto Sans JP, Meiryo, system-ui, sans-serif"
    fontSize: 10px
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: 0.05em

rounded:
  sm: 2px
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

ABEMA is CyberAgent's free-tier streaming service. Its UI is dark by default — pure black canvas, white text, vivid accent colors — because the product is video and the chrome must never compete with the artwork. The shell is structured as horizontally-scrolling carousel rows of 16:9 thumbnails: "popular," "news," "anime," "drama" each get their own row. Density is high but the surface stays cool because all the chroma sits in the artwork, not the UI.

Mood words — immersive, vivid, entertainment-first, content-forward.

## Colors

**ABEMA Green `#00b900`** is the brand and primary action color — CTA buttons, focus rings, success indicators. It also serves as the success semantic since the team treats "good outcome" as the same emotional cue as "go watch."

**ABEMA Pink `#ff0077`** marks premium tier, ABEMA Originals, and highlight callouts. It is never used for primary actions; that role is exclusively green's.

The dark scale runs `#000000` (canvas) → `#1a1a1a` (cards) → `#212121` (elevated nav). White text sits at full strength `#ffffff`; secondary text drops to `#b3b3b3` (an opaque substitute for the live site's `rgba(255,255,255,0.7)`); disabled is `#616161`. Hairlines are `#2a2a2a` — visible but barely.

## Typography

The face is **CopyRight**, ABEMA's bespoke font, with **Hiragino Sans** and **BIZ UDGothic** as JP fallbacks. The chain is `CopyRight → Inter → Hiragino Sans → BIZ UDGothic → Noto Sans JP → Meiryo → system-ui`. Letter-spacing is 0 across body and headings; the label slot uses 0.05em for uppercase metadata only.

Type ladder — 10 / 12 / 13 / 14 / 18 / 22 / 24 px. Body sits at 14px (`body-md`); captions at 12px; the smallest meta-info uses 10px / 700 (`label`). Line-height is 1.6 on body and 1.4 on display so kanji legibility holds even on a dark backdrop.

## Layout

- 8-based spacing scale — 4 / 8 / 16 / 24 / 32 / 48
- Container max-width 1280px with 16px horizontal padding
- Thumbnail grid uses 16:9 cards with 8px gutter
- Carousels scroll horizontally with snap points
- Breakpoints — Mobile ≤ 599px, Tablet ≤ 1023px, Desktop > 1024px

## Elevation & Depth

Dark shadows for dark UI. Level-1 (`0 2px 4px rgba(0,0,0,0.5)`) for dropdowns and tooltips; level-2 (`0 4px 12px rgba(0,0,0,0.6)`) for modals; level-3 (`0 8px 24px rgba(0,0,0,0.7)`) for floating elements. Shadows are denser than on a light theme because they need to read against `#000000`. Most surfaces are still flat and lifted only by surface tone, not shadow.

## Shapes

Border radius is 4px on buttons, inputs, and thumbnail cards. No pill buttons. Thumbnails always preserve a 16:9 aspect ratio, with metadata sitting beneath the image rather than overlaid.

## Components

**Buttons** — Primary fills `#00b900` with white text, weight 700, 4px radius, 8/24 padding. Secondary is transparent fill with a 1px translucent-white border and white text. Premium fills `#ff0077` for ABEMA Originals and subscription CTAs.

**Inputs** — `#1a1a1a` fill, 1px translucent-white border, 4px radius, 14px white text, 8/12 padding, 40px tall. Focus border swaps to 1px `#00b900`.

**Program cards** — `#1a1a1a` fill, no border, 4px radius, 0 padding. Hover transitions to `opacity: 0.8` or a subtle scale — not a brightness shift.

## Do's and Don'ts

**Do**
- Keep the canvas at pure `#000000`; thumbnails carry the chroma
- Reserve `#00b900` for actionable elements
- Reserve `#ff0077` for premium and highlight callouts
- Always lock thumbnails to 16:9
- Apply a scrim or gradient when overlaying text on artwork

**Don't**
- Use pure `#000000` for text on dark UI — the white scale `#ffffff` / `#b3b3b3` carries it
- Drop secondary text below `#808080` strength on `#000000` (contrast fails)
- Mix green and pink as competing CTAs in the same surface
- Rotate thumbnails out of 16:9
- Lay text over raw artwork without a scrim — readability collapses

## Agent Prompt Guide

**Bias toward** — pure-black canvas, ABEMA Green primary, ABEMA Pink premium accent, CopyRight-leading JP font chain, 16:9 horizontal carousels, 4px radius, dense thumbnail grids, opaque dark shadows.

**Reject** — light themes, pill buttons, body line-height < 1.6, low-contrast grey text under `#808080`, overlay text without scrim, additional saturated accents beyond green and pink.
