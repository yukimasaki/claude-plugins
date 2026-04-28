---
version: alpha
name: Raycast
description: |
  Raycast's marketing site feels like the dark interior of a precision instrument — a Swiss watch case carved from obsidian. The background isn't just dark, it's an almost-black blue-tinted void (`#07080a`) that creates a sense of being inside a macOS-native application rather than a website. The signature move is the layered shadow system borrowed from macOS window chrome: multi-layer box-shadows with inset highlights that simulate physical depth, as if cards and buttons are actual pressed or raised glass elements on a dark desk. Combined with Raycast Red (`#ff6363`) — deployed almost exclusively in the hero's iconic diagonal stripe pattern — the palette reads as "powerful tool with personality." The red doesn't dominate; it punctuates. Inter is used everywhere with extensive OpenType features (`calt`, `kern`, `liga`, `ss03`) and unusual positive letter-spacing (0.2px–0.4px on body text) that gives an airy, breathable quality counterbalancing the dense dark surfaces. GeistMono appears for code, reinforcing the developer-tool identity. Mood — macOS-native, cinematic, instrument-precise, blue-cold.

colors:
  primary: "#ffffff"
  primary-hover: "#cecece"
  ink: "#f9f9f9"
  body: "#cecece"
  muted: "#9c9c9d"
  disabled: "#6a6b6c"
  canvas: "#07080a"
  surface: "#101111"
  surface-key-start: "#121212"
  surface-key-end: "#0d0d0d"
  surface-card: "#1b1c1e"
  surface-button-fg: "#18191a"
  hairline: "#252829"
  hairline-strong: "#2f3031"
  hairline-dark: "#434345"
  on-primary: "#18191a"
  brand-red: "#ff6363"
  accent-blue: "#55b3ff"
  accent-green: "#5fc992"
  accent-yellow: "#ffbc33"
  near-white: "#f9f9f9"
  light-gray: "#cdcdce"
  silver: "#c0c0c0"

typography:
  display-hero:
    fontFamily: "Inter, 'Inter Fallback', system-ui, -apple-system, 'Segoe UI', Roboto"
    fontSize: 64px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: 0
  display-section:
    fontFamily: "Inter, 'Inter Fallback', system-ui, -apple-system, 'Segoe UI', Roboto"
    fontSize: 56px
    fontWeight: 400
    lineHeight: 1.17
    letterSpacing: 0.2px
  heading-section:
    fontFamily: "Inter, 'Inter Fallback', system-ui, -apple-system, 'Segoe UI', Roboto"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.2px
  heading-card:
    fontFamily: "Inter, 'Inter Fallback', system-ui, -apple-system, 'Segoe UI', Roboto"
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: 0
  sub-heading:
    fontFamily: "Inter, 'Inter Fallback', system-ui, -apple-system, 'Segoe UI', Roboto"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: 0.2px
  body-lg:
    fontFamily: "Inter, 'Inter Fallback', system-ui, -apple-system, 'Segoe UI', Roboto"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: 0.2px
  body:
    fontFamily: "Inter, 'Inter Fallback', system-ui, -apple-system, 'Segoe UI', Roboto"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: 0.2px
  body-tight:
    fontFamily: "Inter, 'Inter Fallback', system-ui, -apple-system, 'Segoe UI', Roboto"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: 0.1px
  button:
    fontFamily: "Inter, 'Inter Fallback', system-ui, -apple-system, 'Segoe UI', Roboto"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: 0.3px
  nav-link:
    fontFamily: "Inter, 'Inter Fallback', system-ui, -apple-system, 'Segoe UI', Roboto"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.3px
  caption:
    fontFamily: "Inter, 'Inter Fallback', system-ui, -apple-system, 'Segoe UI', Roboto"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.14
    letterSpacing: 0.2px
  small:
    fontFamily: "Inter, 'Inter Fallback', system-ui, -apple-system, 'Segoe UI', Roboto"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: 0
  small-link:
    fontFamily: "Inter, 'Inter Fallback', system-ui, -apple-system, 'Segoe UI', Roboto"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.4px
  mono-code:
    fontFamily: "GeistMono, ui-monospace, SFMono-Regular, 'Roboto Mono', Menlo, Monaco"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: 0.3px

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 6px
  lg: 8px
  xl: 12px
  "2xl": 16px
  "3xl": 20px
  pill: 86px
  full: 9999px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 12px
  "4": 16px
  "5": 20px
  "6": 24px
  "8": 32px
  "10": 40px
  section: 80px
  section-lg: 120px

components:
  button-primary-pill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.near-white}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 10px 20px
  button-cta-light:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 10px 20px
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.near-white}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 8px 16px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.near-white}"
    rounded: "{rounded.xl}"
    padding: 24px
  card-feature:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.near-white}"
    rounded: "{rounded.2xl}"
    padding: 32px
  badge:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.near-white}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    padding: 0px 6px
  input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.near-white}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 8px 12px
  key-cap:
    backgroundColor: "{colors.surface-key-start}"
    textColor: "{colors.near-white}"
    typography: "{typography.small}"
    rounded: "{rounded.sm}"
    padding: 2px 6px
---

## Overview

Raycast's design is the most macOS-native on the web — multi-layer shadows with inset highlights, blue-cold near-black canvas, and an instrument-grade attention to physical depth. The palette is restrained: dark surfaces stepped from `#07080a` to `#1b1c1e`, off-white text (`#f9f9f9`), and Raycast Red (`#ff6363`) reserved as a punctuation accent — never pervasive.

Mood — macOS-native, cinematic, instrument-precise, blue-cold.

## Colors

The canvas is **near-black with a subtle blue tint** (`#07080a`) — not pure black. This blue-cold undertone is the differentiator and must not be replaced with `#000000`. Surfaces step in tight micro-increments: `#101111` (cards) → `#1b1c1e` (badges, tags) → `#252829` (border) → `#2f3031` (separators) → `#434345` (muted borders).

Text uses near-white `#f9f9f9` as the primary read, with `#cdcdce` for secondary, `#c0c0c0` for tertiary, `#9c9c9d` for nav links, and `#6a6b6c` for disabled. Each step is a deliberate stop on the dark-readable scale.

**Raycast Red** (`#ff6363`) is the brand color, but it appears almost exclusively in the hero diagonal stripe and in error/destructive accents. **Raycast Blue** (`#55b3ff`) is for interactive/info states — links, focus, selection — never the primary brand color. Green (`#5fc992`) and yellow (`#ffbc33`) round out the semantic palette.

The original site uses `hsl()` and `rgba()` for many of these tokens (e.g., border `hsl(195, 5%, 15%)`, transparent overlays at 0.06–0.15 opacity). Hex equivalents are used here; for accurate implementation, retain the original alpha values for borders and glows.

## Typography

**Inter everywhere** with extensive OpenType: `calt`, `kern`, `liga`, `ss03` enabled globally; `ss02` and `ss08` on display text; `liga` disabled (`"liga" 0`) on hero headings specifically. The result is a slightly more geometric, tool-like quality.

The signature move is **positive letter-spacing on dark** (+0.2px to +0.4px on body text). Most dark UIs use neutral or negative tracking — Raycast deliberately goes positive to compensate for dark-background readability and create an airy feel.

**Weight 500 is the body baseline**, not 400. Medium weight prevents text from feeling thin against dark surfaces. Weight 600 marks buttons; 700 is rare.

Hero text at 64px / weight 600 is confident but not oversized — Raycast avoids typographic spectacle in favor of functional elegance. GeistMono carries code at 14px.

## Layout

8px base scale (1, 2, 3, 4, 8, 10, 12, 16, 20, 24, 32, 40px). Section padding is 80–120px vertical between major sections. Container max-width sits around 1200px (breakpoint at 1204px). Patterns: single-column hero, 2–3 column feature grids, full-width product showcases.

The whitespace philosophy is **dramatic negative space**: sections float in the dark void, creating cinematic pacing. Product UI screenshots are information-dense, but surrounding marketing copy is sparse with generous spacing.

## Elevation & Depth

This is Raycast's signature system — **multi-layer shadows with inset highlights** simulating physical macOS depth.

| Level | Treatment | Use |
|---|---|---|
| Level 0 (Void) | No shadow, `#07080a` surface | Page background |
| Level 1 (Subtle) | `rgba(0, 0, 0, 0.28) 0px 1.189px 2.377px` | Minimal lift |
| Level 2 (Ring) | `rgb(27, 28, 30) 0px 0px 0px 1px` outer + `rgb(7, 8, 10) 0px 0px 0px 1px inset` | Card containment, double-ring |
| Level 3 (Button) | `rgba(255, 255, 255, 0.05) 0px 1px 0px 0px inset` + `rgba(255, 255, 255, 0.25) 0px 0px 0px 1px` + `rgba(0, 0, 0, 0.2) 0px -1px 0px 0px inset` | macOS-native button — top highlight + bottom inset dark |
| Level 4 (Key cap) | 5-layer stack with inset press effects | Keyboard shortcut keys — 3D physical |
| Level 5 (Floating) | `rgba(0, 0, 0, 0.5) 0px 0px 0px 2px` + `rgba(255, 255, 255, 0.19) 0px 0px 14px` + insets | Command palette, modals |

Every elevated element pairs **outer ring + inset top highlight + inset bottom dark**, simulating light from above. The effect is physical — elements feel like glass or brushed metal, never flat rectangles.

Decorative depth includes a **warm glow** (`rgba(215, 201, 175, 0.05)` at 20px blur) behind featured elements, plus blue-info and red-danger glows for interactive states.

## Shapes

Radius scale: 2–3px (micro/code spans) → 4–5px (key caps) → 6px (buttons, badges — the workhorse) → 8px (inputs) → 9–11px (medium containers) → 12px (cards, screenshots) → 16px (large cards) → 20px (hero cards) → 86px+ (pill CTAs and nav buttons).

## Components

**Primary pill button**: dark surface fill with multi-layer inset shadow, near-white text, 86px radius. Hover: opacity 0.6 (the signature interaction — no color change).

**CTA download button**: semi-transparent white fill (`hsla(0, 0%, 100%, 0.815)`) with dark text (`#18191a`), pill shape. Hover transitions to full white.

**Secondary button**: transparent fill, white text, 6px radius, 1px solid `rgba(255, 255, 255, 0.1)` border, subtle drop shadow. Hover: opacity 0.6.

**Standard card**: `#101111` surface, `1px solid rgba(255, 255, 255, 0.06)` border, 12–16px radius. **Elevated card** uses the double-ring shadow; **feature card** layers a warm glow.

**Badge**: `#1b1c1e` surface, white text, 6px radius, 14px weight 500.

**Key cap**: gradient from `#121212` to `#0d0d0d`, 5-layer shadow stack, 4–6px radius — physical 3D appearance.

## Do's and Don'ts

**Do**
- Use `#07080a` (not pure black) — the blue-cold tint is essential
- Apply positive letter-spacing (+0.2px) on body text — the airy feel is signature
- Stack multi-layer shadows with inset highlights — single-layer flat shadows look wrong
- Reserve Raycast Red `#ff6363` as punctuation — hero stripe + danger states only
- Use weight 500 as body baseline — medium weight beats thin on dark
- Use pill (86px+) for primary CTAs, 6–8px for secondary and inputs
- Enable OpenType features `calt`, `kern`, `liga`, `ss03` on Inter globally
- Use opacity transitions (hover: 0.6) on buttons — not color swaps
- Use `rgba(255, 255, 255, 0.06)` borders for card containment

**Don't**
- Use pure black `#000000` as the canvas — kills the blue-cold identity
- Apply negative letter-spacing on body text — Raycast deliberately goes positive
- Use Raycast Blue as the primary accent — blue is for interactive only, red is the brand
- Create single-layer flat shadows — multi-layer inset is core
- Use regular weight (400) for body — 500 is the dark-readable baseline
- Mix warm and cool borders — stick to the cool-gray hsl(195, 5%, 15%) family
- Apply heavy drop shadows without inset companions — shadows always pair
- Use decorative gradients or colorful backgrounds — dark void is the stage

## Agent Prompt Guide

**Bias toward** — `#07080a` blue-cold canvas, multi-layer shadows with inset top-highlight + bottom-dark, Inter with positive letter-spacing (+0.2px) and OpenType `ss03`, weight 500 body baseline, pill (86px+) primary CTAs, Raycast Red as hero punctuation only, opacity-transition hovers (0.6), `#101111` card surfaces, 6–8px small radii.

**Reject** — pure black canvas, negative letter-spacing, single-layer drop shadows, Raycast Blue as primary brand, weight 400 body, color-swap hovers, large radii on buttons (pill or 6/8 only), warm-tinted borders, decorative gradients.
