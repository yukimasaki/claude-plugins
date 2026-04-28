---
version: alpha
name: connpass
description: A Japanese IT meetup and event-management platform with a utilitarian, list-first visual posture. The brand orange (`#f18d05`) and brand red (`#e8283f`) carry CTAs and danger respectively, while body type runs unusually small (12px) and unusually light (weight 400) — heading hierarchy is built from size differences alone, not weight contrast. The font stack still leads with Lucida Grande, a hold-over from early-2010s Japanese web convention, but the chain falls back through Hiragino for kanji legibility. The result reads efficient and slightly retro — closer to a database front-end than a consumer product. Mood — utilitarian, dense, retro-pragmatic, restrained.

colors:
  primary: "#f18d05"
  primary-hover: "#d77d04"
  brand-red: "#e8283f"
  ink: "#333333"
  body: "#444444"
  muted: "#888888"
  disabled: "#aaaaaa"
  canvas: "#ffffff"
  surface: "#ffffff"
  surface-soft: "#f5f5f5"
  hairline: "#dddddd"
  hairline-soft: "#eeeeee"
  on-primary: "#ffffff"
  link: "#0066cc"
  link-hover: "#003366"
  success: "#5cb85c"
  warning: "#f18d05"
  error: "#e8283f"

typography:
  display-xl:
    fontFamily: "Lucida Grande, Verdana, Hiragino Kaku Gothic Pro, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  display-lg:
    fontFamily: "Lucida Grande, Verdana, Hiragino Kaku Gothic Pro, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  title-lg:
    fontFamily: "Lucida Grande, Verdana, Hiragino Kaku Gothic Pro, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "Lucida Grande, Verdana, Hiragino Kaku Gothic Pro, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "Lucida Grande, Verdana, Hiragino Kaku Gothic Pro, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  caption:
    fontFamily: "Lucida Grande, Verdana, Hiragino Kaku Gothic Pro, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  label:
    fontFamily: "Lucida Grande, Verdana, Hiragino Kaku Gothic Pro, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: 0

rounded:
  sm: 2px
  md: 4px
  lg: 6px
  pill: 9999px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 16px
  "4": 24px
  "5": 32px
  "6": 48px
---

## Overview

connpass (connpass.com) is a Japanese platform for organizing and discovering IT meetups, study groups, and tech conferences. The visual posture is "directory tool, not consumer app" — information density takes priority, headings are subtle, and the UI mostly steps out of the way of the event lists. The brand orange + red pairing is a relic of late-2000s Japanese web conventions and is preserved deliberately.

Mood words — utilitarian, dense, retro-pragmatic, restrained.

## Colors

Two brand colors do separate jobs and must not be confused. **Orange (`#f18d05`)** is the primary CTA color (register, attend, post event). **Red (`#e8283f`)** is danger and high-priority alerts only — never used decoratively. Inline text links use the classic `#0066cc` web blue with `#003366` hover, keeping link color distinct from both brand hues so it reads as "link" not "button."

The neutral palette is plain hex grays — `#333` heading, `#444` body, `#888` muted, `#aaa` disabled. The lift from canvas (`#fff`) to soft surface (`#f5f5f5`) is the only background variation.

## Typography

The defining quirk is **weight 400 headings**. Display text steps up in size (36 / 24 / 18 / 14 / 12 / 11 px) but never in weight, so hierarchy is built from size contrast alone. Body type is 14px on prose and 12px in lists — small by modern standards, but consistent with the platform's "more rows visible" priority.

The font stack leads with Lucida Grande and Verdana before falling back through Hiragino Kaku Gothic Pro and Noto Sans JP. This is unusual and intentional — connpass predates the system-font convention. Body line-height is 1.6 for legibility; headings tighten to 1.4. `letter-spacing: 0` everywhere; no `palt`.

## Layout

- 4px-based spacing scale — 4 / 8 / 16 / 24 / 32 / 48
- Container max-width 980px with 16px horizontal padding
- Event-list pages run 1 column; top page runs 2–3 columns; gutter 16px
- Touch targets ≥ 44px square
- Breakpoints — Mobile ≤ 480 / Tablet ≤ 768 / Desktop > 768

## Elevation & Depth

Flat by default. Hairline borders (`#dddddd`) do all the structural work. A level-1 shadow (`0 1px 3px rgba(0,0,0,0.12)`) appears on card hover; level-2 (`0 2px 6px rgba(0,0,0,0.15)`) on dropdowns. No card shadows at rest.

## Shapes

4px radius on buttons, inputs, and cards. 2px on small badges. No pill shapes outside of tag chips. Radii stay conservative to match the utilitarian voice.

## Components

**Buttons** — Primary fills `#f18d05` with white text at weight 700, 4px radius, 8/24 padding. Danger fills `#e8283f` (same shape). Secondary is transparent with a 1px hairline border and `#444` text.

**Inputs** — White fill, 1px `#dddddd` border, 4px radius, 12px text, 6/10 padding. Focus ring thickens to brand orange.

**Cards** — White surface, 1px `#dddddd` border, 4px radius, 16px padding, no shadow at rest.

## Do's and Don'ts

**Do**
- Keep heading weights at 400 — size contrast is the hierarchy mechanism
- Lead font stack with Lucida Grande / Verdana before kanji faces (it is a brand signature here, not a mistake)
- Use `#0066cc` for inline links — never substitute brand orange
- Maintain 12–14px body and 1.6 line-height to preserve list density

**Don't**
- Make headings bold — the entire UI tone shifts away from connpass's voice
- Mix orange and red on the same surface — they signal different intents
- Drop body below 12px — already small enough
- Use saturated palettes beyond the brand orange / red / link blue trio

## Agent Prompt Guide

**Bias toward** — orange CTA + red danger pairing, weight-400 headings, dense list layouts, hairline-bordered flat cards, Lucida Grande-led font stack, classic-web link blue, 4px universal radius.

**Reject** — bold headings, multiple saturated accents on the same surface, modern system-font-only stacks, line-height below 1.5 on body, pill buttons, drop-shadow cards.
