---
version: alpha
name: Expo
description: |
  Expo's interface is a luminous, confidence-radiating developer platform built on the premise that tools for building apps should feel as polished as the apps themselves. The entire experience lives on a bright cool-tinted off-white canvas (`#f0f0f3`) that gives the page a subtle technological coolness without the starkness of pure white. Pure black `#000000` headlines anchor against the lightest possible backgrounds, with cool blue-grays (`#60646c`, `#b0b4ba`, `#555860`) handling all secondary communication — color is almost entirely absent from the chrome and reserved for product screenshots, app icons and the React universe illustration. Pill-shaped geometry is everywhere — buttons, tabs, video containers and even images use generously rounded or fully pill-shaped corners (24px–9999px) — combined with extreme negative letter-spacing on 64px display headlines (-1.6px to -3px). Inter is the sole typeface, used at weights 400–900 for full expressive range. Whisper-soft shadows barely lift elements from the surface. Mood — luminous, gallery, monochromatic, premium-friendly.

colors:
  primary: "#000000"
  primary-soft: "#1c2024"
  ink: "#1c2024"
  body: "#60646c"
  body-emphasis: "#555860"
  muted: "#b0b4ba"
  pewter: "#999999"
  light-silver: "#cccccc"
  canvas: "#f0f0f3"
  surface: "#ffffff"
  surface-dark: "#1a1a1a"
  surface-banner: "#171717"
  hairline: "#e0e1e6"
  hairline-strong: "#d9d9e0"
  hairline-dark: "#363a3f"
  charcoal: "#333333"
  on-primary: "#ffffff"
  link: "#0d74ce"
  link-legal: "#476cff"
  accent-sky: "#47c2ff"
  accent-purple: "#8145b5"
  warning: "#ab6400"
  destructive: "#eb8e90"
  focus: "#2547d0"

typography:
  display-hero:
    fontFamily: "Inter, -apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.10
    letterSpacing: -3px
  section-heading:
    fontFamily: "Inter, -apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.10
    letterSpacing: -2px
  sub-heading:
    fontFamily: "Inter, -apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: -0.25px
  body-large:
    fontFamily: "Inter, -apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body:
    fontFamily: "Inter, -apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  caption:
    fontFamily: "Inter, -apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.40
    letterSpacing: 0
  tag:
    fontFamily: "Inter, -apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.60
    letterSpacing: 0
  code-body:
    fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, monospace"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  code-caption:
    fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0

rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 16px
  xl: 24px
  "2xl": 32px
  pill: 9999px

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
  "13": 144px

components:
  button-primary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary-soft}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 0px 12px
  button-pill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary-soft}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 0px 16px
  button-dark:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 8px 20px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: 24px
  card-feature:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: 32px
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary-soft}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 0px 12px
  status-badge:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary-soft}"
    typography: "{typography.tag}"
    rounded: "{rounded.pill}"
    padding: 0px 12px
---

## Overview

Expo lives on a luminous cool-white canvas `#f0f0f3` — not pure white but a precisely technological tint that signals the developer-tool genre without sterility. White cards `#ffffff` lift cleanly from this canvas through background-color contrast, not shadow weight. The system is decisively monochromatic — pure black `#000000` headlines, cool blue-gray (`#60646c`, `#555860`, `#b0b4ba`) body — letting product screenshots and the React universe illustration carry all the color. Pill-shaped geometry (24–9999px radii) and extreme negative letter-spacing (-1.6px to -3px on 64px display) are the signature moves.

Mood — luminous, gallery, monochromatic, premium-friendly.

## Colors

The page background is Cloud Gray `#f0f0f3` — cool off-white with the faintest blue-violet tint. Pure White `#ffffff` is reserved for cards, button fills and elevated containers — the lift comes entirely from this two-tone light system.

Text hierarchy: Expo Black `#000000` (headlines / primary CTAs), Near Black `#1c2024` (body), Slate Gray `#60646c` (the workhorse secondary at 305 instances), Mid Slate `#555860` (emphasized secondary), Silver `#b0b4ba` (tertiary / placeholders).

Functional accents: Link Cobalt `#0d74ce` for standard links, Legal Blue `#476cff` for legal/footer, Widget Sky `#47c2ff` for widget branding, Preview Purple `#8145b5` for beta indicators, Warning Amber `#ab6400` (deliberately not bright yellow), Destructive Rose `#eb8e90` (gentler than typical red).

Borders: Border Lavender `#e0e1e6` (cards), Input Border `#d9d9e0` (interactive). Notably gradient-free — visual richness comes from product screenshots, not color transitions.

## Typography

Inter is the only sans-serif, used from weight 400 (regular) through 900 (black). Display headlines at 64px use -1.6px to -3px letter-spacing — the most aggressive compression in the system, creating ultra-dense text blocks that feel like logotypes. Weight as hierarchy: 700–900 (display), 600 (headings), 500 (emphasis), 400 (body) — the jumps are decisive. Nearly all body and UI text shares 1.40 line-height for rhythmic vertical consistency. JetBrains Mono handles code at 14–16px.

## Layout

8px base, scale 4/8/12/16/24/32/40/48/64/80/96/144px. Max container ~1200–1400px, centered. Section vertical spacing is enormous (96–144px between major sections) — gallery-like pacing where each feature gets its own "room". Card internal padding 24–32px. Button padding unusually compact (0/12 — height driven by line-height).

## Elevation & Depth

Whisper-shadow system. Primary depth comes from background contrast (white cards floating on Cloud Gray), not shadow casting:

- **Whisper** — `rgba(0,0,0,0.08) 0px 3px 6px, rgba(0,0,0,0.07) 0px 2px 4px` (subtle card lift / hover)
- **Elevated** — `rgba(0,0,0,0.1) 0px 10px 20px, rgba(0,0,0,0.05) 0px 3px 6px` (feature showcases, product screenshots)
- **Modal** — dark overlay + heavier shadow

Shadows when present are soft, diffused, directional (downward) — paper hovering millimeters above a desk.

## Shapes

4px (small inline tags) → 6px (buttons, form inputs — functional interactive radius) → 8px (standard content cards) → 16px (feature tabs, content panels) → 24px (signature softness on buttons / video / image containers) → 32px (hero CTAs, status badges) → 9999px (primary action buttons, pills, avatars — maximum friendliness).

## Components

**Primary white-on-border** — `#ffffff` fill, `#1c2024` text, 0/12 padding (compact, height driven by line-height), `1px solid #d9d9e0` border, 6px radius. The understated default.

**Primary pill** — same fill but pill-shaped (9999px). Used for hero CTAs.

**Dark primary** — `#000000` fill, white text, pill (9999px) or generously rounded (32–36px), no border (black IS the border). Maximum-emphasis CTA reserved for primary conversion.

**Cards** — `#ffffff` fill, `1px solid #e0e1e6` border, 8px standard / 16–24px featured radius, whisper shadow.

**Status badge** — pill (9999px), white fill with `1px solid #d9d9e0`, 12px Inter weight 500. Green dot + "All Systems Operational" — compact trust signal.

**Universe React illustration** — animated React logo as the visual centerpiece, the only illustrative element on otherwise photographic pages.

## Do's and Don'ts

**Do**
- Use Cloud Gray `#f0f0f3` as page background and Pure White `#ffffff` for elevated cards — the two-tone light system is essential
- Keep display headlines at extreme negative letter-spacing (-1.6px to -3px at 64px)
- Use pill-shaped (9999px) radius for primary CTA buttons
- Reserve `#000000` for headlines and primary CTAs
- Use Slate Gray `#60646c` for secondary text
- Maintain enormous vertical spacing between sections (96px+) — gallery pacing defines the premium feel
- Use product screenshots as the primary visual content — interface stays monochrome
- Apply Inter at the full weight range (400–900)

**Don't**
- Introduce decorative colors into interface chrome — the monochromatic palette is intentional
- Use sharp corners (radius < 6px) on interactive elements
- Reduce section spacing below 64px — breathing room is the design
- Use heavy drop shadows — depth comes from background contrast
- Mix in additional typefaces — Inter handles everything
- Use letter-spacing wider than -0.25px on body text — extreme tracking is reserved for display
- Use borders heavier than 2px
- Add gradients to the interface — visual richness comes from content, not decoration

## Agent Prompt Guide

**Bias toward** — Cloud Gray `#f0f0f3` canvas with Pure White `#ffffff` cards, pure black headlines, Slate Gray secondary text, pill (9999px) primary CTAs, extreme negative tracking on display, Inter weight 400–900 hierarchy, 96px+ section spacing, whisper shadows, JetBrains Mono code blocks.

**Reject** — colored interface chrome, sharp button corners, gradients on chrome, body line-height above 1.50, letter-spacing wider than -0.25px on body, decorative shadows, additional typefaces beyond Inter + JetBrains Mono.
