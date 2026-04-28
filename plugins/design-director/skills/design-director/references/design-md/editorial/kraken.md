---
version: alpha
name: Kraken
description: |
  Kraken's marketing surface is a clean, trustworthy crypto exchange anchored to a commanding purple — Kraken Purple (`#7132f5`) for primary actions and brand voltage, supported by darker variants (`#5741d8`, `#5b1ecf`) for outlined buttons and depth. The page sits on a white canvas with near-black ink (`#101114`) and a cool blue-gray neutral scale that keeps the crypto-trader voltage from tipping into noise. Type voice is dual-family: **Kraken-Brand** (a proprietary display face, falling back to IBM Plex Sans) carries display headlines at weight 700 with negative tracking (-1px at 48px, -0.5px at 28–36px), while **Kraken-Product** (with Helvetica fallback) handles the UI workhorse load at weights 400 / 500 / 600. Buttons land at a confident **12px radius** — rounded but never pill — with subtle whisper-level shadows (`rgba(0,0,0,0.03) 0px 4px 24px`) creating barely-perceptible lift. Green (`#149e61`) appears only as the success/positive signal, primarily on subtle 16%-opacity badges. Mood — confident, fintech-purple, professional, trader-grade.

colors:
  primary: "#7132f5"
  primary-dark: "#5741d8"
  primary-deep: "#5b1ecf"
  primary-subtle: "#e7dffe"
  ink: "#101114"
  body: "#101114"
  muted: "#9497a9"
  muted-soft: "#686b82"
  surface-muted: "#484b5e"
  canvas: "#ffffff"
  surface: "#ffffff"
  surface-soft: "#f3f3f5"
  hairline: "#dedee5"
  on-primary: "#ffffff"
  success: "#149e61"
  success-deep: "#026b3f"
  success-soft: "#dff5ec"
  badge-neutral-bg: "#eeeef0"
  badge-neutral-text: "#484b5e"

typography:
  display-hero:
    fontFamily: "Kraken-Brand, 'IBM Plex Sans', Helvetica, Arial, sans-serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.17
    letterSpacing: -1px
  section-heading:
    fontFamily: "Kraken-Brand, 'IBM Plex Sans', Helvetica, Arial, sans-serif"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.22
    letterSpacing: -0.5px
  sub-heading:
    fontFamily: "Kraken-Brand, 'IBM Plex Sans', Helvetica, Arial, sans-serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.29
    letterSpacing: -0.5px
  feature-title:
    fontFamily: "Kraken-Product, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: 0
  body:
    fontFamily: "Kraken-Product, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.38
    letterSpacing: 0
  body-medium:
    fontFamily: "Kraken-Product, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.38
    letterSpacing: 0
  button:
    fontFamily: "Kraken-Product, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.38
    letterSpacing: 0
  caption:
    fontFamily: "Kraken-Product, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    letterSpacing: 0
  small:
    fontFamily: "Kraken-Product, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.33
    letterSpacing: 0

rounded:
  none: 0px
  xs: 3px
  sm: 6px
  md: 8px
  lg: 10px
  xl: 12px
  "2xl": 16px
  full: 9999px

spacing:
  "0": 0px
  "1": 2px
  "2": 4px
  "3": 8px
  "4": 12px
  "5": 16px
  "6": 20px
  "7": 24px
  "8": 32px
  section: 64px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.xl}"
    padding: 13px 16px
  button-outlined:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.xl}"
    padding: 13px 16px
  button-subtle:
    backgroundColor: "{colors.primary-subtle}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.xl}"
    padding: 8px
  button-white:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: 12px 16px
  button-secondary:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.xl}"
    padding: 13px 16px
  card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.2xl}"
    padding: 24px
  badge-success:
    backgroundColor: "{colors.success-soft}"
    textColor: "{colors.success-deep}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: 2px 8px
  badge-neutral:
    backgroundColor: "{colors.badge-neutral-bg}"
    textColor: "{colors.badge-neutral-text}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    padding: 2px 8px
---

## Overview

Kraken's marketing site uses purple as its commanding brand color — a deliberate departure from the blue-or-orange convention of crypto exchanges. **Kraken Purple** (`#7132f5`) anchors every primary CTA and link, with darker variants (`#5741d8` outlined borders, `#5b1ecf` deep accents) extending the family. The canvas is white with near-black ink (`#101114`); neutral text uses a cool blue-gray (`#9497a9` / `#686b82`) that ties subtly to the purple temperature without competing with it.

Type pairs **Kraken-Brand** (display, weight 700, negative tracking) with **Kraken-Product** (UI workhorse, weights 400 / 500 / 600). The display face falls back to IBM Plex Sans at weight 700 — a usable approximation if the proprietary face is unavailable.

Mood — confident, fintech-purple, professional, trader-grade.

## Colors

The palette is **purple-led** with a cool neutral scale and a single green accent:

- **Primary**: `#7132f5` Kraken Purple — CTAs, brand anchor, links
- **Primary Dark** (`#5741d8`): outlined button borders and text
- **Primary Deep** (`#5b1ecf`): deepest brand purple for high-emphasis moments
- **Primary Subtle** (`#e7dffe`): a soft purple surface for secondary buttons (originally expressed as `rgba(133, 91, 251, 0.16)`; flattened here to a 6-digit hex equivalent)
- **Ink** (`#101114`): primary text — near-black with a faint cool tint
- **Muted** (`#9497a9`) and **Muted Soft** (`#686b82`): tertiary and secondary text in cool blue-gray
- **Surface Soft** (`#f3f3f5`): subtle gray button background (originally `rgba(148, 151, 169, 0.08)`)
- **Hairline** (`#dedee5`): divider borders
- **Success** (`#149e61`) with **Success Deep** (`#026b3f`) text and **Success Soft** (`#dff5ec`) badge fill (originally `rgba(20, 158, 97, 0.16)`)
- **Badge Neutral** (`#eeeef0` bg / `#484b5e` text): originally `rgba(104, 107, 130, 0.12)` — flattened to opaque approximation

## Typography

**Kraken-Brand** carries display at weight 700 with negative tracking (-1px at 48px, -0.5px at 28–36px). The negative letter-spacing is intentional and brand-defining — relax it and the headlines lose their compressed authority. **Kraken-Product** runs weights 400 / 500 / 600 for body, captions, and buttons, with **0 letter-spacing** as the default.

Three working weights: 400 (body / read), 500–600 (UI emphasis, buttons, captions), 700 (display only). Buttons sit at 16px / weight 600 — confident without shouting.

## Layout

8px-adjacent base with a fairly dense scale (1px / 2px / 3px / 4px / 5px / 6px / 8px / 10px / 12px / 13px / 15px / 16px / 20px / 24px). Section vertical rhythm sits around 64px. Card padding lands at 24px. The 13px primary-button vertical padding is one of Kraken's signature micro-measurements.

## Elevation & Depth

Whisper-level shadow system. Two main treatments:

- **Subtle** (`rgba(0, 0, 0, 0.03) 0px 4px 24px`): the workhorse card lift — barely perceptible
- **Micro** (`rgba(16, 24, 40, 0.04) 0px 1px 4px`): button micro-depth

White buttons get the subtle 24px-blur shadow to lift them off the canvas without breaking the flat marketing aesthetic. Cards may layer subtle + micro for a slightly stronger float.

## Shapes

- **xs (3px)**: small accent corners
- **sm (6px)**: success badges
- **md (8px)**: neutral badges, secondary controls
- **lg (10px)**: white buttons (slightly tighter than the brand standard)
- **xl (12px)**: **the standard button radius** — Kraken's signature
- **2xl (16px)**: cards
- **full (9999px)**: avoid for buttons; reserved for status dots

The 12px button radius is **the brand cap** — pill buttons (9999px) are explicitly off-system. This keeps the buttons rounded but architectural, never consumer-cute.

## Components

**Button primary**: `#7132f5` Kraken Purple fill, white text, 12px radius, 13×16 padding, weight 600. The dominant CTA voice.

**Button outlined**: white fill, `#5741d8` text, 1px solid `#5741d8` border, 12px radius. Used for secondary purple actions where filled would be too loud.

**Button subtle**: `#e7dffe` soft-purple fill (the rgba(133,91,251,0.16) flattened), `#7132f5` text, 12px radius, 8px padding — compact subtle action.

**Button white**: white fill with `#101114` text, 10px radius, subtle 24px-blur shadow. Used on dark sections where purple would clash.

**Button secondary**: `#f3f3f5` gray fill (originally rgba(148,151,169,0.08)), ink text, 12px radius. Tertiary action.

**Card**: white fill, 16px radius, 24px padding. Composes with subtle shadow when elevation is needed.

**Badge success**: `#dff5ec` soft green fill (originally rgba(20,158,97,0.16)), `#026b3f` text, 6px radius. The positive signal pill.

**Badge neutral**: `#eeeef0` soft gray fill (originally rgba(104,107,130,0.12)), `#484b5e` text, 8px radius.

## Do's and Don'ts

**Do**

- Use Kraken Purple (`#7132f5`) as the dominant CTA color
- Apply 12px radius on buttons — the brand cap
- Pair Kraken-Brand display with Kraken-Product body
- Apply negative letter-spacing on display (-1px / -0.5px) — never on body
- Use the whisper-level shadows for card and button lift
- Reserve green (`#149e61` / `#026b3f`) for positive/success signals only

**Don't**

- Don't use pill (9999px) on buttons — 12px is the maximum
- Don't introduce purples outside the defined scale (`#7132f5` / `#5741d8` / `#5b1ecf`)
- Don't apply heavy shadows — Kraken's elevation is whisper-level
- Don't relax the negative tracking on display — the compression is brand-defining
- Don't use green decoratively — it's a semantic signal

## Agent Prompt Guide

**Bias toward** — Kraken Purple primary, 12px button radius, dual Brand+Product type pairing, negative tracking on display, whisper-level shadows, cool blue-gray neutrals, near-black ink (never pure `#000`), green as success-only.

**Reject** — pill buttons, alternative purples, heavy drop shadows, positive letter-spacing on display, decorative greens, pure black text, busy gradient backgrounds.
