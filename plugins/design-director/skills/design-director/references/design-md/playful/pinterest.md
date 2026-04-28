---
version: alpha
name: Pinterest
description: |
  Pinterest's website is a warm, inspiration-driven canvas that treats visual discovery like a lifestyle magazine. The design operates on a soft, slightly warm white background with Pinterest Red `#e60023` as the singular bold brand accent. Unlike the cool blues of most tech platforms, Pinterest's neutral scale has a distinctly warm undertone — grays lean toward olive/sand (`#91918c`, `#62625b`, `#e5e5e0`) rather than cool steel, creating a cozy craft-like atmosphere that invites browsing. Pin Sans is the custom proprietary typeface with a broad fallback stack including Japanese fonts that reflects Pinterest's global reach. The CSS variable naming reveals a sophisticated three-tier design token architecture (`--comp-*` / `--sema-*` / `--base-*`). Generous border-radius (12px–40px, plus 50% for circles) and warm-tinted button backgrounds (the secondary `#e5e5e0` is sand-like rather than cold gray) — combined with photography-dominant masonry layouts — create a design that feels handcrafted and personal, not corporate. Mood — cozy, lifestyle, warm-craft, photography-first.

colors:
  primary: "#e60023"
  ink: "#211922"
  body: "#000000"
  muted: "#62625b"
  silver: "#91918c"
  hover-gray: "#bcbcb3"
  border-disabled: "#c8c8c1"
  canvas: "#ffffff"
  surface-button: "#e5e5e0"
  surface-circle: "#e0e0d9"
  surface-fog: "#f6f6f3"
  surface-dark: "#33332e"
  hairline: "#91918c"
  hairline-soft: "#c8c8c1"
  on-primary: "#000000"
  link: "#2b48d4"
  focus: "#435ee5"
  perf-purple: "#6845ab"
  rec-purple: "#7e238b"
  green: "#103c25"
  green-hover: "#0b2819"
  facebook-blue: "#0866ff"
  pressed-blue: "#617bff"
  error: "#9e0a0a"

typography:
  display-hero:
    fontFamily: "'Pin Sans', -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, ヒラギノ角ゴ Pro W3, メイリオ, Meiryo, ＭＳ Ｐゴシック, Arial, sans-serif"
    fontSize: 70px
    fontWeight: 600
    lineHeight: 1.10
    letterSpacing: 0
  section-heading:
    fontFamily: "'Pin Sans', -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.20
    letterSpacing: -1.2px
  body:
    fontFamily: "'Pin Sans', -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  caption-bold:
    fontFamily: "'Pin Sans', -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.40
    letterSpacing: 0
  caption:
    fontFamily: "'Pin Sans', -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.50
    letterSpacing: 0
  button:
    fontFamily: "'Pin Sans', -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.20
    letterSpacing: 0

rounded:
  none: 0px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 28px
  "2xl": 32px
  "3xl": 40px
  full: 9999px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 12px
  "4": 16px
  "5": 20px
  "6": 24px
  "8": 32px
  "10": 80px
  "12": 100px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 6px 14px
  button-sand:
    backgroundColor: "{colors.surface-button}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 6px 14px
  button-circle:
    backgroundColor: "{colors.surface-circle}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 8px
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.body}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 6px 14px
  card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: 16px
  card-feature:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: 24px
  input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 11px 15px
---

## Overview

Pinterest runs on a warm white canvas with olive/sand-toned neutrals — cozy not clinical. Pinterest Red `#e60023` is the singular bold accent that never goes subtle. Pin Sans (custom, with broad CJK fallback stack) covers everything from 70px display down to 12px UI. The three-tier token architecture (`--comp-*` / `--sema-*` / `--base-*`) and generous radii (16px buttons, 20px+ cards, 50% circles) plus warm badge backgrounds (`hsla(60,20%,98%,.5)`) create a handcrafted personal feel.

Mood — cozy, lifestyle, warm-craft, photography-first.

## Colors

Plum-black `#211922` is primary text — warmer than pure black with a hint of plum. The neutral scale is olive/sand-toned: `#62625b` (olive gray secondary), `#91918c` (warm silver, also input borders), `#bcbcb3` (hover gray), `#c8c8c1` (disabled).

Surfaces stay warm: white `#ffffff` canvas, sand gray `#e5e5e0` (secondary buttons), warm light `#e0e0d9` (circular buttons), fog `#f6f6f3` (light surface at 50% opacity), dark `#33332e` for footer.

Pinterest Red `#e60023` is the bold singular CTA color. Focus blue `#435ee5`, link blue `#2b48d4`. Performance purple `#6845ab` and recommendation purple `#7e238b` for AI/feature highlights. Green `#103c25` (with hover `#0b2819`) for nature/success. Error red `#9e0a0a`.

## Typography

Pin Sans is the only font — handles 70px display down to 12px UI with no secondary or monospace. The compact type scale (12–70px with a dramatic jump) creates an app-like dense information hierarchy. Headings use 600–700 weights with -1.2px tracking on 28px section titles for cozy intimate section feel. No ultra-light weights — type always feels substantial.

## Layout

8px base, scale 4/8/12/16/20/24/32/80/100px. Large jumps (32 → 80 → 100) reserved for section spacing. Masonry grid is the signature pin layout — content density IS the value proposition; whitespace exists between sections, not within the grid.

## Elevation & Depth

Minimal shadows. The masonry grid relies on photographic content to create visual interest rather than elevation. Depth comes from warm surface colors and generous container rounding. Focus rings via semantic `--sema-color-border-focus-outer-default` tokens.

## Shapes

12px (small cards, links) → 16px (buttons, inputs, medium cards — the standard) → 20px (feature cards) → 28px (large containers) → 32px (tab elements, large panels) → 40px (hero containers, large feature blocks) → 50% (circular action buttons, tab indicators).

## Components

**Primary red** — `#e60023` fill, black text (unusual contrast choice), 6/14 padding, 16px radius (rounded but not pill), 2px transparent border with semantic focus outline.

**Secondary sand** — `#e5e5e0` warm sand fill, black text, 6/14 padding, 16px radius.

**Circular action** — `#e0e0d9` warm light fill, plum-black icon, 50% radius. Used for pin actions, navigation controls.

**Ghost** — transparent fill, black text, no border. Tertiary actions.

**Cards** — photography-first pin cards with 12–20px radius, no traditional box-shadow. White or warm fog backgrounds. Some featured image containers use 8px white thick borders.

**Inputs** — white fill, `1px solid #91918c`, 16px radius, 11/15 padding.

## Do's and Don'ts

**Do**
- Use warm neutrals (`#e5e5e0`, `#e0e0d9`, `#91918c`) — warm olive/sand IS the identity
- Apply Pinterest Red `#e60023` only for primary CTAs — bold and singular
- Use Pin Sans exclusively — one font for everything
- Apply 16px radius for buttons/inputs, 20px+ for cards (rounded but not pill)
- Keep the masonry grid dense — content density is the value
- Use plum black `#211922` for primary text — warmer than pure black
- Use warm badge backgrounds (`hsla(60,20%,98%,.5)`) for subtle warm washes

**Don't**
- Use cool gray neutrals — always warm/olive-toned
- Use pure black `#000000` as primary text — use plum black `#211922`
- Use pill-shaped buttons — 16px is rounded but not pill
- Add heavy shadows — Pinterest is flat by design, depth from content
- Use small radius (<12px) on cards — generous rounding is core
- Introduce additional brand colors — red + warm neutrals is the complete palette
- Use thin font weights — Pin Sans at 400 minimum

## Agent Prompt Guide

**Bias toward** — warm white canvas with olive/sand neutrals, Pinterest Red `#e60023` singular bold CTA, Pin Sans single-font system, plum-black `#211922` text, generous 16–40px radii, masonry grid for content, photography-first composition, warm badge washes.

**Reject** — cool gray neutrals, pure black text, pill-shaped buttons, multiple brand accent colors, heavy drop shadows, sharp <12px radii on cards, thin font weights.
