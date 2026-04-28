---
version: alpha
name: Spotify
description: |
  Spotify's web interface is a dark, immersive music player that wraps listeners in a near-black cocoon (`#121212`, `#181818`, `#1f1f1f`) where album art and content become the primary source of color. The design philosophy is "content-first darkness" — the UI recedes into shadow so that music, podcasts, and playlists can glow. Every surface is a shade of charcoal, creating a theater-like environment where the only true color comes from the iconic Spotify Green (`#1ed760`) and album artwork itself. The typography uses SpotifyMixUI and SpotifyMixUITitle — proprietary fonts from the CircularSp family with an extensive fallback stack including Arabic, Hebrew, Cyrillic, Greek, Devanagari, and CJK fonts, reflecting Spotify's global reach. The system is compact and functional: 700 (bold) for emphasis and navigation, 600 (semibold) for secondary emphasis, 400 (regular) for body. Buttons use uppercase with positive letter-spacing (1.4–2px). Pill-and-circle geometry defines interactivity: primary buttons use 500–9999px radius, circular play buttons use 50%, search inputs are 500px pills. Heavy shadows (`rgba(0,0,0,0.5) 0px 8px 24px`) and unique inset border-shadow combos make the interface feel like a premium audio device — tactile, rounded, built for touch. Mood — content-first darkness, immersive, premium-audio, theater-like.

colors:
  primary: "#1ed760"
  primary-border: "#1db954"
  ink: "#ffffff"
  ink-soft: "#fdfdfd"
  body: "#cbcbcb"
  muted: "#b3b3b3"
  hairline: "#4d4d4d"
  hairline-soft: "#7c7c7c"
  canvas: "#121212"
  surface-dark: "#181818"
  surface-mid: "#1f1f1f"
  surface-card: "#252525"
  surface-card-alt: "#272727"
  surface-light: "#eeeeee"
  on-primary: "#000000"
  on-dark: "#ffffff"
  negative: "#f3727f"
  warning: "#ffa42b"
  announcement: "#539df5"

typography:
  section-title:
    fontFamily: "SpotifyMixUITitle, 'CircularSp-Arab', 'CircularSp-Hebr', 'CircularSp-Cyrl', 'CircularSp-Grek', 'CircularSp-Deva', 'Helvetica Neue', helvetica, arial, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  feature-heading:
    fontFamily: "SpotifyMixUI, 'CircularSp-Arab', 'CircularSp-Hebr', 'Helvetica Neue', helvetica, arial, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  body-bold:
    fontFamily: "SpotifyMixUI, 'CircularSp-Arab', 'CircularSp-Hebr', 'Helvetica Neue', helvetica, arial, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  body:
    fontFamily: "SpotifyMixUI, 'CircularSp-Arab', 'CircularSp-Hebr', 'Helvetica Neue', helvetica, arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button-uppercase:
    fontFamily: "SpotifyMixUI, 'CircularSp-Arab', 'CircularSp-Hebr', 'Helvetica Neue', helvetica, arial, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 1.4px
  button:
    fontFamily: "SpotifyMixUI, 'CircularSp-Arab', 'CircularSp-Hebr', 'Helvetica Neue', helvetica, arial, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.14px
  nav-active:
    fontFamily: "SpotifyMixUI, 'CircularSp-Arab', 'CircularSp-Hebr', 'Helvetica Neue', helvetica, arial, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  nav-inactive:
    fontFamily: "SpotifyMixUI, 'CircularSp-Arab', 'CircularSp-Hebr', 'Helvetica Neue', helvetica, arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption-bold:
    fontFamily: "SpotifyMixUI, 'CircularSp-Arab', 'CircularSp-Hebr', 'Helvetica Neue', helvetica, arial, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "SpotifyMixUI, 'CircularSp-Arab', 'CircularSp-Hebr', 'Helvetica Neue', helvetica, arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  small-bold:
    fontFamily: "SpotifyMixUI, 'CircularSp-Arab', 'CircularSp-Hebr', 'Helvetica Neue', helvetica, arial, sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  small:
    fontFamily: "SpotifyMixUI, 'CircularSp-Arab', 'CircularSp-Hebr', 'Helvetica Neue', helvetica, arial, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  badge:
    fontFamily: "SpotifyMixUI, 'CircularSp-Arab', 'CircularSp-Hebr', 'Helvetica Neue', helvetica, arial, sans-serif"
    fontSize: 10.5px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: 0
  micro:
    fontFamily: "SpotifyMixUI, 'CircularSp-Arab', 'CircularSp-Hebr', 'Helvetica Neue', helvetica, arial, sans-serif"
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 6px
  lg: 8px
  xl: 10px
  "2xl": 20px
  pill: 500px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  xxl: 32px
  section: 48px

components:
  button-pill-dark:
    backgroundColor: "{colors.surface-mid}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-uppercase}"
    rounded: "{rounded.full}"
    padding: 8px 16px
  button-pill-large:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-uppercase}"
    rounded: "{rounded.pill}"
    padding: 0px 43px
  button-pill-light:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.surface-dark}"
    typography: "{typography.button-uppercase}"
    rounded: "{rounded.pill}"
    padding: 12px 24px
  button-outlined:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.button-uppercase}"
    rounded: "{rounded.full}"
    padding: 4px 16px
  button-play:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    padding: 12px
  card:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 16px
  card-elevated:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 16px
  search-input:
    backgroundColor: "{colors.surface-mid}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 12px 48px
  nav-sidebar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.nav-inactive}"
    padding: 16px
---

## Overview

Spotify's web interface is a dark, immersive music player wrapping listeners in a near-black cocoon (`#121212` / `#181818` / `#1f1f1f`) where album art and content become the primary source of color. The design philosophy is **content-first darkness** — the UI recedes into shadow so that music, podcasts, and playlists can glow.

SpotifyMixUI / SpotifyMixUITitle (CircularSp family, customized for Spotify) handle typography with extensive global-script fallbacks (Arabic, Hebrew, Cyrillic, Greek, Devanagari, CJK). The system is compact and functional — designed for scanning playlists, not reading articles.

Mood — content-first darkness, immersive, premium-audio, theater-like.

## Colors

The palette is **near-black with a single brand voltage**. **Spotify Green** (`#1ed760`) is the brand accent — play buttons, active states, primary CTAs only. Never decorative, never on backgrounds. Border variant `#1db954` for green-accented borders.

Surface progression: Near Black `#121212` (deepest background) → Dark Surface `#181818` → Mid Dark `#1f1f1f` → Card surfaces `#252525` / `#272727`. Borders `#4d4d4d` / `#7c7c7c`.

Text: White `#ffffff` primary, Silver `#b3b3b3` secondary/inactive nav, Near White `#cbcbcb` brighter secondary, Light `#fdfdfd` near-pure for max emphasis.

Semantic: Negative Red (`#f3727f`), Warning Orange (`#ffa42b`), Announcement Blue (`#539df5`) — all designed to read on dark surfaces.

## Typography

**Bold/regular binary**: most text is either 700 (bold) or 400 (regular), with 600 used sparingly. Hierarchy through weight contrast rather than size variation.

**Uppercase buttons as system**: button labels use uppercase + wide letter-spacing (1.4–2px) — systematic "label" voice distinct from content text. **Compact sizing** range is 10–24px — narrower than most systems. Spotify is an app, not a magazine.

The extensive fallback stack supports Spotify's 180+ market reach including Arabic, Hebrew, Cyrillic, Greek, Devanagari, and CJK scripts.

## Layout

8px base spacing. Sidebar (fixed) + main content area + full-width now-playing bar. Album/playlist grid-based cards. **Dark compression**: Spotify packs content densely — playlist grids, track lists, navigation are all tightly spaced. The dark background provides visual rest between elements without needing large gaps. Content density over breathing room — every pixel serves the listening experience.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (Base) | `#121212` background | Deepest layer, page background |
| 1 (Surface) | `#181818` or `#1f1f1f` | Cards, sidebar, containers |
| 2 (Elevated) | `rgba(0,0,0,0.3) 0px 8px 8px` | Dropdown menus, hover cards |
| 3 (Dialog) | `rgba(0,0,0,0.5) 0px 8px 24px` | Modals, overlays, menus |
| Inset (Border) | `rgb(18,18,18) 0px 1px 0px, rgb(124,124,124) 0px 0px 0px 1px inset` | Input borders |

Spotify uses notably **heavy shadows for a dark-themed app**. The 0.5 opacity at 24px blur creates a dramatic "floating in darkness" effect for dialogs; 0.3 opacity at 8px blur for subtle card lift. The unique inset border-shadow combination on inputs creates a recessed, tactile quality.

## Shapes

Rich pill-and-circle geometry:

| Token | Value | Use |
|---|---|---|
| `xs` | 2px | Badges, explicit tags |
| `sm` | 4px | Inputs, small elements |
| `md` | 6px | Album art containers, cards |
| `lg` | 8px | Sections, dialogs |
| `xl` | 10px | Panels |
| `2xl` | 20px | Larger overlay elements |
| `pill` | 500px | Primary buttons, search input |
| `full` | 9999px | Navigation pills, circles |

Pill (500–9999px) for buttons; circle (50% via `full` ≈ 9999px on square elements) for play controls; smaller radii for cards.

## Components

**Button pill dark**: `#1f1f1f` fill, white text, 9999px pill, 8×16px padding, uppercase 14px / 700 / 1.4px tracking. **Button pill large**: `#181818` fill, 500px radius, 0×43px padding — primary app navigation.

**Button outlined**: transparent fill, 1px `#7c7c7c` border, white text, 9999px pill, asymmetric 4×16×4×36px padding for icon. **Button play (circular)**: Spotify Green `#1ed760` fill, black icon, full pill (renders as circle on square element), 12px padding — sole green moment.

**Card**: `#181818` or `#1f1f1f` fill, 6–8px radius, no visible borders on most cards, slight background lightening on hover. **Search input**: `#1f1f1f` fill, 500px pill, white text, inset border-shadow combo (`rgb(124,124,124) 0 0 0 1px inset`).

**Nav sidebar**: `#121212` background, active items 14px / 700 white, inactive 14px / 400 `#b3b3b3`. Spotify logo top-left in green.

## Do's and Don'ts

**Do**
- Use near-black backgrounds (`#121212`–`#1f1f1f`) — depth through shade variation
- Apply Spotify Green (`#1ed760`) only for play controls, active states, primary CTAs
- Use pill shape (500–9999px) for all buttons — circular for play controls
- Apply uppercase + wide letter-spacing (1.4–2px) on button labels
- Keep typography compact (10–24px) — this is an app, not a magazine
- Use heavy shadows (0.3–0.5 opacity) for elevated elements on dark backgrounds
- Let album art provide color — UI itself is achromatic

**Don't**
- Don't use Spotify Green decoratively or on backgrounds — functional only
- Don't use light backgrounds for primary surfaces — dark immersion is core
- Don't skip pill/circle geometry on buttons — square buttons break the identity
- Don't use thin/subtle shadows — on dark backgrounds, shadows need weight to be visible
- Don't add additional brand colors — green + achromatic grays is the complete palette
- Don't use relaxed line-heights — Spotify's typography is compact and dense
- Don't expose raw gray borders — use shadow-based or inset borders instead

## Agent Prompt Guide

**Bias toward** — `#121212`–`#1f1f1f` near-black surfaces, Spotify Green `#1ed760` reserved for play/active/primary CTA only, pill (500–9999px) buttons, circular play controls, uppercase 14px / 700 / 1.4–2px tracking on button labels, compact 10–24px range, heavy shadows (0.3–0.5 opacity).

**Reject** — green decorative use, light primary surfaces, square buttons, thin shadows, additional brand colors, relaxed body line-heights, raw gray card borders.
