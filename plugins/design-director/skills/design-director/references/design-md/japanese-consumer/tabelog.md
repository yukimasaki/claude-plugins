---
version: alpha
name: Tabelog
description: Tabelog is Japan's dominant restaurant-review portal, and its visual system is unapologetically information-first — a 12px body baseline, a tight 980px fixed-width container, and Meiryo led at the top of the font stack to optimize for Windows readers. The brand color is Tabelog Orange `#f09000`, used aggressively on the rating score (the site's most important data point), the logo, CTAs, and selected highlights. Heading ink is `#333333`, body ink is `#595960`, and the entire surface is held together by hairlines `#dddddd` rather than shadow. Mood — dense, utilitarian, score-focused, dependable.

colors:
  primary: "#f09000"
  primary-hover: "#d07e00"
  score-high: "#f09000"
  score-mid: "#996600"
  score-low: "#666666"
  ink: "#333333"
  body: "#595960"
  muted: "#999999"
  disabled: "#cccccc"
  canvas: "#ffffff"
  surface: "#ffffff"
  surface-soft: "#f5f5f5"
  hairline: "#dddddd"
  hairline-strong: "#cccccc"
  on-primary: "#ffffff"
  success: "#339933"
  warning: "#f09000"
  error: "#cc3333"

typography:
  display-xl:
    fontFamily: "Inter, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 22.5px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  display-lg:
    fontFamily: "Inter, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  title-lg:
    fontFamily: "Inter, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  caption:
    fontFamily: "Inter, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  label:
    fontFamily: "Inter, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: 0

rounded:
  none: 0px
  sm: 3px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 12px
  "4": 16px
  "5": 24px
  "6": 32px
---

## Overview

Tabelog's web UI is built for one purpose: surface as many restaurants and reviews as possible per viewport while keeping the rating score (`#f09000`, weight 700) instantly scannable. Body type sits at **12px** — a deliberate density choice that's preserved on mobile too. There are no CSS Custom Properties; the stylesheet is a more traditional CSS architecture. The layout is fixed-width at 980px on desktop, and most separation comes from `#dddddd` hairlines rather than shadows.

Mood words — dense, utilitarian, score-focused, dependable.

## Colors

Tabelog Orange `#f09000` is the system's only chrome color. It marks the logo, primary CTAs, the active "in" state on tabs and pagination, and most importantly — the rating score number. The brand uses three score tiers: high (`#f09000`, ≥ 3.5), mid (`#996600`, mid-range), low (`#666666`, untrustworthy or unrated). This three-tier color encoding of the score is a key brand affordance.

Heading text is `#333333`, body text is `#595960` (a warm dark gray, not pure neutral), captions go to `#999999`. Hairlines `#dddddd` and the slightly stronger `#cccccc` carry layout structure. Status — error `#cc3333`, success `#339933`, warning shares Tabelog Orange.

## Typography

Upstream uses **Meiryo / メイリオ** as the lead face — Tabelog optimizes for Windows readers and uses the JP-name-first ordering convention. For the design-director hybrid we substitute `Inter` as the Latin lead so chrome (numerals, scores) renders cleanly across platforms, then chain into Hiragino Sans / Noto Sans JP / Yu Gothic for kanji. Real Tabelog deployments may swap `Inter` back for `Meiryo, メイリオ` if Windows fidelity matters.

Body sits at **12px** with line-height 1.4 upstream. For the floor we lift body / caption / label to 1.6 to keep kanji legible while preserving the small base size. Letter-spacing is 0 throughout. `palt` is not used (and at 12px would be wasted anyway). Headings step from 14 → 18 → 22.5 px at weight 600. The score numeral is its own role — 16px / weight 700 — represented here as `label`.

## Layout

- 4 / 8 / 12 / 16 / 24 / 32 spacing scale (XS through XXL)
- Container max-width 980px, fixed (no horizontal padding on container)
- Grid is 1–2 columns on listing pages with 12px gutter
- Touch targets ≥ 44px square on mobile
- Breakpoints — Mobile ≤ 640px, Tablet ≤ 980px, Desktop > 980px

## Elevation & Depth

Almost entirely flat. Restaurant cards have no shadow — they're separated by `#dddddd` hairlines. Dropdown menus use level-1 (`0 1px 3px rgba(0,0,0,0.12)`); modals and popovers use level-2 (`0 2px 6px rgba(0,0,0,0.15)`). Adding heavier shadows breaks the utilitarian rhythm.

## Shapes

Border radius is **3px on buttons, inputs, and tags**. Cards use 0px (sharp corners) — consistent with the dense, table-like layout. No pill shapes anywhere. Star icons (filled `#f09000`, empty `#dddddd`) are vector glyphs, not styled boxes.

## Components

**Buttons** — Primary fills `#f09000` with white text, weight 700, 12px, 3px radius, 8/16 padding. Secondary is transparent with 1px `#f09000` border + orange text. Both buttons stay deliberately compact.

**Rating badge** — White surface, `#f09000` numeric text at 16px / weight 700. Star row uses filled `#f09000` and empty `#dddddd` glyphs. The score is the page's primary CTA-equivalent — visual weight is justified.

**Inputs** — White fill, 1px `#cccccc` border, 3px radius, 12px text, 6/8 padding, 30px height. Focus changes border to `#f09000`.

**Restaurant card** — White surface, 1px `#dddddd` border, 0px radius, 12px padding, no shadow. Score badge sits in the top-right; thumbnail on the left; meta info (genre, station, budget) in body type below the name.

## Do's and Don'ts

**Do**
- Keep body at 12px — the entire IA is calibrated to that base size
- Use `#f09000` for the rating score numeral and the primary CTA
- Use the score color tiers (`#f09000` / `#996600` / `#666666`) to communicate quality
- Lead the font chain with a Latin face, then Hiragino / Noto Sans JP / Yu Gothic — and prefer Meiryo when targeting Windows-heavy audiences
- Separate cards with `#dddddd` hairlines, not shadows
- Keep button radius at 3px

**Don't**
- Bump body to 14 or 16px — the layout density collapses
- Use `#f09000` on a non-score, non-CTA element — it dilutes the rating signal
- Add CSS Custom Properties to extend the existing stylesheet — Tabelog's architecture predates them
- Use border-radius ≥ 8px on any UI element — feels off-brand
- Apply `palt` — wasted at 12px
- Use heavy shadows or rounded card panels — flatness is the system

## Agent Prompt Guide

**Bias toward** — single Tabelog Orange accent for score + CTA, three-tier score color encoding, 12px body baseline, fixed 980px container, 3px button radius / 0px card radius, hairline-based separation, Meiryo or Inter-led JP chain, no shadows.

**Reject** — body sizes ≥ 14px, multiple saturated accents, large radii, drop-shadow cards, `palt` or other typographic ornaments, CSS Custom Properties grafted onto the existing CSS, score color used outside of score / CTA contexts.
