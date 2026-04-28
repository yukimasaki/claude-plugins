---
version: alpha
name: Shopify
description: |
  Shopify.com is a dark-first digital theatre — a website that stages its commerce platform like a cinematic premiere. The entire experience unfolds against an abyss of near-black surfaces that carry the faintest whisper of deep forest green (`#02090A`, `#061A1C`, `#102620`), creating a nocturnal atmosphere that feels less like a SaaS marketing page and more like an exclusive product reveal at a tech keynote. NeueHaasGrotesk — a refined Helvetica descendant — appears at monumental scale (96px) with impossibly light weight (330–400), creating headlines that feel etched in light rather than printed in ink. The `ss03` OpenType feature distinguishes Shopify's type from generic Helvetica usage. Shopify Neon Green `#36F4A4` is the singular high-energy accent — electric mint pulsing on focus rings only, like a bioluminescent signal against the dark canvas. Full-pill (9999px) buttons, multi-stage box shadows creating photographic depth, and zinc-based neutral scale complete the science-fiction-future commerce aesthetic. Mood — keynote-cinematic, ethereal, dark-first, bioluminescent.

colors:
  primary: "#ffffff"
  primary-on-light: "#000000"
  accent-neon: "#36f4a4"
  accent-aloe: "#c1fbd4"
  accent-pistachio: "#d4f9e0"
  ink: "#ffffff"
  body: "#ffffff"
  muted: "#a1a1aa"
  shade-30: "#d4d4d8"
  shade-50: "#71717a"
  shade-60: "#52525b"
  shade-70: "#3f3f46"
  canvas: "#000000"
  surface-deep-teal: "#02090a"
  surface-dark-forest: "#061a1c"
  surface-forest: "#102620"
  surface-light: "#e4e4e7"
  hairline: "#e4e4e7"
  hairline-dark: "#1e2c31"
  on-primary: "#000000"
  link-muted: "#9797a2"
  link-sage: "#9dabad"
  link-lavender: "#bdbdca"
  link-mint: "#99b3ad"

typography:
  display-xl:
    fontFamily: "NeueHaasGrotesk, Helvetica, Arial, sans-serif"
    fontSize: 96px
    fontWeight: 400
    lineHeight: 1.00
    letterSpacing: 0
  display-light:
    fontFamily: "NeueHaasGrotesk, Helvetica, Arial, sans-serif"
    fontSize: 96px
    fontWeight: 330
    lineHeight: 0.96
    letterSpacing: 0
  heading-1:
    fontFamily: "NeueHaasGrotesk, Helvetica, Arial, sans-serif"
    fontSize: 70px
    fontWeight: 330
    lineHeight: 1.00
    letterSpacing: 0
  heading-2:
    fontFamily: "NeueHaasGrotesk, Helvetica, Arial, sans-serif"
    fontSize: 55px
    fontWeight: 330
    lineHeight: 1.16
    letterSpacing: 0
  heading-3:
    fontFamily: "NeueHaasGrotesk, Helvetica, Arial, sans-serif"
    fontSize: 48px
    fontWeight: 330
    lineHeight: 1.14
    letterSpacing: 0
  heading-4:
    fontFamily: "NeueHaasGrotesk, Helvetica, Arial, sans-serif"
    fontSize: 32px
    fontWeight: 360
    lineHeight: 1.14
    letterSpacing: 0.32px
  heading-5:
    fontFamily: "NeueHaasGrotesk, Helvetica, Arial, sans-serif"
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.28
    letterSpacing: 0.42px
  body-large:
    fontFamily: "NeueHaasGrotesk, 'Inter Variable', Helvetica, Arial, sans-serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.40
    letterSpacing: 0.3px
  body:
    fontFamily: "'Inter Variable', Inter, Helvetica, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.56
    letterSpacing: 0
  body-small:
    fontFamily: "'Inter Variable', Inter, Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  nav:
    fontFamily: "NeueHaasGrotesk, Helvetica, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0.72px
  button:
    fontFamily: "NeueHaasGrotesk, Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  caption:
    fontFamily: "NeueHaasGrotesk, 'Inter Variable', Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.49
    letterSpacing: 0.28px
  overline:
    fontFamily: "NeueHaasGrotesk, Helvetica, Arial, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 1.54px
  label:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.20
    letterSpacing: 0.72px
  code:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0

rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 20px
  pill: 9999px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 12px
  "4": 16px
  "5": 24px
  "6": 28px
  "7": 32px
  "8": 36px
  "9": 40px
  "10": 64px
  section: 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px 26px
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.body}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px 26px
  badge-frosted:
    backgroundColor: "rgba(255, 255, 255, 0.2)"
    textColor: "{colors.body}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: 12px 16px
  card:
    backgroundColor: "{colors.surface-deep-teal}"
    rounded: "{rounded.sm}"
    padding: 24px
  card-feature:
    backgroundColor: "{colors.surface-deep-teal}"
    rounded: "{rounded.md}"
    padding: 32px
  card-top-rounded:
    backgroundColor: "{colors.surface-dark-forest}"
    rounded: "{rounded.lg}"
    padding: 24px
  input:
    backgroundColor: "{colors.surface-dark-forest}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 12px 16px
---

## Overview

Shopify.com is a dark-first digital theatre — a website that stages commerce like a cinematic premiere. The dark surface hierarchy (Void Black `#000000` → Deep Teal `#02090A` → Dark Forest `#061A1C` → Forest `#102620`) carries the faintest whisper of deep forest green that distinguishes it from generic black. NeueHaasGrotesk lives at impossibly light weights (330–400) at monumental 96px display, creating headlines that feel etched in light. Shopify Neon Green `#36F4A4` is the singular high-energy accent reserved for focus rings only — bioluminescent, not decorative. Full-pill 9999px buttons and multi-stage box shadows complete the keynote-presentation aesthetic.

Mood — keynote-cinematic, ethereal, dark-first, bioluminescent.

## Colors

The dark-surface hierarchy is the foundation: Void `#000000` (root) → Deep Teal `#02090A` (cards) → Dark Forest `#061A1C` (sections) → Forest `#102620` (elevated surfaces, header background). All surfaces have a faint forest-green undertone — never neutral charcoal.

White `#ffffff` is the only text color on dark; black `#000000` for text on white pill CTAs only. Zinc-based neutral scale handles text hierarchy: `#A1A1AA` (muted), `#71717A` (shade-50, tertiary), `#52525B` (shade-60, disabled), `#3F3F46` (shade-70, dividers), `#D4D4D8` (shade-30, lightest).

Neon Green `#36F4A4` is the singular electric accent — focus rings, critical highlights only. Soft Aloe `#C1FBD4` and Pistachio `#D4F9E0` provide atmospheric green washes. Themed link variants (sage `#9DABAD`, mint `#99B3AD`, lavender `#BDBDCA`) exist for context-specific moments.

Card borders use Dark Card Border `#1E2C31` — barely-visible boundary definition.

## Typography

Display lives almost exclusively at weights 330–400 — featherweight text appearing to hover above the dark background like projected light. The opposite of typical SaaS bold-and-heavy: where others shout, Shopify whispers at scale. The 96px headlines at weight 330 create a paradox of enormous size and delicate stroke — both monumental and fragile.

`ss03` OpenType feature activates a stylistic set giving specific characters refined alternates, distinguishing Shopify's typography from standard Helvetica Neue. Inter Variable handles body with surgical precision, using weights between traditional stops (420, 450, 550). Heading sizes track positive (0.32–0.42px) — never negative. ui-monospace for code at 16px uppercase.

## Layout

8px base, scale 4/8/12/16/24/28/32/36/40/64/80px. Max container 1280px. Page horizontal padding 64px desktop / 32px tablet / 16px mobile. Section spacing theatrical — 80–120px of pure black breathing room creates the pacing of a presentation, not a webpage. Within sections spacing is tighter and more deliberate, contrast giving the cinematic cadence.

## Elevation & Depth

Multi-layer shadow system unique to Shopify — single-value shadows look flat:

- **Subtle** — `rgba(0,0,0,0.1) 0px 0px 0px 1px` + inset `rgba(255,255,255,0.03) 0px 1px 0px` (resting cards with delicate top-edge glow)
- **Medium** — 1px ring + 2px + 4px + 8px stack at 10% black (elevated cards, featured sections — natural light falloff)
- **High** — `rgba(0,0,0,0.25) 0px 25px 50px -12px` (modals, dropdowns)
- **Focus** — `0px 0px 0px 2px #36F4A4` (Neon Green keyboard focus ring)

On dark backgrounds, shadows function more as ambient occlusion than traditional elevation — the card appears to sink slightly into the surface rather than float above. Decorative depth includes dark-teal radial gradients, spotlight effects fading to black, edge glow on dark cards, and faint green atmospheric halos.

## Shapes

4px (tags, badges, micro-elements) → 8px (standard cards, inputs, video containers) → 12px (featured cards, image containers, non-pill buttons) → 20px (top-rounded cards `20px 20px 0 0`, modal headers) → 9999px (pill buttons, pill badges, nav elements). Card radius stays consistent across breakpoints.

## Components

**Primary white pill** — `#ffffff` fill, `#000000` text, asymmetric 12/26 padding, 9999px radius, 2px transparent border, hover slight opacity reduction, focus 2px Neon Green outline.

**Secondary ghost pill** — transparent fill, white text, 2px white border, 9999px radius, hover fills to white with black text.

**Frosted badge** — `rgba(255,255,255,0.2)` fill, white text, 4px radius, 12/16 padding. Floats over dark cards.

**Cards** — Deep Teal `#02090A` fill, `1px solid #1E2C31` barely-visible border, 8–12px radius, multi-layer resting shadow with inset white top-edge glow. Hover expands shadow with subtle brightening.

**Inputs** — transparent or `#061A1C` fill, white text, `1px solid #3F3F46`, 8px radius, focus 2px Neon Green ring, `#71717A` placeholder.

**Nav** — transparent over hero, becomes Forest `#102620` on scroll, ~64px height. White Shopify logo left, 18px / weight 500 / 0.72px-tracked nav links, white pill "Start for free" CTA right.

## Do's and Don'ts

**Do**
- Use the dark teal-black surface hierarchy (Void → Deep Teal → Dark Forest → Forest) for depth
- Keep display typography at weight 330–400 — ethereal lightness IS the design's signature
- Use Neon Green `#36F4A4` exclusively for focus and critical accent — never decorative
- Apply 9999px radius to all primary CTA buttons — full pill is non-negotiable
- Use the multi-layered shadow system for card elevation — single shadows look flat
- Maintain `ss03` OpenType feature across all text — part of the typographic identity
- Use Inter Variable for body and NeueHaasGrotesk for headings — never mix roles
- Create theatrical 80px+ spacing between sections for cinematic pacing

**Don't**
- Use pure black `#000000` for text on dark — white `#ffffff` only
- Introduce warm colors (orange, red, yellow) — palette is strictly cool (greens, teals, neutrals)
- Use weights above 500 on NeueHaasGrotesk body text — heavy weights break the ethereal feel
- Apply green accents to large surfaces — Neon Green is for small precise highlights only
- Use sharp 0px corners — everything rounds
- Add bright backgrounds — dark theme is fundamental, not optional
- Use single-layer box shadows — stacked approach IS the system
- Set body line-height above 1.56 — Shopify text is relatively compact
- Use letter-spacing below 0 for headings — Shopify headings track neutral or positive

## Agent Prompt Guide

**Bias toward** — dark-first surface hierarchy (Void / Deep Teal / Dark Forest / Forest), NeueHaasGrotesk weight 330–400 ethereal display, Inter Variable body with weights 420/450/550, `ss03` OpenType feature, Neon Green `#36F4A4` focus-only accent, full-pill (9999px) primary CTAs, multi-layer stacked shadow system, theatrical 80–120px section spacing, positive letter-spacing on headings.

**Reject** — pure black text on dark, warm color introduction, NeueHaasGrotesk above weight 500, decorative neon green on large surfaces, sharp 0px corners, bright backgrounds, single-layer shadows, body line-height above 1.56, negative letter-spacing on headings.
