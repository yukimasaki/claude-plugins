---
version: alpha
name: Renault
description: |
  Renault's website is a vibrant digital showroom that balances French automotive elegance with bold, forward-leaning energy — a departure from the monochromatic austerity of German or Italian luxury brands. The page opens with a full-screen hero that washes the viewport in a sweeping aurora gradient — ribbons of magenta, violet, and teal bleeding across the frame behind a dramatically lit vehicle. This chromatic expressiveness is the site's signature: the interface structure stays disciplined (NouvelR typography, black-and-white CTA framework, zero-radius buttons) while content stays alive with color. PromoCards alternate between light and dark modes, creating a chessboard-like cadence — white editorial panels with black text sit beside black `is-alternative-mode` sections with white text. The lower sections shift to a fully dark canvas for E-Tech electric and technology showcases — electrification lives in darkness, tradition in light. NouvelR is the proprietary geometric sans by Black[Foundry] with a 28-degree "radical r" terminal cut matching the diamond logo's angles. Hero headlines run 56px / 0.95 line-height — ultra-tight and punchy. Renault Yellow (`#efdf00`) is the super-primary accent reserved for the highest-priority CTA. Mood — energetic, chromatic, French-modern, electric-confident.

colors:
  primary: "#efdf00"
  primary-soft: "#f8eb4c"
  ink: "#000000"
  body: "#000000"
  muted: "#d9d9d6"
  hairline: "#d1d1d1"
  hairline-soft: "#f2f2f2"
  canvas: "#ffffff"
  surface-dark: "#000000"
  surface-charcoal: "#222222"
  on-primary: "#000000"
  on-dark: "#ffffff"
  link-hover: "#1883fd"
  success: "#8dc572"
  error: "#be6464"
  warning: "#f0ad4e"
  info: "#337ab7"

typography:
  hero-title:
    fontFamily: "NouvelR, sans-serif"
    fontSize: 56px
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: 0
  section-heading:
    fontFamily: "NouvelR, sans-serif"
    fontSize: 40px
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: 0
  card-heading:
    fontFamily: "NouvelR, sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: 0
  subheading:
    fontFamily: "NouvelR, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: 0
  module-title:
    fontFamily: "NouvelR, sans-serif"
    fontSize: 21.92px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0
  content-title:
    fontFamily: "NouvelR, sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: 0
  ui-heading:
    fontFamily: "NouvelR, sans-serif"
    fontSize: 19.2px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  emphasis:
    fontFamily: "NouvelR, sans-serif"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0
  body-heading:
    fontFamily: "NouvelR, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  body:
    fontFamily: "NouvelR, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  body-bold:
    fontFamily: "NouvelR, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.57
    letterSpacing: 0
  button:
    fontFamily: "NouvelR, sans-serif"
    fontSize: 14.4px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0.144px
  nav-link:
    fontFamily: "NouvelR, sans-serif"
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "NouvelR, sans-serif"
    fontSize: 12.8px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: 0
  small-label:
    fontFamily: "NouvelR, sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0
  micro:
    fontFamily: "NouvelR, sans-serif"
    fontSize: 10px
    fontWeight: 700
    lineHeight: 1.45
    letterSpacing: 0

rounded:
  none: 0px
  xs: 2px
  sm: 3px
  md: 4px
  pill: 46px
  full: 50px

spacing:
  xxs: 4px
  xs: 5px
  sm: 8px
  md: 10px
  lg: 16px
  xl: 24px
  xxl: 32px
  section: 40px
  section-lg: 80px

components:
  button-super-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 10px 15px
  button-primary:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 10px 15px
  button-primary-inverted:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 10px 15px
  button-ghost-on-dark:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 10px 15px
  button-ghost-on-light:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 10px 15px
  promo-card-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.section-heading}"
    rounded: "{rounded.none}"
    padding: 24px
  promo-card-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.section-heading}"
    rounded: "{rounded.none}"
    padding: 24px
  vehicle-range-card:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.subheading}"
    rounded: "{rounded.none}"
    padding: 16px
  search-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: 6px 16px
  nav-top:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 64px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: 64px
---

## Overview

Renault's website is a vibrant digital showroom — French automotive elegance with bold, forward-leaning energy. Full-screen hero washes the viewport in sweeping aurora gradients (magenta / violet / teal) behind dramatically lit vehicle photography. The interface structure stays disciplined (NouvelR typography, black-and-white CTA framework, zero-radius buttons) while content stays alive with color.

The chessboard rhythm: PromoCards alternate between light (white + black text) and dark (`is-alternative-mode` black + white text) modes. Below the fold, full-dark canvas handles E-Tech electric showcases — electrification lives in darkness, tradition in light.

Mood — energetic, chromatic, French-modern, electric-confident.

## Colors

**Renault Yellow** (`#efdf00`) is the brand voltage — the highest-emphasis super-primary CTA color. Used sparingly on one button per screen. Soft Yellow (`#f8eb4c`) handles hover/pressed.

**Absolute Black** (`#000000`) is the primary CTA fill and dominant dark surface; **Pure White** (`#ffffff`) the editorial canvas. Charcoal (`#222222`) provides secondary dark surface. Warm Gray (`#d9d9d6`) handles disabled states and soft borders.

**Renault Blue** (`#1883fd`) is the sole chromatic interactive color — link hover state across all variants. Semantic colors (success `#8dc572`, error `#be6464`, warning `#f0ad4e`, info `#337ab7`) follow standard accessible patterns; never decorative.

## Typography

**NouvelR** is the sole typeface — proprietary geometric sans by Black[Foundry] with a 28-degree "radical r" terminal cut matching the diamond logo. Available in 6 weights. Single-family discipline: NouvelR handles 56px hero headlines down to 8.5px legal captions.

**Bold-default headings**: weight 700 dominates the heading hierarchy — assertive, energetic, modern. **Ultra-tight 0.95 line-height** on hero and section headings creates a compressed, punchy texture that feels urgent. Weight 600 appears on module-title and ui-heading for slightly softer mid-tier; weight 400 on body for comfortable reading.

## Layout

8px base spacing with section padding 40–80px. Card gaps 16–24px. **Minimum interactive size 46×46px** (above WCAG AAA). Max content width 1440px.

The chessboard alternation — light section → dark section → light → dark — is the page rhythm. The mode switch itself acts as a visual separator. Whitespace is moderate: more generous than Ferrari, less extreme than Tesla. The card-based layout means content sits in defined containers rather than floating in void.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow | Default for PromoCards, buttons, most containers |
| Soft | `rgba(0,0,0,0.2) 0px 4px 8px` | Card hover states |
| Medium | `rgba(0,0,0,0.2) 0px 0px 18px` | Floating UI, dropdown menus |
| Layered | compound `0 2px 4px` + `rgba(50,50,93,0.1) 0 7px 14px` | Elevated cards, modals |
| Deep | `rgba(0,0,0,0.15) 0px 40px 80px` | Large floating panels |
| Directional | `rgba(0,0,0,0.2) 5px 5px 8px` | Offset directional shadow |
| Ambient | `rgb(199,197,199) 0px 0px 12px 2px` | Warm gray ambient glow |

The compound shadow with its dual-layer approach (tight dark + wider purple-tinted) creates a photorealistic floating effect. The ambient glow in warm gray connects to Renault's warmer color personality.

**Decorative depth**: hero aurora gradients (magenta → violet → teal) and PromoCard overlays (`linear-gradient(rgba(0,0,0,0.6) → transparent)`) provide atmospheric depth.

## Shapes

| Token | Value | Use |
|---|---|---|
| `none` | 0px | All buttons, PromoCards, most containers — the zero-radius default |
| `xs` | 2px | Small UI elements (region controls) |
| `sm` | 3px | Content panels (div, tabpanel) |
| `md` | 4px | Labels and tag elements |
| `pill` | 46px | Pill-shaped elements (chips, search) |
| `full` | 50px | Full pill for search inputs |

Zero-radius is core — sharp edges express precision engineering. Pills (46–50px) reserved for search inputs and filter elements only — never buttons.

## Components

**Button super-primary (yellow)**: Renault Yellow `#efdf00` fill, black text, 0px radius, 10×15px padding, NouvelR 14.4px / 700 / 0.144px tracking, 46×46px minimum. Used for highest-priority conversion actions — one per screen.

**Button primary (black)**: black fill, white text, 0px radius. Inverted variant: white fill, black text on dark backgrounds. **Button ghost**: transparent with 1px white border on dark, 1px black border on light.

**PromoCard light / dark**: full-bleed photography, dark gradient overlay top (`rgba(0,0,0,0.6) → transparent`) for text legibility, NouvelR 40px / 700 white heading, 0px radius. **VehicleRangeCard**: transparent fill, vehicle render above, model name + price below.

**Search input**: 50px pill, white fill, 1px `#d1d1d1` border, NouvelR 12.8px text — the only pill-shaped element.

## Do's and Don'ts

**Do**
- Use Renault Yellow (`#efdf00`) exclusively for super-primary CTAs — one per screen
- Maintain zero border-radius on all buttons — sharp edges non-negotiable
- Use NouvelR Bold (700) as the default heading weight
- Apply dark gradient overlay (`rgba(0,0,0,0.6) → transparent`) on PromoCards
- Keep hero line-heights ultra-tight (0.95) for display text
- Alternate black and white sections — chessboard rhythm is the brand
- Use `#1883fd` consistently for all link hover states
- Set minimum interactive size at 46×46px
- Reserve pill radius (46–50px) for search inputs only — never buttons

**Don't**
- Apply Renault Yellow as a section background — CTA signal, not atmosphere
- Add border-radius to buttons — zero-radius rectangle is core
- Use any typeface besides NouvelR
- Mix multiple chromatic accents in one section — monochrome-plus-yellow only
- Soften heading weights to 400 or 500 — NouvelR Bold is the brand voice
- Apply 56px hero size below the fold
- Create rounded-pill buttons — pill shapes for inputs only
- Use flat CSS gradients on UI surfaces — only photographic auroras and text overlays

## Agent Prompt Guide

**Bias toward** — Renault Yellow `#efdf00` super-primary CTA (one per screen), 0px radius rectangular buttons, NouvelR weight 700 default heading, ultra-tight 0.95 line-height on hero/section, chessboard light/dark section alternation, PromoCard gradient overlay for text legibility, 46×46px minimum interactive, link-hover `#1883fd`.

**Reject** — yellow as section background, rounded buttons, multiple chromatic accents per section, weight 400/500 headings, decorative semantic colors, 56px below the fold, pill-shaped buttons, flat CSS gradients on surfaces.
