---
version: alpha
name: Tesla
description: |
  Tesla's website is an exercise in radical subtraction — a digital showroom where the product is everything and the interface is almost nothing. The page opens with a full-viewport hero that fills the entire screen with cinematic car photography: three vehicles arranged on polished concrete against a hazy cityscape sky, with a single model name floating above in translucent white type. There are no decorative borders, no gradients, no patterns, no shadows. The UI exists only to provide just enough navigational structure to get out of the way. Every pixel that isn't product imagery is white space, and that restraint is the design system's most powerful statement. Color philosophy is almost ascetic: a single Electric Blue (`#3e6ae1`) for primary CTAs, three shades of dark gray for text hierarchy, and white for everything else. The entire emotional weight is carried by photography. Universal Sans (Display + Text) unifies website, mobile app, and in-car software into a single typographic voice. There are no text shadows, no text gradients, no decorative type treatments. Border-radius is 4px throughout — barely perceptible rounding that reads as precision over playfulness. 0.33s cubic-bezier transitions are the universal timing. Every screen has at most two action buttons. Mood — ascetic, gallery-luxury, photography-first, engineered-restraint.

colors:
  primary: "#3e6ae1"
  ink: "#171a20"
  body: "#393c41"
  muted: "#5c5e62"
  muted-soft: "#8e8e8e"
  hairline: "#d0d1d2"
  hairline-soft: "#eeeeee"
  canvas: "#ffffff"
  surface-soft: "#f4f4f4"
  surface-dark: "#171a20"
  on-primary: "#ffffff"
  on-dark: "#ffffff"

typography:
  hero-title:
    fontFamily: "'Universal Sans Display', -apple-system, Arial, sans-serif"
    fontSize: 40px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
  product-name:
    fontFamily: "'Universal Sans Text', -apple-system, Arial, sans-serif"
    fontSize: 17px
    fontWeight: 500
    lineHeight: 1.18
    letterSpacing: 0
  promo-text:
    fontFamily: "'Universal Sans Text', -apple-system, Arial, sans-serif"
    fontSize: 22px
    fontWeight: 400
    lineHeight: 0.91
    letterSpacing: 0
  category-label:
    fontFamily: "'Universal Sans Text', -apple-system, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
  nav:
    fontFamily: "'Universal Sans Text', -apple-system, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
  body:
    fontFamily: "'Universal Sans Text', -apple-system, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  button:
    fontFamily: "'Universal Sans Text', -apple-system, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
  sub-link:
    fontFamily: "'Universal Sans Text', -apple-system, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0

rounded:
  none: 0px
  sm: 4px
  md: 12px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 21px
  xl: 32px
  xxl: 48px
  section: 64px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 4px 16px
    height: 40px
    width: 200px
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 4px 16px
    height: 40px
    width: 200px
  button-nav:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.nav}"
    rounded: "{rounded.sm}"
    padding: 4px 16px
    height: 32px
  text-link:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.sub-link}"
  vehicle-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.product-name}"
    rounded: "{rounded.none}"
    padding: 16px
  category-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.category-label}"
    rounded: "{rounded.md}"
    padding: 16px
  nav-top:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav}"
    height: 64px
  chat-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 12px 16px
---

## Overview

Tesla's website is an exercise in radical subtraction — a digital showroom where the product is everything and the interface is almost nothing. Full-viewport hero sections fill the screen with cinematic car photography. There are no decorative borders, gradients, patterns, or shadows — the UI exists only to provide just enough navigational structure to get out of the way.

Universal Sans (recently replacing Gotham) splits into Display for hero scale and Text for everything else, unifying website, mobile app, and in-car software into a single typographic voice. The geometric precision with humanist terminals feels engineered rather than designed.

Mood — ascetic, gallery-luxury, photography-first, engineered-restraint.

## Colors

The palette is almost ascetic: **a single Electric Blue** (`#3e6ae1`) for primary CTAs and three shades of dark gray for text hierarchy. White (`#ffffff`) is everything else. The blue is mid-saturation rgb(62, 106, 225) — confident without being aggressive — and it stands alone as the only chromatic color in the entire interface.

Text hierarchy: **Carbon Dark** (`#171a20`) primary headings and nav (warm near-black with blue undertone) → **Graphite** (`#393c41`) body → **Pewter** (`#5c5e62`) tertiary sub-links → **Silver Fog** (`#8e8e8e`) placeholder. Borders: `#d0d1d2` (pale silver) and `#eeeeee` (cloud gray).

**Light Ash** (`#f4f4f4`) is the barely-perceptible alternate surface for section differentiation. Tesla deliberately avoids semantic color coding (no green/red/yellow) — the blue CTA serves as the sole interactive signal.

## Typography

**Universal Sans Display** for hero titles (40px / 500); **Universal Sans Text** for navigation, body, buttons, and all UI. The two-variant system creates subtle optical correction without visible stylistic difference.

**Normal letter-spacing everywhere** — Tesla uses default letter-spacing at every level. Most modern tech brands use negative tracking for headlines; Tesla's philosophy is that the typeface should speak for itself without manipulation. **Weight restraint**: only 500 (medium) for headings/UI and 400 (regular) for body. No bold (700), no light (300). **Unified sizing**: most UI text clusters at 14px with hero (40px) and promo text (22px) breaking away — extreme uniformity creates engineered consistency.

**No text transforms** — no uppercase in navigation or CTAs. The lowercase approach reinforces Tesla's understated confidence.

## Layout

8px base spacing with full-viewport sections (100vh) for major content blocks. Common values: 8px, 16px, 21px. Max width ~1383px. Hero is full-bleed edge-to-edge. Navigation panel uses 3-column grid for vehicle cards with right-aligned text sidebar (~70/30 split).

Whitespace is **a luxury signal**. Generous vertical spacing means you see only one "message" at a time — one car, one model name, one CTA pair. Each scroll is a deliberate transition. White space is not empty — it's the frame that elevates each vehicle to art-piece status.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (Flat) | No shadow, no border | Default for all elements at rest |
| 1 (Frost) | `rgba(255,255,255,0.75)` backdrop | Navigation bar on scroll — frosted glass |
| 2 (Overlay) | `rgba(128,128,128,0.65)` | Modal overlays, region/cookie popups |
| 3 (Subtle) | `rgba(0,0,0,0.05)` | Minimal shadow hints on rare hover states |

Tesla's elevation philosophy is essentially "none." The site avoids box-shadows entirely. Depth is communicated through:
1. **Z-index layering**: sticky nav above hero through positioning
2. **Opacity-based transparency**: frosted glass nav and overlay modals
3. **Photography-as-depth**: full-bleed images create visual depth through perspective, lighting, and composition

## Shapes

| Value | Use |
|---|---|
| 0px | Most elements — sharp edges are the default |
| 4px | Buttons (primary, secondary, nav items) — barely perceptible rounding |
| 12px | Category cards — noticeable but restrained rounding on larger surfaces |
| 9999px | Carousel dot indicators — perfect circles |

The 4px is the brand marker — precision over playfulness. Pill or large radii contradict the dialect.

## Components

**Button primary**: Electric Blue `#3e6ae1` fill, white text, 4px radius, 4px outer padding with content centering, 200px width × 40px height, Universal Sans Text 14px / 500. Transition: `border-color 0.33s, background-color 0.33s, color 0.33s, box-shadow 0.25s`. Used for "Order Now".

**Button secondary**: white fill, Graphite `#393c41` text, identical dimensions. Used for "View Inventory" alongside primary.

**Button nav**: transparent fill, Carbon Dark `#171a20` text, 4×16px padding, 32px min-height, used for "Vehicles", "Energy", "Charging", "Discover", "Shop".

**Vehicle card**: transparent fill (inherits panel white), no border, no shadow, transparent PNG vehicle image + centered model name + two text links beneath. **Category card**: full-bleed landscape photography, ~12px radius, overflow hidden, white text label in top-left corner ("Sport Sedan"). No overlay gradient — text relies on image darkness for contrast.

**Nav top**: white sticky, transitions from transparent over dark hero to opaque white on scroll. **Chat bar**: persistent bottom bar with chat input ("Ask a Question"), send icon, "Schedule a Drive Today" CTA.

## Do's and Don'ts

**Do**
- Let photography dominate every screen — the product IS the design
- Use Electric Blue (`#3e6ae1`) exclusively for primary CTAs — never decorative
- Maintain viewport-height sections for major content blocks — one message per screen
- Keep typography at weight 400–500 only — no bold, no light, no extremes
- Use 4px border-radius for all interactive elements — precision over playfulness
- Trust whitespace as a luxury signal — never fill available space just because it's empty
- Keep all transitions at 0.33s — consistency in motion as important as consistency in color
- Use transparent PNG vehicle imagery on white backgrounds for product showcases
- Center CTAs horizontally below model names — vertical rhythm is model → subtitle → buttons
- Maintain Display/Text font split — Display for hero only, Text for everything else

**Don't**
- Add shadows to any element — elevation contradicts the flat gallery aesthetic
- Use more than one chromatic color besides the blue CTA — palette is monochrome-plus-one
- Apply gradients, patterns, or decorative backgrounds to surfaces
- Use text larger than 40px on the web — typography deliberately restrained even at hero scale
- Add borders to cards — separation is achieved through spacing, not lines
- Use uppercase text transforms — Tesla's confidence is expressed through lowercase calm
- Introduce rounded-pill buttons or large border-radii — the 4px radius is precise
- Override Universal Sans family — cross-platform consistency is a core brand value
- Add hover animations with scale/translate — interactions are color-only
- Clutter the viewport with multiple CTAs — every screen at most two action buttons

## Agent Prompt Guide

**Bias toward** — full-viewport (100vh) hero photography, Electric Blue `#3e6ae1` primary CTA only, monochrome-plus-one palette, Universal Sans Display 40px / 500 hero + Text 14px / 400–500 UI, 4px radius rectangles, no shadows, normal letter-spacing everywhere, lowercase navigation, 0.33s transitions, transparent PNG vehicle renders, gallery-paced whitespace.

**Reject** — multiple chromatic colors, weight 700 or 300, gradients/patterns on surfaces, large border-radii or pill buttons, uppercase nav, font substitutions for Universal Sans, scale/translate hover animations, more than two CTAs per screen, text >40px, card borders or shadows.
