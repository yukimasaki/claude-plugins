---
version: alpha
name: Vercel
description: |
  Vercel's Geist design system is the visual thesis of developer infrastructure made invisible — minimalism as engineering principle, not decoration. Pure-white canvas (`#ffffff`) carries near-black ink (`#171717`, never `#000`), with the entire color palette held achromatic except for three workflow accent colors (Ship Red, Preview Pink, Develop Blue) reserved for Vercel's pipeline metaphor. Type runs Geist Sans with aggressive negative letter-spacing (-2.88px to -2.4px at display sizes) — text feels minified, like code optimized for production — and Geist Mono for technical labels with `"liga"` enabled globally. The signature move is shadow-as-border: `box-shadow 0px 0px 0px 1px rgba(0,0,0,0.08)` replaces traditional CSS borders throughout, allowing smoother transitions and rounded corners without clip artifacts. Cards stack multi-layer shadows where each layer has a distinct architectural purpose (border / ambient / inner-glow). Mood — restrained, engineered, philosophical, gallery-like.

colors:
  primary: "#171717"
  primary-hover: "#000000"
  ink: "#171717"
  body: "#4d4d4d"
  muted: "#666666"
  disabled: "#808080"
  canvas: "#ffffff"
  surface: "#ffffff"
  surface-soft: "#fafafa"
  hairline: "#ebebeb"
  on-primary: "#ffffff"
  link: "#0072f5"
  focus: "#0070f3"
  workflow-ship: "#ff5b4f"
  workflow-preview: "#de1d8d"
  workflow-develop: "#0a72ef"
  badge-bg: "#ebf5ff"
  badge-text: "#0068d6"
  console-blue: "#0070f3"
  console-purple: "#7928ca"
  console-pink: "#eb367f"

typography:
  display-xl:
    fontFamily: "Geist, Arial, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: -2.4px
  display-lg:
    fontFamily: "Geist, Arial, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -2.4px
  display-md:
    fontFamily: "Geist, Arial, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -1.28px
  heading-lg:
    fontFamily: "Geist, Arial, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: -0.96px
  body-lg:
    fontFamily: "Geist, Arial, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: 0
  body-md:
    fontFamily: "Geist, Arial, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.56
    letterSpacing: 0
  body-sm:
    fontFamily: "Geist, Arial, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  ui-emphasized:
    fontFamily: "Geist, Arial, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: -0.32px
  button:
    fontFamily: "Geist, Arial, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    letterSpacing: 0
  caption:
    fontFamily: "Geist, Arial, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.33
    letterSpacing: 0
  mono-body:
    fontFamily: "'Geist Mono', ui-monospace, SFMono-Regular, 'Roboto Mono', Menlo, Monaco, 'Liberation Mono', 'Courier New', monospace"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  mono-caption:
    fontFamily: "'Geist Mono', ui-monospace, SFMono-Regular, 'Roboto Mono', Menlo, Monaco, monospace"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 6px
  lg: 8px
  xl: 12px
  "2xl": 64px
  "3xl": 100px
  full: 9999px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 12px
  "4": 16px
  "5": 20px
  "8": 32px
  "9": 36px
  "10": 40px
  section: 80px
  section-lg: 120px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 8px 16px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  button-outline:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 8px 16px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
  card-image:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
  pill-badge:
    backgroundColor: "{colors.badge-bg}"
    textColor: "{colors.badge-text}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: 0px 10px
  nav-pill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.2xl}"
    padding: 0px 16px
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 8px 12px
---

## Overview

Vercel's Geist design system is the gold standard of restrained developer-infrastructure design — a system so minimal it borders on philosophical. The Geist font family (Sans + Mono) is the crown jewel: aggressive negative letter-spacing at display sizes (-2.4px to -2.88px) creates compressed, urgent headlines that feel like minified code, while OpenType `"liga"` enabled globally rewards close reading with subtle structural ligatures.

The signature move is **shadow-as-border**: `box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.08)` replaces traditional CSS borders throughout, allowing smoother transitions, rounded corners without clip artifacts, and a subtler visual weight. Cards stack multi-layer shadows where each layer has a distinct architectural purpose (border + ambient + inner glow with `#fafafa` ring).

Mood — restrained, engineered, philosophical, gallery-like.

## Colors

The palette is **near-monochromatic**: white canvas (`#ffffff`), near-black ink (`#171717`, deliberately not pure black for micro-warmth), and a 6-step gray scale (`#171717` / `#4d4d4d` / `#666666` / `#808080` / `#ebebeb` / `#fafafa`). The achromatic discipline is broken only by **three workflow accent colors** mapped to Vercel's deployment pipeline: Ship Red (`#ff5b4f`), Preview Pink (`#de1d8d`), Develop Blue (`#0a72ef`). These are functional, never decorative — they appear only when marking pipeline stages.

Link blue (`#0072f5`) and focus blue (`hsla(212, 100%, 48%, 1)`) live in their own role buckets. Pill badges use a tinted-blue surface system (`#ebf5ff` bg / `#0068d6` text) for status indicators. Console / code colors (`#0070f3` / `#7928ca` / `#eb367f`) are reserved for syntax highlighting contexts.

The `hairline-shadow: "#00000014"` token (rgba 0 0 0 / 0.08 in 8-digit hex) is the foundational color for the shadow-as-border technique.

## Typography

**Geist Sans** with extreme negative letter-spacing scales by size: -2.4px at 48px, -1.28px at 32px, -0.96px at 24px, -0.32px at 16px (only on weight 600), and `0` at 14px and below. This is the most aggressive negative tracking of any major design system — text feels minified.

**Three-weight discipline**: 400 (body / reading), 500 (UI / interactive), 600 (heading / emphasis). No weight 700 except for tiny micro-badges. Hierarchy comes from size and tracking, not weight.

**Geist Mono** is the technical-label voice — uppercase + `"tnum"` for tabular numbers. Used for code blocks, terminal output, and the workflow pipeline labels.

OpenType `"liga"` is enabled globally on all Geist text — ligatures aren't decorative but structural, creating tighter glyph combinations.

## Layout

8px base spacing with notable gap from 16 → 32 (no 20 / 24 in primary scale). Massive vertical padding between sections (80–120px) — gallery emptiness as design language. White sections alternate with white sections; separation comes from shadow-borders and spacing alone, never background-color shift.

## Elevation & Depth

Vercel uses **multi-value shadow stacks** where each layer has a distinct architectural purpose:

- **Ring (Level 1)**: `rgba(0, 0, 0, 0.08) 0px 0px 0px 1px` — shadow-as-border for most elements
- **Light ring (Level 1b)**: `rgb(235, 235, 235) 0px 0px 0px 1px` — lighter ring for tabs and image containers
- **Subtle card (Level 2)**: ring + `rgba(0, 0, 0, 0.04) 0px 2px 2px`
- **Full card (Level 3)**: ring + subtle + `rgba(0, 0, 0, 0.04) 0px 8px 8px -8px` + inner `#fafafa 0px 0px 0px 1px` glow
- **Focus**: `2px solid hsla(212, 100%, 48%, 1)` outline

Skipping the inner `#fafafa` ring on Level 3 cards breaks the system — that ring is the subtle inner glow that makes the card feel built rather than floating.

## Shapes

Border radius: 2px (inline code) → 4px (small containers) → 6px (buttons / functional) → 8px (cards) → 12px (image cards, top-rounded) → 64–100px (nav pills) → 9999px (badges, status pills).

## Components

**Button primary**: dark (`#171717`) fill, white text, 6px radius, 8/16 padding. **Button outline**: white fill with shadow-border (`rgb(235, 235, 235) 0px 0px 0px 1px`), no traditional CSS border. Both get `2px solid` focus blue outline.

**Card**: white fill, no border, multi-layer shadow stack (see Elevation & Depth above). The inner `#fafafa` ring on full cards is what gives Vercel cards their subtle inner glow.

**Pill badge**: `#ebf5ff` background, `#0068d6` text, 9999px radius, 10px horizontal padding. **Nav pill**: 64–100px radius for tab navigation. **Workflow pipeline**: three-step horizontal (Develop → Preview → Ship) with each step's accent color and Geist Mono uppercase label.

## Do's and Don'ts

**Do**
- Use Geist Sans with aggressive negative letter-spacing at display (-2.4px to -2.88px at 48px)
- Use shadow-as-border (`0px 0px 0px 1px rgba(0,0,0,0.08)`) instead of CSS `border`
- Enable `"liga"` on all Geist text — ligatures are structural
- Use the three-weight system: 400 (body), 500 (UI), 600 (heading)
- Use multi-layer shadow stacks on cards (border + ambient + distance + inner highlight)
- Use `#171717` for primary text, never `#000000` — the micro-warmth matters
- Reserve workflow accents (Red / Pink / Blue) for the pipeline metaphor only

**Don't**
- Use positive letter-spacing on Geist Sans — it's always 0 or negative
- Use weight 700 on body text — 600 is the maximum
- Use traditional CSS `border` on cards
- Introduce warm colors (oranges, yellows, greens) into UI chrome
- Apply workflow accent colors decoratively
- Use heavy shadows (> 0.1 opacity) — the system is whisper-level
- Skip the inner `#fafafa` ring in card shadows — it's the glow that makes the system work
- Use pill radius (9999px) on primary action buttons — pills are for badges only

## Agent Prompt Guide

**Bias toward** — Geist Sans + Mono, aggressive negative letter-spacing on display, shadow-as-border throughout, three-weight discipline (400/500/600), multi-layer card shadows with inner `#fafafa` ring, achromatic palette + workflow-accent triplet.

**Reject** — pure black `#000` on text, CSS `border` on cards, weight 700 on body, decorative use of workflow accents, heavy drop shadows, positive letter-spacing on Geist, pill radius on primary CTAs.
