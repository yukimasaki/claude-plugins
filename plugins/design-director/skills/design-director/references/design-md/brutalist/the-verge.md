---
version: alpha
name: The Verge
description: A neon-brutalist editorial layout that runs on hard edges, oversized numerals, and a single saturated orange doing every job an accent could do. Black and white carry the structure; 2px rules replace whitespace; serif and sans collide inside the same headline because the tension is the point. Sections invert aggressively from white to black to orange so the page reads as a sequence of statements rather than a scroll. Mood — decisive, opinionated, loud, unapologetic.

colors:
  primary: "#ff6600"
  primary-hover: "#e55c00"
  ink: "#000000"
  body: "#000000"
  on-primary: "#000000"
  canvas: "#ffffff"
  surface-inverse: "#000000"
  on-inverse: "#ffffff"
  hairline: "#000000"
  rule: "#000000"

typography:
  display-xxl:
    fontFamily: "Polysans Median, Neue Haas Grotesk Display, system-ui, sans-serif"
    fontSize: 168px
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: -3.36px
  display-xl:
    fontFamily: "Polysans Median, Neue Haas Grotesk Display, system-ui, sans-serif"
    fontSize: 108px
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: -2.16px
  display-lg:
    fontFamily: "Polysans Median, Neue Haas Grotesk Display, system-ui, sans-serif"
    fontSize: 68px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: -1.36px
  display-md:
    fontFamily: "Polysans Median, Neue Haas Grotesk Display, system-ui, sans-serif"
    fontSize: 44px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.88px
  title-lg:
    fontFamily: "Polysans Median, Neue Haas Grotesk Display, system-ui, sans-serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.56px
  title-md:
    fontFamily: "Polysans Median, Neue Haas Grotesk Display, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.4px
  body-md:
    fontFamily: "Polysans Neutral, Söhne, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  pull-quote:
    fontFamily: "GT Super, Portrait, Iowan Old Style, Georgia, serif"
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0
  caption:
    fontFamily: "Polysans Neutral, Söhne, system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.26px
  numerals-tabular:
    fontFamily: "Polysans Median, Neue Haas Grotesk Display, system-ui, sans-serif"
    fontSize: 68px
    fontWeight: 700
    lineHeight: 1.0
    fontFeature: "tnum"

rounded:
  none: 0px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 12px
  "4": 16px
  "6": 24px
  "8": 32px
  "12": 48px
  "16": 64px
  "24": 96px
---

## Overview

The Verge is neon brutalism applied to editorial publishing. The page is structured by hard edges, deliberately ugly type mixing, oversized numerals, and a single saturated orange doing every accent job there is. Black and white form the spine; orange interjects. Sections invert aggressively — white to black to orange — so the page reads as a sequence of declarations rather than a continuous scroll. Confident, loud, built to be remembered.

Mood words — decisive, opinionated, loud, unapologetic.

## Colors

The palette is binary plus one. Pure white canvas (`#ffffff`) and pure black ink (`#000000`) form the structural neutrals. Orange (`#ff6600`) is the **only** saturated color — used on category tags, primary CTAs, and active nav indicators. There is no secondary accent and no muted fill; if a color is not black, white, or orange, it does not appear.

Section inversion replaces tonal layering — a section flips from white-on-black to black-on-white to orange-on-black to create rhythm. The 2px black rule (`rule`) does the work that hairlines and shadows do in softer systems.

## Typography

- **Display** uses `Polysans Median` (fallback `Neue Haas Grotesk Display`). Weight 700. Letter-spacing tightened roughly −2% on all display sizes — that's the brutalist crunch.
- **Editorial body** uses `Polysans Neutral` (fallback `Söhne`). Weight 400.
- **Pull quotes and callouts** use an editorial serif — `GT Super` or `Portrait`. Italics allowed and encouraged. **Mix serif and sans inside the same headline** — the tension is the aesthetic.
- **Numerals and dates** are oversized, tabular, tracked wide. Issue numbers and years function as graphic elements.

Type scale ladder — 13 / 16 / 20 / 28 / 44 / 68 / 108 / 168 px. Go enormous for headlines; the page should feel like a poster.

Inter is explicitly out. It is too neutral for a voice this loud.

## Layout

- Full-bleed content sections — content extends edge-to-edge, no max-width container on hero blocks
- 12-column grid with **asymmetric** article layouts (e.g. 2-col body + 1-col pull quote)
- 2px black rules everywhere instead of whitespace or shadow
- Oversized numerals as page anchors (issue numbers, dates, large statistics)
- Spacing scale rooted on 4px — 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96

Below 768px, headlines scale from 168px down to 48px, asymmetric layouts collapse to single column, but **2px rules remain 2px** — the rule weight never softens.

## Elevation & Depth

Flat. Zero shadows. Depth comes from three mechanisms only:

1. **2px black rules** between items
2. **Section inversion** — white to black to orange
3. **Size contrast** — 168px headline next to 16px body produces hierarchy without gradient or shadow

Drop shadow, blur, and any soft elevation are explicit don'ts.

## Shapes

- **Radius is 0px everywhere** — buttons, cards, images, inputs, nav. Nothing rounds.
- Cards as a container do not exist; rules separate items instead.
- Images crop tight, edge-to-edge, with no rounded corners. Captions sit below in tracked uppercase.

The geometry is the brand. Round one corner and the aesthetic collapses.

## Components

**Buttons**
- Primary — orange fill (`primary` `#ff6600`), black text, 0px radius, padding 14/24, weight 700, uppercase, letter-spacing 0.04em
- Hover — black fill, white text. Snaps instantly, no easing transition

**Articles**
- No card container. 2px black horizontal rules separate items.
- Category tag above headline in uppercase orange (`primary`), tracked wide
- Headline in display weight 700 with serif/sans mixing allowed

**Navigation**
- Full-width black bar (`surface-inverse`), white logo (`on-inverse`), orange active indicator
- Category links in uppercase, tracked

**Images**
- Cropped tight, edge-to-edge, 0px radius. Captions in mono or tracked sans.

**Pull quotes**
- Editorial serif (`pull-quote`), italics allowed, set against an inverted black section for maximum contrast

## Do's and Don'ts

**Do**
- Mix serif and sans in the same headline
- Use oversized numerals as graphic elements (issue numbers, years, statistics)
- Invert sections aggressively — white → black → orange — for rhythm
- Keep 2px rules at 2px regardless of viewport width

**Don't**
- Round any corner — radius is 0 everywhere
- Introduce a secondary accent color
- Soften the design with drop shadows, blur, or gradients
- Use Inter anywhere — it is too neutral for this voice
- Replace 2px rules with whitespace; the rules are the design

## Agent Prompt Guide

**Bias toward** — black + white + one saturated orange, oversized headlines, 2px rules, aggressive sans/serif mixing, 0px radius, full-bleed sections, section inversion, oversized tabular numerals as anchors.

**Reject** — rounded corners, soft shadows, pastel palettes, Inter as the display face, glassmorphism, secondary accents, gradient hero treatments.
