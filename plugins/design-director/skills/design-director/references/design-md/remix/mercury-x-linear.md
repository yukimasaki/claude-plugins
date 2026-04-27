---
version: alpha
name: Mercury × Linear
description: A remix that blends Mercury's cream-canvas fintech warmth with Linear's surgical UI density. Mercury holds the canvas — warm cream paper, warm-gray ink, indigo as the only saturated voice, tabular numerals on every money figure — while Linear contributes the geometry — 4px base, dense tables, sharp button radii, command-bar muscle memory, hairline borders. The result reads like a financial broadsheet that opens into a Linear-grade dashboard. Mood — trustworthy, deliberate, fast, unhurried at rest.

colors:
  bg: "#f6f5f2"
  bg-alt: "#ebe8e0"
  surface: "#ffffff"
  surface-alt: "#fbfaf6"
  text: "#2a2924"
  text-muted: "#5a5548"
  text-dim: "#8a8478"
  border: "#ded9ca"
  border-strong: "#c9c3b3"
  accent: "#5266eb"
  accent-hover: "#4255d4"
  accent-soft: "#e2e6fb"
  on-accent: "#ffffff"
  success: "#2f7d57"
  warning: "#c98a42"
  danger: "#b54a3a"
  bg-dark: "#15140f"
  bg-dark-alt: "#1d1c16"
  surface-dark: "#25241d"
  text-dark: "#f6f5f2"
  text-dark-muted: "#a8a394"
  border-dark: "#34322a"

typography:
  display-xl:
    fontFamily: "Arcadia Display, Tiempos Headline, Iowan Old Style, Georgia, serif"
    fontSize: 72px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -0.72px
  display-lg:
    fontFamily: "Arcadia Display, Tiempos Headline, Iowan Old Style, Georgia, serif"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -0.48px
  display-md:
    fontFamily: "Arcadia Display, Tiempos Headline, Iowan Old Style, Georgia, serif"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -0.36px
  title-lg:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.14px
  title-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  title-sm:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
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
  numerals-tabular:
    fontFamily: "Arcadia, Inter, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "tnum"
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
  xl: 12px
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
  "24": 96px
---

## Overview

Mercury × Linear is a blend of Mercury's cream-canvas fintech warmth with Linear's surgical UI density. Mercury sets the canvas — cream paper, warm-gray ink, indigo as the only saturated voice, tabular numerals on every money figure. Linear sets the geometry — 4px base, dense tables, sharp button radii, keyboard-first affordances, command-bar muscle memory, hairline borders.

The page reads like a financial broadsheet that opens into a Linear-grade dashboard. Editorial restraint above the fold; surgical density inside the app. Built for B2B finance dashboards, billing consoles, and treasury tools that need Linear-grade information density without losing the trust-broadcasting warmth Mercury earned.

Mood words — trustworthy, deliberate, fast, unhurried at rest.

## Colors

The palette is Mercury's cream canvas held throughout. `bg` `#f6f5f2` is paper, not pure white — Linear's `#ffffff` would kill the warmth. `bg-alt` `#ebe8e0` provides tonal lift, `surface` `#ffffff` lifts cards above the cream, and `surface-alt` `#fbfaf6` handles row hover states. Warm grays do all of the secondary work — `text` `#2a2924`, `text-muted` `#5a5548`, `text-dim` `#8a8478`.

Indigo (`accent` `#5266eb`) is the only saturated color on the page. It replaces Linear's purple wherever a fintech trust signal is needed — primary CTAs, focus rings, selected-row indicators. Indigo and Linear's purple sit close on the wheel, and that risk is real: token-lock indigo and remove purple from the swatch library.

Status colors stay muted — `success` `#2f7d57`, `warning` `#c98a42`, `danger` `#b54a3a`. Dark mode adopts Linear's discipline but warmer than pitch — cream-on-coal (`bg-dark` `#15140f`, `text-dark` `#f6f5f2`), never pure black.

## Typography

- **Display headlines** (marketing, statements) use `Arcadia Display` (fallback `Tiempos Headline`, `Iowan Old Style`, `Georgia`) at weight 400 with tight letter-spacing. The serif fires only at 36px and above.
- **App headings and body** use `Inter` (system-ui fallback) at weights 400 / 500 / 600. App body holds at 14/22; marketing body holds at 16/26.
- **Numerals** on every dollar, every row, every chart label use Arcadia's tabular variant via the `tnum` OpenType feature. Proportional figures on money are not allowed.
- **Mono** uses `Berkeley Mono` for transaction IDs, command-bar input, and code.

Type scale ladder — 11 / 13 / 14 / 16 / 18 / 22 / 28 / 36 / 48 / 72 px. Linear's tight ramp extended at the top with Mercury's display step.

## Layout

Two layout modes. Page type — not component — picks which applies.

- **App / dashboard mode (Linear discipline)** — 1280px max app shell, 240px persistent sidebar, 24px gutter, 12-column. Dense by default. Tables breathe through hairlines, not padding.
- **Marketing / statement mode (Mercury restraint)** — 1080px max, 24px gutter. Reading column 720px on long-form (statements, agreements, blog). 96px section breaks.

Spacing scale rooted on 4px — 4 / 8 / 12 / 16 / 24 / 32 / 48 / 96.

Responsive — sidebar collapses to icon rail at 1024px, full drawer at 768px. Dashboard tables become stacked cards below 768px. Display serif scales 72 → 48 → 36. Command bar becomes a full-width sheet on mobile.

## Elevation & Depth

Flat. Depth comes from cream tone shifts (`bg-alt` lift from `bg`, `surface` white over both) and 1px hairline borders. Both parents agree here.

Shadows are reserved for floating affordances only — modals and the command bar at `0 12px 32px rgba(42, 41, 36, 0.10)` (Mercury warmth), popovers and dropdowns at `0 4px 12px rgba(42, 41, 36, 0.06)`. Never on cards, tiles, buttons, or table rows.

## Shapes

- **Buttons (app)** — 6px radius, padding 8/14, weight 500. Sharp Linear geometry.
- **Buttons (marketing)** — pill (999px radius), padding 10/20, weight 500. Mercury geometry.
- **Cards / dashboard tiles** — 8px radius, 1px border, white surface on cream canvas, no shadow.
- **Inputs (app)** — 6px radius, 1px border, padding 8/12.
- **Inputs (forms — signup, transfer)** — pill (999px radius), padding 10/16. Mercury geometry.

Pill radius wins in marketing; sharp radius wins inside the app shell. Enforce the radius by surface, not by component — pills inside dashboard tables read as wrong.

## Components

**Buttons**
- Primary (app) — indigo fill (`accent` `#5266eb`), `on-accent` text, 6px radius. Hover transitions to `accent-hover`. No shadow, no lift.
- Primary (marketing) — same fill, pill radius, padding 10/20.
- Secondary (app) — `surface` fill, 1px `border`, `text` color.
- Secondary (marketing) — `bg-alt` fill, no border, pill radius.

**Cards / dashboard tiles**
- `surface` (white) on `bg`, 1px `border`, 8px radius, no shadow.
- Account tiles — balance in 36px Arcadia tabular, 12px uppercase eyebrow label in `text-muted`, hairline `border` separator above row data.

**Inputs**
- App — 1px `border`, 6px radius. Forms — pill radius. Focus on both — 2px `accent` ring with 2px offset.

**Tables (the centerpiece)**
- 14px Inter body, hairline `border` between rows, 12px uppercase eyebrow header on `bg-alt`, sticky header.
- Tabular numerals on every money column, right-aligned. Account / category columns left-aligned. Currency symbol always present.
- Row height 36px. Hover row — `surface-alt`. Selected row — 1px `accent` left border.

**Command bar**
- Linear pattern. Trigger ⌘K. Floating panel, `surface` fill, 1px `border-strong`, 12px radius, max-width 640px. Mono input. Result rows in 14px Inter with 12px mono shortcut hints right-aligned.

**Keyboard hints (`kbd`)**
- Linear's style — mono characters, 11px, `bg-alt` background, 4px radius, 1px `border`.

**Statement / receipt surface**
- 720px max width, Arcadia Display heading, 16px body, 96px section breaks.

## Do's and Don'ts

**Do**
- Use tabular numerals on every money figure, every chart label, every table cell. Even non-money tables (counts, percentages) — the discipline reads as fintech-grade.
- Use indigo for one CTA per viewport. Pair with a tonal cream secondary, never two saturated buttons.
- Pick app-mode or marketing-mode per page. Don't blend within a page.
- Use Linear's command bar pattern (⌘K) on every app surface — muscle memory matters.
- Cream-on-coal for dark mode, never pitch black.

**Don't**
- Use Linear purple — replaced by Mercury indigo for fintech trust.
- Set transaction tables in proportional figures.
- Apply pill-radius buttons inside dashboard tables.
- Add card shadows or hover lift.
- Use Arcadia Display below 36px — reads decorative, not functional.
- Introduce a second saturated accent for "balance up" or "alerts" — use warm-gray hierarchy plus signal colors only.

## Agent Prompt Guide

**Bias toward** — cream warm canvas, Mercury indigo as the only saturated color, Linear-tight 4px base, 14px Inter body in app surfaces, Arcadia tabular numerals on every money figure, hairline 1px borders for depth, command bar (⌘K) on every app screen, dual-mode layout (app vs marketing), pill buttons in marketing only, sharp-radius buttons in app.

**Reject** — Linear purple, pill radius inside tables, proportional figures on money, drop shadows on cards or tiles, second saturated accent, Arcadia in app UI controls, pure white surfaces, glass / blur, hover lift, gradients of any kind.
