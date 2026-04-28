---
version: alpha
name: Qiita
description: A Japanese developer-community publishing platform where code and prose share the page. The brand green (`#55c500`) drives every CTA, link, and focus state, while body text uses Material-style opacity-based ink (`rgba(0,0,0,0.87)` flattened to `#212121` here) for a calmer feel than pure black. The signature trick is `YakuHanJPs` at the head of the font stack — a webfont that overrides Japanese punctuation glyphs with half-width forms, so brackets and commas stop fattening lines without needing palt. Body line-height runs at 1.8 to keep dense kanji + monospace mixes legible. Mood — technical, clean, code-friendly, methodical.

colors:
  primary: "#55c500"
  primary-hover: "#468c00"
  ink: "#212121"
  body: "#424242"
  muted: "#757575"
  disabled: "#9e9e9e"
  canvas: "#f5f6f6"
  surface: "#ffffff"
  surface-soft: "#f0f0f0"
  hairline: "#e0e0e0"
  hairline-strong: "#bdbdbd"
  on-primary: "#ffffff"
  link: "#55c500"
  code-bg: "#364549"
  code-fg: "#e3e3e3"
  inline-code-bg: "#f0f0f0"
  success: "#388e3c"
  warning: "#f57c00"
  error: "#d32f2f"

typography:
  display-xl:
    fontFamily: "Inter, YakuHanJPs, Hiragino Kaku Gothic ProN, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  display-lg:
    fontFamily: "Inter, YakuHanJPs, Hiragino Kaku Gothic ProN, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  title-lg:
    fontFamily: "Inter, YakuHanJPs, Hiragino Kaku Gothic ProN, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, YakuHanJPs, Hiragino Kaku Gothic ProN, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, YakuHanJPs, Hiragino Kaku Gothic ProN, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0
  caption:
    fontFamily: "Inter, YakuHanJPs, Hiragino Kaku Gothic ProN, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  label:
    fontFamily: "Inter, YakuHanJPs, Hiragino Kaku Gothic ProN, Hiragino Sans, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: 0

rounded:
  sm: 3px
  md: 4px
  lg: 8px
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

Qiita is a Japanese developer Q&A and article platform. The page must mix Japanese prose with code blocks at high frequency, so the type system is tuned for that handoff: a generous 1.8 body line-height that survives heavy kanji, monospace blocks that read distinctly without overpowering, and a single bright brand green that flags every CTA and link.

Mood words — technical, clean, code-friendly, methodical.

## Colors

The brand green `#55c500` is the only saturated color in the UI and is reserved for primary actions, links, focus rings, and inline code highlights. Neutrals are an opacity ladder of black (`rgba(0,0,0,0.87)` body, `0.54` secondary, `0.38` disabled) flattened here to opaque `#212121` / `#757575` / `#9e9e9e`. The canvas is `#f5f6f6` — a deliberate just-off-white that lifts white surfaces. Code blocks use a dark slate (`#364549`) with light text so they read as terminal output rather than UI.

## Typography

The hero of the system is `YakuHanJPs` — a webfont that only contains half-width Japanese punctuation glyphs (brackets, commas, periods). It sits at the head of every font stack so punctuation collapses to half-width even when the rest of the page falls back to system fonts. This removes the need for `palt` and keeps Qiita text feeling tight without fusing kanji.

Body type is **16px / line-height 1.8 / weight 400**, with `letter-spacing: 0` throughout. Code uses the SF Mono / Consolas / Menlo monospace stack at 14px / line-height 1.5.

## Layout

- 4px-based spacing scale — 4 / 8 / 16 / 24 / 32 / 48
- Container max-width 1100px with 16px horizontal padding
- 2-column shell — main content + sidebar — gutter 24px
- Touch targets ≥ 44px square
- Breakpoints — Mobile ≤ 767 / Tablet ≤ 1023 / Desktop > 1023

## Elevation & Depth

Mostly flat. Cards sit on hairline borders; only hover states lift to a level-1 shadow (`0 2px 4px rgba(0,0,0,0.10)`). Dropdowns use level-2 (`0 4px 8px rgba(0,0,0,0.10)`). Modals are rare in the reading flow.

## Shapes

4px radius on buttons, inputs, cards, and code blocks. 3px on inline code chips. No pill shapes outside of tag chips.

## Components

**Buttons** — Primary fills `#55c500` with white text at weight 600, 4px radius, 8/16 padding. Secondary is transparent with a 1px green border + green text. The 4px radius is conservative and consistent across all controls.

**Code blocks** — Dark slate `#364549` background with `#e3e3e3` text, monospace stack at 14px / line-height 1.5, 16px padding, 4px radius. Inline code uses a light-gray chip (`#f0f0f0`) with body-color text.

**Cards** — White surface, 1px `#e0e0e0` border, 4px radius, 16px padding, no shadow at rest.

## Do's and Don'ts

**Do**
- Put `YakuHanJPs` at the head of every Japanese font stack — half-width punctuation is a brand signature
- Keep body line-height at 1.8 — code-and-prose mixing breaks at lower values
- Use opacity-style neutrals for text hierarchy, not a separate gray scale
- Use `#55c500` only for primary actions, links, and focus rings

**Don't**
- Apply `palt` to body text — `YakuHanJPs` already handles punctuation, double-application looks broken
- Use pure `#000000` for body text — Qiita's voice is the Material-style off-black
- Mix proportional fonts into code blocks
- Add saturated colors beyond the green / status trio — the UI is intentionally quiet

## Agent Prompt Guide

**Bias toward** — single brand green for actions, opacity-style ink ladder, dark slate code blocks with light text, 16px / line-height 1.8 body, 4px radius across the board, hairline-bordered flat cards.

**Reject** — palt on body, pure-black text, code blocks on light backgrounds, multi-color CTAs, pill buttons, shadow-heavy cards, line-height below 1.6 on body.
