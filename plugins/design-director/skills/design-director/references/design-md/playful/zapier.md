---
version: alpha
name: Zapier
description: |
  Zapier's website radiates warm approachable professionalism. It rejects the cold monochrome minimalism of developer tools in favor of a cream-tinted canvas `#fffefb` that feels like unbleached paper — the digital equivalent of a well-organized notebook. The near-black `#201515` text has a faint reddish-brown warmth, creating an atmosphere more human than mechanical. The typographic system is a deliberate interplay of three personalities: Degular Display (geometric wide display) handles hero headlines at 56–80px with extraordinarily tight 0.90 line-heights creating compressed-block headlines; Inter is the universal UI workhorse for everything functional; GT Alpina (thin-weight serif) makes occasional editorial appearances with aggressive negative tracking (-1.6px to -1.92px). Zapier Orange `#ff4f00` is the unmistakable singular accent — vivid red-orange between traffic-cone urgency and sunset warmth — used sparingly for primary CTAs and active state underlines. Borders (`1px solid #c5c0b1` warm sand) replace shadows entirely, and tab navigation uses inset box-shadow underlines instead of border-bottom. Mood — warm-paper, automation-friendly, editorial, border-forward.

colors:
  primary: "#ff4f00"
  primary-dark: "#201515"
  ink: "#201515"
  body: "#36342e"
  muted: "#939084"
  mid-warm: "#b5b2aa"
  canvas: "#fffefb"
  surface-soft: "#fffdf9"
  surface-button: "#eceae3"
  hairline: "#c5c0b1"
  hairline-strong: "#36342e"
  on-primary: "#fffefb"

typography:
  display-hero-xl:
    fontFamily: "'Degular Display', Inter, Helvetica, Arial, sans-serif"
    fontSize: 80px
    fontWeight: 500
    lineHeight: 0.90
    letterSpacing: 0
  display-hero:
    fontFamily: "'Degular Display', Inter, Helvetica, Arial, sans-serif"
    fontSize: 56px
    fontWeight: 500
    lineHeight: 0.90
    letterSpacing: 0
  display-hero-sm:
    fontFamily: "'Degular Display', Inter, Helvetica, Arial, sans-serif"
    fontSize: 40px
    fontWeight: 500
    lineHeight: 0.90
    letterSpacing: 0
  display-button:
    fontFamily: "'Degular Display', Inter, Helvetica, Arial, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.00
    letterSpacing: 1px
  section-heading:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: 0
  editorial-heading:
    fontFamily: "'GT Alpina', Georgia, serif"
    fontSize: 48px
    fontWeight: 250
    lineHeight: 1.10
    letterSpacing: -1.92px
  editorial-sub:
    fontFamily: "'GT Alpina', Georgia, serif"
    fontSize: 40px
    fontWeight: 300
    lineHeight: 1.08
    letterSpacing: -1.6px
  sub-heading-lg:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: 36px
    fontWeight: 500
    lineHeight: 1.10
    letterSpacing: -1px
  sub-heading:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0
  card-title:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: -0.48px
  body-large:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.20
    letterSpacing: -0.2px
  body:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: -0.16px
  button:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: 0
  caption:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    letterSpacing: 0
  caption-upper:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: 0.5px
  micro:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: 0.5px

rounded:
  none: 0px
  xs: 3px
  sm: 4px
  md: 5px
  lg: 8px
  xl: 14px
  pill: 20px

spacing:
  "0": 0px
  "1": 4px
  "2": 6px
  "3": 8px
  "4": 10px
  "5": 12px
  "6": 16px
  "7": 20px
  "8": 24px
  "9": 32px
  "10": 40px
  "11": 48px
  "12": 56px
  "13": 64px
  "14": 72px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 8px 16px
  button-dark:
    backgroundColor: "{colors.primary-dark}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: 20px 24px
  button-light:
    backgroundColor: "{colors.surface-button}"
    textColor: "{colors.body}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: 20px 24px
  button-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 0px 16px
  card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: 24px
  card-feature:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: 32px
  input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  tab:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 12px 16px
---

## Overview

Zapier runs on a cream `#fffefb` canvas (unbleached paper, not pure white) with near-black `#201515` text that has a faint reddish-brown warmth — automation designed to feel effortless, not mechanical. Three fonts in deliberate roles: Degular Display (compressed 0.90 line-height hero blocks), Inter (universal UI workhorse), GT Alpina (thin-weight serif editorial accents with -1.6px to -1.92px tracking). Zapier Orange `#ff4f00` is the singular vivid accent — primary CTAs and active tab underlines only. Sand `#c5c0b1` borders replace shadows entirely; tab nav uses inset box-shadow underlines.

Mood — warm-paper, automation-friendly, editorial, border-forward.

## Colors

The canvas is cream `#fffefb` (never pure white) with `#fffdf9` off-white as a near-imperceptible secondary surface for depth. Warm near-black `#201515` carries text and dark CTAs; secondary text uses Dark Charcoal `#36342e` (warm gray-brown), then Warm Gray `#939084` (mid-range, greenish-warm), Sand `#c5c0b1` (primary border), Light Sand `#eceae3` (secondary button surface), Mid Warm `#b5b2aa`.

Zapier Orange `#ff4f00` is the singular brand accent — vivid red-orange between traffic-cone urgency and sunset warmth. Used for primary CTAs and active state underlines only — never scattered. Active tab inset underline `rgb(255,79,0) 0px -4px 0px 0px inset`; hover underline `rgb(197,192,177) 0px -4px 0px 0px inset` (sand). Overlay `rgba(45,45,46,0.5)` for video play buttons.

## Typography

Three-font system with strict roles. Degular Display handles hero scale (40–80px) at weight 500 with 0.90 line-height — compressed vertical block headlines. Inter shoulders all functional UI — navigation, body, buttons, captions, labels — with weights 400 (reading), 500 (nav/emphasis), 600 (headings/CTAs). GT Alpina at thin weights (250–300) with aggressive negative tracking (-1.6px to -1.92px) provides editorial elegance. Uppercase 12–14px / weight 600 / 0.5px tracking handles section labels.

## Layout

8px base, scale 4/6/8/10/12/16/20/24/32/40/48/56/64/72px. Max content width ~1200px. Section padding 64–80px vertical. CTA buttons use generous 20/24 padding for the spacious-button feel. Section rhythm comes from sand-colored border dividers, not background-color shifts.

## Elevation & Depth

Deliberately avoids traditional shadow-based elevation. Structure is defined entirely through borders:

- **Bordered** — `1px solid #c5c0b1` (standard cards, containers, inputs)
- **Strong border** — `1px solid #36342e` (dark dividers, emphasis)
- **Active tab underline** — `rgb(255,79,0) 0px -4px 0px 0px inset` (orange)
- **Hover tab underline** — `rgb(197,192,177) 0px -4px 0px 0px inset` (sand)
- **Focus** — `1px solid #ff4f00` outline

The only "shadow" technique is inset box-shadow used for tab underlines. This border-first approach keeps the design grounded and tangible rather than floating.

## Shapes

3px (small inline spans) → 4px (orange CTA buttons, tags) → 5px (cards, links, general containers) → 8px (featured cards, large buttons, tabs) → 14px (social icon buttons) → 20px (play buttons, large pill buttons, floating actions). Pills are reserved for tags and floating actions — never primary buttons.

## Components

**Primary orange** — `#ff4f00` fill, cream text, 8/16 padding, 4px radius, `1px solid #ff4f00` border. Primary CTA voice ("Start free with email").

**Primary dark** — `#201515` fill, cream text, generous 20/24 padding, 8px radius, `1px solid #201515` border, hover `#c5c0b1` background with dark text. Large secondary CTA.

**Light/ghost** — `#eceae3` fill, dark charcoal text, 20/24 padding, 8px radius, `1px solid #c5c0b1` border.

**Pill** — cream fill, dark charcoal text, 0/16 padding, 20px radius, `1px solid #c5c0b1`. Tag-like selections, filter pills.

**Overlay semi-transparent** — `rgba(45,45,46,0.5)` fill, cream text, 20px radius — video play buttons.

**Tab navigation** — transparent fill, dark text, 12/16 padding, inset box-shadow `rgb(255,79,0) 0px -4px 0px 0px inset` for active (orange underline), hover sand `rgb(197,192,177) 0px -4px 0px 0px inset`.

**Cards** — cream fill, `1px solid #c5c0b1` warm sand border, 5px standard / 8px featured radius. No shadow.

**Inputs** — cream fill, `1px solid #c5c0b1`, 5px radius, focus border shifts to orange `#ff4f00`.

## Do's and Don'ts

**Do**
- Use Degular Display exclusively for hero-scale headlines (40px+) with 0.90 line-height for compressed impact
- Use Inter for all functional UI — navigation, body, buttons, labels
- Apply warm cream `#fffefb` as background, never pure white
- Use `#201515` for text, never pure black — the reddish warmth matters
- Reserve Zapier Orange `#ff4f00` for primary CTAs and active state indicators
- Use sand `#c5c0b1` borders as the primary structural element instead of shadows
- Apply generous button padding (20/24) for large CTAs — Zapier buttons feel spacious
- Use inset box-shadow underlines for tab navigation — never border-bottom
- Apply uppercase + 0.5px letter-spacing for section labels and micro-categorization

**Don't**
- Use Degular Display for body text or UI — display-only
- Use pure white `#ffffff` or pure black `#000000` — Zapier's palette is warm-shifted
- Apply box-shadow elevation to cards — use borders instead
- Scatter Zapier Orange across the UI — reserved for CTAs and active states
- Use tight padding on large CTA buttons — Zapier's are deliberately spacious
- Use cool gray borders — always warm sand `#c5c0b1`
- Use GT Alpina for functional UI — editorial accent at thin weights only
- Apply positive letter-spacing to GT Alpina — uses aggressive negative (-1.6 to -1.92px)
- Use rounded pill (9999px) for primary buttons — pills are for tags and floating actions

## Agent Prompt Guide

**Bias toward** — cream `#fffefb` canvas with warm-near-black `#201515` text, Degular Display for hero (0.90 line-height) + Inter for UI + GT Alpina for editorial accents, Zapier Orange `#ff4f00` singular CTA accent, warm sand `#c5c0b1` borders replacing shadows, inset box-shadow tab underlines, 20/24 generous CTA button padding, uppercase 0.5px-tracked section labels.

**Reject** — pure white background, pure black text, box-shadow elevation, scattered orange decoration, cool gray borders, pill (9999px) primary buttons, GT Alpina on functional UI, positive tracking on GT Alpina, tight padding on large CTAs.
