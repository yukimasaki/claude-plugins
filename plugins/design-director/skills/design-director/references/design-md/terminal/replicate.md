---
version: alpha
name: Replicate
description: |
  Replicate's interface is a developer playground crackling with creative energy — a bold, high-contrast design that feels more like a music festival poster than a typical API platform. The hero explodes with a vibrant orange-red-magenta gradient anchored by Replicate Red (`#ea2804`) that immediately signals "this is where AI models come alive," while the body grounds itself in a clean white canvas where code snippets and model galleries take center stage. The personality is defined by two extreme choices: massive display typography (up to 128px) using the heavy rb-freigeist-neue face, and exclusively pill-shaped geometry — 9999px radius on EVERYTHING. The display font is thick, bold, and confident; combined with basier-square for body and JetBrains Mono for code, the system serves developers who want power and playfulness in equal measure. Distinctive flourishes: dotted-underline links (`text-decoration: underline dotted`), Status Green (`#2b9a66`) badges for live models, and the closing manifesto "Imagine what you can build." rendered at 128px. Mood — playful, defiant, community-powered, vibrant.

colors:
  primary: "#202020"
  primary-hover: "#dd4425"
  ink: "#202020"
  body: "#202020"
  muted: "#646464"
  muted-strong: "#4e4e4e"
  disabled: "#8d8d8d"
  canvas: "#ffffff"
  surface: "#ffffff"
  surface-dark: "#202020"
  surface-code: "#24292e"
  hairline: "#bbbbbb"
  hairline-strong: "#202020"
  on-primary: "#fcfcfc"
  on-dark: "#fcfcfc"
  brand-red: "#ea2804"
  brand-red-hover: "#dd4425"
  status-green: "#2b9a66"
  link: "#202020"
  link-decoration: "#bbbbbb"

typography:
  display-mega:
    fontFamily: "rb-freigeist-neue, ui-sans-serif, system-ui"
    fontSize: 128px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0
  display-hero:
    fontFamily: "rb-freigeist-neue, ui-sans-serif, system-ui"
    fontSize: 72px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: -1.8px
  display-section:
    fontFamily: "rb-freigeist-neue, ui-sans-serif, system-ui"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0
  heading-md:
    fontFamily: "rb-freigeist-neue, ui-sans-serif, system-ui"
    fontSize: 30px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0
  sub-heading-sans:
    fontFamily: "basier-square, ui-sans-serif, system-ui"
    fontSize: 38.4px
    fontWeight: 400
    lineHeight: 0.83
    letterSpacing: 0
  feature-title:
    fontFamily: "basier-square, ui-sans-serif, system-ui"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.56
    letterSpacing: 0
  body-lg:
    fontFamily: "basier-square, ui-sans-serif, system-ui"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  body:
    fontFamily: "basier-square, ui-sans-serif, system-ui"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button:
    fontFamily: "basier-square, ui-sans-serif, system-ui"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "basier-square, ui-sans-serif, system-ui"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: -0.35px
  small-tag:
    fontFamily: "basier-square, ui-sans-serif, system-ui"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0
  mono-code:
    fontFamily: "jetbrains-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New'"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  mono-small:
    fontFamily: "jetbrains-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New'"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  none: 0px
  full: 9999px

spacing:
  "0": 0px
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  "3xl": 48px
  "4xl": 64px
  section: 96px
  section-lg: 160px
  section-xl: 192px

components:
  button-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 8px 24px
  button-outlined:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 8px 24px
  button-glass:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 6px 28px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: 16px
  card-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.full}"
    padding: 16px
  status-badge:
    backgroundColor: "{colors.status-green}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: 4px 12px
  code-block:
    backgroundColor: "{colors.surface-code}"
    textColor: "{colors.on-dark}"
    typography: "{typography.mono-code}"
    rounded: "{rounded.full}"
    padding: 16px 24px
---

## Overview

Replicate is a defiant celebration of developer-community energy: massive display typography (128px is a real size on this site), an explosive orange-red-magenta gradient hero, and exclusively pill-shaped geometry on every interactive surface. The system pairs the heavy custom face rb-freigeist-neue for display, basier-square for body, and JetBrains Mono for code — three voices, all loud in their own way.

Mood — playful, defiant, community-powered, vibrant.

## Colors

The primary text and dark surface is **Replicate Dark** (`#202020`) — a near-black slightly warmer than pure `#000`. **Replicate Red** (`#ea2804`) is the brand anchor, used in the hero blaze gradient and accent borders, never as a UI surface fill. A slightly warmer variant (`#dd4425`) handles button borders and link hover.

**Status Green** (`#2b9a66`) is the operational badge color — used to mark live models. **GitHub Dark** (`#24292e`) is the blue-tinted dark for code blocks. The neutral scale runs `#202020` → `#4e4e4e` → `#646464` → `#8d8d8d` → `#bbbbbb` for hierarchy.

The signature color move is the **hero blaze gradient**: a multi-stop flow through orange (`#ea2804`) → red → magenta → hot pink, occupying the full hero section. This gradient cannot be reproduced as a single token — implement as a CSS `linear-gradient` from the brand red through the warm spectrum.

Links use a distinctive **dotted underline** in `#bbbbbb` — a developer-notebook aesthetic lighter and more casual than solid underlines.

## Typography

**rb-freigeist-neue** carries display at weights 600–700 — never lighter. The 128px closing manifesto ("Imagine what you can build.") is the design equivalent of shouting from a rooftop. Hero text at 72px weight 700 with -1.8px letter-spacing creates dense, impactful blocks.

**basier-square** at 400–600 carries body and UI. Weight 600 is emphasis; bold (700) is reserved for the heavy display face. 12px tags use `text-transform: lowercase` — a casual, developer-friendly choice.

**JetBrains Mono** at 14px (or 11px for tiny refs) carries all code content.

The contrast between heavy display (700, 48–128px) and quiet body (400, 16–20px) is extreme and intentional.

## Layout

8px base scale extending to extreme section spacing (96px → 160px → 192px). Hero occupies a full-width gradient zone; model gallery uses a multi-column responsive grid; code examples sit in dark contained blocks. The whitespace philosophy is **bold and generous** — massive vertical zones between sections, dense within galleries.

## Elevation & Depth

Replicate relies on **borders and background color** for depth, never shadows.

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | White body, text blocks |
| Bordered (Level 1) | 1px solid `#202020` | Cards, buttons, containers |
| Accent border (Level 2) | 1px solid `#ea2804` | Featured/highlighted items |
| Gradient hero (Level 3) | Full-width blaze gradient | Hero, max visual impact |
| Dark zone (Level 4) | `#202020` background with light text | Manifesto, footer, feature sections |

The dramatic gradient hero and dark/light section alternation provide all the depth the design needs.

## Shapes

The radius system is the most extreme in any major tech brand: **9999px on everything**. Buttons, images, badges, labels, containers — every interactive or contained element is full-pill. There is no 4px, no 8px, no gradient of roundness. This binary commitment is the visual signature.

## Components

**Dark solid pill**: `#202020` fill, near-white text, 8/24 padding, full pill — maximum emphasis.

**White outlined pill**: white fill, dark text, 1px solid `#202020` border, full pill — secondary actions.

**Glass button**: white fill (or transparent) with light hairline outline, full pill, asymmetric 6/56/6/28 padding for icon-search layouts.

**Status badge**: Status Green (`#2b9a66`) fill, white text, 14px caption, full pill — the operational/live indicator.

**Code block**: GitHub Dark (`#24292e`) fill, JetBrains Mono 14px, full pill container.

**Model card**: full-pill image container, model name in basier-square 16/600, run count in `#646464`. Featured cards add a 1px solid `#ea2804` accent border.

## Do's and Don'ts

**Do**
- Use full-pill (9999px) radius on EVERYTHING — buttons, images, badges, containers
- Use rb-freigeist-neue at weight 700 for display — go big (72px+) or go home
- Anchor hero with the orange-red-magenta blaze gradient (`#ea2804` family)
- Use `#202020` as the primary dark — not pure black
- Apply dotted underline (`text-decoration: underline dotted #bbbbbb`) on text links
- Use Status Green `#2b9a66` for operational/success badges
- Keep body in basier-square at 400–600 — bold (700) is for display only
- Use JetBrains Mono for all code content
- Build a manifesto moment with 128px type for emotional impact

**Don't**
- Use any radius other than 9999px — the pill system is absolute
- Use brand red `#ea2804` as a surface/background fill — gradients and accent borders only
- Reduce display below 48px on desktop — the heavy face needs size
- Use light/thin weights on rb-freigeist-neue — 600–700 only
- Use solid underlines on links — dotted is the signature
- Add drop shadows — depth is borders + background color
- Use warm neutrals — the gray scale is purely neutral (`#202020` → `#bbbbbb`)
- Make the hero gradient subtle — it should be BOLD and vibrant

## Agent Prompt Guide

**Bias toward** — full-pill (9999px) on everything, rb-freigeist-neue display at 700 / 48–128px, basier-square 400–600 body, JetBrains Mono code, `#202020` primary dark (not pure black), orange-red-magenta hero gradient, dotted underline links, Status Green badges, 96–192px section spacing.

**Reject** — any radius other than 9999px, brand red as a surface fill, light weights on display, solid underlines, drop shadows, warm neutrals in the gray scale, subtle hero gradients, display below 48px on desktop.
