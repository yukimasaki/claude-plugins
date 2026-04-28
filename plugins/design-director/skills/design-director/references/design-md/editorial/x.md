---
version: alpha
name: xAI
description: |
  xAI's website is a masterclass in dark-first, monospace-driven brutalist minimalism — a design system that feels built by engineers who understand that restraint is the ultimate form of sophistication. The entire experience anchors to an almost-black background (`#1f2228`) with pure white text (`#ffffff`), creating a high-contrast terminal-inspired aesthetic that signals deep technical credibility. There are no gradients, no decorative illustrations, no color accents competing for attention — this is a site that communicates through absence. The typographic split is deliberate: **GeistMono** (Vercel's monospace) handles display headlines at an extraordinary **320px / weight 300**, and also serves as the **button typeface in uppercase with 1.4px tracking**. **`universalSans`** handles all body and secondary headings — clean, geometric sans-serif voice. The monospace-as-display choice is the defining aesthetic decision: xAI is positioned as infrastructure, built by people who live in terminals. Border-radius stays at **0px (sharp)** by default. Hover states **dim to `rgba(255,255,255,0.5)`** rather than brightening — the reverse of convention. There are no box-shadows anywhere; depth comes through opacity-based borders that brighten on interaction. Mood — brutalist, terminal, engineered, monolithic.

colors:
  primary: "#ffffff"
  primary-hover: "#e6e6e6"
  ink: "#ffffff"
  body: "#b5b5b5"
  muted: "#808080"
  disabled: "#4d4d4d"
  canvas: "#1f2228"
  surface: "#1f2228"
  surface-elevated: "#262931"
  surface-hover: "#2c2f37"
  hairline: "#363a42"
  hairline-strong: "#4f535b"
  on-primary: "#1f2228"
  on-dark: "#ffffff"
  focus: "#3b82f6"

typography:
  display-hero:
    fontFamily: "GeistMono, ui-monospace, SFMono-Regular, 'Roboto Mono', Menlo, Monaco, 'Liberation Mono', 'DejaVu Sans Mono', 'Courier New', monospace"
    fontSize: 320px
    fontWeight: 300
    lineHeight: 1.50
    letterSpacing: 0
  section-heading:
    fontFamily: "universalSans, 'universalSans Fallback', sans-serif"
    fontSize: 30px
    fontWeight: 400
    lineHeight: 1.20
    letterSpacing: 0
  body:
    fontFamily: "universalSans, 'universalSans Fallback', sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  button:
    fontFamily: "GeistMono, ui-monospace, SFMono-Regular, 'Roboto Mono', Menlo, Monaco, 'Liberation Mono', 'DejaVu Sans Mono', 'Courier New', monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 1.4px
  caption:
    fontFamily: "universalSans, 'universalSans Fallback', sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  small:
    fontFamily: "universalSans, 'universalSans Fallback', sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  mono-tag:
    fontFamily: "GeistMono, ui-monospace, SFMono-Regular, 'Roboto Mono', Menlo, Monaco, 'Liberation Mono', 'DejaVu Sans Mono', 'Courier New', monospace"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 1px

rounded:
  none: 0px
  xs: 4px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 16px
  "4": 24px
  "5": 32px
  "6": 48px
  "7": 64px
  "8": 96px
  section: 48px
  section-lg: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 12px 24px
  button-ghost:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 12px 24px
  button-text:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 0px
  card:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 24px
  badge-mono:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.mono-tag}"
    rounded: "{rounded.none}"
    padding: 4px 8px
  input:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 8px 12px
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    height: 64px
---

## Overview

xAI's marketing surface is brutalist minimalism — a single dark canvas, two carefully chosen typefaces, sharp corners, and zero decorative noise. The 320px GeistMono display headline at weight 300 is the brand statement: monospace at extreme scale is luxury when paired with restraint. Every interactive element dims toward `rgba(255,255,255,0.5)` on hover — the reverse of conventional brightening — reinforcing the system's deliberate inversion of design defaults.

Mood — brutalist, terminal, engineered, monolithic.

## Colors

The palette is **monochromatic white-on-dark**:

- **Dark Background** (`#1f2228`): the canvas — warm near-black with subtle blue undertone, never pure `#000000`
- **Pure White** (`#ffffff`): the singular text color, link color, and all foreground elements
- **Surface Elevated** (`#262931`) and **Surface Hover** (`#2c2f37`): originally `rgba(255,255,255,0.05)` and `0.08` — flattened to opaque approximations for the hex requirement
- **Hairline** (`#363a42`) and **Hairline Strong** (`#4f535b`): originally `rgba(255,255,255,0.1)` and `0.2` — the primary border tones
- **Body** (`#b5b5b5`) ≈ `rgba(255,255,255,0.7)` — secondary text, descriptions, captions
- **Muted** (`#808080`) ≈ `rgba(255,255,255,0.5)` — muted labels, placeholder text, the universal hover dim
- **Disabled** (`#4d4d4d`) ≈ `rgba(255,255,255,0.3)` — disabled text, very subtle annotations
- **Focus Ring** (`#3b82f6`): Tailwind default ring color — the only chromatic accent in the system

The original system uses translucent white opacity stops (`0.05` / `0.08` / `0.1` / `0.2` / `0.3` / `0.5` / `0.7`); they are flattened here to opaque hex equivalents because lint rejects 8-digit hex / rgba.

## Typography

**Two-font discipline with no overlap**:

- **GeistMono** at 320px / weight 300 for display, and at 14px uppercase / 1.4px tracking for buttons
- **universalSans** for all body, secondary headings, captions, and reading content

The monospace-as-display decision is the brand's most recognizable typographic choice. Weight 300 keeps the 320px headline from feeling brutish at extreme scale — it reads as precise, not overwhelming. Buttons run uppercase GeistMono with **1.4px tracking** — distinctly technical, almost command-line.

**Hover dims rather than brightens** — interactive text shifts toward `rgba(255,255,255,0.5)` on hover, the inverse of the typical "light up on hover" pattern.

## Layout

8px base. The scale is deliberately sparse — **4px / 8px / 24px / 48px** — large jumps that create clear visual hierarchy through whitespace alone. Section padding sits at 48–96px vertical.

Max content width approximately 1200px. Hero is full-viewport-height with massive centered monospace headline. Feature sections stack vertically with generous gaps; two-column layouts are reserved for desktop feature descriptions only.

The whitespace philosophy is **extreme generosity** — the 320px headline with 48px+ surrounding padding creates emptiness that is itself the design statement.

## Elevation & Depth

xAI **rejects shadow-based elevation entirely**. There are no box-shadows anywhere on the site.

| Level | Treatment | Use |
|---|---|---|
| Flat (0) | No shadow, no border | Page background, body content |
| Surface (1) | `rgba(255,255,255,0.03)` background | Subtle card surfaces |
| Bordered (2) | `1px solid rgba(255,255,255,0.1)` border | Cards, containers, dividers |
| Active (3) | `1px solid rgba(255,255,255,0.2)` border | Hover states, active elements |
| Focus | Ring with `rgb(59,130,246)/0.5` | Keyboard focus indicator |

Depth is communicated through **opacity-based borders that brighten on interaction** (creating elements that "activate" rather than "lift"), **subtle background opacity shifts** (0.03 → 0.08), and **typographic scale contrast** (320px display vs 16px body). This is elevation through contrast and opacity, not simulated light.

## Shapes

**Sharp corners (0px) by default** — the brutalist signature. The only deviation is **xs (4px)** for occasional softening on secondary containers. No 8px, no pill, no large radii — the monolithic edge IS the brand.

## Components

**Button primary**: `#ffffff` white fill, `#1f2228` dark text, **0px radius**, 12×24 padding. GeistMono 14px / weight 400 / **uppercase** / 1.4px tracking. Hover dims to `rgba(255,255,255,0.9)`.

**Button ghost / outlined**: transparent (canvas) fill, white text, 1px solid `rgba(255,255,255,0.2)` border, 0px radius, same GeistMono uppercase treatment. Hover background shifts to `rgba(255,255,255,0.05)`.

**Button text**: no background, no border, white text in universalSans 16px. Hover dims to `rgba(255,255,255,0.5)` — the universal xAI hover signal.

**Card**: `rgba(255,255,255,0.03)` background (approximated as `#262931` here), 1px solid `rgba(255,255,255,0.1)` border, **0px radius** (or 4px subtle for secondary containers), 24px padding. No shadow, ever. Hover: border shifts to `rgba(255,255,255,0.2)`.

**Badge mono**: transparent or canvas fill, 1px solid `rgba(255,255,255,0.2)` border, 0px radius, 4×8 padding, GeistMono 12px uppercase / 1px tracking, white text. The technical-tag voice.

**Input**: surface-elevated background, 1px solid `rgba(255,255,255,0.2)` border, 0px radius, 8×12 padding. Placeholder text uses the disabled tone.

**Nav bar**: `#1f2228` matching the page, brand text left (GeistMono 14px uppercase), universalSans 14px links, white primary button right.

## Do's and Don'ts

**Do**

- Use `#1f2228` as the universal background — never pure black `#000000`
- Use GeistMono for all display headlines AND button text — monospace IS the brand
- Apply uppercase + 1.4px letter-spacing to all button labels
- Use weight 300 for the massive display headline (320px)
- Keep borders at `rgba(255,255,255,0.1)` — barely visible, not absent
- Dim interactive elements on hover to `rgba(255,255,255,0.5)` — the reverse of convention
- Maintain sharp corners (0px) as the default — brutalist precision
- Use universalSans for all body and reading text at 16px / 1.5 line-height

**Don't**

- Don't use box-shadows — xAI has zero shadow elevation
- Don't introduce color accents beyond white and the dark background
- Don't use large border-radius (8px+, pill shapes) — sharp edges are intentional
- Don't use bold weights (600–700) for headlines — weight 300–400 only
- Don't brighten elements on hover — dim to 0.5 instead
- Don't add decorative gradients, illustrations, or color blocks
- Don't use proportional fonts for buttons — GeistMono uppercase is mandatory
- Don't use colored status indicators unless absolutely necessary

## Agent Prompt Guide

**Bias toward** — `#1f2228` canvas (never pure black), GeistMono for display + buttons (uppercase + 1.4px tracking), universalSans for body, weight 300 for the 320px hero headline, 0px radius default, hover-dim to 0.5 opacity (not brighten), opacity-stepped borders (0.1 default, 0.2 active), zero box-shadows, generous 48–96px section padding.

**Reject** — pure black backgrounds, color accents beyond white, rounded buttons / cards, bold (600+) display weights, brighten-on-hover behavior, decorative gradients, proportional fonts on buttons, drop shadows for elevation.
