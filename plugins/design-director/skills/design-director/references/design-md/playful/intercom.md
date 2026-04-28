---
version: alpha
name: Intercom
description: |
  Intercom's marketing is a warm, confident customer-service platform that communicates "AI-first helpdesk" through a clean editorial design language. The page operates on a warm off-white canvas `#faf9f6` with off-black `#111111` text, creating an intimate magazine-like reading experience. The signature Fin Orange `#ff5600` — named after Intercom's AI agent — serves as the singular vibrant accent against the warm neutral palette. Saans is the typographic centerpiece — a custom geometric sans-serif with aggressive negative letter-spacing (-2.4px at 80px, -0.48px at 24px) and a consistent 1.00 line-height across all heading sizes, creating ultra-compressed billboard-like headlines that feel engineered and precise. Sharp 4px border-radius on buttons creates near-rectangular interactive elements that feel industrial and precise, contrasting with the warm surface colors. Button hover states use `scale(1.1)` expansion creating a physical "growing" interaction, with active state dropping to `scale(0.85)`. Mood — warm-industrial, editorial, precise, AI-confident.

colors:
  primary: "#111111"
  primary-hover: "#ffffff"
  accent-fin: "#ff5600"
  accent-orange: "#fe4c02"
  accent-blue: "#65b5ff"
  accent-green: "#0bdf50"
  accent-red: "#c41c1c"
  accent-pink: "#ff2067"
  accent-lime: "#b3e01c"
  accent-deep-blue: "#0007cb"
  ink: "#111111"
  body: "#313130"
  muted: "#626260"
  muted-soft: "#7b7b78"
  tertiary: "#9c9fa5"
  canvas: "#ffffff"
  surface-soft: "#faf9f6"
  surface-warm: "#d3cec6"
  hairline: "#dedbd6"
  on-primary: "#ffffff"
  active-state: "#2c6415"

typography:
  display-hero:
    fontFamily: "Saans, ui-sans-serif, system-ui, sans-serif"
    fontSize: 80px
    fontWeight: 400
    lineHeight: 1.00
    letterSpacing: -2.4px
  section-heading:
    fontFamily: "Saans, ui-sans-serif, system-ui, sans-serif"
    fontSize: 54px
    fontWeight: 400
    lineHeight: 1.00
    letterSpacing: -1.6px
  sub-heading:
    fontFamily: "Saans, ui-sans-serif, system-ui, sans-serif"
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.00
    letterSpacing: -1.2px
  card-title:
    fontFamily: "Saans, ui-sans-serif, system-ui, sans-serif"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.00
    letterSpacing: -0.96px
  feature-title:
    fontFamily: "Saans, ui-sans-serif, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.00
    letterSpacing: -0.48px
  body-emphasis:
    fontFamily: "Saans, ui-sans-serif, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: -0.2px
  nav:
    fontFamily: "Saans, ui-sans-serif, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.00
    letterSpacing: 0
  body:
    fontFamily: "Saans, ui-sans-serif, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  body-light:
    fontFamily: "Saans, ui-sans-serif, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 300
    lineHeight: 1.40
    letterSpacing: 0
  button:
    fontFamily: "Saans, ui-sans-serif, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  button-bold:
    fontFamily: "LLMedium, MediumLL, system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.20
    letterSpacing: 0.16px
  serif-body:
    fontFamily: "Serrif, ui-serif, Georgia, serif"
    fontSize: 16px
    fontWeight: 300
    lineHeight: 1.40
    letterSpacing: -0.16px
  mono-label:
    fontFamily: "SaansMono, ui-monospace, monospace"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.30
    letterSpacing: 0.6px

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 6px
  lg: 8px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 10px
  "4": 12px
  "5": 14px
  "6": 16px
  "7": 20px
  "8": 24px
  "9": 32px
  "10": 40px
  "11": 48px
  "12": 60px
  "13": 64px
  "14": 80px
  "15": 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 0px 14px
  button-outlined:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 0px 14px
  button-warm:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 16px
  card:
    backgroundColor: "{colors.surface-soft}"
    rounded: "{rounded.lg}"
    padding: 24px
  card-white:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: 24px
  input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
  nav-pill:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.nav}"
    rounded: "{rounded.md}"
    padding: 8px 12px
---

## Overview

Intercom runs on warm cream `#faf9f6` canvas with off-black `#111111` text — an intimate magazine-like reading experience. Saans is the typographic centerpiece — custom geometric sans with aggressive negative tracking (-2.4px at 80px, -0.48px at 24px) and consistent 1.00 line-height across heading sizes, creating ultra-compressed billboard headlines. The signature Fin Orange `#ff5600` (named after Intercom's AI agent) is the singular vibrant accent. Sharp 4px button radii feel industrial and precise; `scale(1.1)` hover with `scale(0.85)` active creates a physical "growing" interaction.

Mood — warm-industrial, editorial, precise, AI-confident.

## Colors

The canvas is warm cream `#faf9f6` (button bg / card surface) with pure white `#ffffff` for primary surface and oat `#dedbd6` for warm hairlines. Off-black `#111111` for text and primary buttons; deep neutrals step through `#313130` (Black 80) → `#626260` (Black 60) → `#7b7b78` (Black 50) → `#9c9fa5` (tertiary) — all warm-shifted, never cool gray.

Fin Orange `#ff5600` is the singular brand accent for AI/Fin contexts. The report palette (blue `#65b5ff`, green `#0bdf50`, red `#c41c1c`, pink `#ff2067`, lime `#b3e01c`, orange `#fe4c02`, deep blue `#0007cb`) handles data visualization. Active button state uses `#2c6415` (deep green flash) on press.

Borders use oklab-based opacity values for sophisticated color management — warm oat tones at varying opacity.

## Typography

Saans is the cornerstone with 1.00 line-height across all heading sizes — every heading sits in a tight billboard-style block. Negative tracking scales with size: -2.4px at 80px hero down to -0.48px at 24px feature title, then 0 at 16px body. Body uses 1.50 line-height for readability. SaansMono carries uppercase technical labels with 0.6–1.2px wide tracking. Serrif (the custom serif companion) appears at 16px / weight 300 with -0.16px tracking for editorial moments. MediumLL / LLMedium handle specific UI bold contexts.

## Layout

8px base, scale 8/10/12/14/16/20/24/32/40/48/60/64/80/96px. Section padding generous, button padding industrial-tight (0/14). Cards use 8px radius; buttons use 4–6px.

## Elevation & Depth

Minimal shadows. Depth communicated through warm border colors and surface tints — sand-cream layering creates gentle hierarchy. The `scale(1.1)` button hover and `scale(0.85)` active replace shadow lifts as physical interaction signals.

## Shapes

2px (micro inline) → 4px (buttons — sharp industrial geometry, the identity) → 6px (nav pills) → 8px (cards, containers). Never round buttons beyond 4px.

## Components

**Primary dark** — `#111111` fill, white text, 0/14 padding, 4px radius, hover white background with dark text and `scale(1.1)`, active green `#2c6415` with `scale(0.85)`. Industrial precision.

**Outlined** — transparent fill, `#111111` text, `1px solid #111111`, 4px radius, same scale hover/active.

**Warm card button** — `#faf9f6` fill, `#111111` text, 16px padding, oklab-opacity border.

**Cards** — `#faf9f6` warm cream fill, `1px solid #dedbd6` warm oat border, 8px radius, no visible shadows.

**Nav** — Saans 16px links, off-black on white canvas, small 4–6px radius buttons. Fin Orange `#ff5600` accent reserved for AI features.

## Do's and Don'ts

**Do**
- Use Saans with 1.00 line-height and negative tracking on all headings
- Apply 4px radius on buttons — sharp industrial geometry is the identity
- Use Fin Orange `#ff5600` for AI/brand accent only — singular and reserved
- Apply `scale(1.1)` hover on buttons for physical interaction
- Use warm neutrals (`#faf9f6`, `#dedbd6`, `#7b7b78`) — never cool gray
- Maintain consistent 1.00 line-height across all heading sizes — billboard rhythm
- Use SaansMono uppercase with wide tracking (0.6–1.2px) for technical labels

**Don't**
- Round buttons beyond 4px — sharp geometry is structural
- Use Fin Orange decoratively — reserved for primary brand and AI moments
- Use cool gray borders — always warm oat tones
- Skip the negative tracking on headings — billboard compression is the identity
- Use varying line-heights on headings — 1.00 across the board
- Replace warm neutrals with conventional grays

## Agent Prompt Guide

**Bias toward** — warm cream `#faf9f6` canvas, Saans with 1.00 line-height + negative tracking, Fin Orange `#ff5600` AI accent, sharp 4px button radii, `scale(1.1)` hover physical interaction, warm oat `#dedbd6` borders, SaansMono uppercase 0.6px-tracked labels.

**Reject** — pill or large-radius buttons, decorative orange use, cool gray neutrals, varying heading line-heights, soft hover-shadow elevation, conventional `#000000` text.
