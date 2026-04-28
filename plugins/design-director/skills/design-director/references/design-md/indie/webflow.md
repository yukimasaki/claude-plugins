---
version: alpha
name: Webflow
description: |
  Webflow's website is a tool-forward platform that communicates "design without code" through clean white surfaces, the signature **Webflow Blue** (`#146ef5`), and a rich secondary palette (purple, pink, green, orange, yellow, red) that signals "this is a creative platform, not a corporate SaaS." The custom **WF Visual Sans Variable** font carries the system at modest weights — 600 for display headlines (with -0.8px letter-spacing at 80px) and 500 for body — feeling confident and precise without shouting. **Inconsolata** handles code as a companion monospace. The system trusts conservative 4–8px border-radius (sharp, not rounded), conservative neutral text (`#080808` near-black), and a **5-layer cascading shadow stack** as its signature elevation device. Buttons use a `translate(6px)` hover animation as the system's tactile micro-interaction. Mood — confident, creative, precise, tool-forward.

colors:
  primary: "#146ef5"
  primary-hover: "#0055d4"
  primary-light: "#3b89ff"
  primary-dark: "#006acc"
  ink: "#080808"
  body: "#080808"
  body-strong: "#222222"
  body-mid: "#363636"
  muted: "#5a5a5a"
  muted-soft: "#ababab"
  canvas: "#ffffff"
  surface-card: "#ffffff"
  hairline: "#d8d8d8"
  hairline-hover: "#898989"
  on-primary: "#ffffff"
  secondary-purple: "#7a3dff"
  secondary-pink: "#ed52cb"
  secondary-green: "#00d722"
  secondary-orange: "#ff6b00"
  secondary-yellow: "#ffae13"
  secondary-red: "#ee1d36"
  badge-blue-bg: "#e7f0ff"
  badge-blue-text: "#146ef5"
  success: "#00d722"
  warning: "#ffae13"
  error: "#ee1d36"

typography:
  display-xl:
    fontFamily: "'WF Visual Sans Variable', Arial, sans-serif"
    fontSize: 80px
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: -0.8px
  display-lg:
    fontFamily: "'WF Visual Sans Variable', Arial, sans-serif"
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: 0
  display-md:
    fontFamily: "'WF Visual Sans Variable', Arial, sans-serif"
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0
  title-md:
    fontFamily: "'WF Visual Sans Variable', Arial, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  body-lg:
    fontFamily: "'WF Visual Sans Variable', Arial, sans-serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "'WF Visual Sans Variable', Arial, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: -0.16px
  body-sm:
    fontFamily: "'WF Visual Sans Variable', Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button:
    fontFamily: "'WF Visual Sans Variable', Arial, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: -0.16px
  caption:
    fontFamily: "'WF Visual Sans Variable', Arial, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  uppercase-label:
    fontFamily: "'WF Visual Sans Variable', Arial, sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 1.5px
  badge-uppercase:
    fontFamily: "'WF Visual Sans Variable', Arial, sans-serif"
    fontSize: 12.8px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0
  micro-uppercase:
    fontFamily: "'WF Visual Sans Variable', Arial, sans-serif"
    fontSize: 10px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 1px
  code:
    fontFamily: "Inconsolata, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 8px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 12px 20px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
  button-transparent:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 12px 20px
  button-white-circle:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 48px
  badge-blue:
    backgroundColor: "{colors.badge-blue-bg}"
    textColor: "{colors.badge-blue-text}"
    typography: "{typography.badge-uppercase}"
    rounded: "{rounded.sm}"
    padding: 4px 10px
  card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.sm}"
    padding: 24px
  card-elevated:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: 32px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 10px 12px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    height: 64px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    padding: 64px
---

## Overview

Webflow's web presence is a tool-forward platform that communicates "design without code" through clean white surfaces and a confident-but-not-loud color system. The canvas is pure white (`{colors.canvas}` — #ffffff) carrying near-black ink (`{colors.ink}` — #080808). **Webflow Blue** (`{colors.primary}` — #146ef5) is the primary CTA and link color, anchoring the brand identity.

What makes Webflow distinctive is the **rich secondary palette** — purple, pink, green, orange, yellow, red — that signals "this is a creative platform" rather than a corporate SaaS. These secondaries are reserved for category accents, secondary feature illustrations, and decorative moments — never on primary CTAs.

The custom **WF Visual Sans Variable** font runs at modest weights: 600 for display (with -0.8px letter-spacing at 80px), 500 for body. **Inconsolata** handles code as a companion monospace. Border-radius is conservative (4–8px, sharp not rounded). The signature elevation move is a **5-layer cascading shadow stack**, and the system's tactile micro-interaction is a `translate(6px)` button hover animation.

Mood — confident, creative, precise, tool-forward.

## Colors

The palette anchors on white canvas + near-black ink + Webflow Blue. The brand blue ladder runs `{colors.primary-dark}` (#006acc) → `{colors.primary}` (#146ef5) → `{colors.primary-light}` (#3b89ff), with `{colors.primary-hover}` (#0055d4) for press state.

The neutral text scale runs Near-Black `{colors.ink}` (#080808) → Gray 800 (#222222) → Gray 700 (#363636) → Mid Gray (#5a5a5a) → Gray 300 (#ababab). Borders use `{colors.hairline}` (#d8d8d8) at rest, darkening to `{colors.hairline-hover}` (#898989) on interactive hover.

The **rich secondary palette** is the brand's distinctive trait — purple (#7a3dff), pink (#ed52cb), green (#00d722), orange (#ff6b00), yellow (#ffae13), red (#ee1d36). Each gets used as a category accent or feature highlight, never on primary CTAs. The secondaries plus blue together signal a designer-tool aesthetic distinct from typical enterprise SaaS.

## Typography

WF Visual Sans Variable is the single primary font. **Two-weight discipline**: 600 (display) and 500 (body / UI). Weight 400 is reserved for caption / fine-print.

- Display sizes (80 / 56px) use weight 600 with -0.8px or 0 letter-spacing
- Sub-heads (32px) drop to weight 500
- Body (16px) uses weight 500 with -0.16px letter-spacing — slightly compressed
- Uppercase labels (15 / 12.8 / 10px) use **wide positive letter-spacing** (1.5px / 0 / 1px) — the signature category-tag treatment

Inconsolata is the companion monospace for code blocks.

## Layout

- Spacing scale uses fractional values (1 / 2.4 / 3.2 / 4 / 5.6 / 6 / 7.2 / 8 / 9.6 / 12 / 16 / 24px) for fine control
- Section vertical padding 80px+
- Max content width ~1200px centered
- Standard 12-column grid; feature sections in 2–3 column card layouts
- Breakpoints: 479px / 768px / 992px

## Elevation & Depth

The signature elevation device is the **5-layer cascading shadow stack**:

```
rgba(0,0,0,0)    0px 84px 24px,
rgba(0,0,0,0.01) 0px 54px 22px,
rgba(0,0,0,0.04) 0px 30px 18px,
rgba(0,0,0,0.08) 0px 13px 13px,
rgba(0,0,0,0.09) 0px  3px  7px
```

Each layer has a distinct architectural purpose — the outer 84px layer carries atmospheric ambient occlusion (at 0% opacity, creating spatial reservation), the middle layers create the diffused halo, and the tightest 3/7 layer at 9% opacity is the directional drop. Cumulative cascade rather than a single hard shadow.

The system also uses `1px solid {colors.hairline}` for non-elevated containment.

## Shapes

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0 | Reserved |
| `{rounded.xs}` | 2px | Tight inline elements |
| `{rounded.sm}` | 4px | Buttons, badges, cards (workhorse) |
| `{rounded.md}` | 8px | Larger feature containers |
| `{rounded.full}` | 9999px / 50% | Circular icon buttons |

The radius is **conservative** — 4–8px is the entire functional range. Webflow does not use pill CTAs; the sharper geometry signals tool-precision.

## Components

**`button-primary`** — Webflow Blue fill (`{colors.primary}`), white text, 4px radius, 12/20 padding. Hover darkens to `{colors.primary-hover}` and applies `transform: translate(6px)` — the signature tactile micro-interaction.

**`button-transparent`** — Transparent fill, near-black text, 4px radius, same `translate(6px)` hover animation.

**`button-white-circle`** — White solid circle, 50% radius. Used for icon buttons and decorative moments.

**`badge-blue`** — Tinted blue surface for category tags. Background `{colors.badge-blue-bg}`, text `{colors.badge-blue-text}`, 4px radius, weight 600 uppercase at 12.8px.

**`card`** — White fill, 1px `{colors.hairline}` border, 4px radius. Used for feature cards.

**`card-elevated`** — Same with 8px radius and the 5-layer cascading shadow stack.

**`text-input`** — White fill, 1px `{colors.hairline}` border, 4px radius. Hover darkens border to `{colors.hairline-hover}`; focus shifts to `{colors.primary}`.

**`top-nav`** — Sticky white header with body-sm nav links, blue primary CTA right-aligned. Mobile collapse.

**`footer`** — White surface with muted captions.

## Do's and Don'ts

**Do**
- Use Webflow Blue (`{colors.primary}` — #146ef5) for primary CTAs and links — the only blue allowed on a CTA
- Set headlines in WF Visual Sans Variable weight 600 with -0.8px letter-spacing at 80px
- Use weight 500 for body — the system rarely drops to 400
- Apply 4px radius as the workhorse — buttons / badges / cards / inputs all sit there
- Apply `transform: translate(6px)` on button hover — the system's tactile signature
- Use the 5-layer cascading shadow stack for card elevation
- Reserve the secondary palette (purple / pink / green / orange / yellow / red) for category accents, secondary illustrations, and decorative moments
- Use uppercase labels with wide tracking (1.5px at 15px) for category tags

**Don't**
- Don't round beyond 8px on functional elements — the conservative geometry signals tool-precision
- Don't use the secondary palette on primary CTAs — Webflow Blue is the only CTA color
- Don't drop weight below 500 on body — the system stays modest but firm
- Don't use a single hard drop shadow — the 5-layer cascade is the signature
- Don't apply pill radius on action buttons — Webflow doesn't use pills
- Don't introduce a serif or display font — WF Visual Sans Variable is the single voice

## Agent Prompt Guide

**Bias toward** — white canvas with near-black ink, Webflow Blue primary CTAs, WF Visual Sans Variable at weights 500 (body) and 600 (display) with -0.8px letter-spacing on hero, conservative 4–8px radius, 5-layer cascading shadow stack on cards, `translate(6px)` button hover animation, rich secondary palette for category accents only, uppercase labels with wide positive tracking.

**Reject** — pill-radius CTAs, secondary colors on primary CTAs, single hard drop shadows, weight 400 on body, serifs or display alternates, radius beyond 8px on functional elements.
