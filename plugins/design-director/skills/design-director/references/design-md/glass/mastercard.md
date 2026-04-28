---
version: alpha
name: Mastercard
description: |
  Mastercard's web presence reads like a warm editorial magazine built from soft stone and signal orange. The canvas is a muted putty-cream (`#f3f0ee`) — the paper of a premium annual report, never sterile white. Every shape that matters is a stadium, a pill, or a perfect circle: heroes carry 40px corners, cards go fully pill (999/1000px), service photographs crop into circular orbits, and buttons either complete the pill or sit at 20px. The signature motif is **orbit and trajectory** — circular image masks connected by thin hand-drawn-feeling Light Signal Orange arcs spanning whole viewports, each circle wearing a small white satellite micro-CTA on its perimeter like a moon. Type runs MarkForMC, Mastercard's proprietary geometric sans, at weight 500 with tight -2% letter-spacing on display and a load-bearing weight 450 on body — an unusual half-step softer than 500 but firmer than 400. Mood — institutional, editorial, soft, warm.

colors:
  primary: "#141413"
  primary-active: "#262627"
  ink: "#141413"
  body: "#141413"
  body-strong: "#141413"
  muted: "#696969"
  muted-strong: "#555555"
  whisper: "#d1cdc7"
  canvas: "#f3f0ee"
  surface-lifted: "#fcfbfa"
  surface-bone: "#f4f4f4"
  surface-white: "#ffffff"
  surface-dark: "#141413"
  hairline-on-light: "#d1cdc7"
  hairline-on-dark: "#262627"
  on-primary: "#f3f0ee"
  on-dark: "#ffffff"
  signal-orange: "#cf4500"
  signal-orange-light: "#f37338"
  clay-brown: "#9a3a0a"
  link-blue: "#3860be"
  brand-red: "#eb001b"
  brand-yellow: "#f79e1b"

typography:
  hero-display:
    fontFamily: "MarkForMC, SofiaSans, Arial, sans-serif"
    fontSize: 64px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: -1.28px
  display-lg:
    fontFamily: "MarkForMC, SofiaSans, Arial, sans-serif"
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -0.96px
  display-md:
    fontFamily: "MarkForMC, SofiaSans, Arial, sans-serif"
    fontSize: 36px
    fontWeight: 500
    lineHeight: 1.22
    letterSpacing: -0.72px
  title-md:
    fontFamily: "MarkForMC, SofiaSans, Arial, sans-serif"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: -0.48px
  subhead:
    fontFamily: "MarkForMC, SofiaSans, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0
  eyebrow:
    fontFamily: "MarkForMC, SofiaSans, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0.56px
  body-md:
    fontFamily: "MarkForMC, SofiaSans, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 450
    lineHeight: 1.4
    letterSpacing: 0
  body-sm:
    fontFamily: "MarkForMC, SofiaSans, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 450
    lineHeight: 1.43
    letterSpacing: 0
  button:
    fontFamily: "MarkForMC, SofiaSans, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: -0.48px
  button-consent:
    fontFamily: "MarkForMC, SofiaSans, Arial, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0.13px
  footer-link:
    fontFamily: "MarkForMC, SofiaSans, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 450
    lineHeight: 1.4
    letterSpacing: 0
  footer-header:
    fontFamily: "MarkForMC, SofiaSans, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.17
    letterSpacing: 0.48px

rounded:
  xs: 3px
  sm: 6px
  md: 20px
  lg: 24px
  xl: 40px
  pill: 999px
  full: 9999px

spacing:
  xxs: 8px
  xs: 16px
  sm: 24px
  md: 32px
  lg: 48px
  xl: 64px
  xxl: 96px
  section: 128px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 6px 24px
  button-secondary:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 6px 24px
  button-consent:
    backgroundColor: "{colors.signal-orange}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-consent}"
    rounded: "{rounded.lg}"
    padding: 1px 30px
  button-satellite:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 56px
  button-icon-circle:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 48px
  hero-media-frame:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.xl}"
  portrait-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.full}"
    size: 300px
  pill-carousel-card:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-md}"
    rounded: "{rounded.pill}"
  pill-chip:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: 8px 20px
  ghost-watermark:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.whisper}"
    typography: "{typography.hero-display}"
  floating-nav-pill:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 16px 40px
    height: 64px
  search-input:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    padding: 12px 24px
  country-selector:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: 8px 20px
  footer:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.footer-link}"
    padding: 100px
---

## Overview

Mastercard's website is a study in editorial restraint expressed at scale. The canvas is a warm putty-cream (`{colors.canvas}` — #f3f0ee) — never white, deliberately tinted to feel like premium magazine paper. On top of it sits a vocabulary of three shapes: stadium-rounded media frames at 40px, full pills at 999/1000px, and perfect circles. Sharp corners are absent.

The signature gesture is **orbit and trajectory**. Circular image portraits — service tiles cropped into perfect circles — sit asymmetrically across sections, connected by thin hand-drawn-feeling Light Signal Orange arcs that imply constellation rather than list. Each portrait wears a small **satellite CTA**: a white circular micro-button holding an arrow, docked onto its bottom-right perimeter like a moon. This motion-implied stillness is the most distinctive thing about Mastercard's current language.

Type runs **MarkForMC**, Mastercard's proprietary geometric sans, with a load-bearing **weight 450 body** (rare on the web — softer than 500, firmer than 400). Headlines run weight 500 with tight -2% letter-spacing. The whole system — warm cream, pill shapes, circular portraits, traced-orange orbits, ink CTAs — feels both institutional (a 60-year payments network) and editorial (a modern brand magazine).

Mood — institutional, editorial, soft, warm.

## Colors

The palette anchors on **Canvas Cream** (`{colors.canvas}` — #f3f0ee) and **Ink Black** (`{colors.ink}` — #141413). Ink is deliberately warm-near-black (the `13` blue value pulls toward the cream) so it never reads as jet-black against the warm canvas. Lifted Cream (`{colors.surface-lifted}` — #fcfbfa) is one step lighter for nested "paper-on-paper" sections.

**Signal Orange** (`{colors.signal-orange}` — #cf4500) is the page's single aggressive color and is **reserved for consent / legal actions** (cookie banner, privacy preferences). Using it for marketing CTAs would dilute its compliance signal. **Light Signal Orange** (`{colors.signal-orange-light}` — #f37338) is for the decorative orbital arcs only.

The Mastercard mark's **red** (#eb001b) and **yellow** (#f79e1b) appear only in the brand logo — they are brand assets, not a UI palette.

The whisper-cream tone (`{colors.whisper}` — #d1cdc7) is used for ghost-watermark cream-on-cream headlines layered behind portrait circles. Borders use ink at 1.5px on pill buttons and 1px at low opacity elsewhere.

## Typography

The system runs **MarkForMC** as a one-font solution. Three weights carry hierarchy: **450** (body — softer than typical regular, firmer than light — load-bearing), **500** (display + button + nav), **700** (eyebrow + footer column headers).

- Display headlines (64 / 48 / 36 / 24px) use weight 500 with tight -2% letter-spacing
- Body paragraphs use weight 450 — Mastercard's signature softness
- Eyebrow labels (14px / 700) run uppercase with +4% tracking, paired with a tiny accent dot ("• SERVICES")
- Line-height ratio drops with size: 1:1 at hero, 1.2 at title, 1.4 at body

Sofia Sans is the closest open-source substitute (it's already in MarkForMC's fallback stack); Inter is a generic stand-in but expect slightly looser letter shapes — preserve the -2% display tracking and 450 body weight.

## Layout

- Spacing base 8px; scale runs 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128
- Section vertical padding 96–128px on desktop, 48–64px on mobile
- Card internal padding 32–40px desktop, ~24px mobile
- Max content width 1200–1280px centered with 48–100px gutter
- Service cards use **asymmetric constellation placement** rather than a strict grid — their magic depends on this
- Footer is a 4-column link grid collapsing to single-column accordion at mobile

Whitespace is structural, not absent. A typical service section has a ghost watermark filling the top 40%, a single asymmetric portrait at 60%, and 300–500px of blank canvas between portrait and next section.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow | The default — 95% of surfaces sit directly on cream canvas |
| Floating | `rgba(0,0,0,0.04) 0px 4px 24px` | Floating nav pill — barely-there lift |
| Atmospheric | `rgba(0,0,0,0.08) 0px 24px 48px` | Hero media frames, elevated cards — soft large-radius halo |
| Dramatic | `rgba(0,0,0,0.25) 0px 70px 110px` | Rare; feature-tile spotlight |

The shadow philosophy is **atmospheric cushioning**, not directional light. Spreads are generous (24–48px) and opacities low (≤8%) so the card feels "breathing above" the canvas rather than drop-shadowed onto it. Border lines are preferred for functional delineation (form inputs, footer divider).

## Shapes

The radius scale is unusual: most systems use 4 / 8 / 12 / 16. Mastercard skips those and commits to **either small (3–6px), medium-large (20–40px), or full-pill (999+)**. The middle ground of 8–12 is absent — that's why the UI reads either "precise utility" or "soft editorial," with no in-between.

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 3px | Cookie-banner micro-chips |
| `{rounded.sm}` | 6px | Tiny decorative elements |
| `{rounded.md}` | 20px | Primary and secondary body CTAs (signature) |
| `{rounded.lg}` | 24px | Consent orange pill, modal inner chips |
| `{rounded.xl}` | 40px | Hero media frames, large stadium containers |
| `{rounded.pill}` | 999px | Nav, carousel cards, country selector, primary chips |
| `{rounded.full}` | 9999px / 50% | Circular portraits, icon-only buttons, satellite CTAs |

## Components

**`button-primary`** — Ink Black pill. Background `{colors.primary}`, text `{colors.on-primary}` (cream, not pure white), 1.5px solid ink border (same as bg, creates crisp edge), 20px radius, 6/24 padding. Used for every marketing CTA in the page body.

**`button-secondary`** — Outlined pill: white fill, ink text, 1.5px solid ink border, 20px radius. Body weight 450 inside.

**`button-consent`** — The Signal Orange pill. Bright rust fill, white text, 24px radius, 1/30 padding (tight vertical, wide horizontal), 13px / 400 type. **Used only for consent / legal / compliance flows**.

**`button-satellite`** — Circular micro-CTA docked onto a portrait's bottom-right edge, ~50–60px diameter, ink arrow icon. Always paired with a circular portrait, never standalone.

**`button-icon-circle`** — Carousel pagination, search toggle, hero video play. 40–80px circle, 1px ink border on cream or borderless over media.

**`portrait-card`** — Perfect circle, 260–340px desktop / 220px mobile. Square photographic source cropped to circle, with `{component.button-satellite}` docked at bottom-right (~40% outside the circle), eyebrow label below, then `{typography.title-md}` headline.

**`hero-media-frame`** — Full-bleed video or image at 40px radius, ~viewport width minus 48px gutter, ~60% viewport height. Sits directly on canvas; the 40px radius is the most iconic Mastercard gesture — never round less.

**`ghost-watermark`** — Cream-on-cream display text (`{colors.whisper}` — #d1cdc7) at 72–128px / weight 500 / tight -2% tracking, layered behind portrait circles, bleeding off the viewport edge.

**`floating-nav-pill`** — White pill floating ~24px below viewport top, `{colors.surface-white}` fill, soft `0px 4px 24px` shadow, 999px radius, 16/40 internal padding. Logo left, 5–6 primary links centered with ~48–56px gap, search icon right. Mobile collapses to logo + hamburger + search only; pill shape is preserved across breakpoints.

**`country-selector`** — Footer pill dropdown, `{colors.surface-dark}` fill, white text, 1px white-at-40%-alpha border, 999px radius, downward chevron right.

**`footer`** — Ink Black surface (`{colors.surface-dark}`), white text, 48/100 padding. Large conversational H2 left-aligned, 4-column link grid with uppercase muted column headers (`{typography.footer-header}`). Bottom row carries copyright + privacy + country selector + four social icons.

## Do's and Don'ts

**Do**
- Use `{colors.canvas}` (#f3f0ee) as the body — never pure white
- Mask service imagery as perfect circles, not rectangles
- Attach a `{component.button-satellite}` to each circular portrait
- Set headlines in MarkForMC weight 500 with -2% letter-spacing
- Use weight 450 (not 400) for body paragraphs — it's load-bearing
- Keep primary CTAs as Ink Black pills (20px radius) with cream text
- Reserve `{colors.signal-orange}` for consent / legal / compliance flows only
- Float the nav pill below the viewport top, not flush at y=0
- Use thin Light Signal Orange arcs between service cards to imply connection
- Place portraits asymmetrically — their magic depends on it

**Don't**
- Don't use pure white as canvas — it breaks the warm editorial tone
- Don't round image frames at 8–16px — Mastercard uses pill, 40px, or full-circle
- Don't use Signal Orange for marketing CTAs — it reads as cookie-consent orange
- Don't mix typefaces — no serif accent, no script, no display secondary
- Don't crowd the nav with more than six primary links — the pill must feel airy
- Don't drop hard shadows — all elevation uses 24–48px+ spread and ≤10% opacity
- Don't use uppercase above the 14px eyebrow scale
- Don't omit the tiny accent dot before eyebrow labels — it's the identity
- Don't place portraits on a strict grid — symmetry kills the constellation feel

## Agent Prompt Guide

**Bias toward** — warm putty-cream canvas (`{colors.canvas}`), MarkForMC weight 500 display + 450 body, 20/40/999 radius vocabulary, perfect-circle portraits with white satellite CTAs, asymmetric service-card constellation, Light Signal Orange orbital arcs, ink black pill CTAs, eyebrow-label + accent-dot section signals, dark warm-black footer.

**Reject** — pure white canvas, rectangular service imagery, in-between radii (8–16px), Signal Orange on marketing CTAs, multi-typeface mixes, hard drop shadows, strict-grid portrait placement, uppercase above eyebrow scale, weight 400 body (use 450).
