---
version: alpha
name: Together AI
description: |
  Together AI's interface is a pastel-gradient dreamscape built for enterprise AI infrastructure — a design that somehow makes GPU clusters and model inference feel light, airy, and optimistic. The hero blooms with soft pink-blue-lavender gradients and abstract painterly illustrations evoking clouds and flight, establishing a visual metaphor for the "AI-Native Cloud." Against this softness, the typography cuts through with precision: "The Future" at 64px with aggressive negative tracking (-1.92px) creates dense, authoritative headline blocks. The design straddles two worlds — a bright, white-canvas light side where pastel gradients and stats cards make enterprise AI feel approachable, and a dark midnight blue universe (`#010120` — not gray-black, distinctly blue) where research papers and technical content live. PP Neue Montreal Mono provides uppercase labels with meticulous letter-spacing. Brand magenta (`#ef2cc1`) and orange (`#fc4c02`) appear sparingly in gradient illustrations only — never polluting the clean UI. Sharp 4–8px radii throughout, contrasted against the soft pastels. Shadows are dark-blue-tinted (`rgba(1, 1, 32, 0.1)`), tying elevation to the brand palette. Mood — optimistic, dual-world, geometric, atmospheric.

colors:
  primary: "#000000"
  primary-hover: "#010120"
  ink: "#000000"
  body: "#000000"
  muted: "#666666"
  disabled: "#aaaaaa"
  canvas: "#ffffff"
  surface: "#ffffff"
  surface-dark: "#010120"
  hairline: "#ebebeb"
  hairline-strong: "#cccccc"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  brand-magenta: "#ef2cc1"
  brand-orange: "#fc4c02"
  accent-lavender: "#bdbbff"

typography:
  display-hero:
    fontFamily: "'The Future', Arial"
    fontSize: 64px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -1.92px
  heading-section:
    fontFamily: "'The Future', Arial"
    fontSize: 40px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: -0.8px
  sub-heading:
    fontFamily: "'The Future', Arial"
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.42px
  feature-title:
    fontFamily: "'The Future', Arial"
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.22px
  body-lg:
    fontFamily: "'The Future', Arial"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: -0.18px
  body:
    fontFamily: "'The Future', Arial"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: -0.16px
  button:
    fontFamily: "'The Future', Arial"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -0.16px
  caption:
    fontFamily: "'The Future', Arial"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  mono-label:
    fontFamily: "'PP Neue Montreal Mono', Georgia"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0.08px
  mono-small:
    fontFamily: "'PP Neue Montreal Mono', Georgia"
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0.055px
  mono-micro:
    fontFamily: "'PP Neue Montreal Mono', Georgia"
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.05px

rounded:
  none: 0px
  sm: 4px
  md: 8px

spacing:
  "0": 0px
  "1": 1px
  "2": 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  "3xl": 48px
  section: 80px
  section-lg: 120px

components:
  button-dark-solid:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 12px 24px
  button-outlined-light:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 12px 24px
  button-glass-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 12px 24px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: 24px
  card-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.md}"
    padding: 24px
  badge:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.mono-label}"
    rounded: "{rounded.sm}"
    padding: 2px 8px
  badge-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.mono-label}"
    rounded: "{rounded.sm}"
    padding: 2px 8px
---

## Overview

Together AI lives in two worlds simultaneously: a **light universe** of soft pastel gradients (pink, blue, lavender) over white canvas where enterprise stats and platform overviews live, and a **dark midnight-blue universe** (`#010120` — distinctly blue, not gray-black) where research papers and technical content reside. This duality elegantly separates business messaging (light, friendly, stat-driven) from research messaging (dark, serious, academic).

Mood — optimistic, dual-world, geometric, atmospheric.

## Colors

The dark surface is **Dark Blue** (`#010120`) — a deep midnight blue-black that's distinctly chromatic, not neutral. Light surfaces are pure white (`#ffffff`). Pure black (`#000000`) carries primary text on light, pure white carries it on dark.

**Brand magenta** (`#ef2cc1`) and **brand orange** (`#fc4c02`) appear only in gradient illustrations and hero artwork — never as UI chrome. **Soft lavender** (`#bdbbff`) is a secondary accent for subtle highlights.

The original system uses semi-transparent overlays heavily: `rgba(255, 255, 255, 0.12)` for frosted glass on dark, `rgba(0, 0, 0, 0.08)` for light borders, `rgba(0, 0, 0, 0.04)` for badge tints. Implement these directly as rgba — the flat hex hairlines (`#ebebeb`, `#cccccc`) here are approximations.

The pastel cloud gradient (pink → lavender → soft blue) is the hero's atmospheric move; implement as a multi-stop CSS `linear-gradient` rather than a single token.

## Typography

**The Future** carries display, heading, and body. The signature is **negative letter-spacing at every size**: -1.92px at 64px, -0.8px at 40px, -0.42px at 28px, -0.22px at 22px, -0.18px at 18px, -0.16px at 16px. Tracking scales with size, creating consistently tight modern text.

Weights are restrained: 400 (regular) and 500 (medium) — no bold. Medium marks headings and emphasis.

**PP Neue Montreal Mono** is the structural label voice — uppercase with positive letter-spacing (0.05–0.08px), used for section labels and technical markers. The mono creates a "labeled and structured" feel without competing with display text.

Line-heights are tight throughout (1.10–1.30 even on body text), creating a dense, information-rich feel.

## Layout

8px base scale extending to 80–120px section spacing. Max container width sits around 1200px. Hero is centered with the pastel gradient backdrop; feature sections use multi-column card grids; stats display as horizontal metric rows; research lives in dark full-width sections.

The whitespace philosophy is **dual atmosphere**: light sections breathe with generous spacing, dark sections concentrate denser content. Stats become visual anchors via large numbers + small captions.

## Elevation & Depth

A single, distinctive shadow token: **dark-blue-tinted** (`rgba(1, 1, 32, 0.1) 0px 4px 10px`) — tinting elevation to the brand's midnight-blue palette rather than generic black.

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow, no border | Page background, text blocks |
| Contained (Level 1) | 1px solid `rgba(0,0,0,0.08)` (light) or `rgba(255,255,255,0.12)` (dark) | Cards, badges |
| Elevated (Level 2) | `rgba(1, 1, 32, 0.1) 0px 4px 10px` | Feature cards, hover states |
| Dark zone (Level 3) | `#010120` full-width background | Research, footer, technical |

## Shapes

The radius system is **deliberately sharp**: 4px (buttons, badges, tags — primary) and 8px (larger containers, feature cards). No pills, no generous rounding. The sharp geometry contrasts with the soft pastel gradients — that contrast is core to the brand.

## Components

**Dark solid button**: `#010120` fill, white text, 4px radius, 12/24 padding — the primary CTA on light surfaces.

**Outlined light button**: white fill, black text, 1px solid `rgba(0, 0, 0, 0.08)` border, 4px radius — secondary on light.

**Glass on dark**: `rgba(255, 255, 255, 0.12)` fill, white text, 4px radius — used on dark sections at 0.5 opacity.

**Card**: white or dark fill, 1px subtle border, 8px radius, dark-blue-tinted shadow. **Stats card**: large display number (64px / weight 500) over small caption (14px).

**Badge**: 4px radius, 2/8 padding, PP Neue Montreal Mono uppercase 11px label.

## Do's and Don'ts

**Do**
- Use pastel gradients (pink/blue/lavender) for hero illustrations and decorative backgrounds
- Use Dark Blue `#010120` for dark sections — never generic gray-black
- Apply negative letter-spacing on all "The Future" text, scaled by size (-0.16 to -1.92px)
- Use PP Neue Montreal Mono uppercase for section labels and technical markers
- Keep border-radius sharp (4px primary / 8px max) — geometry is core
- Use the dark-blue-tinted shadow `rgba(1, 1, 32, 0.1)` for elevation
- Maintain the light/dark section duality — business (light) vs research (dark)
- Show enterprise stats prominently with large display numbers

**Don't**
- Use brand magenta or orange as UI colors — they're for illustrations only
- Use pill-shaped or generously rounded corners — sharp 4–8px is the rule
- Use generic gray-black for dark sections — always Dark Blue `#010120`
- Apply positive letter-spacing on "The Future" — it's always negative
- Use bold (700+) weight — 400–500 is the full range
- Use warm-toned shadows — always dark-blue-tinted
- Reduce section spacing below 48px — the open feeling is core
- Mix in additional typefaces — "The Future" + PP Neue Montreal Mono only

## Agent Prompt Guide

**Bias toward** — pastel cloud gradients (pink/lavender/blue) for hero, Dark Blue `#010120` for research/footer, "The Future" with negative tracking scaled by size, PP Neue Montreal Mono uppercase for labels, sharp 4px/8px radii, dark-blue-tinted shadow `rgba(1, 1, 32, 0.1)`, light/dark section duality, large display stats with small captions.

**Reject** — brand magenta/orange as UI chrome, pill or large radii, generic black for dark sections, positive letter-spacing on "The Future", bold weights, warm-toned shadows, additional typefaces beyond the two-pair system.
