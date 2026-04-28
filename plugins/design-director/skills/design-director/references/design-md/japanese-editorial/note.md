---
version: alpha
name: note
description: A Japanese longform publishing platform built around the writer-reader relationship. Pure black is rejected for an off-black ink (`#08131a`) so that long sessions feel softer on the eyes, and the body type runs at 18px with a generous 2.0 line-height to give kanji-heavy paragraphs room to breathe. The brand teal (`#5ac8b8`) is reserved for logo and accent only — every primary surface is just-off-white, hairlines do the structural work, and an optional Mincho stack is offered for editors who want a printed-page voice. Mood — calm, literary, soft, contemplative.

colors:
  primary: "#08131a"
  brand: "#5ac8b8"
  ink: "#08131a"
  body: "#202a30"
  muted: "#5a656b"
  disabled: "#aeb7bd"
  canvas: "#ffffff"
  surface: "#ffffff"
  surface-soft: "#f5f8fa"
  hairline: "#dce0e3"
  hairline-strong: "#c5ccd1"
  on-primary: "#ffffff"
  link: "#292d9e"
  like: "#d13e5c"
  success: "#1e7b65"
  warning: "#916626"
  error: "#b22323"

typography:
  display-xl:
    fontFamily: "Helvetica Neue, Hiragino Sans, Hiragino Kaku Gothic ProN, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.04em
  display-lg:
    fontFamily: "Helvetica Neue, Hiragino Sans, Hiragino Kaku Gothic ProN, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.04em
  title-lg:
    fontFamily: "Helvetica Neue, Hiragino Sans, Hiragino Kaku Gothic ProN, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0.04em
  body-md:
    fontFamily: "Helvetica Neue, Hiragino Sans, Hiragino Kaku Gothic ProN, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 2.0
    letterSpacing: 0
  body-sm:
    fontFamily: "Helvetica Neue, Hiragino Sans, Hiragino Kaku Gothic ProN, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0
  caption:
    fontFamily: "Helvetica Neue, Hiragino Sans, Hiragino Kaku Gothic ProN, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: 0
  label:
    fontFamily: "Helvetica Neue, Hiragino Sans, Hiragino Kaku Gothic ProN, Noto Sans JP, Yu Gothic, system-ui, sans-serif"
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

note (note.com) is a Japanese longform publishing platform where the visual posture is "the page steps back so the writing can speak." Pure black is replaced with `#08131a` — a near-black with a slight blue undertone — and every secondary text is the same hue at lower opacity, so the page reads as a single quiet monochrome rather than a layered UI.

Mood words — calm, literary, soft, contemplative.

## Colors

The palette is built on a single ink ramp (`#08131a` → `#5a656b` → `#aeb7bd` → `#dce0e3`) over a white canvas. The brand teal `#5ac8b8` lives on the logo and a few accent surfaces only — it is explicitly banned from text because it fails contrast against white. Like (`#d13e5c`) is the only saturated UI color and only appears on the heart action. Focus rings use `#292d9e` (a deep indigo) so they read distinctly from action and link states.

## Typography

Body type is **18px Hiragino Sans / Helvetica Neue at line-height 2.0** — unusually generous for a web product, deliberately so. Article width is capped at 620px to keep each line at the readable limit. `letter-spacing: 0.04em` and `font-feature-settings: "palt"` are applied **only to headings (h1, h2, h3)**; the body keeps `letter-spacing: 0` because palt on body text fuses kanji.

A second Mincho-only stack (`Hiragino Mincho ProN, Noto Serif JP, Yu Mincho, serif`) is available as an opt-in for article bodies that want a print-editorial voice. Don't mix the two stacks in the same article.

## Layout

- 4px-based spacing scale — 4 / 8 / 16 / 24 / 32 / 48
- Article body is fixed-width at 620px; timeline / editor at 580px
- Two-column desktop layouts use 610px main + 280px sub
- Touch targets ≥ 44px square
- Breakpoints — XS 361 / SM 481 / MD 769 / LG 941 / XL 1280

## Elevation & Depth

Three-step dual shadow system (ambient + key) — `elevation-1` for cards, `elevation-4` for dropdowns, `elevation-6` for modals. Hover states overlay `rgba(8,19,26,0.03)` rather than lifting the shadow stack. The base UI is otherwise flat — hairlines (`#dce0e3`) carry most of the structural work.

## Shapes

12px radius on cards, 8px on buttons and inputs, 4px on tags. Pill shape is reserved for follow / subscribe CTAs. Avatars are circular.

## Components

**Buttons** — Primary fills `#08131a` with white text at weight 700, 8px radius. Like / heart fills `#d13e5c`. Secondary is transparent with a 1px hairline border.

**Cards** — White surface, 1px `rgba(8,19,26,0.14)` border, 12px radius, elevation-1 shadow. The card title uses 16px / weight 600 with palt; body excerpt uses 14px at line-height 1.6.

**Navigation** — White surface with a 1px bottom hairline, 64px tall on desktop and 48px on mobile.

## Do's and Don'ts

**Do**
- Use `#08131a` instead of pure `#000000` for all text — softer reading
- Keep article body at 18px / line-height 2.0 / 620px max width
- Apply `letter-spacing: 0.04em` and `palt` to headings only
- Use opacity-shifted variants of the same ink for hierarchy (rgba(8,19,26,0.66) for secondary)

**Don't**
- Use brand teal `#5ac8b8` on text or small UI controls (fails contrast on white)
- Stretch article width beyond 620px — readability collapses
- Apply `palt` or `letter-spacing: 0.04em` to body paragraphs
- Mix Gothic and Mincho stacks within the same article

## Agent Prompt Guide

**Bias toward** — off-black ink, single ink ramp, hairline borders, 18px body at line-height 2.0, 620px article column, palt on headings only, white canvas with subtle `#f5f8fa` section grounds.

**Reject** — pure-black text, brand-teal text, palt on body, line-height < 1.6 on body, line lengths above 620px, multiple saturated accents on the same surface.
