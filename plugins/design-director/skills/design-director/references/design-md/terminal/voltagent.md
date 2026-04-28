---
version: alpha
name: VoltAgent
description: |
  VoltAgent is a deep-space command terminal for the AI age — a developer-facing darkness built on near-pure-black surfaces (`#050507`) where the only interruption is the electric pulse of emerald green energy. The experience evokes staring into a high-powered IDE at 2am: dark, focused, and alive with purpose. This is not a friendly SaaS landing page — it's an engineering platform announcing itself through code snippets, architectural diagrams, and raw technical confidence. The green accent (`#00d992`) is used with surgical precision: glowing from headlines, borders, and interactive elements like a circuit board carrying a signal. Against the carbon-black canvas, this green reads as "power on" — a deliberate visual metaphor for an AI agent platform. The supporting palette is built entirely from warm-neutral grays (`#3d3a39`, `#8b949e`, `#b8b3b0`) that soften the darkness without introducing color noise, creating a cockpit-like warmth that pure blue-grays would lack. Typography pairs system-ui for authoritative headings (instant render, OS-native personality) with Inter for body/UI precision and SFMono-Regular for code credibility. Compressed line-heights (1.0–1.11) and negative letter-spacing on display create dense engineering-spec text blocks. Mood — engineered, signal-charged, warm-dark, terminal-precise.

colors:
  primary: "#00d992"
  primary-hover: "#2fd6a1"
  ink: "#f2f2f2"
  body: "#b8b3b0"
  muted: "#8b949e"
  disabled: "#6a6b6c"
  canvas: "#050507"
  surface: "#101010"
  hairline: "#3d3a39"
  hairline-strong: "#00d992"
  hairline-dashed: "#4f5d75"
  on-primary: "#101010"
  brand-mint: "#2fd6a1"
  near-white: "#eeeeee"
  fog-gray: "#bdbdbd"
  mist-gray: "#dcdcdc"
  accent-purple: "#818cf8"
  accent-cobalt: "#306cce"
  success: "#008b00"
  warning: "#ffba00"
  error: "#fb565b"
  info: "#4cb3d4"

typography:
  display-hero:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, Cantarell, 'Noto Sans', Helvetica, Arial"
    fontSize: 60px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.65px
  heading-section:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, Cantarell, 'Noto Sans', Helvetica, Arial"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.11
    letterSpacing: -0.9px
  sub-heading:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, Cantarell, 'Noto Sans', Helvetica, Arial"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: -0.6px
  overline:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, Cantarell, 'Noto Sans', Helvetica, Arial"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.5px
  feature-title:
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  overline-small:
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.56
    letterSpacing: 0.45px
  body:
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-medium:
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0
  nav-link:
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto"
    fontSize: 14.45px
    fontWeight: 500
    lineHeight: 1.65
    letterSpacing: 0
  caption:
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  tag-overline:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.43
    letterSpacing: 2.52px
  micro:
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0
  mono-code:
    fontFamily: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  mono-small:
    fontFamily: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0

rounded:
  none: 0px
  sm: 4px
  md: 6px
  lg: 8px
  full: 9999px

spacing:
  "0": 0px
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  xxl: 24px
  "3xl": 32px
  "4xl": 48px
  section: 64px
  section-lg: 96px

components:
  button-ghost:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  button-primary-cta:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.brand-mint}"
    typography: "{typography.body-medium}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  button-tertiary-container:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 20px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 24px
  card-accent:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 24px
  pill-tag:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    typography: "{typography.tag-overline}"
    rounded: "{rounded.full}"
    padding: 4px 12px
  code-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.mono-code}"
    rounded: "{rounded.md}"
    padding: 16px
---

## Overview

VoltAgent is a developer-facing engineering platform rendered in deep-space dark. The two-shade dark system (canvas `#050507` + surface `#101010`) is essential — there's barely any contrast between them, just enough to suggest elevation. Emerald Signal Green (`#00d992`) is reserved for the highest-signal moments — active borders, glow effects, the most important interactive accents — never as a surface fill. The supporting warm-gray palette (`#3d3a39`, `#8b949e`, `#b8b3b0`) prevents the dark theme from feeling clinical.

Mood — engineered, signal-charged, warm-dark, terminal-precise.

## Colors

**Abyss Black** (`#050507`) is the landing canvas — near-pure black with the faintest warm undertone, darker than typical dark themes for maximum contrast against green accents. **Carbon Surface** (`#101010`) is the universal contained-element fill: card backgrounds, button backgrounds, code blocks. The shift between them is barely perceptible, and that's the point.

**Warm Charcoal** (`#3d3a39`) is the signature border — not cold gray but a warm, almost brownish dark tone that prevents borders from feeling harsh against black. The original site uses border weight (1px → 2px → 3px) to communicate depth instead of shadow.

**Emerald Signal Green** (`#00d992`) is the brand voltage — used in active borders, glow effects, and the most important accents. **VoltAgent Mint** (`#2fd6a1`) is the slightly warmer, more readable variant for button text on dark surfaces — green text on Carbon Surface reads like an active terminal command.

Text scales: **Snow White** (`#f2f2f2`) is the primary read (not pure white — softer on dark), **Warm Parchment** (`#b8b3b0`) is the warm secondary body, **Steel Slate** (`#8b949e`) is the tertiary metadata blue-gray. Pure white is reserved for maximum-emphasis ghost button text only.

Semantic colors round out the palette: success `#008b00`, warning `#ffba00`, error `#fb565b`, info `#4cb3d4`. A muted blue-slate (`#4f5d75` at 40% in the original) carries decorative dashed borders for workflow diagrams.

## Typography

**System-ui carries display headings** — the largest text renders instantly (no FOIT/FOUT) and inherits OS-native personality (SF Pro on macOS, Segoe UI on Windows). The design accepts this variability as a feature.

**Inter** carries body and UI text with `"calt"` and `"rlig"` OpenType features enabled. **SFMono-Regular** carries all code — the same font developers see in their terminals.

The signature is **tight compression**: hero line-heights are 1.0 with -0.65px letter-spacing; section headings are 1.11 with -0.9px (the tightest in the system). Body relaxes to 1.5. Weights gradient from 300 → 400 → 500 → 600 → 700 — bold (700) reserved for sub-headings and code-button emphasis.

When uppercase appears, it's always paired with generous positive letter-spacing (0.45–2.52px) — never on headings, only on overline labels and tags.

## Layout

8px base scale (2, 4, 5, 6, 6.4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 64px). Section vertical spacing: 64–96px between major chapters. Max container 1280–1440px. Hero is centered single-column with maximum breathing room; feature sections use alternating asymmetric layouts (code left / text right, then reversed); logo marquee breaks the container constraint as a full-width horizontal scroll.

The whitespace philosophy is **cinematic between, dense within**: massive gaps create scroll-through-chapters pacing, but cards and code blocks are internally compact. The Warm Charcoal border IS the whitespace signal between sibling content zones.

## Elevation & Depth

Depth comes primarily from **border weight and color**, not shadows. The standard 1px solid `#3d3a39` IS the elevation — adding 3px or switching to green communicates importance more than shadow does.

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow, no border | Page background, inline text |
| Contained (Level 1) | 1px solid `#3d3a39`, no shadow | Standard cards, nav, code |
| Emphasized (Level 2) | 3px solid `#3d3a39`, no shadow | Large interactive buttons |
| Accent (Level 3) | 2px solid `#00d992`, no shadow | Active/highlighted feature cards |
| Ambient glow (Level 4) | `rgba(92, 88, 85, 0.2) 0px 0px 15px` | Elevated cards, soft atmospheric lift |
| Dramatic float (Level 5) | `rgba(0, 0, 0, 0.7) 0px 20px 60px` + `rgba(148, 163, 184, 0.1) 1px inset` | Hero showcase, modals |

The most distinctive decorative effect is the **green signal glow** — `drop-shadow(0 0 2px #00d992)` animating to `drop-shadow(0 0 8px #00d992)` on the VoltAgent bolt logo, pulsing like a heartbeat. The glow makes the logo feel "powered on."

Dashed workflow borders (`1px dashed rgba(79, 93, 117, 0.4)`) create a blueprint aesthetic for architecture diagrams, distinct from solid content borders.

## Shapes

Radius scale: 4px (small inline, SVG, code spans — sharpest, conveys precision) → 6px (buttons, links, clipboard — workhorse) → 6.4px (code blocks specifically — micro-distinction) → 8px (content cards, emphasized buttons — standard containment) → 9999px (tags, badges, status indicators — small categorical labels only).

## Components

**Ghost button**: transparent fill, white text, 1px solid `#3d3a39` border, 6px radius, 12/16 padding. Hover darkens background and drops opacity to 0.4. Subtle green-tinted outline (`rgba(33, 196, 93, 0.5)`).

**Primary green CTA**: Carbon Surface fill, VoltAgent Mint text — green-text-on-dark reads as an active terminal command. The "powered on" button.

**Tertiary container button**: Carbon Surface fill, Snow White text, 3px solid `#3d3a39` thick border, 8px radius, 20px padding all sides — card-like treatment for code copy blocks.

**Card**: Carbon Surface fill, 1px solid Warm Charcoal border (or 2px solid Emerald Signal Green for active features), 8px radius, 24–32px internal padding.

**Pill tag**: Carbon Surface fill, full-pill, tag-overline typography (uppercase, 2.52px tracking) — categorical labels only.

**Code block**: Carbon Surface fill, SFMono-Regular 13–14px, 6.4px radius (deliberately micro-distinct from buttons), generous padding.

## Do's and Don'ts

**Do**
- Use Abyss Black (`#050507`) canvas + Carbon Surface (`#101010`) for contained elements — two-shade dark is essential
- Reserve Emerald Signal Green for high-signal moments — active borders, glows, primary accents
- Use VoltAgent Mint (`#2fd6a1`) for button text on dark — more readable than pure Signal Green
- Compress heading line-heights to 1.0–1.11 with negative letter-spacing for engineering-spec density
- Use the warm gray palette (`#3d3a39`, `#8b949e`, `#b8b3b0`) — warmth prevents clinical sterility
- Present code snippets as primary content — hero elements, not supporting illustrations
- Communicate depth with border weight (1 → 2 → 3px) and color shifts, not box-shadows
- Pair system-ui (display) + Inter (body/UI) + SFMono-Regular (code)
- Apply `"calt"` and `"rlig"` OpenType features across all text

**Don't**
- Use bright or light backgrounds as primary surfaces — the entire identity lives on near-black
- Introduce warm decorative accents (orange, red, yellow) — those are reserved for semantic states only
- Use Emerald Signal Green on large surfaces or backgrounds — it's an accent, never a fill
- Increase heading line-heights beyond 1.33 — compressed density is core
- Use heavy shadows generously — depth is borders; shadows are Level 4–5 only
- Use pure white as default body text — Snow White (`#f2f2f2`) is the standard
- Mix in serif or decorative fonts — geometric sans + monospace only
- Use radius larger than 8px on content cards — full pill (9999px) for tags only
- Skip the warm-gray border system — cards without `#3d3a39` borders float ambiguously
- Animate aggressively — animations are slow and subtle (25–80s marquees, gentle glow pulses)

## Agent Prompt Guide

**Bias toward** — Abyss Black `#050507` canvas + Carbon Surface `#101010` cards, Emerald Signal Green `#00d992` for accent borders/glows only, VoltAgent Mint `#2fd6a1` for button text, system-ui display + Inter body + SFMono code, compressed display line-heights (1.0–1.11) with negative letter-spacing, Warm Charcoal `#3d3a39` borders communicating depth via weight (1→2→3px), 4–8px radii on cards, 9999px on tags only.

**Reject** — light/bright primary surfaces, Emerald green as a fill or background, heading line-heights above 1.33, decorative warm accents, pure white body text, serif or decorative typefaces, radii above 8px on cards, aggressive fast animation.
