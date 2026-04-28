---
version: alpha
name: Vodafone
description: |
  Vodafone's corporate web system carries the broadcast-scale presence of a global telecom — built around a single, fiercely-owned **Vodafone Red (`#e60000`)** and a restrained editorial layout that lets imagery and type carry the emotional weight. Every page opens the same way: a cinematic dark hero image behind a towering tight-tracked uppercase display headline, followed by a deep-red full-width band that acts as a chapter break, then a crisp white editorial grid or a near-black `#25282b` institutional panel for share-tickers and global-impact maps. Type uses a custom Vodafone face running up to **144px in heavy 800-weight uppercase** with negative tracking. Body copy sits in a calm 16–18px mid-weight rhythm — the dual scale (monumental + quiet) creates the "corporate newsroom" feeling. The button system is a deliberate **two-tier** approach: tight **2px-radius rectangles** for utility/form actions, and fully-rounded **60px pills** for editorial content CTAs — both equally primary, selected by context. Edges stay clinical (2px and 6px), there are no decorative shadows, and the only true brand color is the red — no teal, no orange. Mood — broadcast-scale, institutional, chapter-band, documentary.

colors:
  primary: "#e60000"
  primary-deep: "#ac1811"
  ink: "#25282b"
  body: "#7e7e7e"
  body-strong: "#333333"
  disabled: "#bebebe"
  canvas: "#ffffff"
  surface: "#ffffff"
  surface-soft: "#f2f2f2"
  surface-dark: "#25282b"
  surface-dark-overlay: "#3b3e41"
  hairline: "#dadada"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  on-dark-soft: "#bfbfbf"
  link: "#3860be"

typography:
  display-hero-xl:
    fontFamily: "Vodafone, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 144px
    fontWeight: 800
    lineHeight: 0.79
    letterSpacing: -1px
  display-hero-lg:
    fontFamily: "Vodafone, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 126px
    fontWeight: 800
    lineHeight: 0.90
    letterSpacing: -1px
  display-hero-md:
    fontFamily: "Vodafone, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 90px
    fontWeight: 800
    lineHeight: 0.93
    letterSpacing: 0
  display-impact:
    fontFamily: "Vodafone, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 70px
    fontWeight: 800
    lineHeight: 1.17
    letterSpacing: -1px
  heading-1-light:
    fontFamily: "Vodafone, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 48px
    fontWeight: 300
    lineHeight: 1.08
    letterSpacing: 0
  heading-1-bold:
    fontFamily: "Vodafone, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 48px
    fontWeight: 800
    lineHeight: 1.00
    letterSpacing: -1px
  heading-2:
    fontFamily: "Vodafone, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.10
    letterSpacing: 0
  heading-3:
    fontFamily: "Vodafone, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  card-title:
    fontFamily: "Vodafone, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.00
    letterSpacing: 0
  intro-light:
    fontFamily: "Vodafone, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 24px
    fontWeight: 300
    lineHeight: 1.42
    letterSpacing: 0
  module-title:
    fontFamily: "Vodafone, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.30
    letterSpacing: 0
  lead-body:
    fontFamily: "Vodafone, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body-lg:
    fontFamily: "Vodafone, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.56
    letterSpacing: 0
  body:
    fontFamily: "Vodafone, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.38
    letterSpacing: 0
  label-uppercase:
    fontFamily: "Vodafone, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 16px
    fontWeight: 800
    lineHeight: 1.50
    letterSpacing: 0
  eyebrow:
    fontFamily: "Vodafone, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.43
    letterSpacing: 0
  button:
    fontFamily: "Vodafone, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 14.4px
    fontWeight: 700
    lineHeight: 1.00
    letterSpacing: 0.144px
  caption:
    fontFamily: "Vodafone, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 2.00
    letterSpacing: 0

rounded:
  none: 0px
  hairline: 1px
  rect: 2px
  card: 6px
  pill-glass: 24px
  pill-badge: 32px
  pill-cta: 60px
  full: 9999px

spacing:
  "0": 0px
  "1": 2px
  "2": 4px
  "3": 8px
  "4": 12px
  "5": 16px
  "6": 20px
  "7": 24px
  "8": 32px
  "9": 38px
  "10": 64px
  section: 64px
  section-lg: 96px

components:
  button-rect-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.rect}"
    padding: 12px 10px
  button-pill-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill-cta}"
    padding: 16px
  button-rect-ghost:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body-strong}"
    typography: "{typography.button}"
    rounded: "{rounded.rect}"
    padding: 12px 10px
  button-glass-pill:
    backgroundColor: "{colors.surface-dark-overlay}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill-glass}"
    padding: 8px 16px
  button-content-ghost-pill:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill-cta}"
    padding: 15px
  button-icon-circle:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 36px
  card-news:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.card}"
    padding: 16px
  badge-outlined:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.rect}"
    padding: 6px
  badge-filled:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill-badge}"
    padding: 4px 12px
  red-band:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
    height: 64px
  institutional-panel:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body}"
    padding: 64px
  footer:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body}"
    padding: 64px
---

## Overview

Vodafone's marketing system is a corporate newsroom — a universal page rhythm that repeats across every template: dark atmospheric hero → monumental uppercase headline → full-width red band → white editorial canvas → charcoal institutional panel → charcoal footer. The brand color does the heavy lifting; everything else gets out of the way.

Mood — broadcast-scale, institutional, chapter-band, documentary.

## Colors

Vodafone Red (`#e60000`) is the system's **single non-negotiable brand color**. It anchors primary CTAs, the speech-mark logo, full-bleed band dividers, tag-pill outlines, and the rotated "IMPACT" wordmark on the sustainability map. The red must never be substituted or tinted.

**White** (`#ffffff`) is the dominant editorial canvas. **Charcoal Headline** (`#25282b`) handles all heading text — a near-black with a faint cool tint, never pure black. **Secondary Body Grey** (`#7e7e7e`) carries body copy and meta text. **Form Text Grey** (`#333333`) is reserved for ghost-button borders and their text.

**Light Neutral** (`#f2f2f2`) provides quiet pill-badge backgrounds. **Charcoal Institutional Panel** is the same `#25282b` reused as a full-width dark surface for the footer, share ticker, and global-impact map — the page's "data mode" environment.

**Signal Blue** (`#3860be`) is reserved for inline text links — the only blue on the marketing surface. **Deep Brand Red Shade** (`#ac1811`) appears occasionally on quiet sustainability label chips.

The system is intentionally gradient-free. Tonal variation comes only from photographic vignettes on hero imagery — not CSS gradients.

## Typography

**Vodafone (custom corporate sans-serif)** with Helvetica Neue / Arial fallback. The font runs at extreme scale: **800 weight uppercase up to 144px** with negative tracking creates the broadcast-scale headline voice. Body copy sits calm at 16–18px / weight 400.

**Three working weights**: 800 (display), 700 (bold body, buttons, tags), 400 (reading body). Light 300 is used for editorial-style 40–48px headlines when a calmer voice is wanted.

**Uppercase display, mixed-case body** is the rule — anything 48px and above is uppercase with -1px tracking; anything below is sentence case with normal tracking. No italics — emphasis comes from weight 600/700.

The **rotated "IMPACT" wordmark** on the sustainability map (vertical 90° rotation, brand-red, weight 800 uppercase) is the template's signature typographic flourish.

For external implementations, **Inter** at weights 400/600/800 (with letter-spacing reduced 1–2% at display sizes) or **Neue Haas Grotesk** are the closest open substitutes.

## Layout

8px base. The scale combines tight UI (1px / 2px / 4px) with editorial rhythm (16px / 20px / 24px / 32px). **32px and 38px** are universal rhythm constants appearing across every page. Section vertical rhythm: 64–96px between major modules.

Max content width approximately 1440px on very large screens; articles and hero modules typically sit at 1200px. Card grids: 3-up or 4-up at desktop, 2-up at tablet, stacked 1-up at mobile. Institutional panels (share ticker, world map, footer) always full-bleed edge-to-edge.

## Elevation & Depth

Vodafone's system is deliberately **flat**. Almost no conventional box-shadow. Hierarchy comes from color (red bands, charcoal panels), typography weight (800 vs 400), and spacing.

| Level | Treatment | Use |
|---|---|---|
| 0 — Surface | No shadow, no border | Default card, default section |
| 1 — Outline | 1px solid border at low opacity | Ghost buttons, outlined pills |
| 2 — Inset | `inset 0 0 0 1px` on focus | Pressed/focused controls |
| 3 — Photographic | Photography itself carries depth | Hero imagery |
| 4 — Surface shift | Charcoal panel below white canvas | Share ticker / world map / footer |

The dominant elevation is **color surface shift** — switching from white editorial canvas to charcoal institutional panel — rather than drop shadows.

## Shapes

The radius system is one of Vodafone's most distinctive choices: **two equally-primary button shapes selected by context, not hierarchy**.

- **hairline (1px)**: inline text wraps, small badges
- **rect (2px)**: utility/form button corners — sharp, clinical
- **card (6px)**: news cards, images, input fields
- **pill-glass (24px)**: translucent pills on dark hero imagery
- **pill-badge (32px)**: filled neutral pill badges
- **pill-cta (60px)**: editorial content CTAs — fully pill-shaped
- **full (9999px)**: icon controls, circular portraits

The 2px rectangle vs 60px pill duality is the brand's most signature interaction-shape decision.

## Components

**Button rect-primary** (utility / form CTA — "Accept All Cookies", "Subscribe"): Vodafone Red fill, white 14.4px / weight 700 / 0.144px tracking, **2px radius**, 12×10 padding.

**Button pill-primary** (editorial / content CTA — "EXPLORE CONNECTING PEOPLE"): Vodafone Red fill, white text, **60px radius**, 16px uniform padding.

**Button rect-ghost**: white fill, Form Text Grey text, 1px solid Form Text Grey border, 2px radius. Secondary form action.

**Button glass-pill**: 10%-opacity-white fill (approximated as `#3b3e41` overlay tone) on dark imagery, white text, 24px radius. The translucent pill that lets photo breathe through.

**Button content-ghost-pill**: 5%-opacity-black fill (approximated here using the soft surface tint), Vodafone Red text, 60px radius — low-emphasis editorial pill with red-only text.

**Button icon-circle**: white fill, charcoal icon, **9999px (50%) circle**, 32–40px diameter. Used for video play/pause, carousel arrows, close.

**Card news**: white fill, **6px radius** (top corners on the image, all four corners on the container), 16px padding. 16:9 image on top, eyebrow row (date + tag), 24px / weight 700 title. No shadow.

**Badge outlined-red**: white fill (originally rgba(255,255,255,0.8)), near-black text, **1px solid Vodafone Red border**, 2px radius, 6px padding, 12px / weight 600 uppercase.

**Badge filled-neutral**: `#f2f2f2` fill, charcoal text, **32px pill**, 4×12 padding, 14px / weight 700.

**Red band**: full-width strip of Vodafone Red, 64px desktop / 40px mobile. No text, no controls — pure brand chapter divider that appears on every page template.

**Institutional panel**: full-bleed `#25282b` charcoal background, white text. Used for share ticker (large numeric display in 48px / weight 800 with negative tracking), global-impact world map (with red markers and rotated "IMPACT" wordmark), and the footer.

**Footer**: same charcoal panel, 4-column link grid, red speech-mark logo bottom-right, hairline white-25%-opacity dividers between column groups.

## Do's and Don'ts

**Do**

- Use Vodafone Red (`#e60000`) as the single loudest element on any screen
- Set display headlines in uppercase 800-weight with tight negative tracking — 90–144px on desktop
- Pair monumental display with calm 16–18px body — the scale jump is the system
- Switch button radius by context: 2px rectangles for form/utility, 60px pills for editorial content
- Let documentary photography breathe at 16:9 or 1:1 on a 6px radius
- Use the red band as a full-width chapter divider between every hero and its content
- Anchor every page with a charcoal institutional surface — footer always, plus extending to share ticker / global-impact map
- Respect the universal page rhythm

**Don't**

- Don't introduce a second brand hue — no teals, no purples, no orange accents
- Don't soften rectangle button corners beyond 2px, don't shrink pill button corners below 60px
- Don't add drop shadows to cards or buttons — system is intentionally flat
- Don't use gradients on backgrounds, buttons, or text
- Don't mix uppercase tracking on body text — uppercase reserved for display, labels, micro-labels
- Don't use italics — use weight 600/700 instead
- Don't decorate headlines with colored underlines or highlights
- Don't use pure black for text — Charcoal Headline (`#25282b`)

## Agent Prompt Guide

**Bias toward** — Vodafone Red as the singular brand color, uppercase 800 display at 90–144px with negative tracking, two-tier button radius (2px rect + 60px pill), red full-width chapter bands, charcoal institutional panels for data, documentary photography on 16:9 / 1:1 / 6px-radius cards, no gradients, no shadows.

**Reject** — second brand hues, mid-radius buttons (5–59px), drop shadows, gradients, italics, uppercase body text, colored headline underlines, pure black text, decorative iconography.
