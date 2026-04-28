---
version: alpha
name: Ferrari
description: |
  Ferrari's website is a digital editorial — a curated magazine where the Prancing Horse is presented with the gravitas of an art institution and the precision of Italian coachwork. The page opens onto absolute black, broken only by the iconic emblem floating alone, then unfolds in dramatic alternations between inky-dark cinematic sections and crisp white editorial panels. This chiaroscuro rhythm — darkness yielding to light, machinery yielding to human story — feels more like paging through a Ferrari yearbook than scrolling a website. Ferrari Red (`#da291c`) appears with surgical sparseness — reserved for the Subscribe CTA and accent moments that need to command immediate attention. The vast majority of the interface lives in black, white, and a calibrated gray scale (`#303030` / `#8f8f8f` / `#d2d2d2`). Two heritage yellows (`#fff200` Racing, `#f6e500` Modena) sit in the system as motorsport accents. FerrariSans — proprietary, compact, medium-weight default (500) — handles narrative authority; Body-Font handles structural annotation in uppercase with 1px letter-spacing for editorial labels. Border-radius is razor-precise at 2px throughout — engineering aesthetic, not rounded SaaS friendliness. Mood — editorial, austere, motorsport-precise, gallery-grade.

colors:
  primary: "#da291c"
  primary-active: "#b01e0a"
  primary-deep: "#9d2211"
  ink: "#181818"
  body: "#666666"
  muted: "#8f8f8f"
  muted-soft: "#969696"
  hairline: "#cccccc"
  hairline-soft: "#d2d2d2"
  canvas: "#ffffff"
  surface-dark: "#000000"
  surface-dark-soft: "#303030"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  yellow-racing: "#fff200"
  yellow-modena: "#f6e500"
  link-hover: "#3860be"
  hover-teal: "#1eaedb"
  success: "#03904a"
  error: "#f13a2c"
  info: "#4c98b9"

typography:
  section-title:
    fontFamily: "FerrariSans, Arial, Helvetica, sans-serif"
    fontSize: 26px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
  card-heading:
    fontFamily: "FerrariSans, Arial, Helvetica, sans-serif"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0
  subheading:
    fontFamily: "FerrariSans, Arial, Helvetica, sans-serif"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  ui-heading:
    fontFamily: "FerrariSans, Arial, Helvetica, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.08px
  body-bold:
    fontFamily: "FerrariSans, Arial, Helvetica, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0
  button:
    fontFamily: "FerrariSans, Arial, Helvetica, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 1.28px
  small-button:
    fontFamily: "FerrariSans, Arial, Helvetica, sans-serif"
    fontSize: 14.4px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0
  nav-link:
    fontFamily: "FerrariSans, Arial, Helvetica, sans-serif"
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.13px
  caption:
    fontFamily: "FerrariSans, Arial, Helvetica, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.195px
  micro-button:
    fontFamily: "FerrariSans, Arial, Helvetica, sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0.96px
  label-upper:
    fontFamily: "'Body-Font', FerrariSans, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.27
    letterSpacing: 1px
  micro-label:
    fontFamily: "'Body-Font', FerrariSans, Arial, sans-serif"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.27
    letterSpacing: 1px

rounded:
  none: 0px
  xs: 1px
  sm: 2px
  md: 8px
  full: 9999px

spacing:
  xxs: 2px
  xs: 5px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 25px
  xxl: 40px
  section: 80px

components:
  button-primary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.surface-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 12px 10px
  button-subscribe:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 12px 10px
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 12px 10px
  text-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-bold}"
  editorial-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.card-heading}"
    rounded: "{rounded.none}"
    padding: 16px
  hero-band-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.section-title}"
    padding: 80px
  newsletter-input:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.body-bold}"
    rounded: "{rounded.sm}"
    padding: 12px 16px
  cookie-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    padding: 24px
  category-tag:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.label-upper}"
    rounded: "{rounded.none}"
    padding: 4px 0px
  footer:
    backgroundColor: "{colors.surface-dark-soft}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption}"
    padding: 25px
---

## Overview

Ferrari's website is a digital editorial. The page opens onto absolute black, broken only by the iconic Prancing Horse emblem floating alone in its own atmosphere. Below, content unfolds in dramatic alternations between inky-dark cinematic sections and crisp white editorial panels — chiaroscuro as page rhythm.

Ferrari Red (`#da291c`) is the brand voltage but appears with surgical sparseness — only on the Subscribe CTA and accent moments that need to command immediate attention. The vast majority of the interface lives in black, white, and a calibrated gray scale.

Mood — editorial, austere, motorsport-precise, gallery-grade.

## Colors

The palette is monastically restrained for a brand built on speed and emotion. **Ferrari Red** (`#da291c`) carries Subscribe CTAs and brand-critical moments only — its power comes from restraint. **Absolute black** (`#000000`) frames hero sections and the Prancing Horse emblem; **dark surface** (`#303030`) handles the secondary footer-mode dark surface. **Pure white** (`#ffffff`) is the editorial canvas.

Two heritage yellows — Racing (`#fff200`) and Modena (`#f6e500`) — sit in the token system but only appear in motorsport contexts, never as CTAs. Semantic colors (success green `#03904a`, error `#f13a2c`, info blue `#4c98b9`) follow standard accessible-state patterns; the link-hover blue `#3860be` is dignified navy that signals interactivity without competing with red.

Body text uses **`#181818`** Near Black instead of pure `#000000` — the subtle warmth improves readability on light surfaces.

## Typography

**FerrariSans** is proprietary — exclusive to the brand and not substitutable without losing recognition. Default weight is 500 (medium), the typographic equivalent of the engine note. Display headlines run at 24–26px (compact for an automotive luxury site) with weights 400/500/700 distributed across the hierarchy.

**Body-Font** handles structural annotation: 11–12px uppercase labels with 1px letter-spacing for category tags and editorial micro-captions. The two-register system (FerrariSans for narrative voice / Body-Font for technical labels) mirrors print-magazine conventions.

Headlines use compact line-heights (1.0–1.3); body text opens to 1.5 for comfortable reading. The contrast between compressed headers and relaxed body creates visual tension.

## Layout

8px base spacing with section padding 40–80px between major content blocks. Card gaps are 16–20px. Button padding is **12px / 10px** — compact, purposeful, no excess. Maximum content width 1920px with content constraining at narrower breakpoints.

The whitespace strategy treats each section as a "gallery wall" — concept car render on black void, F1 driver pair on neutral gray, vehicle lineup parade — each gets its own room of breathing space. White space between editorial cards is moderate (not Tesla-extreme) because Ferrari is telling stories, not exhibiting single objects.

## Elevation & Depth

Ferrari's approach is nearly flat:

| Level | Treatment | Use |
|---|---|---|
| 0 (Flat) | No shadow, no border | Default for all content sections and cards |
| 1 (Subtle) | `rgb(153, 153, 153) 1px 1px 1px 0px` | Cookie consent dialogs only |
| 2 (Overlay) | `hsla(0, 0%, 7%, 0.8)` backdrop | Modal overlays and image caption backgrounds |
| 3 (Border) | `1px solid #cccccc` | Input fields, form containers |

Where Tesla avoids shadows for minimalism, Ferrari avoids them because **editorial photography provides all the visual depth needed**. Studio lighting, ground reflections, and atmospheric haze in vehicle imagery do the work CSS shadows would otherwise do. Surface contrast (black vs. white sections) and overlay transparency carry hierarchy.

## Shapes

Border radius is razor-precise:

| Token | Value | Use |
|---|---|---|
| `none` / `xs` (1px) | 0–1px | Subtle softening on small inline spans |
| `sm` (2px) | 2px | Default for buttons, inputs, interactive elements |
| `md` (8px) | 8px | Modal dialogs and overlay containers |
| `full` (9999px) | 9999px | Carousel dots, avatars, slider handles |

The 2px default is the brand marker — barely perceptible, expressing precision engineering. Rounded-pill buttons or large radii contradict the dialect.

## Components

**Button primary (white)**: white fill, black text, 1px black border, 2px radius, 12px / 10px padding. Hover shifts to teal `#1eaedb` at 0.9 opacity. **Button subscribe (red)**: Ferrari Red `#da291c` fill, white text, 2px radius — the only button using brand red. **Button ghost**: transparent fill on dark, 1px white border, white text.

**Editorial card**: white fill, no border, no shadow, image above + heading + caption below. Heading in FerrariSans 16–24px, caption in Body-Font uppercase. **Hero band dark**: full-width `#000000` with white type and full-bleed photography. **Newsletter input**: transparent fill on dark, 1px `#cccccc` border, white text, Body-Font uppercase label.

**Category tag** (Body-Font): 11–12px uppercase with 1px letter-spacing — the editorial annotation voice.

## Do's and Don'ts

**Do**
- Use Ferrari Red (`#da291c`) sparingly — only for primary CTAs and brand-critical moments
- Alternate black cinematic sections with white editorial sections — the chiaroscuro rhythm is the brand
- Use FerrariSans at weight 500 as the default heading voice
- Apply Body-Font in UPPERCASE with 1px letter-spacing for labels and category tags
- Keep border-radius at 2px for all interactive elements — razor precision
- Let editorial photography carry emotional weight — every image art-directed
- Use the Prancing Horse emblem as a standalone hero element on black
- Use `#181818` Near Black for body text instead of pure `#000000`
- Reserve heritage yellows strictly for motorsport contexts

**Don't**
- Scatter Ferrari Red across the interface as decoration
- Use rounded-pill buttons or large border-radii — 2px precision is non-negotiable
- Add box-shadows to cards — depth comes from photography
- Mix FerrariSans and Body-Font within the same text block
- Use colorful UI backgrounds — the palette is exclusively black/white/gray with red and yellow accents
- Apply text transforms to FerrariSans headings — uppercase is reserved for Body-Font
- Display low-quality imagery — every photograph must meet editorial standards
- Override semantic colors (warning `#f13a2c`, success `#03904a`) with brand red

## Agent Prompt Guide

**Bias toward** — chiaroscuro section alternation (black ↔ white), Ferrari Red `#da291c` as one-CTA-per-screen Subscribe moment, FerrariSans 500 default, Body-Font UPPERCASE 1px tracking labels, 2px corners everywhere, full-bleed studio photography, Prancing Horse emblem as isolated hero, `#181818` body text.

**Reject** — Ferrari Red sprawl across the interface, rounded-pill buttons, decorative shadows, mixed fonts within a text block, decorative use of heritage yellows, heritage yellows as CTA fills, FerrariSans uppercase, multiple brand-color CTAs per screen.
