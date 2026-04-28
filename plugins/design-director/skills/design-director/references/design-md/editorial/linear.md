---
version: alpha
name: Linear
description: |
  Linear's website is a masterclass in dark-mode-first product design — a near-black canvas (`#08090a`) where content emerges from darkness like starlight. This isn't a dark theme applied to a light design; darkness is the native medium, and information density is managed through subtle gradations of white opacity rather than color variation. The typography is built entirely on **Inter Variable** with OpenType `"cv01"` and `"ss03"` enabled globally — features that aren't decorative but transform Inter into Linear's distinctive geometric typeface. The signature weight is **510**, sitting between regular (400) and medium (500) for a subtly emphasised feel. Display sizes use aggressive **negative letter-spacing**: -1.584px at 72px, -1.408px at 64px, -1.056px at 48px, -0.704px at 32px — a compression discipline that is core brand identity. The single chromatic accent is the **brand indigo-violet** (`#5e6ad2` for backgrounds, `#7170ff` for interactive accents) — used sparingly and only on CTAs, active states, and brand elements. Borders are ultra-thin semi-transparent white (`rgba(255,255,255,0.05)` to `rgba(255,255,255,0.08)`), and elevation is communicated through background luminance steps (rgba white at 0.02 → 0.04 → 0.05) rather than drop shadows. Mood — engineered, nocturnal, precise, luminous.

colors:
  primary: "#5e6ad2"
  primary-hover: "#828fff"
  accent: "#7170ff"
  ink: "#f7f8f8"
  body: "#d0d6e0"
  muted: "#8a8f98"
  muted-soft: "#62666d"
  canvas: "#010102"
  surface: "#0f1011"
  surface-elevated: "#191a1b"
  surface-strong: "#28282c"
  hairline: "#23252a"
  hairline-strong: "#34343a"
  hairline-tertiary: "#3e3e44"
  on-primary: "#ffffff"
  on-dark-soft: "#e2e4e7"
  link: "#7170ff"
  success: "#27a644"
  success-secondary: "#10b981"
  security: "#7a7fad"

typography:
  display-xl:
    fontFamily: "'Inter Variable', 'SF Pro Display', -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
    fontSize: 72px
    fontWeight: 510
    lineHeight: 1.00
    letterSpacing: -1.584px
  display-lg:
    fontFamily: "'Inter Variable', 'SF Pro Display', -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
    fontSize: 64px
    fontWeight: 510
    lineHeight: 1.00
    letterSpacing: -1.408px
  display:
    fontFamily: "'Inter Variable', 'SF Pro Display', -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
    fontSize: 48px
    fontWeight: 510
    lineHeight: 1.00
    letterSpacing: -1.056px
  heading-1:
    fontFamily: "'Inter Variable', 'SF Pro Display', -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.13
    letterSpacing: -0.704px
  heading-2:
    fontFamily: "'Inter Variable', 'SF Pro Display', -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: -0.288px
  heading-3:
    fontFamily: "'Inter Variable', 'SF Pro Display', -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
    fontSize: 20px
    fontWeight: 590
    lineHeight: 1.33
    letterSpacing: -0.24px
  body-lg:
    fontFamily: "'Inter Variable', 'SF Pro Display', -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.60
    letterSpacing: -0.165px
  body:
    fontFamily: "'Inter Variable', 'SF Pro Display', -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  body-medium:
    fontFamily: "'Inter Variable', 'SF Pro Display', -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
    fontSize: 16px
    fontWeight: 510
    lineHeight: 1.50
    letterSpacing: 0
  body-semibold:
    fontFamily: "'Inter Variable', 'SF Pro Display', -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
    fontSize: 16px
    fontWeight: 590
    lineHeight: 1.50
    letterSpacing: 0
  small:
    fontFamily: "'Inter Variable', 'SF Pro Display', -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.60
    letterSpacing: -0.165px
  caption:
    fontFamily: "'Inter Variable', 'SF Pro Display', -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
    fontSize: 13px
    fontWeight: 510
    lineHeight: 1.50
    letterSpacing: -0.13px
  label:
    fontFamily: "'Inter Variable', 'SF Pro Display', -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
    fontSize: 12px
    fontWeight: 510
    lineHeight: 1.40
    letterSpacing: 0
  mono-body:
    fontFamily: "'Berkeley Mono', ui-monospace, 'SF Mono', Menlo, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  mono-label:
    fontFamily: "'Berkeley Mono', ui-monospace, 'SF Mono', Menlo, monospace"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 5px
  lg: 6px
  xl: 8px
  "2xl": 12px
  "3xl": 22px
  full: 9999px
  circle: 9999px

spacing:
  "0": 0px
  "1": 1px
  "2": 4px
  "3": 7px
  "4": 8px
  "5": 11px
  "6": 12px
  "7": 16px
  "8": 19px
  "9": 20px
  "10": 22px
  "11": 24px
  "12": 28px
  "13": 32px
  section: 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-medium}"
    rounded: "{rounded.lg}"
    padding: 8px 16px
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-dark-soft}"
    typography: "{typography.body-medium}"
    rounded: "{rounded.lg}"
    padding: 8px 16px
  button-subtle:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.body}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: 0px 6px
  button-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: 0px 10px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 24px
  card-featured:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.2xl}"
    padding: 32px
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 12px 14px
  badge-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: 0px 10px
  status-dot:
    backgroundColor: "{colors.success-secondary}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.circle}"
    size: 10px
---

## Overview

Linear's marketing surface is dark-mode-native — `#08090a` is not a "theme toggle" but the system's primary identity. Hierarchy is built through **luminance stacking**: deeper = darker, elevated = slightly lighter, layered through near-zero white-opacity surfaces (`rgba(255,255,255,0.02)` → `0.04` → `0.05`). The single chromatic accent is the brand indigo-violet — used only on primary CTAs and active states, never decoratively. **Inter Variable with `"cv01", "ss03"` enabled globally** is non-negotiable — without those features, it's generic Inter, not Linear's Inter. Berkeley Mono provides the technical-label voice for code blocks and metadata.

Mood — engineered, nocturnal, precise, luminous.

## Colors

The system is **achromatic + brand indigo**. Background surfaces stack from `#010102` / `#08090a` (marketing canvas) → `#0f1011` (panel) → `#191a1b` (elevated) → `#28282c` (hover / strong). Text descends from `#f7f8f8` (primary, deliberately not pure white) → `#d0d6e0` (body silver-gray) → `#8a8f98` (muted) → `#62666d` (quaternary).

The brand accent triplet is **`#5e6ad2`** (CTA backgrounds, brand marks) → **`#7170ff`** (interactive/active) → **`#828fff`** (hover). Status colors (`#27a644` green, `#10b981` emerald) are reserved for completion / "in progress" indicators. Borders are semi-transparent white (`rgba(255,255,255,0.05)` to `rgba(255,255,255,0.08)`) or solid dark (`#23252a` / `#34343a` / `#3e3e44`) — chosen by context.

The **`#f7f8f8` primary text** color is critical — pure white (`#ffffff`) is too harsh on the deep canvas and breaks Linear's nocturnal calm.

## Typography

**Inter Variable with `"cv01", "ss03"` enabled globally** is the single most important typographic decision. The cv01 alternate gives a single-story lowercase `a`; ss03 adjusts other letterforms for a cleaner geometric feel. Together they transform Inter into Linear's distinctive face.

**Three-tier weight system**: 400 (reading), **510** (UI / emphasis — Linear's signature between-weight), 590 (strong emphasis). Weight 700 is forbidden; weight 300 appears only in deliberately de-emphasized contexts.

**Display compression** is brand-defining and must not be relaxed:
- 72px → -1.584px tracking
- 64px → -1.408px
- 48px → -1.056px
- 32px → -0.704px
- Below 24px → tracking relaxes toward 0

Berkeley Mono carries code, technical labels, and uppercase metadata.

## Layout

8px base, with deliberate micro-adjustment values (1px / 7px / 11px / 19px / 22px) for optical alignment. Primary rhythm is 8px / 16px / 24px / 32px. Section padding lands at 80px+ vertical with no visible dividers — the dark canvas itself provides separation.

Max content width approximately 1200px. Hero is centered single-column with generous vertical padding; feature sections use 2–3 column grids; changelog runs single-column timeline.

## Elevation & Depth

On dark surfaces, traditional drop shadows are nearly invisible. Linear uses **luminance stepping** as the primary depth signal:

- **Level 0 (Flat)**: `#010102` / `#08090a` page background
- **Level 1 (Subtle)**: `rgba(0,0,0,0.03) 0px 1.2px 0px` — toolbar buttons
- **Level 2 (Surface)**: `rgba(255,255,255,0.05)` bg + `1px solid rgba(255,255,255,0.08)` border — cards, inputs
- **Level 2b (Inset)**: `rgba(0,0,0,0.2) 0px 0px 12px 0px inset` — recessed panels
- **Level 3 (Ring)**: `rgba(0,0,0,0.2) 0px 0px 0px 1px` — border-as-shadow
- **Level 4 (Elevated)**: `rgba(0,0,0,0.4) 0px 2px 4px` — floating elements
- **Level 5 (Dialog)**: multi-layer stack for popovers, command palette

The inset shadow (`0 0 12px 0 inset` at 20% black) creates a "sunken" effect unique to Linear — recessed panels that feel built into the surface rather than floating above it.

## Shapes

- **xs (2px)**: inline badges, micro-tags
- **sm (4px)**: small containers, list items
- **md (5px)**: button-style inputs
- **lg (6px)**: buttons, comfortable functional radius — the workhorse
- **xl (8px)**: cards, dropdowns, popovers
- **2xl (12px)**: featured panels, section containers
- **3xl (22px)**: large panel elements
- **full (9999px)**: filter pills, status chips, icon buttons

The 6px button radius is core — pill buttons (9999px) are reserved for chips and status tags only, never primary CTAs.

## Components

**Button primary**: `#5e6ad2` brand indigo fill, white text, 6px radius, 8×16 padding. Hover shifts to `#828fff`.

**Button ghost**: near-zero `rgba(255,255,255,0.02)` background, `#e2e4e7` text, 6px radius, 1px solid `#23252a` border. The standard secondary action — translucent rather than solid.

**Button subtle**: `rgba(255,255,255,0.04)` background, `#d0d6e0` text, 6px radius. For toolbar / contextual actions.

**Button pill / filter chip**: transparent or `rgba(255,255,255,0.05)` background, `#d0d6e0` text, 9999px radius, 1px solid `#23252a` border, 12px / weight 510. Used for filter chips, tags, status indicators.

**Card**: `rgba(255,255,255,0.02)` to `0.05` (never solid) background, 1px solid `rgba(255,255,255,0.08)` border, 8px radius. Subtle background opacity increase on hover.

**Card featured**: 12px radius for featured / promoted panels; 22px for very large surfaces.

**Input**: `rgba(255,255,255,0.02)` background, `#d0d6e0` text, 1px solid `rgba(255,255,255,0.08)` border, 6px radius, 12×14 padding. Focus uses a multi-layer shadow stack.

**Badge / status pill**: 9999px circular for status dots (10px diameter, `#10b981` emerald). Pill chips at 9999px with subtle bg + 12px Inter / weight 510.

## Do's and Don'ts

**Do**

- Set `font-feature-settings: "cv01", "ss03"` on ALL Inter text — this is non-negotiable
- Use weight 510 as the default emphasis — Linear's signature between-weight
- Apply aggressive negative letter-spacing at display sizes (-1.584px at 72px, -1.056px at 48px)
- Build on near-black canvases: `#08090a` marketing, `#0f1011` panel, `#191a1b` elevated
- Use semi-transparent white borders (`rgba(255,255,255,0.05)`–`0.08`) — never solid dark borders on dark
- Keep button backgrounds nearly transparent (`rgba(255,255,255,0.02)`–`0.05`)
- Reserve brand indigo (`#5e6ad2` / `#7170ff`) for CTAs and interactive accents only
- Use `#f7f8f8` for primary text — never pure `#ffffff`
- Communicate elevation through luminance stepping, not drop shadows

**Don't**

- Don't use pure white as primary text — `#f7f8f8` prevents eye strain
- Don't apply brand indigo decoratively — it's interactive-only
- Don't use positive letter-spacing on display — Inter at 24px+ runs negative or zero
- Don't use weight 700 — Linear maxes at 590
- Don't skip `"cv01", "ss03"` — without them it's generic Inter
- Don't introduce warm hues into UI chrome — palette is cool gray + indigo
- Don't use opaque button backgrounds — translucency is the system

## Agent Prompt Guide

**Bias toward** — Inter Variable with `"cv01", "ss03"`, weight 510, aggressive negative tracking on display, near-transparent button backgrounds, semi-transparent white borders, luminance stepping for elevation, brand indigo as the only chromatic accent, Berkeley Mono for code/labels.

**Reject** — pure white text, solid colored button backgrounds, decorative use of brand indigo, weight 700, positive letter-spacing on display, opaque dark borders, drop shadows for elevation on dark, warm color hues in UI chrome.
