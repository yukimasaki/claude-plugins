---
version: alpha
name: Cursor
description: |
  Cursor's marketing site is warm minimalism meeting code-editor elegance — a premium-print publication that happens to ship a developer tool. Everything sits on a warm off-white canvas (`#f2f1ed`) with deeply warm near-black text (`#26251e`) carrying a yellow-brown undertone, evoking old paper and ink rather than clinical screen white. The custom CursorGothic font is the typographic signature with aggressive negative letter-spacing at display sizes (-2.16px at 72px, -0.72px at 36px), engineering compression that anchors three-voice typography: gothic for display/UI, jjannon serif (with OpenType `"cswh"` swash alternates) for editorial body, and berkeleyMono for code. The original border system uses `oklab()` color space at 10/20/55% alpha to keep edges perceptually uniform across warm surfaces (approximated here with rgba-equivalent hex). Pill geometry with extreme 9999px radius coexists with 8px buttons; the AI timeline assigns thinking/grep/read/edit each a soft pastel role color. Mood — warm, literary, engineered, contemplative.

colors:
  primary: "#26251e"
  primary-hover: "#cf2d56"
  ink: "#26251e"
  body: "#26251e"
  muted: "#7a786f"
  disabled: "#a8a69b"
  canvas: "#f2f1ed"
  surface: "#f2f1ed"
  surface-soft: "#f7f7f4"
  surface-mid: "#ebeae5"
  surface-strong: "#e6e5e0"
  surface-deep: "#e1e0db"
  hairline: "#dad8d2"
  hairline-strong: "#b3b1a8"
  on-primary: "#fcfbf8"
  accent: "#f54e00"
  accent-gold: "#c08532"
  error: "#cf2d56"
  success: "#1f8a65"
  link: "#f54e00"
  timeline-thinking: "#dfa88f"
  timeline-grep: "#9fc9a2"
  timeline-read: "#9fbbe0"
  timeline-edit: "#c0a8dd"

typography:
  display-hero:
    fontFamily: "CursorGothic, 'CursorGothic Fallback', system-ui, 'Helvetica Neue', Helvetica, Arial"
    fontSize: 72px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -2.16px
  display-section:
    fontFamily: "CursorGothic, 'CursorGothic Fallback', system-ui, 'Helvetica Neue', Helvetica, Arial"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.72px
  heading-md:
    fontFamily: "CursorGothic, 'CursorGothic Fallback', system-ui, 'Helvetica Neue', Helvetica, Arial"
    fontSize: 26px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: -0.325px
  heading-sm:
    fontFamily: "CursorGothic, 'CursorGothic Fallback', system-ui, 'Helvetica Neue', Helvetica, Arial"
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: -0.11px
  body-serif-lg:
    fontFamily: "jjannon, 'Iowan Old Style', 'Palatino Linotype', 'URW Palladio L', P052, ui-serif, Georgia, Cambria, 'Times New Roman', Times"
    fontSize: 19.2px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  body-serif:
    fontFamily: "jjannon, 'Iowan Old Style', 'Palatino Linotype', 'URW Palladio L', P052, ui-serif, Georgia, Cambria, 'Times New Roman', Times"
    fontSize: 17.28px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  body-sans:
    fontFamily: "CursorGothic, 'CursorGothic Fallback', system-ui, 'Helvetica Neue', Helvetica, Arial"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button:
    fontFamily: "CursorGothic, 'CursorGothic Fallback', system-ui, 'Helvetica Neue', Helvetica, Arial"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0
  caption:
    fontFamily: "CursorGothic, 'CursorGothic Fallback', system-ui, 'Helvetica Neue', Helvetica, Arial"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  micro-label:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial"
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.27
    letterSpacing: 0.048px
  mono-body:
    fontFamily: "berkeleyMono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New'"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.67
    letterSpacing: 0
  mono-small:
    fontFamily: "berkeleyMono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New'"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: -0.275px

rounded:
  none: 0px
  micro: 1.5px
  xs: 2px
  sm: 3px
  md: 4px
  lg: 8px
  xl: 10px
  full: 9999px

spacing:
  "0": 0px
  micro: 1.5px
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  section: 80px
  section-lg: 120px

components:
  button-primary:
    backgroundColor: "{colors.surface-mid}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: 10px 14px
  button-secondary-pill:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.muted}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 3px 8px
  button-tertiary-pill:
    backgroundColor: "{colors.surface-deep}"
    textColor: "{colors.muted}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 3px 8px
  button-ghost:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.muted}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: 6px 12px
  card:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 16px
  card-featured:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: 24px
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sans}"
    rounded: "{rounded.lg}"
    padding: 8px 8px
  pill-tag:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.muted}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 3px 8px
---

## Overview

Cursor's site is a warm-shifted print publication for a code editor. The cream canvas (`#f2f1ed`) and warm near-black ink (`#26251e`, never `#000`) build a paper-and-ink atmosphere that pure neutral grays could never achieve. CursorGothic at display sizes uses some of the most aggressive negative letter-spacing in developer tooling (-2.16px at 72px), engineering compression that's deliberately balanced by jjannon serif's literary calm at body size and berkeleyMono's terminal voice for code. The result is one of the most typographically rich systems in the category — three voices, each with a clear job.

Mood — warm, literary, engineered, contemplative.

## Colors

The defining move is **warm-shift everything**. White becomes cream (`#f2f1ed`), black becomes warm near-black (`#26251e`), and even the error state (`#cf2d56`) carries warmth as crimson-rose rather than clinical red. The surface scale runs five steps from `#f7f7f4` (lightest button) → `#f2f1ed` (page) → `#ebeae5` (button default) → `#e6e5e0` (cards) → `#e1e0db` (deep emphasis), each a barely-perceptible warm gradient.

The original site renders borders in `oklab()` perceptually-uniform space (`oklab(0.263084 -0.00230259 0.0124794 / 0.1)` for the standard 10% warm-brown). This file approximates them as flat hex (`#dad8d2` for hairline, `#b3b1a8` for hairline-strong) — for fidelity, swap to the rgba fallback `rgba(38, 37, 30, 0.1)` / `rgba(38, 37, 30, 0.55)` when implementing.

Accent orange (`#f54e00`) is the brand voltage for primary CTAs and links. Crimson-rose (`#cf2d56`) is reserved for hover states — the signature interaction is text shifting to error red on hover. The AI timeline assigns soft pastels (peach `#dfa88f`, sage `#9fc9a2`, blue `#9fbbe0`, lavender `#c0a8dd`) to thinking/grep/read/edit operations.

## Typography

**CursorGothic** carries display and UI with weight 400 almost exclusively — hierarchy comes from size and tracking, not weight. The negative letter-spacing scale is precise: -2.16px at 72px → -0.72px at 36px → -0.325px at 26px → -0.11px at 22px → 0 at 16px and below.

**jjannon** is the editorial soul. Body copy at 17.28–19.2px gets `"cswh"` (contextual swash alternates) enabled, adding a calligraphic quality that makes long-form reading feel literary rather than utilitarian.

**berkeleyMono** at 11–12px is the code voice — the same family used inside the Cursor editor itself, creating a tight loop between marketing site and product.

`"ss09"` stylistic set is enabled on CursorGothic buttons and captions for subtle character variation.

## Layout

8px base spacing with a fine sub-8px scale (1.5 / 2 / 2.5 / 3 / 4 / 5 / 6px) for icon and text micro-alignment — unusual rigor for a marketing site. Section spacing is generous (80–120px), and surfaces alternate cream tones (cream → lighter cream → cream) for subtle differentiation without harsh boundaries. Max content width sits around 1200px.

## Elevation & Depth

Cursor's elevation comes from **warm oklab-space borders** rather than shadows:

- **Border ring (Level 1)**: 10% warm brown (`rgba(38, 37, 30, 0.1)`) — standard cards
- **Border medium (Level 1b)**: 20% warm brown — emphasized states
- **Ambient (Level 2)**: `rgba(0, 0, 0, 0.02) 0px 0px 16px` paired with `rgba(0, 0, 0, 0.008) 0px 0px 8px` — floating elements
- **Elevated (Level 3)**: heavy diffused stack `rgba(0,0,0,0.14) 0px 28px 70px, rgba(0,0,0,0.1) 0px 14px 32px` plus an oklab ring — modals and showcase cards

Shadows use dramatically large blur (28–70px) with moderate opacity (0.10–0.14), creating diffused atmospheric lift instead of hard drop shadows. Cards don't float above the page; the page gently opens space for them.

## Shapes

Border radius runs from micro detail to full pill: 1.5px (fine details) → 2px (inline code) → 3–4px (compact containers, badges) → 8px (primary buttons, standard cards) → 10px (featured cards) → 9999px (pills, tags, the timeline orbs). The original site uses `33554400px` for "full pill" but it's effectively 9999px.

## Components

**Button primary**: surface-mid (`#ebeae5`) fill, ink text, 8px radius, 10/14 padding. Hover shifts text to crimson-rose. **Secondary pill**: surface-strong fill with 60% warm-brown text at full pill radius, used for tags and filters. **Tertiary pill**: surface-deep variant for active filter state. **Ghost**: lightest surface, muted text, 6/12 padding.

**Card**: surface-strong fill with warm hairline border, 8px (standard) or 10px (featured). The signature elevated card layers the heavy 28/70px blur shadow stack over an oklab ring.

**AI timeline** is the brand's most distinctive component: vertical sequence of thinking → grep → read → edit, each step painted in its dedicated soft pastel, connected by a hairline line.

## Do's and Don'ts

**Do**
- Use cream `#f2f1ed` as the canvas — never pure white, the warmth is the system
- Use warm near-black `#26251e` for primary text — the yellow-brown undertone is the brand
- Apply CursorGothic with progressive negative letter-spacing scaled to size
- Enable `"cswh"` on jjannon body text — the swashes give the editorial voice
- Use crimson-rose `#cf2d56` for hover-state text shifts — this is the signature interaction
- Use the warm oklab borders (or rgba-fallback `rgba(38, 37, 30, 0.1)`) for containment
- Use full-pill radius (9999px) for tags and timeline orbs, 8px for buttons and cards
- Use the timeline pastels only for AI operation states — never as decorative chrome

**Don't**
- Use pure white or pure black on primary surfaces — kills the warm-shift identity
- Apply heavy 700-weight type — CursorGothic stays at 400, system-ui at 500–700 only for functional UI
- Use cold/blue tints for borders or shadows — the warmth is structural
- Mix in additional display fonts beyond the three-voice system (gothic / serif / mono)
- Use solid drop-shadows with hard edges — Cursor's shadows are large-blur and diffused
- Apply accent orange `#f54e00` as a surface fill — it's a link/CTA accent, not chrome

## Agent Prompt Guide

**Bias toward** — cream `#f2f1ed` canvas, warm near-black `#26251e` text, CursorGothic display with progressive negative letter-spacing, jjannon serif body with `"cswh"`, berkeleyMono code, warm oklab borders (or rgba fallback), 8px buttons + 9999px pills, hover-text-shift to crimson, large-blur diffused shadows.

**Reject** — pure white surfaces, pure black text, bold weights on CursorGothic, cold/blue borders, hard-edged drop shadows, accent orange as a background fill, additional display typefaces, tight uppercase without wide tracking.
