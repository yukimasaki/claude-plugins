---
version: alpha
name: Superhuman
description: |
  Superhuman's website feels like opening a luxury envelope — predominantly white, immaculately clean, with a single dramatic gesture of color that commands attention. The hero is a cinematic **deep purple gradient** (`#1b1938` "Mysteria") that evokes the moment before dawn; below this dramatic entrance, the rest of the site is almost entirely white canvas with **Charcoal Ink (`#292827`)** text. The typography is the true signature: **Super Sans VF**, a custom variable font with **non-standard weight stops (460, 540, 600, 700)** that sit between traditional categories. **Weight 460** — slightly heavier than regular but lighter than medium — is the workhorse, creating text more confident than 400 but never aggressive. Display headlines run at **0.96 line-height** — extremely tight, compressing lines into dense architectural blocks — while body sits at a generous 1.50. The CTA voice is **Warm Cream (`#e9e5dd`)** instead of bright/saturated colors — understated luxury rather than aggressive call-to-action. **Lavender Glow (`#cbb7fb`)** is the singular accent — a soft approachable purple. The radius system uses **only 8px and 16px** — no micro-rounding, no pill shapes — radical simplicity. Mood — luxurious, cinematic, restrained, dawn-purple.

colors:
  primary: "#e9e5dd"
  primary-active: "#dad4c8"
  hero-gradient-start: "#1b1938"
  ink: "#292827"
  body: "#3a3937"
  muted: "#5d5b59"
  accent-lavender: "#cbb7fb"
  accent-link: "#714cb6"
  canvas: "#ffffff"
  surface: "#ffffff"
  surface-cream: "#e9e5dd"
  surface-dark: "#1b1938"
  surface-dark-elevated: "#272441"
  hairline: "#dcd7d3"
  hairline-dark: "#292827"
  hairline-overlay: "#33334d"
  on-primary: "#292827"
  on-dark: "#ffffff"
  on-dark-soft: "#cccccc"

typography:
  display-hero:
    fontFamily: "'Super Sans VF', system-ui, -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
    fontSize: 64px
    fontWeight: 540
    lineHeight: 0.96
    letterSpacing: 0
  section-display:
    fontFamily: "'Super Sans VF', system-ui, -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
    fontSize: 48px
    fontWeight: 460
    lineHeight: 0.96
    letterSpacing: -1.32px
  section-heading:
    fontFamily: "'Super Sans VF', system-ui, -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
    fontSize: 48px
    fontWeight: 460
    lineHeight: 0.96
    letterSpacing: 0
  feature-title:
    fontFamily: "'Super Sans VF', system-ui, -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
    fontSize: 28px
    fontWeight: 540
    lineHeight: 1.14
    letterSpacing: -0.63px
  sub-heading:
    fontFamily: "'Super Sans VF', system-ui, -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
    fontSize: 26px
    fontWeight: 460
    lineHeight: 1.30
    letterSpacing: 0
  card-heading:
    fontFamily: "'Super Sans VF', system-ui, -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
    fontSize: 22px
    fontWeight: 460
    lineHeight: 0.76
    letterSpacing: -0.315px
  body-heading:
    fontFamily: "'Super Sans VF', system-ui, -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
    fontSize: 20px
    fontWeight: 460
    lineHeight: 1.20
    letterSpacing: 0
  emphasis-body:
    fontFamily: "'Super Sans VF', system-ui, -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
    fontSize: 18px
    fontWeight: 540
    lineHeight: 1.50
    letterSpacing: -0.135px
  body:
    fontFamily: "'Super Sans VF', system-ui, -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
    fontSize: 16px
    fontWeight: 460
    lineHeight: 1.50
    letterSpacing: 0
  button-bold:
    fontFamily: "'Super Sans VF', system-ui, -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.00
    letterSpacing: 0
  button-semi:
    fontFamily: "'Super Sans VF', system-ui, -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.00
    letterSpacing: 0
  nav-link:
    fontFamily: "'Super Sans VF', system-ui, -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
    fontSize: 16px
    fontWeight: 460
    lineHeight: 1.20
    letterSpacing: 0
  caption:
    fontFamily: "'Super Sans VF', system-ui, -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: -0.315px
  caption-body:
    fontFamily: "'Super Sans VF', system-ui, -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
    fontSize: 14px
    fontWeight: 460
    lineHeight: 1.50
    letterSpacing: 0
  micro-label:
    fontFamily: "'Super Sans VF', system-ui, -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.50
    letterSpacing: 0

rounded:
  none: 0px
  sm: 8px
  lg: 16px

spacing:
  "0": 0px
  "1": 2px
  "2": 4px
  "3": 6px
  "4": 8px
  "5": 12px
  "6": 16px
  "7": 20px
  "8": 24px
  "9": 28px
  "10": 32px
  "11": 40px
  "12": 48px
  "13": 56px
  section: 64px
  section-lg: 80px

components:
  button-cream:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-bold}"
    rounded: "{rounded.sm}"
    padding: 12px 20px
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-bold}"
    rounded: "{rounded.sm}"
    padding: 12px 20px
  button-ghost:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.accent-link}"
    typography: "{typography.button-semi}"
    rounded: "{rounded.sm}"
    padding: 8px 16px
  card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  card-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 32px
  badge-lavender:
    backgroundColor: "{colors.accent-lavender}"
    textColor: "{colors.ink}"
    typography: "{typography.micro-label}"
    rounded: "{rounded.sm}"
    padding: 4px 10px
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 64px
---

## Overview

Superhuman's marketing surface is luxury productivity — a brand that markets itself like a luxury brand that happens to build email software. The hero opens with a cinematic **Mysteria Purple gradient** (`#1b1938`); below the gradient, everything is white with charcoal text. The CTA isn't a saturated blue or green but **Warm Cream (`#e9e5dd`)** — the cream pops dramatically against the dark hero, then sits quietly on white sections.

Mood — luxurious, cinematic, restrained, dawn-purple.

## Colors

The palette is **near-monochromatic warm neutrals + lavender accent**:

- **Mysteria Purple** (`#1b1938`): the hero gradient anchor — deep purple straddling blue-purple, the darkest expression of the brand
- **Charcoal Ink** (`#292827`): primary text and headings — warm near-black with faint brown undertone
- **Warm Cream** (`#e9e5dd`): the signature button color — understated luxury, never bright/saturated
- **Parchment Border** (`#dcd7d3`): card and divider borders — warm light gray with slight pink undertone
- **Lavender Glow** (`#cbb7fb`): the singular accent — soft approachable purple for emphasis, decorative elements
- **Amethyst Link** (`#714cb6`): underlined link text — mid-range purple connecting to the brand palette
- **Translucent White** is used at 95% opacity for hero overlay text and 80% for secondary text on dark gradient backgrounds (originally `color(srgb 1 1 1 / 0.95)` and `0.8`); approximated here through `on-dark` and `on-dark-soft`

The `surface-dark-elevated` (`#272441`) is a slightly lighter dawn-purple for nested cards on the hero gradient. The `hairline-overlay` (`#33334d`) approximates the original `rgba(255,255,255,0.2)` border on hero elements.

## Typography

**Super Sans VF** is the entire system — a custom variable font with **non-standard weight stops at 460, 540, 600, 700**. The 460/540 between-weights are deliberately uncommon — slightly heavier than regular but never quite bold, creating typographic texture that feels confidently "off."

**Display compression at 0.96 line-height** is brand-defining. Headlines collapse lines nearly on top of each other, creating dense architectural blocks. Body text breathes at 1.50 line-height for comfortable reading after dense headline impact.

**Selective negative tracking**: applied surgically — -1.32px on 48px section displays, -0.63px on 28px feature titles, -0.315px on 22px card headings, **0px on body**. The larger the text, the tighter the tracking.

## Layout

8px base. Section padding sits at 48–80px vertical between major sections. Card padding is 16–32px; component gaps are 8–16px. Max width approximately 1200px centered.

The whitespace philosophy is **confident emptiness** — generous gaps signal premium positioning. Product screenshots fill space that lesser sites would fill with marketing copy.

## Elevation & Depth

Remarkably restrained. Depth comes through borders, color contrast, and product screenshots themselves rather than shadows.

| Level | Treatment | Use |
|---|---|---|
| Flat (0) | No shadow, white background | Primary canvas, most content surfaces |
| Border (1) | `1px solid #dcd7d3` (Parchment) | Card containment, section dividers |
| Dark Border (2) | `1px solid #292827` | Header elements, dark section separators |
| Glow (3) | Subtle shadow | Product screenshot containers |
| Hero Depth (4) | `rgba(255,255,255,0.2)` overlay border | Elements on the dark purple gradient |

The hero gradient creates massive depth through color shift rather than shadows — a cinematic curtain effect. There is no glassmorphism, no blur, no frosted-glass.

## Shapes

Only **two radii**: 8px and 16px — radical simplicity.

- **sm (8px)**: buttons, inline elements, small containers
- **lg (16px)**: cards, links, larger containers

No micro-rounding (2px / 4px), no pill shapes (50px+). The binary radius system is deliberate brand discipline.

## Components

**Button cream (primary)**: `#e9e5dd` Warm Cream fill, `#292827` Charcoal Ink text, **8px radius**, 12×20 padding, Super Sans VF 16px / **weight 700**. The signature CTA — warm, muted, luxurious. On the dark hero gradient the cream pops dramatically; on white sections it sits quietly.

**Button dark**: `#292827` Charcoal Ink fill, white text, 8px radius. The inverse used on light sections where cream-on-white wouldn't pop.

**Button ghost / text link**: white fill, Amethyst Link `#714cb6` text, weight 600. Used for secondary nav and inline CTAs.

**Card**: white fill, 1px solid `#dcd7d3` Parchment Border, **16px radius**, 24px padding.

**Card dark**: Mysteria Purple `#1b1938` fill, white text, 16px radius — used for hero-adjacent or premium feature surfaces.

**Badge lavender**: `#cbb7fb` Lavender Glow fill, ink text, 8px radius, 4×10 padding, 12px / weight 700. The only place the lavender accent appears.

**Nav bar**: white background on content sections, transparent over hero gradient. Super Sans VF nav links at 16px / weight 460 / 600. Cream pill CTA in the nav.

## Do's and Don'ts

**Do**

- Use Super Sans VF at weight 460 as the default — the slightly-heavier-than-regular IS the brand signature
- Keep display headlines at 0.96 line-height — the compression is intentional and powerful
- Use Warm Cream (`#e9e5dd`) for primary buttons — not white, not gray, specifically warm cream
- Limit border-radius to 8px (small) and 16px (large) — the binary system is deliberate
- Apply negative letter-spacing on headlines only (-0.63 to -1.32px) — body stays at 0
- Use Lavender Glow (`#cbb7fb`) as the only accent — no other hues
- Let product screenshots be the primary visual content — the UI sells itself
- Maintain the dramatic hero gradient as a singular gesture — the rest of the page is white

**Don't**

- Don't use conventional weights (400, 500, 600 on body) — 460 and 540 are deliberately between standard stops
- Don't add bright/saturated CTA colors — buttons are intentionally muted in cream or charcoal
- Don't introduce additional accents beyond Lavender Glow
- Don't apply shadows generously — depth comes from borders, color contrast, photography
- Don't use tight line-height on body — display is 0.96 but body is 1.50
- Don't add decorative elements, icons, or illustrations
- Don't create pill-shaped buttons — 8px radius, not pills
- Don't use pure black for text — Charcoal Ink (`#292827`) is warmer

## Agent Prompt Guide

**Bias toward** — Super Sans VF at non-standard weights (460 default, 540 emphasis, 700 buttons), 0.96 line-height on display, Warm Cream buttons, only-8-or-16 radius binary, Charcoal Ink text (never pure black), Mysteria Purple gradient as singular hero gesture, Lavender Glow as the sole accent.

**Reject** — conventional weights (400/500), bright/saturated CTAs, multiple accent colors, pill buttons, generous shadows, tight body line-height, decorative icons/illustrations, additional dark surfaces beyond the hero.
