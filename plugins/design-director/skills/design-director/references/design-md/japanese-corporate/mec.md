---
version: alpha
name: Mitsubishi Estate
description: A spacious, bilingual Japanese corporate aesthetic from a major real-estate developer. Mitsubishi Estate's site uses oversized English section labels (Century Gothic 40–58px / 700) as visual section breaks, then drops into Noto Sans JP for the long-form Japanese content beneath them. Body copy runs at 16px with a luxuriously wide line-height (1.8–2.0) and a hard ×1.4 line-height rule on every Japanese heading. The signature Brand Red (`#dc000c`) appears only on contact-pill CTAs and the search button — most of the page lives on white, with two soft beige-gray surfaces (`#f7f6f6`, `#f2f1ec`) for hero bands and info cards. Mood — corporate, trustworthy, bilingual, spacious.

colors:
  primary: "#dc000c"
  primary-hover: "#d7000f"
  ink: "#000000"
  body: "#000000"
  muted: "#404040"
  muted-soft: "#757575"
  disabled: "#c9c9c9"
  beige-accent: "#9f9889"
  canvas: "#ffffff"
  surface: "#ffffff"
  surface-hero: "#f7f6f6"
  surface-info: "#f2f1ec"
  surface-subtle: "#efefef"
  hairline: "#dddddd"
  on-primary: "#ffffff"
  tag-green: "#4da262"
  tag-blue: "#4a94bd"
  success: "#388e3c"
  warning: "#e09b1c"
  error: "#cc3333"

typography:
  display-xl:
    fontFamily: "Century Gothic, Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 58px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  display-lg:
    fontFamily: "Century Gothic, Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 46px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  display-md:
    fontFamily: "Century Gothic, Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  title-lg:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 34px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  title-md:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  title-sm:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: 0
  caption:
    fontFamily: "Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  label:
    fontFamily: "Century Gothic, Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0.04em

rounded:
  sm: 0px
  md: 0px
  lg: 8px
  pill: 50px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 16px
  "4": 24px
  "5": 48px
  "6": 96px
---

## Overview

Mitsubishi Estate's corporate site is a textbook example of the spacious, bilingual Japanese developer aesthetic — large Century Gothic English labels ("NEWS", "TOPICS", "SUSTAINABILITY") act as section breaks, with long-form Noto Sans JP body copy beneath. There is almost no shadow work and almost no rounded geometry; the visual rhythm comes entirely from generous vertical space and contrast between three soft surface colors.

Mood words — corporate, trustworthy, bilingual, spacious.

## Colors

The brand color is a saturated, almost vermilion **Brand Red `#dc000c`**. It is reserved for the contact-pill CTA, the search button, and small emphasis points — never for body, large backgrounds, or section fills. Most of the page lives on white with three off-white surfaces doing layout work: `#f7f6f6` for the page-title hero band, `#f2f1ec` (warmer, slightly beige) for info cards, and `#efefef` for secondary tags and filter buttons.

The lead/feature copy on the site uses a distinctive **Beige Accent `#9f9889`** — a warm gray that differentiates pull-quotes from the standard `#000000` body without introducing a saturated color. Tag colors include `#4da262` (green) and `#4a94bd` (blue) for category chips. Body text is pure `#000000`, the only place the brand actually uses pure black; secondary copy steps down through `#404040` → `#757575` → `#999999` → `#c9c9c9`.

## Typography

The site runs **two stacks in parallel**. Global / header / oversized English labels lead with **Century Gothic** (then Noto Sans, then Noto Sans JP). Article body, page titles, and Japanese headings lead with **Noto Sans JP** (then Noto Sans).

The hybrid stacks here put Inter at the head of the Latin chain for content-area tokens, and Century Gothic at the head only on display-xl/lg/md tokens (which carry the oversized English labels) and on the small-label token (used for breadcrumbs / meta). Noto Sans JP is the JP face throughout.

The brand has a strict **×1.4 rule on every Japanese heading** — page H1 (34px) → 47.6px line-height, H2 (28px) → 39.2px, etc. Body copy goes the opposite direction: 1.8–2.0 line-height for relaxed long-form. `letterSpacing` is 0 across the entire site (no `palt`, no manual tracking) — bumped only on the small caption label to `0.04em`.

## Layout

- Hard-coded vertical breathing room — section gaps run 48–96px
- No published max-width, but content rivers feel ~960–1080px
- Header height ~110px (body has 110px top padding for the fixed header)
- 4px-based spacing scale
- Breakpoints — Mobile ≤ 767, Tablet 768–1024, Desktop > 1024

## Elevation & Depth

The site is essentially flat. Buttons, cards, and panels have no published `box-shadow`. Surface separation comes from color (`#ffffff` / `#f7f6f6` / `#f2f1ec` / `#efefef`) and hairlines. If a downstream UI surface needs elevation, keep it minimal (`0 1px 2px rgba(0,0,0,0.04)`) so the corporate calm isn't broken.

## Shapes

The brand mixes two extremes. The contact-pill CTA uses fully rounded `50px` radius. The search button uses `32px`. Everything else (info cards, filter tags, modal close excepted) uses **square corners**. There is no middle-ground rounded geometry — the brand reads "either a perfect pill or a hard rectangle."

## Components

**Buttons** — Primary CTA fills `#dc000c` Brand Red, white text, Century Gothic 14px / 400, full-pill 50px radius, horizontal padding generous. Secondary fills `#efefef` with `#000000` text, square corners. Text-button "clear" variant uses `#dc000c` text on `#f7f6f6` ground, square corners.

**Page Title Bar** — `#f7f6f6` background band carrying H1 in Noto Sans JP 34px / 700 / line-height 47.6px. This is the canonical section break for inner pages.

**Info Card** — `#f2f1ec` beige fill, square corners, 18px body at line-height 32.4px (×1.8). No shadow.

**News Card** — White fill with hairline separators, 22px / 700 H3 inside.

**Inputs** — Form inputs are minimally specified upstream; default to white fill, 1px `#dddddd` border, square corners, 14–16px text.

## Do's and Don'ts

**Do**
- Use oversized Century Gothic English labels (40–58px / 700) as section breaks
- Apply the ×1.4 line-height rule to every Japanese heading rigorously
- Run body copy at line-height 1.8–2.0 for relaxed long-form Japanese
- Use Beige Accent `#9f9889` for pull-quote / lead-in copy to differentiate from body
- Switch type stacks by region — Century Gothic-led for global / nav / English labels, Noto Sans JP-led for content body

**Don't**
- Use Brand Red `#dc000c` on body text or as a large flat background fill
- Apply Century Gothic to body copy (it's an English-display face only)
- Use rounded corners between `0px` and `50px` — the brand jumps directly from square to pill
- Apply `palt` proportional kerning — the brand runs flat metrics on purpose
- Show the browser-default link blue (`#0000ee`); always override to black or red
- Drop body line-height below 1.6 — the brand's spaciousness collapses

## Agent Prompt Guide

**Bias toward** — oversized Century Gothic English section labels, Noto Sans JP body, ×1.4 heading line-height, 1.8–2.0 body line-height, square or pill (no in-between), Brand Red CTA only, three-tier off-white surface palette (`#f7f6f6` / `#f2f1ec` / `#efefef`), Beige Accent for lead copy.

**Reject** — body line-height below 1.6, mid-radius cards (4–12px), Brand Red on body or backgrounds, `palt` kerning, browser-default `#0000ee` links, Century Gothic on body copy, drop-shadow heavy cards.
