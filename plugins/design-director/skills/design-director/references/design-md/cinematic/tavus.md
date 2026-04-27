---
version: alpha
name: Tavus
description: A cinematic conversational-AI interface that swaps midnight-black for warm off-white paper, then drops into full-bleed video portraits that do the heavy lifting. Display type is oversized and editorial; pink is the heartbeat color that signals the AI is alive. Sharp 0-radius corners, 1px ink-bordered video frames, and asymmetric column splits read like film title cards paired with portrait stills. Mood — warm, premium, alive, slightly uncanny.

colors:
  primary: "#ff6183"
  primary-hover: "#e84d6f"
  primary-soft: "#ffd6df"
  ink: "#140206"
  body: "#6a5f5e"
  canvas: "#f7f4ef"
  canvas-inverse: "#140206"
  surface-card: "#ffffff"
  on-inverse: "#f7f4ef"
  hairline: "#e7e2da"
  hairline-on-dark: "#2a1a1f"
  on-primary: "#140206"
  success: "#0cb531"

typography:
  display-xl:
    fontFamily: "Perfectly Nineties, Tiempos Headline, Georgia, serif"
    fontSize: 140px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -1.4px
  display-lg:
    fontFamily: "Perfectly Nineties, Tiempos Headline, Georgia, serif"
    fontSize: 88px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -0.88px
  display-md:
    fontFamily: "Perfectly Nineties, Tiempos Headline, Georgia, serif"
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -0.64px
  heading-lg:
    fontFamily: "FK Raster Grotesk Compact, Söhne Breit, Inter Display, sans-serif"
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.48px
  heading-md:
    fontFamily: "FK Raster Grotesk Compact, Söhne Breit, Inter Display, sans-serif"
    fontSize: 34px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: -0.34px
  heading-sm:
    fontFamily: "FK Raster Grotesk Compact, Söhne Breit, Inter Display, sans-serif"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -0.24px
  body-lg:
    fontFamily: "Suisse Intl, Inter, system-ui, sans-serif"
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: "Suisse Intl, Inter, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "Suisse Intl, Inter, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "Suisse Intl, Inter, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  code:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  none: 0px

spacing:
  "0": 0px
  "1": 8px
  "2": 16px
  "3": 24px
  "4": 32px
  "6": 48px
  "10": 80px
  "15": 120px
---

## Overview

Tavus is cinematic but never midnight-black. The brand sits on warm off-white paper, then drops into full-bleed video portraits that do the heavy lifting. Display type is large and editorial; pink is the heartbeat color that signals "the AI is alive". Every section reads like a film title card paired with a portrait still.

Mood words — warm, premium, alive, slightly uncanny.

## Colors

The canvas (`canvas` `#f7f4ef`) is warm off-white — the brand differentiator from generic dark-mode AI. It alternates with full-bleed inverse sections (`canvas-inverse` `#140206`) that frame video portraits, with white (`surface-card` `#ffffff`) reserved for tonal-step cards on cream.

Pink (`primary` `#ff6183`) is the heartbeat — used for the primary CTA, focus rings, and accent highlights. It is always paired with either ink or off-white, never with green on the same surface. Green (`success` `#0cb531`) is reserved for "explore" / API-positive moments and rotates by section.

## Typography

- **Display** uses `Perfectly Nineties` (fallback `Tiempos Headline`, `Georgia`). Weight 400 throughout — never bold. Used at 64–140px. This is the film-poster type.
- **Heading sans** uses `FK Raster Grotesk Compact` (fallback `Söhne Breit`, `Inter Display`). Weight 500. Tight tracking. Used at 24–48px.
- **Body and UI** use `Suisse Intl` (fallback `Inter`). Weight 400/500. 16–22px body.
- **Mono** uses `JetBrains Mono` for API examples and timestamps.

Mix the serif and the compact grotesque on the same page — that contrast is the brand.

Type scale ladder — 14 / 16 / 18 / 22 / 34 / 48 / 64 / 88 / 140 px.

## Layout

- Max width — 1320px, 32px gutter
- Spacing scale rooted on 8px — 8 / 16 / 24 / 32 / 48 / 80 / 120
- Sections alternate cream and full-bleed video
- Whitespace around display type is non-negotiable: 120px above, 80px below
- Asymmetric column splits (60/40 portrait + caption) over symmetric grids
- Display serif scales 140 → 56 on mobile, retains weight 400
- Video portraits become full-width single column below 768px
- Nav collapses to hamburger below 768px; cream-on-cream menu, no overlay scrim

## Elevation & Depth

Tavus is **flat**. Depth is film-grain, not shadow. Allowed — subtle 1px ink border on portraits, 1px hairline section dividers. Forbidden — drop shadows on cards, glow rings, layered gradients.

## Shapes

- **All components** — sharp 0-radius corners. Softness comes from type and color, not geometry.
- **Buttons** — sharp rectangle, 1px ink border
- **Cards** — sharp rectangle, 1px hairline
- **Inputs** — sharp rectangle, 1px ink border, focus ring 2px pink with no offset
- **Video portraits** — sharp rectangle, 1px ink border on cream

The 0-radius geometry is deliberate; pill buttons and rounded corners are out.

## Components

**Buttons**
- Primary — pink fill (`primary` `#ff6183`), ink text, 0 radius, 1px ink border, padding 12/24, weight 500
- Secondary — green fill (`success` `#0cb531`), ink text, sharp rectangle, 1px ink border
- Ghost — ink text on cream, underline on hover, no fill

**Video portraits**
- Full-bleed or framed in 1px ink border on cream, 0 radius
- Autoplay muted on desktop, click-to-play on mobile
- Caption overlay — 13px Suisse, ink-on-cream, bottom-left, no scrim

**Cards**
- Cream on white or white on cream — tonal step only, 1px `hairline`, 0 radius, padding 24

**Inputs**
- Sharp rectangle, 1px ink border, 12/16 padding
- Focus — 2px pink ring, no offset

**Nav**
- Fixed top, transparent over cream, shifts to ink-on-cream when scrolled
- No backdrop blur

## Do's and Don'ts

**Do**
- Mix the editorial serif (Perfectly Nineties) with the compact grotesque (FK Raster) on the same page
- Frame video portraits in 1px ink and let them dominate the fold
- Use sharp 0-radius corners — softness comes from type and color, not geometry

**Don't**
- Switch to pure black backgrounds. The off-white cream is the brand differentiator from generic dark-mode AI
- Round corners or apply pill buttons
- Use pink and green in the same component — alternate by section
- Add chat-bubble UI tropes around the portrait. The portrait is the interface

## Agent Prompt Guide

**Bias toward** — cream off-white canvas, ink contrast, oversized editorial serif paired with compact grotesque headings, sharp 0-radius components, single warm-pink accent, 1px-bordered video portraits dominating the fold.

**Reject** — pure-black cinematic dark mode, pill buttons, drop shadows on portraits, chat-bubble UI around the AI, multi-color gradients, glassmorphism, hero illustrations replacing the video.
