---
version: alpha
name: Framer
description: |
  Framer's website is a cinematic, tool-obsessed dark canvas that radiates the confidence of a design tool built by designers who worship craft. The entire experience is drenched in pure black `#000000` — not a warm charcoal or cozy dark gray, but an absolute void that makes every element, every screenshot, every typographic flourish feel like it's floating in deep space. GT Walsheim with aggressively tight letter-spacing (as extreme as -5.5px on 110px display text) creates headlines that feel compressed, kinetic, almost spring-loaded. Inter handles body text with extensive OpenType feature usage (`cv01, cv05, cv09, cv11, ss03, ss07`) that gives even small text a refined custom feel. Framer Blue `#0099ff` is deployed sparingly but decisively — as link color, border accents, and subtle ring shadows — creating a cold electric throughline against the warm-less black. The overall effect is a nightclub for web designers: dark, precise, seductive, and unapologetically product-forward. Mood — nightclub, kinetic, void, product-forward.

colors:
  primary: "#0099ff"
  primary-soft: "#a6a6a6"
  ink: "#ffffff"
  body: "#ffffff"
  muted: "#a6a6a6"
  canvas: "#000000"
  surface-app: "#000000"
  surface-elevated: "#090909"
  on-app: "#ffffff"
  on-app-muted: "#a6a6a6"
  hairline: "#0099ff"
  hairline-app: "#090909"
  on-primary: "#ffffff"
  link-default: "#0000ee"

typography:
  display-hero:
    fontFamily: "'GT Walsheim Framer Medium', 'GT Walsheim Medium', system-ui, sans-serif"
    fontSize: 110px
    fontWeight: 500
    lineHeight: 0.85
    letterSpacing: -5.5px
  section-display:
    fontFamily: "'GT Walsheim Medium', system-ui, sans-serif"
    fontSize: 85px
    fontWeight: 500
    lineHeight: 0.95
    letterSpacing: -4.25px
  section-heading:
    fontFamily: "'GT Walsheim Medium', system-ui, sans-serif"
    fontSize: 62px
    fontWeight: 500
    lineHeight: 1.00
    letterSpacing: -3.1px
  feature-heading:
    fontFamily: "'GT Walsheim Medium', system-ui, sans-serif"
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.13
    letterSpacing: -1px
  accent-display:
    fontFamily: "'Mona Sans', 'GT Walsheim Medium', system-ui, sans-serif"
    fontSize: 62px
    fontWeight: 100
    lineHeight: 1.00
    letterSpacing: -3.1px
  card-title:
    fontFamily: "'Inter Variable', Inter, -apple-system, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.30
    letterSpacing: 0
  feature-title:
    fontFamily: "Inter, -apple-system, system-ui, sans-serif"
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.20
    letterSpacing: -0.8px
  sub-heading:
    fontFamily: "Inter, -apple-system, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: -0.8px
  body-large:
    fontFamily: "'Inter Variable', Inter, -apple-system, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.30
    letterSpacing: 0
  body:
    fontFamily: "'Inter Variable', Inter, -apple-system, system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.30
    letterSpacing: 0
  nav:
    fontFamily: "'Inter Variable', Inter, -apple-system, system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.00
    letterSpacing: -0.15px
  caption:
    fontFamily: "'Inter Variable', Inter, -apple-system, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  label:
    fontFamily: "Inter, -apple-system, system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.60
    letterSpacing: 0
  micro-code:
    fontFamily: "'Azeret Mono', ui-monospace, monospace"
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.60
    letterSpacing: 0
  badge:
    fontFamily: "'Open Runde', system-ui, sans-serif"
    fontSize: 9px
    fontWeight: 600
    lineHeight: 1.11
    letterSpacing: 0

rounded:
  none: 0px
  xs: 5px
  sm: 8px
  md: 10px
  lg: 12px
  xl: 15px
  "2xl": 20px
  "3xl": 30px
  pill: 100px

spacing:
  "0": 0px
  "1": 2px
  "2": 4px
  "3": 8px
  "4": 10px
  "5": 12px
  "6": 15px
  "7": 20px
  "8": 30px
  "9": 35px
  "10": 60px
  "11": 80px
  "12": 120px

components:
  button-frosted:
    backgroundColor: "rgba(255, 255, 255, 0.1)"
    textColor: "{colors.on-app}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 10px 20px
  button-white:
    backgroundColor: "{colors.on-app}"
    textColor: "{colors.canvas}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 10px 15px
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.on-app}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 10px 15px
  card:
    backgroundColor: "{colors.surface-elevated}"
    rounded: "{rounded.lg}"
    padding: 24px
  card-screenshot:
    backgroundColor: "{colors.surface-app}"
    rounded: "{rounded.md}"
    padding: 0px
  input:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.on-app}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 12px 16px
---

## Overview

Framer is a cinematic dark canvas drenched in pure black `#000000` — not warm charcoal or cozy dark gray but absolute void that makes every screenshot float in deep space. GT Walsheim's extreme negative letter-spacing (-5.5px at 110px) creates spring-loaded compressed headlines, while Inter's extensive OpenType feature usage gives even body text a refined custom feel. Framer Blue `#0099ff` is the singular accent — links, borders, ring shadows — creating a cold electric throughline. The site is a nightclub for web designers, with the product itself as the marketing.

Mood — nightclub, kinetic, void, product-forward.

## Colors

Pure Black `#000000` is the only background — never `#1a1a1a`, `#2d2d2d` or brownish blacks. Near-black `#090909` is used for elevated surfaces and shadow rings. Pure White `#ffffff` for headings and high-emphasis body, Muted Silver `#a6a6a6` for descriptions, and `rgba(255,255,255,0.6)` for tertiary text.

Framer Blue `#0099ff` is the sole accent — links, interactive borders, focus rings — with `rgba(0,153,255,0.15)` as the signature ring-shadow at very low opacity for subtle border-as-glow on every bordered element. Frosted surfaces use `rgba(255,255,255,0.1)`.

No prominent gradient usage — Framer relies on pure flat black with occasional blue-tinted radial glows behind product screenshots.

## Typography

Compression as personality — GT Walsheim's extreme negative letter-spacing (-5.5px at 110px) is the defining typographic gesture. All GT Walsheim is weight 500 (medium) only — never bold, never regular — confident-but-not-aggressive. Ultra-tight line heights at 0.85 mean letters nearly overlap vertically.

Inter is deployed with 6+ OpenType features simultaneously (`cv01, cv05, cv09, cv11, ss03, ss07`), creating a subtly custom feel even at body sizes. Mona Sans appears at ultra-light weight 100 for ethereal accent display moments. Azeret Mono handles code at 10–14px; Open Runde for 9px badges.

## Layout

8px base, scale 4/8/10/12/15/20/30/35/60/80/120px. Max container ~1200px. Section padding generous (80–120px) — whitespace manifests as void, creating dramatic pauses between content blocks. Asymmetric layouts pair text (40%) with screenshot (60%).

## Elevation & Depth

Inverted from traditional light-theme designs — instead of darker shadows on light backgrounds, Framer uses:

- **Ring** — `rgba(0,153,255,0.15) 0px 0px 0px 1px` (Framer Blue glow ring as card border — signature move)
- **Contained** — `rgb(9,9,9) 0px 0px 0px 2px` (near-black ring for subtle containment)
- **Floating** — `rgba(255,255,255,0.1) 0px 0.5px 0px 0.5px, rgba(0,0,0,0.25) 0px 10px 30px` (white edge highlight on top + deep ambient shadow)

White edge highlights simulate light hitting the top surface of elevated elements; ambient shadows create true float. No glassmorphism — translucency is achieved through simple rgba opacity.

## Shapes

1px (micro-elements, nearly squared) → 5–7px (small UI, image thumbnails) → 8px (standard component radius — code blocks, buttons, interactive) → 10–12px (cards, product screenshots) → 15–20px (large containers, feature cards) → 30–40px (navigation pills, pagination) → 100px (full pill — primary CTAs, tags).

## Components

**Frosted pill** — `rgba(255,255,255,0.1)` fill, `#000000` text, 40px+ radius. Glass-effect button on dark surfaces — translucent, ambient.

**Solid white pill** — `#ffffff` fill, black text, 100px radius, 10/15 padding. Primary CTA — clean, high-contrast.

**Ghost** — no visible background, white text, hover reveals subtle frosted background.

**Cards** — black or `#090909` near-black fill, `rgba(0,153,255,0.15) 0px 0px 0px 1px` blue ring shadow border, 10–15px radius. Multi-layer shadow for elevation: subtle white top highlight + deep ambient shadow.

**Product screenshots** — full-width or padded within dark containers, 8–12px radius. The tool is the marketing.

**Inputs** — dark background, subtle border, white text. Focus state: Framer Blue `#0099ff` ring, `1px solid #0099ff`. Placeholder `rgba(255,255,255,0.4)`.

**Nav** — black background with frosted glass effect, white Inter 15px weight 400 text, frosted pill CTA right, sticky on scroll.

## Do's and Don'ts

**Do**
- Use pure black `#000000` as primary background — not dark gray, not charcoal
- Apply extreme negative letter-spacing on GT Walsheim display (-3px to -5.5px)
- Keep all buttons pill-shaped (40px+ radius)
- Use Framer Blue `#0099ff` exclusively for interactive accents
- Deploy `rgba(255,255,255,0.1)` for frosted glass on dark surfaces
- Maintain GT Walsheim at weight 500 only — medium IS the brand
- Use extensive OpenType features on Inter (cv01, cv05, cv09, cv11, ss03, ss07)
- Let product screenshots be the visual centerpiece — the tool markets itself
- Apply blue ring shadows (`rgba(0,153,255,0.15) 0px 0px 0px 1px`) for card containment

**Don't**
- Use warm dark backgrounds (no `#1a1a1a`, `#2d2d2d`, brownish blacks)
- Apply bold (700+) weight to GT Walsheim — medium 500 only
- Introduce additional accent colors beyond Framer Blue
- Use large border-radius on non-interactive elements (cards 10–15px, only buttons 40px+)
- Add decorative imagery, illustrations, or icons — the product IS the illustration
- Use positive letter-spacing on headlines — everything is compressed, negative
- Create heavy drop shadows — depth is communicated through subtle rings
- Place light/white backgrounds behind content sections — the void is sacred

## Agent Prompt Guide

**Bias toward** — pure black `#000000` void canvas, GT Walsheim weight 500 with extreme negative tracking, Framer Blue `#0099ff` ring-shadow borders, pill (40–100px) buttons, Inter with 6+ OpenType features, frosted glass `rgba(255,255,255,0.1)` overlays, product screenshots as hero art, subtle multi-layer shadow stack on elevated cards.

**Reject** — warm dark backgrounds, GT Walsheim above weight 500, positive letter-spacing on headlines, decorative imagery beyond product UI, additional accent colors, light backgrounds, heavy drop shadows, sharp 0px button corners.
