---
version: alpha
name: Mistral AI
description: |
  Mistral AI's interface is a sun-drenched landscape rendered as a website — warm, bold, unapologetically European, trading the typical blue-screen AI aesthetic for golden amber, burnt orange, and the feeling of late-afternoon light in southern France. Surfaces glow: backgrounds fade from pale ivory (`#fffaeb`) through cream (`#fff0c2`) toward the brand's signature **Mistral Orange** (`#fa520f`). Type runs **Arial** (a custom face with Arial fallback) at billboard scale — display sizes reach **82px** with aggressive negative tracking (-2.05px) and ultra-tight line-heights (0.95–1.00). The system uses **single-weight 400 throughout** — even at 82px — so hierarchy comes from size and color rather than weight. Border-radius sits near zero, creating a tension between soft warm color and hard architectural geometry. The signature shadow is amber-tinted, a five-layer cascade (`rgba(127, 99, 21, ...)`) that produces a "golden hour" lighting effect unique among AI brands. The Mistral block identity — a gradient row from bright yellow (`#ffd900`) through amber (`#ffa110`) to burnt orange (`#fa520f`) — is the brand's visual DNA, recognizable at any scale. Mood — warm, declarative, sun-drenched, architectural.

colors:
  primary: "#fa520f"
  primary-flame: "#fb6424"
  primary-block: "#ff8105"
  ink: "#1f1f1f"
  body: "#3d3d3d"
  body-soft: "#5c5c5c"
  canvas: "#fffaeb"
  surface-cream: "#fff0c2"
  surface: "#ffffff"
  surface-dark: "#1f1f1f"
  hairline: "#e5e5ea"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  sunshine-900: "#ff8a00"
  sunshine-700: "#ffa110"
  sunshine-500: "#ffb83e"
  sunshine-300: "#ffd06a"
  block-gold: "#ffe295"
  bright-yellow: "#ffd900"

typography:
  display-hero:
    fontFamily: "Arial, ui-sans-serif, system-ui, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    fontSize: 82px
    fontWeight: 400
    lineHeight: 1.00
    letterSpacing: -2.05px
  section-heading:
    fontFamily: "Arial, ui-sans-serif, system-ui, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    fontSize: 56px
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: 0
  sub-heading-lg:
    fontFamily: "Arial, ui-sans-serif, system-ui, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: 0
  sub-heading:
    fontFamily: "Arial, ui-sans-serif, system-ui, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: 0
  card-title:
    fontFamily: "Arial, ui-sans-serif, system-ui, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    fontSize: 30px
    fontWeight: 400
    lineHeight: 1.20
    letterSpacing: 0
  feature-title:
    fontFamily: "Arial, ui-sans-serif, system-ui, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0
  body:
    fontFamily: "Arial, ui-sans-serif, system-ui, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  button:
    fontFamily: "Arial, ui-sans-serif, system-ui, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  caption:
    fontFamily: "Arial, ui-sans-serif, system-ui, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0

rounded:
  none: 0px
  xs: 2px
  sm: 4px
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
  "8": 48px
  "9": 64px
  "10": 80px
  section: 80px
  section-lg: 100px

components:
  button-primary:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 12px
  button-cream:
    backgroundColor: "{colors.surface-cream}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 12px
  button-ghost:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 12px
  button-text:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 8px 0px
  card-ivory:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 32px
  card-cream:
    backgroundColor: "{colors.surface-cream}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 32px
  card-white:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 32px
  block-yellow:
    backgroundColor: "{colors.bright-yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  block-amber:
    backgroundColor: "{colors.sunshine-700}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  block-orange:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    padding: 10px 12px
---

## Overview

Mistral AI's marketing site commits completely to a warm color temperature — every surface, every shadow, every text color sits on the amber-orange axis. The brand's identity is communicated through the **Mistral block gradient** (yellow → gold → amber → orange → flame → burnt orange) and through massive single-weight typography (Arial 400 even at 82px). Sharp architectural corners contrast with the warmth of the colors, creating tension. The five-layer **golden shadow cascade** (amber-tinted blacks, originally `rgba(127, 99, 21, ...)` at 12% / 10% / 6% / etc.) makes elevated surfaces look bathed in late-afternoon sunlight.

Mood — warm, declarative, sun-drenched, architectural.

## Colors

The palette is **exclusively warm**:

- **Mistral Orange** (`#fa520f`): brand anchor — primary brand color, the highest-signal moments
- **Mistral Flame** (`#fb6424`): warmer-lighter variant for secondary brand moments and hover
- **Block Orange** (`#ff8105`): pure orange in the gradient block
- **Sunshine 900 → 700 → 500 → 300** (`#ff8a00` / `#ffa110` / `#ffb83e` / `#ffd06a`): the descending amber scale
- **Block Gold** (`#ffe295`) and **Bright Yellow** (`#ffd900`): pale gold and the brightest gradient anchor
- **Warm Ivory** (`#fffaeb`): the foundational page background — never pure white
- **Cream** (`#fff0c2`): primary warm surface and secondary button background
- **Pure White** (`#ffffff`): used only for maximum-contrast moments
- **Mistral Black** (`#1f1f1f`): primary text — warmer than `#000`, never pure black
- **Body** (`#3d3d3d`) and **Body Soft** (`#5c5c5c`): warm-leaning gray for secondary text (originally expressed as `hsl(0, 0%, 24%)` — flattened to opaque hex)

Originally `#e5e5ea` hairline is one of the few cool-tinted elements, used only for input borders.

## Typography

**Arial 400 throughout** (a custom face with Arial as fallback) — even at 82px. This is the system's most distinctive choice: instead of weight variation (300 → 700), Mistral uses **size and color alone** to carry hierarchy.

- **Display 82px** with **-2.05px tracking** and 1.00 line-height — billboard scale
- **Section 56px** at 0.95 line-height (ultra-tight, ascenders nearly touch)
- **Sub 48px / 32px / 30px** with progressively relaxing line-height
- **Body 16px** at 1.50 line-height for readable reading

**Uppercase as emphasis**: `text-transform: uppercase` on button labels and section markers gives a European-signage formal quality without changing weight.

## Layout

8px base. Section padding is generous (80–100px) — the warm void itself feels luxurious because the backgrounds are tinted ivory rather than pure white. Photography (winding roads through golden hills, golden landscapes) often serves double duty as content and decorative whitespace.

Max container width approximately 1280px, centered. Hero is full-width with massive typography overlaying warm backgrounds. Card grids run 2–3 columns on desktop.

## Elevation & Depth

A single, extraordinarily complex shadow defines the system: the **five-layer golden cascade** (originally `rgba(127, 99, 21, 0.12) -8px 16px 39px, rgba(127, 99, 21, 0.1) -33px 64px 72px, rgba(127, 99, 21, 0.06) -73px 144px 97px, ...`).

| Level | Treatment | Use |
|---|---|---|
| Flat (0) | No shadow | Page backgrounds, text blocks |
| Golden Float (1) | Five-layer amber-tinted shadow cascade — `rgba(127,99,21,...)` at 12%→0% opacity, 16px → 400px offset | Feature cards, product showcases, elevated content |

The amber-tinted black creates a distinctive "afternoon sunlight" lighting effect that is the most recognizable shadow system in any major AI brand. Cool-toned shadows (`rgba(0, 0, 0, ...)`) are explicitly off-system.

## Shapes

**Near-zero border-radius** is the dominant treatment. Sharp architectural corners contrast with the warmth of the colors. The xs (2px) and sm (4px) tokens are reserved for inputs and very small accent moments. Pill (9999px) is available but rarely used.

The block identity (yellow → amber → orange) uses **0px radius** — the gradient blocks are perfect rectangles butted edge-to-edge.

## Components

**Button primary (Dark Solid)**: `#1f1f1f` Mistral Black fill, white text, 12px padding all sides, **0px radius**. The primary action button — dark on warm.

**Button cream**: `#fff0c2` cream fill, ink text, 12px padding, 0px radius. The warm inviting secondary CTA.

**Button ghost**: transparent / canvas with ink text. For tertiary actions (originally with a slight dark overlay `oklab(0,0,0/0.1)` at 0.4 opacity — flattened here as ghost-on-canvas).

**Button text/underline**: minimal text-link style with 8px top padding, used for tertiary nav.

**Card ivory / cream / white**: any of the three warm surfaces, **0px radius**, 32px padding, with the five-layer golden shadow cascade applied for elevation. The shadow is what creates the "floating in golden light" effect — without it, cards look flat and lose their identity.

**Mistral block identity**: a row of perfect-rectangle blocks (`block-yellow` → `block-amber` → `block-orange`) butted edge-to-edge with no gaps. The visual DNA — recognizable at any size.

**Input**: white surface with cool-toned `#e5e5ea` border (the sole cool-tinted element), 2px radius, accent ring on focus.

## Do's and Don'ts

**Do**

- Use the warm spectrum exclusively: ivory, cream, amber, gold, orange
- Keep display typography at 82px+ with -2.05px letter-spacing for hero
- Apply weight 400 throughout — let size and color carry hierarchy
- Use the Mistral block gradient (yellow → amber → orange) for brand moments
- Apply the five-layer golden shadow cascade — amber-tinted, never gray
- Use Mistral Black (`#1f1f1f`) for text — never pure `#000000`
- Keep architectural sharp corners — near-zero border-radius
- Apply uppercase on button labels for European formality
- Use warm landscape photography with golden color grading

**Don't**

- Don't introduce cool colors (blue, green, purple) — palette is exclusively warm
- Don't use bold (700+) weight — 400 is the only weight
- Don't round corners — the sharp geometry is intentional
- Don't use cool-toned shadows — shadows must carry amber warmth
- Don't use pure white as page background — always warm-tinted (`#fffaeb` minimum)
- Don't reduce hero text below 48px on desktop — the billboard scale is core
- Don't use generic gray for text — even neutrals lean warm

## Agent Prompt Guide

**Bias toward** — Arial weight 400 across all sizes, billboard 82px hero with -2.05px tracking, warm ivory canvas (never pure white), five-layer amber-tinted shadow cascade, sharp 0px corners, the Mistral block gradient (yellow → amber → orange), uppercase button labels, warm Mistral Black text.

**Reject** — cool color hues, bold weights (600+), rounded corners, gray/cool shadows, pure white backgrounds, cool gray text, gradients outside the warm spectrum.
