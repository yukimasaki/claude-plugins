---
version: alpha
name: Stripe × A24
description: A fintech pitch surface that fuses Stripe's grid-disciplined trust signals with A24's film-poster theatricality. Stripe owns the underlying column grid, Söhne UI face, deep navy ink, and the purple CTA that carries fintech credibility on every surface; A24 contributes full-bleed black hero plates, oversized display-serif headlines, a print-stock cream secondary, and a single deep film-red allowed once per viewport. The result is a pricing page or investor site that feels confident enough to close a round and cinematic enough to be remembered. Mood — confident, cinematic, considered, financial-trust-preserving.

colors:
  bg: "#ffffff"
  bg-alt: "#f6f9fc"
  surface: "#ebeef3"
  text: "#0a2540"
  text-muted: "#425466"
  border: "#e3e8ee"
  bg-dark: "#000000"
  bg-dark-alt: "#0a0a0a"
  text-dark: "#ffffff"
  text-dark-muted: "#ffffff"
  border-dark: "#ffffff"
  primary: "#635bff"
  accent-hover: "#5048e5"
  accent-warm: "#f4ede4"
  accent-pop: "#d9351c"
  on-accent: "#ffffff"

typography:
  display-xl:
    fontFamily: "Fraunces, Söhne Breit, Tiempos Headline, Iowan Old Style, Georgia, serif"
    fontSize: 144px
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: -2px
  display-lg:
    fontFamily: "Fraunces, Söhne Breit, Tiempos Headline, Iowan Old Style, Georgia, serif"
    fontSize: 96px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: -1.5px
  display-md:
    fontFamily: "Fraunces, Söhne Breit, Tiempos Headline, Iowan Old Style, Georgia, serif"
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -1px
  title-lg:
    fontFamily: "Söhne, Inter, system-ui, sans-serif"
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.4px
  title-md:
    fontFamily: "Söhne, Inter, system-ui, sans-serif"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.2px
  title-sm:
    fontFamily: "Söhne, Inter, system-ui, sans-serif"
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0
  body-md:
    fontFamily: "Söhne, Inter, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-sm:
    fontFamily: "Söhne, Inter, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "Söhne, Inter, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  micro:
    fontFamily: "Söhne, Inter, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.2px
  numerals-tabular:
    fontFamily: "Söhne Mono, ui-monospace, monospace"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "tnum"
  code:
    fontFamily: "Söhne Mono, ui-monospace, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  sm: 4px
  md: 6px
  lg: 12px
  pill: 999px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 12px
  "4": 16px
  "6": 24px
  "8": 32px
  "16": 64px
  "24": 96px
  "36": 144px
---

## Overview

Stripe × A24 is a blend of Stripe's grid-disciplined fintech surface and A24's film-poster theatricality. From Stripe comes the column grid, Söhne UI face, deep navy ink (`text` `#0a2540`), the purple CTA (`accent` `#635bff`) that carries fintech trust signals, and the marketing rhythm at 1180px max-width. From A24 comes the full-bleed black hero plate (`bg-dark` `#000000`), the oversized display-serif headline at 56px+, the print-stock cream secondary (`accent-warm` `#f4ede4`), and a single deep film-red (`accent-pop` `#d9351c`) used like a poster's asterisk — once per viewport, never more.

The arbitration is firm. A24's iconic black wins on hero plates and case-study covers. Stripe's white wins on app, pricing, docs, and any compliance copy. Stripe purple stays as the primary CTA across both light and dark surfaces — replacing it with A24 red would kill the fintech trust signal and is forbidden. A24 red is allowed once per page as a callout — an asterisk, a sale tag, a single label.

Mood — confident, cinematic, considered, financial-trust-preserving.

## Colors

The light palette is anchored on white (`bg` `#ffffff`) with Stripe's familiar blue-grey ladder — `bg-alt` `#f6f9fc` for section bands, `surface` `#ebeef3` for inputs, hairline `border` `#e3e8ee` for separation. Ink is Stripe's deep navy `#0a2540` — never pure black on light surfaces.

The dark palette is A24's print-shop black — `bg-dark` `#000000` for hero plates, `bg-dark-alt` `#0a0a0a` for nested cards, with text `#ffffff` and a 72%-alpha muted variant. Borders on dark surfaces use 12% white alpha rather than a tonal step.

Stripe purple (`accent` `#635bff`) is **the only CTA color across both modes**. A24 contributes two non-action colors — `accent-warm` `#f4ede4` for cream secondary surfaces and `accent-pop` `#d9351c` for a single red callout per viewport.

## Typography

- **Display headlines** at 56px+ use `Fraunces` (fallback `Söhne Breit`, `Tiempos Headline`) at weight 600 — the A24 poster voice. Below 56px the serif reads decorative; the floor is enforced.
- **Titles, body, and UI** use `Söhne` (fallback `Inter`, system-ui) at weights 400/500/600 — Stripe's stack for everything that isn't a hero.
- **Pricing tables and numerals** use `Söhne Mono` with tabular figures.

Type scale ladder — 12 / 14 / 16 / 18 / 22 / 28 / 36 / 56 / 96 / 144 px. The display serif is gated to the top three steps only.

## Layout

- Marketing — 1180px max width, 24px gutter, 12-column grid
- App shell — 1440px max width
- Spacing scale rooted on 4px — 4 / 8 / 12 / 16 / 24 / 32 / 64 / 96 / 144
- Hero plates run full-bleed and break the column grid horizontally; vertical rhythm still respects 8px multiples
- Hero serif scales 144 → 96 → 64 → 48 across breakpoints
- Pricing tables collapse to per-tier cards below 768px
- App sidebar collapses to overlay at 1024px

A24's contribution is the edge-to-edge image plate — full-bleed black panels with text starting at column 2 and ending at column 11, so the grid still governs the type even when the surface escapes it.

## Elevation & Depth

Stripe × A24 is **flat by default**. On light surfaces, depth comes from 1px borders. On dark hero plates, depth comes from alpha-borders (`rgba(255, 255, 255, 0.12)`). Shadows are reserved for popovers — `0 4px 12px rgba(10, 37, 64, 0.08)` on light, `0 12px 32px rgba(0, 0, 0, 0.7)` on dark.

A24 contributes no shadows. Its design language is fundamentally print, not screen-elevated, and that discipline carries.

## Shapes

- **Buttons** — 6px radius (Stripe's signature)
- **Cards** — 12px radius, 1px border, no shadow
- **Inputs** — 6px radius, 1px border, 2px purple focus ring with 2px offset
- **Hero plates** — sharp corners; no radius on full-bleed panels

The geometry stays restrained — Stripe's tight radius keeps the fintech rigor visible even as A24 blows up the type.

## Components

**Buttons**
- Primary — Stripe purple fill (`accent` `#635bff`), white text, 6px radius, padding 10/16, weight 500
- Secondary on white — `text` color, 1px `border`, white fill
- Secondary on black — `text-dark`, 1px `border-dark` (12% white), transparent fill

**Hero plates**
- Full-bleed black panel (`bg-dark`), display serif headline at 96px+, single still image or generative composition
- Stripe's grid still holds — text starts at column 2, ends at column 11

**Cards**
- Stripe pattern — `bg` fill, 1px `border`, 12px radius, no shadow
- On dark hero — `bg-dark-alt` fill with 1px `border-dark`

**Inputs**
- `surface` fill, 1px `border`, 6px radius, padding 10/12
- Focus state — 2px `accent` ring with 2px offset

**Pricing tables**
- Söhne Mono numerals tabular
- Header row in display serif at 36px
- Body rows Söhne 14px

## Do's and Don'ts

**Do**
- Use display serif at 56px+ on full-bleed black plates
- Keep Stripe purple CTA across both light and dark surfaces — never substitute
- Cap A24 red to one label per viewport
- Render pricing tables in Söhne Mono tabular figures

**Don't**
- Use display serif for body or UI controls — it reads decorative below 56px
- Add a third chromatic accent
- Replace Stripe purple with A24 red for CTA — fintech trust loss is immediate
- Drop the column grid for full-bleed art on dashboard or data screens
- Introduce pastel substitutes for Stripe purple

## Agent Prompt Guide

**Bias toward** — Stripe grid + Söhne UI everywhere, full-bleed black A24 hero plates, display serif at 56px+, Stripe purple as the only CTA color across light and dark, A24 red used sparingly as a single label, Söhne Mono tabular figures on pricing.

**Reject** — display serif in UI controls, A24 red as CTA, multi-color accent palettes, abandoning the column grid on dashboard or compliance surfaces, pastel Stripe substitutes, drop-shadowed cards.
