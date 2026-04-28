---
version: alpha
name: Resend
description: |
  Resend's website is a dark cinematic canvas that treats email infrastructure like a luxury product. The page is draped in pure black (`#000000`) with text glowing in near-white (`#f0f0f0`) — the controlled darkness of a photography gallery, not the typical developer-tool void. Three carefully chosen typefaces create an editorial-meets-technical hierarchy: **Domaine Display** (Klim Type Foundry serif) at massive 96px for hero headlines with barely-there line-height (1.0) and -0.96px tracking; **ABC Favorit** (Dinamo geometric sans) at 56px for section headings with aggressive -2.8px tracking; **Inter** for body and UI. **Commit Mono** is treated as a first-class visual element for code. The signature visual is **icy blue-tinted borders** — `rgba(214,235,253,0.19)` — that catch light against the void and replace traditional shadows on the pure-black canvas. Pill-shaped CTAs (9999px), multi-color accent system (orange/green/blue/yellow/red), and OpenType stylistic sets (`"ss01"` / `"ss03"` / `"ss04"` / `"ss11"`) on display fonts complete the language. Mood — cinematic, premium, frosted, editorial.

colors:
  primary: "#ffffff"
  primary-active: "#f0f0f0"
  ink: "#f0f0f0"
  body: "#f0f0f0"
  body-secondary: "#a1a4a5"
  body-tertiary: "#5c5c5c"
  muted: "#464a4d"
  muted-dim: "#494949"
  canvas: "#000000"
  surface-card: "#0a0a0a"
  surface-light: "#f8f8f8"
  surface-frost: "#fcfdff"
  hairline-frost: "#222a30"
  hairline-frost-soft: "#1a1f24"
  hairline-ring: "#1c2228"
  hairline-light: "#eaeaea"
  hairline-light-soft: "#ececec"
  hairline-light-mist: "#dedfdf"
  on-primary: "#000000"
  on-dark: "#f0f0f0"
  accent-orange: "#ff801f"
  accent-orange-soft: "#ff5900"
  accent-orange-light: "#ffa057"
  accent-green: "#11ff99"
  accent-green-soft: "#22ff99"
  accent-blue: "#3b9eff"
  accent-blue-soft: "#0075ff"
  accent-blue-mid: "#0081fd"
  accent-yellow: "#ffc53d"
  accent-red: "#ff2047"

typography:
  display-xl:
    fontFamily: "domaine, 'Times New Roman', serif"
    fontSize: 96px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.96px
  display-xl-mobile:
    fontFamily: "domaine, 'Times New Roman', serif"
    fontSize: 76.8px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.768px
  display-lg:
    fontFamily: "aBCFavorit, ui-sans-serif, system-ui, sans-serif"
    fontSize: 56px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -2.8px
  title-lg:
    fontFamily: "inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  title-md:
    fontFamily: "aBCFavorit, ui-sans-serif, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0
  title-sm:
    fontFamily: "aBCFavorit, ui-sans-serif, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: -0.8px
  body-lg:
    fontFamily: "inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: "inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-strong:
    fontFamily: "inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  nav-link:
    fontFamily: "aBCFavorit, ui-sans-serif, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    letterSpacing: 0.35px
  button:
    fontFamily: "inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    letterSpacing: 0
  small:
    fontFamily: "inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.33
    letterSpacing: 0
  code-md:
    fontFamily: "commitMono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  code-sm:
    fontFamily: "commitMono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  code-tiny:
    fontFamily: "commitMono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0

rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  "2xl": 24px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px

components:
  button-primary-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 5px 12px
  button-white-pill:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 5px 12px
  button-ghost:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: 6px 10px
  card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: 24px
  card-large:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.2xl}"
    padding: 32px
  code-block:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.on-dark}"
    typography: "{typography.code-md}"
    rounded: "{rounded.2xl}"
    padding: 24px
  feature-image:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.xl}"
  badge-orange:
    backgroundColor: "{colors.accent-orange-soft}"
    textColor: "{colors.accent-orange-light}"
    typography: "{typography.small}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  badge-blue:
    backgroundColor: "{colors.accent-blue-soft}"
    textColor: "{colors.accent-blue}"
    typography: "{typography.small}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  tab:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 6px 12px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 8px 12px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-link}"
    height: 64px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body-secondary}"
    typography: "{typography.caption}"
    padding: 80px
---

## Overview

Resend's website is a cinematic black canvas that treats email infrastructure like a luxury product. The page is draped in **Void Black** (`{colors.canvas}` — #000000) with text in Near White (`{colors.ink}` — #f0f0f0). The black background IS the whitespace — generous 80–120px vertical spacing between sections creates a scroll-through-darkness experience where each section emerges like a scene.

Typography is the star. Three carefully chosen typefaces create an editorial-meets-technical hierarchy:
- **Domaine Display** (Klim Type Foundry serif) at 96px / -0.96px tracking — magazine-cover hero headlines
- **ABC Favorit** (Dinamo geometric sans) at 56px / -2.8px tracking — compressed, engineered section heads
- **Inter** for body and UI — readable, neutral, clean

**Commit Mono** rounds out the family for code blocks — treated as a first-class visual element, not an afterthought. OpenType stylistic sets (`"ss01"` / `"ss03"` / `"ss04"` / `"ss11"`) are enabled on Domaine and ABC Favorit, activating alternate glyphs that give Resend's typography its unique character.

The signature visual is **icy blue-tinted borders**: `rgba(214,235,253,0.19)` — frosty thin lines that catch light against the void and replace traditional shadows on the pure-black canvas.

Mood — cinematic, premium, frosted, editorial.

## Colors

The canvas is **Void Black** (`{colors.canvas}` — #000000). Cards float on the same canvas (or a marginally darker `{colors.surface-card}` — #0a0a0a) with frost borders defining their edges. Text uses a four-tier opacity ladder (encoded as opaque approximations): Near White primary, Silver (`{colors.body-secondary}` — #a1a4a5) for muted, Mid Gray for hover, Medium Gray for de-emphasized.

The signature **Frost Border** is `rgba(214,235,253,0.19)` in production — an icy blue-tinted line at 19% alpha that gives every container a cold crystalline quality. The frontmatter encodes a near-black opaque approximation (`{colors.hairline-frost}`); real implementations should use the alpha form to preserve the blue-tinted shimmer.

The **multi-color accent system** is the palette's other defining trait. Each product feature gets one accent (orange / green / blue / yellow / red), used at low alpha (12–42%) for backgrounds and full opacity for text. The numbered scales — Orange 4 / 10 / 11, Green 3 / 4, Blue 4 / 5 / 10 — give each color a soft / mid / bright register.

## Typography

The three-font system is **strictly role-bound** — fonts never cross lanes:

- **Domaine Display** (serif): hero only — 96px (76.8px on mobile), weight 400, line-height 1.0, -0.96px tracking
- **ABC Favorit** (geometric sans): section heads (56px / -2.8px) and nav links — the only **positive tracking** in the system (+0.35px) on nav, contrasting the compressed display tracking
- **Inter**: body, UI, captions, buttons — clean and neutral
- **Commit Mono**: code blocks — prominent, not hidden

OpenType `"ss01"` / `"ss03"` / `"ss04"` / `"ss11"` stylistic sets are **mandatory** on Domaine and ABC Favorit text — they activate alternate glyphs that define the typographic character.

## Layout

- Spacing base 8px with sub-base values (1 / 2 / 4 / 5 / 6 / 7) for fine adjustment
- Hero: single-column centered; Domaine 96px headline anchors the section
- Feature sections: 2–3 column card grids on desktop, stacking on mobile
- Code preview panels as full-width or contained showcases
- Section vertical padding 80–120px+ — cinematic black space
- Resend uses a minimal breakpoint system — only ~480px and 600px detected; design is desktop-first with clean mobile collapse
- Mobile: hero scales 96 → 76.8px; horizontal nav → hamburger; feature sections stack

The whitespace philosophy is **cinematic black space, tight content, vast surrounds**. Cards float as isolated islands of content in vast dark space; the massive display fonts (96px) create their own vertical rhythm — each headline is a visual event.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, transparent background | Default — most elements on dark void |
| Ring | `rgba(176,199,217,0.145) 0px 0px 0px 1px` | Shadow-as-border for cards, containers |
| Frost Border | `1px solid rgba(214,235,253,0.19)` | Explicit borders — buttons, dividers, tabs |
| Subtle | `rgba(0,0,0,0.1) 0px 1px 3px, rgba(0,0,0,0.1) 0px 1px 2px -1px` | Light card elevation (rare) |
| Focus | `rgb(0,0,0) 0px 0px 0px 8px` | Heavy black focus ring |

The shadow philosophy is **borders as depth, not box-shadow**. On a pure black background, traditional shadows are invisible — you can't cast a shadow into the void. Resend creates depth through frost borders that catch light against darkness, creating a "glass panel floating in space" aesthetic.

## Shapes

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0 | Reserved |
| `{rounded.xs}` | 4px | Ghost buttons, inputs, small interactive |
| `{rounded.sm}` | 6px | Menu panels, navigation items |
| `{rounded.md}` | 8px | Tabs, content blocks |
| `{rounded.lg}` | 12px | Clipboard buttons, medium containers |
| `{rounded.xl}` | 16px | Feature cards, images, main buttons |
| `{rounded.2xl}` | 24px | Large panels, code preview containers |
| `{rounded.pill}` | 9999px | Primary CTAs, tags, badges |
| `{rounded.full}` | 9999px / 50% | Circular elements |

## Components

**`button-primary-pill`** — Transparent pill on dark with frost border. In production: `1px solid rgba(214,235,253,0.19)` border. Hover background `rgba(255,255,255,0.28)` for white-glass feel. Near-white text, 5/12 padding, 9999px radius.

**`button-white-pill`** — White solid pill with black text — high-contrast CTA ("Get started"). Same padding and radius.

**`button-ghost`** — Transparent fill, near-white text, 4px radius, no border. Used for tab items and secondary actions.

**`card`** — Transparent or very subtle dark tint, frost border, 16px radius. Cards float in space, defined entirely by their icy blue edge.

**`card-large`** — 24px radius for large feature panels and code preview containers.

**`code-block`** — Commit Mono on near-black surface inside a 24px radius frost-bordered container. Syntax-highlighted with multi-color accent tokens (orange / blue / green / yellow).

**`badge-orange`** / **`badge-blue`** — Multi-color accent badge pattern: low-alpha background (12–42%) of one accent color, full-opacity text in the matching color, 9999px radius. Each product feature gets its own accent — never mix accents in one component.

**`tab`** — Horizontal tab nav with subtle selection indicator, 8px radius items.

**`text-input`** — Near-white text on dark, 4px radius, focus uses shadow-based ring.

**`top-nav`** — Sticky dark header with frost border bottom (`1px solid rgba(214,235,253,0.19)`). "Resend" wordmark left, ABC Favorit 14px / 500 / +0.35px nav links, white pill CTA right. Mobile hamburger.

**`footer`** — Dark with secondary text in Silver.

## Do's and Don'ts

**Do**
- Use pure black `#000000` as canvas — the void is the canvas
- Apply frost borders (`rgba(214,235,253,0.19)`) for all structural lines — blue-tinted, not neutral gray
- Use Domaine Display only for hero, ABC Favorit only for section heads, Inter for everything else — never cross lanes
- Enable OpenType `"ss01"` / `"ss03"` / `"ss04"` / `"ss11"` on Domaine and ABC Favorit
- Apply pill radius (9999px) to primary CTAs and tags
- Use the multi-color accent scale (orange / green / blue / yellow / red) at 12–42% alpha for backgrounds, full opacity for text
- Keep shadows at ring level (`0px 0px 0px 1px`) — traditional drop shadows don't work on black
- Use +0.35px letter-spacing on ABC Favorit nav links — the only positive tracking

**Don't**
- Don't lighten the canvas above `#000000` — the pure void is non-negotiable
- Don't use neutral gray borders — every border must have the frost blue tint
- Don't apply Domaine Display to body text — it's display-serif only
- Don't mix accent colors in the same component — each feature gets one accent
- Don't use box-shadow for elevation — frost borders carry the depth
- Don't skip OpenType stylistic sets — they define the typographic character
- Don't use negative letter-spacing on nav — ABC Favorit nav uses positive +0.35px
- Don't make pill CTAs opaque on dark — transparent + frost border is the pattern

## Agent Prompt Guide

**Bias toward** — pure black canvas, three-font role-bound hierarchy (Domaine hero / ABC Favorit sections / Inter body), Commit Mono for code, frost-blue 19% alpha borders as the universal structural element, OpenType stylistic sets on display, multi-color accent scale at low alpha for badges, pill primary CTAs (transparent + frost border or white solid), positive +0.35px tracking on nav.

**Reject** — non-black backgrounds, neutral gray borders, Domaine on body text, mixed accents in one component, box-shadow for elevation, missing OpenType sets, negative tracking on nav, opaque pill CTAs without frost borders.
