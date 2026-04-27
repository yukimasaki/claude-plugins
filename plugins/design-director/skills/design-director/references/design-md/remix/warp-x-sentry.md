---
version: alpha
name: Warp × Sentry
description: A pro-tool developer dashboard that fuses Warp's deep-navy terminal density with Sentry's lilac action layer and left-border alert pattern. Warp owns the surface stack, Roobert UI, JetBrains Mono numerals, and the persistent sidebar shell; Sentry replaces Warp's teal with a brighter lilac so the chromatic action color harmonizes with coral warnings instead of fighting them. Issue rows borrow Sentry's 4px left-border severity stripe, while empty-state illustrations use a lilac-grey tint reserved for art only. Mood — technical, calm, persistent, focused.

colors:
  bg: "#0b0d14"
  bg-alt: "#11141d"
  surface: "#161a25"
  surface-2: "#1e2331"
  text: "#f1f1f4"
  text-muted: "#9aa1b3"
  text-dim: "#5f6580"
  border: "#232838"
  border-strong: "#2e3447"
  accent: "#7553f6"
  accent-hover: "#8967ff"
  accent-soft: "#584774"
  warning: "#ff7a59"
  danger: "#f6827d"
  success: "#5ee78a"
  on-accent: "#0b0d14"

typography:
  display-xl:
    fontFamily: "Rubik, Roobert, Inter, system-ui, sans-serif"
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -1px
  display-lg:
    fontFamily: "Rubik, Roobert, Inter, system-ui, sans-serif"
    fontSize: 44px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.5px
  display-md:
    fontFamily: "Rubik, Roobert, Inter, system-ui, sans-serif"
    fontSize: 34px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.3px
  display-sm:
    fontFamily: "Rubik, Roobert, Inter, system-ui, sans-serif"
    fontSize: 26px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0
  title-lg:
    fontFamily: "Roobert, Inter, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0
  title-md:
    fontFamily: "Roobert, Inter, system-ui, sans-serif"
    fontSize: 17px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "Roobert, Inter, system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "Roobert, Inter, system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "Roobert, Inter, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  micro:
    fontFamily: "Roobert, Inter, system-ui, sans-serif"
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.2px
  numerals-tabular:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "tnum"
  code:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  sm: 4px
  md: 8px
  lg: 10px
  pill: 999px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 12px
  "4": 16px
  "6": 24px
  "8": 32px
  "12": 48px
---

## Overview

Warp × Sentry is a blend of Warp's terminal-grade developer dashboard and Sentry's emotive observability palette. From Warp comes the deep-navy surface stack, Roobert UI face, JetBrains Mono numerals, persistent sidebar shell, and the dark-only discipline that makes engineers feel at home. From Sentry comes the lilac action color, the 4px left-border alert-row pattern, and the lilac-grey empty-state illustration tint that gives the product chrome an emotional register without softening its rigor.

The arbitration is decisive. Warp's teal is dropped — too cold next to Sentry's pink-coral danger state, and the two clashed at error/action proximity. Sentry lilac wins because it harmonizes with Warp's warning coral instead of fighting it. Sentry's lighter `#362d59` background loses to Warp's deeper `#0b0d14` because the terminal-feel is non-negotiable.

Mood — technical, calm, persistent, focused.

## Colors

The palette anchors on Warp's four-tier surface stack — `bg` `#0b0d14` for the canvas, `bg-alt` `#11141d` for sidebars, `surface` `#161a25` for cards, and `surface-2` `#1e2331` for elevated rows or modals. Hairline `border` `#232838` and `border-strong` `#2e3447` carry depth without shadows.

Lilac (`accent` `#7553f6`) is the only chromatic action color — used for primary buttons, focus rings, and selection states. `accent-soft` `#584774` is reserved for empty-state illustration tints and never for action.

State colors stay disciplined — `warning` `#ff7a59` (Warp coral) for cautions, `danger` `#f6827d` (Sentry pink-coral) for incidents, `success` `#5ee78a` (Warp green) for resolved. Sentry's pink-coral and Warp's coral live close on the wheel; always order danger above warning in lists so the warmer hue dominates upward visual flow.

## Typography

- **UI** uses `Roobert` (fallback `Inter`, system-ui) — Warp's UI face. Weights 400/500.
- **Display headlines** use `Rubik` weight 600 (Sentry's display face) — capped to 26px+ only. Below that threshold, Rubik reads rounded-soft and kills technical density.
- **Numerals and code** use `JetBrains Mono` — tabular figures globally on metrics, counts, and timestamps.

Type scale ladder — 11 / 12 / 13 / 15 / 17 / 20 / 26 / 34 / 44 / 56 px.

## Layout

- App shell — full-width with persistent 240px sidebar, fluid main content
- Marketing pages — 1180px max width, 24px gutter, 12-column grid (Sentry's narrower marketing rhythm)
- Spacing scale rooted on 4px — 4 / 8 / 12 / 16 / 24 / 32 / 48
- Sidebar collapses to icon rail at 1024px; full overlay at 768px
- Issue rows stack severity-icon + title at 640px with the count moving to row two

Marketing hero scales 56 → 34 → 26 across breakpoints.

## Elevation & Depth

The dashboard is **flat by default**. Depth comes from Warp's tonal surface stack — `bg → surface → surface-2 → modal` — not from drop shadows. The only place shadow appears is on **modals** (`0 24px 48px rgba(0, 0, 0, 0.55)`). Cards never lift; both parents rejected card shadows and that consensus holds.

## Shapes

- **Buttons** — 8px radius
- **Cards** — 10px radius, 1px hairline border, no shadow
- **Inputs** — 8px radius, 1px `border-strong`, 2px lilac focus ring
- **Issue rows** — 4px left border in `warning` or `danger`, otherwise sharp-edged on the row itself

The geometry is unapologetically rectilinear — pill shapes are reserved for status badges and tags only.

## Components

**Buttons**
- Primary — lilac fill (`accent` `#7553f6`), `#0b0d14` text, 8px radius, padding 8/14, weight 500
- Secondary — `surface-2` fill, `text` color, 1px `border-strong` outline
- Destructive — `danger` fill, `#0b0d14` text

**Cards / blocks**
- `surface` fill, 1px `border`, 10px radius
- Empty states use `accent-soft` lilac-grey illustration tint — Sentry's signature move

**Inputs**
- `bg-alt` fill, 1px `border-strong`, 8px radius
- Focus state — 2px `accent` lilac ring

**Alert / issue rows**
- 4px left border in `warning` or `danger` (Sentry's pattern), `surface` fill
- Severity icon left, title middle, count right (JetBrains Mono, tabular)

**Sidebar**
- 240px wide, `bg-alt` fill, hairline divider on the right edge
- Collapses to icon rail at 1024px, full overlay at 768px

## Do's and Don'ts

**Do**
- Use lilac as the only chromatic action color
- Apply Sentry's left-border alert-row pattern wherever a list of issues, incidents, or anomalies appears
- Render numbers in JetBrains Mono tabular on every metric surface
- Order danger above warning in stacked lists so the pinker hue flows upward

**Don't**
- Re-introduce Warp's teal accent — lilac won; honor it
- Use Rubik below 26px — it kills technical density and reads rounded-soft
- Add a third chromatic accent for "info" or "highlight" — use the muted-text ramp instead
- Use `accent-soft` for action — it's reserved for illustration and empty-state tints only
- Add card shadows; depth comes from the surface stack

## Agent Prompt Guide

**Bias toward** — Warp's deep-navy surface stack, Sentry lilac for action only, Rubik display at 26px+, JetBrains Mono tabular numerals on metrics, left-border alert rows, persistent sidebar, dark-only theme.

**Reject** — Warp's teal accent, Rubik in UI controls, drop-shadowed cards, light-mode variants, mixing lilac with a second chromatic accent, lilac-grey on action surfaces.
