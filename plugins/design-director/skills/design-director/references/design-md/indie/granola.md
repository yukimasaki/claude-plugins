---
version: alpha
name: Granola
description: A warm-glass AI notetaker aesthetic where editorial serif headlines sit on frosted cream surfaces over a soft radial gradient. The whole interface bends warm — terracotta accent, light type weights, generous reading rhythm — so the app reads as a premium paper notebook that happens to be software. Backdrop blur and inner highlights give every panel a tactile glass quality without ever feeling cold. Mood — calm, considered, indie-premium, unhurried.

colors:
  primary: "#b45837"
  primary-soft: "#e4b894"
  ink: "#1a1814"
  body: "#1a1814"
  muted: "#6a5f52"
  canvas: "#faf8f2"
  surface: "#fffbf4"
  surface-strong: "#fffbf4"
  hairline: "#1a1814"
  hairline-strong: "#1a1814"
  on-primary: "#faf8f2"

typography:
  display-xl:
    fontFamily: "PP Editorial New, Tiempos Headline, Iowan Old Style, Georgia, serif"
    fontSize: 52px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -0.52px
  display-lg:
    fontFamily: "PP Editorial New, Tiempos Headline, Iowan Old Style, Georgia, serif"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -0.36px
  display-md:
    fontFamily: "PP Editorial New, Tiempos Headline, Iowan Old Style, Georgia, serif"
    fontSize: 26px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: -0.26px
  title-lg:
    fontFamily: "PP Editorial New, Tiempos Headline, Iowan Old Style, Georgia, serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0
  body-lg:
    fontFamily: "Söhne, Inter, system-ui, sans-serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-md:
    fontFamily: "Söhne, Inter, system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  ui:
    fontFamily: "Söhne, Inter, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  caption:
    fontFamily: "Söhne, Inter, system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  sm: 8px
  md: 10px
  lg: 14px
  xl: 20px
  pill: 999px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 12px
  "4": 16px
  "6": 24px
  "8": 32px
  "10": 40px
  "16": 64px
---

## Overview

Granola is the warm-glass school applied to an AI notetaker. Editorial serif headlines sit on frosted cream surfaces, which sit on a soft warm radial gradient, which sits on a cream canvas. Everything bends warm — terracotta accent, light type weights, generous reading rhythm — and the resulting app reads less like SaaS and more like a premium paper notebook that happens to be software.

Mood words — calm, considered, indie-premium, unhurried.

## Colors

The canvas is `#faf8f2` — warm cream — overlaid with two fixed radial gradients (peach at top-left, sand at top-right). Surfaces are translucent warm white at two strengths: `surface` (70% opacity) for cards and notes, `surface-strong` (90% opacity) for elevated panels.

Ink (`#1a1814`) is a warm near-black, never pure black. Muted (`#6a5f52`) carries body and caption text in a low-contrast register that pairs with the cream canvas.

Terracotta (`#b45837`) is **the only saturated color** — used for primary CTAs, focus rings, and the occasional accent rule. `primary-soft` (`#e4b894`) supports tints. Cold blues and grays are explicitly out; everything bends warm.

## Typography

- **Display headlines** use `PP Editorial New` (fallback `Tiempos Headline`, `Iowan Old Style`, `Georgia`). Weight 400–500, never 600 or above. Light weights dominate.
- **Body and UI** use `Söhne` (fallback `Inter`, system-ui). Weight 400 for reading, 500 for UI labels.
- **No bold** — anywhere. The voice is quiet.

Type scale ladder — 13 / 14 / 15 / 17 / 20 / 26 / 36 / 52 px.

The serif/sans pairing is the core of the aesthetic — serif for any editorial moment (empty states, onboarding, hero copy), sans for everything functional.

## Layout

- Reading column — 680px max width
- App shell — 1000px max width
- Background gradient is fixed-position on the body; content scrolls over it
- Spacing scale rooted on 4px — 4 / 8 / 12 / 16 / 24 / 32 / 40 / 64
- Vertical rhythm is generous — 40–64px between major sections

Below 768px, the gradient simplifies, blur intensity drops to 8px (performance), and content collapses to a single column with generous padding.

## Elevation & Depth

Glass depth applied warm. Three coordinated mechanisms:

1. **Backdrop blur** on every surface — `blur(16px) saturate(150%)`
2. **Soft warm shadow** — `0 8px 32px rgba(180, 88, 55, 0.08)` (terracotta-tinted, not neutral)
3. **Inner highlight** — `inset 0 1px 0 rgba(255, 255, 255, 0.6)` for the glass top edge

Heavy shadows and hard borders are out. Depth stays soft.

## Shapes

- **Buttons** — 10px radius (primary), `surface` frosted with hairline (secondary)
- **Cards / notes** — 14px radius, frosted fill, hairline border, backdrop-blur, inner highlight
- **Inputs** — nearly invisible; `surface` fill, no visible border until focus, then 2px primary ring
- **Hero panels** — 20px radius for the larger composed surfaces

The radii sit in the soft mid-range — not pill-round, not sharp.

## Components

**Buttons**
- Primary — terracotta fill (`primary` `#b45837`), cream text (`on-primary`), 10px radius, padding 10/18, weight 500
- Secondary — `surface` frosted fill, 1px `hairline`, `backdrop-filter: blur(12px)`, ink text

**Cards / notes**
- `surface` frosted fill, 1px `hairline` border, 14px radius
- `backdrop-filter: blur(16px) saturate(150%)`
- Inner highlight `inset 0 1px 0 rgba(255, 255, 255, 0.6)`
- Soft warm outer shadow

**Inputs**
- `surface` fill, no visible border at rest
- Focus state — 2px `primary` ring with 2px offset

**Empty states / onboarding**
- Editorial serif (`display-md` or `display-lg`) carries the moment, paired with a single muted-tone illustration

## Do's and Don'ts

**Do**
- Let the warm gradient show through every surface (preserve translucency)
- Use serif for any editorial moment — empty states, onboarding, hero copy
- Keep type weights light; treat 500 as the heaviest you reach
- Tint shadows warm (terracotta-based rgba) rather than neutral black

**Don't**
- Use cold blues or grays — every color in this system bends warm
- Use Inter for display type — the editorial serif is non-negotiable for headlines
- Add heavy shadows or hard borders that break the glass softness
- Use bold weights (600+) — the voice is quiet by construction

## Agent Prompt Guide

**Bias toward** — cream base, warm radial gradients, frosted warm-white surfaces, editorial serif for display, light type weights, muted terracotta accent, terracotta-tinted soft shadows, generous reading rhythm.

**Reject** — cold neutral palettes, sans-serif-only hierarchies, dark-mode primary, high-contrast saturated accents, bold display weights, heavy drop shadows.
