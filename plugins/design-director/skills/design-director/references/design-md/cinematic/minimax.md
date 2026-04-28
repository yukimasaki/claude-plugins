---
version: alpha
name: MiniMax
description: |
  MiniMax's website is a clean product-showcase platform for a Chinese AI technology company that bridges consumer-friendly appeal with technical credibility. The design language is white-space-driven with a light, airy feel — pure white (`#ffffff`) dominates, letting colorful product cards and AI model illustrations serve as the visual anchors. The aesthetic sits at the intersection of Apple's product marketing clarity and a playful rounded design language that makes AI technology feel approachable. The typography system is multi-font: DM Sans serves as the UI workhorse, Outfit handles display headings with geometric elegance, Poppins appears for mid-tier headings, and Roboto handles data-heavy contexts. Each font serves a distinct communicative purpose rather than competing for attention. The hero heading at 80px weight 500 in DM Sans / Outfit with a tight 1.10 line-height creates a bold but not aggressive opening statement. Pill buttons (9999px radius) handle navigation and primary actions; product cards run generous radii (20–24px). Brand blue (`#1456f0`) anchors identity, brand pink (`#ea5ec1`) is the secondary accent. Purple-tinted shadows (`rgba(44, 30, 116, 0.16)`) connect elevation to brand identity. Mood — friendly, airy, approachable, gallery-of-AI.

colors:
  primary: "#1456f0"
  primary-active: "#2563eb"
  primary-pressed: "#1d4ed8"
  primary-light: "#60a5fa"
  primary-soft: "#bfdbfe"
  primary-deep: "#17437d"
  sky: "#3daeff"
  ink: "#222222"
  ink-strong: "#18181b"
  body: "#45515e"
  muted: "#8e8e93"
  muted-soft: "#5f5f5f"
  hairline: "#e5e7eb"
  hairline-soft: "#f2f3f5"
  canvas: "#ffffff"
  surface-soft: "#f0f0f0"
  surface-dark: "#181e25"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  brand-pink: "#ea5ec1"
  success-bg: "#e8ffea"

typography:
  display-hero:
    fontFamily: "'DM Sans', Outfit, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 80px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: 0
  section-heading:
    fontFamily: "Outfit, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 31px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0
  section-heading-alt:
    fontFamily: "Roboto, 'DM Sans', 'Helvetica Neue', Arial, sans-serif"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 0.88
    letterSpacing: 0
  card-title:
    fontFamily: "Outfit, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.71
    letterSpacing: 0
  sub-heading:
    fontFamily: "Poppins, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  feature-label:
    fontFamily: "Poppins, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  body-lg:
    fontFamily: "'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  body:
    fontFamily: "'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-bold:
    fontFamily: "'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  nav:
    fontFamily: "'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  button-small:
    fontFamily: "'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "'DM Sans', Poppins, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0
  small-label:
    fontFamily: "'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  micro:
    fontFamily: "'DM Sans', Outfit, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 13px
  lg: 16px
  xl: 20px
  "2xl": 24px
  "3xl": 32px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 11px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 50px
  section: 64px
  section-lg: 80px

components:
  button-primary:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-small}"
    rounded: "{rounded.sm}"
    padding: 11px 20px
  button-secondary:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink-strong}"
    typography: "{typography.button-small}"
    rounded: "{rounded.sm}"
    padding: 11px 20px
  pill-nav:
    backgroundColor: "{colors.hairline-soft}"
    textColor: "{colors.ink-strong}"
    typography: "{typography.nav}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  pill-white:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-strong}"
    typography: "{typography.nav}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  card-product:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.card-title}"
    rounded: "{rounded.xl}"
    padding: 24px
  card-ai-product:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 16px
  footer:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav}"
    padding: 64px
---

## Overview

MiniMax bridges consumer-friendly approachability with AI technical credibility. White-dominant pages let colorful product cards (vibrant pink/purple/orange/blue gradients) serve as visual anchors — like app icons on a phone home screen, each AI model feels like a self-contained creative tool.

The hero runs at 80px in DM Sans / Outfit weight 500 with a tight 1.10 line-height — bold but not aggressive. Multi-font system distributes purpose: DM Sans for UI, Outfit for display, Poppins for mid-tier, Roboto for data.

Mood — friendly, airy, approachable, gallery-of-AI.

## Colors

The palette is anchored by **brand blue** (`#1456f0`) with a full primary scale (`#bfdbfe` → `#60a5fa` → `#3b82f6` → `#2563eb` → `#1d4ed8` → `#17437d`). Brand pink (`#ea5ec1`) is reserved for logo and decorative accents — never on text or buttons. Sky blue (`#3daeff`) handles lighter accent moments.

Text runs near-black (`#222222`) for primary, dark (`#18181b`) for buttons/headings, and `#45515e` / `#8e8e93` for secondary/muted. The dark footer uses charcoal (`#181e25`).

## Typography

**DM Sans** is the UI workhorse — body, nav, buttons. **Outfit** is geometric display — hero headlines and card titles. **Poppins** is friendly mid-tier — sub-headings and feature labels. **Roboto** is technical/data only.

Universal **1.50 line-height** across body text creates a consistent reading rhythm regardless of font or size. Display jumps to 1.10 (tight). Weight 500 is the default emphasis level (modern, approachable); 600 for section titles; 700 reserved for strong emphasis on body.

## Layout

8px base spacing with section gaps 64–80px. Product card grids flow horizontal-scroll or 3–4 column. Whitespace is **gallery spacing** — products presented like gallery items with generous breathing room. Card internal padding 16–24px.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow | White background, text blocks |
| Subtle | `rgba(0,0,0,0.08) 0px 4px 6px` | Standard cards |
| Ambient | `rgba(0,0,0,0.08) 0px 0px 22px` | Soft glow around elements |
| **Brand Glow** | `rgba(44,30,116,0.16) 0px 0px 15px` | Featured product cards |
| Elevated | `rgba(36,36,36,0.08) 0px 12px 16px -4px` | Lifted cards, hover |

The signature is **purple-tinted shadow** (`rgba(44, 30, 116, ...)`) on featured product cards — a brand-color glow connecting elevation to identity. Standard shadows use neutral black at low opacity (0.08), keeping everything light and airy.

## Shapes

| Token | Value | Use |
|---|---|---|
| `xs` | 4px | Small tags, micro badges |
| `sm` | 8px | Buttons, small cards |
| `md` | 13px | AI product matrix cards |
| `lg` | 16px | Medium cards |
| `xl` | 20px | Large product cards |
| `2xl` | 24px | Hero product cards |
| `3xl` | 32px | Major panels |
| `pill` / `full` | 9999px | Nav tabs, primary buttons |

Pill (9999px) for navigation and toggle buttons; standard (8px) for CTA buttons; generous (20–24px) for product showcase cards.

## Components

**Button primary**: dark `#181e25` fill, white text, 8px radius, 11×20px padding, DM Sans 13px / 600. **Button secondary**: light `#f0f0f0` fill, dark text, same metrics. **Pill nav**: subtle tinted bg, dark text, 9999px radius for navigation tabs.

**Card product**: white fill with vibrant gradient illustration area, 20px radius, brand-purple glow shadow, product name in Outfit 28px / 600. **Card AI-product matrix**: white fill, 13px radius, neutral subtle shadow, centered icon above DM Sans 14–16px / 500 product name.

**Footer**: dark `#181e25` background, multi-column product/company links in DM Sans 14px white-tinted. Brand pink only allowed in the logo mark.

## Do's and Don'ts

**Do**
- Use white as the dominant background — let product cards provide the color
- Apply pill radius (9999px) for navigation tabs and toggle buttons
- Use generous border radius (20–24px) for product showcase cards
- Employ purple-tinted shadow (`rgba(44,30,116,0.16)`) for featured/hero product cards
- Keep body text at DM Sans weight 400–500 — heavier weights for buttons only
- Use Outfit for display headings, DM Sans for everything functional
- Maintain universal 1.50 line-height across body text
- Let colorful product illustrations serve as the primary visual interest

**Don't**
- Don't add colored backgrounds to main content sections — white is structural
- Don't use sharp corners (0–4px radius) on product cards — rounded aesthetic is core
- Don't apply brand pink (`#ea5ec1`) to text or buttons — logo and decorative accents only
- Don't mix more than one display font per section (Outfit OR Poppins, not both)
- Don't use weight 700 for headings — 500–600 is the range
- Don't darken shadows beyond 0.16 opacity — light, airy feel requires restraint
- Don't use Roboto for headings — data/technical context font only

## Agent Prompt Guide

**Bias toward** — white canvas with colorful product cards, multi-font discipline (DM Sans UI / Outfit display / Poppins mid / Roboto data), pill nav (9999px), 20–24px product cards, purple-tinted shadows for featured cards, hero 80px DM Sans/Outfit weight 500 line-height 1.10, weights 400–600.

**Reject** — colored section backgrounds, sharp product card corners, brand pink in buttons/text, mixed display fonts in one section, weight 700 headings, heavy shadows >0.16, Roboto for headings, sharp button corners.
