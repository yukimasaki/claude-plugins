---
version: alpha
name: Mercury
description: A warm-canvas fintech interface that prefers editorial calm over chrome-and-glass coldness. Cream backgrounds, warm-gray ink, and a single indigo CTA — the design lets data stand on quiet surfaces. Tabular numerals on every money surface, hairline borders instead of card shadows, and a persistent left sidebar give it the feel of a financial broadsheet rather than a SaaS dashboard. Mood — trustworthy, deliberate, modern, unhurried.

colors:
  primary: "#5266eb"
  primary-hover: "#4255d4"
  ink: "#2a2924"
  body: "#5a5548"
  muted: "#8a8478"
  hairline: "#ded9ca"
  hairline-strong: "#c9c3b3"
  canvas: "#f6f5f2"
  surface-soft: "#ebe8e0"
  surface-tertiary: "#ded9ca"
  surface-card: "#ffffff"
  on-primary: "#ffffff"
  success: "#2f7d57"
  warning: "#c98a42"
  error: "#b54a3a"

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
    fontFamily: "Arcadia Display, Tiempos Headline, Iowan Old Style, Georgia, serif"
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.28px
  title-md:
    fontFamily: "Arcadia Display, Tiempos Headline, Iowan Old Style, Georgia, serif"
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0
  body-md:
    fontFamily: "Arcadia, Inter, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "Arcadia, Inter, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "Arcadia, Inter, system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  numerals-tabular:
    fontFamily: "Arcadia, Inter, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "tnum"
  code:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  sm: 4px
  md: 8px
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
  "12": 48px
  "24": 96px
---

## Overview

Mercury achieves banking trust through editorial restraint. The page is paper, not plastic. Cream backgrounds, warm-gray ink, and a single saturated indigo CTA — that's the entire vocabulary. Information density borrows from Linear's calm SaaS layouts; tone borrows from a financial broadsheet. Numbers are legible (tabular figures everywhere money appears), surfaces are quiet, and the brand lets the data stand.

Mood words — trustworthy, deliberate, modern, unhurried.

## Colors

The palette is anchored on warm cream rather than pure white. The canvas (`#f6f5f2`) is the page background — paper-like cream that pairs naturally with warm-gray ink (`#2a2924`). Surface lifts use slightly darker cream tones (`surface-soft` `#ebe8e0`, `surface-tertiary` `#ded9ca`) and white only for cards and tables (`surface-card` `#ffffff`).

Indigo (`#5266eb`) is **the only saturated color on the page**. Use it for the primary CTA and link underlines. Warm grays do everything else — dividers, secondary buttons, captions, body text. Status colors (success / warning / error) are muted rather than neon.

The cream shifts substitute for shadow — depth comes from tonal layering, not blur.

## Typography

- **Display headlines** use `Arcadia Display` (fallback `Tiempos Headline`, `Iowan Old Style`, `Georgia`). Weight 400 throughout — never bold. Tight letter-spacing pulls the broadsheet character.
- **Body and UI** use `Arcadia` (fallback `Inter`, system-ui). Weight 400/500. Line-height 1.5 for reading comfort.
- **Numerals** use Arcadia's tabular variant on every account balance, transaction row, and chart label via the `tnum` OpenType feature. **Never proportional figures on money** — the columns must align.
- **Mono** uses `IBM Plex Mono` for transaction IDs and code samples.

Type scale ladder — 13 / 14 / 16 / 18 / 22 / 28 / 36 / 48 / 72 px.

## Layout

- App shell — 1280px max width, 24px gutter
- Marketing pages — 1080px max width, generous vertical rhythm
- Spacing scale rooted on 4px — 4 / 8 / 12 / 16 / 24 / 32 / 48 / 96
- Persistent left sidebar at 240px; main content fills the right pane
- Sidebar collapses to icon rail at 1024px; hidden behind hamburger below 768px

Tables become stacked key-value cards below 640px while keeping the balance line in 22px tabular. Marketing headlines scale from 72px to 36px on mobile.

## Elevation & Depth

Mercury is **flat by default**. Depth is communicated through cream tone shifts and 1px hairline borders, not shadows. Card stacks rely on tonal layering; the only place shadow appears is **modals** — `0 12px 32px rgba(42, 41, 36, 0.10)`. Card lift, neumorphism, and soft glow are explicitly out.

## Shapes

- **Buttons** — full pill (radius 999px). No rectangular CTAs.
- **Cards** — 8px radius, 1px hairline border, white surface on cream canvas
- **Inputs** — pill shape (radius 999px), 1px hairline, focus ring 2px indigo with 2px offset

The pill geometry signals approachability against the editorial type voice; together they keep the interface from feeling either too austere or too playful.

## Components

**Buttons**
- Primary — indigo fill (`primary` `#5266eb`), white text, full pill, padding 10/20, weight 500, no shadow
- Secondary — tertiary cream fill (`surface-tertiary`), ink text, full pill. Hover transitions to `hairline-strong`
- Ghost — ink text, indigo on hover

**Cards**
- White surface on cream canvas, 1px hairline border, 8px radius, no shadow
- Account cards display balance in 36px tabular numerals with a 13px uppercase eyebrow label

**Inputs**
- Pill shape, 1px hairline, 10/16 padding
- Focus state — 2px indigo ring with 2px offset

**Tables**
- Tabular numerals throughout
- Hairline borders between rows
- Sticky header in 12px uppercase eyebrow on `surface-soft`

## Do's and Don'ts

**Do**
- Use tabular figures everywhere money appears
- Pair the indigo CTA with a tonal cream secondary, never two saturated buttons on the same surface
- Let cream do the lifting between sections; resist boxing every group with borders or cards

**Don't**
- Use crypto-startup gradients or neon accents
- Set transaction tables in proportional figures
- Introduce a second saturated accent for "balance" or "alerts" — use warm-gray hierarchy instead
- Add card shadows to dashboard tiles; the design relies on flatness

## Agent Prompt Guide

**Bias toward** — cream background, warm-gray ink, single indigo accent, full-pill buttons, tabular numerals on every money surface, hairline tables, persistent left sidebar, editorial vertical rhythm.

**Reject** — pure-white SaaS canvas, multiple saturated accents, drop-shadowed cards, proportional figures on balances, gradient hero treatments, glass-morphism over financial data.
