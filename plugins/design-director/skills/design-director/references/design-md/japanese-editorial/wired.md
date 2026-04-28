---
version: alpha
name: WIRED Japan
description: The Japanese edition of WIRED, run on Condé Nast's editorial platform. The visual identity is austere magazine — pure black on white, no decorative color, large hero typography, generous body line-height (1.75), and a custom monospaced brand face (`WiredMono`) reserved for navigation, category labels, and editorial section headers. `palt` is applied globally on body so kanji-heavy headlines and prose tighten without losing their internal proportions, while WiredMono labels do the opposite — wide tracking, no palt — to read as cold-set metadata. Mood — austere, magazine-editorial, monochrome, intellectual.

colors:
  primary: "#000000"
  ink: "#000000"
  body: "#1a1a1a"
  muted: "#757575"
  disabled: "#999999"
  canvas: "#ffffff"
  surface: "#ffffff"
  surface-soft: "#f7fafc"
  surface-dark: "#000000"
  hairline: "#e5e5e5"
  hairline-strong: "#999999"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  meta: "#757575"
  description: "#333333"
  consent-primary: "#2b2e35"
  consent-text: "#4a5568"

typography:
  display-xl:
    fontFamily: "Helvetica Neue, Helvetica, Arial, Yu Gothic, YuGothic, Hiragino Kaku Gothic ProN, Hiragino Sans, Noto Sans JP, system-ui, sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.625
    letterSpacing: 0
  display-lg:
    fontFamily: "Helvetica Neue, Helvetica, Arial, Yu Gothic, YuGothic, Hiragino Kaku Gothic ProN, Hiragino Sans, Noto Sans JP, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: 0
  title-lg:
    fontFamily: "Helvetica Neue, Helvetica, Arial, Yu Gothic, YuGothic, Hiragino Kaku Gothic ProN, Hiragino Sans, Noto Sans JP, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.556
    letterSpacing: 0
  body-md:
    fontFamily: "Helvetica Neue, Helvetica, Arial, Yu Gothic, YuGothic, Hiragino Kaku Gothic ProN, Hiragino Sans, Noto Sans JP, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: 0
  body-sm:
    fontFamily: "Helvetica Neue, Helvetica, Arial, Yu Gothic, YuGothic, Hiragino Kaku Gothic ProN, Hiragino Sans, Noto Sans JP, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0
  caption:
    fontFamily: "Helvetica Neue, Helvetica, Arial, Yu Gothic, YuGothic, Hiragino Kaku Gothic ProN, Hiragino Sans, Noto Sans JP, system-ui, sans-serif"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  label:
    fontFamily: "WiredMono, Helvetica Neue, Helvetica, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0.083em

rounded:
  sm: 0px
  md: 0px
  lg: 6px
  pill: 9999px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 16px
  "4": 32px
  "5": 64px
  "6": 96px
---

## Overview

WIRED Japan (wired.jp) is the Japanese edition of WIRED, presenting technology and culture journalism with a magazine-editorial visual register. The page is white-paged with a black header, body type runs at 16px / line-height 1.75 — wide for the web, tuned for long reads — and headlines step up to 32px / weight 700. The defining visual choice is the monospaced brand face `WiredMono`, used exclusively for navigation, category labels, and editorial section labels at small sizes with wide tracking.

Mood words — austere, magazine-editorial, monochrome, intellectual.

## Colors

The palette is pure monochrome. Pure black `#000000` is the primary color and is used unapologetically — for headlines, header backgrounds, and CTA fills. Body type drops one notch to `#1a1a1a` for kanji legibility under long reads. Meta text, dates, and category lines sit at `#757575`. There is no decorative color anywhere in the editorial UI; brand identity is carried entirely by typography and the black header band.

A small consent-banner palette (`#2b2e35` primary, `#f7fafc` background, `#4a5568` text) is reserved for the Fides cookie banner only.

## Typography

Two faces, two roles. **Helvetica Neue → Yu Gothic → Hiragino Kaku Gothic ProN** carries all body and headline text — `palt` applied globally so kanji-heavy lines tighten naturally. **WiredMono → Helvetica → Noto Sans JP** carries every navigation link, category label, and section header at 11–18px, with wide `letter-spacing: 0.083em` and no palt.

Body runs **16px / line-height 1.75 / weight 400**. Article titles step to 32px / weight 700 / line-height 1.625. WiredMono labels run as small as 11px with `letter-spacing: 0.083em` (wide enough to read as cold metal type).

## Layout

- 8px-based spacing scale — 8 / 16 / 32 / 64 / 96
- Hero images run full-bleed; article body is centered with a max-width column
- Card grids separate stories with white space, never with borders
- Touch targets ≥ 44px square
- Breakpoints — Condé Nast platform defaults; no project-specific custom breakpoints

## Elevation & Depth

Strictly flat. No `box-shadow` anywhere in the article UI. Depth is implied entirely by image overlays (dark semi-transparent fills under hero photography) and by the contrast between the black header band and white page body.

## Shapes

Sharp corners (0px radius) on cards, images, and editorial CTAs. The only soft radius is on the consent banner button (6px). Avatars are circular only when present in author bylines.

## Components

**Article headlines** — Helvetica Neue / Yu Gothic stack, 32px / weight 700 / line-height 1.625, palt active. Kicker labels above headlines use WiredMono at 11px / letter-spacing 0.083em.

**Primary CTA ("Read more" / equivalent)** — Black `#000000` fill, white text, weight 700, 12px size, no border-radius. Sits inline within editorial flow.

**Navigation** — Black header band (`#000000`) with white WiredMono links at 11px and wide tracking. Category sub-nav reads as a horizontal monospaced strip.

**Consent banner** — `#2b2e35` button, Inter at 14px / weight 600, 6px radius — the only place the system softens.

## Do's and Don'ts

**Do**
- Use pure `#000000` for headlines and the header band — softening it loses WIRED's voice
- Use `#1a1a1a` for body text (slight relief from full black for long reads)
- Apply `palt` globally on body so kanji-heavy headlines and prose tighten
- Reserve `WiredMono` for navigation and small labels, always with `letter-spacing` ≥ 0.05em
- Keep card layouts borderless — separate stories with whitespace and typography only

**Don't**
- Apply `palt` to `WiredMono` — it is a monospaced brand label face, palt would distort it
- Use `WiredMono` on body text — it is for nav and small labels only
- Introduce decorative color — WIRED is monochrome on principle
- Add box-shadow to cards or sections — flat is doctrine
- Wrap a `@font-face` shim around Yu Gothic Medium; it sits in the family chain directly

## Agent Prompt Guide

**Bias toward** — pure black on white, dual-stack typography (sans for prose / WiredMono for nav), global palt on body, sharp corners, full-bleed hero imagery, magazine-style line-height 1.75 body, wide-tracked label faces.

**Reject** — decorative color on text or backgrounds, `WiredMono` on body, palt on WiredMono, rounded corners on cards, drop shadows, narrow letter-spacing on metadata labels, line-height below 1.6 on body.
