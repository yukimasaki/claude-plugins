---
version: alpha
name: MongoDB
description: |
  MongoDB's design system is a deep-forest-meets-terminal experience — rooted in the darkest teal-black (`#001e2b`) that evokes both the density of a database and the depth of a forest canopy. Against this near-black canvas, neon green `#00ed64` pulses as the brand accent — bright enough to feel electric, organic enough to feel bioluminescent — never the cold neon of cyberpunk. The typography is architecturally ambitious: MongoDB Value Serif for editorial 96px hero headlines, Euclid Circular A as the geometric body workhorse with weight 300 (light) as a distinctive default body voice, and Source Code Pro with very wide uppercase letter-spacing (1px–3px) as technical signpost labels — like database field markers. The shadow system uses teal-tinted `rgba(0,30,43,0.12)` shadows that carry the forest color even on white surfaces, and pill buttons (100px radius) with green borders `#00684a` complete the LeafyGreen-derived component vocabulary. Mood — forest, technical, bioluminescent, editorial.

colors:
  primary: "#00684a"
  primary-bright: "#00ed64"
  primary-hover: "#1eaedb"
  ink: "#000000"
  body: "#001e2b"
  muted: "#5c6c75"
  canvas: "#ffffff"
  surface-app: "#001e2b"
  surface-app-alt: "#1c2d38"
  on-app: "#ffffff"
  on-app-soft: "#e8edeb"
  on-app-muted: "#5c6c75"
  hairline: "#b8c4c2"
  hairline-app: "#3d4f58"
  on-primary: "#ffffff"
  link: "#006cfa"
  link-hover: "#3860be"
  link-dark: "#21313c"
  code-yellow: "#dcdcaa"

typography:
  display-hero:
    fontFamily: "'MongoDB Value Serif', 'Akzidenz-Grotesk Std', Times, Georgia, serif"
    fontSize: 96px
    fontWeight: 400
    lineHeight: 1.20
    letterSpacing: 0
  display-secondary:
    fontFamily: "'MongoDB Value Serif', 'Akzidenz-Grotesk Std', Times, Georgia, serif"
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.00
    letterSpacing: 0
  section-heading:
    fontFamily: "'Euclid Circular A', 'Akzidenz-Grotesk Std', Arial, system-ui, sans-serif"
    fontSize: 36px
    fontWeight: 500
    lineHeight: 1.33
    letterSpacing: 0
  sub-heading:
    fontFamily: "'Euclid Circular A', 'Akzidenz-Grotesk Std', Arial, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.33
    letterSpacing: 0
  body-large:
    fontFamily: "'Euclid Circular A', 'Akzidenz-Grotesk Std', Arial, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.60
    letterSpacing: 0
  body:
    fontFamily: "'Euclid Circular A', 'Akzidenz-Grotesk Std', Arial, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0
  body-light:
    fontFamily: "'Euclid Circular A', 'Akzidenz-Grotesk Std', Arial, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 300
    lineHeight: 1.50
    letterSpacing: 0
  nav:
    fontFamily: "'Euclid Circular A', 'Akzidenz-Grotesk Std', Arial, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.50
    letterSpacing: 0.16px
  button:
    fontFamily: "'Euclid Circular A', 'Akzidenz-Grotesk Std', Arial, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.00
    letterSpacing: 0.16px
  caption:
    fontFamily: "'Euclid Circular A', 'Akzidenz-Grotesk Std', Arial, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.71
    letterSpacing: 0
  code-heading:
    fontFamily: "'Source Code Pro', ui-monospace, monospace"
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.60
    letterSpacing: 0
  code-body:
    fontFamily: "'Source Code Pro', ui-monospace, monospace"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  code-label:
    fontFamily: "'Source Code Pro', ui-monospace, monospace"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.14
    letterSpacing: 2px

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 8px
  lg: 16px
  xl: 24px
  "2xl": 32px
  "3xl": 48px
  pill: 100px
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

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px 24px
  button-dark:
    backgroundColor: "{colors.surface-app-alt}"
    textColor: "{colors.muted}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px 24px
  button-outlined:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 20px
  card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: 24px
  card-dark:
    backgroundColor: "{colors.surface-app}"
    rounded: "{rounded.lg}"
    padding: 24px
  card-hero:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.3xl}"
    padding: 48px
  input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 12px
  code-label-pill:
    backgroundColor: "{colors.surface-app}"
    textColor: "{colors.primary-bright}"
    typography: "{typography.code-label}"
    rounded: "{rounded.sm}"
    padding: 4px 8px
---

## Overview

MongoDB's site lives in two worlds: deep forest-black (`#001e2b`) hero and feature sections illuminated by neon green `#00ed64` accents, and crisp white content sections separated by silver-teal `#b8c4c2` hairlines. The transition between modes creates dramatic contrast — the dark sections feel grown rather than designed. MongoDB Value Serif provides editorial authority at 96px hero scale; Euclid Circular A handles UI at weight 300–500; Source Code Pro carries technical labels in uppercase with very wide tracking — the database field-label voice.

Mood — forest, technical, bioluminescent, editorial.

## Colors

Forest-black `#001e2b` is the primary dark surface — never pure black. Secondary dark surface `#1c2d38` (deep teal) and `#3d4f58` (teal-gray) handle borders. Light mode uses `#ffffff` canvas with silver-teal `#b8c4c2` hairlines.

Brand green operates in two registers: muted `#00684a` for functional use (button borders, link text on light) and electric `#00ed64` for accent (highlights, underlines, gradient glows). Action blue `#006cfa` handles links; all link hover states transition to `#3860be`. Teal `#1eaedb` is the bright button hover. Light input text uses `#e8edeb`.

The shadow system is unique — primary elevation uses teal-tinted `rgba(0,30,43,0.12) 0px 26px 44px` so even on white surfaces depth feels MongoDB-colored.

## Typography

**Serif for authority** — MongoDB Value Serif at 96px / weight 400 / 1.20 line-height creates an editorial presence rare in tech. Used only for hero/display headings.

**Weight 300 as body default** — Euclid Circular A uses light (300) for body text, an airy reading experience that contrasts with dense dark backgrounds. Four-weight range: 300 (light body) → 400 (standard) → 500 (UI/nav) → 700 (bold CTA).

**Wide-tracked monospace labels** — Source Code Pro uppercase at 1–3px letter-spacing creates technical signposts. The "database field label" aesthetic.

## Layout

8px base, scale 4/8/12/16/20/24/32px. Max content width centered. Card grids 2–3 columns. Dark hero sections get 80px+ vertical padding to let the forest-dark breathe; white content sections are denser.

## Elevation & Depth

Five-tier depth system, all using teal-tinted shadows on dark surfaces:

- **Subtle** — `rgba(0,0,0,0.1) 0px 2px 4px` for light card lift
- **Standard** — `rgba(0,0,0,0.15) 0px 3px 9px` for standard cards
- **Prominent** — `rgba(0,0,0,0.15) 0px 3px 20px` for elevated panels
- **Forest** — `rgba(0,30,43,0.12) 0px 26px 44px, rgba(0,0,0,0.13) 0px 7px 13px` for hero cards (signature teal-tint)

The neon green accent underline (`0px 2px 2px 0px solid #00ed64` bottom + right) is the signature decorative element on feature headings.

## Shapes

2px (small spans, badges) → 4px (inputs, small buttons) → 8px (cards, links) → 16px (standard cards) → 24px (large panels) → 32px (image containers) → 48px (hero cards) → 100px / 9999px (pills, navigation).

## Components

**Primary green** — `#00684a` fill, black text, 100px pill radius, `1px solid #00684a` border, light shadow `rgba(0,0,0,0.06) 0px 1px 6px`, hover `scale(1.1)` / active `scale(0.85)`.

**Dark teal** — `#1c2d38` fill, `#5c6c75` text, 100px radius, `1px solid #3d4f58` border, hover `#1eaedb` background with white text and `translateX(5px)`.

**Outlined (light surface)** — transparent fill, `#001e2b` text, `1px solid #b8c4c2` border, 4–8px radius.

**Cards** — white fill on light with `1px solid #b8c4c2` border, `#001e2b` or `#1c2d38` on dark with `1px solid #3d4f58`, 16px standard / 24px medium / 48px hero radius. Forest-tinted shadow `rgba(0,30,43,0.12) 0px 26px 44px`.

**Source Code Pro labels** — 14px uppercase / weight 500 / 2px tracking — placed above headings as section category markers.

## Do's and Don'ts

**Do**
- Use forest-black `#001e2b` for dark sections — never pure black
- Apply neon green `#00ed64` sparingly for maximum electric impact (highlights, underlines, small accents)
- Use MongoDB Value Serif ONLY for hero/display — Euclid Circular A for everything else
- Use weight 300 for body text — the airy light voice is the readable default
- Apply Source Code Pro uppercase with 1–3px tracking for technical labels
- Use teal-tinted `rgba(0,30,43,0.12)` shadows for primary card elevation
- Apply pill radius (100px) to primary action buttons
- Maintain dramatic dark-mode / light-mode duality between sections

**Don't**
- Use pure black `#000000` for dark backgrounds — always teal-black `#001e2b`
- Apply neon green to large background fills — it's accent-only
- Use standard gray shadows — always teal-tinted
- Apply MongoDB Value Serif to body text — hero scale only
- Use narrow letter-spacing on Source Code Pro labels — wide tracking IS the identity
- Mix dark and light section treatments within the same section
- Introduce warm colors — the palette is strictly cool (teal, green, blue)
- Forget the green accent underlines — they're the signature decorative element

## Agent Prompt Guide

**Bias toward** — forest-black `#001e2b` dark sections, neon green `#00ed64` electric accents, MongoDB Value Serif for hero, Euclid Circular A weight 300 body, Source Code Pro uppercase labels with 2px tracking, pill (100px) primary buttons, teal-tinted forest shadows, dramatic dark/light mode duality.

**Reject** — pure black backgrounds, MongoDB Value Serif on body text, neon green on large surfaces, narrow tracking on Source Code Pro labels, warm palette, generic neutral shadows, 4px-only sharp button radii.
