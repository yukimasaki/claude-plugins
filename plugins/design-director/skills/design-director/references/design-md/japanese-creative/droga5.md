---
version: alpha
name: Droga5 Japan
description: A Tokyo creative-agency site that runs on bold typography, white space, and the official five-color Accenture Song palette — white, blue (`#0000d5`), black, orange (`#d05005`), and a grey ladder. Hero typography lifts to 100px in Noto Sans JP Bold with -3px letter-spacing for a deliberately compressed display posture, while body content uses Noto Sans JP Regular at generous 28px and GT Pressura Mono carries small section labels and CTA links. Mood — bold, minimal, high-contrast, purpose-driven.

colors:
  primary: "#0000d5"
  primary-hover: "#0000a5"
  accent: "#d05005"
  ink: "#000000"
  body: "#000000"
  body-secondary: "#555555"
  muted: "#959595"
  disabled: "#959595"
  canvas: "#ffffff"
  surface: "#ffffff"
  surface-inverse: "#000000"
  hairline: "#d5d5d5"
  on-primary: "#ffffff"
  on-inverse: "#ffffff"
  success: "#0db48b"
  warning: "#d05005"
  error: "#d93025"

typography:
  display-xl:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 100px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  display-lg:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 60px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  title-lg:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 35px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  caption:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  label:
    fontFamily: "Roboto Mono, IBM Plex Mono, Inter, Noto Sans JP, Hiragino Sans, system-ui, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0

rounded:
  sm: 5px
  md: 8px

spacing:
  "0": 0px
  "1": 8px
  "2": 16px
  "3": 32px
  "4": 64px
  "5": 96px
  "6": 128px
---

## Overview

Droga5 Japan is the Tokyo arm of the Accenture Song-owned creative agency. The site is the showcase for the brand's editorial voice — full-bleed sections, oversized headlines, very few colors, big white space. Layout is single-column section blocks rather than grids. Body copy is unusually large because the marketing posture is "manifesto, not product page."

Mood words — bold, minimal, high-contrast, purpose-driven.

## Colors

The palette is the official Accenture Song five-color set: **white, blue, black, orange, greys**. Bar ratio in the brand book is `Blue ≈ Black > Orange / Grays > White` — the two heavy hitters dominate, orange flashes only as accent.

**Brand Blue `#0000d5`** is the CTA / link / key-color anchor. **Brand Orange `#d05005`** is the spot accent — used in small areas only, never as a background fill or body color. **Pure Black `#000000`** carries headings and inverse-background surfaces. **Pure White `#ffffff`** is the default canvas.

The grey ladder runs `#d5d5d5` (borders) → `#959595` (eyebrows / metadata) → `#555555` (sub-text). Each grey has a clear semantic — borders never use mid grey, captions never use light grey.

## Typography

The face is **Noto Sans JP** loaded as three independent `@font-face` families — `NotoSansJP-Bold`, `NotoSansJP-Regular`, `NotoSansJP-Medium`. The chain folds back to standard Noto Sans JP, then the system fallback. Label content uses **GT Pressura Mono** (Adobe Fonts); we substitute `Roboto Mono` and `IBM Plex Mono` here for portability.

Letter-spacing is 0 in this token system. The live site uses -3px on the 100px display headings to compress the slab visually; we floor to 0 because negative tracking on kanji breaks the JP hybrid rules. If reproducing display copy in Latin only, -3px is the brand-correct setting.

Type ladder — 14 / 16 / 28 / 35 / 60 / 100 px. Body sits at 28px (`body-md`) — large by JP standards, deliberately so. Headings escalate to 60px and 100px on hero sections.

## Layout

- 8-based spacing scale — 8 / 16 / 32 / 64 / 96 / 128
- Container is largely full-bleed with section-controlled inner max widths
- Single-column section structure; no grid lines
- Vertical rhythm leans heavily on the 64–128px slots
- Breakpoints — values not specified by the source; mobile recommended to scale display from 100px to 40–60px

## Elevation & Depth

The site is flat. No card shadows, no elevation tokens. Section separation comes from full-bleed background-color blocks (white / black inverse / soft grey panels), never from shadow.

## Shapes

Border radius is restrained: 5px on the primary CTA button, 8px on accent panels. No pill buttons, no large card radii. The geometry is rectangular with a tiny softening, so the typography can do all the loud work.

## Components

**Primary CTA** — `#0000d5` fill, white text, 5px radius, ~10/20 padding, 14px / 400. The button is small relative to the headline above it; CTAs are intentionally not the focus.

**Nav button** — Transparent fill, black text, NotoSansJP-Medium 14px / 400. Underlines on hover.

**Skip link (accessibility)** — `#000000` fill, white text, 16px / 400 — visible only on keyboard focus.

**Mono labels** — Roboto Mono 14px / 400, color `#959595`, used for section eyebrows like "OUR DNA," and `#0000d5` for CTA-style mono links like "Contact us."

**Cards / inputs** — Not part of the brand grammar; the site is sectional, not card-based.

## Do's and Don'ts

**Do**
- Use the official five colors only — white, blue `#0000d5`, black, orange `#d05005`, greys
- Reserve orange for accent flashes; never use it as a body or background color
- Use 100px-class headlines on hero sections to land the "manifesto" posture
- Pair NotoSansJP-Bold for headlines with NotoSansJP-Regular for description copy
- Use mono (Roboto Mono / IBM Plex Mono) labels in `#959595` for section eyebrows
- Keep CTAs small and rectangular; the type carries the energy

**Don't**
- Add pastel or non-brand accent colors
- Use orange as a body background or for large surfaces
- Use mono fonts for body copy — they are label-only
- Make CTAs visually compete with the display headline
- Add card shadows — Droga5 is flat by intent
- Drop body line-height below 1.6 in this token system

## Agent Prompt Guide

**Bias toward** — official five-color palette, Noto Sans JP Bold display at 60–100px, Roboto Mono labels in `#959595`, Brand Blue `#0000d5` for CTAs and links, orange as a small accent only, full-bleed sectional layout, flat surfaces (no shadows), generous 28px body copy.

**Reject** — additional accent colors beyond the official five, orange as a background or body color, pill-shaped CTAs, drop-shadow cards, mono-fonts on body copy, body line-height < 1.6, headlines under 60px on hero sections.
