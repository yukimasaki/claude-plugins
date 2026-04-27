---
version: alpha
name: Ollama × ElevenLabs
description: A remix that blends Ollama's pure terminal monochrome with ElevenLabs' cinematic dark gradients and electric-blue motion. Ollama holds the body — pure black surfaces, JetBrains Mono everywhere, 1px borders, code blocks with breathing room — while ElevenLabs contributes a full-bleed gradient hero with oversized Inter Display headlines, soft accent glow, and looping wave-form motion. Above the fold reads as a 4-second product film; below the fold settles into a documentation surface. Mood — cinematic, technical, dark, electric.

colors:
  bg: "#000000"
  bg-alt: "#080808"
  surface: "#14141a"
  text: "#ffffff"
  text-muted: "#a0a0a8"
  text-dim: "#6b6b75"
  border: "#2a2a32"
  border-strong: "#3d3d48"
  hero-bg: "#0a0a14"
  hero-gradient-inner: "#1a2440"
  primary: "#2c6cff"
  accent-glow: "#4d8aff"
  accent-soft: "#2c6cff"
  bg-light: "#ffffff"
  text-light: "#000000"

typography:
  hero-xxl:
    fontFamily: "Inter Display, Inter, system-ui, sans-serif"
    fontSize: 128px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: -2.56px
  hero-xl:
    fontFamily: "Inter Display, Inter, system-ui, sans-serif"
    fontSize: 88px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -1.76px
  hero-lg:
    fontFamily: "Inter Display, Inter, system-ui, sans-serif"
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -1.12px
  hero-subhead:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-h1:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.4px
  body-h2:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.14px
  body-h3:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0
  body-h4:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0.11px
  code:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  xs: 2px
  sm: 4px
  md: 6px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 12px
  "4": 16px
  "6": 24px
  "8": 32px
  "12": 48px
  "16": 64px
  "24": 96px
---

## Overview

Ollama × ElevenLabs is a blend of Ollama's pure terminal monochrome with ElevenLabs' cinematic dark gradients and electric-blue motion. Two surfaces, one product. Above the fold ElevenLabs takes over — full-bleed near-black radial gradient, oversized Inter Display headline, subtle wave-form motion, electric-blue CTA with a soft glow. Below the fold Ollama takes back — pure black surfaces, JetBrains Mono everywhere (including h1–h6), 1px borders, code blocks with breathing room, no decoration.

The hero plays like a 4-second film bumper before the page resolves into a documentation surface. The transition is a single horizontal rule and a font-weight shift — no bridge gradient. Built for CLI / OSS tool landing pages that want cinematic intro and technical execution in the same scroll.

Mood words — cinematic, technical, dark, electric.

## Colors

The terminal base is Ollama's pure-black ramp. `bg` `#000000`, `bg-alt` `#080808`, `surface` `#14141a`, with white ink (`text` `#ffffff`) and graduated muted scale (`text-muted` `#a0a0a8`, `text-dim` `#6b6b75`). Borders are quiet — `border` `#2a2a32`, `border-strong` `#3d3d48`.

The hero panel switches to ElevenLabs' cinematic surface — `hero-bg` `#0a0a14` with a radial gradient running from `hero-gradient-inner` `#1a2440` at 50% 30% out to `hero-bg` at 70%. Electric blue (`accent` `#2c6cff`, glow `#4d8aff`, soft `rgba(44, 108, 255, 0.16)`) is the sole accent across both modes — replacing every place Ollama or ElevenLabs would otherwise reach for cyan, magenta, or lime.

Light mode is available on `/docs/*` routes only (`bg-light` `#ffffff`, `text-light` `#000000`). The hero is always dark.

The arbitration line: Ollama's pure `#000` wins all body surfaces, code blocks, and docs. ElevenLabs' radial gradient is allowed only on the hero panel and on featured product cards.

## Typography

- **Hero h1** uses `Inter Display` (fallback `Inter`, system-ui) at weight 600, 88px and above, tracking -0.02em. The only place Inter fires.
- **Hero subhead** uses `Inter` at 20px, weight 400, in `text-muted`.
- **Body headings (h1–h6)** use `JetBrains Mono` at weights 500 / 600. Mono headings are the signature — terminal discipline holds below the fold.
- **Body and UI labels** use `JetBrains Mono` at weight 400, 14/22.
- **Code** uses the same `JetBrains Mono` stack — there is no separate code typeface because the body already is one.

Type scale ladder — 11 / 13 / 14 / 16 / 20 / 28 / 40 / 56 / 88 / 128 px. Ollama's terminal ramp extended at the top with ElevenLabs' hero step.

## Layout

- **Hero** — full-bleed, no max-width, vertical center, min-height 80vh.
- **Body** — 1080px max, 24px gutter, 12-column.
- **Docs** — 240px sidebar + 720px content + 200px on-this-page rail.
- 4px base spacing — 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64.

Ollama's tight spacing holds below the fold. The hero is the only place vertical rhythm goes generous (96px+ section padding). The transition between hero and body is intentional and instant — a single horizontal rule and a font-weight shift, never a bridge gradient.

Responsive — hero h1 scales 128 → 88 → 56 → 40. Hero min-height drops to 60vh on mobile. Sidebar collapses to drawer at 1024px; on-this-page rail hides at 1280px. Wave-form motion disables below 768px for performance and visual quiet.

## Elevation & Depth

Two depth modes, never composed on the same element.

- **Hero** — gradient depth plus soft glow on the accent only. CTA carries a `0 0 16px rgba(44, 108, 255, 0.16)` outer shadow. No card shadows.
- **Body** — flat. Border-only depth. Code blocks and cards never elevate.

ElevenLabs contributes the glow; Ollama contributes the flatness. They occupy different surfaces.

## Shapes

- **Hero CTA** — 4px radius, padding 12/24, with the accent glow.
- **Body buttons** — 2px radius (sharper), padding 8/16. Mono label.
- **Cards / feature tiles** — 4px radius, 1px border, no shadow.
- **Code blocks** — 4px radius, 1px border, 16/20 padding.
- **Inputs** — 2px radius, 1px border, 8/12 padding. Focus shifts to a 1px accent border, no ring.

Sharp, terminal-tight radii throughout. The hero CTA is the only place a slightly larger radius and a glow appear.

## Components

**Hero panel**
- `hero-bg` with the radial gradient, full-bleed, min-height 80vh.
- Centered headline at 88px and above, subhead at 20px, single CTA.
- Optional looping wave-form / particle motion at 4–6% opacity, never above 8%, never scroll-triggered.

**Buttons**
- Primary (hero) — `accent` fill, `text` color, weight 500, 4px radius, padding 12/24, with `0 0 16px accent-soft` outer glow.
- Primary (body) — same `accent` fill, no glow, 2px radius, padding 8/16, mono label.
- Secondary — transparent fill, 1px `border`, `text` color, mono label.

**Code block**
- `bg-alt` fill, 1px `border`, 4px radius, 16/20 padding. Mono 14px.
- Copy button top-right, `text-dim` until hover, then `text`.

**Card / feature tile**
- `bg-alt` fill, 1px `border`, 4px radius. Mono heading 16px, body 13px. Optional 1px `accent` top rule on featured cards.

**Input**
- Mono. 1px `border`, 2px radius, 8/12 padding. Focus — 1px `accent` border, no ring.

## Do's and Don'ts

**Do**
- Confine the radial gradient to hero and feature-card surfaces.
- Keep all body type in mono — including h1 through h6.
- Use the wave-form motion at less than 8% opacity, looping, never scroll-triggered.
- Single accent — electric blue. Period.
- Place a copy button on every code block.

**Don't**
- Bridge the hero gradient into body surfaces with intermediate gradients.
- Drop Inter into body or docs.
- Add a second neon (cyan, magenta, lime) — kills the discipline.
- Add box shadows on body cards.
- Use scroll-triggered animation or mid-page hero re-entries.
- Use sans-serif headings below the fold.

## Agent Prompt Guide

**Bias toward** — dark-by-default, mono-everywhere body (including headings), Inter only on hero, single electric-blue accent, full-bleed gradient hero with looping wave motion at low opacity, 4px tight spacing in body, 1px borders, copy button on every code block, sharp 2–4px radii throughout.

**Reject** — Inter in body or UI, second accent colors, gradients in body surfaces, drop shadows on cards, scroll-triggered animation, mid-page hero re-entries, light-mode hero, sans-serif headings below the fold.
