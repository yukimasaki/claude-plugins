---
version: alpha
name: PostHog
description: |
  PostHog feels like a startup's internal wiki that escaped into the wild — warm, irreverent, deliberately anti-corporate. The background isn't crisp white or dark void of typical developer tools but a sage-tinted cream `#fdfdf8` that gives every surface a handmade, paper-like quality. Colors lean into earthy olive greens and muted sage rather than conventional blues and purples — as if someone designed a developer analytics platform inside a cozy garden shed. The hidden brand orange `#F54E00` only appears on hover interactions — a delightful surprise that signals "we don't take ourselves too seriously". IBM Plex Sans Variable carries the typography at bold weights (700/800) for headings with generous 1.50–1.71 line-heights on body, hand-drawn hedgehog illustrations replace stock photography, and the entire system uses sage-tinted grays `#bfc1b7` instead of cool neutrals. Built on Tailwind + Radix + shadcn but visually unique. Mood — warm, irreverent, scrappy, garden-shed.

colors:
  primary: "#1e1f23"
  primary-hover: "#23251d"
  primary-soft: "#65675e"
  hover-orange: "#F54E00"
  hover-amber: "#F7A501"
  gold-border: "#b17816"
  ink: "#23251d"
  body: "#4d4f46"
  muted: "#65675e"
  placeholder: "#9ea096"
  dark-link: "#111827"
  canvas: "#fdfdf8"
  surface-soft: "#eeefe9"
  surface-button: "#e5e7e0"
  surface-tan: "#d4c9b8"
  surface-hover: "#f4f4f4"
  hairline: "#bfc1b7"
  hairline-strong: "#b6b7af"
  on-primary: "#ffffff"
  focus: "#3b82f6"
  input-text: "#374151"

typography:
  display-hero:
    fontFamily: "'IBM Plex Sans Variable', 'IBM Plex Sans', -apple-system, system-ui, 'Avenir Next', Avenir, 'Segoe UI', 'Helvetica Neue', Helvetica, Ubuntu, Roboto, Noto, Arial, sans-serif"
    fontSize: 30px
    fontWeight: 800
    lineHeight: 1.20
    letterSpacing: -0.75px
  section-heading:
    fontFamily: "'IBM Plex Sans Variable', 'IBM Plex Sans', -apple-system, system-ui, sans-serif"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.50
    letterSpacing: 0
  feature-heading:
    fontFamily: "'IBM Plex Sans Variable', 'IBM Plex Sans', -apple-system, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: 0
  card-heading:
    fontFamily: "'IBM Plex Sans Variable', 'IBM Plex Sans', -apple-system, system-ui, sans-serif"
    fontSize: 21px
    fontWeight: 700
    lineHeight: 1.40
    letterSpacing: -0.54px
  sub-heading:
    fontFamily: "'IBM Plex Sans Variable', 'IBM Plex Sans', -apple-system, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.40
    letterSpacing: -0.5px
  body-emphasis:
    fontFamily: "'IBM Plex Sans Variable', 'IBM Plex Sans', -apple-system, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.56
    letterSpacing: 0
  body:
    fontFamily: "'IBM Plex Sans Variable', 'IBM Plex Sans', -apple-system, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  body-relaxed:
    fontFamily: "'IBM Plex Sans Variable', 'IBM Plex Sans', -apple-system, system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.71
    letterSpacing: 0
  nav:
    fontFamily: "'IBM Plex Sans Variable', 'IBM Plex Sans', -apple-system, system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.50
    letterSpacing: 0
  caption:
    fontFamily: "'IBM Plex Sans Variable', 'IBM Plex Sans', -apple-system, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  micro:
    fontFamily: "'IBM Plex Sans Variable', 'IBM Plex Sans', -apple-system, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.33
    letterSpacing: 0
  code:
    fontFamily: "'Source Code Pro', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    letterSpacing: 0

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 6px
  full: 9999px

spacing:
  "0": 0px
  "1": 2px
  "2": 4px
  "3": 6px
  "4": 8px
  "5": 12px
  "6": 16px
  "7": 18px
  "8": 24px
  "9": 32px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 10px 12px
  button-sage:
    backgroundColor: "{colors.surface-button}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 4px 8px
  button-tan:
    backgroundColor: "{colors.surface-tan}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 8px 16px
  button-ghost:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
  card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: 16px
  card-sage:
    backgroundColor: "{colors.surface-soft}"
    rounded: "{rounded.sm}"
    padding: 16px
  input:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.input-text}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 4px 8px
  pill:
    backgroundColor: "{colors.surface-button}"
    textColor: "{colors.body}"
    typography: "{typography.micro}"
    rounded: "{rounded.full}"
    padding: 2px 8px
---

## Overview

PostHog runs on a warm sage-cream `#fdfdf8` canvas with olive-ink `#4d4f46` text — a deliberate rejection of the cool grays of typical developer tools. IBM Plex Sans Variable carries headings at bold 700–800, body breathes at 1.50–1.71 line-heights, and the hidden orange `#F54E00` only appears on hover — a delightful interaction surprise that signals brand personality. Hand-drawn hedgehog illustrations replace stock photography. The whole thing reads like a magazine, not a landing page.

Mood — warm, irreverent, scrappy, garden-shed.

## Colors

The canvas is warm parchment `#fdfdf8` (never pure white). Surface variants step down through `#eeefe9` (sage cream, input bg), `#e5e7e0` (light sage, button bg), and `#d4c9b8` (warm tan, featured CTAs). Text uses olive ink `#4d4f46` for body, deep olive `#23251d` for high-emphasis, muted olive `#65675e` for secondary, and sage placeholder `#9ea096` for disabled.

Borders are sage-tinted gray `#bfc1b7` (primary) and `#b6b7af` (toolbar) — never neutral cool gray. Dark CTAs use near-black `#1e1f23` with opacity-based hover. The hidden orange `#F54E00` (and warm gold `#F7A501`) appears only on hover states. Focus rings use Tailwind's `#3b82f6` blue at 50% opacity — the only blue in the system, reserved for accessibility.

No gradients — depth comes from layered surfaces and border containment.

## Typography

IBM Plex Sans Variable is the cornerstone — a font with technical credibility (created by IBM for developer contexts) deployed at bold 700–800 for headings. Generous body line-heights (1.50–1.71) reflect content-heavy editorial pacing. Display headlines compress to -0.75px tracking; body relaxes to 0px. Uppercase bold (18–20px / weight 700) is the magazine-editorial category-label voice. Source Code Pro covers code snippets only.

## Layout

8px base, scale 2/4/6/8/12/16/18/24/32px. Section padding compact (32–48px) — content density is the value. Card padding 4–12px (notably tight). Max width up to 1536px; content typically 1200–1280px. Dense by design.

## Elevation & Depth

Famously minimal — only one shadow definition exists in the entire system. Depth comes from:

- **Border containment** — `1px solid #bfc1b7` sage hairlines
- **Surface color shifts** — `#fdfdf8` → `#eeefe9` → `#e5e7e0` layering
- **The single shadow** — `0px 25px 50px -12px rgba(0,0,0,0.25)` reserved for floating elements (modals, dropdowns)

Fully opaque surfaces. No glassmorphism, no gradients, no glow.

## Shapes

2px (small inline spans, tags) → 4px (primary UI — buttons, inputs, dropdowns) → 6px (secondary containers — larger buttons, list items) → 9999px (pill badges, status indicators). The 4px / 6px ceiling keeps things tight and functional, never premium-rounded.

## Components

**Dark primary** — `#1e1f23` fill, white text, 6px radius, 10/12 padding, hover opacity 0.7 with amber gold text, active opacity 0.8 with slight scale. **Sage light** — `#e5e7e0` fill, olive ink text, 4px radius, hover orange text flash. **Warm tan featured** — `#d4c9b8` fill, black text, no visible radius. **Input-style** — `#eeefe9` fill, sage placeholder, 4px radius, `1px solid #b6b7af`. **Ghost** — `#fdfdf8` fill, transparent border, minimal presence.

All buttons flash `#F54E00` orange or `#F7A501` amber gold text on hover — the brand's signature interaction surprise.

**Cards** — warm parchment fill, `1px solid #bfc1b7` border, 4–6px radius. Hover orange text flash on interactive cards. **Inputs** — `#eeefe9` fill, `1px solid #b6b7af`, 4px radius, `2px 0px 2px 8px` padding, focus 50%-opacity `#3b82f6` ring.

## Do's and Don'ts

**Do**
- Use the olive/sage family (`#4d4f46`, `#23251d`, `#bfc1b7`) for text and borders — warm green undertone is essential
- Flash PostHog Orange `#F54E00` on hover — it's the hidden brand signature
- Use IBM Plex Sans at bold weights (700/800) for headings — the font carries technical credibility
- Keep body line-heights generous (1.50–1.71) — content-heavy site demands readability
- Maintain warm parchment `#fdfdf8` background — not pure white, never cold
- Apply 4–6px border-radius for most UI — keep corners subtle and functional
- Include playful hand-drawn illustration — the personality is the differentiator
- Use opacity-based hover (0.7) on dark buttons rather than color shifts

**Don't**
- Use blue, purple, or typical tech-SaaS colors — palette is deliberately olive/sage
- Add heavy shadows — only one shadow exists, for floating elements
- Make the design look conventionally polished or premium — irreverent scrappy is the charm
- Use tight body line-heights — generous 1.50+ is essential for the content-heavy layout
- Apply large border-radius (12px+) on cards — PostHog uses 4–6px
- Remove the orange hover flash — it's a core interaction pattern, not decoration
- Replace illustrations with stock photography — hand-drawn hedgehog art is the brand
- Use pure white `#ffffff` as page background — warm `#fdfdf8` is foundational

## Agent Prompt Guide

**Bias toward** — warm parchment `#fdfdf8` canvas, olive/sage text family, IBM Plex Sans bold (700/800) headings, hidden orange `#F54E00` hover flash, sage-tinted `#bfc1b7` borders, 4–6px radius, single-shadow elevation system, hand-drawn hedgehog illustration energy.

**Reject** — pure white background, blue/purple SaaS palette, multiple shadow tiers, polished premium feel, large pill radii on cards, stock photography, body line-heights below 1.50.
