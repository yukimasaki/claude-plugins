---
version: alpha
name: Datadog
description: An observability dashboard system where chrome shrinks and charts dominate. The in-app shell sits on a deep navy ink so multi-series charts pop, while marketing pages stay light and editorial. One royal purple is the sole branded hue; everything else is a measured chart color or a status state. Tabular National numerals on every metric, 1px tick marks on charts, and dense 28px table rows give it the feel of a network operations console rather than a SaaS app. Mood — dense, technical, on-call, never decorative.

colors:
  primary: "#632ca6"
  primary-hover: "#51228a"
  primary-soft: "#774aa4"
  ink: "#110617"
  body: "#51495d"
  canvas: "#ffffff"
  surface-alt: "#f7f6f9"
  hairline: "#e3e0e8"
  canvas-app: "#110617"
  surface-app-alt: "#1a0f23"
  surface-app: "#2a1f37"
  on-app: "#ffffff"
  on-app-muted: "#b8b0c4"
  hairline-app: "#3d3050"
  on-primary: "#ffffff"
  success: "#29a347"
  warning: "#f4b400"
  error: "#d73a49"
  info: "#4a90e2"
  chart-1: "#774aa4"
  chart-2: "#4a90e2"
  chart-3: "#29a347"
  chart-4: "#f4b400"
  chart-5: "#ec6d3f"
  chart-6: "#d73a49"
  chart-7: "#2bb5b2"
  chart-8: "#b86bd9"

typography:
  display-xl:
    fontFamily: "National 2 Web, NationalWeb, Helvetica Neue, Arial, sans-serif"
    fontSize: 68px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.68px
  display-lg:
    fontFamily: "National 2 Web, NationalWeb, Helvetica Neue, Arial, sans-serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.48px
  display-md:
    fontFamily: "National 2 Web, NationalWeb, Helvetica Neue, Arial, sans-serif"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.36px
  title-lg:
    fontFamily: "National 2 Web, NationalWeb, Helvetica Neue, Arial, sans-serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.28px
  title-md:
    fontFamily: "National 2 Web, NationalWeb, Helvetica Neue, Arial, sans-serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0
  body-md:
    fontFamily: "National 2 Web, NationalWeb, Helvetica Neue, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "National 2 Web, NationalWeb, Helvetica Neue, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  label:
    fontFamily: "National 2 Web, NationalWeb, Helvetica Neue, Arial, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  eyebrow:
    fontFamily: "National 2 Web, NationalWeb, Helvetica Neue, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  caption:
    fontFamily: "National 2 Web, NationalWeb, Helvetica Neue, Arial, sans-serif"
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  numerals-tabular:
    fontFamily: "National 2 Web, NationalWeb, Helvetica Neue, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "tnum"
  code:
    fontFamily: "Roboto Mono, SF Mono, JetBrains Mono, ui-monospace, monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  sm: 4px
  md: 4px
  lg: 4px

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

The product is the dashboard. Chrome shrinks, charts dominate, and density is the feature. Marketing chrome stays light and editorial; the in-app shell drops into deep navy so multi-series charts pop. One royal purple is the only branded color — everything else is a measured chart hue or a status state.

Mood words — dense, technical, on-call, never decorative.

## Colors

The system runs two surface modes. Marketing surfaces use white (`canvas` `#ffffff`) and a near-black ink (`ink` `#110617`) with cool gray hairlines. The in-app shell uses the same near-black as canvas (`canvas-app` `#110617`), with progressively lighter surface lifts (`surface-app-alt` `#1a0f23`, `surface-app` `#2a1f37`) and white text.

Royal purple (`primary` `#632ca6`) is the only branded hue. Status colors (`success` / `warning` / `error` / `info`) are reserved for state — never reuse green-status for an arbitrary chart series, viewers misread it as "healthy". The eight-color categorical chart palette (`chart-1` through `chart-8`) is declared in fixed order and locked across all dashboards so that colors carry meaning across views.

## Typography

- **UI and body** use `National 2 Web` (NationalWeb), fallback `Helvetica Neue`, `Arial`. Weights 400 / 500 / 700.
- **Headlines** use National 2 weight 700. Marketing display goes to 68px.
- **Numerals** use tabular figures globally on dashboards, alerts, and query rows via the `tnum` OpenType feature.
- **Code and query language** use `Roboto Mono`, fallback `SF Mono`, `JetBrains Mono`. Used for query syntax, log lines, and span IDs.

Type scale ladder — 11 / 12 / 13 / 14 / 16 / 20 / 28 / 36 / 48 / 68 px.

## Layout

- App shell — 100% viewport, left nav 200px, content fills the right pane
- Marketing — 1280px max width, 24px gutter, 12-column grid
- Spacing scale rooted on 4px — 4 / 8 / 12 / 16 / 24 / 32 / 48
- Dashboards default to a 12-column draggable grid; tiles snap to 6 / 4 / 3 / 2 widths
- Left nav collapses to a 48px icon rail at 1280px and is hidden behind a hamburger below 768px
- Dashboard tiles reflow 12 → 6 → 3 → 1 column at 1440 / 1024 / 768
- Tables become stacked key-value cards below 640px while keeping numbers in tabular figures
- Chart tooltips become bottom-sheet on mobile

## Elevation & Depth

Datadog is **flat by default**. Depth is communicated through 1px hairline borders and tonal surface shifts, not shadows. Modals get `0 16px 48px rgba(17, 6, 23, 0.40)` over a 60% scrim. Tooltips lift via a 1px accent border, not shadow. Card lift, neumorphism, and soft glow are explicitly out.

## Shapes

- **Buttons** — 4px radius, no rounder
- **Cards / dashboard tiles** — 4px radius, 1px hairline border
- **Inputs** — 4px radius, 1px border, focus ring 2px purple with 1px offset
- **Tooltips** — 4px radius, 1px accent-soft border

The 4px ceiling keeps the geometry reading as dashboard chrome rather than SaaS card.

## Components

**Buttons**
- Primary — purple fill (`primary` `#632ca6`), white text, 4px radius, padding 8/14, weight 500
- Secondary on light — white fill, 1px `hairline`, ink text
- Secondary on dark shell — navy `#110617` fill, 1px white border, white text
- Destructive — `error` fill, white text, only on confirm modals

**Cards / dashboard tiles**
- App — `surface-app` fill, 1px `hairline-app`, 4px radius, header in 12px uppercase eyebrow
- Marketing — white fill, 1px `hairline`, 4px radius
- Hover — 1px `primary-soft` border, no shadow, no lift

**Inputs**
- 1px border, 4px radius, padding 6/10
- Focus — 2px purple ring with 1px offset

**Tables**
- 28px row height
- Hairline border separators
- Sticky header in 11px uppercase mono on `surface-app-alt`
- Tabular numerals throughout, right-aligned numbers, left-aligned strings

**Charts**
- 1px tick marks, axis labels in `on-app-muted` 11px, gridlines `hairline-app` at 30% opacity
- Series rendered in `chart-1..8` declared order; legend chips top-right with 8px swatch
- Tooltip — `canvas-app` fill, white text, 1px `primary-soft` border, 4px radius

## Do's and Don'ts

**Do**
- Render every metric in tabular National numerals
- Lock chart series to the declared categorical palette order across all dashboards — colors carry meaning across views
- Keep the in-app shell on `#110617` navy. Light mode is for marketing only

**Don't**
- Use status green for arbitrary chart series
- Soften corners past 4px — this is dashboard chrome, not a SaaS card
- Replace tabular figures with proportional figures inside metric tiles
- Add gradient fills under area charts. Solid fills with 30% opacity only
- Introduce a second brand color "for variety" — purple is the only branded hue

## Agent Prompt Guide

**Bias toward** — deep navy `#110617` app shell, royal-purple `#632ca6` brand, National 2 with tabular numerals, 4px radii, 8-color categorical chart palette in declared order, dense 28px table rows, persistent left nav, hairline-only borders.

**Reject** — light-mode dashboards, multi-color brand palettes, gradient chart fills, rounded "bubble" tiles, proportional numerals on metrics, hero illustrations on the in-app shell, decorative emoji in chrome.
