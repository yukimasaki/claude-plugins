---
version: alpha
name: Arc
description: A glass-and-soft-futurism browser interface built on layered translucency, pastel radial gradients, and generous corner radii. Frosted white surfaces float over a cream-pink-lavender wash, picking up backdrop blur and inner highlights so every panel feels physically tactile. A single muted purple accent carries primary actions while everything else stays soft and optimistic. The result reads less like Chrome chrome and more like a premium consumer object from 2035. Mood — premium, optimistic, tactile, future-soft.

colors:
  primary: "#8b5cf6"
  primary-soft: "#c4b5fd"
  ink: "#0f0f14"
  body: "#0f0f14"
  muted: "#5a5a68"
  canvas: "#fafaff"
  surface: "#ffffff"
  surface-strong: "#ffffff"
  hairline: "#ffffff"
  hairline-strong: "#0f0f14"
  on-primary: "#ffffff"

typography:
  display-xl:
    fontFamily: "PP Neue Montreal, Inter, system-ui, sans-serif"
    fontSize: 72px
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -0.72px
  display-lg:
    fontFamily: "PP Neue Montreal, Inter, system-ui, sans-serif"
    fontSize: 52px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -0.52px
  display-md:
    fontFamily: "PP Neue Montreal, Inter, system-ui, sans-serif"
    fontSize: 36px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.36px
  title-lg:
    fontFamily: "PP Neue Montreal, Inter, system-ui, sans-serif"
    fontSize: 26px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: -0.26px
  title-md:
    fontFamily: "PP Neue Montreal, Inter, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0
  body-lg:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  sm: 8px
  md: 12px
  lg: 16px
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
  "12": 48px
  "16": 64px
---

## Overview

Arc is the glass-and-soft-futurism school taken to a consumer browser. The page itself is a soft pastel wash — pink, blue, and lavender radial gradients painted onto a near-white canvas — and every UI surface floats above it as a frosted, translucent sheet. Backdrop blur, inner highlights, and generous corner radii do the heavy aesthetic work; one muted purple accent does the primary-action work. The brand reads less like browser chrome and more like a piece of 2035 hardware caught mid-transition.

Mood words — premium, optimistic, tactile, future-soft.

## Colors

The canvas is `#fafaff` — barely off-white — overlaid with three fixed radial gradients (pink at top-left, blue at top-right, lavender at bottom). Surfaces are not opaque colors; they are translucent white at two strengths: `surface` (60% opacity, used for cards and secondary buttons) and `surface-strong` (85% opacity, used for the floating navigation pill).

Borders come in two registers — a near-white `hairline` (50% white) for the bright glass edge and a charcoal `hairline-strong` (8% black) for subtle contrast against light gradient zones.

Purple (`#8b5cf6`) is **the only saturated color**. Use it for the primary CTA, focus rings, and active indicators. `primary-soft` (`#c4b5fd`) supports tints and hovers. Never introduce a second saturated hue — glass is about subtle color reading through translucency, not stacked accents.

## Typography

- **Display headlines** use `PP Neue Montreal` (fallback `Inter`, system-ui). Weight 500, never bold. Slight warmth in the grotesque, with tight letter-spacing on the largest sizes.
- **Body and UI** use `Inter` (system-ui fallback). Weight 400 for body, 500 for UI labels. Line-height 1.5.
- **No serif, no mono in the default surface vocabulary** — the glass aesthetic stays sans-serif.

Type scale ladder — 13 / 15 / 17 / 20 / 26 / 36 / 52 / 72 px.

## Layout

- App shell — 1200px max width, 32px gutter
- Background gradient is fixed-position on the body; content scrolls over it
- Spacing scale rooted on 4px — 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64
- Floating pill navigation at the top, not a flush bar
- Generous corner radii throughout (12 / 16 / 20px)

Below 768px, the gradient simplifies to two radial points (performance), blur intensity drops to 8px, and the floating pill nav collapses to a bottom bar.

## Elevation & Depth

Depth is the whole game. Three coordinated mechanisms produce the glass quality:

1. **Backdrop blur** on every surface — `blur(12–20px) saturate(160%)`
2. **Soft outer shadows** — `0 8px 32px rgba(15, 15, 20, 0.08)` for floating cards; `0 4px 16px rgba(15, 15, 20, 0.08)` for the nav pill
3. **Inner highlight** — `inset 0 1px 0 rgba(255, 255, 255, 0.6)` simulating a beveled glass top edge

Flat opaque surfaces are explicitly out — they break the entire aesthetic.

## Shapes

- **Buttons** — 12px radius (primary), `surface` frosted with hairline (secondary)
- **Cards** — 16–20px radius, frosted fill, hairline border, backdrop-blur, inner highlight
- **Inputs** — 12px radius, frosted fill, `hairline-strong` (charcoal 8%) border for input affordance
- **Floating nav** — full pill (999px), `surface-strong` fill

The combination of generous radii and translucency keeps the geometry tactile rather than rigid.

## Components

**Buttons**
- Primary — purple fill (`primary` `#8b5cf6`), white text, 12px radius, subtle inner highlight, no transition harshness
- Secondary — `surface` frosted fill, 1px `hairline`, `backdrop-filter: blur(12px)`, ink text

**Cards**
- `surface` frosted fill, 1px `hairline` border, 16–20px radius
- `backdrop-filter: blur(20px) saturate(160%)`
- Inner highlight `inset 0 1px 0 rgba(255, 255, 255, 0.6)`

**Inputs**
- `surface` fill, 1px `hairline-strong` border, 12px radius
- Focus state — 2px `primary` ring with 2px offset

**Navigation**
- Floating pill at top, `surface-strong` fill, backdrop-blur, soft outer shadow

**Images**
- Rounded to match container (16–20px); never edge-to-edge against glass

## Do's and Don'ts

**Do**
- Apply `backdrop-filter: blur()` to every surface that sits over the gradient
- Layer translucent surfaces over the colorful gradient so color reads through
- Keep shadows soft, warm, low-contrast
- Provide a `hairline-strong` fallback for browsers without backdrop-filter

**Don't**
- Use hard-edged opaque surfaces — they kill the aesthetic
- Use neon saturation — glass is about subtle color, not loud color
- Forget the inner highlight on cards — that's the bevel that sells the glass
- Introduce a dark-mode-first variant; the gradient assumes a light canvas

## Agent Prompt Guide

**Bias toward** — pastel radial gradients on the body, frosted white surfaces with backdrop-blur, single muted purple accent, 12–20px radii, inner highlights for glass quality, floating pill navigation.

**Reject** — opaque surfaces without translucency, dark-mode-first designs, hard geometric elements, saturated neon, multiple accent colors, missing inner highlight on cards.
