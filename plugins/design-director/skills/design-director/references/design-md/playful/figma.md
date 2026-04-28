---
version: alpha
name: Figma
description: |
  Figma's interface is the design tool that designed itself — a masterclass in typographic sophistication where the custom variable font figmaSans modulates between razor-thin (weight 320) and bold (weight 700) with stops at unusual intermediates (330, 340, 450, 480, 540) that most type systems never explore. The page presents a fascinating duality: chrome is strictly black-and-white (literally only `#000000` and `#ffffff` for the interface layer), while the hero section and product showcases explode with vibrant multi-color gradients — electric greens, bright yellows, deep purples, hot pinks. The interface chrome is colorless because the product's colorful output is the hero. Figma uses circle-and-pill geometry (50px pill, 50% perfect circle) for buttons, and a dashed-outline 2px focus indicator that deliberately echoes selection handles in the Figma editor itself — the website's UI language references the product's UI language. OpenType `"kern"` is on globally and even body text uses negative letter-spacing (-0.14px to -0.26px). Mood — meta, monochromatic, kinetic, design-tool.

colors:
  primary: "#000000"
  ink: "#000000"
  body: "#000000"
  on-primary: "#ffffff"
  canvas: "#ffffff"
  surface: "#ffffff"
  hairline: "#000000"

typography:
  display-hero:
    fontFamily: "figmaSans, 'SF Pro Display', system-ui, helvetica, sans-serif"
    fontSize: 86px
    fontWeight: 400
    lineHeight: 1.00
    letterSpacing: -1.72px
  section-heading:
    fontFamily: "figmaSans, 'SF Pro Display', system-ui, helvetica, sans-serif"
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.10
    letterSpacing: -0.96px
  sub-heading:
    fontFamily: "figmaSans, 'SF Pro Display', system-ui, helvetica, sans-serif"
    fontSize: 26px
    fontWeight: 540
    lineHeight: 1.35
    letterSpacing: -0.26px
  sub-heading-light:
    fontFamily: "figmaSans, 'SF Pro Display', system-ui, helvetica, sans-serif"
    fontSize: 26px
    fontWeight: 340
    lineHeight: 1.35
    letterSpacing: -0.26px
  feature-title:
    fontFamily: "figmaSans, 'SF Pro Display', system-ui, helvetica, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.45
    letterSpacing: 0
  body-large:
    fontFamily: "figmaSans, 'SF Pro Display', system-ui, helvetica, sans-serif"
    fontSize: 20px
    fontWeight: 450
    lineHeight: 1.30
    letterSpacing: -0.14px
  body:
    fontFamily: "figmaSans, 'SF Pro Display', system-ui, helvetica, sans-serif"
    fontSize: 16px
    fontWeight: 330
    lineHeight: 1.40
    letterSpacing: -0.14px
  body-light:
    fontFamily: "figmaSans, 'SF Pro Display', system-ui, helvetica, sans-serif"
    fontSize: 18px
    fontWeight: 320
    lineHeight: 1.45
    letterSpacing: -0.26px
  mono-label:
    fontFamily: "figmaMono, 'SF Mono', menlo, ui-monospace, monospace"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.30
    letterSpacing: 0.54px
  mono-small:
    fontFamily: "figmaMono, 'SF Mono', menlo, ui-monospace, monospace"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.00
    letterSpacing: 0.6px

rounded:
  none: 0px
  xs: 2px
  sm: 6px
  md: 8px
  pill: 50px
  full: 9999px

spacing:
  "0": 0px
  "1": 2px
  "2": 4px
  "3": 8px
  "4": 12px
  "5": 16px
  "6": 18px
  "7": 24px
  "8": 32px
  "9": 40px
  "10": 48px
  "11": 50px

components:
  button-pill-dark:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 8px 18px
  button-pill-light:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 8px 18px
  button-glass-dark:
    backgroundColor: "rgba(0, 0, 0, 0.08)"
    textColor: "{colors.primary}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    padding: 8px
  button-glass-light:
    backgroundColor: "rgba(255, 255, 255, 0.16)"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    padding: 8px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: 24px
  tab-pill:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-large}"
    rounded: "{rounded.pill}"
    padding: 8px 24px
---

## Overview

Figma's marketing page is a white gallery wall displaying colorful art — chrome is strictly black `#000000` and white `#ffffff`, while hero and product sections explode with vibrant multi-color gradients (electric green, bright yellow, deep purple, hot pink). The custom variable font figmaSans modulates between razor-thin (weight 320) and bold (700) with unusual stops (330, 340, 450, 480, 540) most type systems never explore — granular weight control creates hierarchy through subtle differences. Pill (50px) and circular (50%) geometry, dashed 2px focus outlines that echo Figma's editor selection handles, and OpenType `"kern"` on globally complete the meta-design loop.

Mood — meta, monochromatic, kinetic, design-tool.

## Colors

The interface layer uses literally only two colors — Pure Black `#000000` and Pure White `#ffffff`. Glass surfaces use `rgba(0,0,0,0.08)` (subtle dark overlay) and `rgba(255,255,255,0.16)` (frosted glass on dark/colored surfaces).

All vibrant colors appear exclusively in product screenshots, hero gradients, and embedded content — the marketing chrome is colorless because the product is the color story. The hero gradient cycles green → yellow → purple → pink, representing the creative possibilities of the tool.

## Typography

Variable-font precision is the design — figmaSans uses weight stops other systems never touch (320, 330, 340, 450, 480, 540), creating hierarchy through subtle weight differences rather than dramatic jumps. The difference between 330 and 340 is nearly imperceptible but structurally significant.

Light as the base — most body text uses 320–340 (lighter than typical 400 "regular"), creating an ethereal airy reading experience matching the design-tool aesthetic. Negative tracking by default — even body text uses -0.14px to -0.26px letter-spacing; display compresses to -0.96px and -1.72px. figmaMono in uppercase with positive letter-spacing (0.54–0.6px) creates technical signpost labels. `"kern"` is on globally — kerning isn't optional.

## Layout

8px base, scale 2/4/8/12/16/18/24/32/40/48/50px. Max container up to 1920px. Hero is full-width gradient with centered content; product sections are alternating showcases; footer is full-width dark. Generous spacing lets each product section breathe as its own exhibit.

## Elevation & Depth

Shadows used sparingly. Primary depth mechanisms are background contrast (white content on colorful/dark sections) and the inherent dimensionality of product screenshots. Subtle shadows for floating cards and hover states only.

## Shapes

2px (small link elements) → 6px (small containers, dividers) → 8px (cards, images, dialogs) → 50px (tab buttons, CTAs — the signature pill) → 50% / 9999px (icon buttons, circular elements).

## Components

**Black solid** — `#000000` fill, white text, circle (50%) for icon buttons or pill (50px) for CTAs, dashed 2px focus outline. Maximum emphasis.

**White pill** — `#ffffff` fill, `#000000` text, asymmetric padding `8px 18px 10px`, 50px radius, dashed 2px focus. Standard CTA on dark/colored surfaces.

**Glass dark** — `rgba(0,0,0,0.08)` fill, black text, circular (50%), dashed 2px focus. Secondary on light.

**Glass light** — `rgba(255,255,255,0.16)` fill, white text, circular (50%), dashed 2px focus. Secondary on dark/colored.

**Product tab bar** — horizontal pill-shaped tabs (50px radius), each representing a Figma product area (Design, Dev Mode, Prototyping). Active tab black-on-white; inactive transparent.

**Hero gradient section** — full-width vibrant multi-color gradient, white 86px display heading, product screenshots floating within.

**Dashed focus indicators** — all interactive elements use `dashed 2px` outline on focus — references the selection handles in the Figma editor itself.

## Do's and Don'ts

**Do**
- Use figmaSans with precise variable weights (320–540) — granular weight control IS the design
- Keep interface strictly black-and-white — color comes from product content only
- Use pill (50px) and circular (50%) geometry for all interactive elements
- Apply dashed 2px focus outlines — the signature accessibility pattern
- Enable `"kern"` feature on all text
- Use figmaMono in uppercase with positive letter-spacing (0.54–0.6px) for labels
- Apply negative letter-spacing throughout (-0.14px body, -1.72px display)

**Don't**
- Add interface colors — the monochrome chrome palette is absolute
- Use standard font weights (400, 500, 600, 700) — use the variable font's unique stops (320/330/340/450/480/540)
- Use sharp corners on buttons — pill and circular geometry only
- Use solid focus outlines — dashed is the signature
- Increase body font weight above 450 — light-weight aesthetic is core
- Use positive letter-spacing on body text — always negative

## Agent Prompt Guide

**Bias toward** — black-and-white chrome with vibrant multi-color hero gradients, figmaSans variable weights (320/330/340/450/480/540), pill (50px) + circle (50%) geometry, dashed 2px focus outlines, figmaMono uppercase 0.54px-tracked labels, OpenType `"kern"` enabled globally, ethereal light-weight body type.

**Reject** — colored interface chrome, standard font weights, sharp button corners, solid focus outlines, body weight above 450, positive letter-spacing on body, additional typefaces.
