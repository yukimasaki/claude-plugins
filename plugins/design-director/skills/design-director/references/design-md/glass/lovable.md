---
version: alpha
name: Lovable
description: |
  Lovable's website is a warm-cream developer-tool interface where humanism replaces the cold-white conventions of most AI builders. The whole page sits on a parchment canvas (`#f7f4ed`) holding near-black charcoal type (`#1c1c1c`, never pure black). The custom Camera Plain Variable typeface — humanist with slightly rounded terminals — runs at modest variable weights (400 / 480 / 600) and aggressive negative letter-spacing (-0.9px to -1.5px) at display sizes for editorial compression. The signature move is an opacity-driven gray scale: every gray on the page is `#1c1c1c` at varying alpha, plus an inset multi-layer shadow on dark buttons (white highlight at top edge, dark ring at bottom, soft outer drop) that reads as tactile pressed-into-surface rather than hovering. Borders (`#eceae4`) replace shadows for card containment. Mood — warm, approachable, editorial, hand-crafted.

colors:
  primary: "#1c1c1c"
  primary-active: "#1c1c1c"
  ink: "#1c1c1c"
  body: "#5f5f5d"
  body-strong: "#1c1c1c"
  muted: "#5f5f5d"
  canvas: "#f7f4ed"
  surface: "#f7f4ed"
  surface-soft: "#fcfbf8"
  hairline: "#eceae4"
  hairline-strong: "#1c1c1c"
  on-primary: "#fcfbf8"
  ring-blue: "#3b82f6"

typography:
  display-xl:
    fontFamily: "Camera Plain Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: 60px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -1.5px
  display-alt:
    fontFamily: "Camera Plain Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: 60px
    fontWeight: 480
    lineHeight: 1.0
    letterSpacing: 0
  display-lg:
    fontFamily: "Camera Plain Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: -1.2px
  display-md:
    fontFamily: "Camera Plain Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.9px
  title-md:
    fontFamily: "Camera Plain Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0
  body-lg:
    fontFamily: "Camera Plain Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.38
    letterSpacing: 0
  body-md:
    fontFamily: "Camera Plain Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "Camera Plain Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button:
    fontFamily: "Camera Plain Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button-sm:
    fontFamily: "Camera Plain Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 8px
  xs: 12px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 40px
  xxl: 56px
  section: 96px
  section-lg: 128px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 8px 16px
  button-ghost:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 8px 16px
  button-cream:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 8px 16px
  button-pill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  card-featured:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: 32px
  text-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    height: 64px
  footer:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xl}"
    padding: 64px
---

## Overview

Lovable radiates warmth through restraint. The entire page sits on a parchment canvas (`{colors.canvas}` — #f7f4ed) — distinctly creamy, deliberately not the cold-white most AI builders use. Charcoal type (`{colors.ink}` — #1c1c1c) is a near-black with organic warmth. The custom Camera Plain Variable typeface gives the page a humanist voice: slightly rounded terminals, organic curves, comfortable reading rhythm. At display sizes (48–60px), weight 600 with negative letter-spacing (-0.9 to -1.5px) compresses headlines into editorial statements.

The system has one signature move: an **opacity-driven gray scale**. Rather than a traditional palette, every gray on the page is `#1c1c1c` modulated at varying alpha (3% / 4% / 40% / 82–83%). Borders (`{colors.hairline}` — #eceae4) are the containment mechanism, not shadows; the only notable shadow is the multi-layer **inset shadow** on dark buttons (white highlight at top edge, dark ring at bottom, soft outer drop) that reads as tactile pressed-into-surface, not hovering.

Mood — warm, approachable, editorial, hand-crafted.

## Colors

The palette anchors on cream parchment (`{colors.canvas}` — #f7f4ed) and warm charcoal (`{colors.ink}` — #1c1c1c). Off-white (`{colors.on-primary}` — #fcfbf8) sits on dark buttons — barely distinguishable from white but warmer.

The notable system trait is alpha-modulated grays: secondary text in production runs `#1c1c1c` at 82–83% alpha, body copy at 82%, interactive borders at 40%, hover tints at 3–4%. The frontmatter encodes the most-used opaque approximation (`{colors.body}` — #5f5f5d) for muted captions, but real implementations should layer alpha-modulated charcoal for tonal unity.

The hairline (`{colors.hairline}` — #eceae4) is the warm divider line; the strong-hairline equivalent on interactive elements is `#1c1c1c` at 40% alpha (encoded as `{colors.hairline-strong}` for reference). The Tailwind ring blue (`{colors.ring-blue}` — #3b82f6) appears at 50% alpha as the keyboard focus indicator only.

## Typography

The system runs **Camera Plain Variable** as a single-family solution with a continuous weight axis. Three weights carry hierarchy: 400 (body / UI / links / buttons), 480 (special light display), 600 (headings / emphasis).

- Display headlines (60 / 48 / 36px) use weight 600 with aggressive negative letter-spacing (-1.5 / -1.2 / -0.9px)
- Body and UI stay at weight 400 with normal tracking — the editorial compression is reserved for display sizes
- Weight 480 is reserved for rare display moments where a lighter-than-bold hero is desired

The narrow weight ladder creates hierarchy through size and tracking, not weight variation. Camera Plain Variable's humanist warmth is what gives Lovable its distinct voice; switching to a geometric sans (Inter, Roboto) would make it read as "any other developer tool."

## Layout

- Spacing base 8px; scale stretches generously at the top — sections at 80–208px for editorial breathing room
- Max content width ~1200px centered
- Hero: single-column centered with massive vertical padding (96px+)
- Feature sections: 2–3 column grids
- Below 768px the layout collapses to single column and section spacing tightens to ~64px

## Elevation & Depth

Depth is intentionally shallow. Five levels:

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, cream canvas | Page surface, most content |
| Bordered | 1px `{colors.hairline}` | Cards, images, dividers |
| Inset | Multi-layer inset on dark buttons (white 0.5px top highlight + dark 0.5px ring + soft outer drop) | Primary CTAs |
| Focus | `rgba(0,0,0,0.1) 0px 4px 12px` | Active / focused states |
| Ring | `{colors.ring-blue}` at 50% alpha 2px ring | Keyboard focus on inputs |

Borders against the cream surface create gentle containment instead of floating cards. The inset shadow on dark buttons is the signature detail — never skip it.

## Shapes

Border radius scale: `{rounded.xs}` 4px (small interactive) → `{rounded.sm}` 6px (buttons / inputs / nav) → `{rounded.md}` 8px (compact cards) → `{rounded.lg}` 12px (cards, image containers) → `{rounded.xl}` 16px (large containers, footer) → `{rounded.pill}` 9999px (action pills, icon buttons).

Pill radius is reserved for icon/action toggles — never on rectangular text buttons.

## Components

**`button-primary`** — Charcoal fill (`{colors.primary}`), off-white text (`{colors.on-primary}`), 6px radius, 8/16 padding. Carries the signature multi-layer inset shadow for tactile depth. Active state: opacity 0.8.

**`button-ghost`** — Transparent fill, `{colors.ink}` text, 1px `{colors.hairline-strong}` border (charcoal at 40% alpha in production), 6px radius.

**`button-cream`** — `{colors.surface}` fill matching the canvas, `{colors.ink}` text, no border. Used for tertiary toolbar actions.

**`button-pill`** — Cream fill, 9999px radius, same inset shadow as primary dark when emphasized. Reserved for action toggles (plan mode, voice recording).

**`card`** — Cream fill matching the canvas, 1px `{colors.hairline}` border, 12px radius. No box-shadow. Title in `{typography.title-md}` (20px / 400), body in `{typography.body-md}`.

**`text-input`** — Cream fill, 1px `{colors.hairline}` border, 6px radius, placeholder in `{colors.muted}`. Focus ring: `{colors.ring-blue}` at 50% alpha.

**`top-nav`** — Sticky on cream, logo wordmark left, links in `{typography.body-md}` charcoal, primary dark button right-aligned. Hamburger menu collapses at 768px.

**`footer`** — Multi-column link layout with warm gradient transitioning to bottom; inner container at 16px radius with 1px hairline border.

## Do's and Don'ts

**Do**
- Use the parchment canvas (`{colors.canvas}` — #f7f4ed) — never pure white
- Set headlines in Camera Plain Variable with negative letter-spacing (-0.9 to -1.5px)
- Derive grays from `{colors.ink}` at varying alpha for tonal unity
- Use the multi-layer inset shadow on dark buttons — it's the signature tactile detail
- Use `{colors.hairline}` borders instead of shadows for card containment
- Keep weights narrow: 400 for body / UI, 600 for headings
- Reserve `{rounded.pill}` for icon and action toggles only
- Apply opacity 0.8 on active state for tactile feedback

**Don't**
- Don't use pure white as canvas — cream is intentional
- Don't use heavy box-shadows for cards — borders are the containment
- Don't introduce saturated accent colors — the palette is warm-neutral
- Don't use weight 700 — 600 is the maximum
- Don't apply pill radius on rectangular text buttons
- Don't use sharp focus outlines — the system is shadow-based + soft
- Don't increase letter-spacing on headings — Camera Plain runs tight at scale

## Agent Prompt Guide

**Bias toward** — warm cream canvas (`{colors.canvas}`), Camera Plain Variable with negative letter-spacing on display, opacity-modulated grays from `{colors.ink}`, multi-layer inset shadow on primary dark buttons, hairline borders for card containment, two-weight discipline (400 body, 600 heading).

**Reject** — pure white canvas, geometric sans for display, heavy drop shadows, saturated accent colors, weight 700 on body or headings, pill radius on rectangular CTAs, sharp focus outlines.
