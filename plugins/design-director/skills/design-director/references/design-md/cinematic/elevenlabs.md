---
version: alpha
name: ElevenLabs
description: |
  ElevenLabs' marketing site is a study in restrained elegance — a near-white canvas where typography and whisper-level shadows do all the heavy lifting. Pure white (`#ffffff`) and warm-stone tinted surfaces (`#f5f2ef`) keep the page feeling like a premium audio brochure rather than a clinical SaaS dashboard. Waldenburg at weight 300 is the typographic signature — display headings render as ethereal, whisper-thin titles that feel like sound waves rendered in type. Inter handles body and UI with positive letter-spacing (0.14–0.18px), creating airy reading rhythm that contrasts with the tight display tracking (-0.96px). The shadow system is the most refined in the catalog: multi-layer stacks combining inset half-pixel borders, outline rings, and warm-tinted elevation shadows (`rgba(78,50,23,0.04)`) at sub-0.1 opacity. Pill buttons (9999px) with translucent warm-stone backgrounds add a tactile, physical quality unique to the brand. WaldenburgFH bold uppercase appears only on specific CTA labels with 0.7px tracking — the one place the type system gets loud. Mood — ethereal, restrained, warm, premium-audio.

colors:
  primary: "#000000"
  primary-hover: "#1a1a1a"
  ink: "#000000"
  body: "#4e4e4e"
  muted: "#777169"
  canvas: "#ffffff"
  surface-soft: "#f5f5f5"
  surface-warm: "#f5f2ef"
  surface-near-white: "#f6f6f6"
  hairline: "#e5e5e5"
  hairline-subtle: "#0d0d0d"
  on-primary: "#ffffff"
  ring-blue: "#93c5fd"
  grid-cyan: "#7fffff"

typography:
  display-hero:
    fontFamily: "Waldenburg, 'Waldenburg Fallback', sans-serif"
    fontSize: 48px
    fontWeight: 300
    lineHeight: 1.08
    letterSpacing: -0.96px
  display-section:
    fontFamily: "Waldenburg, 'Waldenburg Fallback', sans-serif"
    fontSize: 36px
    fontWeight: 300
    lineHeight: 1.17
    letterSpacing: 0
  display-card:
    fontFamily: "Waldenburg, 'Waldenburg Fallback', sans-serif"
    fontSize: 32px
    fontWeight: 300
    lineHeight: 1.13
    letterSpacing: 0
  body-lg:
    fontFamily: "Inter, 'Inter Fallback', sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, 'Inter Fallback', sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.18px
  body-sm:
    fontFamily: "Inter, 'Inter Fallback', sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.16px
  nav:
    fontFamily: "Inter, 'Inter Fallback', sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.15px
  button:
    fontFamily: "Inter, 'Inter Fallback', sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.47
    letterSpacing: 0
  button-uppercase:
    fontFamily: "WaldenburgFH, 'WaldenburgFH Fallback', sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: 0.7px
  caption:
    fontFamily: "Inter, 'Inter Fallback', sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    letterSpacing: 0.14px
  small:
    fontFamily: "Inter, 'Inter Fallback', sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.38
    letterSpacing: 0
  code:
    fontFamily: "'Geist Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.85
    letterSpacing: 0
  micro:
    fontFamily: "Inter, 'Inter Fallback', sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.33
    letterSpacing: 0

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  "2xl": 20px
  "3xl": 24px
  warm: 30px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 80px
  section-lg: 120px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 0px 14px
  button-white:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  button-warm-stone:
    backgroundColor: "{colors.surface-warm}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.warm}"
    padding: 12px 20px
  button-uppercase:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-uppercase}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: 24px
  card-feature:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.3xl}"
    padding: 32px
  input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 12px 20px
---

## Overview

ElevenLabs' marketing site is a near-white meditation on whisper-level depth: a near-white canvas where typography and shadow stacks do all the heavy lifting. The brand makes voice AI, and the design feels exactly like that — clean, spacious, and quietly confident, with warm undertones (`#f5f2ef`) preventing the purity from feeling clinical.

The signature move is **Waldenburg weight 300** at 48px display sizes — most sites use bold to grab attention; ElevenLabs uses lightness to create intrigue. Inter handles body with positive letter-spacing (+0.14–0.18px) for an airy reading rhythm. WaldenburgFH bold uppercase appears only as specific CTA labels — the one place the type system gets loud.

Mood — ethereal, restrained, warm, premium-audio.

## Colors

The palette is **achromatic with warm undertones**: pure white (`#ffffff`), light gray (`#f5f5f5`), warm stone (`#f5f2ef`), and a 4-step ink scale (`#000000` / `#4e4e4e` / `#777169` / `#e5e5e5`). The discipline is broken only by warm-tinted shadow color (`rgba(78,50,23,0.04)` — note: shadow color, not surface color) which appears on featured CTAs.

The `#f5f2ef` warm stone is typically rendered at 80% alpha (`rgba(245,242,239,0.8)`) for the signature pill button — this 6-digit hex captures the unfiltered base; the alpha is applied at the component level.

## Typography

**Waldenburg weight 300** at 48px display sizes is the design's defining typographic choice. Where other systems use bold for impact, ElevenLabs uses lightness. Inter at body sizes with positive letter-spacing (+0.14–0.18px) creates the airy reading rhythm. WaldenburgFH bold uppercase (700, 0.7px tracking) appears only on specific CTA button labels — never anywhere else.

**Geist Mono** at relaxed line-height (1.85) for code blocks creates an unhurried, readable rhythm.

## Layout

8px base spacing with section rhythm at 80–120px between major bands. The whitespace is **Apple-like generous** but warmer — the warm stone undertones and warm-tinted shadows give empty space a tactile quality.

## Elevation & Depth

ElevenLabs uses the most refined shadow system in the catalog. Every shadow is at sub-0.1 opacity, many include both outward cast AND inward inset components, and the warm CTA shadows use an actual warm color rather than neutral black:

- **Inset half-pixel border**: `rgba(0,0,0,0.075) 0px 0px 0px 0.5px inset` — internal edge definition
- **Outline ring**: `rgba(0,0,0,0.06) 0px 0px 0px 1px` + `rgba(0,0,0,0.04) 0px 1px 2px` + `rgba(0,0,0,0.04) 0px 2px 4px`
- **Card elevation**: `rgba(0,0,0,0.4) 0px 0px 1px, rgba(0,0,0,0.04) 0px 4px 4px`
- **Warm lift (signature)**: `rgba(78,50,23,0.04) 0px 6px 16px` — warm-tinted shadow for featured CTAs
- **Edge shadow**: `rgba(0,0,0,0.08) 0px 0px 0px 0.5px`

Note these stacks are component-level treatments; `colors` only stores 6-digit hex base values.

## Shapes

Border radius: 2px (links) → 4px (nav, tabs) → 8px (small containers) → 12px (medium cards) → 16–20px (featured cards, code panels) → 24px (large panels) → 30px (warm stone CTA — the signature) → 9999px (pill buttons).

## Components

**Button primary (black pill)**: `#000000` fill, white text, full pill (9999px), 0px 14px padding. **Button white**: white fill with multi-layer shadow (border + ambient + lift). **Button warm stone (signature)**: 80%-alpha warm stone fill, asymmetric padding (12px 20px 12px 14px), 30px radius, warm-tinted shadow. **Button uppercase**: WaldenburgFH 14px / 700 with 0.7px tracking, used only for specific bold CTA labels.

**Card**: white fill, 16–24px radius, multi-layer shadow stack (inset + outline + elevation). **Input**: minimum padding (12px 20px), transparent text at default, focus uses tw-ring system.

## Do's and Don'ts

**Do**
- Use Waldenburg weight 300 for all display headings — the lightness IS the brand
- Apply multi-layer shadows (inset + outline + elevation) at sub-0.1 opacity
- Use warm stone tints (`#f5f2ef` at 80% alpha) for featured pill CTAs
- Apply positive letter-spacing (+0.14–0.18px) on Inter body text
- Use 9999px radius for primary pill buttons
- Apply warm-tinted shadows (`rgba(78,50,23,0.04)`) on featured CTAs
- Use WaldenburgFH bold uppercase ONLY for specific CTA button labels with 0.7px tracking

**Don't**
- Don't use bold (700) Waldenburg for headings — weight 300 is non-negotiable
- Don't use heavy shadows (>0.1 opacity) — the ethereal quality requires whisper-level depth
- Don't use cool gray borders — the system is warm-tinted throughout
- Don't skip the inset shadow component — half-pixel inset borders define edges
- Don't apply negative letter-spacing to body text — Inter uses positive tracking here
- Don't use sharp corners (<8px) on cards — generous radius is structural
- Don't introduce brand colors — the palette is intentionally achromatic with warm undertones

## Agent Prompt Guide

**Bias toward** — Waldenburg 300 at display, Inter +0.14–0.18px on body, multi-layer sub-0.1 shadow stacks, warm stone CTA pill (80%-alpha `#f5f2ef`, warm-tinted shadow), 9999px primary buttons, 16–24px card radius, WaldenburgFH bold uppercase only on specific CTA labels.

**Reject** — bold (700) Waldenburg headings, heavy shadows >0.1 opacity, cool gray borders, sharp corners on cards (<8px), negative letter-spacing on body Inter, decorative use of WaldenburgFH bold, brand-colored accents.
