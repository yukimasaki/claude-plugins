---
version: alpha
name: NVIDIA
description: |
  NVIDIA's website is a high-contrast, technology-forward experience that communicates raw computational power through design restraint. The page is built on a stark black (`#000000`) and white (`#ffffff`) foundation, punctuated by NVIDIA's signature green (`#76b900`) — a color so specific it functions as a brand fingerprint. This is not the lush green of nature; it's the electric, lime-shifted green of GPU-rendered light, a color that sits between chartreuse and kelly green and immediately signals "NVIDIA" to anyone in technology. The custom NVIDIA-EMEA font family creates a clean, industrial typographic voice. Headings at 36px bold with tight 1.25 line-height create dense, authoritative blocks of text. The font is European, pragmatic, engineering-focused. What distinguishes NVIDIA from other dark-background tech sites is the disciplined use of green: borders (`2px solid #76b900`), link underlines, and CTA outlines — but never as backgrounds or large surface areas. The green is a signal, not a surface. Combined with deep shadows (`rgba(0,0,0,0.3) 0px 0px 5px`) and minimal border radius (1–2px), the overall effect is precision engineering hardware rendered in pixels. Mood — industrial, engineering-forward, electric, GPU-precise.

colors:
  primary: "#76b900"
  primary-light: "#bff230"
  primary-deep: "#3f8500"
  ink: "#ffffff"
  ink-on-light: "#000000"
  body: "#a7a7a7"
  body-strong: "#ffffff"
  muted: "#898989"
  muted-soft: "#757575"
  hairline: "#5e5e5e"
  canvas: "#000000"
  surface-soft: "#1a1a1a"
  surface-light: "#ffffff"
  on-primary: "#000000"
  on-dark: "#ffffff"
  orange: "#df6500"
  yellow: "#ef9100"
  yellow-soft: "#feeeb2"
  red: "#e52020"
  red-deep: "#650b0b"
  blue: "#0046a4"
  purple: "#4d1368"
  purple-soft: "#f9d4ff"
  fuchsia: "#8c1c55"
  link-hover: "#3860be"
  hover-teal: "#1eaedb"
  active-blue: "#007fff"

typography:
  display-hero:
    fontFamily: "'NVIDIA-EMEA', Arial, Helvetica, sans-serif"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  section-heading:
    fontFamily: "'NVIDIA-EMEA', Arial, Helvetica, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  sub-heading:
    fontFamily: "'NVIDIA-EMEA', Arial, Helvetica, sans-serif"
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: 0
  card-title:
    fontFamily: "'NVIDIA-EMEA', Arial, Helvetica, sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  body-lg:
    fontFamily: "'NVIDIA-EMEA', Arial, Helvetica, sans-serif"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.67
    letterSpacing: 0
  body:
    fontFamily: "'NVIDIA-EMEA', Arial, Helvetica, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-bold:
    fontFamily: "'NVIDIA-EMEA', Arial, Helvetica, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "'NVIDIA-EMEA', Arial, Helvetica, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.67
    letterSpacing: 0
  button-large:
    fontFamily: "'NVIDIA-EMEA', Arial, Helvetica, sans-serif"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  button:
    fontFamily: "'NVIDIA-EMEA', Arial, Helvetica, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  button-compact:
    fontFamily: "'NVIDIA-EMEA', Arial, Helvetica, sans-serif"
    fontSize: 14.4px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0.144px
  link-uppercase:
    fontFamily: "'NVIDIA-EMEA', Arial, Helvetica, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.43
    letterSpacing: 0
  caption:
    fontFamily: "'NVIDIA-EMEA', Arial, Helvetica, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0
  micro-label:
    fontFamily: "'NVIDIA-EMEA', Arial, Helvetica, sans-serif"
    fontSize: 10px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  micro:
    fontFamily: "'NVIDIA-EMEA', Arial, Helvetica, sans-serif"
    fontSize: 11px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0

rounded:
  none: 0px
  xs: 1px
  sm: 2px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 11px
  md: 13px
  lg: 16px
  xl: 24px
  xxl: 32px
  section: 48px
  section-lg: 80px

components:
  button-primary:
    backgroundColor: transparent
    textColor: "{colors.ink-on-light}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 11px 13px
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 11px 13px
  button-compact:
    backgroundColor: transparent
    textColor: "{colors.ink-on-light}"
    typography: "{typography.button-compact}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
  card-light:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.ink-on-light}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 24px
  card-dark:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 24px
  link-on-light:
    backgroundColor: transparent
    textColor: "{colors.ink-on-light}"
    typography: "{typography.body}"
  link-on-dark:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.link-uppercase}"
    height: 64px
  cookie-banner:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: 24px
---

## Overview

NVIDIA's website is a high-contrast tech-forward experience that communicates raw computational power through design restraint. Stark black-and-white foundation with NVIDIA Green (`#76b900`) as a brand fingerprint — the electric, lime-shifted green of GPU-rendered light that sits between chartreuse and kelly green.

The custom NVIDIA-EMEA font (Arial/Helvetica fallback) creates a clean, industrial European typographic voice. Headings at 36px bold with tight 1.25 line-height create dense, authoritative text blocks. The signature move is **green as signal, not surface**: borders (`2px solid #76b900`), link underlines, and CTA outlines — never as a background fill on main content.

Mood — industrial, engineering-forward, electric, GPU-precise.

## Colors

The palette is anchored by **NVIDIA Green** (`#76b900`) — the brand voltage. It appears only in borders, link underlines, CTA outlines, and active indicators; never as large surface fills. **True Black** (`#000000`) is the dominant background; **Pure White** (`#ffffff`) handles light sections and text on dark surfaces.

Extended palette: green-light (`#bff230`) for hover highlights, orange (`#df6500`), yellow (`#ef9100`/`#feeeb2`) for warm accents, red (`#e52020`/`#650b0b`) for errors, blue (`#0046a4`) for info, purple (`#4d1368`/`#f9d4ff`) and fuchsia (`#8c1c55`) for AI/premium contexts. Neutral scale: `#a7a7a7` / `#898989` / `#757575` / `#5e5e5e`.

Interactive: link hover blue `#3860be`, button hover teal `#1eaedb`, active blue `#007fff`.

## Typography

**NVIDIA-EMEA** is the sole brand font (Arial/Helvetica fallback). The voice leans heavily on **weight 700** for headings, buttons, links, and labels. Weight 400 is reserved for body text and descriptions — everything else is bold, projecting confidence and authority.

**Tight headings, relaxed body**: heading line-height is consistently 1.25, while body text relaxes to 1.50–1.67. Navigation uses `text-transform: uppercase` with weight 700 — hardware-spec-label voice. Letter-spacing is normal throughout (only compact buttons get 0.144px); the font itself carries industrial character without manipulation.

## Layout

8px base spacing with section padding 48–80px vertical. Max content width ~1200px with full-width hero sections containing centered text. Whitespace is **purposefully dense** — tighter than typical SaaS, reflecting technical content density. Card grids run 16–20px gaps creating a catalog feel rather than gallery.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow | Page backgrounds, inline text |
| Subtle | `rgba(0,0,0,0.3) 0px 0px 5px 0px` | Standard cards, modals |
| Border | `1px solid #5e5e5e` | Content dividers, section borders |
| Green accent | `2px solid #76b900` | Active elements, CTAs, selected items |
| Focus | `2px solid #000000` outline | Keyboard focus ring |

The depth system is minimal and utilitarian: essentially one shadow value (5px ambient at 30% opacity). The primary depth signal is **color contrast** — black backgrounds next to white sections, green borders on black surfaces — creating hardware-like layering where depth comes from material difference, not simulated light.

## Shapes

Border radius is razor-sharp: 1px for inline spans, **2px for everything else** (buttons, cards, containers, inputs), and 9999px (full) for circular avatars and tab indicators only. The 2px default reinforces the industrial-precision voice.

## Components

**Button primary (green border)**: transparent fill, black text on light or white text on dark, **2px solid `#76b900` border**, 2px radius, 11×13px padding, 16px / 700. Hover swaps to teal `#1eaedb`. Active swaps to bright blue `#007fff`. Used for "Learn More", "Explore Solutions".

**Button secondary**: same geometry with 1px green border. **Button compact**: 14.4px / 700 / 0.144px tracking with 1.0 line-height.

**Card light / card dark**: white or `#1a1a1a` fill, 2px radius, optional `1px solid #5e5e5e` border, optional ambient shadow. **Nav**: `#000000` background, sticky, links uppercase 14px / 700 in white. **Links on light**: black text with green underline; on dark: white text without underline. Both hover to blue `#3860be`.

## Do's and Don'ts

**Do**
- Use `#76b900` as accent — borders, underlines, highlights — never as a background fill
- Keep buttons transparent with green borders; filled backgrounds appear only on hover/active
- Use weight 700 as the dominant voice for interactive and heading elements
- Keep border radius at 2px for everything — sharp industrial rounding
- Alternate dark and light sections — green accent works identically on both
- Use uppercase 14px / 700 for navigation — hardware-label typography
- Apply line-height 1.25 for headings, 1.50–1.67 for body
- Use link hover blue (`#3860be`) regardless of default link color

**Don't**
- Don't fill large surfaces with NVIDIA Green — it's a signal color
- Don't soften corners beyond 2px — the industrial precision is core
- Don't use weight 400 for buttons, links, or headings — that voice is bold
- Don't add gradient surfaces or glassmorphism — clarity over atmosphere
- Don't introduce decorative tracking — the typeface carries the character
- Don't skip the dark/light section alternation — it's the page rhythm

## Agent Prompt Guide

**Bias toward** — `#76b900` as border/underline/CTA-outline only, dark/light section alternation, NVIDIA-EMEA weight 700 dominant, 2px radius everywhere, uppercase 14px / 700 navigation, line-height 1.25 headings vs 1.50–1.67 body, single subtle ambient shadow, link-hover `#3860be` universal.

**Reject** — green as background fill, rounded corners >2px, weight 400 on interactive text, glassmorphism or gradients on UI, decorative letter-spacing, missing dark/light section rhythm, multiple shadow values, non-uppercase navigation labels.
