---
version: alpha
name: Runway
description: |
  Runway's interface is a cinematic reel brought to life as a website — a dark, editorial, film-production-grade design where full-bleed photography and video ARE the primary UI elements. This is not a typical tech product page; it's a visual manifesto for AI-powered creativity. Every section feels like a frame from a film: dramatic lighting, sweeping landscapes, and intimate human moments captured in high-quality imagery that dominates the viewport. The design language is built on a single typeface — abcNormal — a clean geometric sans-serif that handles everything from 48px display headlines to 11px uppercase labels. This single-font commitment creates an extreme typographic uniformity that lets the visual content speak louder than text. Headlines use tight line-heights (1.0) with negative letter-spacing (-0.9px to -1.2px), creating compressed text blocks that feel like film titles rather than marketing copy. Cool-gray neutrals (`#767d88`, `#7d848e`) replace warm palettes; zero shadows and minimal borders make the interface intentionally invisible. Weight 450 — an unusual intermediate between regular and medium — appears on small uppercase labels, signaling typographic micro-craft. Mood — cinematic, editorial, film-production, AI-aesthetic.

colors:
  primary: "#000000"
  primary-deep: "#030303"
  ink: "#ffffff"
  ink-on-light: "#404040"
  ink-on-light-soft: "#3f3f3f"
  body: "#767d88"
  body-soft: "#7d848e"
  muted: "#a7a7a7"
  muted-soft: "#999999"
  hairline: "#27272a"
  hairline-soft: "#c9ccd1"
  hairline-light: "#d0d4d4"
  canvas: "#000000"
  surface-soft: "#1a1a1a"
  surface-light: "#ffffff"
  surface-near-white: "#fefefe"
  surface-cool: "#e9ecf2"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  link-dark: "#0c0c0c"
  tailwind-gray: "#6b7280"

typography:
  display:
    fontFamily: "abcNormal, 'abcNormal Fallback', sans-serif"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -1.2px
  section-heading:
    fontFamily: "abcNormal, 'abcNormal Fallback', sans-serif"
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -1px
  sub-heading:
    fontFamily: "abcNormal, 'abcNormal Fallback', sans-serif"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.9px
  card-title:
    fontFamily: "abcNormal, 'abcNormal Fallback', sans-serif"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0
  feature-title:
    fontFamily: "abcNormal, 'abcNormal Fallback', sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0
  body:
    fontFamily: "abcNormal, 'abcNormal Fallback', sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: -0.16px
  button:
    fontFamily: "abcNormal, 'abcNormal Fallback', sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.43
    letterSpacing: 0
  caption:
    fontFamily: "abcNormal, 'abcNormal Fallback', sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0.35px
  small:
    fontFamily: "abcNormal, 'abcNormal Fallback', sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: -0.16px
  micro:
    fontFamily: "abcNormal, 'abcNormal Fallback', sans-serif"
    fontSize: 11px
    fontWeight: 450
    lineHeight: 1.3
    letterSpacing: 0

rounded:
  none: 0px
  sm: 4px
  md: 6px
  lg: 8px
  xl: 16px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 64px
  section-lg: 78px

components:
  button:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 8px 16px
  card-dark:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  card-bordered:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 24px
  card-image:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.card-title}"
    rounded: "{rounded.lg}"
    padding: 16px
  hero:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    padding: 78px
  section-light:
    backgroundColor: "{colors.surface-cool}"
    textColor: "{colors.ink-on-light}"
    typography: "{typography.body}"
    padding: 64px
  nav-top:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    height: 64px
  label-uppercase:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.caption}"
---

## Overview

Runway's interface is a cinematic reel brought to life as a website. Full-bleed photography and video ARE the primary UI elements — every section feels like a frame from a film. The design is a visual manifesto for AI-powered creativity, with dramatic lighting, sweeping landscapes, and intimate human moments captured in high-quality imagery that dominates the viewport.

The design language is built on **a single typeface — abcNormal** — handling everything from 48px display headlines to 11px uppercase labels. This single-font commitment creates extreme typographic uniformity that lets visual content speak louder than text. Headlines use tight line-heights (1.0) with negative letter-spacing (-0.9px to -1.2px), creating compressed text blocks that feel like film titles.

Mood — cinematic, editorial, film-production, AI-aesthetic.

## Colors

The palette is **cool-toned and intentionally invisible**. Runway Black (`#000000`) is the primary background; Deep Black (`#030303`) handles a near-imperceptible variant for layered dark surfaces; Dark Surface (`#1a1a1a`) for card backgrounds. Pure White (`#ffffff`) for primary text on dark.

The neutral scale is **distinctly cool blue-gray** rather than warm: `#404040` (charcoal) → `#767d88` (cool slate, secondary text) → `#7d848e` (mid slate, tertiary) → `#a7a7a7` (muted) → `#c9ccd1` (cool silver border) → `#d0d4d4` (lightest border). The cool tone is part of the brand voice — warm grays would feel off-brand.

Light section uses Cool Cloud (`#e9ecf2`). The single dark-mode border is `#27272a` — barely visible containment.

## Typography

**abcNormal handles everything** — display, headings, body, captions, micro labels. Variety comes through size, weight, case, and letter-spacing rather than font-family switching.

**Tight everywhere**: nearly every size uses line-height 1.0–1.30 — even body text is relatively compressed (1.5 max). **Weight 450** is the precision detail — an uncommon intermediate between regular (400) and medium (500), used on 11px micro labels to signal typographic sophistication. **Negative tracking as default** even on body text (-0.16 to -0.26px). Uppercase as structure: 14px and 11px labels use `text-transform: uppercase` with positive 0.35px letter-spacing — navigational signposts contrasting with the tight lowercase text.

## Layout

8px base spacing with section vertical spacing 48–78px. Component gaps 16–24px. Max container 1600px (cinema-wide). Hero is full-viewport edge-to-edge.

Whitespace philosophy: **images replace whitespace**. Where other sites use empty space, Runway fills it with photography. The visual content IS the breathing room. Image grids use editorial magazine asymmetry — large hero images paired with smaller supporting images.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (Flat) | No shadow, no border | Everything — the dominant state |
| 1 (Bordered) | `1px solid #27272a` | Alert containers only |
| 2 (Dark Section) | `#000000` / `#1a1a1a` bg with light text | Hero, features, footer |
| 3 (Light Section) | White / Cool Cloud bg with dark text | Content sections, research |

Runway uses **zero shadows**. This is a film-production design decision: in cinema, depth comes from lighting, focus, and composition — not drop shadows. The interface mirrors this philosophy. Depth is communicated through dark/light section alternation, photographic depth-of-field, and overlay transparency — never CSS box-shadow.

## Shapes

Border radius is restrained: 4px (small interactive), 6px (links, small containers), 8px (standard containers, image cards), 16px (alert-style featured elements). The system is **subtly rounded, not pill-shaped** — the geometry stays close to rectangular.

## Components

**Button**: transparent fill, white text, 4px radius, 8×16px padding, 14px / 600 — extremely restrained, no heavy fills or borders. Interactive elements blend into the editorial flow.

**Card dark**: `#1a1a1a` fill, 8px radius, no shadow, 24px padding. **Card bordered**: transparent fill with `1px solid #27272a` (alert-style), 16px radius. **Card image**: photographic thumbnail with 8px radius and below-image caption.

**Hero**: full-viewport `#000000` background with cinematic image overlay, 48px abcNormal weight 400 / 1.0 line-height / -1.2px tracking white headline. **Section light**: Cool Cloud `#e9ecf2` background with charcoal text — the rare light-mode panel.

**Label uppercase**: 14px / 500 / 0.35px tracking in cool slate `#767d88` — navigational signpost contrasting with tight lowercase content.

## Do's and Don'ts

**Do**
- Use full-bleed cinematic photography as the primary visual element
- Use abcNormal for all text — single-typeface commitment
- Keep display line-heights at 1.0 with negative letter-spacing for film-title density
- Use cool-gray neutrals (`#767d88`, `#7d848e`) for secondary text
- Maintain zero shadows — depth comes from photography and section backgrounds
- Use uppercase with letter-spacing (0.35px) for navigational labels at 14px
- Apply small border-radius (4–8px) — Runway is NOT pill-shaped
- Let visual content (photos, videos) dominate — UI is invisible
- Use weight 450 for 11px micro labels — the precision matters

**Don't**
- Don't add decorative colors to the interface — color comes only from photography
- Don't use heavy borders or shadows — interface must be nearly invisible
- Don't use pill-shaped radius — Runway's geometry is subtly rounded, not circular
- Don't use bold (700+) weight — 400–600 is the full range, 450 as precision tool
- Don't compete with visual content — text overlays minimal and restrained
- Don't use gradient backgrounds — gradients exist only in photography
- Don't use more than one typeface — abcNormal handles everything
- Don't use body line-height above 1.50 — tight, editorial feel is core
- Don't reduce image quality — cinematic photography IS the design

## Agent Prompt Guide

**Bias toward** — full-bleed cinematic photography, single-typeface abcNormal, line-height 1.0 + negative tracking on display, cool-gray secondary text (`#767d88` / `#7d848e`), zero shadows, weight 450 for 11px micro labels, uppercase with 0.35px tracking on 14px labels, 4–8px radius (subtle, not pill).

**Reject** — decorative UI colors, heavy borders or shadows, pill-shaped radius, weight 700+, competing text overlays, CSS gradient backgrounds, multiple typefaces, body line-height >1.5, low-quality imagery.
