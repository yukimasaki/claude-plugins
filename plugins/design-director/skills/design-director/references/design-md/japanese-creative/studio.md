---
version: alpha
name: STUDIO
description: A Japanese no-code site-builder marketing surface that pairs Inter-led Latin typography with Noto Sans JP for kanji, leaning Apple-adjacent in its restraint. The CTA color is near-black (`#222222`) on a white canvas, with STUDIO Blue (`#0275fd`) reserved for inline accents and links rather than primary buttons; pill-shaped CTAs (radius 500px) sit alongside small 4px-radius secondary buttons. IBM Plex Mono carries label and badge type for a quietly technical signal. Mood — minimal, technical, refined, fast.

colors:
  primary: "#222222"
  primary-hover: "#000000"
  accent: "#0275fd"
  accent-soft: "#eef9ff"
  ink: "#222222"
  body: "#707070"
  muted: "#959595"
  disabled: "#b8b8b8"
  canvas: "#ffffff"
  surface: "#f7f7f7"
  surface-card: "#ffffff"
  hairline: "#e5e5e5"
  on-primary: "#f7f7f7"
  on-accent: "#ffffff"
  success: "#0db48b"
  warning: "#f5a623"
  error: "#e53935"

typography:
  display-xl:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  display-lg:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  title-lg:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: 0
  caption:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: 0
  label:
    fontFamily: "IBM Plex Mono, Inter, Noto Sans JP, Hiragino Sans, system-ui, monospace"
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: 0

rounded:
  sm: 4px
  md: 8px
  lg: 12px
  pill: 500px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 16px
  "4": 24px
  "5": 48px
  "6": 80px
---

## Overview

STUDIO is a Japanese no-code Web design tool. The marketing site has to demonstrate the product's own design taste, so it leans hard into restraint — generous whitespace, near-black CTAs, a single understated blue accent, and a monospace label face that signals "designer tool." The shell pairs Inter for Latin glyphs with Noto Sans JP for kanji in a Latin-first chain that mirrors Apple's marketing approach.

Mood words — minimal, technical, refined, fast.

## Colors

**Near-black `#222222`** is the primary CTA color. It is paired with off-white text `#f7f7f7` to keep contrast high without using pure black-on-white. Hover deepens to true black `#000000`.

**STUDIO Blue `#0275fd`** is the brand accent — used for inline links, hover highlights, and feature callouts. **Not** used as a button background. Its soft companion `#eef9ff` works as a tinted section background.

The neutral ladder runs `#222222` for ink, `#707070` for body, `#959595` for muted captions. Page canvas is `#ffffff`; soft surface `#f7f7f7` for cards and grouped content. Pure black is forbidden in text; ink stops at `#222222`.

## Typography

The chain is `Inter → Noto Sans JP → Hiragino Sans → Yu Gothic → system-ui`. The label slot swaps to `IBM Plex Mono → Inter → Noto Sans JP → Hiragino Sans` for monospace metadata badges like "FOR BUSINESS." Letter-spacing is 0 in this token system — the live site uses small negative values (-0.28 to -0.48px) on micro-text, but we floor to 0 for kanji safety.

Type ladder — 11 / 13 / 14 / 15 / 24 / 28 / 36 px. Body sits at 15px (`body-md`) with line-height 1.7 — STUDIO's marketing copy gets a generous leading because the kanji density is high and the page layout is uncluttered. Display headings use weight 600 (semibold), never 700 — STUDIO's grammar is "confident, not loud."

## Layout

- 8-based spacing scale — 4 / 8 / 16 / 24 / 48 / 80
- Container max-width 1200px with 32px horizontal padding
- Sections are full-bleed background + centered max-width content
- Vertical section rhythm uses the 80px slot
- Breakpoints — Mobile ≤ 768px, Tablet ≤ 1024px, Desktop > 1024px

## Elevation & Depth

Mostly flat. Cards lift on hover with `0 2px 8px rgba(0,0,0,0.08)`; deeper hover or modal content uses `0 4px 16px rgba(0,0,0,0.12)`. Buttons themselves are flat — the pill shape and color contrast carry the affordance, not shadow.

## Shapes

The radius story has two distinct registers — **pill (500px)** for primary CTAs, **4px** for secondary outlined buttons, **8–12px** for cards. The contrast between the pill and the small radius is intentional and brand-defining; mixing them up flattens the visual hierarchy.

## Components

**Primary CTA (pill)** — `#222222` fill, `#f7f7f7` text, 500px radius, ~10/24 padding, 13px / weight 500.

**Header CTA (pill, small)** — `#222222` fill, `#f7f7f7` text, 500px radius, ~6/16 padding, 12px / weight 600.

**Secondary / outline** — Transparent fill, `#222222` text, 1px `#222222` border, 4px radius. Reserved for tertiary actions next to a pill primary.

**Cards** — White fill, no border, 8–12px radius, 24–32px padding. Shadow only on hover.

**Mono labels** — IBM Plex Mono, 11px / weight 500, used for badges like "FOR BUSINESS" or section eyebrows.

## Do's and Don'ts

**Do**
- Use Inter + Noto Sans JP, Inter first
- Pill CTA (radius 500px) for primary actions, 4px for secondary
- Display headings at weight 600, never 700
- Reserve `#0275fd` for inline accents — never as a CTA background
- Use IBM Plex Mono for label metadata to signal designer-tool
- Stop ink at `#222222` — pure black is too heavy

**Don't**
- Use `#0275fd` as a button background — CTAs are `#222222`
- Apply weight 700 to display — the brand pitch is "semibold confidence"
- Use radius 4px on a primary CTA — the pill is the brand
- Apply `palt` — STUDIO is explicitly palt-off
- Use pure `#000000` text on body copy

## Agent Prompt Guide

**Bias toward** — Inter-leading Latin-first font chain, Noto Sans JP kanji, near-black `#222222` CTAs, pill primary buttons (500px radius), IBM Plex Mono for labels, semibold headings (600), 1.7 body line-height, soft-grey `#f7f7f7` surface accent, `#0275fd` reserved for inline links.

**Reject** — bold (700) display headings, blue-background CTAs, pure-black text, 4px-radius primary buttons, additional saturated accents beyond the brand blue, palt enabled.
