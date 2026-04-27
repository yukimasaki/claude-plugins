---
version: alpha
name: Vercel × Pitchfork
description: A remix that blends Vercel's grayscale-only restraint with Pitchfork's editorial confidence. Vercel holds the chrome — single grayscale ramp, Geist Sans everywhere, sharp grid, flat depth — while Pitchfork contributes the soul — oversized review-style serif headlines, an editorial orange accent, pull-quote rules, and section markers. The result reads like a Pitchfork feature about a Vercel deploy: cold neutrals, hot opinion, technical credibility intact. Mood — opinionated, calm, technically literate, considered.

colors:
  bg: "#ffffff"
  bg-alt: "#fafafa"
  surface: "#f4f4f5"
  text: "#000000"
  text-muted: "#52525b"
  text-dim: "#a1a1aa"
  border: "#e4e4e7"
  border-strong: "#d4d4d8"
  accent: "#ff5d1f"
  accent-hover: "#e64a0e"
  accent-soft: "#ffead9"
  bg-dark: "#000000"
  bg-dark-alt: "#0a0a0a"
  surface-dark: "#18181b"
  text-dark: "#ffffff"
  text-dark-muted: "#a1a1aa"
  border-dark: "#27272a"

typography:
  display-xxl:
    fontFamily: "Tiempos Headline, Iowan Old Style, Georgia, serif"
    fontSize: 88px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.88px
  display-xl:
    fontFamily: "Tiempos Headline, Iowan Old Style, Georgia, serif"
    fontSize: 64px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.64px
  display-lg:
    fontFamily: "Tiempos Headline, Iowan Old Style, Georgia, serif"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.48px
  title-lg:
    fontFamily: "Geist Sans, Inter, system-ui, sans-serif"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.32px
  title-md:
    fontFamily: "Geist Sans, Inter, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.12px
  title-sm:
    fontFamily: "Geist Sans, Inter, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0
  body-lg:
    fontFamily: "Geist Sans, Inter, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-md:
    fontFamily: "Geist Sans, Inter, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "Geist Sans, Inter, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "Geist Sans, Inter, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.12px
  pull-quote:
    fontFamily: "Tiempos Headline, Iowan Old Style, Georgia, serif"
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: -0.14px
  code:
    fontFamily: "Geist Mono, ui-monospace, monospace"
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

Vercel × Pitchfork is a blend of Vercel's grayscale-only restraint with Pitchfork's editorial confidence. Vercel contributes the chrome — a single grayscale ramp, Geist Sans for all UI and body, a sharp grid, flat border-based depth. Pitchfork contributes the editorial voice — oversized serif review headlines, a single orange accent, pull-quote rules, and small-caps section markers like "REVIEW" or "BENCHMARK".

The result reads like a Pitchfork feature about a Vercel deploy. Cold neutrals, hot opinion. Built for docs, changelogs, and developer-marketing pages that want to read like a magazine without losing technical credibility.

Mood words — opinionated, calm, technically literate, considered.

## Colors

The grayscale ramp is Vercel's, used as a single source for both light and dark. Light mode runs `bg` `#ffffff`, `bg-alt` `#fafafa`, `surface` `#f4f4f5`, with pure-black ink (`text` `#000000`) and a graduated text scale (`text-muted` `#52525b`, `text-dim` `#a1a1aa`). Dark mode mirrors it on pure black.

The single accent is Pitchfork's — `accent` `#ff5d1f`, hover `#e64a0e`, soft `#ffead9`. Orange replaces every place Vercel would otherwise reach for a blue, green, or purple hint: section markers, link hover, pull-quote rules, code-fence captions. **One color, used with restraint.** Orange never appears as a button fill — it stays editorial.

## Typography

- **Display headlines** use `Tiempos Headline` (fallback `Iowan Old Style`, `Georgia`) at weight 600. The serif fires only at 48px and above — the legibility floor is hard.
- **Sub-headings, UI, and body** use `Geist Sans` (fallback `Inter`, system-ui) at weights 400 / 500 / 600. Geist holds for docs density.
- **Pull-quotes and review callouts** use Tiempos at 28px, weight 500, italic optional, with a 4px `accent` left rule.
- **Code and numerals** use `Geist Mono`.

Type scale ladder — 12 / 14 / 16 / 18 / 20 / 24 / 32 / 48 / 64 / 88 px. Vercel's tight ramp extended at the top for editorial heads.

## Layout

- **Marketing / changelog** — 1180px max, 24px gutter, 12-column.
- **Long-form article** — 720px reading column, centered.
- **Docs** — Vercel's 256px sidebar + 720px article + 240px on-this-page rail.
- 4px base spacing — 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96.

The signature magazine move: every long-form page opens with a full-width title block — section marker, serif h1, dek paragraph, byline rule — then drops back into Vercel's docs grid. The transition is the layout's voice.

Below 768px, padding-only on the reading column. Docs sidebar collapses to drawer at 1024px; the on-this-page rail hides at 1280px.

## Elevation & Depth

Flat. Border-based depth on light, alpha-border on dark. Shadows reserved for popovers only — `0 2px 8px rgba(0, 0, 0, 0.04)` light, `0 12px 32px rgba(0, 0, 0, 0.6)` dark. Both parents agree here. Print-flat editorial meets developer-tool minimalism. No conflict to arbitrate.

## Shapes

- **Buttons** — 6px radius, padding 8/14, weight 500.
- **Cards** — 8px radius, 1px border, no shadow.
- **Inputs** — 6px radius, 1px border, padding 8/12. Focus shifts to a 2px orange ring with 2px offset.

Sharp Vercel geometry holds throughout. Curvature is not part of the editorial voice — the serif and the orange carry it.

## Components

**Buttons**
- Primary — `text` (black) fill, `bg` (white) text. Pitchfork orange is reserved for links, never CTA fills.
- Secondary — transparent fill, 1px `border`, `text` color.

**Cards**
- `bg-alt` fill, 1px `border`, 8px radius, no shadow. Hover transitions border to `border-strong` — never a colored border on hover.

**Inputs**
- 1px `border`, 6px radius, 8/12 padding. Focus ring is 2px `accent` with 2px offset.

**Pull-quote / review callout**
- Tiempos at 28px, weight 500, italic optional. 4px left rule in `accent`. 24px left padding. The quote sits in its own 8/16 grid cell.

**Section marker**
- Small caps, 12px Geist, `accent` color, tracked +0.12px. Pitchfork-style "REVIEW", "BENCHMARK", "CHANGELOG" labels above each section heading.

## Do's and Don'ts

**Do**
- Use Tiempos at 48px and above only.
- Reserve orange for links, section markers, and pull-quote rules.
- Open every long-form page with a full-width title block — section marker, serif h1, dek, byline rule.
- Keep all body and UI in Geist for density.

**Don't**
- Use orange as a button fill.
- Add a second accent color.
- Drop serif into UI controls or table cells.
- Add drop shadows on cards or colored hover borders.
- Abandon the docs grid for full-bleed art on technical pages.

## Agent Prompt Guide

**Bias toward** — single grayscale ramp, Geist Sans + Geist Mono everywhere, Tiempos serif at 48px and above for editorial heads, `#ff5d1f` orange used only for links / section markers / pull-quote rules, full-width article title blocks, Vercel docs grid below the fold, flat border-based depth.

**Reject** — orange button fills, second accent colors, serif in body or UI, drop shadows on cards, colored hover borders, abandoning the docs grid for full-bleed art, serif below the 48px floor.
