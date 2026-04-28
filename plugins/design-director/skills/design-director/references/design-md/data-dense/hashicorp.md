---
version: alpha
name: HashiCorp
description: |
  HashiCorp's marketing system communicates infrastructure-grade seriousness through a strict dual-mode canvas — clean white for informational sections and a dramatic forest-dark hero (`#15181e`, `#0d0e12`) that mirrors the "build in light, deploy in dark" developer workflow. A custom HashiCorp Sans display face carries every heading at weight 600–700 with tight 1.17–1.21 line-heights and OpenType `"kern"` always on, while system-ui handles relaxed body text at 1.50–1.69 line-height. The signature decoration is a multi-product color system: Terraform purple, Vault yellow, Waypoint teal and Vagrant blue each own one product context via the `--mds-color-*` token namespace, leaving the parent brand strictly black-and-white with blue links. Shadows whisper at 0.05 opacity dual layers, and uppercase 13px labels at weight 600 with 1.3px tracking serve as systematic section markers. Mood — enterprise, engineered, dual-mode, load-bearing.

colors:
  primary: "#000000"
  primary-hover: "#1c1c1c"
  ink: "#000000"
  body: "#3b3d45"
  muted: "#656a76"
  canvas: "#ffffff"
  surface-soft: "#f1f2f3"
  hairline: "#d5d7db"
  hairline-strong: "#b2b6bd"
  canvas-app: "#15181e"
  surface-app: "#0d0e12"
  on-app: "#efeff1"
  on-app-muted: "#d5d7db"
  hairline-app: "#3b3d45"
  on-primary: "#ffffff"
  link-light: "#2264d6"
  link-dark: "#1060ff"
  link-active: "#2b89ff"
  link-visited: "#a737ff"
  terraform: "#7b42bc"
  vault: "#ffcf25"
  waypoint: "#14c6cb"
  waypoint-hover: "#12b6bb"
  vagrant: "#1868f2"
  purple-accent: "#911ced"
  amber: "#bb5a00"
  amber-soft: "#fbeabf"
  error: "#731e25"
  navy: "#101a59"

typography:
  display-hero:
    fontFamily: "HashiCorp Sans, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: 82px
    fontWeight: 600
    lineHeight: 1.17
    letterSpacing: 0
  display-section:
    fontFamily: "HashiCorp Sans, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: 52px
    fontWeight: 600
    lineHeight: 1.19
    letterSpacing: 0
  display-feature:
    fontFamily: "HashiCorp Sans, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: 42px
    fontWeight: 700
    lineHeight: 1.19
    letterSpacing: -0.42px
  sub-heading:
    fontFamily: "HashiCorp Sans, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: 34px
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: 0
  card-title:
    fontFamily: "HashiCorp Sans, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: 26px
    fontWeight: 700
    lineHeight: 1.19
    letterSpacing: 0
  body-emphasis:
    fontFamily: "HashiCorp Sans, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: 17px
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: 0
  body-large:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  body:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.63
    letterSpacing: 0
  nav:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.60
    letterSpacing: 0
  caption:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  uppercase-label:
    fontFamily: "HashiCorp Sans, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.69
    letterSpacing: 1.3px

rounded:
  none: 0px
  xs: 2px
  sm: 3px
  md: 4px
  lg: 5px
  xl: 8px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 12px
  "4": 16px
  "5": 20px
  "6": 24px
  "8": 32px
  "10": 40px
  "12": 48px
  section: 80px

components:
  button-primary-dark:
    backgroundColor: "{colors.canvas-app}"
    textColor: "{colors.on-app-muted}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 9px 15px
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 8px 12px
  button-terraform:
    backgroundColor: "{colors.terraform}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 9px 15px
  card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xl}"
    padding: 24px
  card-app:
    backgroundColor: "{colors.canvas-app}"
    rounded: "{rounded.xl}"
    padding: 24px
  badge:
    backgroundColor: "#42225b"
    textColor: "{colors.on-app}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 3px 7px
  input-dark:
    backgroundColor: "{colors.surface-app}"
    textColor: "{colors.on-app}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 11px
---

## Overview

HashiCorp's site is enterprise infrastructure made tangible — a dual-mode system where clean white sections handle information and dramatic forest-dark heroes (`#15181e`, `#0d0e12`) showcase product. The custom HashiCorp Sans face carries headings at 600–700 weight with tight line-heights, while system-ui shoulders the body load at relaxed 1.50–1.69 line-heights. The multi-product color system — Terraform purple, Vault yellow, Waypoint teal, Vagrant blue — lets each product own exactly one accent color while the parent brand stays disciplined black-and-white with blue links.

Mood — enterprise, engineered, dual-mode, load-bearing.

## Colors

The parent brand is achromatic — black ink on white canvas with `#3b3d45` for secondary text and `#656a76` for helper copy. Dark sections drop to forest-dark `#15181e` (canvas-app) and deeper `#0d0e12` (surface-app), with `#efeff1` and `#d5d7db` carrying the inverse text hierarchy.

The product-color system is sacred — Terraform `#7b42bc`, Vault `#ffcf25`, Waypoint `#14c6cb`, Vagrant `#1868f2` — each owns exactly one product context via `--mds-color-*` tokens. Never reuse a product hue outside its product. Link blue `#2264d6` (light) and `#1060ff` (dark) handle interaction; visited purple `#a737ff` and active blue `#2b89ff` are reserved for state.

## Typography

HashiCorp Sans for headings 17px+ and brand text with `"kern"` always on; system-ui for body, navigation and functional UI. Tight headings (1.17–1.21) sit above relaxed body text (1.50–1.69) — dense at the top, comfortable below. Uppercase 13px weight 600 at 1.3px letter-spacing is the systematic section-label voice.

## Layout

8px base, scale 2/4/8/12/16/24/32/48px. Max content width ≈1150px. Hero sections run full-width dark with contained inner content. Card grids 2–3 columns. Generous vertical padding (48–80px+) between sections.

## Elevation & Depth

HashiCorp uses arguably the subtlest shadow system in modern web — dual-layer micro-shadows at 0.05 opacity (`rgba(97, 104, 117, 0.05) 0px 1px 1px, 0px 2px 2px`). If you can see the shadow, it's too strong. Focus rings are always `3px solid` color-matched to product context.

## Shapes

2px (inline / spans) → 3px (checkboxes) → 4px (secondary buttons) → 5px (primary buttons / inputs / badges) → 8px (cards). Nothing pill-shaped or circular — the sharp restraint reads as structural infrastructure.

## Components

**Primary dark button** — `#15181e` fill, `#d5d7db` text, asymmetric 9/9/9/15 padding, 5px radius, 1px `rgba(178,182,189,0.4)` border, dual-layer micro-shadow, 3px focus ring. **Secondary white** — `#ffffff` fill, `#3b3d45` text, 4px radius, 8/12 padding. **Product buttons** follow the same shape but swap fill: Terraform `#7b42bc`, Vault `#ffcf25` with dark text, Waypoint `#14c6cb` (hover `#12b6bb`).

**Cards** use white fill on light, `#15181e` on dark, 8px radius, micro-shadow elevation. **Badges** are deep purple `#42225b` with `#efeff1` text and `1px solid rgb(180,87,255)` border. **Dark inputs** use `#0d0e12` fill, `#efeff1` text, `1px solid rgb(97,104,117)` border, 5px radius, 11px padding.

## Do's and Don'ts

**Do**
- Use HashiCorp Sans for headings only (17px+); system-ui for everything else
- Enable `"kern"` on all HashiCorp Sans text — letterfitting is non-negotiable
- Reserve product brand colors for their respective products (no Terraform purple on Vault content)
- Apply uppercase 13px / weight 600 / 1.3px letter-spacing for section markers
- Keep shadows at the whisper level (0.05 opacity dual layers)
- Maintain the tight-heading / relaxed-body rhythm
- Use `3px solid` focus outlines color-matched to product context
- Use `#15181e` for dark backgrounds, never pure `#000`

**Don't**
- Mix product colors in the same component
- Increase shadow opacity above 0.1 — the whisper is intentional
- Use pill or circular radii on buttons (>8px) — sharp restraint is structural
- Apply HashiCorp Sans to small body text (it's designed for 17px+)
- Use pure black `#000000` for backgrounds — forest-dark `#15181e` carries the brand
- Forget the asymmetric 9/9/9/15 button padding on primary dark CTAs

## Agent Prompt Guide

**Bias toward** — dual-mode (white informational / forest-dark `#15181e` hero), HashiCorp Sans headings + system-ui body, multi-product accent system (Terraform / Vault / Waypoint / Vagrant), whisper-level dual-layer shadows, uppercase 13px wayfinding labels, 3px focus rings.

**Reject** — pure black backgrounds, decorative use of product colors outside their product, pill-shaped buttons, heavy shadows, HashiCorp Sans on small body text, single-color hero treatments that ignore the dual-mode.
