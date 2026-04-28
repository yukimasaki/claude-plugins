---
version: alpha
name: Cybozu
description: A sincere, message-led Japanese corporate site for a teamwork and groupware company. Cybozu's site is intentionally restrained — there is no real palette beyond near-black ink on white, no shadows, no curved buttons, and no system of accent colors. What it does have is a luxuriously generous body line-height of 2.0, applied globally, so corporate copy and message essays read like a long-form magazine article rather than a SaaS landing page. Hiragino Kaku Gothic Pro W3 leads the type stack, with the Japanese name written first to bias macOS environments toward the JP face. Mood — sincere, warm, calm, message-led.

colors:
  primary: "#333333"
  ink: "#333333"
  body: "#333333"
  muted: "#666666"
  canvas: "#ffffff"
  surface: "#ffffff"
  surface-soft: "#f7f7f7"
  hairline: "#dddddd"
  on-primary: "#ffffff"
  success: "#2e8b57"
  warning: "#e09b1c"
  error: "#cc3333"

typography:
  display-xl:
    fontFamily: "Inter, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: 0
  display-lg:
    fontFamily: "Inter, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: 0
  title-lg:
    fontFamily: "Inter, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.7
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 2.0
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: 0
  caption:
    fontFamily: "Inter, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: 0
  label:
    fontFamily: "Inter, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: 0.04em

rounded:
  sm: 2px
  md: 4px
  lg: 4px

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

Cybozu is a Japanese groupware vendor whose corporate site uses design as a quiet vehicle for the brand's "teamwork-rich society" philosophy. The visual posture is "the message comes first, the chrome stays out of the way." There is no palette to speak of — the site runs on `#333333` ink and `#ffffff` canvas — and almost no UI furniture at the corporate level. The single distinctive choice is a globally applied `line-height: 2.0` on body copy, which makes long Japanese essays feel like a printed monthly rather than a marketing landing page.

Mood words — sincere, warm, calm, message-led.

## Colors

The palette is effectively two values: ink (`#333333`) and canvas (`#ffffff`). Pure black `#000000` is intentionally avoided to keep the type from feeling severe. A soft surface `#f7f7f7` is used for occasional section backgrounds, and `#dddddd` provides hairlines when separation is needed. Status tokens (success, warning, error) are present for completeness but rarely surfaced on the corporate site itself.

There is no signature accent color. If a CTA needs to feel branded, it pulls from the imagery alongside it rather than introducing a saturated swatch into the type system.

## Typography

The Japanese face is **Hiragino Kaku Gothic Pro W3** — *Pro*, not ProN, so this stack uses JIS90 glyphs. Upstream lists the Japanese-language face name first (`"ヒラギノ角ゴ Pro W3"`) to nudge macOS into the JP face on Japanese pages. The hybrid stack here keeps Inter at the head of the latin chain and Hiragino Sans at the head of the JP fallbacks.

`lineHeight: 2.0` on body is the brand's defining typographic choice. It is luxuriously wide — wider than SmartHR (1.6), wider than freee (1.5–1.6), wider than any standard SaaS — and matches the long-form reading rhythm used by note's article body. Headings sit at 1.6–1.7. `letterSpacing` is 0 throughout (no `palt` and no manual tracking). The 16px body is the rem anchor.

## Layout

- 4px-based spacing scale — 4 / 8 / 16 / 24 / 32 / 48
- Center-justified content column with generous side gutters
- No fixed max-width is published, but content rivers feel ~720–960px wide
- Section spacing is generous: corporate-message essays separate by 48–96px vertical
- Breakpoints — Mobile ≤ 767, Tablet ≤ 1024, Desktop > 1024

## Elevation & Depth

The corporate site is essentially flat — no shadow tokens, no card stacks, no popovers. Vertical separation comes from whitespace and an occasional hairline `#dddddd`. If shadows must be introduced for a downstream UI surface, keep them as a single subtle drop (`0 1px 2px rgba(0,0,0,0.06)`) so the elevation never breaks the editorial calm.

## Shapes

Border-radius is minimal — 2–4px when used at all. The site mostly uses square corners and hairlines rather than rounded chips. Pills and heavily rounded controls are intentionally avoided.

## Components

**Buttons** — Primary uses ink fill `#333333` with white text, 4px radius, 12/24 padding. Secondary uses transparent fill with `#333333` text and a 1px `#dddddd` border. Hover lightens by ~5%. There is no canonical "cybozu blue button" — the site treats CTAs as quiet text destinations.

**Inputs** — White fill, 1px `#dddddd` border, 4px radius, 16px text. Focus thickens border to `#333333`.

**Cards** — White fill, optional 1px hairline, no shadow, no radius. Vertical rhythm carries the layout instead of card chrome.

**Article body** — 16px / line-height 2.0 / weight 400. This is the core typographic unit and should be preserved unchanged in any page that hosts long Japanese copy.

## Do's and Don'ts

**Do**
- Apply `line-height: 2.0` globally on body copy for long-form Japanese
- Lead the JP fallback chain with Hiragino Kaku Gothic Pro (Pro, not ProN)
- Keep ink at `#333333`; never use pure `#000000`
- Use whitespace and hairlines for separation rather than card shadows

**Don't**
- Drop body line-height below 1.8 — the brand's calm collapses below that floor
- Mix Hiragino Pro and ProN in the same page (different glyph sets)
- Apply `font-feature-settings: palt` to body — the site runs flat metrics on purpose
- Introduce a saturated accent color into the corporate site without a strong reason

## Agent Prompt Guide

**Bias toward** — two-color palette (ink + canvas), 16px body at line-height 2.0, Hiragino Pro JP-first stack, 4px radii, hairline separators, no card shadows, generous vertical rhythm.

**Reject** — pure black text, pill buttons, drop-shadow card stacks, neon accents, `palt` kerning on body, body line-height below 1.8, mixing Pro and ProN glyph sets.
