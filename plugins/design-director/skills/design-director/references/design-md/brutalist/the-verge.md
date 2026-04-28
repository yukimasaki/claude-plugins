---
version: alpha
name: The Verge
description: |
  The Verge's 2024 redesign is what happens when a Condé Nast magazine gets wired to a chiptune soundboard. The canvas is almost-black (`#131313`) — there is no light mode on the homepage — and headlines are built from a brutally heavy display face (**Manuka** by Klim Type Foundry, weight 900) that runs up to 107px. The whole page is peppered with **acid-mint** (`#3cffd0`) and **ultraviolet** (`#5200ff`) that behave less like brand colors and more like hazard tape. Story tiles are saturated full-bleed color blocks (mint, purple, yellow, pink, orange, electric blue) that read like pasted-up rave flyers arranged into a timeline. The signature layout is the **StoryStream** vertical feed with mono-uppercase timestamps on a left rail — stories don't float on a grid, they stack on a dashed vertical rule like commits in a git log. Depth is almost entirely flat: **1px hairline borders** in white, mint, or ultraviolet do the work shadows would do elsewhere. The system is gradient-free; mint and ultraviolet must be solid blocks, never washes. Mood — brutalist, editorial, club-night, hazard-tape.

colors:
  primary: "#3cffd0"
  primary-active: "#309875"
  primary-disabled: "#1f3a30"
  ink: "#ffffff"
  body: "#ffffff"
  body-muted: "#e9e9e9"
  body-secondary: "#949494"
  body-tertiary: "#8c8c8c"
  body-on-light: "#131313"
  inverted-text: "#131313"
  canvas: "#131313"
  canvas-pure: "#000000"
  surface-slate: "#2d2d2d"
  surface-image-frame: "#313131"
  surface-light: "#ffffff"
  hairline-on-dark: "#ffffff"
  hairline-mint: "#309875"
  hairline-image: "#313131"
  hairline-purple-rule: "#3d00bf"
  on-primary: "#000000"
  on-dark: "#ffffff"
  ultraviolet: "#5200ff"
  ultraviolet-rule: "#3d00bf"
  link-hover-blue: "#3860be"
  focus-cyan: "#1eaedb"

typography:
  hero-display:
    fontFamily: "Manuka, Impact, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 107px
    fontWeight: 900
    lineHeight: 0.8
    letterSpacing: 1.07px
  display-lg:
    fontFamily: "Manuka, Impact, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 90px
    fontWeight: 900
    lineHeight: 0.8
    letterSpacing: 0
  display-md:
    fontFamily: "Manuka, Impact, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 60px
    fontWeight: 900
    lineHeight: 0.8
    letterSpacing: 0
  headline-lg:
    fontFamily: "PolySans, Helvetica, Arial, sans-serif"
    fontSize: 34px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0
  heading-wide:
    fontFamily: "PolySans, Helvetica, Arial, sans-serif"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: 0.32px
  heading-md:
    fontFamily: "PolySans, Helvetica, Arial, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0
  heading-sm:
    fontFamily: "PolySans, Helvetica, Arial, sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0
  fashion-eyebrow:
    fontFamily: "PolySans, Helvetica, Arial, sans-serif"
    fontSize: 19px
    fontWeight: 300
    lineHeight: 1.2
    letterSpacing: 1.9px
  label-xl:
    fontFamily: "PolySans, Helvetica, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: 1.8px
  body-strong:
    fontFamily: "PolySans, Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0
  body-md:
    fontFamily: "PolySans, Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: 0
  inline-label:
    fontFamily: "PolySans, Helvetica, Arial, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0.15px
  body-compact:
    fontFamily: "PolySans, Helvetica, Arial, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  eyebrow-caps:
    fontFamily: "PolySans, Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 1.8px
  caption-micro:
    fontFamily: "PolySans, Helvetica, Arial, sans-serif"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 1.1px
  meta-nano:
    fontFamily: "PolySans, Helvetica, Arial, sans-serif"
    fontSize: 10px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 1.5px
  mono-button:
    fontFamily: "'PolySans Mono', 'Courier New', Courier, monospace"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 2.0
    letterSpacing: 1.5px
  mono-timestamp:
    fontFamily: "'PolySans Mono', 'Courier New', Courier, monospace"
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 1.1px
  serif-body:
    fontFamily: "'FK Roman Standard', Georgia, serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: -0.16px
  serif-pull:
    fontFamily: "'FK Roman Standard', Georgia, serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0

rounded:
  none: 0px
  xxs: 2px
  xs: 3px
  sm: 4px
  lg: 20px
  xl: 24px
  "2xl": 30px
  "3xl": 40px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 32px
  xxl: 48px
  section: 64px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.mono-button}"
    rounded: "{rounded.xl}"
    padding: 10px 24px
  button-secondary:
    backgroundColor: "{colors.surface-slate}"
    textColor: "{colors.body-muted}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: 10px 24px
  button-outlined-mint:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.mono-button}"
    rounded: "{rounded.3xl}"
    padding: 10px 20px
  button-outlined-ultraviolet:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ultraviolet}"
    typography: "{typography.mono-button}"
    rounded: "{rounded.2xl}"
    padding: 10px 20px
  pill-tag-mint:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption-micro}"
    rounded: "{rounded.lg}"
    padding: 4px 10px
  pill-tag-ultraviolet:
    backgroundColor: "{colors.ultraviolet}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption-micro}"
    rounded: "{rounded.lg}"
    padding: 4px 10px
  story-tile-default:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  story-tile-feature:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.headline-lg}"
    rounded: "{rounded.xl}"
    padding: 32px
  story-tile-mint:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.heading-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  story-tile-ultraviolet:
    backgroundColor: "{colors.ultraviolet}"
    textColor: "{colors.on-dark}"
    typography: "{typography.heading-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.inline-label}"
    rounded: "{rounded.xxs}"
    padding: 8px 12px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.mono-button}"
    height: 64px
  hero-wordmark:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.hero-display}"
    padding: 32px
  story-stream-rail:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body-secondary}"
    typography: "{typography.mono-timestamp}"
    padding: 12px 16px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body-secondary}"
    typography: "{typography.eyebrow-caps}"
    padding: 64px
---

## Overview

The Verge reads like developer console meets club night meets tech tabloid — serious enough to cover a congressional hearing, loud enough to review a synthesizer. The canvas is **Canvas Black** (`{colors.canvas}` — #131313) — almost-but-not-quite pure black, with just enough warmth to feel like a printed newsprint negative rather than an OLED void. There is **no light mode** on the homepage; the dark canvas is the product.

The brand voltage comes from two **hazard accents**: Jelly Mint (`{colors.primary}` — #3cffd0) and Verge Ultraviolet (`{colors.ultraviolet}` — #5200ff). They behave less like brand colors and more like safety paint — applied sparingly to the most important element on screen. Story tiles take saturated full-bleed color block fills (mint, purple, yellow, pink, orange, electric blue) reading like rave flyers arranged into a timeline.

The signature layout is the **StoryStream** vertical feed: stories stack on a 1px dashed/solid rule (`{colors.hairline-purple-rule}` or white), each post a 20–24px rounded rectangle with a mono uppercase timestamp on its left rail. Above that, a massive **"The Verge" wordmark** dominates the masthead in **Manuka** (Klim Type Foundry, weight 900) at hero scale up to 107px — the single loudest type move in mainstream tech media.

Depth is almost entirely flat: **1px hairline borders** in white, mint, or ultraviolet replace shadows. The system is **gradient-free** — mint and ultraviolet must be solid color blocks, never washes.

Mood — brutalist, editorial, club-night, hazard-tape.

## Colors

The hazard duo (`{colors.primary}` / `{colors.ultraviolet}`) is non-negotiable — these never appear as background washes or gradient fades. Use them as button fills, 1px borders, active underlines, or saturated tile fills only.

Console Mint Border (`{colors.hairline-mint}` — #309875) is a darker mint variant for card outlines where pure mint over-saturates. Purple Rule (`{colors.hairline-purple-rule}` — #3d00bf) is a darker ultraviolet for the StoryStream rail. Deep Link Blue (`{colors.link-hover-blue}` — #3860be) is the **only blue** in the system and appears solely on link hover.

The neutral text scale runs Hazard White (`{colors.ink}` — #ffffff) for primary, Muted Text (`{colors.body-muted}` — #e9e9e9) for button text, Secondary Text (`{colors.body-secondary}` — #949494) for bylines / timestamps / metadata. Inverted Text (`{colors.inverted-text}` — #131313) goes on the rare mint / yellow / white tiles.

Surface Slate (`{colors.surface-slate}` — #2d2d2d) is the secondary card background when a tile doesn't need saturated color. Image frames use a 1px `{colors.hairline-image}` (#313131) hairline. The system is **entirely gradient-free** — solid blocks throughout.

## Typography

The system runs four typefaces with rigorously bound roles:

- **Manuka** (Klim Type Foundry, weight 900) — exclusively for hero wordmark and feature headlines at 60–107px. Anything smaller is a bug; Manuka is the brand shout, never UI.
- **PolySans** (PanGram Pangram, weights 300 / 500 / 700) — the workhorse for everything else: section heads, body, kickers, captions.
- **PolySans Mono** — exclusively for **UPPERCASE** labels: kickers, timestamps, category tags, button text. Lowercase mono doesn't exist in this system.
- **FK Roman Standard** (Florian Karsten) — the editorial exception, used sparingly for body / caption serif treatments (review decks, critic pulls). Never in UI.

The signature typographic move is the **"fashion-whisper"**: PolySans **weight 300** at 19–20px with **1.9px positive tracking** for capitalized eyebrows. The contrast between this whisper and the 107px Manuka shout is the entire voice.

Letter-spacing has two registers: positive (0.72–1.9px) for ALL-CAPS mono and sans labels, negative (-0.16px) for the rare serif appearances. Plain 0 letter-spacing is rare. Manuka display line-height is **0.80** (assumes proprietary tight metrics) — substitutes like Anton / Oswald / Bebas Neue need +0.10 to +0.15 looser line-height to prevent ascender/descender collisions.

## Layout

- Spacing base 8px with sub-base values (1 / 2 / 4 / 5 / 6 / 9 / 10 / 14 / 15 / 25)
- Section vertical padding 32–64px between major feed sections; StoryStream item gaps 12–16px
- Card interior 20–32px, feature cards expanding to 40–48px
- Max content width 1280–1300px; container padding 24px mobile / 48px desktop
- 12-column grid resolving into 3-col hero + 1-col StoryStream rail + feature panels
- 26 intermediate breakpoints detected (1300 / 1280 / 1200 / 1180 / 1024 / 900 / 768 / 600 / 550 / 425 / 400 / 320 etc.) — aggressive responsive tuning at every device boundary
- Manuka hero scales 107 → 48–54px on mobile; mono labels stay pinned at 11–12px (any smaller becomes unreadable)

The whitespace philosophy is **paced, not airy**: dramatic resets between loud moments. The dark canvas plus saturated accents make 32px of empty `{colors.canvas}` between two tiles act as a palette cleanser. Whitespace carries rhythm, not elegance.

## Elevation & Depth

The depth philosophy is **color-as-elevation**. There are no traditional drop shadows — when something needs to stand out it gets a mint fill or a 1px hazard-color border, not a shadow.

| Level | Treatment | Use |
|---|---|---|
| Flat | No border, no shadow | Default `{colors.canvas}` text |
| White Hairline | 1px solid `#ffffff` or `{colors.hairline-image}` | Image frames, quiet card outlines |
| Mint Hairline | 1px solid `{colors.primary}` | Active button outlines, focused story tiles |
| Ultraviolet Hairline | 1px solid `{colors.ultraviolet}` | Promotional / alternate state outlines |
| Atmospheric Ring | `rgba(0,0,0,0.33) 0px 0px 0px 1px` | Layered card edge — the only "shadow" effect |
| Inset Underline | `0px -1px 0px 0px inset {color}` | Active tab / nav underline (signature) |
| Color Fill | Saturated accent block | Story-tile elevation via color, not shadow |

No gradients, no glows, no atmospheric blurs anywhere — the hazard-tape aesthetic would dissolve if anything faded softly.

## Shapes

Eight discrete radius values create a "nested scale" feel where every component announces its hierarchy through its corners:

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0 | Reserved (rare) |
| `{rounded.xxs}` | 2px | Inputs, small badges (typewriter feel) |
| `{rounded.xs}` | 3px | Inline images |
| `{rounded.sm}` | 4px | Nested card images, small button variants |
| `{rounded.lg}` | 20px | Standard pill cards, color-block tiles |
| `{rounded.xl}` | 24px | Feature tiles, primary button pill |
| `{rounded.2xl}` | 30px | Large promotional buttons |
| `{rounded.3xl}` | 40px | Outlined CTA pills (loudest pill in the system) |
| `{rounded.full}` | 9999px / 50% | Avatar circles, icon buttons |

Note: The system uses thick borders on buttons and tiles for brutalist edge, but DESIGN.md `components.*` `border` is not a permitted sub-token — border weights are described in body text only.

## Components

**`button-primary`** — Jelly Mint pill: `{colors.primary}` fill, black text, PolySans Mono 12px / 600 / UPPERCASE / 1.5px tracking, 24px radius, 10/24 padding. Hover shifts to `rgba(255,255,255,0.2)` background with black text and a 1px `#c2c2c2` ring. Focus: cyan `{colors.focus-cyan}` background with 1px ultraviolet border.

**`button-secondary`** — Dark slate pill: `{colors.surface-slate}` fill, `{colors.body-muted}` text, 24px radius. Hover matches primary's translucent-white invert.

**`button-outlined-mint`** — Transparent fill, `{colors.primary}` text, 1px solid `{colors.primary}` border, 40px radius — the loudest pill in the system. Hover inverts to mint fill with black text.

**`button-outlined-ultraviolet`** — Transparent fill, ultraviolet text + 1px solid `{colors.ultraviolet}` border, 30px radius. Used for "Subscribe" or "Join the Stream" promotional callouts.

**`pill-tag-mint`** / **`pill-tag-ultraviolet`** — Non-interactive saturated tags with PolySans Mono 11px UPPERCASE / 1.8px tracking, 20px radius, 4/10 padding.

**`story-tile-default`** — `{colors.canvas}` fill with 1px solid `{colors.hairline-on-dark}` (white) border, 20px radius, 32px padding. Hover: headline color transitions from white to `{colors.link-hover-blue}` — the only response. No lift, no scale.

**`story-tile-feature`** — Feature tile at 24px radius with image clipped to inner radius (3px or 4px when nested).

**`story-tile-mint`** / **`story-tile-ultraviolet`** — Saturated accent tiles with no border (color block IS the elevation), inverted black or white text.

**`text-input`** — `{colors.canvas}` fill with 1px solid white or `{colors.body-secondary}` border, **2px radius** (tight, newspaper-form feel). Focus border shifts to mint; error border shifts to ultraviolet (used as alert here, not red).

**`top-nav`** — Thin dark bar with the Verge wordmark Manuka left, search icon and PolySans Mono UPPERCASE category links (12–14px / 1.5–1.8px tracking), single mint pill CTA right. Hover: `{colors.link-hover-blue}` color shift, no underline. Active section: 1px mint inset-underline.

**`hero-wordmark`** — Massive on first scroll — the homepage treats "The Verge" logo as a hero element at full Manuka 107px / 900 / 0.80 line-height / 1.07px tracking, not a 32px corner logo.

**`story-stream-rail`** — Vertical 1px dashed/solid rail (`{colors.hairline-purple-rule}` or white) on the left edge of each feed item, with PolySans Mono 11px / 500 UPPERCASE timestamps on the rail.

**`footer`** — Dark with secondary-text muted captions.

## Do's and Don'ts

**Do**
- Use `{colors.canvas}` as the canvas for every view — there is no light mode
- Use Jelly Mint and Ultraviolet as **hazard accents** — buttons, borders, active states, saturated tile fills
- Use Manuka exclusively at 60px+ — anything smaller is a bug
- Round everything: 20px for cards, 24px for feature cards, 30–40px for pill buttons
- Use PolySans Mono for UPPERCASE labels, timestamps, kickers, button text — lowercase mono doesn't exist
- Apply 1.5–1.9px positive letter-spacing to every ALL-CAPS label
- Use saturated color-block tiles (mint / purple / yellow / pink / orange / white) to elevate a story — never a drop shadow
- Use `{colors.link-hover-blue}` as link hover regardless of base color
- Apply the StoryStream timeline rail (1px `{colors.hairline-purple-rule}` or white) on feed views
- Use thin-weight (300) PolySans at 19–20px / 1.9px tracking for fashion-whisper eyebrows — the contrast with the 107px Manuka shout IS the voice

**Don't**
- Don't use a light background — the dark canvas is the product
- Don't add `box-shadow` for elevation — use 1px borders or saturated fills
- Don't use square corners — every interactive and content container is rounded
- Don't use Manuka for UI, buttons, or body — strictly display
- Don't use lowercase mono — PolySans Mono is always UPPERCASE
- Don't let mint and ultraviolet appear as background washes — hazard accents only
- Don't use gradients anywhere — solid color blocks only
- Don't introduce accent colors outside the declared mint / purple / yellow / pink / orange palette
- Don't pair Manuka with FK Roman in the same headline cluster
- Don't use mint text on dark canvas at under 16px — contrast vibrates at small sizes

## Agent Prompt Guide

**Bias toward** — Canvas Black `{colors.canvas}` ground, Manuka 107px hero wordmark, PolySans Mono UPPERCASE labels with 1.5–1.9px tracking, fashion-whisper PolySans 300 at 19–20px / 1.9px, saturated mint / ultraviolet / yellow / pink / orange / white story tiles with 20–24px radius, StoryStream timeline rail with mono timestamps, 1px hazard-color borders as the universal elevation device, link hover shift to `{colors.link-hover-blue}`.

**Reject** — light backgrounds, square corners, box-shadow elevation, Manuka in UI / buttons / body, lowercase PolySans Mono, mint or ultraviolet as background washes, gradients of any kind, accent colors outside the declared palette, Manuka + FK Roman in the same cluster.
