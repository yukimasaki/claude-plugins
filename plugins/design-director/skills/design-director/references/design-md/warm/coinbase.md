---
version: alpha
name: Coinbase
description: |
  Coinbase's web presence is a clean, trustworthy crypto platform that communicates financial reliability through a binary blue-and-white palette. **Coinbase Blue** (`#0052ff`) — a deep, saturated blue — is the singular brand accent against white and near-black surfaces. The proprietary four-font system (CoinbaseDisplay for hero, CoinbaseSans for UI, CoinbaseText for body, CoinbaseIcons for iconography) gives the system a comprehensive typographic vocabulary. The signature button move is a **56px-radius pill** with a hover transition to lighter blue (`#578bfa`); some button labels carry an unusual `text-transform: lowercase` treatment. Pages alternate between **white content sections** and **dark feature sections** (`#0a0b0d` near-black + `#282b31` for cards) — the contrast carries elevation rather than shadows. Display headings run weight 400 with **1.0 line-height** — ultra-tight for compressed financial-grade authority. Mood — institutional, trustworthy, financial, restrained.

colors:
  primary: "#0052ff"
  primary-hover: "#578bfa"
  primary-link: "#0667d0"
  ink: "#0a0b0d"
  body: "#0a0b0d"
  body-on-dark: "#ffffff"
  muted: "#5b616e"
  canvas: "#ffffff"
  canvas-dark: "#0a0b0d"
  surface-soft: "#f7f7f7"
  surface-cool: "#eef0f3"
  surface-card-dark: "#282b31"
  hairline: "#e6e8eb"
  hairline-on-dark: "#282b31"
  on-primary: "#ffffff"
  on-dark: "#ffffff"

typography:
  display-xl:
    fontFamily: "CoinbaseDisplay, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 80px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0
  display-lg:
    fontFamily: "CoinbaseDisplay, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0
  display-md:
    fontFamily: "CoinbaseDisplay, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 52px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0
  section-heading:
    fontFamily: "CoinbaseSans, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.11
    letterSpacing: 0
  card-title:
    fontFamily: "CoinbaseSans, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.13
    letterSpacing: 0
  feature-title:
    fontFamily: "CoinbaseSans, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: 0
  body-strong:
    fontFamily: "CoinbaseSans, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  body-emphasis:
    fontFamily: "CoinbaseSans, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  body-md:
    fontFamily: "CoinbaseText, Georgia, 'Times New Roman', serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.56
    letterSpacing: 0
  body-sm:
    fontFamily: "CoinbaseText, Georgia, 'Times New Roman', serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button:
    fontFamily: "CoinbaseSans, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.16px
  caption:
    fontFamily: "CoinbaseSans, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0
  small:
    fontFamily: "CoinbaseSans, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.23
    letterSpacing: 0

rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 16px
  xl: 24px
  "2xl": 40px
  pill: 56px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.surface-cool}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 24px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
  button-on-dark:
    backgroundColor: "{colors.surface-card-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 24px
  button-blue-outline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 24px
  button-full-pill:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 14px 24px
  card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.card-title}"
    rounded: "{rounded.lg}"
    padding: 24px
  card-large:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: 32px
  card-dark:
    backgroundColor: "{colors.surface-card-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.card-title}"
    rounded: "{rounded.lg}"
    padding: 24px
  hero-band-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: 96px
  hero-band-dark:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-lg}"
    padding: 96px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-emphasis}"
    height: 64px
  footer:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    padding: 64px
---

## Overview

Coinbase reads as an institutional crypto platform — clean, trustworthy, financially-grade. The system runs a binary palette: white canvas + near-black ink + a single saturated brand blue (`{colors.primary}` — #0052ff) for every interactive moment. Pages alternate between bright white content sections and dark feature sections (`{colors.canvas-dark}` — #0a0b0d, with `{colors.surface-card-dark}` — #282b31 for elevated cards on dark) — the cream-to-dark contrast carries elevation rather than shadows.

Note: Coinbase is housed under `warm/` for organizational purposes but its palette is **deliberately cool** — saturated blue + near-black + white — distinct from the warm-cream Claude / Mercury siblings. The "warm" family identity comes from the editorial / restrained tone, not the color temperature.

The proprietary four-font system gives the system a comprehensive typographic vocabulary: **CoinbaseDisplay** (hero), **CoinbaseSans** (UI / nav / buttons / sections), **CoinbaseText** (body reading), **CoinbaseIcons** (iconography). Display sizes run weight 400 with **1.0 line-height** — ultra-tight for compressed authority. The signature button move is a **56px-radius pill** with a hover transition to lighter blue (`{colors.primary-hover}` — #578bfa). Some labels carry an unusual `text-transform: lowercase` — distinctive lowercase utility for a financial brand.

Mood — institutional, trustworthy, financial, restrained.

## Colors

The palette is deliberately binary: **Coinbase Blue** (`{colors.primary}` — #0052ff) is the singular brand accent. **Pure White** (`{colors.canvas}`) for light surfaces, **Near Black** (`{colors.canvas-dark}` — #0a0b0d) for dark feature sections.

The cool gray ladder anchors secondary surfaces: `{colors.surface-cool}` (#eef0f3) for the default secondary button background, `{colors.surface-soft}` (#f7f7f7) for subtle wash. On dark, `{colors.surface-card-dark}` (#282b31) is the elevated card.

Hover state shifts to `{colors.primary-hover}` (#578bfa) — a brighter, friendlier blue. Link blue (`{colors.primary-link}` — #0667d0) is one shade darker than brand blue for inline copy. Borders use `{colors.muted}` (#5b616e) at 20% alpha; the frontmatter encodes opaque approximations.

## Typography

The four-font proprietary system is rigorously role-bound:

- **CoinbaseDisplay** — hero only (80 / 64 / 52px, weight 400, line-height 1.0). The ultra-tight line-height creates compressed financial-grade authority.
- **CoinbaseSans** — UI / nav / buttons / section heads (36 / 32 / 16 / 14px, weights 400 / 600 / 700)
- **CoinbaseText** — body reading (18 / 16px, weight 400) — a serif-flavored reading face
- **CoinbaseIcons** — icon font

Buttons use **+0.16px positive letter-spacing** at 16px / 600 — slight breathing for legibility on tight pill buttons. Some button labels carry `text-transform: lowercase` — an unusual tonal choice that softens the financial-platform feel.

## Layout

- Spacing scale uses fractional 1 / 3 / 4 / 5 / 6 / 8 / 10 / 12 / 15 / 16 / 20 / 24 / 25 / 32 / 48px values
- Section padding 64–96px between major bands
- Eight-tier breakpoints: 400 / 576 / 640 / 768 / 896 / 1280 / 1440 / 1600px (denser than typical for product / market pages)

The layout philosophy is **alternate light and dark bands** — white content alternates with `{colors.canvas-dark}` feature sections, the surface contrast itself acting as the section divider.

## Elevation & Depth

Minimal shadow system — depth comes from **color-block contrast** between light and dark sections, not box-shadow. On dark sections, `{colors.surface-card-dark}` cards sit one step lighter than the `{colors.canvas-dark}` ground. On light sections, `1px solid {colors.hairline}` defines card edges.

Focus state uses a `2px solid black` outline for keyboard accessibility.

## Shapes

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0 | Reserved |
| `{rounded.sm}` | 4px | Small cards, article links |
| `{rounded.md}` | 8px | Standard cards, menus, inputs |
| `{rounded.lg}` | 16px | Cards, content containers |
| `{rounded.xl}` | 24px | Larger feature containers |
| `{rounded.2xl}` | 40px | Large buttons / containers |
| `{rounded.pill}` | 56px | **Primary CTAs — the signature radius** |
| `{rounded.full}` | 9999px (100000px in source) | Maximum pill — full-pill emphasized CTAs |

The 56px pill radius is the system's signature. Cards use 16–24px radius depending on size; small inline elements use 4–8px.

## Components

**`button-primary`** — Cool gray fill (`{colors.surface-cool}`), near-black text, 56px pill radius, 14/24 padding. Hover transitions background to `{colors.primary-hover}` (light blue) with white text — the signature interactive move.

**`button-on-dark`** — On dark sections: `{colors.surface-card-dark}` fill, white text, 56px pill.

**`button-blue-outline`** — White fill, blue text, 1px `{colors.primary}` border, 56px pill — secondary action signaling.

**`button-full-pill`** — Full-pill CTA at 9999px radius for maximum-emphasis hero moments.

**`card`** — White fill, hairline border, 16px radius. Title uses `{typography.card-title}` (32px / 400, CoinbaseSans).

**`card-dark`** — Dark feature card on `{colors.surface-card-dark}` ground, white text, 16px radius. Used inside dark feature bands.

**`hero-band-light`** / **`hero-band-dark`** — Full-bleed hero sections at 96px vertical padding. Light hero uses display-xl (80px) on white; dark hero uses display-lg (64px) on `{colors.canvas-dark}`. The light/dark alternation is the page's pacing rhythm.

**`text-input`** — White fill, hairline border, 8px radius, body-sm CoinbaseText. Focus shifts to blue.

**`top-nav`** — Sticky white nav with CoinbaseSans 16px / 600 menu items, blue primary CTA right-aligned. Mobile collapse.

**`footer`** — `{colors.canvas-dark}` surface with caption-tier muted text.

## Do's and Don'ts

**Do**
- Use `{colors.primary}` (Coinbase Blue) for primary interactive elements only — never decoratively
- Apply 56px pill radius to all CTA buttons — the signature shape
- Use `{colors.primary-hover}` (#578bfa) on hover — the lighter blue is part of the system identity
- Use CoinbaseDisplay for hero headlines only, weight 400 with 1.0 line-height
- Use CoinbaseText (the serif-flavored reading face) for body, CoinbaseSans for UI / nav / buttons
- Alternate `{colors.canvas-dark}` and white sections — the contrast is the elevation
- Apply +0.16px positive tracking on button labels at 16/600

**Don't**
- Don't use blue decoratively — it's functional only
- Don't use sharp corners on CTAs — 56px pill is the minimum
- Don't introduce a second saturated brand color — the binary blue/white/black is the brand
- Don't increase display line-height beyond 1.0 — the compression is core
- Don't use box-shadow for elevation — color-block contrast does the work
- Don't mix the four fonts outside their intended roles — Display is hero-only, Text is body-only

## Agent Prompt Guide

**Bias toward** — binary blue/white/dark palette, 56px pill CTAs with light-blue hover, four-font role-bound system (Display hero / Sans UI / Text body / Icons), 1.0 line-height on display, alternating white and `{colors.canvas-dark}` section bands, color-block elevation rather than shadows, +0.16px positive tracking on buttons.

**Reject** — sharp-cornered CTAs, decorative use of brand blue, secondary saturated brand colors, display line-heights above 1.0, box-shadow elevation, mixing fonts outside their intended roles.
