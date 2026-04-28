---
version: alpha
name: Ollama
description: |
  Ollama's interface is radical minimalism taken to its logical conclusion — a pure-white void where content floats without decoration, shadow, or chromatic color. The design philosophy mirrors the product itself: strip away everything unnecessary until only the essential tool remains. This is the digital equivalent of a Dieter Rams object — every pixel earns its place, and the absence of design IS the design. The entire page exists in pure grayscale; there is zero chromatic color in the interface. The only colors that exist are shades between pure black (`#000000`) and pure white (`#ffffff`), creating a monochrome environment that lets the user's mental model of "open models" remain uncolored by brand opinion. What makes Ollama distinctive is the combination of SF Pro Rounded with an exclusively pill-shaped geometry (9999px on everything interactive). The rounded letterforms + rounded buttons + rounded containers create a cohesive softness language that makes a developer CLI tool feel approachable rather than intimidating. Mood — minimal, soft, monochrome, restrained.

colors:
  primary: "#000000"
  primary-hover: "#262626"
  ink: "#000000"
  ink-soft: "#262626"
  body: "#404040"
  muted: "#737373"
  muted-strong: "#525252"
  disabled: "#a3a3a3"
  canvas: "#ffffff"
  surface: "#ffffff"
  surface-soft: "#fafafa"
  surface-strong: "#e5e5e5"
  hairline: "#e5e5e5"
  hairline-strong: "#d4d4d4"
  on-primary: "#ffffff"
  focus: "#3b82f6"

typography:
  display-hero:
    fontFamily: "'SF Pro Rounded', system-ui, -apple-system"
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
  display-section:
    fontFamily: "'SF Pro Rounded', system-ui, -apple-system"
    fontSize: 36px
    fontWeight: 500
    lineHeight: 1.11
    letterSpacing: 0
  heading-lg:
    fontFamily: "'SF Pro Rounded', ui-sans-serif, system-ui"
    fontSize: 30px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
  heading-md:
    fontFamily: "ui-sans-serif, system-ui, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0
  body-lg:
    fontFamily: "ui-sans-serif, system-ui, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.56
    letterSpacing: 0
  body:
    fontFamily: "ui-sans-serif, system-ui, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "ui-sans-serif, system-ui, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  small:
    fontFamily: "ui-sans-serif, system-ui, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0
  mono-body:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New'"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  mono-caption:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New'"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  mono-small:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New'"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.63
    letterSpacing: 0

rounded:
  none: 0px
  md: 12px
  full: 9999px

spacing:
  "0": 0px
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 88px
  section-lg: 112px

components:
  button-primary-gray:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.ink-soft}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.full}"
    padding: 10px 24px
  button-secondary-white:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.full}"
    padding: 10px 24px
  button-cta-black:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.full}"
    padding: 10px 24px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: 24px
  card-soft:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: 24px
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    padding: 10px 16px
  pill-tag:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.ink-soft}"
    typography: "{typography.mono-small}"
    rounded: "{rounded.full}"
    padding: 4px 10px
---

## Overview

Ollama is the most extreme exercise in monochrome restraint in developer tooling. The page is pure white, the type is grayscale, the only chromatic color in the entire system is a Tailwind focus ring blue (`#3b82f6` at 50% alpha) that almost never appears in normal flow. Pair this discipline with SF Pro Rounded — Apple's rounded system font with soft terminals — and exclusively pill-shaped geometry, and you get a developer CLI brand that feels friendly and tactile rather than cold.

Mood — minimal, soft, monochrome, restrained.

## Colors

The palette is **strictly grayscale**. Pure black (`#000000`) for headlines and primary links, near-black (`#262626`) for button text on light surfaces, dark gray (`#404040`) for white-pill button text, stone gray (`#737373`) for secondary body, mid gray (`#525252`) for emphasized secondary, silver (`#a3a3a3`) for disabled. Surfaces step from pure white (`#ffffff`) → snow (`#fafafa`) → light gray (`#e5e5e5`). Borders are `#e5e5e5` standard or `#d4d4d4` for white-surface buttons.

The only non-gray color is `focus` (`#3b82f6`) — Tailwind's default focus ring used at 50% opacity for keyboard accessibility. It appears nowhere in normal interaction flow. There are no gradients anywhere — visual separation comes from flat color blocks and single-pixel borders.

## Typography

**SF Pro Rounded** at weight 500 carries display headlines. The rounded terminals are the brand expression — a developer CLI font that feels approachable. Body text falls back to `ui-sans-serif`, the platform's standard system sans.

**Weight discipline is extreme**: only 400 (regular) and 500 (medium) exist. No bold, no light, no black weight. This restraint reinforces the minimal philosophy.

Display headlines compress to 1.0 line-height; body text relaxes to 1.43–1.56. The contrast creates clear hierarchy without any weight contrast.

Code blocks and terminal commands appear throughout as primary content using the system monospace stack — they're hero content, not decoration.

## Layout

8px base spacing scaling up to a generous 88–112px between sections — the page is short and uncluttered, each section holding a single idea. Max container width is 1024–1280px. The hero is centered single-column; feature sections use 2-column (text + code); integration grids reflow responsively.

The whitespace philosophy is **emptiness as luxury**. Where most AI sites pile feature on feature, Ollama presents three ideas (run models / use with apps / integrate) and stops.

## Elevation & Depth

Ollama uses **zero shadows**. This is not an oversight — it's a deliberate, almost philosophical choice. Every other major AI product site uses at least subtle shadows. Ollama's flat, shadowless approach creates a paper-like experience.

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow, no border | Page background, most content |
| Bordered (Level 1) | 1px solid `#e5e5e5` | Cards, code blocks, buttons |

Depth is communicated through content hierarchy and typography weight, not visual layering.

## Shapes

The radius system is **binary**: 12px for non-interactive containers (code blocks, cards, panels) or 9999px (full pill) for everything interactive (buttons, tabs, inputs, tags, badges). There is no 4px, no 8px, no gradient of roundness. Elements are either containers or interactive — nothing in between.

## Components

**Gray pill (primary)**: `#e5e5e5` fill with `#262626` text, 10/24 padding, full pill. **White pill (secondary)**: pure-white fill with `#404040` text and a `#d4d4d4` border. **Black pill (CTA)**: pure-black fill with white text — maximum emphasis, used for "Download" and "Create account."

**Card**: white or snow fill, 12px radius, optional 1px hairline border, no shadow ever. **Tab pills**: light-gray active state, transparent inactive — both pill-shaped. **Model tags**: light-gray pill with mono-small text. **Terminal command block**: bordered 12px-radius container with monospace `ollama run` commands and a copy button.

## Do's and Don'ts

**Do**
- Use pure white `#ffffff` as the page background — never off-white or cream
- Apply pill (9999px) on every interactive element — buttons, tabs, inputs, tags
- Use 12px radius on every non-interactive container — no 4/6/8px in between
- Keep the palette strictly grayscale — no chromatic color except the focus ring
- Use SF Pro Rounded weight 500 for display — the rounded terminals are the brand
- Maintain zero shadows on any element — flatness is intentional
- Keep content density low — one clear idea per section
- Use monospace for terminal commands and code — primary content, not decoration

**Don't**
- Introduce any chromatic color — no brand blue, no accent green, no warm tones
- Use radius between 12px and 9999px — the system is binary
- Add shadows to any element — the flat aesthetic is intentional
- Use font weights above 500 — no bold, no black weight
- Add decorative illustrations beyond the llama mascot
- Use gradients anywhere — flat blocks and borders only
- Use borders heavier than 1px — containment is the lightest possible touch
- Add hover animations or transitions — interactions should feel instant

## Agent Prompt Guide

**Bias toward** — pure white canvas, strictly grayscale palette, SF Pro Rounded display at weight 500, binary radius system (12px containers / 9999px pills), zero shadows ever, system monospace for code-as-primary-content, generous 88–112px section spacing, low content density.

**Reject** — chromatic colors of any kind (blues, greens, warm tones), radius values between 12 and 9999px, drop shadows, weight 600+, gradients, decorative illustrations, complex grids beyond two columns, off-white or cream backgrounds.
