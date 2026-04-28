---
version: alpha
name: OpenCode
description: |
  OpenCode embodies a terminal-native, monospace-first aesthetic that reflects its identity as an open source AI coding agent. The system is built on stark dark-on-light contrast using a warm near-black background (`#201d1d` — rgb(32, 29, 29), with a subtle reddish-brown undertone) and a barely-warm off-white text (`#fdfcfc`). This isn't a generic dark theme — the warmth in both darks and lights creates a sophisticated terminal-emulator atmosphere rather than a cold IDE. Berkeley Mono is the sole typeface, establishing an unapologetic monospace identity: every element — heading, body, button, navigation — shares one font family, creating a unified "everything is code" philosophy. Hierarchy comes from size and weight (700 / 500 / 400), never from a second typeface. Borders use a subtle warm transparency that the original site expresses as `rgba(15, 0, 0, 0.12)` — approximated here as a flat warm-tinted hex (`#cdcaca`) since 8-digit hex isn't permitted, but the implementation should preserve the rgba form. Sharp 4px radius throughout, semantic colors borrowed from Apple HIG, and no shadows anywhere. Mood — terminal-native, warm, utilitarian, monospace-first.

colors:
  primary: "#201d1d"
  primary-hover: "#0056b3"
  ink: "#201d1d"
  body: "#201d1d"
  muted: "#9a9898"
  muted-strong: "#646262"
  disabled: "#6e6e73"
  canvas: "#201d1d"
  surface: "#201d1d"
  surface-light: "#f8f7f7"
  surface-elevated: "#302c2c"
  surface-mode-light: "#f1eeee"
  hairline: "#cdcaca"
  hairline-strong: "#646262"
  on-primary: "#fdfcfc"
  text-secondary: "#424245"
  accent: "#007aff"
  accent-hover: "#0056b3"
  accent-active: "#004085"
  error: "#ff3b30"
  error-hover: "#d70015"
  error-active: "#a50011"
  success: "#30d158"
  warning: "#ff9f0a"
  warning-hover: "#cc7f08"
  warning-active: "#995f06"

typography:
  display-hero:
    fontFamily: "'Berkeley Mono', 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
    fontSize: 38px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  heading-section:
    fontFamily: "'Berkeley Mono', 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  body:
    fontFamily: "'Berkeley Mono', 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-medium:
    fontFamily: "'Berkeley Mono', 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  body-tight:
    fontFamily: "'Berkeley Mono', 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
  button:
    fontFamily: "'Berkeley Mono', 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 2.0
    letterSpacing: 0
  caption:
    fontFamily: "'Berkeley Mono', 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 2.0
    letterSpacing: 0

rounded:
  none: 0px
  sm: 4px
  md: 6px

spacing:
  "0": 0px
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  xxl: 24px
  section: 64px
  section-lg: 96px

components:
  button-primary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 4px 20px
  input-email:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 20px
  card:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: 24px
  badge:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: 4px 8px
---

## Overview

OpenCode is one font, one mood. Berkeley Mono runs everything — display, body, button, navigation — over a warm near-black canvas (`#201d1d`) lit by warm off-white text (`#fdfcfc`). The reddish-brown undertone in both extremes (rgb(32, 29, 29) is not blue-shifted) is the differentiator: this isn't a generic dark theme, it's a sophisticated terminal-emulator aesthetic where every surface feels lived-in.

Mood — terminal-native, warm, utilitarian, monospace-first.

## Colors

Three primary tones carry the system: warm near-black (`#201d1d`), warm off-white (`#fdfcfc`), and warm mid-gray (`#9a9898`). Surface variants are tight: `#302c2c` for slightly elevated dark, `#f8f7f7` for the email-input light surface, `#f1eeee` for light-mode contexts.

Borders are the most distinctive token: the original system uses `rgba(15, 0, 0, 0.12)` — a warm transparent dark with a subtle red tint that ties borders to the warm palette. Since 8-digit hex isn't permitted in this format, the `hairline` token here is a flat `#cdcaca` approximation; for accurate implementation, use `rgba(15, 0, 0, 0.12)` directly.

Semantic colors are borrowed from Apple HIG — blue (`#007aff`), red (`#ff3b30`), green (`#30d158`), orange (`#ff9f0a`) — each with darker hover and active variants for a three-stage interaction sequence. This grounds the otherwise-custom warm palette in familiar OS-level signal colors.

## Typography

**Berkeley Mono is the only font.** Hierarchy comes entirely from size and weight: 700 for headings, 500 for interactive/medium emphasis, 400 for body. There is no second typeface — no sans, no serif, no display family.

Line-heights split sharply by purpose: 1.50 as the standard for reading (body, paragraphs), 2.00 (relaxed) for buttons and captions to create air around small UI, and 1.00 (tight) for compact tab labels.

Display headings at 38px weight 700 sit in a generous 1.50 line-height — even hero text gets reading rhythm rather than display compression. This is unusual for a developer tool and reinforces the "every word is code" identity.

## Layout

8px base grid scaling 8 / 16 / 24 / 32 / 48 / 64 / 80 / 96px. Content sits in a narrow 800–900px column, creating generous side margins. Sections separate through vertical spacing alone (48–96px) — never decorative dividers or background changes.

The monospace grid creates natural vertical rhythm; line-heights of 1.50 and 2.00 maintain consistent rhythm across long-form text.

## Elevation & Depth

OpenCode's depth system is intentionally flat. **There are no box-shadows anywhere** — terminals don't have shadows, and neither does OpenCode.

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow, no border | Default state |
| Border subtle (Level 1) | 1px solid `rgba(15, 0, 0, 0.12)` | Section dividers, input borders |
| Border tab (Level 2) | 2px solid `#9a9898` (bottom only) | Active tab indicator |
| Border outline (Level 3) | 1px solid `#646262` | Container outlines, elevated elements |

Background color shifts between `#201d1d` and `#302c2c` create subtle surface differentiation. The warm reddish tint in border colors ties them to the overall warm palette. Zero gradients, zero blurs, zero ambient effects.

## Shapes

The radius system is two values total: **4px everywhere**, **6px for inputs**. That's it. No pills, no large radii. The 6px input radius is the most "rounded" element in the system — and it's only +2px above the default. This utilitarian discipline is core to the identity.

## Components

**Primary button**: dark fill (`#201d1d`), light text (`#fdfcfc`), tight 4/20 padding, 4px radius, Berkeley Mono 16px weight 500 with 2.00 line-height.

**Email input**: light fill (`#f8f7f7`), dark text, 1px warm-transparent border, generous 20px padding, 6px radius — the most generous component in the system, suited for comfortable typing.

**Card / Badge**: elevated surface (`#302c2c`), light text, 4px radius. Cards have no shadow — depth is the surface shift alone.

**Links** are underlined by default at weight 500 — reinforcing the text-centric, terminal identity.

**Tabs** use a 2px bottom border (`#9a9898`) on active state, no fills.

## Do's and Don'ts

**Do**
- Use warm near-black `#201d1d` (not `#000000`) as the canvas — the reddish undertone is essential
- Use warm off-white `#fdfcfc` (not `#ffffff`) for text — the warmth differentiates from clinical dark themes
- Keep Berkeley Mono as the only font — never introduce a second typeface
- Achieve hierarchy through size and weight (700 / 500 / 400) — no font variation
- Use `rgba(15, 0, 0, 0.12)` for borders — the warm-transparent tone ties to the palette
- Apply 4px radius universally, 6px only on inputs — the utilitarian discipline is core
- Use Apple HIG semantic colors with three-stage hover→active sequences
- Underline links by default at weight 500 — reinforces the text-centric identity

**Don't**
- Use pure black `#000000` or pure white `#ffffff` — they kill the warm-undertone identity
- Mix in a sans-serif or serif font — monospace-only is the philosophy
- Add box-shadows to any element — the flatness is intentional
- Use bold weight 700 except for explicit headings — the system is 400 / 500 / 700, balanced
- Use radius beyond 4px / 6px — no pills, no generous rounding
- Use cool/blue-tinted borders — the warmth is structural
- Add gradients, glows, or backdrop blur — solid surfaces only
- Compress line-height below 1.50 for body — reading rhythm matters even on dark

## Agent Prompt Guide

**Bias toward** — Berkeley Mono everywhere, warm `#201d1d` canvas, warm `#fdfcfc` text, three-weight hierarchy (700 / 500 / 400), 1.50 / 2.00 line-heights, 4px radius (6px inputs only), warm-transparent borders, Apple HIG semantic colors with three-stage hover→active, zero shadows, underlined links.

**Reject** — pure black/white surfaces, additional typefaces (sans, serif), box-shadows, gradients, pills or large radii, cold/blue-tinted borders, single-stage interaction colors, decorative ornament.
