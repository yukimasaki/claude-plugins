---
version: alpha
name: Mintlify
description: |
  Mintlify's website is documentation-as-product design — a white, airy, information-rich surface that treats clarity as its highest aesthetic value. The page opens with luminous white (`#ffffff`) canvas, near-black ink (`#0d0d0d`), and a signature **brand green** (`#18E299`) that signals freshness and intelligence without dominating. Atmospheric green-to-white gradient washes behind the hero create a sense of ethereal documentation that floats above the noise. Below that, the page settles into a disciplined alternation of white sections separated by ultra-subtle 5%-opacity borders (`rgba(0,0,0,0.05)`). Type runs **Inter** with tight negative tracking at display sizes (-0.8px to -1.28px) and **Geist Mono** uppercase for technical labels — terminal voice inside the marketing page. Buttons are **full-pill** (9999px radius) — Mintlify's signature shape — paired with cards using **16–24px** generous radii. Depth is almost entirely border-driven; shadows when they appear are atmospheric whispers (`rgba(0,0,0,0.03) 0px 2px 4px`). The system is paper-like and quiet, calibrated for fast scanning by developers. Mood — airy, documentation-grade, fresh, paper-quiet.

colors:
  primary: "#0d0d0d"
  primary-hover: "#000000"
  brand-green: "#18E299"
  brand-green-light: "#d4fae8"
  brand-green-deep: "#0fa76e"
  ink: "#0d0d0d"
  body: "#333333"
  muted: "#666666"
  placeholder: "#888888"
  hairline: "#e5e5e5"
  surface-soft: "#f5f5f5"
  surface-tint: "#fafafa"
  canvas: "#ffffff"
  surface: "#ffffff"
  on-primary: "#ffffff"
  on-brand: "#0d0d0d"
  link: "#0d0d0d"
  link-hover: "#18E299"
  focus: "#18E299"
  warning: "#c37d0d"
  info: "#3772cf"
  error: "#d45656"

typography:
  display-hero:
    fontFamily: "Inter, 'Inter Fallback', system-ui, -apple-system, sans-serif"
    fontSize: 64px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -1.28px
  section-heading:
    fontFamily: "Inter, 'Inter Fallback', system-ui, -apple-system, sans-serif"
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.10
    letterSpacing: -0.8px
  sub-heading:
    fontFamily: "Inter, 'Inter Fallback', system-ui, -apple-system, sans-serif"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.30
    letterSpacing: -0.24px
  card-title:
    fontFamily: "Inter, 'Inter Fallback', system-ui, -apple-system, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.30
    letterSpacing: -0.2px
  body-lg:
    fontFamily: "Inter, 'Inter Fallback', system-ui, -apple-system, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  body:
    fontFamily: "Inter, 'Inter Fallback', system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  body-medium:
    fontFamily: "Inter, 'Inter Fallback', system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.50
    letterSpacing: 0
  button:
    fontFamily: "Inter, 'Inter Fallback', system-ui, -apple-system, sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.50
    letterSpacing: 0
  link:
    fontFamily: "Inter, 'Inter Fallback', system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.50
    letterSpacing: 0
  caption:
    fontFamily: "Inter, 'Inter Fallback', system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  label-uppercase:
    fontFamily: "Inter, 'Inter Fallback', system-ui, -apple-system, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.50
    letterSpacing: 0.65px
  small:
    fontFamily: "Inter, 'Inter Fallback', system-ui, -apple-system, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: -0.26px
  mono-code:
    fontFamily: "'Geist Mono', 'Geist Mono Fallback', ui-monospace, SFMono-Regular, monospace"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.50
    letterSpacing: 0.6px
  mono-badge:
    fontFamily: "'Geist Mono', 'Geist Mono Fallback', ui-monospace, SFMono-Regular, monospace"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.50
    letterSpacing: 0.6px
  mono-micro:
    fontFamily: "'Geist Mono', 'Geist Mono Fallback', ui-monospace, SFMono-Regular, monospace"
    fontSize: 10px
    fontWeight: 500
    lineHeight: 1.50
    letterSpacing: 0

rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  full: 9999px
  pill: 9999px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 12px
  "4": 16px
  "5": 24px
  "6": 32px
  "7": 48px
  "8": 64px
  "9": 96px
  section: 64px
  section-lg: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 8px 24px
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 4px 12px
  button-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 5px 6px
  button-brand:
    backgroundColor: "{colors.brand-green}"
    textColor: "{colors.on-brand}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 8px 24px
  card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 24px
  card-featured:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-trust:
    backgroundColor: "{colors.surface-tint}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    padding: 24px
  input-email:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    padding: 0px 12px
    height: 40px
  badge-pill:
    backgroundColor: "{colors.brand-green-light}"
    textColor: "{colors.brand-green-deep}"
    typography: "{typography.label-uppercase}"
    rounded: "{rounded.full}"
    padding: 4px 12px
---

## Overview

Mintlify's marketing surface is calm, confident, engineered for legibility — every pixel whispers "we care about your developer experience." White canvas, near-black ink, brand green used sparingly, ultra-subtle 5%-opacity borders for separation. The atmospheric gradient hero (cloud-like green-to-white wash) is the system's only decorative gesture; everything below is disciplined white sections separated by hairline borders.

Mood — airy, documentation-grade, fresh, paper-quiet.

## Colors

The palette is **near-monochromatic + brand green**:

- **Ink** (`#0d0d0d`): primary text, headings, primary CTA — not pure black for micro-softness
- **Brand Green** (`#18E299`): the signature accent — CTAs, links on hover, focus rings, brand identity
- **Brand Green Light** (`#d4fae8`) and **Brand Green Deep** (`#0fa76e`): tinted surface and text for badges
- **Body** (`#333333`) and **Muted** (`#666666`): secondary and tertiary text
- **Hairline** (`#e5e5e5`): explicit border tone (originally `rgba(0,0,0,0.05)` / `0.08` for the ultra-subtle borders that drive the system's separation)
- **Surface Soft** (`#f5f5f5`) and **Surface Tint** (`#fafafa`): barely-there secondary surfaces for trust cards / hover states

Semantic accents (warning amber `#c37d0d`, info blue `#3772cf`, error red `#d45656`) appear in twoslash code annotations only — never on hero CTAs.

The signature 5%-opacity borders (`rgba(0,0,0,0.05)`) are the **primary separation mechanism** — translated as `#e5e5e5` here for hex compatibility. The 8%-opacity variant (`rgba(0,0,0,0.08)`) is used for interactive borders on inputs and secondary buttons.

## Typography

**Inter** carries everything except code, where **Geist Mono** takes over. Two-font discipline is strict: no Inter in code blocks, no Mono in body copy.

**Tight tracking at display** (-1.28px at 64px, -0.8px at 40px, -0.24px at 24px) creates compressed documentation-style headlines. **Body** at 16–18px / weight 400 / 1.50 line-height provides generous reading lanes. **Three weights only**: 400 (body), 500 (UI / nav), 600 (headings) — no bold (700).

**Uppercase labels** (Inter `text-transform: uppercase` with positive 0.65px tracking, or Geist Mono with 0.6px tracking) signal section markers and technical tags — a clear visual delimiter between human and machine voices.

## Layout

8px base. Section padding lands at 48–96px vertical (96px desktop hero, 48px mobile). Cards use 24–32px internal padding. Component gaps sit at 8–16px.

Max content width approximately 1200px, centered. Hero is centered single-column with 96px+ top padding. Feature sections use 2–3 column CSS Grid. Section-internal density is low — 1–2 messages per section, never densely packed.

The whitespace philosophy is **documentation-grade breathing room** — Mintlify sells documentation, so the marketing page itself demonstrates reading comfort.

## Elevation & Depth

Almost entirely **border-driven**, not shadow-driven. Five-tier system:

- **Level 0 (Flat)**: no shadow, no border — body text blocks
- **Level 1 (Subtle border)**: `1px solid rgba(0,0,0,0.05)` — standard cards, dividers
- **Level 1b (Medium border)**: `1px solid rgba(0,0,0,0.08)` — interactive elements, input borders
- **Level 2 (Ambient shadow)**: `rgba(0,0,0,0.03) 0px 2px 4px` — cards with subtle lift
- **Level 2b (Button shadow)**: `rgba(0,0,0,0.06) 0px 1px 2px` — button micro-depth
- **Focus**: `1px solid #18E299` outline — brand green ring on focused inputs

When shadows appear, they are atmospheric whispers (0.03 opacity, 2px blur) — paper-like rather than lifted.

The **hero atmospheric gradient** (cloud-like green-to-white wash) is the only decorative depth gesture. The rest of the page stays white-on-white with separation through borders and whitespace alone.

## Shapes

- **xs (4px)**: inline code, small tags, tooltips
- **sm (8px)**: nav buttons, transparent buttons, small containers
- **md (16px)**: cards, content containers, image wrappers
- **lg (24px)**: featured cards, hero containers, section panels
- **full / pill (9999px)**: **buttons, inputs, badges** — Mintlify's signature shape

The full-pill button radius is the system's most identifiable visual signature. Cards never go pill — 16–24px is the cap.

## Components

**Button primary**: `#0d0d0d` near-black fill, white text, **9999px full-pill radius**, 8×24 padding, weight 500. Hover dims to opacity 0.9.

**Button secondary / ghost**: white fill, ink text, 1px solid `rgba(0,0,0,0.08)` border, 9999px radius, 4.5×12 padding. Used for "Request Demo" / "View Docs" types.

**Button nav**: transparent or `rgba(0,0,0,0.05)` border, ink text, 8px radius, 5×6 padding. The exception to the pill rule — nav items use rounded rectangles.

**Button brand accent**: `#18E299` fill, ink text, 9999px radius. Reserved for special promotional CTAs only.

**Card standard**: white fill, 1px solid `rgba(0,0,0,0.05)` border, **16px radius**, 24px padding, optional ambient shadow.

**Card featured**: white fill, **24px radius**, 32px padding — for marquee marketing modules.

**Card trust** (logo grid): `#fafafa` fill, 16px radius — used for the "loved by your favorite companies" section.

**Input email**: 9999px full-pill radius matching buttons, 1px solid `rgba(0,0,0,0.08)` border, focus ring in brand green.

**Badge pill**: `#d4fae8` light-green fill, `#0fa76e` deep-green text, 9999px radius, 4×12 padding, uppercase Inter 13px / weight 500.

## Do's and Don'ts

**Do**

- Use full-pill (9999px) radius for buttons and inputs — Mintlify's signature shape
- Keep borders at 5% opacity (`rgba(0,0,0,0.05)`) — stronger borders break the airy feeling
- Apply tight negative tracking on display (-1.28px at 64px, -0.8px at 40px, -0.24px at 24px)
- Use only three weights: 400 (read), 500 (interact), 600 (announce)
- Reserve brand green (`#18E299`) for CTAs, hover states, and focus rings — never decorative fills
- Use Geist Mono uppercase for technical labels, Inter for everything else
- Keep section padding generous (64–96px desktop, 48px mobile)
- Stay all-white — no gray background sections, separation through borders + whitespace

**Don't**

- Don't make button corners square or 8px — pill radius is mandatory
- Don't use solid dark borders — 5% opacity is the discipline
- Don't apply brand green decoratively — it's interactive-only
- Don't use weight 700 — the scale stops at 600
- Don't use positive letter-spacing on display Inter — only on uppercase labels
- Don't introduce gray section backgrounds — white throughout
- Don't add heavy shadows — depth is whisper-level only

## Agent Prompt Guide

**Bias toward** — Inter for everything (Geist Mono only for code/labels), full-pill buttons, 5%-opacity borders, three-weight discipline (400/500/600), brand green sparingly, atmospheric gradient hero, white-on-white sectioning, generous documentation-grade whitespace.

**Reject** — square button corners, decorative brand green fills, weight 700, gray section backgrounds, heavy shadows, positive letter-spacing on Inter display, mixed font roles in code blocks.
