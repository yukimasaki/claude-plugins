---
version: alpha
name: Nike
description: |
  Nike.com is a kinetic retail cathedral — a site that channels the explosive energy of sport into a digital shopping experience. The design operates on radical simplicity: strip everything back to black, white, and grey so that athletic photography and product color can dominate without competition. The "Podium CDS" (Nike's Core Design System) establishes an aggressively monochromatic foundation. The UI disappears into Nike Black (`#111111`) text and white surfaces, allowing hero photography — sweating athletes, mid-air shoes, stadium energy — to carry the emotional weight. When color appears in the UI, it's almost exclusively functional: red for errors, blue for links, green for success. The product itself is the color story. Massive uppercase headlines in Nike Futura ND — a custom condensed Futura variant with impossibly tight line-height (0.90) — punch through hero imagery like a typographic shockwave. Below, the workhorse Helvetica Now family handles everything from navigation to product descriptions with Swiss-precision clarity. Pill-shaped buttons (30px radius), 8px spacing grid, full-bleed photography with no border radius, and a shadow-free elevation model define the visual language. Mood — athletic, kinetic, monochromatic, retail-cathedral.

colors:
  primary: "#111111"
  primary-hover: "#707072"
  ink: "#111111"
  body: "#707072"
  muted: "#9e9ea0"
  muted-on-dark: "#4b4b4d"
  hairline: "#cacacb"
  hairline-soft: "#e5e5e5"
  canvas: "#ffffff"
  surface-snow: "#fafafa"
  surface-soft: "#f5f5f5"
  surface-dark: "#28282a"
  surface-dark-deep: "#1f1f21"
  surface-dark-hover: "#39393b"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  red-critical: "#d30005"
  red-bright: "#ee0005"
  orange-badge: "#d33918"
  orange-flash: "#ff5000"
  green-success: "#007d48"
  green-success-inverse: "#1eaa52"
  blue-link: "#1151ff"
  blue-info: "#1190ff"
  yellow-warning: "#fedf35"
  focus-ring: "#275dc5"

typography:
  display:
    fontFamily: "'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif"
    fontSize: 96px
    fontWeight: 500
    lineHeight: 0.9
    letterSpacing: 0
  heading-1:
    fontFamily: "'Helvetica Now Display Medium', Helvetica, Arial, sans-serif"
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
  heading-2:
    fontFamily: "'Helvetica Now Display Medium', Helvetica, Arial, sans-serif"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
  heading-3:
    fontFamily: "'Helvetica Now Text Medium', Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  body:
    fontFamily: "'Helvetica Now Text', Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: 0
  body-medium:
    fontFamily: "'Helvetica Now Text Medium', Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.75
    letterSpacing: 0
  link:
    fontFamily: "'Helvetica Now Text Medium', Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.75
    letterSpacing: 0
  link-small:
    fontFamily: "'Helvetica Now Text Medium', Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.86
    letterSpacing: 0
  button:
    fontFamily: "'Helvetica Now Text Medium', Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  button-small:
    fontFamily: "'Helvetica Now Text Medium', Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "'Helvetica Now Text Medium', Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  small:
    fontFamily: "'Helvetica Now Text Medium', Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  tiny:
    fontFamily: "'Helvetica Now Text', Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  none: 0px
  sm: 8px
  md: 18px
  lg: 20px
  xl: 24px
  pill: 30px
  full: 9999px

spacing:
  "1": 4px
  "2": 8px
  "3": 12px
  "4": 16px
  "5": 20px
  "6": 24px
  "7": 32px
  "8": 48px
  "9": 64px
  "10": 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px 24px
  button-primary-on-dark:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px 24px
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px 24px
  button-disabled:
    backgroundColor: "{colors.hairline-soft}"
    textColor: "{colors.muted}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px 24px
  icon-button:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: 6px
  card-product:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-3}"
    rounded: "{rounded.none}"
    padding: 12px
  card-ui:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  input-search:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 8px 16px
  input-form:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 12px 16px
  banner-promo:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.small}"
    rounded: "{rounded.none}"
    padding: 8px 16px
---

## Overview

Nike.com strips everything back to black, white, and grey so athletic photography and product color can dominate without competition. The Podium CDS (Nike's Core Design System) establishes an aggressively monochromatic foundation — UI disappears into Nike Black (`#111111`) and white, allowing hero photography to carry the emotional weight.

Massive uppercase Nike Futura ND headlines at 96px / 0.90 line-height punch through hero imagery like a typographic shockwave. Below, Helvetica Now provides Swiss-precision legibility with weight 500 (Medium) dominating throughout — every sentence reads like a confident recommendation, not a shout.

Mood — athletic, kinetic, monochromatic, retail-cathedral.

## Colors

The palette is deliberately monochromatic. **Nike Black** (`#111111`) — fractionally softer than pure black for slightly softer reading — handles primary text, button fills, nav. **Nike White** (`#ffffff`) is the canvas. The grey scale runs `#fafafa` (snow) → `#f5f5f5` (light) → `#e5e5e5` (hover) → `#cacacb` (border) → `#707072` (secondary text) → `#28282a` (dark surface) → `#1f1f21` (deep charcoal).

Color is reserved for **functional semantics only**: Nike Red (`#d30005`) for errors, Link Blue (`#1151ff`) for text links, Green (`#007d48`) for success, Yellow (`#fedf35`) for warnings, Orange (`#ff5000`) for expressive accent. The product itself is the color story.

## Typography

**Nike Futura ND** is the display face — custom condensed Futura exclusive to Nike with characteristically tight 0.90 line-height and uppercase transform. Used only for large display headlines (96px+).

**Helvetica Now Display Medium** handles section headings (24–32px). **Helvetica Now Text Medium** at weight 500 is the workhorse for everything interactive — links, buttons, captions, emphasized body. **Helvetica Now Text** at weight 400 handles standard body and metadata.

Weight 500 (Medium) dominates throughout the body — slight assertiveness without the heaviness of bold.

## Layout

8px base spacing system. Product grids use minimal 4–12px gaps to create a sense of abundance and choice. Section breaks 48–80px to separate shopping contexts. Max container 1920px with content at ~1440px and horizontal padding 48px desktop / 24px tablet / 16px mobile.

The whitespace strategy is deliberately aggressive — compressed, high-density retail rather than luxurious gallery breathing. The store feels packed with product while remaining navigable.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Default state for everything |
| Divider | `0px -1px 0px 0px #e5e5e5 inset` | Subtle inset line between sections |
| Focus | `0 0 0 2px rgba(39, 93, 197, 1)` | Keyboard focus ring |
| Overlay | Dark scrim over photography | Text-on-image legibility |

Nike's elevation philosophy is **radically flat**. No card shadows, no hover lifts, no floating elements. Depth is communicated through color — dark sections recede, light sections advance, grey shifts indicate state changes. The only "shadow" is a 1px inset divider and the focus ring.

## Shapes

| Value | Use |
|---|---|
| 0px | Product images, hero photography (sharp edges) |
| 8px | Form inputs (non-search) |
| 18px | Small interactive elements |
| 20px | Containers, cards with UI content |
| 24px | Search inputs, medium pills |
| 30px | Buttons, tags, filters (full pill) |
| 9999px | Circular icon buttons, avatars |

Product imagery sits at 0px (full-bleed). UI gets pill rounding at 30px for buttons. The dual radius system separates **content (sharp)** from **interaction (rounded)**.

## Components

**Button primary**: Nike Black `#111111` fill, white text, 30px pill radius, 12×24px padding, Helvetica Now Text Medium 16px / 500. Hover shifts background to `#707072`. **Button secondary**: transparent fill, 1.5px `#cacacb` border, black text, same pill geometry.

**Card product**: white fill, no border, no shadow. Image at 0px radius (edge-to-edge), text below with 12px gap, no hover lift. **Input search**: `#f5f5f5` fill, 24px radius, focus ring at `#275dc5`. **Banner promo**: full-width Nike Black strip, white 12px / 500 centered text, 8px vertical padding.

## Do's and Don'ts

**Do**
- Use Nike Black (`#111111`) for all primary text — never pure `#000000`
- Keep buttons pill-shaped (30px radius) limited to primary/secondary variants
- Use full-bleed edge-to-edge photography for hero — no border radius on images
- Let product photography provide all color vibrancy; keep UI monochromatic
- Use uppercase Nike Futura ND ONLY for display headlines (96px+)
- Maintain tight product grid gaps (4–12px) for dense, abundant feel
- Use `#f5f5f5` for all input and placeholder backgrounds
- Reserve color exclusively for semantic meaning (red=error, green=success, blue=link)
- Use weight 500 (Medium) for all interactive text elements

**Don't**
- Don't add shadows to cards — Nike's elevation is entirely flat
- Don't use border radius on product imagery — only UI elements get rounded corners
- Don't introduce brand colors beyond grey scale for UI elements
- Don't use Nike Futura ND below 24px — exclusively a display face
- Don't add hover lift effects — Nike cards don't animate on hover
- Don't use regular weight (400) for buttons or links — always 500
- Don't place colored backgrounds behind UI elements
- Don't soften the contrast — Nike pushes black-on-white to maximum

## Agent Prompt Guide

**Bias toward** — Nike Black `#111111` (not pure `#000`), 30px pill buttons, full-bleed 0px-radius product imagery, Nike Futura ND uppercase 96px display only, Helvetica Now Text Medium 500 for interactive, monochrome UI with semantic-only color, 4–12px product grid gaps, flat elevation.

**Reject** — pure `#000` text, card shadows, rounded product images, brand colors in UI chrome, Futura below 24px, hover lift animations, weight 400 on buttons, colorful backgrounds behind UI elements.
