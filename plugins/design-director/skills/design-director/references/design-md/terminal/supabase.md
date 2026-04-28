---
version: alpha
name: Supabase
description: |
  Supabase's website is a dark-mode-native developer platform that channels the aesthetic of a premium code editor — deep black backgrounds (`#0f0f0f`, `#171717`) with emerald green accents (`#3ecf8e`, `#00c573`) that reference the brand's open-source PostgreSQL identity. Born in a terminal window and evolved into a sophisticated marketing surface without losing its developer soul. The typography is built on Circular — a geometric sans-serif with rounded terminals that softens the technical edge. At 72px with 1.00 line-height, hero text is compressed to its absolute minimum vertical space, creating dense, impactful statements that waste nothing. Source Code Pro appears sparingly for uppercase technical labels with 1.2px letter-spacing — the developer-console markers that connect the marketing site to the product. The original color tokens use HSL with alpha channels (Radix primitives — slate, purple, violet, indigo, yellow, tomato, orange) to enable nuanced translucent layering; this file flattens to 6-digit hex but the depth philosophy still depends on a sophisticated border hierarchy (`#242424` → `#2e2e2e` → `#363636` → `#393939`) rather than shadows. Pill (9999px) for primary CTAs, 6px for secondary, 8–16px for cards. Mood — dark-native, terminal-precise, emerald-signaling, dense.

colors:
  primary: "#0f0f0f"
  primary-hover: "#0a0a0a"
  ink: "#fafafa"
  body: "#fafafa"
  muted: "#898989"
  muted-strong: "#b4b4b4"
  disabled: "#4d4d4d"
  canvas: "#171717"
  surface: "#171717"
  surface-elevated: "#242424"
  hairline: "#2e2e2e"
  hairline-strong: "#363636"
  hairline-bright: "#393939"
  hairline-charcoal: "#434343"
  on-primary: "#fafafa"
  brand-green: "#3ecf8e"
  brand-link: "#00c573"
  near-white: "#efefef"

typography:
  display-hero:
    fontFamily: "Circular, custom-font, 'Helvetica Neue', Helvetica, Arial"
    fontSize: 72px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0
  heading-section:
    fontFamily: "Circular, custom-font, 'Helvetica Neue', Helvetica, Arial"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0
  heading-card:
    fontFamily: "Circular, custom-font, 'Helvetica Neue', Helvetica, Arial"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: -0.16px
  sub-heading:
    fontFamily: "Circular, custom-font, 'Helvetica Neue', Helvetica, Arial"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.56
    letterSpacing: 0
  body:
    fontFamily: "Circular, custom-font, 'Helvetica Neue', Helvetica, Arial"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  nav-link:
    fontFamily: "Circular, custom-font, 'Helvetica Neue', Helvetica, Arial"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    letterSpacing: 0
  button:
    fontFamily: "Circular, custom-font, 'Helvetica Neue', Helvetica, Arial"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.14
    letterSpacing: 0
  caption:
    fontFamily: "Circular, custom-font, 'Helvetica Neue', Helvetica, Arial"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  small:
    fontFamily: "Circular, custom-font, 'Helvetica Neue', Helvetica, Arial"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0
  mono-label:
    fontFamily: "'Source Code Pro', 'Office Code Pro', Menlo, monospace"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 1.2px

rounded:
  none: 0px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px

spacing:
  "0": 0px
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  "3xl": 48px
  section: 90px
  section-lg: 128px

components:
  button-primary-pill:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 8px 32px
  button-secondary-pill:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 8px 32px
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 8px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.xl}"
    padding: 24px
  card-compact:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 16px
  tab-pill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 6px 16px
---

## Overview

Supabase is dark-mode-native, born in a terminal and refined into a sophisticated marketing surface. The black canvas (`#0f0f0f` button / `#171717` page) is paired with emerald green accents (`#3ecf8e` brand, `#00c573` link) that mark Supabase identity without saturating the interface. Circular's geometric sans-serif with rounded terminals warms the technical edge, while Source Code Pro in uppercase carries the developer-console label voice.

Mood — dark-native, terminal-precise, emerald-signaling, dense.

## Colors

The neutral scale is meticulous: **Near Black** `#0f0f0f` (deepest button), **Dark** `#171717` (page), **Dark Border** `#242424` (HR), **Border Dark** `#2e2e2e` (cards), **Mid Border** `#363636` (button), **Border Light** `#393939` (secondary), **Charcoal** `#434343` (tertiary), **Dark Gray** `#4d4d4d` (heavy text), **Mid Gray** `#898989` (muted), **Light Gray** `#b4b4b4` (secondary link), **Near White** `#efefef` (light border), **Off White** `#fafafa` (primary text).

**Supabase Green** (`#3ecf8e`) is the brand identity marker — appears in the logo, accent borders, and rare highlights. **Green Link** (`#00c573`) is the interactive variant for hyperlinks. The original system layers a 30%-opacity green border (`rgba(62, 207, 142, 0.3)`) for elevated brand emphasis — implement that rgba directly when you need the elevated accent state.

The original tokens lean heavily on Radix HSL primitives (slate / purple / violet / crimson / indigo / yellow / tomato / orange) with alpha channels for translucent layering. These collapse to flat hex here for lint compliance, but the depth philosophy depends on the sophisticated border hierarchy below, not on shadows.

## Typography

**Circular** at weight 400 carries nearly everything. Weight 500 appears only on navigation links and button labels. There is no bold (700) in the system. Hierarchy is achieved through size, not weight.

The defining typographic gesture is **1.00 hero line-height**: 72px at zero leading, creating text that feels like a terminal command — dense, efficient, no wasted vertical space. Card titles add a subtle -0.16px letter-spacing for differentiation from body text.

**Source Code Pro** at 12px / uppercase / 1.2px letter-spacing is the "developer console" voice — used sparingly for technical labels that ritualize technical context.

Circular's rounded terminals create warmth in what could otherwise be a cold technical interface — the font is the humanizing element.

## Layout

8px base scale (1, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 90, 96, 128px). Notable large jumps from 48 → 90 → 96 → 128 for major section spacing — cinematic pacing where each section is its own scene in the dark void.

Within sections, content is dense (16–24px gaps), creating concentrated information clusters. Border-defined separation replaces whitespace-and-shadow patterns: thin borders on dark backgrounds separate by line, not gap.

## Elevation & Depth

Supabase deliberately avoids shadows — they're nearly invisible on dark backgrounds. Depth comes from a sophisticated **border hierarchy**.

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow, border `#2e2e2e` | Default, most surfaces |
| Subtle border (Level 1) | Border `#363636` or `#393939` | Interactive elements, hover |
| Focus (Level 2) | `rgba(0, 0, 0, 0.1) 0px 4px 12px` | Focus states only |
| Green accent (Level 3) | Border `rgba(62, 207, 142, 0.3)` | Brand-highlighted elements |

The green accent border at 30% opacity is the "elevated" state — the brand color itself becomes the depth signal.

## Shapes

Radius scale: 6px (ghost buttons, small) → 8px (cards, containers) → 11–12px (mid panels) → 16px (feature cards) → 9999px (pill — primary buttons, tab indicators). Pill exclusively for primary actions; rectangular 6–16px for everything else.

## Components

**Primary pill button**: `#0f0f0f` fill, `#fafafa` text, 1px solid `#fafafa` border, full pill, 8/32 padding — the "Start your project" CTA.

**Secondary pill button**: same fill but with a `#2e2e2e` (dark) border at 0.8 opacity — sits beside primary.

**Ghost button**: transparent fill, white text, 6px radius, transparent border — tertiary actions.

**Card**: `#171717` fill, 1px solid `#2e2e2e` or `#363636` border, 8–16px radius, no shadow, 16–24px internal padding.

**Tab pill**: full pill, dark fill, lighter surface or green accent on active state.

## Do's and Don'ts

**Do**
- Use near-black (`#0f0f0f`, `#171717`) — depth comes from gray border hierarchy, not shadows
- Apply Supabase green (`#3ecf8e`, `#00c573`) sparingly — identity marker, not decoration
- Use Circular weight 400 for nearly everything — 500 only for buttons and nav
- Set hero text to 1.00 line-height — zero leading is the typographic signature
- Build depth through border color differences (`#242424` → `#2e2e2e` → `#363636`)
- Use pill (9999px) exclusively for primary CTAs and tabs
- Layer HSL/alpha colors for translucent overlays (use rgba directly in implementation)
- Apply Source Code Pro uppercase 1.2px-tracked labels for developer-context markers

**Don't**
- Add box-shadows — they're invisible on dark and break the border-defined system
- Use bold (700) text weight — the system is 400 and 500 only
- Apply green to backgrounds or large surfaces — borders, links, and small accents only
- Use warm colors as primary design elements — they exist as semantic state tokens only
- Increase hero line-height above 1.00 — the density is intentional
- Use large radius (16px+) on buttons — pill or 6px small only, nothing in between
- Lighten the canvas above `#171717` for primary surfaces — the darkness is structural
- Forget translucent borders — `rgba` borders are the layering mechanism

## Agent Prompt Guide

**Bias toward** — `#0f0f0f`/`#171717` dark surfaces, Circular at weight 400 (500 only buttons/nav), 1.00 hero line-height, Supabase green as identity marker (logo / link / accent border), border-hierarchy depth (`#242424` → `#2e2e2e` → `#363636` → `#393939`), pill (9999px) for primary CTAs, 6–16px rectangular for cards, Source Code Pro 12px uppercase 1.2px-tracked labels, 90–128px section spacing.

**Reject** — box-shadows on dark, bold (700) weight, green as surface fill, hero line-height above 1.00, large radii (16px+) on buttons, lightening the canvas above `#171717`, warm neutrals as decorative chrome.
