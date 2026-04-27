---
version: alpha
name: Linear × Claude
description: A remix that blends Linear's surgical SaaS density with Claude's warm editorial restraint. Linear holds the geometry — tight grid, 1px borders, Inter UI, dashboard scan rhythm — while Claude contributes a terracotta accent and a Tiempos display serif that activates only at the top of the scale. The result reads like Linear with a soul: long-form pages breathe like an editorial, app surfaces stay surgically dense, and terracotta punctuates rather than dominates. Mood — precise, warm, quietly confident, deliberate.

colors:
  bg: "#ffffff"
  bg-alt: "#fafafa"
  surface: "#f4f4f5"
  text: "#0f0f14"
  text-muted: "#6b6b76"
  text-dim: "#a0a0ab"
  border: "#e4e4e7"
  border-strong: "#d4d4d8"
  accent: "#c96442"
  accent-hover: "#b55738"
  accent-soft: "#e89268"
  on-accent: "#f5f5f5"
  danger: "#ff6b6b"
  bg-dark: "#0f0f14"
  surface-dark: "#1a1a20"
  text-dark: "#f5f5f5"

typography:
  display-xl:
    fontFamily: "Tiempos Headline, Iowan Old Style, Georgia, serif"
    fontSize: 64px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -0.64px
  display-lg:
    fontFamily: "Tiempos Headline, Iowan Old Style, Georgia, serif"
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.48px
  display-md:
    fontFamily: "Tiempos Headline, Iowan Old Style, Georgia, serif"
    fontSize: 36px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: -0.36px
  display-sm:
    fontFamily: "Tiempos Headline, Iowan Old Style, Georgia, serif"
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -0.28px
  title-lg:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.11px
  title-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: 0
  body-lg:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  micro:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0.11px
  code:
    fontFamily: "Berkeley Mono, ui-monospace, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  sm: 4px
  md: 6px
  lg: 8px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 12px
  "4": 16px
  "6": 24px
  "8": 32px
  "12": 48px
  "16": 64px
  "24": 96px
---

## Overview

Linear × Claude is a blend of Linear's surgical SaaS density with Claude's warm editorial restraint. Linear contributes the geometry — a tight 4px-base scale, Inter for UI, 1px borders, sharp 6px button radii, dashboard-scan layouts. Claude contributes the soul — a terracotta accent in place of Linear's purple, a Tiempos display serif at the top of the scale only, and a long-form reading column for editorial surfaces.

Dashboard scan patterns meet long-form reading rhythm. Body reads like an editorial; UI feels like Linear. Terracotta punctuates — never dominates. Clients who say "like Linear but friendlier" land here.

Mood words — precise, warm, quietly confident, deliberate.

## Colors

The neutral ramp comes from Linear: cold whites for dashboard clarity (`bg` `#ffffff`, `bg-alt` `#fafafa`, `surface` `#f4f4f5`), with a near-black ink (`text` `#0f0f14`) and a pair of borders (`border` `#e4e4e7`, `border-strong` `#d4d4d8`) that handle depth without shadow.

The accent flips the brand temperature. Claude's terracotta (`accent` `#c96442`, hover `#b55738`, soft `#e89268`) replaces Linear's purple wherever an emotional cue is needed — primary CTAs, link underlines, focus rings, pull-quote rules. Terracotta reads as warmth; purple read as tech-startup default. The trade was deliberate.

Danger is held at Linear's `#ff6b6b` so error states do not clash with the warm accent. Dark mode inherits Linear's density discipline (`bg-dark` `#0f0f14`, `surface-dark` `#1a1a20`, `text-dark` `#f5f5f5`).

## Typography

- **Display headlines** use `Tiempos Headline` (fallback `Iowan Old Style`, `Georgia`) at weight 500. The serif activates only at 28px and above — anything smaller would read decorative against the dense Inter UI.
- **UI, body, and small headings** use `Inter` (system-ui fallback) at weights 400 / 500 / 600. Body holds at 16px on marketing surfaces, 14px in app shells.
- **Mono** uses `Berkeley Mono` for code blocks, transaction IDs, and `kbd` hints.

Type scale ladder — 11 / 13 / 14 / 16 / 18 / 22 / 28 / 36 / 48 / 64 px. Linear's tight ramp held; Tiempos sits only at the top three steps.

## Layout

Two layout modes. Page type — not component — picks which applies.

- **App / dashboard mode (Linear discipline)** — 1200px max, 24px gutter, 12-column, 4px base unit. Dense by default.
- **Editorial / marketing mode (Claude restraint)** — 680px reading column for long-form, 1180px for app shells. Generous vertical rhythm with 96px section breaks.

Spacing scale — 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96.

App-mode collapses to Linear's mobile patterns (bottom nav, stacked tables) below 768px. Editorial-mode keeps 18px body and scales the serif h1 from 64px to 36px.

## Elevation & Depth

Flat by default. Depth is communicated through 1px borders and tonal surface lifts — never card shadows. The only place shadow appears is **popovers and dropdowns** at `0 2px 8px rgba(15, 15, 20, 0.04)`. Both parents agreed here, so there is no arbitration to manage.

## Shapes

- **Buttons (app)** — 6px radius, padding 8/14, weight 500. Sharp Linear geometry.
- **Cards** — 8px radius, 1px border, no shadow.
- **Inputs** — 6px radius, 1px border, padding 8/12. Focus shifts to a 2px terracotta ring with 2px offset.
- **Keyboard hints (`kbd`)** — 4px radius, 11px mono on `surface` background.

The radii intentionally stay small. Pills and large rounds belong to Mercury or Claude proper; this remix earns its warmth through type and color, not curvature.

## Components

**Buttons**
- Primary — terracotta fill (`accent` `#c96442`), `on-accent` text, 6px radius, weight 500. Hover transitions to `accent-hover`. No shadow, no lift.
- Secondary — `surface` fill, `text` color, 1px `border` outline.

**Cards**
- `bg-alt` fill, 1px `border`, 8px radius, no shadow. Hover shifts the border to `border-strong` — a Linear move, never a colored hover border.

**Inputs**
- 1px `border`, 6px radius, 8/12 padding. Focus ring is 2px terracotta with 2px offset — Claude's warm focus on Linear's geometry.

**Long-form article surfaces**
- 680px reading column, 18px body, generous vertical rhythm. Pull-quotes set in Tiempos italic with an `accent-soft` left rule.

**Keyboard hints**
- Linear's `kbd` style — mono characters, 11px, `surface` background, 4px radius.

## Do's and Don'ts

**Do**
- Use Tiempos at 28px and above only.
- Rotate between app-mode and editorial-mode by page type — don't blend within a page.
- Treat terracotta as punctuation. One accent moment per viewport.
- Keep UI density Linear-tight. Resist over-generous whitespace in app surfaces.

**Don't**
- Mix purple and terracotta. Terracotta won; honor it.
- Set Tiempos below 22px — it reads decorative, not functional.
- Add drop shadows to cards or hover lifts to tiles.
- Switch to a cream body (`#f4f3ee`) inside dashboards. Editorial cream belongs to Claude proper, not this remix.

## Agent Prompt Guide

**Bias toward** — Linear geometry everywhere, terracotta accent as the only warm color, Tiempos only at display sizes (28px+), dual-mode layout (app vs editorial) chosen per page, 1px border-based depth, Inter body for density, Berkeley Mono for code.

**Reject** — Linear purple (replaced by terracotta), cream dashboard backgrounds, Tiempos in UI controls or below 22px, drop shadows on cards, colored hover borders, over-generous whitespace in app mode, a second saturated accent.
