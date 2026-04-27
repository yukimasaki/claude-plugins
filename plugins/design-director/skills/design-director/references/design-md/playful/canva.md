---
version: alpha
name: Canva
description: A design-platform interface that feels approachable and full-spectrum without sliding into kitsch. The palette is broader than a SaaS would dare — purple, periwinkle, sky, mint, coral all coexist — but every viewport anchors on a single Canva-purple CTA. Surfaces breathe, buttons are large and reachable, and microcopy assumes a first-time user without talking down. Single-typeface hierarchy, generous radii, and gradient backdrops used sparingly keep it welcoming. Mood — welcoming, expressive, capable, optimistic.

colors:
  primary: "#8b3dff"
  primary-hover: "#7929e6"
  primary-soft: "#9e9eff"
  brand-sky: "#00c4cc"
  brand-mint: "#7ed6a3"
  brand-coral: "#ff7a59"
  brand-yellow: "#ffd66b"
  ink: "#0f1015"
  body: "#575a5f"
  muted: "#8a8d93"
  canvas: "#ffffff"
  surface-alt: "#f5f5f7"
  surface-card: "#ffffff"
  hairline: "#e0e1e6"
  hairline-strong: "#c9cad1"
  on-primary: "#ffffff"

typography:
  display-xl:
    fontFamily: "Canva Sans, Noto Sans, system-ui, sans-serif"
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.64px
  display-lg:
    fontFamily: "Canva Sans, Noto Sans, system-ui, sans-serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.48px
  display-md:
    fontFamily: "Canva Sans, Noto Sans, system-ui, sans-serif"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.36px
  title-lg:
    fontFamily: "Canva Sans, Noto Sans, system-ui, sans-serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.28px
  title-md:
    fontFamily: "Canva Sans, Noto Sans, system-ui, sans-serif"
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0
  body-lg:
    fontFamily: "Canva Sans, Noto Sans, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: "Canva Sans, Noto Sans, system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "Canva Sans, Noto Sans, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "Canva Sans, Noto Sans, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  code:
    fontFamily: "Roboto Mono, ui-monospace, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  sm: 8px
  md: 12px
  pill: 999px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 12px
  "4": 16px
  "5": 20px
  "6": 24px
  "8": 32px
  "12": 48px
  "20": 80px
---

## Overview

Canva projects approachable creativity. The palette is broader than a SaaS would dare — purple, periwinkle, sky, mint, coral all coexist — but every page anchors on one Canva-purple CTA. Surfaces breathe. Buttons are large, friendly, and reachable. Microcopy assumes a first-time user without talking down.

Mood words — welcoming, expressive, capable, optimistic.

## Colors

The canvas is bright white (`canvas` `#ffffff`) with a subtle gray (`surface-alt` `#f5f5f7`) for section rhythm. Ink (`#0f1015`) and progressively lighter grays carry text hierarchy.

Canva-purple (`primary` `#8b3dff`) is the single confident accent — one Canva-purple primary CTA per viewport. The brand spectrum (`primary-soft` periwinkle, `brand-sky`, `brand-mint`, `brand-coral`, `brand-yellow`) is all first-class but rotates by section: it appears as gradient backdrops, illustration fills, or category chips — never as a competing primary button. The hero gradient pairs purple-to-sky `linear-gradient(135deg, #8b3dff 0%, #00c4cc 100%)`; a soft sky-to-white gradient rests behind promotional cards.

## Typography

- **All UI, headings, and body** use `Canva Sans` (fallback `Noto Sans`, system-ui). Weights 400 / 500 / 700.
- **Display headlines** use Canva Sans weight 700 with tight tracking.
- **Mono** uses `Roboto Mono` for code samples in dev docs only — not used in product chrome.

Single typeface across the system. Hierarchy comes from weight and size, not family.

Type scale ladder — 12 / 14 / 15 / 18 / 22 / 28 / 36 / 48 / 64 px.

## Layout

- Marketing — 1440px max width
- App shell — 100vw
- Spacing scale rooted on 4px — 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 80
- Sections alternate white and `surface-alt` for rhythm
- Soft gradient backdrops appear once per page max
- Template grids — 4-up desktop, 2-up tablet, 1-up mobile
- Editor sidebar collapses to bottom-sheet below 1024px
- Template grid reflows 4 → 2 → 1 at 1280 / 768 / 480
- Headlines scale 64 → 32 on mobile
- CTAs become full-width below 480px

## Elevation & Depth

Soft shadows appear on hover, never on default state. Modals get `0 12px 32px rgba(15, 16, 21, 0.16)`. Floating action buttons in the editor get `0 4px 12px rgba(139, 61, 255, 0.24)`. No neumorphism. No inner shadows.

## Shapes

- **Buttons** — 8px radius (rounded medium); search bars use full pill (999px)
- **Cards** — 12px radius
- **Inputs** — 8px radius, 1px hairline-strong, focus 2px purple ring with 1px offset
- **Search bars** — full pill, `surface-alt` fill on focus

Friendly geometry is part of the brand — sharp 0–4px radii are out.

## Components

**Buttons**
- Primary — `primary` `#8b3dff` fill, white text, 8px radius, padding 12/20, weight 700
- Secondary — white fill, 1px `hairline-strong`, ink text, 8px radius
- Tertiary — text-only, purple, underline on hover
- Hover — 8% darker fill, no scale, no shadow

**Cards**
- White fill, 1px `hairline`, 12px radius, padding 20
- Hover — `0 4px 16px rgba(15, 16, 21, 0.08)` shadow, no transform
- Template thumbnails — 1px border on hover only, otherwise borderless

**Inputs**
- 1px `hairline-strong`, 8px radius, padding 10/14
- Focus — 2px purple ring with 1px offset
- Search bars — full pill (999px), `surface-alt` fill on focus

**Illustrations**
- Flat vector with rounded geometric forms
- 3–4 brand hues per illustration max
- Avoid photorealism in marketing; product UI uses real template thumbnails

**Gradients**
- Allowed only on hero backdrops and large promotional cards
- Never on buttons, never on body text

## Do's and Don'ts

**Do**
- Anchor every viewport on one Canva-purple CTA, no exceptions
- Use the gradient backdrop sparingly — once per page for emphasis
- Write microcopy that explains the next click in plain words
- Show real template thumbnails in product surfaces, not placeholder shapes

**Don't**
- Apply gradients to buttons or body text
- Use sharp 0–4px radii — friendly geometry is part of the brand
- Drop the brand spectrum to a single hue for "professionalism" — the spectrum is the identity
- Stack two saturated brand-hue CTAs on the same fold
- Replace illustrations with stock photography in marketing

## Agent Prompt Guide

**Bias toward** — white canvas, single-typeface (Canva Sans) hierarchy, one Canva-purple primary per viewport, full brand spectrum reserved for illustrations and gradient backdrops, 8–12px radii, soft hover shadows, friendly microcopy, real template thumbnails.

**Reject** — dark-mode default, monochrome single-hue palettes, sharp 0px radii, gradient-filled buttons, photorealistic stock imagery, dense data-table layouts, hero copy that assumes designer literacy.
