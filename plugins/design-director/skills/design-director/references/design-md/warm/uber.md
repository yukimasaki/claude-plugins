---
version: alpha
name: Uber
description: |
  Uber's design language is a masterclass in confident minimalism — a black-and-white universe where every pixel earns its place. The system runs on a stark binary: jet black (`#000000`) and pure white (`#ffffff`), with virtually no mid-tone grays in the UI chrome. The proprietary **UberMove** + **UberMoveText** family is rigorously role-bound — UberMove (geometric, square-proportioned, weight 700) for headlines, UberMoveText (slightly softer, weight 400–500) for body and UI. The signature shape is **999px pill radius** on everything interactive — buttons, chips, navigation, filter toggles. The signature elevation is whisper-soft black shadows at 0.12–0.16 alpha — barely visible card lift that never breaks the flat aesthetic. Warm, slightly-stylized human illustrations (drivers, riders, cityscapes) inject humanity into the otherwise stark monochrome. The system is **entirely gradient-free** — flat color blocks throughout. Mood — confident, efficient, transit-grade, monochrome.

colors:
  primary: "#000000"
  primary-hover: "#1a1a1a"
  ink: "#000000"
  body: "#000000"
  body-secondary: "#4b4b4b"
  body-tertiary: "#afafaf"
  muted: "#afafaf"
  canvas: "#ffffff"
  canvas-dark: "#000000"
  surface-soft: "#f3f3f3"
  surface-chip: "#efefef"
  surface-hover: "#e2e2e2"
  hairline: "#000000"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  link-blue: "#0000ee"

typography:
  display-xl:
    fontFamily: "UberMove, UberMoveText, system-ui, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 52px
    fontWeight: 700
    lineHeight: 1.23
    letterSpacing: 0
  display-lg:
    fontFamily: "UberMove, UberMoveText, system-ui, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.22
    letterSpacing: 0
  card-title:
    fontFamily: "UberMove, UberMoveText, system-ui, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  display-md:
    fontFamily: "UberMove, UberMoveText, system-ui, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: 0
  title-sm:
    fontFamily: "UberMove, UberMoveText, system-ui, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  nav:
    fontFamily: "UberMoveText, system-ui, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.33
    letterSpacing: 0
  body-md:
    fontFamily: "UberMoveText, system-ui, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-emphasis:
    fontFamily: "UberMoveText, system-ui, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  caption:
    fontFamily: "UberMoveText, system-ui, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    letterSpacing: 0
  caption-light:
    fontFamily: "UberMoveText, system-ui, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  micro:
    fontFamily: "UberMoveText, system-ui, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.67
    letterSpacing: 0
  button:
    fontFamily: "UberMoveText, system-ui, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0

rounded:
  none: 0px
  sm: 8px
  md: 12px
  pill: 999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 10px 12px
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 10px 12px
  button-secondary-hover:
    backgroundColor: "{colors.surface-hover}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
  button-chip:
    backgroundColor: "{colors.surface-chip}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 16px
  button-chip-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 16px
  button-floating:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: 14px
  card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.card-title}"
    rounded: "{rounded.sm}"
    padding: 24px
  card-featured:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: 32px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 12px 16px
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: 64px
  category-pill-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-emphasis}"
    height: 64px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav}"
    height: 64px
  footer:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.body-tertiary}"
    typography: "{typography.caption-light}"
    padding: 64px
---

## Overview

Uber's web presence is a study in confident minimalism — a binary universe of jet black (`{colors.canvas-dark}` — #000000) and pure white (`{colors.canvas}` — #ffffff) with virtually no mid-tone grays in the UI chrome. This isn't the sterile minimalism of an unfinished startup; it's the deliberate restraint of a brand established enough to whisper.

Note: Uber is housed under `warm/` for organizational purposes, but its palette is **strictly monochrome** — distinct from the warm-cream Claude / Mercury siblings. The "warm" family identity here comes from the editorial restraint and human illustration character, not the color temperature.

The proprietary **UberMove** + **UberMoveText** family is rigorously role-bound — UberMove (geometric, square-proportioned, weight 700) for headlines; UberMoveText (slightly softer, weight 400–500) for body and UI. The signature shape is the **999px full-pill radius** on every interactive element — buttons, chips, nav, filter toggles. The signature elevation is whisper-soft black shadows at 0.12–0.16 alpha. Warm, slightly stylized human illustrations (drivers, riders, cityscapes) inject humanity into the otherwise stark monochrome.

Mood — confident, efficient, transit-grade, monochrome.

## Colors

The palette is uncompromisingly binary: true black and pure white, no off-blacks, no near-whites. The system has only **three grays** — `{colors.surface-chip}` (#efefef) for chip / filter backgrounds, `{colors.surface-hover}` (#e2e2e2) for white-button hover, `{colors.surface-soft}` (#f3f3f3) for elevated white-button hover. Text uses Body Gray (`{colors.body-secondary}` — #4b4b4b) and Muted Gray (`{colors.body-tertiary}` — #afafaf) for secondary / tertiary tiers.

The system is **entirely gradient-free**. Black and white duality and flat color blocks create all visual hierarchy. No gradients appear anywhere — every surface is a solid color, every transition is a hard edge or a shadow.

Borders use true black 1px (`{colors.hairline}` — #000000) on input fields — the only place visible borders prominently appear.

## Typography

**Two fonts, strict roles** — UberMove for headings, UberMoveText for everything else. The boundary is never crossed.

- UberMove headings are exclusively weight 700 (bold) — every headline hits with billboard force at line-heights 1.22–1.40
- UberMoveText body and UI uses 400–500 — clear visual hierarchy through weight contrast
- No letter-spacing, no text-transform, no ornamental sizing. Every text element serves a direct communication purpose.

The font system has no decorative type treatment. Inter or DM Sans are reasonable open-source substitutes for the geometric square-proportioned character of UberMove.

## Layout

- Spacing base 8px with sub-base values (4 / 6 / 10 / 14 / 18) for tight typographic adjustments
- Section vertical spacing 64–96px
- Max content width ~1136px centered
- Hero: split layout (text/CTA left, map/illustration right) — collapses to stacked single column at mobile
- Six-tier breakpoints: 320 / 600 / 768 / 1119 / 1120 / 1136px

The whitespace philosophy is **efficient, not airy**. This is transit-system spacing: compact, clear, purpose-driven. Cards pack information tightly with minimal internal spacing, relying on shadow and radius to define boundaries.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, solid background | Page background, inline content, text sections |
| Subtle | `rgba(0,0,0,0.12) 0px 4px 16px` | Standard content cards, feature blocks |
| Medium | `rgba(0,0,0,0.16) 0px 4px 16px` | Elevated cards, overlay elements |
| Floating | `rgba(0,0,0,0.16) 0px 2px 8px` + `translateY(2px)` | Floating action buttons, map controls |
| Pressed | `rgba(0,0,0,0.08)` inset | Active / pressed button states |
| Focus | `rgb(255,255,255) 0px 0px 0px 2px` inset | Keyboard focus indicators |

The shadow philosophy is **structural, never decorative**. Always black at very low alpha (0.08–0.16), creating the bare minimum lift to separate layers. Moderate blur radii (8–16px) — enough to feel natural, never dramatic. No colored shadows, no layered stacks, no ambient glow.

## Shapes

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0 | Reserved (never used on interactive elements) |
| `{rounded.sm}` | 8px | Standard content cards, input fields, listboxes |
| `{rounded.md}` | 12px | Featured cards, larger containers, link cards |
| `{rounded.pill}` | 999px | **All buttons, chips, nav items, pills — universal** |
| `{rounded.full}` | 9999px / 50% | Avatar images, icon containers, circular controls |

The 999px pill is the system's signature — buttons / chips / nav / filter toggles all share the capsule shape, creating a tactile, thumb-friendly interface vocabulary that is unmistakably Uber.

## Components

**`button-primary`** — True black fill, white text, 999px pill, 10/12 padding. Bold, high-contrast, unmissable. Focus: inset white 2px ring.

**`button-secondary`** — White fill, black text, 999px pill. Hover shifts to `{colors.surface-hover}` (#e2e2e2). Used on dark surfaces or as secondary alongside primary black.

**`button-chip`** — Light gray (`{colors.surface-chip}`) fill, black text, 999px pill, 14/16 padding. Navigation chips, category selectors, filter toggles. Active state inverts to black-with-white.

**`button-chip-active`** — Inverted state: black fill, white text, 999px pill.

**`button-floating`** — White fill, 999px pill, 14px padding, with floating shadow + 2px translateY. Map controls, scroll-to-top, floating CTAs.

**`card`** — White fill, no border, 8px radius, subtle shadow `rgba(0,0,0,0.12) 0px 4px 16px`. Cards are content-dense with minimal internal padding.

**`card-featured`** — Larger feature card at 12px radius.

**`text-input`** — White fill, 1px solid black border (the rare place borders appear), 8px radius. Standard browser focus ring.

**`hero-band`** — Split layout with text/CTA left, illustration / map right. Hero h1 at `{typography.display-xl}` (52px / 700 / 1.23). Two CTA buttons typically pair black-primary + white-secondary.

**`category-pill-nav`** — Horizontal row of pill chips ("Ride", "Drive", "Business", "Uber Eats", "About"). Each pill in `{component.button-chip}`; active uses `{component.button-chip-active}` (black-with-white inversion).

**`top-nav`** — Sticky white nav, Uber wordmark + icon at left, UberMoveText 14–18px / 500 menu items, hamburger collapse on mobile.

**`footer`** — Black surface, white headlines, muted-gray (`{colors.body-tertiary}`) links hovering to white. Multi-column link grid.

## Do's and Don'ts

**Do**
- Use true black `#000000` and pure white `#ffffff` — the stark contrast IS Uber
- Use 999px pill radius for all buttons, chips, and nav elements — non-negotiable
- Keep all headlines in UberMove Bold (700) — billboard-level impact
- Use whisper-soft shadows (0.12–0.16 alpha) for card elevation — barely visible
- Maintain compact, information-dense layouts — efficiency over airiness
- Use warm, human-centric illustrations to soften the monochrome chrome
- Apply 8px radius for content cards, 12px for featured containers
- Pair black primary buttons with white secondary buttons for dual-action layouts
- Keep UberMove for headlines, UberMoveText for body — never cross lanes

**Don't**
- Don't introduce color into UI chrome — strictly black, white, and a few grays
- Don't use radius below 999px on buttons / chips — full-pill is core identity
- Don't apply heavy or high-opacity drop shadows — depth is whisper-subtle
- Don't use serifs anywhere — geometric sans only
- Don't create airy, spacious layouts — Uber's density is intentional
- Don't use gradients or color overlays — every surface is flat solid color
- Don't soften the black/white contrast with off-whites or near-blacks
- Don't add decorative borders — borders are functional (inputs only) or absent

## Agent Prompt Guide

**Bias toward** — true black + pure white binary palette, 999px pill on every interactive element, UberMove headings (weight 700) + UberMoveText body (400–500) with strict role separation, whisper-soft black shadows (0.12–0.16 alpha), compact information-dense layouts, warm human illustrations as the only humanizing element, alternating white content + black footer.

**Reject** — color in UI chrome, sub-999px radius on buttons/chips, gradients, serifs or display alternates, decorative letter-spacing or text-transform, near-blacks / off-whites that soften the binary, heavy drop shadows, airy spacious whitespace.
