---
version: alpha
name: PlayStation
description: |
  PlayStation.com carries itself like the marketing wing of a premium consumer-electronics brand that happens to sell entertainment. The page is organized as a vertical channel of alternating surfaces: a near-black masthead and hero, a sequence of paper-white editorial panels in the middle, and a deep cobalt-blue footer that anchors the entire experience. Between those surface modes the site leans hard on photography and 3D product renders — the PS5 console, game cover art, DualSense controllers — letting the hardware do the emotional work while the chrome stays restrained. The signature typographic move is SST Light (weight 300) at 22–54px display sizes — Sony's custom SST family gives display headlines a whispered, elegant quality closer to a luxury watch ad than a game store. That "quiet authority" is the exact opposite of motorsport or news-stand brands. Every primary button has the same hover signature: fill swaps to electric cyan `#1eaedb`, a 2px white border appears, a 2px PlayStation-blue outer ring blooms, and the entire button scales up 1.2× — a miniature "power-on" animation unique among major brands. Pill buttons at full 999px radius; card art in 12–24px rectangles; commerce-orange `#d53b00` reserved exclusively for PlayStation Store CTAs. Mood — quiet authority, premium hardware, gallery-paced, console-luxury.

colors:
  primary: "#0070cc"
  primary-hover: "#1eaedb"
  primary-link: "#0068bd"
  link-hover: "#1883fd"
  link-on-dark: "#53b1ff"
  ink: "#000000"
  ink-soft: "#1f1f1f"
  body: "#6b6b6b"
  muted: "#cccccc"
  hairline: "#dedede"
  hairline-soft: "#f3f3f3"
  canvas: "#ffffff"
  surface-mist: "#f5f7fa"
  surface-shadow: "#121314"
  surface-dark: "#000000"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  commerce: "#d53b00"
  commerce-active: "#aa2f00"
  warning: "#c81b3a"

typography:
  hero-display-xl:
    fontFamily: "SST, Arial, Helvetica, sans-serif"
    fontSize: 54px
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: -0.1px
  hero-display-lg:
    fontFamily: "SST, Arial, Helvetica, sans-serif"
    fontSize: 44px
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: 0.1px
  large-display:
    fontFamily: "SST, Arial, Helvetica, sans-serif"
    fontSize: 35px
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: 0
  mid-display:
    fontFamily: "SST, Arial, Helvetica, sans-serif"
    fontSize: 28px
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: 0.1px
  compact-display:
    fontFamily: "SST, Arial, Helvetica, sans-serif"
    fontSize: 22px
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: 0.1px
  ui-heading-small:
    fontFamily: "SST, Arial, Helvetica, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 0
  button:
    fontFamily: "SST, Arial, Helvetica, sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0.4px
  button-emphasized:
    fontFamily: "SST, Arial, Helvetica, sans-serif"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0.45px
  body-relaxed:
    fontFamily: "SST, Arial, Helvetica, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.1px
  compact-button:
    fontFamily: "SST, Arial, Helvetica, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0.324px
  utility-caption:
    fontFamily: "SST, Arial, Helvetica, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  caption-body:
    fontFamily: "SST, Arial, Helvetica, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  ps-tab:
    fontFamily: "'Playstation SST', SST, helvetica, arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: 0.14px
  ps-button:
    fontFamily: "'Playstation SST', SST, helvetica, arial, sans-serif"
    fontSize: 14.4px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0.144px
  micro-caption:
    fontFamily: "SST, Arial, Helvetica, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  none: 0px
  xs: 2px
  sm: 3px
  md: 6px
  lg: 12px
  lg-alt: 13px
  xl: 19px
  "2xl": 20px
  "3xl": 24px
  pill-sm: 36px
  pill-lg: 48px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 64px
  section-lg: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 12px 24px
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 16px 20px
  button-commerce:
    backgroundColor: "{colors.commerce}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-emphasized}"
    rounded: "{rounded.full}"
    padding: 12px 28px
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.ink-soft}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 0px 10px
  button-mini:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.compact-button}"
    rounded: "{rounded.full}"
    padding: 8px 16px
  hero-card:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.hero-display-xl}"
    rounded: "{rounded.3xl}"
    padding: 48px
  game-cover-tile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-soft}"
    typography: "{typography.utility-caption}"
    rounded: "{rounded.lg}"
    padding: 16px
  panel-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-soft}"
    typography: "{typography.body-relaxed}"
    rounded: "{rounded.3xl}"
    padding: 48px
  store-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.utility-caption}"
    rounded: "{rounded.full}"
    padding: 14px 18px
  input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-soft}"
    typography: "{typography.body-relaxed}"
    rounded: "{rounded.sm}"
    padding: 12px 16px
  nav-top:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.utility-caption}"
    height: 64px
  footer:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption-body}"
    padding: 64px
---

## Overview

PlayStation.com is a vertical channel of alternating surfaces: near-black masthead and hero, paper-white editorial panels in the middle, deep cobalt-blue footer anchoring the experience. Between surface modes, photography and 3D product renders carry the emotional weight while the chrome stays restrained.

The signature typographic move is **SST Light (weight 300) at 22–54px display sizes** — Sony's proprietary typeface gives headlines a whispered, elegant quality closer to a luxury watch ad than a game store. The signature interaction is the universal hover: cyan fill + 2px white border + 2px blue outer ring + scale(1.2) — a miniature "power-on" animation repeated hundreds of times.

Mood — quiet authority, premium hardware, gallery-paced, console-luxury.

## Colors

**PlayStation Blue** (`#0070cc`) is the brand anchor — primary CTAs, footer, official markers. **PlayStation Cyan** (`#1eaedb`) is the interaction color, applied ONLY to hover/focus/active states; never as a default background or text. **Console Black** (`#000000`) frames hardware like a museum frames a sculpture.

**Commerce Orange** (`#d53b00`) is reserved for PlayStation Store / Buy / Subscribe CTAs and price callouts — the only warm color, never outside commerce. Active state darkens to `#aa2f00`. **Warning Red** (`#c81b3a`) for form errors only.

Text scale: `#000000` (display ink) → `#1f1f1f` (deep charcoal — body headlines and link rest) → `#6b6b6b` (body gray) → `#cccccc` (mute / disabled). Light surfaces: `#ffffff` paper white → `#f5f7fa` ice mist → `#f3f3f3` divider tint. Dark gradient anchor `#121314` → `#000000`.

## Typography

**Weight 300 at large sizes is the voice.** PlayStation is the only major console brand that uses a light-weight display for hero headlines. Resist the urge to "upgrade" display type to 500 or 700 — the quietness is the personality.

Below 18px the system shifts to weights 500–700 for legibility. The weight gradient runs **300 (display) → 400 (body) → 500 (captions) → 700 (buttons)**. Letter-spacing is barely-there (0.1–0.45px). The 54px hero uses -0.1px tightening just enough to read as designed without becoming a typographic statement.

**No all-caps. No serif.** Sentence/title case throughout — quiet-authority brand, not hazard-tape.

## Layout

8px base spacing with section padding 48–96px between major panels. Card padding 20–32px, feature hero cards expand to 48px. The container scales from 1280px standard up to 1920px for 4K-TV browsing — PlayStation is one of the few sites tuned for **big-screen contexts** because PS5 owners browse on TVs.

Whitespace philosophy: gallery pace where each product gets its own room. White editorial panels often hold only one headline + one image + one CTA at hero-scale padding.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | No shadow | Default content on `#ffffff` |
| 1 | `rgba(0,0,0,0.06) 0 5px 9px 0` | Feather-light editorial panel lift |
| 2 | `rgba(0,0,0,0.08) 0 5px 9px 0` | Standard grid tile elevation |
| 3 | `rgba(0,0,0,0.16) 0 5px 9px 0` | Emphasized card (hover/active) |
| 4 | `rgba(0,0,0,0.8) 0 5px 9px 0` | Hero overlay shadow over photography |
| 5 | `0 0 0 2px #0070cc` (focus ring) | Primary button focus state |

Shadow opacity lands on **0.06 / 0.08 / 0.16 / 0.8** — no middle ground. Most of the page sits almost flat, but when a hero card needs to float over photography, it genuinely floats. Elevation is whispered or shouted, never muttered.

## Shapes

Eleven discrete radius values — one of the richest radius systems in the catalog:

| Token | Value | Use |
|---|---|---|
| `xs` | 2px | Cookie banner |
| `sm` | 3px | Form inputs, tab panels |
| `md` | 6px | Compact buttons, inline images |
| `lg` / `lg-alt` | 12px / 13px | Game cover images |
| `xl` | 19px | Feature cards |
| `2xl` | 20px | Inline tag spans |
| `3xl` | 24px | Hero cards, primary feature frames |
| `pill-sm` | 36px | Full-pill nav and secondary button variants |
| `pill-lg` | 48px | Large feature buttons |
| `full` | 9999px | Pill primary buttons, circular icon buttons |

PlayStation deliberately uses different radii for different hierarchies: 3px utility, 12px media, 24px features, 9999px CTAs.

## Components

**Button primary**: PlayStation Blue `#0070cc` fill, white text, full pill (9999px), 12×24px padding, SST 18px / 500 / 0.4px tracking. Hover signature: bg → `#1eaedb`, 2px white border, 2px blue outer ring shadow, scale(1.2). Active: opacity 0.6.

**Button commerce (orange pill)**: `#d53b00` fill, white text, SST 18px / 700 / 0.45px tracking, full pill. Active darkens to `#aa2f00`. Hover follows the universal cyan-invert rule (NOT orange-specific).

**Hero card**: photography backed, 24px (or 19px) radius, 32–48px interior padding, dramatic `rgba(0,0,0,0.8) 0 5px 9px 0` drop when overlapping hero photography. **Game cover tile**: cover art at 12px radius with feather `rgba(0,0,0,0.08) 0 5px 9px 0` shadow. **Panel light**: white fill or light section gradient `#ffffff → #f5f7fa`, 24px radius.

**Store pill**: white fill, black text, full pill, used as platform tag ("PS5", "PS4", "PSVR2") next to game covers. **Input**: white fill, 1px `#cccccc` border, 3px radius — the one place PlayStation gets genuinely compact. Focus uses 2px `#0070cc` ring.

**Top nav**: black `#000000` full-bleed strip, stays pinned without inverting on light panels.

## Do's and Don'ts

**Do**
- Use PlayStation Blue (`#0070cc`) as the primary CTA fill and footer anchor
- Use SST weight 300 for every display headline 22px and above
- Apply the full hover signature: cyan fill + 2px white border + 2px blue outer ring + scale(1.2)
- Use full-pill radius (9999px) on primary and commerce buttons
- Reserve PlayStation Cyan (`#1eaedb`) exclusively for hover/focus/active — never resting
- Use Commerce Orange (`#d53b00`) only on PlayStation Store / purchase CTAs
- Alternate dark hero panels with white content panels and anchor with deep blue footer
- Use dramatic `rgba(0,0,0,0.8)` hero drop shadows when a card overlaps product photography
- Keep the top nav black on every scroll position

**Don't**
- Don't bold display headlines — weight 300 at 22–54px is the PlayStation voice
- Don't use ALL-CAPS labels or kickers — quiet authority, not hazard tape
- Don't use gradient buttons, text, or backgrounds outside the two declared section gradients
- Don't introduce warm colors outside Commerce Orange
- Don't use square corners on buttons or media — eleven radii available, never `0`
- Don't skip the scale(1.2) hover move on primary buttons
- Don't use serif type — the system is 100% SST sans
- Don't let cyan `#1eaedb` appear as a text or background color at rest

## Agent Prompt Guide

**Bias toward** — three-surface channel (black hero / white content / blue footer), SST 300 at 22–54px display, full-pill primary buttons with cyan-fill + white-border + blue-ring + scale(1.2) hover, Commerce Orange `#d53b00` only on PS Store CTAs, eleven-radius hierarchy (2/3/6/12/19/20/24/36/48/9999), shadow opacity locked at 0.06/0.08/0.16/0.8.

**Reject** — bold display headlines, ALL-CAPS labels, gradient surfaces, warm colors outside Commerce Orange, square corners, missing scale(1.2) on hover, serif type, cyan as resting background, drop shadows at 0.1/0.2/0.3/0.5, top nav inversion on light panels.
