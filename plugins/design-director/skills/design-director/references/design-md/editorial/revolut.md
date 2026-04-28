---
version: alpha
name: Revolut
description: |
  Revolut's website is fintech confidence distilled into pixels — a design system that says "your money is in capable hands" through massive typography, generous whitespace, and a disciplined neutral palette. The marketing surface is a binary of **near-black `#191c1f`** + **pure white `#ffffff`**, with a comprehensive `--rui-*` semantic token system (danger, warning, teal, blue, deep-pink, brown) reserved for the product interface — not the marketing page. The signature is **Aeonik Pro at 136px / weight 500** with billboard tracking (-2.72px) — stadium-scale fintech headlines that feel like airport signage. **Aeonik Pro 500** is the display weight throughout (no bold), creating authority through size and tracking, not weight. **Inter** handles body text at weights 400 / 600 / 700 with **positive letter-spacing (0.16–0.24px)** — airy, well-spaced reading text that contrasts with the compressed display. Buttons are **universal pills** (9999px radius) with generous padding (14×32–34) — primary dark, secondary light, outlined, and ghost-on-dark variants. The system uses **zero shadows** — depth comes entirely from dark/light section contrast and generous whitespace. Mood — confident, monumental, premium, modern-bank.

colors:
  primary: "#191c1f"
  primary-active: "#000000"
  ink: "#191c1f"
  body: "#191c1f"
  muted: "#505a63"
  muted-soft: "#8d969e"
  hairline: "#c9c9cd"
  canvas: "#ffffff"
  surface: "#ffffff"
  surface-soft: "#f4f4f4"
  on-primary: "#ffffff"
  on-dark: "#f4f4f4"
  brand-blue: "#494fdf"
  blue-action: "#4f55f1"
  blue-text: "#376cd5"
  blue-info: "#007bc2"
  danger: "#e23b4a"
  deep-pink: "#e61e49"
  warning: "#ec7e00"
  yellow: "#b09000"
  teal: "#00a87e"
  light-green: "#428619"
  green-text: "#006400"
  brown: "#936d62"
  red-text: "#8b0000"

typography:
  display-mega:
    fontFamily: "'Aeonik Pro', Arial, sans-serif"
    fontSize: 136px
    fontWeight: 500
    lineHeight: 1.00
    letterSpacing: -2.72px
  display-hero:
    fontFamily: "'Aeonik Pro', Arial, sans-serif"
    fontSize: 80px
    fontWeight: 500
    lineHeight: 1.00
    letterSpacing: -0.8px
  section-heading:
    fontFamily: "'Aeonik Pro', Arial, sans-serif"
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1.21
    letterSpacing: -0.48px
  sub-heading:
    fontFamily: "'Aeonik Pro', Arial, sans-serif"
    fontSize: 40px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: -0.4px
  card-title:
    fontFamily: "'Aeonik Pro', Arial, sans-serif"
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.19
    letterSpacing: -0.32px
  feature-title:
    fontFamily: "'Aeonik Pro', Arial, sans-serif"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0
  nav:
    fontFamily: "'Aeonik Pro', Arial, sans-serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.40
    letterSpacing: 0
  body-lg:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.56
    letterSpacing: -0.09px
  body:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0.24px
  body-semibold:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.50
    letterSpacing: 0.16px
  body-bold-link:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.50
    letterSpacing: 0.24px
  button:
    fontFamily: "'Aeonik Pro', Arial, sans-serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.40
    letterSpacing: 0

rounded:
  none: 0px
  sm: 4px
  md: 12px
  lg: 20px
  pill: 9999px
  full: 9999px

spacing:
  "0": 0px
  "1": 4px
  "2": 6px
  "3": 8px
  "4": 14px
  "5": 16px
  "6": 20px
  "7": 24px
  "8": 32px
  "9": 40px
  "10": 48px
  section: 80px
  section-lg: 120px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 32px
  button-secondary:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 34px
  button-outlined:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 32px
  button-ghost-dark:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 32px
  card-small:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 24px
  card-feature:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 32px
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav}"
    rounded: "{rounded.md}"
    height: 64px
---

## Overview

Revolut's marketing surface is the visual thesis of premium fintech: stadium-scale typography (136px / 500), universal pills (9999px radius) for every CTA, generous whitespace, and a strict near-black + white palette that lets the type do the heavy lifting. The colorful semantic tokens (`--rui-color-*`) are reserved for the product interface, not the marketing page — keeping the surface monumental and uncluttered.

Mood — confident, monumental, premium, modern-bank.

## Colors

Marketing surface is **binary near-black + white**:

- **Revolut Dark** (`#191c1f`): primary surface, button background, ink text
- **Pure White** (`#ffffff`): primary light surface
- **Light Surface** (`#f4f4f4`): secondary button background
- **Hairline** (`#c9c9cd`): originally `--rui-color-grey-tone-20`
- **Muted** (`#505a63`) and **Muted Soft** (`#8d969e`): secondary and tertiary text

The `--rui-*` semantic tokens are kept available for product UI:

- **Brand Blue** (`#494fdf`), **Action Blue** (`#4f55f1`), **Blue Text** (`#376cd5`), **Blue Info** (`#007bc2`)
- **Danger** (`#e23b4a`), **Deep Pink** (`#e61e49`), **Warning** (`#ec7e00`), **Yellow** (`#b09000`)
- **Teal** (`#00a87e`), **Light Green** (`#428619`), **Green Text** (`#006400`)
- **Brown** (`#936d62`), **Red Text** (`#8b0000`)

Marketing pages should not use these except where explicitly product-adjacent (data ticker, feature explainer with product fragments, etc.).

## Typography

**Aeonik Pro at weight 500** is the display voice — every heading from 24px through 136px sits at medium 500. Weight 700+ is forbidden on Aeonik display; authority comes from size and tracking.

**Billboard tracking**: -2.72px at 136px is extreme compression — text designed to be read at a glance like airport signage. Tracking relaxes proportionally as size shrinks (-0.8px at 80px, -0.48px at 48px, -0.32px at 32px, normal at 24px).

**Inter handles body** at 16–18px / weight 400, 600, 700 with **positive letter-spacing** (+0.16px to +0.24px). The contrast between compressed display (negative tracking) and airy body (positive tracking) is the system's typographic signature.

## Layout

8px base. Spacing scale: 4px / 6px / 8px / 14px / 16px / 20px / 24px / 32px / 40px / 48px / 80px / 88px / 120px. Section vertical rhythm sits at 80–120px — large gaps that emphasize the headlines.

The 14px primary-button vertical padding is one of Revolut's signature micro-measurements — slightly tighter than 16px, deliberately controlled.

## Elevation & Depth

**Zero shadows.** Revolut is flat by design. The only "elevation" treatment is a focus ring (`0 0 0 0.125rem` on focus). Depth comes entirely from:

| Level | Treatment | Use |
|---|---|---|
| Flat (0) | No shadow | Everything |
| Focus | `0 0 0 0.125rem` ring | Accessibility focus |

Section-to-section dark/light alternation does the elevation work — a section flips from white to `#191c1f` and the contrast itself creates depth.

## Shapes

- **sm (4px)**: micro elements
- **md (12px)**: navigation containers, small buttons (originally hamburger toggle)
- **lg (20px)**: feature cards
- **pill / full (9999px)**: **universal button radius** — every CTA is a pill

The pill button is non-negotiable on Revolut. Card radius caps at 20px; nav uses 12px. The discipline keeps the brand feeling premium-modern rather than enterprise-rigid.

## Components

**Button primary**: `#191c1f` near-black fill, white text, **9999px pill radius**, 14×32 padding, weight 500. Hover dims to opacity 0.85.

**Button secondary**: `#f4f4f4` light fill, near-black text (originally `#000000`), **9999px pill**, 14×34 padding (slightly more generous). Hover dims to 0.85.

**Button outlined**: white fill, near-black text, 2px solid `#191c1f` border, **9999px pill**, 14×32 padding. (The 2px outlined border is implicit on `button-outlined` here; cards and ghost buttons rely on text/bg contrast in the schema.)

**Button ghost-on-dark**: `rgba(244,244,244,0.1)` fill (approximated here as `#505a63` muted) with white text and 2px solid `#f4f4f4` border, **9999px pill**, 14×32 padding. Used on dark sections.

**Card small**: white fill, **12px radius**, 24px padding. **Card feature**: white fill, **20px radius**, 32px padding.

**Nav bar**: white background, ink text, **12px radius** on the container, 64px tall, Aeonik Pro 20px / weight 500 link text. Pill CTAs right-aligned.

## Do's and Don'ts

**Do**

- Use Aeonik Pro at weight 500 for ALL display headings — never bold
- Apply 9999px (pill) radius on every button — universal
- Use generous button padding (14×32–34)
- Keep the marketing palette to near-black + white
- Apply positive letter-spacing on Inter body (+0.16px to +0.24px)
- Use stadium tracking on display (-2.72px at 136px, scaling proportionally)

**Don't**

- Don't use shadows — Revolut is flat by design
- Don't use bold (700) for Aeonik Pro headings — 500 is the cap
- Don't use small buttons — generous padding is intentional
- Don't apply semantic colors (blue / teal / pink / etc.) to marketing surfaces — they're for product
- Don't break the pill discipline — every button is 9999px
- Don't use negative letter-spacing on body Inter — body runs positive tracking

## Agent Prompt Guide

**Bias toward** — Aeonik Pro display weight 500, Inter body with positive tracking, universal pill buttons (9999px), stadium-scale headlines (-2.72px at 136px), zero shadows, near-black + white binary palette, generous 14×32 button padding, dark/light section alternation for depth.

**Reject** — bold (700) Aeonik headings, tight or square button corners, drop shadows, semantic colors on marketing pages, small / compact buttons, negative letter-spacing on body Inter.
