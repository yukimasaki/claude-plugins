---
version: alpha
name: IBM
description: |
  IBM's website is enterprise authority distilled through the Carbon Design System — a design language so methodically structured it reads like an engineering specification rendered as a webpage. The page operates on a stark duality: bright white (`#ffffff`) canvas with near-black (`#161616`) text, punctuated by a single unwavering accent — IBM Blue 60 (`#0f62fe`). Every element exists within Carbon's rigid 2x grid, every color maps to a `--cds-*` semantic token, every spacing value snaps to the 8px base unit. IBM Plex Sans is the typographic backbone, with a distinctive light weight (300) at display sizes (42px+) creating an unexpectedly airy quality that whispers in counterpoint to IBM's corporate gravity. Body sizes pick up micro-tracking (0.16px at 14px, 0.32px at 12px) and IBM Plex Mono carries code and technical labels. The signature move is `0px` border-radius across buttons, inputs, cards, and tiles — Carbon is unapologetically rectangular. Depth comes from background-color layering (white → `#f4f4f4` → `#e0e0e0`) rather than shadows, and inputs use bottom-borders only, never full boxes. Mood — engineered, methodical, monumental, restrained.

colors:
  primary: "#0f62fe"
  primary-hover: "#0353e9"
  primary-active: "#002d9c"
  ink: "#161616"
  body: "#161616"
  muted: "#525252"
  placeholder: "#6f6f6f"
  disabled: "#8d8d8d"
  canvas: "#ffffff"
  surface: "#ffffff"
  surface-soft: "#f4f4f4"
  surface-soft-hover: "#e8e8e8"
  surface-strong: "#e0e0e0"
  surface-dark: "#161616"
  surface-dark-elevated: "#262626"
  surface-dark-strong: "#393939"
  hairline: "#c6c6c6"
  hairline-soft: "#e0e0e0"
  on-primary: "#ffffff"
  on-dark: "#f4f4f4"
  on-dark-soft: "#c6c6c6"
  link: "#0f62fe"
  link-hover: "#0043ce"
  focus: "#0f62fe"
  focus-inset: "#ffffff"
  selected-bg: "#edf5ff"
  success: "#24a148"
  error: "#da1e28"
  warning: "#f1c21b"
  info: "#0f62fe"

typography:
  display-01:
    fontFamily: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif"
    fontSize: 60px
    fontWeight: 300
    lineHeight: 1.17
    letterSpacing: 0
  display-02:
    fontFamily: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif"
    fontSize: 48px
    fontWeight: 300
    lineHeight: 1.17
    letterSpacing: 0
  heading-01:
    fontFamily: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif"
    fontSize: 42px
    fontWeight: 300
    lineHeight: 1.19
    letterSpacing: 0
  heading-02:
    fontFamily: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0
  heading-03:
    fontFamily: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0
  heading-04:
    fontFamily: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.40
    letterSpacing: 0
  body-long-01:
    fontFamily: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  body-long-02:
    fontFamily: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.50
    letterSpacing: 0
  body-short-01:
    fontFamily: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.29
    letterSpacing: 0.16px
  body-short-02:
    fontFamily: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.29
    letterSpacing: 0.16px
  caption-01:
    fontFamily: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0.32px
  code-01:
    fontFamily: "'IBM Plex Mono', Menlo, Courier, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0.16px
  code-02:
    fontFamily: "'IBM Plex Mono', Menlo, Courier, monospace"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  button:
    fontFamily: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.29
    letterSpacing: 0.16px

rounded:
  none: 0px
  xs: 2px
  pill: 24px
  full: 9999px

spacing:
  "0": 0px
  "1": 2px
  "2": 4px
  "3": 8px
  "4": 12px
  "5": 16px
  "6": 24px
  "7": 32px
  "8": 40px
  "9": 48px
  "10": 64px
  "11": 80px
  "12": 96px
  section: 48px
  section-lg: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 14px 63px 14px 15px
    height: 48px
  button-secondary:
    backgroundColor: "{colors.surface-dark-strong}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 14px 63px 14px 15px
    height: 48px
  button-tertiary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 14px 63px 14px 15px
    height: 48px
  button-ghost:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 14px 16px
  button-danger:
    backgroundColor: "{colors.error}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 14px 63px 14px 15px
    height: 48px
  card:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-long-01}"
    rounded: "{rounded.none}"
    padding: 16px
  input:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-long-01}"
    rounded: "{rounded.none}"
    padding: 0px 16px
    height: 40px
  nav-bar:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark-soft}"
    typography: "{typography.body-short-01}"
    height: 48px
  tag-pill:
    backgroundColor: "{colors.selected-bg}"
    textColor: "{colors.primary}"
    typography: "{typography.caption-01}"
    rounded: "{rounded.pill}"
    padding: 4px 8px
---

## Overview

IBM's Carbon Design System is the visual thesis of enterprise software made systematic. The page is a strict duality of white canvas and near-black text, anchored to a single Blue 60 accent (`#0f62fe`) that does every interactive job — links, buttons, focus rings, active indicators. Hierarchy comes from typographic restraint (light weight at display sizes), not chromatic variation, and depth comes from background-color layering rather than shadows. Every value snaps to the 8px grid, every color maps to a `--cds-*` token. The result reads like a well-typed API rendered as a marketing page.

Mood — engineered, methodical, monumental, restrained.

## Colors

The palette is **monochromatic + Blue 60**: white canvas (`#ffffff`), near-black ink (`#161616`, deliberately not pure black for micro-warmth), and a 10-step gray scale running from `#161616` through `#262626` / `#393939` / `#525252` / `#6f6f6f` / `#8d8d8d` / `#c6c6c6` / `#e0e0e0` / `#f4f4f4`. The achromatic discipline is broken only by **IBM Blue 60** (`#0f62fe`), which is the singular interactive accent — primary buttons, links, focus, active states. Status tokens (`#da1e28` red, `#24a148` green, `#f1c21b` yellow) appear sparingly in support contexts.

The dark UI chrome (nav, footer) sits on `#161616` with a lighter `#c6c6c6` link tone, inverting the body palette. Selected/active rows use `#edf5ff` Blue 10 as a tinted surface.

## Typography

**IBM Plex Sans** at weight 300 (Light) for display sizes (42px+) is the system's most distinctive move — corporate authority delivered through typographic lightness. Body sizes use weight 400 with **micro-tracking** (`0.16px` at 14px, `0.32px` at 12px) to open the tight Plex letterforms at compact scales. Weight 600 (Semibold) handles UI emphasis; **weight 700 is intentionally absent** from the production scale.

**IBM Plex Mono** carries code and technical labels. **IBM Plex Serif** appears rarely in editorial/expressive contexts. The Productive set uses tighter line-heights (1.29) for dense UI, while the Expressive set breathes more (1.40–1.50) for marketing.

## Layout

8px base grid (Carbon 2x). Component scale: 2px / 4px / 8px / 12px / 16px / 24px / 32px / 40px / 48px. Layout scale: 16px / 24px / 32px / 48px / 64px / 80px / 96px / 160px. Section transitions use 48px vertical rhythm; hero bands use 80–96px. Carbon favors **functional density** over expansive whitespace — sections pack tightly compared to consumer systems, reflecting IBM's enterprise DNA.

Grid: 16-column with 32px gutters, 16px page margins on mobile, max content width 1584px. Content typically spans 8–12 columns for readable line lengths.

## Elevation & Depth

Carbon is deliberately **shadow-averse**. Depth is achieved through **background-color layering**:

- **Layer 0** (`#ffffff`): default page surface
- **Layer 01** (`#f4f4f4`): cards, tiles, alternating sections
- **Layer 02** (`#e0e0e0`): elevated panels within Layer 01
- **Raised** (`0 2px 6px rgba(0,0,0,0.3)`): dropdowns, tooltips, overflow menus only
- **Focus** (`2px solid #0f62fe` inset + `1px solid #ffffff`): keyboard focus
- **Bottom-border** (`2px solid #161616` on bottom edge): active input and active tab indicator

When something floats in Carbon, it matters — shadows are reserved exclusively for elements that genuinely overlap content.

## Shapes

**0px border-radius** is the dominant treatment. Buttons, inputs, tiles, cards — all rectangular. The sole rounded exception is the **24px tag/label pill**. Avatar circles and icon containers use 50%. There is no 4px / 8px / 12px middle ground — Carbon is binary: rectangle or pill.

## Components

**Button primary**: `#0f62fe` Blue 60 fill, white text, 0px radius, asymmetric `14px 63px 14px 15px` padding to leave room for a trailing icon, 48px default height (40px compact, 64px expressive). Hover shifts to `#0353e9`, active to `#002d9c` Blue 80, focus shows the inset double-ring.

**Button secondary**: `#393939` Gray 80 fill with white text. **Tertiary**: transparent with 1px Blue 60 border. **Ghost**: transparent with Blue 60 text only. **Danger**: `#da1e28` Red 60 fill.

**Card / tile**: `#ffffff` or `#f4f4f4` Gray 10, no border, no shadow, 0px radius, 16px padding. Clickable tiles hover to `#e8e8e8` Gray 10 Hover with an arrow icon revealed bottom-right.

**Input**: `#f4f4f4` Gray 10 fill, 40px default height, 16px horizontal padding, **bottom-border only** — `2px solid transparent` default, `2px solid #161616` active, `2px solid #0f62fe` focus, `2px solid #da1e28` error. The bottom-border is the signature Carbon form pattern.

**Nav bar**: `#161616` Gray 100 full-width masthead at 48px tall. White IBM 8-bar logo left-aligned, 14px Plex Sans `#c6c6c6` Gray 30 links shifting to white on hover with a bottom-border indicator on active.

**Tag/label pill**: contextual 10-grade tint background (e.g., `#edf5ff` Blue 10), corresponding 60-grade text (`#0f62fe`), 24px radius, 4×8px padding.

## Do's and Don'ts

**Do**

- Use IBM Plex Sans at weight 300 for display (42px+) — the lightness is intentional
- Apply 0.16px letter-spacing on 14px body, 0.32px on 12px caption — never on display
- Use 0px border-radius on buttons, inputs, cards, tiles
- Reference `--cds-*` tokens (`--cds-button-primary`, `--cds-text-primary`, etc.)
- Achieve depth through background-color layering (white → `#f4f4f4` → `#e0e0e0`)
- Use bottom-border (not box) for input field indicators
- Apply Blue 60 (`#0f62fe`) as the sole interactive accent — one blue to rule them all
- Maintain 48px default button height with asymmetric icon padding

**Don't**

- Don't round button corners — 0px radius is the Carbon identity
- Don't use shadows on cards or tiles — flatness is the point
- Don't introduce additional accent colors — Carbon is monochromatic + blue
- Don't use weight 700 (Bold) — the scale stops at 600 (Semibold)
- Don't add letter-spacing to display sizes — tracking is only for 14px and below
- Don't box inputs with full borders — Carbon inputs use bottom-border only
- Don't use gradient backgrounds — Carbon surfaces are flat solids
- Don't deviate from the 8px grid — every value divisible by 8 (with 2px / 4px micro-adjustments)

## Agent Prompt Guide

**Bias toward** — IBM Plex Sans + Plex Mono, weight 300 at display, 0px border-radius across buttons / inputs / cards, micro-tracking at 14px / 12px, bottom-border inputs, background-color layering for depth, Blue 60 as the sole accent, asymmetric button padding for trailing icons.

**Reject** — pure black `#000` text, rounded buttons or cards, weight 700, decorative accent colors, full-box inputs, drop shadows on cards, positive letter-spacing on display, off-grid spacing values.
