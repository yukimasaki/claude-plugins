---
version: alpha
name: Sentry
description: |
  Sentry's site is a dark-mode-first developer tool that speaks the language of code editors and terminal windows. The aesthetic is rooted in deep purple-black backgrounds (`#1f1633`, `#150f23`) that evoke late-night debugging — never the cold neon of cyberpunk, but warm purple tones that replace the typical cool grays of developer tools. "Dammit Sans" appears at hero scale (88px / weight 700) as a display font with personality matching Sentry's irreverent voice ("Code breaks. Fix it faster."), while Rubik handles 90% of UI typography with a clean four-tier weight system (400/500/600/700) and uppercase letter-spaced labels. The signature button system uses muted purple `#79628c` with inset shadows that creates a tactile, almost physical pressed-INTO-surface quality, and the deep purple ambient glow (`rgba(22,15,36,0.9) 0px 4px 4px 9px`) gives content a bioluminescent emit-its-own-light quality. Lime green `#c2ef4e` is the high-impact accent, deployed once per section. Mood — debugging, irreverent, tactile, bioluminescent.

colors:
  primary: "#79628c"
  primary-hover: "#6a5fc1"
  primary-soft: "#584674"
  accent-violet: "#422082"
  accent-lime: "#c2ef4e"
  accent-coral: "#ffb287"
  accent-pink: "#fa7faa"
  ink: "#1f1633"
  body: "#ffffff"
  muted: "#e5e7eb"
  code: "#dcdcaa"
  canvas: "#ffffff"
  surface-app: "#1f1633"
  surface-app-deep: "#150f23"
  on-app: "#ffffff"
  on-app-muted: "#e5e7eb"
  hairline: "#cfcfdb"
  hairline-app: "#362d59"
  hairline-app-strong: "#584674"
  on-primary: "#ffffff"
  link-on-light: "#362d59"

typography:
  display-hero:
    fontFamily: "'Dammit Sans', Rubik, -apple-system, system-ui, sans-serif"
    fontSize: 88px
    fontWeight: 700
    lineHeight: 1.20
    letterSpacing: 0
  display-secondary:
    fontFamily: "'Dammit Sans', Rubik, -apple-system, system-ui, sans-serif"
    fontSize: 60px
    fontWeight: 500
    lineHeight: 1.10
    letterSpacing: 0
  section-heading:
    fontFamily: "Rubik, -apple-system, system-ui, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: 30px
    fontWeight: 400
    lineHeight: 1.20
    letterSpacing: 0
  sub-heading:
    fontFamily: "Rubik, -apple-system, system-ui, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: 27px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  card-title:
    fontFamily: "Rubik, -apple-system, system-ui, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  feature-title:
    fontFamily: "Rubik, -apple-system, system-ui, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  body:
    fontFamily: "Rubik, -apple-system, system-ui, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  body-emphasis:
    fontFamily: "Rubik, -apple-system, system-ui, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.50
    letterSpacing: 0
  nav:
    fontFamily: "Rubik, -apple-system, system-ui, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.40
    letterSpacing: 0
  button:
    fontFamily: "Rubik, -apple-system, system-ui, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.14
    letterSpacing: 0.2px
  caption:
    fontFamily: "Rubik, -apple-system, system-ui, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    letterSpacing: 0.2px
  micro:
    fontFamily: "Rubik, -apple-system, system-ui, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: 10px
    fontWeight: 600
    lineHeight: 1.80
    letterSpacing: 0.25px
  code:
    fontFamily: "Monaco, Menlo, 'Ubuntu Mono', monospace"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0

rounded:
  none: 0px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 13px
  "2xl": 18px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 12px
  "4": 16px
  "5": 24px
  "6": 32px
  "8": 40px
  "10": 64px
  "12": 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.xl}"
    padding: 12px 24px
  button-glass:
    backgroundColor: "rgba(255, 255, 255, 0.18)"
    textColor: "{colors.on-app}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: 8px
  button-white:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.surface-app}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  button-violet:
    backgroundColor: "{colors.accent-violet}"
    textColor: "{colors.on-app}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 8px 16px
  card-app:
    backgroundColor: "{colors.surface-app}"
    rounded: "{rounded.lg}"
    padding: 24px
  card-glass:
    backgroundColor: "rgba(255, 255, 255, 0.18)"
    rounded: "{rounded.lg}"
    padding: 24px
  input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.surface-app}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
---

## Overview

Sentry's marketing lives on deep purple-black `#1f1633` and `#150f23` (never pure black) — the warm-purple "dark IDE" aesthetic. Dammit Sans handles the irreverent display layer at 88px hero, while Rubik shoulders 90% of UI typography with a clean four-tier weight system (400/500/600/700). The button system uses muted purple `#79628c` with inset shadows that creates a tactile pressed-into-surface feel, and the deep ambient purple glow (`rgba(22,15,36,0.9) 0px 4px 4px 9px`) makes content seem to emit its own bioluminescent light. Lime green `#c2ef4e` is the high-impact accent — once per section maximum.

Mood — debugging, irreverent, tactile, bioluminescent.

## Colors

The dark purple system runs `#1f1633` (primary background) and `#150f23` (deeper sections, footer) — never pure black. Borders use `#362d59` (default) and `#584674` (button border).

The accent spectrum: Sentry purple `#6a5fc1` (links / hover), muted purple `#79628c` (button bg), deep violet `#422082` (selects / active states), lime green `#c2ef4e` (high-visibility accent), coral `#ffb287` (focus backgrounds), pink `#fa7faa` (decorative). Code yellow `#dcdcaa` for syntax highlighting.

Glass surfaces use `rgba(255,255,255,0.18)` and `rgba(54,22,107,0.14)` for hover overlays. Light context inputs sit on white with `#cfcfdb` borders.

## Typography

Dual personality — Dammit Sans brings irreverent character at display scale only (88px hero, 60px secondary); Rubik provides clean professionalism for everything functional. Uppercase + letter-spacing 0.2–0.25px is the systematic technical-label pattern across buttons, captions, and micro-text. Weight stratification: 400 (body), 500 (nav/emphasis), 600 (titles), 700 (CTAs). Tight headings (1.10–1.25), relaxed body (1.50), expanded captions (2.00) for tiny readability. Monaco handles code blocks.

## Layout

8px base, scale 4/8/12/16/24/32/40/64/80px. Max content width 1152px (XL breakpoint). Container padding 2rem mobile / 4rem tablet+. Sections use 64–80px+ vertical spacing — generous dark breathing room where the dark canvas serves as a visual rest. Asymmetric button padding patterns (12/16, 8/12) feel organic rather than rigid.

## Elevation & Depth

Six-tier system unique in mixing inset (sunken) and ambient shadows:

- **Sunken** — `rgba(0,0,0,0.1) 0px 1px 3px inset` (primary buttons feel pressed INTO the surface)
- **Surface** — `rgba(0,0,0,0.08) 0px 2px 8px` (glass buttons, subtle cards)
- **Elevated** — `rgba(0,0,0,0.1) 0px 10px 15px -3px` (cards, floating panels)
- **Prominent** — `rgba(0,0,0,0.18) 0px 0.5rem 1.5rem` (hover, modals)
- **Ambient** — `rgba(22,15,36,0.9) 0px 4px 4px 9px` (signature deep purple glow around hero — the bioluminescent quality)

Frosted glass uses `blur(18px) saturate(180%)`. Shadows feel purple-tinted, never neutral gray.

## Shapes

6px (form inputs, small interactive) → 8px (buttons, cards, containers) → 10–12px (larger containers, glass panels) → 13px (primary muted purple buttons — the signature radius) → 18px (image containers, badges).

## Components

**Primary muted purple** — `#79628c` fill, white uppercase 14px text with 0.2px tracking, `1px solid #584674` border, 13px radius, inset shadow `rgba(0,0,0,0.1) 0px 1px 3px inset` for tactile pressed feel, hover lift `rgba(0,0,0,0.18) 0px 0.5rem 1.5rem`.

**Glass white** — `rgba(255,255,255,0.18)` frosted bg, white text, 12px radius, 8px padding, hover `rgba(54,22,107,0.14)`. Used for secondary actions on dark surfaces.

**White solid CTA** — `#ffffff` fill, `#1f1633` text, 8px radius, 12/16 padding, hover transitions to `#6a5fc1` with white text, focus `#ffb287` coral background with `#6a5fc1 solid 0.125rem` outline.

**Deep violet select** — `#422082` fill, white text, 8px radius, 8/16 padding.

**Cards** — semi-transparent or dark purple surfaces, 8–12px radius, `rgba(0,0,0,0.1) 0px 10px 15px -3px` shadow, optional `blur(18px) saturate(180%)` backdrop filter.

## Do's and Don'ts

**Do**
- Use deep purple `#1f1633` and `#150f23` backgrounds — never pure black
- Apply inset shadows on primary buttons for the tactile pressed-into-surface effect
- Use Dammit Sans ONLY for hero/display — Rubik for everything else
- Apply uppercase + 0.2px letter-spacing on buttons and labels
- Use lime green `#c2ef4e` sparingly — once per section maximum
- Employ frosted glass (`blur(18px) saturate(180%)`) for layered surfaces
- Keep shadows purple-tinted, never neutral gray
- Use Rubik's four-tier weight system: 400/500/600/700

**Don't**
- Use pure black `#000000` for backgrounds — always warm purple-blacks
- Apply Dammit Sans to body text or UI — display-only
- Use standard gray (`#666`, `#999`) for borders — use purple-tinted (`#362d59`, `#584674`)
- Drop the uppercase treatment on buttons — system-wide pattern
- Use sharp corners (0px radius) — minimum 6px for interactive elements
- Mix lime-green with coral/pink in the same component
- Use flat (non-inset) shadows on primary buttons — tactile quality is signature
- Forget letter-spacing on uppercase text — 0.2px minimum

## Agent Prompt Guide

**Bias toward** — deep purple-black `#1f1633` / `#150f23` backgrounds, Dammit Sans hero + Rubik UI, inset-shadow tactile primary buttons, uppercase 0.2px-tracked labels, frosted glass overlay surfaces, ambient purple glow on hero, lime-green `#c2ef4e` precision accent.

**Reject** — pure black backgrounds, Dammit Sans on body, standard gray borders, sharp 0px corners, flat shadows on primary buttons, multiple lime-green uses per section, mixed lime+coral in one component.
