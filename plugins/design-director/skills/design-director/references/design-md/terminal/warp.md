---
version: alpha
name: Warp
description: |
  Warp's website feels like sitting at a campfire in a deep forest — warm, dark, and alive with quiet confidence. Unlike the cold, blue-tinted blacks favored by most developer tools, Warp wraps everything in a warm near-black that feels like charred wood or dark earth. The text isn't pure white either — it's Warm Parchment (`#faf9f6`), a barely-perceptible cream that softens every headline and makes the dark canvas feel inviting rather than austere. The typography is the secret weapon: Matter, a geometric sans-serif with distinctive character, deployed at Regular (400) weight across virtually all text — even headlines. The font choice is unusual for a developer tool — Matter has a softness and humanity that signals "this terminal is for everyone, not just greybeards." Combined with tight line-heights and controlled negative letter-spacing on headlines, the effect is refined and approachable simultaneously. Nature photography is woven between terminal screenshots, creating a visual language that says: this tool brings you closer to flow, to calm productivity. The overall philosophy is restraint through warmth — minimal color, minimal ornamentation, almost monochromatic warm grays. It's a terminal company that markets like a lifestyle brand. Mood — warm-dark, contemplative, editorial, restrained.

colors:
  primary: "#353534"
  primary-hover: "#454545"
  ink: "#faf9f6"
  body: "#afaeac"
  muted: "#868584"
  muted-strong: "#666469"
  disabled: "#5c5855"
  canvas: "#1a1816"
  surface: "#1a1816"
  surface-elevated: "#353534"
  surface-charcoal: "#454545"
  hairline: "#d8d8d8"
  hairline-strong: "#9b9b9b"
  on-primary: "#afaeac"
  on-dark: "#faf9f6"
  link: "#666469"

typography:
  display-hero:
    fontFamily: "'Matter Regular', 'Matter Regular Placeholder', system-ui, -apple-system, 'Helvetica Neue', Arial"
    fontSize: 80px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -2.4px
  display-section:
    fontFamily: "'Matter Regular', 'Matter Regular Placeholder', system-ui, -apple-system, 'Helvetica Neue', Arial"
    fontSize: 56px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.56px
  heading-section:
    fontFamily: "'Matter Regular', 'Matter Regular Placeholder', system-ui, -apple-system, 'Helvetica Neue', Arial"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.96px
  feature-heading:
    fontFamily: "'Matter Regular', 'Matter Regular Placeholder', system-ui, -apple-system, 'Helvetica Neue', Arial"
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -0.4px
  sub-heading-lg:
    fontFamily: "'Matter Regular', 'Matter Regular Placeholder', system-ui, -apple-system, 'Helvetica Neue', Arial"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -0.72px
  card-display:
    fontFamily: "'Matter SQ Regular', 'Matter SQ Regular Placeholder', system-ui, -apple-system, 'Helvetica Neue', Arial"
    fontSize: 42px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0
  sub-heading:
    fontFamily: "'Matter Regular', 'Matter Regular Placeholder', system-ui, -apple-system, 'Helvetica Neue', Arial"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.19
    letterSpacing: 0
  body-heading:
    fontFamily: "'Matter Regular', 'Matter Regular Placeholder', system-ui, -apple-system, 'Helvetica Neue', Arial"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.72px
  card-title:
    fontFamily: "'Matter Medium', 'Matter Medium Placeholder', system-ui, -apple-system, 'Helvetica Neue', Arial"
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.14
    letterSpacing: 0
  body-lg:
    fontFamily: "'Matter Regular', 'Matter Regular Placeholder', system-ui, -apple-system, 'Helvetica Neue', Arial"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: -0.2px
  body:
    fontFamily: "'Matter Regular', 'Matter Regular Placeholder', system-ui, -apple-system, 'Helvetica Neue', Arial"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: -0.18px
  nav-ui:
    fontFamily: "'Matter Regular', 'Matter Regular Placeholder', system-ui, -apple-system, 'Helvetica Neue', Arial"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0
  button:
    fontFamily: "'Matter Medium', 'Matter Medium Placeholder', system-ui, -apple-system, 'Helvetica Neue', Arial"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
  caption-label:
    fontFamily: "'Matter Regular', 'Matter Regular Placeholder', system-ui, -apple-system, 'Helvetica Neue', Arial"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 1.4px
  small-label:
    fontFamily: "'Matter Regular', 'Matter Regular Placeholder', system-ui, -apple-system, 'Helvetica Neue', Arial"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 2.4px
  micro:
    fontFamily: "'Matter Regular', 'Matter Regular Placeholder', system-ui, -apple-system, 'Helvetica Neue', Arial"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0
  mono-code:
    fontFamily: "'Geist Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New'"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0
  mono-body:
    fontFamily: "'Matter Mono Regular', 'Matter Mono Regular Placeholder', ui-monospace, SFMono-Regular, Menlo, Monaco"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.2px

rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 10px
  xl: 12px
  "2xl": 14px
  "3xl": 40px
  pill: 50px
  full: 9999px

spacing:
  "0": 0px
  xxs: 4px
  xs: 8px
  sm: 10px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  "3xl": 48px
  section: 80px
  section-lg: 120px

components:
  button-dark-pill:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 10px 24px
  button-frosted-tag:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.caption-label}"
    rounded: "{rounded.sm}"
    padding: 1px 6px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: 24px
  card-bordered:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.2xl}"
    padding: 32px
  image-container:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
  video-container:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
---

## Overview

Warp is a terminal company that markets like a lifestyle brand. Warm dark canvas, Warm Parchment text instead of pure white, Matter Regular at weight 400 across virtually all text (even headlines), and nature photography interleaved with terminal screenshots — the visual language says "this tool brings you closer to flow, to calm productivity."

Mood — warm-dark, contemplative, editorial, restrained.

## Colors

Three primary tones carry the system: **Warm Parchment** (`#faf9f6`) for primary text — a barely-cream off-white that softens every surface; **Earth Gray** (`#353534`) for button backgrounds and dark interactive surfaces — warm, not cold; and a deep warm near-black canvas. The original site derives the page background from the body element rather than a named token; this file uses `#1a1816` as a representative warm near-black.

Text scales: **Ash Gray** (`#afaeac`) is the workhorse reading color and button text; **Stone Gray** (`#868584`) is muted descriptions; **Muted Purple** (`#666469`) carries underlined links with a subtle purple undertone.

The original border treatment uses semi-transparent values — `rgba(226, 226, 226, 0.35)` for the standard hairline, `rgba(255, 255, 255, 0.04)` for the ultra-subtle "frosted veil" overlay, `rgba(250, 249, 246, 0.9)` for translucent parchment surfaces. These collapse to flat hex here (`#d8d8d8`, `#9b9b9b`) for lint compliance — implement the rgba forms directly to preserve the ghostly containment.

The system is **almost monochromatic**: no bold accent colors, no chromatic brand. Interactive states are communicated through opacity changes and underline decorations, never color shifts. Any accent color would break the warm restraint.

## Typography

**Matter Regular at weight 400 dominates** — even headlines. Matter Medium (500) appears only for emphasis moments like card titles and buttons. There is zero use of bold (700+) anywhere. This creates a remarkably even, calm typographic texture.

The font family includes variants: **Matter Regular** (default), **Matter Medium** (500 emphasis), **Matter SQ Regular** (squared variant for special display contexts), **Matter Mono Regular** (custom mono companion), plus **Inter** as a UI supplement and **Geist Mono** for code/terminal display.

Display sizes use progressive negative letter-spacing: -2.4px at 80px, -0.96px at 48px, -0.72px at 36px, scaled by size for compressed display treatment.

Uppercase as editorial signal: small labels (12–14px) use uppercase transform with wide positive letter-spacing (1.4–2.4px) for magazine-editorial categorization. Tight uppercase feels wrong here; the wide tracking is essential.

Warm legibility comes from the combination of Matter's geometric softness + warm text colors (`#faf9f6`) + controlled negative tracking — text reads as effortlessly human on dark surfaces.

## Layout

8px base scale (1, 4, 5, 8, 10, 12, 14, 15, 16, 18, 24, 26, 30, 32, 36px). Section padding 80–120px vertical; container max-width around 1500px (breakpoint at 1500px). Wide cinematic containers let photography breathe.

The whitespace philosophy is **vast and warm**: the dark background creates a contemplative warm void rather than empty space. Photography itself serves as visual breathing room between dense product information. The layout reads like a magazine — each section is a deliberate page-turn moment.

## Elevation & Depth

Warp's elevation system is remarkably flat — almost zero shadow usage on the marketing site.

| Level | Treatment | Use |
|---|---|---|
| Level 0 (Flat) | No shadow | Page canvas, most surfaces |
| Level 1 (Veil) | `rgba(255, 255, 255, 0.04)` overlay | Subtle surface differentiation |
| Level 2 (Border) | `rgba(226, 226, 226, 0.35) 1px` border | Card containment, section separation |
| Level 3 (Ambient) | `rgba(0, 0, 0, 0.2) 0px 5px 15px` (inferred) | Image containers, floating elements |

Depth is communicated through **semi-transparent borders** (35% opacity creating ghostly containment), **photography layering** (images create natural depth without artificial shadows), and **surface opacity shifts**. The effect is calm and grounded — nothing floats, everything rests.

No glass or blur effects, no decorative gradients. Any glow comes from the photography's natural lighting, not artificial CSS.

## Shapes

Radius scale: 4px (small interactive — buttons, tags) → 5–6px (links, small containers) → 8px (images, video, standard cards) → 10px (video specifically) → 12px (feature cards, large images) → 14px (large containers) → 40px (large rounded sections) → 50px (pill buttons — primary CTAs) → 200px (progress bars, full pill).

## Components

**Dark pill button**: `#353534` fill, Ash Gray (`#afaeac`) text, 50px pill radius, 10/24 padding — the primary CTA, warm and muted, deliberately understated.

**Frosted tag**: subtle white-overlay fill, dark text, 6px rectangular radius, 1/6 padding — small inline tag-like buttons.

**Ghost button**: no visible background, text-only with underline decoration on hover.

**Photography card**: full-bleed nature imagery with overlay text, 8–12px radius. **Terminal screenshot card**: product UI in dark containers with rounded corners. **Bordered card**: semi-transparent border (`rgba(226, 226, 226, 0.35)`) for containment, 12–14px radius.

Hover behavior is minimal — content cards don't dramatically change on hover, maintaining the calm aesthetic.

## Do's and Don'ts

**Do**
- Use warm off-white (`#faf9f6`) for text — the cream undertone is essential
- Keep buttons restrained and muted — dark fill (`#353534`) with Ash Gray text, no bright CTAs
- Apply Matter Regular (400) for nearly everything, even headlines — Medium (500) is for emphasis only
- Use uppercase labels with wide letter-spacing (1.4–2.4px) for editorial categorization
- Interleave nature photography with product screenshots — core to brand identity
- Maintain almost-monochromatic warm grays — no bold accent colors
- Use semi-transparent borders (`rgba(226, 226, 226, 0.35)`) instead of shadows
- Apply progressive negative letter-spacing (-0.18 to -2.4px) on headlines

**Don't**
- Use pure white `#ffffff` for text — Warm Parchment (`#faf9f6`) is the standard
- Add bold accent colors (blue, red, green) — the system is monochromatic warm grays
- Apply bold weight (700+) anywhere — Warp never goes above Medium (500)
- Use heavy drop shadows — depth is borders, photography, and opacity shifts
- Create cold or blue-tinted dark backgrounds — the warmth is essential
- Add decorative gradients or glow effects — photography provides all visual interest
- Use tight, compressed layouts — editorial spacing is generous and contemplative
- Mix in additional typefaces beyond the Matter family + Inter supplement

## Agent Prompt Guide

**Bias toward** — warm dark canvas, Warm Parchment `#faf9f6` text, Matter Regular weight 400 across virtually everything, Earth Gray `#353534` muted dark CTAs, 50px pill radius for primary buttons, semi-transparent (`rgba(226, 226, 226, 0.35)`) borders, uppercase editorial labels with wide tracking (1.4–2.4px), nature photography interleaved with terminal screenshots, almost-monochromatic warm grays.

**Reject** — pure white text, bold (700+) weight, cold/blue-tinted darks, bright accent colors as chrome, heavy drop shadows, decorative gradients, tight compressed layouts, additional typefaces beyond Matter family + Inter.
