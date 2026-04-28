---
version: alpha
name: Sanity
description: |
  Sanity's website is a developer-content platform rendered as a nocturnal command center — dark, precise, and deeply structured. The entire experience sits on **near-black canvas (`#0b0b0b`)** that reads less like a "dark mode toggle" and more like the natural state of a tool built for people who live in terminals. The signature typographic voice is **waldenburgNormal** — a custom geometric sans-serif with extreme negative letter-spacing at display sizes (-0.32px at 32px → **-4.48px at 112px**) that gives headlines a precision-cut, machined quality. **IBM Plex Mono** carries technical labels and code, creating a dual-register voice: editorial authority meets developer credibility. The neutral palette runs **pure achromatic** — `#0b0b0b` → `#212121` → `#353535` → `#797979` → `#b9b9b9` → `#ededed` → `#ffffff` — with no warm or cool bias. Against this disciplined dark backdrop, vivid accent punctuation lands like signal lights: **electric blue (`#0052ef`)** for ALL hover/active states (buttons, links, everything dims toward this blue on interaction), **Sanity Red (`#f36458`)** for primary CTAs, and a wide-gamut neon green for premium highlights. Buttons are **full-pill (99999px)** for primary CTAs, dropping to **3–6px subtle radius** for ghost/secondary actions. Mood — engineered, nocturnal, precision-cut, terminal-grade.

colors:
  primary: "#f36458"
  primary-hover: "#0052ef"
  ink: "#ffffff"
  body: "#b9b9b9"
  muted: "#797979"
  canvas: "#0b0b0b"
  surface: "#212121"
  surface-strong: "#353535"
  surface-light: "#ededed"
  surface-light-canvas: "#ffffff"
  surface-deep: "#000000"
  hairline: "#212121"
  hairline-strong: "#353535"
  hairline-light: "#ffffff"
  on-primary: "#ffffff"
  on-light: "#0b0b0b"
  on-light-soft: "#212121"
  link: "#b9b9b9"
  accent-blue: "#0052ef"
  accent-blue-light: "#55beff"
  accent-blue-soft: "#afe3ff"
  accent-green: "#19d600"
  accent-magenta: "#f500ff"
  success: "#37cd84"
  error: "#dd0000"
  focus: "#0052ef"

typography:
  display-hero:
    fontFamily: "waldenburgNormal, 'waldenburgNormal Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: 112px
    fontWeight: 400
    lineHeight: 1.00
    letterSpacing: -4.48px
  hero-secondary:
    fontFamily: "waldenburgNormal, 'waldenburgNormal Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: 72px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -2.88px
  section-heading:
    fontFamily: "waldenburgNormal, 'waldenburgNormal Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: -1.68px
  heading-lg:
    fontFamily: "waldenburgNormal, 'waldenburgNormal Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: 38px
    fontWeight: 400
    lineHeight: 1.10
    letterSpacing: -1.14px
  heading-md:
    fontFamily: "waldenburgNormal, 'waldenburgNormal Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: 32px
    fontWeight: 425
    lineHeight: 1.24
    letterSpacing: -0.32px
  heading-sm:
    fontFamily: "waldenburgNormal, 'waldenburgNormal Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 425
    lineHeight: 1.24
    letterSpacing: -0.24px
  subheading:
    fontFamily: "waldenburgNormal, 'waldenburgNormal Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 425
    lineHeight: 1.13
    letterSpacing: -0.2px
  body-lg:
    fontFamily: "waldenburgNormal, 'waldenburgNormal Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: -0.18px
  body:
    fontFamily: "waldenburgNormal, 'waldenburgNormal Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  body-sm:
    fontFamily: "waldenburgNormal, 'waldenburgNormal Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: -0.15px
  caption:
    fontFamily: "waldenburgNormal, 'waldenburgNormal Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: -0.13px
  micro:
    fontFamily: "waldenburgNormal, 'waldenburgNormal Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.00
    letterSpacing: 0
  mono-body:
    fontFamily: "'IBM Plex Mono', 'ibmPlexMono Fallback', ui-monospace, monospace"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  mono-caption:
    fontFamily: "'IBM Plex Mono', 'ibmPlexMono Fallback', ui-monospace, monospace"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.30
    letterSpacing: 0
  button:
    fontFamily: "waldenburgNormal, 'waldenburgNormal Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.20
    letterSpacing: 0

rounded:
  none: 0px
  xs: 3px
  sm: 5px
  md: 6px
  lg: 12px
  pill: 9999px
  full: 9999px

spacing:
  "0": 0px
  "1": 1px
  "2": 2px
  "3": 4px
  "4": 6px
  "5": 8px
  "6": 12px
  "7": 16px
  "8": 24px
  "9": 32px
  "10": 48px
  "11": 64px
  section: 96px
  section-lg: 120px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  button-dark-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 8px 12px
  button-light-pill:
    backgroundColor: "{colors.surface-light-canvas}"
    textColor: "{colors.on-light}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 8px
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 0px 12px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 24px
  card-feature:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 32px
  input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    padding: 8px 12px
  badge-light:
    backgroundColor: "{colors.surface-light-canvas}"
    textColor: "{colors.on-light}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 8px
  badge-dark:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 8px
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
---

## Overview

Sanity's marketing surface is precision dark — a single near-black canvas, a single neutral gray scale, and a tight chromatic vocabulary that punctuates rather than decorates. The primary action voice is **coral-red CTA on dark canvas**, and **every interactive element on hover dims toward the same electric blue** (`#0052ef`) — buttons, links, nav, all converge on a single hover signal. This consistency is the brand's "activation" gesture.

Mood — engineered, nocturnal, precision-cut, terminal-grade.

## Colors

The palette is **achromatic + chromatic punctuation**:

- **Sanity Black** (`#0b0b0b`): primary canvas — not pure black but close enough to feel absolute
- **Pure Black** (`#000000`): maximum-contrast moments, deep overlays
- **Sanity Red** (`#f36458`): primary CTA fill
- **Electric Blue** (`#0052ef`): the universal hover/active state — every interactive element shifts to this blue on hover
- **Light Blue** (`#55beff`) and **Soft Blue** (`#afe3ff`): secondary blue variants for accent backgrounds and badges
- **Neon Green** (`#19d600`): sRGB fallback for the wide-gamut display-p3 green used as `--color-fg-accent-green` for success states (originally `color(display-p3 .270588 1 0)`)
- **Accent Magenta** (`#f500ff`): sRGB fallback for the display-p3 magenta accent (originally `color(display-p3 .960784 0 1)`)
- **Surface scale** (`#0b0b0b` → `#212121` → `#353535` → `#797979` → `#b9b9b9` → `#ededed` → `#ffffff`): pure achromatic, no warm/cool bias
- **Error** (`#dd0000`): pure red for destructive actions
- **Success** (`#37cd84`): GPC green privacy/compliance indicator

The hover-blue convergence (`#0052ef`) is what holds the system together — every interactive element answers the same chromatic question.

## Typography

**waldenburgNormal** is the brand voice — a custom geometric sans-serif used for both display and body. The narrow weight range (400–425 for most, 500–600 only for tiny labels) keeps the voice consistent. **IBM Plex Mono** carries code, technical labels, and uppercase metadata.

**Extreme negative tracking at scale** is the typographic signature:
- 112px → -4.48px
- 72px → -2.88px
- 48px → -1.68px
- 38px → -1.14px
- 32px → -0.32px
- Below 24px → tracking relaxes toward 0

OpenType features `"cv01", "cv11", "cv12", "cv13", "ss07"` are used on display sizes and `"calt" 0` on body — fine-tuning glyph alternates by context.

**Tight headings, relaxed body**: 1.00–1.24 line-height on display, 1.50 on body — the contrast creates clear visual hierarchy.

For external implementations, **Inter** or **Space Grotesk** is the closest substitute (geometric, slightly condensed feel). IBM Plex Mono is publicly available on Google Fonts.

## Layout

8px base. Spacing scale runs 1px / 2px / 4px / 6px / 8px / 12px / 16px / 24px / 32px / 48px / 64px / 96–120px. Section vertical rhythm sits at 64–120px on the dark canvas, creating "slides" — each section feels like its own focused frame.

Max content width approximately 1440px. Page gutter 32px desktop, 16px mobile. Multi-column layouts run 2–3 columns on desktop, single column on mobile. Card grids use 16–24px gaps.

## Elevation & Depth

Sanity's depth is almost entirely **colorimetric** rather than shadow-based:

| Level | Treatment | Use |
|---|---|---|
| Flat (0) | none | Default — dark surfaces create depth through color alone |
| Level 1 | `0px 0px 0px 1px #212121` | Border-as-shadow for minimal containment |
| Focus | `0 0 0 2px #0052ef` | Focus ring on interactive elements |
| Overlay | Backdrop blur + semi-transparent dark | Navigation overlay, modal backgrounds |

Elevation is communicated through **surface color shifts**: `#0b0b0b` (ground) → `#212121` (elevated) → `#353535` (prominent) → `#ffffff` (inverted/highest). This approach is native to dark interfaces. Border-based containment (1px solid `#212121` or `#353535`) is the primary spatial separator.

## Shapes

The radius system has a deliberate **gap between 12px and 99999px** — there is no 16px / 24px middle ground.

- **xs (3px)**: inputs, textareas, subtle rounding
- **sm (5px)**: secondary buttons, ghost actions
- **md (6px)**: standard cards, containers
- **lg (12px)**: large cards, feature containers
- **pill / full (9999px)**: primary buttons, badges

The 12-to-pill jump is part of the brand identity — you're either a "subtle rectangle" or a "decisive pill," nothing in between.

## Components

**Button primary**: `#f36458` Sanity Red fill, white text, **9999px pill**, 8×16 padding. Hover shifts to **`#0052ef` electric blue** with white text — the universal Sanity hover signal.

**Button dark-pill**: `#0b0b0b` near-black fill, `#b9b9b9` silver text, 9999px pill, 8×12 padding. Hover → blue.

**Button light-pill**: `#ffffff` fill, near-black text, 1px solid `#0b0b0b` border, 9999px pill, 8px padding.

**Button ghost**: `#212121` dark gray fill, silver text, **5px subtle rectangle radius**, 0×12 padding. Used for inline / contextual actions.

**Card**: `#212121` dark gray fill, **6px radius**, 24px padding. Card feature: `#0b0b0b` or full-bleed image, **12px radius**, 32px padding.

**Input**: `#0b0b0b` near-black fill, silver text, 1px solid `#212121` border, **3px subtle radius**, 8×12 padding. Focus ring uses `#0052ef` at 2px.

**Badge light** (`#ffffff` fill, near-black text) and **Badge dark** (`#0b0b0b` fill, white text): both 9999px pill with 8px padding and 13px caption text.

**Nav bar**: `#0b0b0b` background with backdrop blur, silver links, primary red pill CTA right-aligned.

## Do's and Don'ts

**Do**

- Build on the achromatic gray scale — pure neutral discipline, no warm/cool tinting
- Apply Electric Blue (`#0052ef`) consistently as the universal hover/active state
- Use extreme negative letter-spacing (-2px to -4.48px) on display 48px+
- Keep primary CTAs as full-pill (99999px) with Sanity Red (`#f36458`)
- Use IBM Plex Mono uppercase for technical labels, tags, system metadata
- Communicate depth through surface color (dark → light), not shadows
- Maintain generous vertical section spacing (64–120px) on the dark canvas
- Use OpenType features (`"cv01"`, `"cv11"`, `"cv12"`, `"cv13"`, `"ss07"`) for display

**Don't**

- Don't introduce warm/cool tints to the neutral scale — pure achromatic
- Don't use drop shadows for elevation — colorimetric depth only
- Don't apply border-radius between 13px and 99998px — system jumps from 12px directly to pill
- Don't mix the coral-red CTA with electric blue on the same element
- Don't use heavy weights (700+) — system maxes at 600 and only on 11px labels
- Don't use traditional offset box-shadows — ring shadows or border containment only
- Don't break tight line-heights on headings — 1.00–1.24, never 1.5+

## Agent Prompt Guide

**Bias toward** — waldenburgNormal (or Inter / Space Grotesk substitute) with extreme negative tracking on display, IBM Plex Mono uppercase for technical labels, achromatic neutral scale, electric-blue universal hover convergence, Sanity Red for primary CTAs, full-pill primary buttons with 3–6px subtle ghosts, surface-color luminance stepping for depth.

**Reject** — warm/cool gray tints, drop shadows for elevation, mid-range radii (13–99998px), heavy weights, mixing red CTA with blue hover on the same element, loose display line-heights.
