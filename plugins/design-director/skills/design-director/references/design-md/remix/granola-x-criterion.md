---
version: alpha
name: Granola × Criterion
description: A premium notetaker that fuses Granola's warm-cream paper surface and frosted-glass hover with Criterion Collection's film-archive editorial chrome. Granola sets the mood — warm off-white surface, soft glass on hover, generous breathing room — while Criterion brings the rigor of mono catalog labels, edition numerals, serif body, and a single archival red used like a librarian's stamp. The result is an app that reads like the Criterion Channel's library page rendered as a notetaker. Mood — considered, archival, quietly premium, library-grade.

colors:
  bg: "#faf8f2"
  bg-alt: "#f4f0e6"
  surface: "#ece6d5"
  surface-glass: "#fffdf7"
  text: "#1a1614"
  text-muted: "#5c544a"
  text-dim: "#8a8378"
  border: "#e0d8c4"
  border-strong: "#c8bea4"
  primary: "#b32418"
  accent-hover: "#931a10"
  accent-soft: "#f4d6d2"
  bg-dark: "#14110d"
  bg-dark-alt: "#1f1b15"
  surface-dark: "#2a251d"
  text-dark: "#f4f0e6"
  text-dark-muted: "#b8ad97"
  border-dark: "#3a3328"
  on-accent: "#faf8f2"

typography:
  display-xl:
    fontFamily: "Tiempos Headline, Lyon Display, Iowan Old Style, Georgia, serif"
    fontSize: 64px
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -1px
  display-lg:
    fontFamily: "Tiempos Headline, Lyon Display, Iowan Old Style, Georgia, serif"
    fontSize: 44px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -0.5px
  display-md:
    fontFamily: "Tiempos Headline, Lyon Display, Iowan Old Style, Georgia, serif"
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.3px
  title-lg:
    fontFamily: "Tiempos Text, Lyon Text, Iowan Old Style, Georgia, serif"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  title-md:
    fontFamily: "Tiempos Text, Lyon Text, Iowan Old Style, Georgia, serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: 0
  body-md:
    fontFamily: "Tiempos Text, Lyon Text, Iowan Old Style, Georgia, serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-sm:
    fontFamily: "Tiempos Text, Lyon Text, Iowan Old Style, Georgia, serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  caption:
    fontFamily: "Tiempos Text, Lyon Text, Iowan Old Style, Georgia, serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  catalog-label:
    fontFamily: "GT America Mono, IBM Plex Mono, ui-monospace, monospace"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 1.5px
  numerals-edition:
    fontFamily: "GT America Mono, IBM Plex Mono, ui-monospace, monospace"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    fontFeature: "tnum"
  code:
    fontFamily: "GT America Mono, IBM Plex Mono, ui-monospace, monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  sm: 4px
  md: 6px
  lg: 8px
  pill: 999px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 16px
  "4": 24px
  "6": 32px
  "8": 48px
  "12": 64px
  "16": 96px
---

## Overview

Granola × Criterion is a blend of Granola's warm-cream notetaker and the Criterion Collection's film-archive editorial system. From Granola comes the cream paper surface palette, the frosted-glass hover state with `backdrop-filter: blur(12px) saturate(1.1)`, the warm dark mirror, the 1240px shell, and the generous vertical rhythm. From Criterion comes the archival red accent, the all-caps mono catalog labels with 1.5px tracking, the metadata strip pattern above every catalog entry, the serif body and UI, the tight 4px button radius, and the spine-style section dividers.

The arbitration is decisive. Granola's cream wins all surfaces — Criterion's pure white would lose the archival warmth that defines the brand. Criterion red replaces Granola's softer brand pink as the single accent — used like a librarian's stamp, never repeated within a viewport. Granola's warm sans body loses to Lyon / Tiempos Text because sans against Criterion chrome reads too soft.

Mood — considered, archival, quietly premium, library-grade.

## Colors

The palette anchors on Granola's warm cream paper — `bg` `#faf8f2` for the canvas, `bg-alt` `#f4f0e6` for catalog cards, `surface` `#ece6d5` for active rows. `surface-glass` `rgba(255, 253, 247, 0.72)` is the frosted-glass hover state with a 12px backdrop blur and 1.1 saturation. Text runs deep brown-black `#1a1614` rather than pure black, matching the warm canvas.

Archival red (`accent` `#b32418`) is the **single chromatic accent** — used for primary CTAs, current-edition badges, or active filters. Cap it to one element per viewport. `accent-soft` `#f4d6d2` is reserved for selection tints and toast backgrounds.

Dark mode mirrors Criterion's spine-black — `bg-dark` `#14110d` with cream `text-dark` `#f4f0e6`. The dark surface ladder respects the same warm-not-pitch discipline Granola brought to the light mode.

## Typography

- **Display headlines** use `Tiempos Headline` (fallback `Lyon Display`, `Iowan Old Style`, `Georgia`) at weight 500, 32px+
- **Body and UI** use `Tiempos Text` (fallback `Lyon Text`) at weight 400/500. Body sits at 17/26.
- **Catalog labels and edition numerals** use `GT America Mono` at 12px with 1.5px tracking — Criterion's spine voice
- **Code blocks** use `GT America Mono` at 13px

Type scale ladder — 12 / 13 / 15 / 17 / 20 / 24 / 32 / 44 / 64 px. Mono fires only on metadata blocks — edition number, recorded date, file size, catalog tag. Never in body. There is no separate sans-serif UI face; both UI controls and reading copy share the serif stack so the library mood survives.

## Layout

- App shell — 1240px max width, 32px gutter, 12-column grid
- Reading / single-note column — 680px, centered
- Catalog grid — 4 columns desktop, 2 columns tablet, 1 column mobile
- Spacing scale rooted on 8px — 8 / 16 / 24 / 32 / 48 / 64 / 96
- Reading column collapses to padding-only below 720px
- Metadata strip wraps to two lines below 480px with mono shrinking to 11px
- Glass hover converts to a tap-flash on touch devices

Granola's vertical rhythm holds the page; Criterion's contribution is the metadata strip above every card — every entry has a spine.

## Elevation & Depth

Depth operates in two tiers.

- **Surfaces** — flat and border-based. Granola's pattern.
- **Hover / active** — `surface-glass` with `backdrop-filter: blur(12px) saturate(1.1)`. Granola's signature glass move, capped at 12px blur and 1.1 saturation so the cream paper doesn't muddy.

Shadows are reserved for modals only — `0 16px 48px rgba(26, 22, 20, 0.16)`. Criterion contributes flatness because print-stock has no elevation; Granola contributes the glass moment. They alternate by state, never compose.

## Shapes

- **Buttons** — 4px radius (Criterion-tighter than Granola's pill)
- **Cards / catalog entries** — 6px radius, 1px border
- **Inputs** — 4px radius, 1px border, 2px archival-red focus ring with 2px offset
- **Section dividers** — 1px `border-strong` rule, 16px below the heading pair

The geometry stays restrained — radius above 6 on cards or above 4 on buttons would lose the archival rigor.

## Components

**Note card / catalog entry**
- `bg-alt` fill, 1px `border`, 6px radius, no shadow
- Top-row metadata strip in mono 12px — edition number, date, duration, tags, spaced like a Criterion spine
- Title in serif 24px below the strip
- Hover state — `surface-glass` fill with `backdrop-filter: blur(12px) saturate(1.1)`. Granola's signature move.

**Button (primary)**
- Serif body face, weight 500, 4px radius, padding 10/18
- Fill `accent`, text `bg`

**Button (secondary)**
- Transparent fill, 1px `border`, `text` color, same geometry as primary

**Input**
- 1px `border`, 4px radius, padding 10/14, serif body face at 15px minimum
- Focus state — 2px `accent` ring with 2px offset, no glow

**Section heading**
- Mono catalog label above (12px, 1.5px tracking, `text-muted`)
- Serif h2 below (32px, weight 500)
- 1px `border-strong` rule under the pair, 16px below

## Do's and Don'ts

**Do**
- Lead every catalog entry with a mono metadata strip
- Use the archival red for one element per viewport — primary CTA, current-edition badge, or active filter
- Apply glass only on hover or active states, never as a default surface
- Keep body in serif — sans would break the library mood

**Don't**
- Use the archival red for body links or secondary buttons
- Stack two cards in glass mode simultaneously
- Drop sans-serif into UI controls
- Add categorical color — this design is monochrome plus one red
- Push backdrop-blur above 12px or saturation above 1.1 on cream

## Agent Prompt Guide

**Bias toward** — warm cream surfaces, serif body and UI, mono metadata strips above every card, archival red as the single accent, glass-on-hover only, 8px base grid, catalog labels in 12px small-caps mono with 1.5px tracking.

**Reject** — pure white backgrounds, sans-serif body, multi-color accent palettes, default-state glass surfaces, drop shadows on cards, button radius above 6, abandoning the metadata strip on cards.
