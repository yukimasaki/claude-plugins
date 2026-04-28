---
version: alpha
name: Starbucks
description: |
  Starbucks' web presence is a warm, confident retail flagship wearing the green of their storefront apron across every surface. The canvas alternates between a neutral-warm cream (`#f2f0eb`) and a ceramic off-white (`#edebe9`) — colors that reference actual store materials (paper napkins, café walls, wood finishes) — while a four-tier green system carries the brand: **Starbucks Green** (#006241) for h1 headings, **Green Accent** (#00754a) for primary CTAs and the floating Frap order button, **House Green** (#1e3932) for feature bands and the footer, and a soft **Green Uplift** (#2b5148) for decorative moments. **Gold** (#cba258) appears only around Rewards-status ceremony — never as a general accent. Type runs the proprietary **SoDoSans** with tight `-0.16px` letter-spacing across nearly every surface; the Rewards page swaps in a serif (Lander Tall) for editorial headlines and Careers swaps in a script (Kalam) for "cup name" touches. Buttons are universal `50px` full-pills with a signature `scale(0.95)` active press. The product's signature elevation move is the **Frap floating circular CTA** — a 56px Green Accent circle pinned bottom-right with layered shadows (`0 0 6px rgba(0,0,0,0.24)` base + `0 8px 12px rgba(0,0,0,0.14)` ambient). Mood — warm, café, confident, retail-flagship.

colors:
  primary: "#00754a"
  primary-active: "#005f3c"
  starbucks-green: "#006241"
  house-green: "#1e3932"
  green-uplift: "#2b5148"
  green-light: "#d4e9e2"
  consent-green: "#008248"
  ink: "#212121"
  body: "#212121"
  body-soft: "#6b6b6b"
  body-on-dark: "#ffffff"
  body-on-dark-soft: "#b3b3b3"
  rewards-green-text: "#33433d"
  canvas: "#f2f0eb"
  canvas-ceramic: "#edebe9"
  surface-card: "#ffffff"
  surface-cool: "#f9f9f9"
  surface-black: "#000000"
  surface-gold-wash: "#faf6ee"
  hairline: "#e7e7e7"
  hairline-input: "#d6dbde"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  gold: "#cba258"
  gold-light: "#dfc49d"
  error: "#c82014"
  warning: "#fbbc05"
  success: "#00754a"
  link: "#00754a"

typography:
  display-xl:
    fontFamily: "SoDoSans, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 80px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.16px
  display-lg:
    fontFamily: "SoDoSans, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 58px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.16px
  display-md:
    fontFamily: "SoDoSans, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 45px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.16px
  h1:
    fontFamily: "SoDoSans, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: -0.16px
  h2:
    fontFamily: "SoDoSans, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: -0.16px
  body-lg:
    fontFamily: "SoDoSans, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 19px
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: -0.16px
  body-md:
    fontFamily: "SoDoSans, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: -0.16px
  body-sm:
    fontFamily: "SoDoSans, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: -0.16px
  micro:
    fontFamily: "SoDoSans, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: -0.16px
  button:
    fontFamily: "SoDoSans, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.16px
  button-sm:
    fontFamily: "SoDoSans, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.16px
  rewards-serif:
    fontFamily: "'Lander Tall', 'Iowan Old Style', Georgia, serif"
    fontSize: 45px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0
  cup-script:
    fontFamily: "Kalam, 'Comic Sans MS', cursive"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 24px
  pill: 50px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 40px
  xxl: 48px
  section: 64px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 7px 16px
  button-primary-outline:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 7px 16px
  button-black:
    backgroundColor: "{colors.surface-black}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.pill}"
    padding: 7px 16px
  button-dark-outline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.pill}"
    padding: 7px 16px
  button-on-dark-filled:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 7px 16px
  button-on-dark-outline:
    backgroundColor: "{colors.house-green}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 7px 16px
  button-customize:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 40px
  button-add-to-order:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 32px
  button-frap:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    size: 56px
  rewards-cost-pill:
    backgroundColor: "{colors.house-green}"
    textColor: "{colors.gold}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 24px
  rewards-status-card:
    backgroundColor: "{colors.house-green}"
    textColor: "{colors.on-dark}"
    typography: "{typography.h1}"
    rounded: "{rounded.md}"
    padding: 32px
  partnership-card:
    backgroundColor: "{colors.surface-gold-wash}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 32px
  feature-band-dark:
    backgroundColor: "{colors.house-green}"
    textColor: "{colors.on-dark}"
    typography: "{typography.h1}"
    padding: 64px
  text-input:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 12px
  add-in-select:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 12px 16px
  top-nav:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.button-sm}"
    height: 99px
  account-dropdown:
    backgroundColor: "{colors.surface-cool}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 24px
  feedback-tab:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.md}"
    padding: 8px 16px
  footer:
    backgroundColor: "{colors.house-green}"
    textColor: "{colors.body-on-dark-soft}"
    typography: "{typography.body-sm}"
    padding: 64px
---

## Overview

Starbucks reads as a warm retail flagship: cream café canvas, four greens calibrated to specific surface roles, gold reserved for Rewards ceremony, and the proprietary SoDoSans typeface running tight `-0.16px` tracking on every surface. Pages alternate cream hero → white content → dark-green feature band → cream utility zone → dark-green footer — an espresso-dark bookend around the bright body.

The product's signature elevation element is the **Frap** — a 56px Green Accent circular floating CTA pinned bottom-right on every shopping surface, layered with a base halo (`0 0 6px rgba(0,0,0,0.24)`) and a directional ambient drop (`0 8px 12px rgba(0,0,0,0.14)`). On press the ambient drop fades to zero and the button compresses via `scale(0.95)`, the system-wide active feedback applied to every pill button.

Mood — warm, café, confident, retail-flagship.

## Colors

The four-green system is the brand's most disciplined token. Each green maps to a single surface role:

- **Starbucks Green** (`{colors.starbucks-green}` — #006241): h1 headings and primary section headers — the historic brand color used wherever a single dominant color is needed
- **Green Accent** (`{colors.primary}` — #00754a): the brighter, more luminous green used on every primary filled CTA and the Frap circle
- **House Green** (`{colors.house-green}` — #1e3932): the deep near-black brand green for feature bands, footer, Rewards-status dark surfaces
- **Green Uplift** (`{colors.green-uplift}` — #2b5148): a secondary mid-dark green for decorative accents, used sparingly
- **Green Light** (`{colors.green-light}` — #d4e9e2): pale mint wash for valid-form-field tints

**Gold** (`{colors.gold}` — #cba258) is reserved for Rewards-status ceremony — Gold-tier callouts, partnership badges (SkyMiles, Bonvoy), and premium accents. Never a general-purpose color. **Gold Lightest** (`{colors.surface-gold-wash}` — #faf6ee) ties gold back into the warm-neutral system on partnership bands.

The canvas is **Neutral Warm** (`{colors.canvas}` — #f2f0eb) or **Ceramic** (`{colors.canvas-ceramic}` — #edebe9), referencing café paper-napkin and wall-paint tones. White (`{colors.surface-card}`) is for cards. Black (`{colors.surface-black}`) appears only on the top-of-page "Join now" strip.

Production text uses `rgba(0,0,0,0.87)` on light surfaces and `rgba(255,255,255,0.70)` for secondary text on dark; the frontmatter encodes opaque approximations (`{colors.body}` and `{colors.body-on-dark-soft}`) — real implementations should use the alpha forms for warm-canvas temperature matching.

## Typography

The system is rigorously single-typeface across nearly every surface: **SoDoSans** (Starbucks' proprietary corporate typeface, licensed from House Industries). Two contextual swaps:

- **Lander Tall serif** (Rewards page): editorial headline moments — warm coffeehouse-chalkboard feel
- **Kalam script** (Careers page): "cup name" personal touches — references the hand-written names on Starbucks cups

Tight negative tracking (`-0.16px` ≈ `-0.01em`) is universal — the entire product reads slightly compressed, giving SoDoSans confident presence without crowding.

**Weight shifts carry hierarchy, not size shifts.** H1 and H2 share 24px / 36px line-height; only weight (600 vs 400) and color (Starbucks Green vs Text Black) separate them. Display sizes (45 / 58 / 80px) keep the same -0.16px tracking.

Inter / Manrope / Nunito Sans are reasonable open-source substitutes for SoDoSans; for Lander Tall use Iowan Old Style (already in the fallback stack), Lora, or Source Serif Pro. Kalam is on Google Fonts directly.

## Layout

- Rem-based scale anchored to `1rem = 10px`: `--space-3` (1.6rem / 16px) is the system's most frequent unit
- Outer gutter scales with viewport: 16px (mobile) → 24px (tablet) → 40px (desktop)
- Column-width tokens: 343px (small) / 500px (medium) / 720px (large) / 1440px (xlarge)
- Asymmetric hero split 40% (image) / 60% (content) on desktop, stacks on mobile
- Section vertical padding 40–64px — generous café-quiet rhythm
- Gift-card grid responsive 5-up → 4-up → 3-up → 2-up → 1-up across breakpoints

Whitespace carries the feeling of "plenty of space in the café." Content blocks separate by whitespace, not dividers; the cream canvas is itself a visual breath between white cards and dark-green feature bands.

## Elevation & Depth

The shadow philosophy is **whisper-soft, layered over solid** — never a single heavy drop shadow. 2–3 low-alpha shadows with different offsets simulate real-world ambient + direct lighting.

| Level | Treatment | Use |
|---|---|---|
| Card | `0 0 0.5px rgba(0,0,0,0.14), 0 1px 1px rgba(0,0,0,0.24)` | Default content cards — whisper dual-shadow |
| Global Nav | `0 1px 3px rgba(0,0,0,0.1), 0 2px 2px rgba(0,0,0,0.06), 0 0 2px rgba(0,0,0,0.07)` | Triple-layer soft lift on the fixed top bar |
| Frap Base | `0 0 6px rgba(0,0,0,0.24)` | Base halo around the floating circular CTA |
| Frap Ambient | `0 8px 12px rgba(0,0,0,0.14)` | Stacked directional ambient — floats Frap forward |
| SVC | `drop-shadow(0 4px 1px rgba(0,0,0,0.11)) drop-shadow(0 0 2px rgba(0,0,0,0.24))` | Stacked SVG drop shadows for Starbucks-Card visuals |

No gradient system — surfaces are color-block. Color-block banding (cream / white / dark-green) carries perceived depth.

## Shapes

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0 | Reserved (rare) |
| `{rounded.xs}` | 4px | Add-in selects, inputs |
| `{rounded.sm}` | 8px | Tight inline elements |
| `{rounded.md}` | 12px | Cards, modals, menu-item tiles, feedback tab top corners |
| `{rounded.lg}` | 24px | Larger feature containers |
| `{rounded.pill}` | 50px | Universal button radius — every button is a full pill |
| `{rounded.full}` | 9999px / 50% | Frap circular button, avatars |

## Components

**`button-primary`** — Green Accent fill (`{colors.primary}`), white text, 50px pill, 7/16 padding. Active: `transform: scale(0.95)` with `0.2s ease` transition. Universal across every shopping surface.

**`button-primary-outline`** — White fill with green border, Green Accent text, 50px pill.

**`button-black`** — Black fill, white text, 50px pill. Used on the "Join now" top strip and high-contrast top-nav join CTA.

**`button-dark-outline`** — Transparent on cream, dark-text outlined "Sign in" 50px pill.

**`button-on-dark-filled`** / **`button-on-dark-outline`** — Used on House Green feature bands. Filled = white background with green-accent text; outline = transparent on dark with white border.

**`button-customize`** — Generously larger pill (14/40 padding) with green text on white and a gold sparkle icon inset. Used to enter the drink-customization flow.

**`button-add-to-order`** — Larger green-filled pill (14/32 padding) for the PDP add-to-cart action.

**`button-frap`** — The floating circular order CTA. 56px Green Accent circle with white shopping-bag icon, fixed bottom-right with `-0.8rem` touch offset for extra tap comfort. The product's signature elevation element.

**`rewards-cost-pill`** — Gold-on-dark "200★ item" badge: dark-green fill, gold border + gold text, 50px pill, 4/12 padding. Used only on Rewards-redeemable products.

**`card`** — White fill, 12px radius, whisper dual-shadow. Default for feature cards, menu-item tiles, content panels.

**`rewards-status-card`** — Three-column dark-green panels (Bronze / Silver / Gold tiers) on the Rewards page: `{colors.house-green}` fill, 12px radius, colored gradient top stripe, white headline + benefits list with `rgba(255,255,255,0.70)` secondary captions.

**`partnership-card`** — Gold-cream wash (`{colors.surface-gold-wash}`) card carrying partner logos (SkyMiles, Bonvoy) — ties gold ceremony into the warm-neutral system.

**`feature-band-dark`** — Full-width House Green band with white type, 40/60 split (text / imagery on desktop), stacking vertically on mobile. CTAs use the on-dark white-filled + outlined-on-dark pairing.

**`text-input`** — White fill, 1px `{colors.hairline-input}` (#d6dbde) border, 4px radius. Floating label animates above the border on focus / fill (cubic-bezier `(0.32, 2.32, 0.61, 0.27)` springy curve).

**`add-in-select`** — PDP add-in / milk selector. Outlined rectangle with floating uppercase label above, value centered, chevron-down right side. Focus border shifts to Green Accent.

**`top-nav`** — Fixed-position bar with progressive heights: 64 (xs) → 72 (mobile) → 83 (tablet) → 99 (desktop) px. Triple-layer soft lift shadow. Logo left, primary links inline (Menu / Rewards / Gift Cards), right cluster: "Find a store" + outlined "Sign in" + black-filled "Join now."

**`account-dropdown`** — Cool-gray fill (`{colors.surface-cool}` — #f9f9f9), 24px / 400 menu items.

**`feedback-tab`** — Full-width Green Accent feedback strip, top-rounded only (`12px 12px 0 0`), 14/400 white text, fixed bottom-right-inside.

**`footer`** — House Green surface, white text + `{colors.body-on-dark-soft}` for caption text.

## Do's and Don'ts

**Do**
- Use `{colors.canvas}` (#f2f0eb) or `{colors.canvas-ceramic}` (#edebe9) as page canvas — never pure white
- Map the green tiers to their intended surface role — Starbucks Green for headings, Green Accent for CTAs, House Green for deep bands, Uplift for decorative
- Keep tracking tight at `-0.16px` on SoDoSans across the entire system
- Use 50px full-pill radius on every button without exception
- Apply `transform: scale(0.95)` as the universal button active state
- Reserve Gold for Rewards-status ceremony moments only
- Switch to Lander Tall serif only for Rewards editorial headlines; Kalam script only for Careers cup-name moments
- Layer 2–3 low-alpha shadows instead of one heavier drop shadow
- Use the Frap circular CTA as persistent floating order entry on every shopping surface
- Let the cream canvas breathe between content cards — use whitespace, not dividers

**Don't**
- Don't use pure white as canvas — the warm cream is load-bearing
- Don't pick "one brand green" — the four-green system is intentional
- Don't use Gold as a general-purpose accent — it's a Rewards signal only
- Don't square corners on buttons — the 50px pill is universal
- Don't introduce gradient fills — the system is color-block throughout
- Don't separate h1 / h2 by size — hierarchy comes from weight + color (600 + Starbucks Green vs 400 + Text Black)
- Don't use pure black for body text — `rgba(0,0,0,0.87)` matches the warm canvas
- Don't skip the `scale(0.95)` active feedback — it's a signature micro-interaction
- Don't introduce serifs / scripts into the main shopping flow — they belong to Rewards / Careers contexts only

## Agent Prompt Guide

**Bias toward** — warm cream canvas (`{colors.canvas}`), four-tier green system (Starbucks / Accent / House / Uplift), SoDoSans with tight `-0.16px` tracking, 50px full-pill buttons with `scale(0.95)` active state, Frap circular floating CTA bottom-right, layered low-alpha shadows, gold-only-for-Rewards discipline, hierarchy via weight + color rather than size.

**Reject** — pure white canvas, single brand-green flatten, gradient fills, square-cornered buttons, gold as general accent, mixing serifs/scripts into the shopping flow, single heavy drop shadows, pure black body text.
