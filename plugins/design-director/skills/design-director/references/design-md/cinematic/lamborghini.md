---
version: alpha
name: Lamborghini
description: |
  Lamborghini's website is a cathedral of darkness — a digital stage where jet-black surfaces stretch infinitely and every element emerges from the void like a machine under a spotlight. The page is almost entirely true black (`#000000`) — not dark gray, not near-black — that saturates the viewport and refuses to yield. Into this abyss, white type and Lamborghini Gold (`#ffc000`) are deployed with surgical precision, creating a visual language that feels like walking through a nighttime motorsport event where every surface absorbs light except the things that matter. The hero is a full-viewport video showing event footage or vehicle reveals with the bull logo floating ethereally above. Navigation is minimal: a centered bull logo, a "MENU" hamburger left, search/bookmark icons right — all rendered in white against the black canvas. LamboType — a custom Neo-Grotesk by Character Type with 12° angled terminals inspired by aerodynamic car geometry — handles everything from 120px uppercase display headlines to 10px micro labels. Headlines SHOUT in uppercase at extreme scales (120px, 80px, 54px) with tight line-heights (0.92 at 120px), creating dense blocks stamped from steel. Zero border-radius on buttons — sharp angular rectangles echoing aerodynamic vehicle lines. Mood — nocturnal, theatrical, intimidating, motorsport-aristocratic.

colors:
  primary: "#ffc000"
  primary-active: "#917300"
  primary-light: "#ffce3e"
  ink: "#ffffff"
  body: "#7d7d7d"
  body-strong: "#f5f5f5"
  muted: "#969696"
  muted-soft: "#666666"
  hairline: "#313131"
  canvas: "#000000"
  surface-soft: "#181818"
  surface-elevated: "#202020"
  surface-graphite: "#494949"
  surface-iron: "#555555"
  surface-light: "#f8f8f8"
  surface-light-soft: "#e6e6e6"
  on-primary: "#000000"
  on-dark: "#ffffff"
  cyan-pulse: "#29abe2"
  link-hover: "#3860be"
  hover-teal: "#1eaedb"

typography:
  hero-display:
    fontFamily: "LamboType, Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 120px
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: 0
  display-2:
    fontFamily: "LamboType, Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 80px
    fontWeight: 400
    lineHeight: 1.13
    letterSpacing: 0
  section-title:
    fontFamily: "LamboType, Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 54px
    fontWeight: 400
    lineHeight: 1.19
    letterSpacing: 0
  sub-section:
    fontFamily: "LamboType, Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: 0
  feature-heading:
    fontFamily: "LamboType, Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 27px
    fontWeight: 400
    lineHeight: 1.37
    letterSpacing: 0
  card-title:
    fontFamily: "LamboType, Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0
  body-lg:
    fontFamily: "LamboType, Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.56
    letterSpacing: 0
  body:
    fontFamily: "LamboType, Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.16px
  button-large:
    fontFamily: "LamboType, Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button-standard:
    fontFamily: "LamboType, Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 14.4px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0.2px
  button-small:
    fontFamily: "LamboType, Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.13px
  caption:
    fontFamily: "LamboType, Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.14
    letterSpacing: -0.42px
  label:
    fontFamily: "LamboType, Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.83
    letterSpacing: 0.96px
  micro:
    fontFamily: "LamboType, Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.225px

rounded:
  none: 0px
  xs: 1px
  sm: 2px
  switch: 20px

spacing:
  xxs: 2px
  xs: 5px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 40px
  section: 48px
  section-lg: 56px

components:
  button-gold:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-large}"
    rounded: "{rounded.none}"
    padding: 24px
  button-gold-hover:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.button-standard}"
    rounded: "{rounded.none}"
    padding: 16px
  button-white:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface-elevated}"
    typography: "{typography.button-standard}"
    rounded: "{rounded.none}"
    padding: 16px
  button-black:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.surface-elevated}"
    typography: "{typography.button-standard}"
    rounded: "{rounded.none}"
    padding: 16px
  card-dark:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 24px
  card-feature:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.feature-heading}"
    rounded: "{rounded.none}"
    padding: 40px
  badge:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.on-dark}"
    typography: "{typography.micro}"
    rounded: "{rounded.sm}"
    padding: 8px
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.hero-display}"
    padding: 56px
  switch-control:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.switch}"
    padding: 4px 8px
---

## Overview

Lamborghini's website is a cathedral of darkness — true `#000000` that refuses to yield, broken only by white type and Lamborghini Gold (`#ffc000`). The hero is full-viewport video; navigation is minimal floating marks (centered bull logo, MENU hamburger left, search/bookmark right). The mood is nocturnal luxury — exclusive, theatrical, deliberately intimidating.

LamboType — a custom Neo-Grotesk by Character Type with 12° angled terminals inspired by aerodynamic vehicle geometry — handles everything from 120px uppercase headlines to 10px micro labels. Headlines SHOUT in uppercase at extreme scales with tight line-heights (0.92 at 120px), creating dense blocks stamped from steel.

Mood — nocturnal, theatrical, intimidating, motorsport-aristocratic.

## Colors

The palette is monochrome-plus-gold. **Lamborghini Gold** (`#ffc000`) is the sole accent and the brand voltage — used **exclusively** for primary CTA buttons. Never for decoration. The dark surface progression `#000000` → `#181818` → `#202020` → `#494949` → `#7d7d7d` is the elevation system: on a black canvas, traditional drop shadows are invisible, so depth comes from progressively lighter dark grays.

White (`#ffffff`) handles all primary text on dark surfaces. Cyan Pulse (`#29abe2`) appears as informational accent. Hover states on transparent ghost buttons shift to Teal Action (`#1eaedb`).

## Typography

**LamboType** at weight 400 dominates all display sizes — the typeface is so distinctive it doesn't need bold emphasis. UPPERCASE is the default voice for display and feature headings — a shouting, commanding tone matching brand aggression.

The scale runs from 120px hero down to 10px micro — a 12:1 ratio creating dramatic hierarchy. Line-heights are tight at scale (0.92–1.19) and the captions use **negative tracking** (-0.42px at 14px) for a compressed, technical aesthetic. Micro text uses positive tracking (+0.225px at 10px) for legibility at the smallest sizes.

## Layout

8px base spacing with section padding 48–56px vertical, 40px horizontal. Bootstrap-style 12-column grid. Max content width ~1200px with full-bleed hero sections breaking out edge-to-edge.

Whitespace philosophy: **darkness IS whitespace**. The generous black expanses between content blocks serve the same function as white space in a light design — creating breathing room that elevates each element to gallery-piece status. A model name floating in the middle of a black viewport has the same visual weight as a sculpture on a white wall.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (Abyss) | `#000000` flat | Page background, deepest layer |
| 1 (Surface) | `#181818` or `#202020` | Cards, content panels, elevated sections |
| 2 (Overlay) | `rgba(0,0,0,0.7)` | Modal backdrops, video dimming |
| 3 (Fog) | `rgba(0,0,0,0.5)` | Lighter overlays, hover states |
| 4 (Mist) | `rgba(0,0,0,0.25)` | Subtle depth hints |

Lamborghini achieves depth through **surface color layering rather than shadows**. Elevated elements are literally lighter than their surroundings, inverting the traditional shadow model. Full-bleed cinematic video provides atmospheric depth through natural lighting. No CSS gradients, glows, or blur effects.

## Shapes

| Value | Use |
|---|---|
| 0px | Default for everything — buttons, cards, containers, images |
| 1px | Subtle span elements |
| 2px | Badges, close buttons, cookie elements |
| 20px | Toggle switches only — the sole rounded element |

Zero border-radius is non-negotiable — sharp angles echo aerodynamic vehicle lines. The 20px on toggle switches is the only exception.

## Components

**Button gold** (primary): Lamborghini Gold `#ffc000` fill, black text, 0px radius, 24px padding, 16px LamboType weight 400. Hover darkens to `#917300`. Used for "Discover More", "Tickets", "Start Configuration".

**Button ghost**: transparent fill, 1px white border at 50% opacity, white text, 14.4px LamboType uppercase weight 700 with 0.2px tracking, 16px padding. Hover swaps to Teal Action `#1eaedb` at 70% opacity. Used as secondary CTA on dark sections.

**Card dark / feature card**: `#202020` or `#000000` fill on canvas, full-bleed photography + overlaid text in white. No border, no shadow, 0px radius. **Badge**: gray `#969696` fill, white text, 10px LamboType uppercase, 2px radius, 8px padding — tiny metallic pill.

**Hero band**: 100vh full-viewport video with white text overlay, hexagonal pause button bottom-right (the only round geometric flourish — echoes brand DNA), thin white progress bar at bottom.

## Do's and Don'ts

**Do**
- Use absolute black (`#000000`) as primary background — never dark gray as substitute
- Apply Lamborghini Gold (`#ffc000`) **exclusively** for primary CTAs — never decorative
- Set all display headings UPPERCASE with LamboType — the voice is always SHOUTING
- Use zero border-radius on buttons and cards — sharp angles non-negotiable
- Maintain tight line-heights (0.92–1.19) on display type
- Use the transparent ghost button (white border, 50% opacity) as secondary CTA
- Let full-viewport video carry emotional weight
- Reserve hexagonal geometry for UI icons and the video pause button
- Use weight 400 (regular) for headlines — typeface is distinctive enough
- Keep grays achromatic — pure gray without color tinting

**Don't**
- Introduce additional accent colors beyond gold — monochrome-plus-gold is sacred
- Apply border-radius to buttons or cards — curved edges contradict the angular aesthetic
- Use LamboType in italic or decorative styles — always upright and direct
- Add gradients to surfaces — depth comes from layering, not blending
- Use light backgrounds as primary canvas — darkness is the default state
- Mix lowercase into display headings — uppercase communicates authority
- Add hover animations with scale or translate — color-only interactions
- Use Open Sans or system fonts for display — LamboType handles all visible typography
- Create busy layouts — Lamborghini is about singular, bold statements
- Apply CSS shadows — on black canvas they are meaningless

## Agent Prompt Guide

**Bias toward** — true black `#000000` canvas, Lamborghini Gold `#ffc000` primary CTA only, LamboType UPPERCASE everywhere at display, 0px radius rectangles, surface-layering for depth (`#181818` / `#202020` / `#494949`), full-viewport video heroes, transparent ghost buttons with 50%-opacity white borders, hexagonal pause button.

**Reject** — dark gray substitutes for `#000000`, gold backgrounds beyond CTAs, rounded buttons or cards, italic LamboType, gradient surfaces, light backgrounds as primary canvas, mixed-case display headlines, scale/translate hover animations, system-font fallbacks for display, multiple competing focal points.
