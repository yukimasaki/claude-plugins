---
version: alpha
name: Wise
description: |
  Wise's website is a bold, confident fintech platform that communicates "money without borders" through massive typography and a distinctive **lime-green accent**. The design operates on a warm off-white canvas with **near-black ink (`#0e0f0c`)** and a signature **Wise Green (`#9fe870`)** — fresh and optimistic, unlike the corporate blues of traditional banking. The typography uses **Wise Sans at extreme weight 900 (Black)** for display headings with a remarkably **tight 0.85 line-height** and OpenType `"calt"` (contextual alternates) enabled on ALL text. At 126px, the headlines are so dense they feel like protest signs — bold, urgent, impossible to ignore. **Inter** serves as the body font with **weight 600** as the default for emphasis — confident, never light. The CTA is **lime green with dark green text (`#163300`)** — a nature-inspired button that feels alive. Hover states use **`scale(1.05)` expansion** rather than color changes — buttons physically grow on interaction. The radius system uses **9999px pills** for buttons paired with **30–40px** generous radii on cards. Mood — bold, vibrant, optimistic, money-without-borders.

colors:
  primary: "#9fe870"
  primary-hover: "#cdffad"
  primary-soft: "#e2f6d5"
  primary-deep: "#163300"
  ink: "#0e0f0c"
  body: "#0e0f0c"
  muted: "#454745"
  muted-soft: "#868685"
  canvas: "#ffffff"
  surface: "#ffffff"
  surface-soft: "#e8ebe6"
  surface-dark: "#0e0f0c"
  hairline: "#d3d4d2"
  on-primary: "#163300"
  on-dark: "#ffffff"
  positive: "#054d28"
  danger: "#d03238"
  warning: "#ffd11a"
  info-soft: "#deedf5"
  bright-orange: "#ffc091"

typography:
  display-mega:
    fontFamily: "'Wise Sans', Inter, Helvetica, Arial, sans-serif"
    fontSize: 126px
    fontWeight: 900
    lineHeight: 0.85
    letterSpacing: 0
  display-hero:
    fontFamily: "'Wise Sans', Inter, Helvetica, Arial, sans-serif"
    fontSize: 96px
    fontWeight: 900
    lineHeight: 0.85
    letterSpacing: 0
  section-heading:
    fontFamily: "'Wise Sans', Inter, Helvetica, Arial, sans-serif"
    fontSize: 64px
    fontWeight: 900
    lineHeight: 0.85
    letterSpacing: 0
  sub-heading:
    fontFamily: "'Wise Sans', Inter, Helvetica, Arial, sans-serif"
    fontSize: 40px
    fontWeight: 900
    lineHeight: 0.85
    letterSpacing: 0
  alt-heading:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: 78px
    fontWeight: 600
    lineHeight: 1.10
    letterSpacing: -2.34px
  card-title:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: 26px
    fontWeight: 600
    lineHeight: 1.23
    letterSpacing: -0.39px
  feature-title:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.396px
  body:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.44
    letterSpacing: 0.18px
  body-semibold:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.44
    letterSpacing: -0.108px
  button:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.00
    letterSpacing: -0.108px
  caption:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: -0.084px
  caption-strong:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.50
    letterSpacing: -0.108px
  small:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: -0.084px

rounded:
  none: 0px
  xs: 2px
  sm: 10px
  md: 16px
  lg: 20px
  xl: 30px
  "2xl": 40px
  pill: 9999px
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
  section: 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 5px 16px
  button-secondary:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  button-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  card-small:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 24px
  card-feature:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 32px
  card-section:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.2xl}"
    padding: 40px
  badge-mint:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary-deep}"
    typography: "{typography.caption-strong}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 10px 14px
---

## Overview

Wise's marketing surface trades fintech-blue for **lime-green optimism** — the brand's claim that money should feel alive, not corporate. The CTAs are unmistakably nature-inspired: lime green fill with deep dark-green text. Buttons grow on hover (`scale(1.05)`) rather than changing color — physical interaction rather than chromatic. Display typography sits at the heaviest extreme (Wise Sans Black 900, 0.85 line-height) to anchor the brand's bold confidence.

Mood — bold, vibrant, optimistic, money-without-borders.

## Colors

The palette is **near-black + lime-green + warm neutrals**:

- **Wise Green** (`#9fe870`): primary CTA, brand accent — fresh lime-bright optimism
- **Pastel Green** (`#cdffad`): hover-state contrast green (originally `--color-interactive-contrast-hover`)
- **Light Mint** (`#e2f6d5`): soft green surface for badge backgrounds
- **Dark Green** (`#163300`): button text on green — deep nature green
- **Near Black** (`#0e0f0c`): primary text and dark surfaces — slight warm green undertone
- **Warm Dark** (`#454745`): secondary text, borders
- **Gray** (`#868685`): muted text, tertiary
- **Light Surface** (`#e8ebe6`): subtle green-tinted light surface

Semantic tokens (kept for product UI, used sparingly on marketing):

- **Positive Green** (`#054d28`): success
- **Danger Red** (`#d03238`): error/destructive
- **Warning Yellow** (`#ffd11a`)
- **Bright Orange** (`#ffc091`): warm accent
- **Info Soft** (`#deedf5`): originally `rgba(56, 200, 255, 0.10)` — the light cyan info tint, flattened to opaque approximation

## Typography

**Wise Sans Black (900)** is the brand's most distinctive choice — the heaviest weight in any analyzed system, used exclusively for display. **0.85 line-height** is the tightest seen — letters overlap vertically, creating dense billboard-like text blocks. **`"calt"` enabled on ALL text** (both Wise Sans and Inter) — contextual alternates are mandatory, not optional.

**Inter at weight 600 is the body default** — confident, never light. The 600-weight body creates a tone-of-voice that says "this matters," distinct from typical 400-weight reading text.

Three working voices: Wise Sans 900 (display), Inter 600 (body emphasis), Inter 400 (long-form reading). No middle weight on Wise Sans — it's exclusively 900 or absent.

## Layout

8px-adjacent base with a fairly granular small scale (1px / 2px / 3px / 4px / 5px / 8px / 10px / 11px / 12px / 16px / 18px / 19px / 20px / 22px / 24px). Section vertical rhythm sits around 80px.

## Elevation & Depth

Minimal shadow system — ring shadows only.

| Level | Treatment | Use |
|---|---|---|
| Flat (0) | No shadow | Default |
| Ring (1) | `rgba(14,15,12,0.12) 0px 0px 0px 1px` | Card borders |
| Inset (2) | `rgb(134,134,133) 0px 0px 0px 1px inset` | Input focus |

Depth comes from the bold green accent against the neutral canvas, not from drop shadows. The signature interaction is **`scale(1.05)` on hover** and **`scale(0.95)` on active** — buttons physically grow and compress rather than changing color.

## Shapes

- **xs (2px)**: links, micro inputs
- **sm (10px)**: comboboxes, inputs
- **md (16px)**: small cards, buttons (when not pill), radio
- **lg (20px)**: medium cards
- **xl (30px)**: feature cards
- **2xl (40px)**: tables, large section cards
- **pill / full (9999px)**: **all buttons** — the universal CTA shape

The cap on cards is 40px — beyond that you enter "presentation element" territory. The pill button is non-negotiable.

## Components

**Button primary**: `#9fe870` Wise Green fill, `#163300` Dark Green text, **9999px pill**, 5×16 padding. Hover: `scale(1.05)` (physical growth). Active: `scale(0.95)` (compression). Focus: inset ring + outline.

**Button secondary**: `#e8ebe6` light green-tinted fill (originally `rgba(22, 51, 0, 0.08)`), near-black text, 9999px pill, 8×12–16 padding. Same scale hover/active.

**Button dark**: `#0e0f0c` near-black fill, white text, 9999px pill — used on light sections where green wouldn't pop.

**Card small**: white fill, 1px solid `rgba(14, 15, 12, 0.12)` ring shadow, **16px radius**, 24px padding.

**Card feature**: white fill, **30px radius**, 32px padding — feature highlights.

**Card section**: white fill, **40px radius**, 40px padding — large content blocks (tables, hero containers).

**Badge mint**: `#e2f6d5` light mint fill, `#163300` dark green text, 9999px pill, 4×12 padding.

**Input**: white fill, ink text, **10px radius**, 10×14 padding. Focus uses the inset ring shadow.

## Do's and Don'ts

**Do**

- Use Wise Sans weight 900 for display — the extreme boldness IS the brand
- Apply 0.85 line-height on Wise Sans display — ultra-tight is intentional
- Use Lime Green (`#9fe870`) for primary CTAs with Dark Green (`#163300`) text
- Apply `scale(1.05)` hover and `scale(0.95)` active on buttons
- Enable `"calt"` on ALL text (both Wise Sans and Inter)
- Use Inter weight 600 as the body default — confident, not light
- Use ring shadows for card borders, not offset drop shadows

**Don't**

- Don't use light font weights for Wise Sans — only 900
- Don't relax the 0.85 line-height on display — the density is the identity
- Don't use Wise Green as background for large surfaces — it's for buttons and accents
- Don't skip the scale animation on buttons — physical interaction is the brand
- Don't use traditional offset shadows — ring shadows only
- Don't pair Wise Green with conventional dark text — it must be `#163300`

## Agent Prompt Guide

**Bias toward** — Wise Sans Black (900) at 0.85 line-height for display, Inter weight 600 body default, lime-green CTA with dark-green text, `scale(1.05)` hover animation, `"calt"` enabled on all text, generous 30–40px card radii, pill buttons (9999px).

**Reject** — light Wise Sans weights, relaxed display line-height, traditional drop shadows, large green surface fills, color-change hover states (use scale instead), missing `"calt"`, dark text on green buttons (must be `#163300`).
