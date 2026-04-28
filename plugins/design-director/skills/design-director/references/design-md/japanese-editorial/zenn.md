---
version: alpha
name: Zenn
description: A Japanese tech-publishing platform that positions itself as the calmer, more refined sibling to Qiita. The brand blue (`#3ea8ff`) anchors every link and CTA, body ink runs slightly softer than Qiita's (`rgba(0,0,0,0.82)` flattened to `#262626`), and the page leans on white surfaces lifted by faint borders rather than canvas tinting. Body type is 16px at line-height 1.8 — generous enough to absorb kanji-heavy paragraphs and inline code without crowding. No `palt`, no `YakuHanJPs`, no CSS variables; the system is deliberately simple. Mood — clean, modern, considered, readable.

colors:
  primary: "#3ea8ff"
  primary-hover: "#0f83fd"
  ink: "#262626"
  body: "#404040"
  muted: "#737373"
  disabled: "#a3a3a3"
  canvas: "#ffffff"
  surface: "#ffffff"
  surface-soft: "#f1f5f9"
  hairline: "#d6e3ed"
  hairline-strong: "#9ca8b3"
  on-primary: "#ffffff"
  link: "#3ea8ff"
  success: "#10b981"
  warning: "#f59e0b"
  error: "#f43f5e"

typography:
  display-xl:
    fontFamily: "Inter, Hiragino Kaku Gothic ProN, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 38px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  display-lg:
    fontFamily: "Inter, Hiragino Kaku Gothic ProN, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  title-lg:
    fontFamily: "Inter, Hiragino Kaku Gothic ProN, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 17px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, Hiragino Kaku Gothic ProN, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, Hiragino Kaku Gothic ProN, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0
  caption:
    fontFamily: "Inter, Hiragino Kaku Gothic ProN, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  label:
    fontFamily: "Inter, Hiragino Kaku Gothic ProN, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: 0

rounded:
  sm: 4px
  md: 8px
  lg: 12px
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

Zenn (zenn.dev) is a Japanese technical publishing platform that overlaps with Qiita's audience but takes a deliberately quieter visual stance. The page is white-on-white with faint blue-tinted hairlines (`#d6e3ed`), the brand blue is reserved for actions and links, and the system avoids the small punctuation-tightening tricks Qiita uses — Zenn's voice comes from white space and a lighter ink instead.

Mood words — clean, modern, considered, readable.

## Colors

The palette is essentially a blue-tinted neutral ramp plus a single brand blue. Body ink at `#262626` (representing `rgba(0,0,0,0.82)`) is noticeably softer than Qiita's `rgba(0,0,0,0.87)` — the difference is small but it sets the tone. Surfaces are white; the secondary surface (`#f1f5f9`) is a faint blue-gray used for code-block grounds and section breaks. Hairlines (`#d6e3ed`) carry the same blue undertone so dividers harmonize with the brand color rather than reading as cold gray.

Status colors lean modern (Tailwind-adjacent) — success `#10b981`, warning `#f59e0b`, error `#f43f5e`.

## Typography

Type is the system stack — `-apple-system, system-ui, Hiragino Kaku Gothic ProN, Hiragino Sans, Noto Sans JP` — with no custom webfont and no `palt`. Body runs at **16px / line-height 1.8 / weight 400**, headings step up to weight 700 with line-height 1.5. Section displays go to 38px.

`letter-spacing: 0` everywhere. Code uses the SF Mono / Consolas / Menlo stack at 14px / line-height 1.5.

## Layout

- 4px-based spacing scale — 4 / 8 / 16 / 24 / 32 / 48
- Article max-width 820px (slightly wider than note's 620px because Zenn expects more code blocks)
- 20px horizontal page padding
- Feed pages run 2–3 columns with 16px gutters
- Touch targets ≥ 44px square
- Breakpoints — Mobile ≤ 640 / Tablet ≤ 960 / Desktop > 960

## Elevation & Depth

Four-step shadow ramp — none at rest, level-1 (`0 2px 4px rgba(0,0,0,0.08)`) on card hover, level-2 (`0 4px 12px rgba(0,0,0,0.10)`) on dropdowns, level-3 (`0 8px 24px rgba(0,0,0,0.12)`) on modals. Cards do not carry a shadow until hovered.

## Shapes

12px radius on cards, 8px on buttons and inputs, 4px on tags. The slightly softer radius compared to Qiita's universal 4px is part of how Zenn reads "modern" rather than "utilitarian."

## Components

**Buttons** — Primary fills `#3ea8ff` with white text at weight 700, 8px radius, 8/24 padding. Secondary is transparent with a 1px brand-blue border + brand-blue text.

**Inputs** — White fill, 1px `#d6e3ed` border, 8px radius, 16px text. Focus border thickens to brand blue.

**Cards** — White surface, 1px `#d6e3ed` border, 12px radius, 20px padding. Shadow appears only on hover.

## Do's and Don'ts

**Do**
- Use opacity-style softer ink (`#262626`) — Zenn reads quieter than Qiita on purpose
- Keep body line-height at 1.8 with `letter-spacing: 0`
- Reserve `#3ea8ff` for primary actions and inline links
- Use the blue-tinted hairline (`#d6e3ed`) — neutral gray dividers will look out of place

**Don't**
- Add `YakuHanJPs` or `palt` — Zenn's design intentionally skips both
- Use pure `#000000` for text or pure `#808080` for hairlines
- Spread brand blue across large background fields — it is an accent, not a surface
- Introduce CSS-variable theming where the rest of the system is plain values

## Agent Prompt Guide

**Bias toward** — softer-than-Qiita ink, single brand blue, blue-tinted hairlines, 16px / line-height 1.8 body, 8–12px radius, no palt, no `YakuHanJPs`, white surfaces with faint borders.

**Reject** — pure-black text, neutral-gray hairlines, palt on body, brand blue as background fill, line-height below 1.6 on body, multi-accent CTAs.
