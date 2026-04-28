---
version: alpha
name: freee
description: A friendly, approachable Japanese B2B SaaS for accounting and HR. The Vibes Design System keeps product UI light and crisp on a clean white canvas, while the corporate site allows itself a touch more breathing room and Noto Sans JP webfonts. A confident product blue (`#2864f0`) carries every CTA and link, with a quieter Primary Dark (`#1e46aa`) reserved for sub-headings. Type runs at 14px in product UI for density and 16px on the marketing site for warmth, with consistent line-height 1.6 for kanji legibility. Mood — friendly, clear, trustworthy, accessible.

colors:
  primary: "#2864f0"
  primary-hover: "#285ac8"
  primary-dark: "#1e46aa"
  primary-darkest: "#143278"
  ink: "#323232"
  body: "#595959"
  muted: "#8c8989"
  canvas: "#ffffff"
  surface: "#ffffff"
  surface-soft: "#f7f5f5"
  surface-strong: "#f0eded"
  hairline: "#e9e7e7"
  input-border: "#cccccc"
  on-primary: "#ffffff"
  success: "#00963c"
  warning: "#ffb91e"
  error: "#dc1e32"
  accent: "#fa6414"

typography:
  display-xl:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 40px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0.04em
  display-lg:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 34px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0.04em
  title-lg:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  caption:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  label:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: 0.1em

rounded:
  sm: 4px
  md: 8px
  lg: 12px
  pill: 999px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 16px
  "4": 24px
  "5": 32px
  "6": 48px
---

## Overview

freee is a Japanese B2B SaaS for accounting, payroll, and back-office workflows. The visual posture is "approachable expert" — complex tax and labor flows wrapped in a UI that never feels stern. The Vibes Design System governs the product, while the corporate marketing site uses a slightly more spacious cousin of the same palette and type scale.

Mood words — friendly, clear, trustworthy, accessible.

## Colors

The primary palette is built on a single saturated product blue (`#2864f0`) and its darker siblings (`#1e46aa`, `#143278`). Primary covers CTAs, links, and active state; Primary Dark is the dedicated color for `h3` sub-headings and small emphasis labels — never used for buttons. Body text is `#595959` (not `#323232`); `#323232` is reserved for `h1`/`h2` and emphasized body. Status colors are warm: error `#dc1e32`, warning `#ffb91e`, success `#00963c`, with an orange accent (`#fa6414`) for notification badges.

Surfaces stay near-white: page background is pure `#ffffff`, with `#f7f5f5` and `#f0eded` for cards and section bands. Hairlines are `#e9e7e7`; input borders are slightly darker (`#cccccc`) per the live site's computed style.

## Typography

Product UI uses a system-font stack (Hiragino Kaku Gothic ProN on macOS, Meiryo on Windows) so the app loads instantly without a webfont round-trip. The corporate site loads Noto Sans JP. In both contexts we keep `letterSpacing` at 0 by default and bump to `0.04em` only on display sizes (34px+); never negative. `lineHeight` is 1.6 for body — the upstream spec uses 1.5, but JP design-director floors lift to 1.6 so kanji never collide.

Headings on the corporate site lean weight 500 (medium), not bold — bold is reserved for inline emphasis. The 16px body is the rem anchor.

## Layout

- 4px-based spacing scale — 4 / 8 / 16 / 24 / 32 / 48
- Container max-width 1120px (70rem) for marketing pages
- Touch targets ≥ 36px (Vibes default; 44px on critical CTAs)
- Breakpoints — Narrow Mobile ≤ 375, Mobile ≤ 768, Tablet ≤ 1024, Desktop > 1024

## Elevation & Depth

Vibes uses dual shadows — a wide diffusion plus a near drop. Cards use `0 0 1rem rgba(0,0,0,0.10), 0 0.125rem 0.25rem rgba(0,0,0,0.20)`. Floating popovers and dialogs step up to wider blurs. The base UI relies on hairline borders for separation; shadow stacks appear only on cards, dropdowns, and modals.

## Shapes

Border-radius is contextual. Marketing CTAs use 8px; product UI uses pill (`99rem`) for primary buttons. Inputs are 4px (live-site computed value). Cards are 12px (`0.75rem`); floating panels 16px; dialogs 24px. No 0px corners outside of tables.

## Components

**Buttons** — Marketing primary fills `#2864f0`, white text, weight 500–700, 8px radius, 2px solid border. Product primary is pill-shaped on `#2864f0`. Secondary is white fill with `#2864f0` border. Danger fills `#dc1e32`.

**Inputs** — White fill, 1px `#cccccc` border, 4px radius, 16px text, weight 400. Placeholder is weight 300 / `#8c8989`. Focus thickens border to `#2864f0`.

**Tables** — Header on `#f7f5f5`, body rows on `#ffffff`, hairlines `#e9e7e7`. Row height comfortable, not dense.

**Cards** — White fill, 12px radius, dual shadow, 24–32px internal padding.

## Do's and Don'ts

**Do**
- Use the system-font stack for product UI (no webfont round-trip)
- Keep body text on `#595959`; reserve `#323232` for headings and emphasized copy
- Use weight 500 for marketing headings; weight 700 only for inline emphasis
- Apply `letterSpacing: 0.04em` on display sizes (34px+); keep body at 0

**Don't**
- Load Noto Sans JP into product UI (kills perceived performance)
- Use pure black `#000000` for text — `#323232` is the floor
- Use `#0000ee` browser-default link color — links inherit `#2864f0`
- Set body line-height below 1.6 — kanji become cramped

## Agent Prompt Guide

**Bias toward** — saturated product blue CTAs, pill or 8px buttons, near-white surfaces, weight 500 medium headings, dual-shadow cards, line-height 1.6 body, 4px spacing increments.

**Reject** — pure black text, neon status colors, heavy 700 headings on every level, negative letter-spacing, monochrome gray-only palettes, single-shadow cards.
