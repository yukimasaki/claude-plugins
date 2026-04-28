---
version: alpha
name: LINE
description: A Japanese messenger brand expressing trust through scale and saturation. LINE Green (`#06c755`) carries every CTA and accent while large body text (20px) and oversized headings (60–70px) give the marketing site a deliberate, friendly weight. The font chain leads with SFPro and Arial for Latin, then Noto Sans JP and Noto Sans KR — the Korean fallback acknowledges LINE's bilingual roots. Mood — bold, trustworthy, friendly, modern.

colors:
  primary: "#06c755"
  primary-hover: "#05b34c"
  ink: "#000000"
  body: "#000000"
  muted: "#666666"
  disabled: "#999999"
  canvas: "#ffffff"
  surface: "#f7f8f9"
  surface-card: "#ffffff"
  hairline: "#e5e5e5"
  on-primary: "#ffffff"
  success: "#06c755"
  warning: "#f9ab00"
  error: "#d93025"

typography:
  display-xl:
    fontFamily: "Inter, Noto Sans JP, Noto Sans KR, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 60px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  display-lg:
    fontFamily: "Inter, Noto Sans JP, Noto Sans KR, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  title-lg:
    fontFamily: "Inter, Noto Sans JP, Noto Sans KR, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, Noto Sans JP, Noto Sans KR, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, Noto Sans JP, Noto Sans KR, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  caption:
    fontFamily: "Inter, Noto Sans JP, Noto Sans KR, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  label:
    fontFamily: "Inter, Noto Sans JP, Noto Sans KR, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: 0

rounded:
  sm: 4px
  md: 8px
  lg: 12px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 16px
  "4": 24px
  "5": 40px
  "6": 64px
---

## Overview

LINE is the messenger app that owns the JP / KR / TW market. The marketing surface is the opposite of the product UI — generous breathing room, oversized headlines, big body text. The site behaves like a brand statement, not a productivity tool. Every section gets a full-bleed visual, large heading, and short paragraph; buttons and forms are sized for comfortable thumb interaction at 48px height.

Mood words — bold, trustworthy, friendly, modern.

## Colors

**LINE Green `#06c755`** is the brand. It carries every primary action — "Start now," "Download," "Open in app" — and doubles as the success semantic. Hover state lands at `#05b34c`.

The neutral ladder is intentionally short: `#000000` for ink (LINE's marketing site does use full black, unlike most Japanese brands), `#666666` for muted, `#999999` for disabled. Page canvas is `#ffffff`, soft surface `#f7f8f9` for grouped content, hairlines at `#e5e5e5`.

Status colors follow Material's neighborhood — `#d93025` for error, `#f9ab00` for warning. Both are restricted to status messaging; never used as decoration.

## Typography

The chain is `Inter (sub for SFPro / Arial) → Noto Sans JP → Noto Sans KR → Hiragino Sans → Yu Gothic → system-ui`. Korean fallback is intentional: LINE's parent NHN / Naver is Korean, and the messenger crosses both kanji and hangul on the same surface. Letter-spacing is 0 throughout — LINE deliberately avoids tight kerning even on the giant headlines.

Type ladder — 14 / 16 / 20 / 24 / 40 / 60 px. Body sits at **20px** (`body-md`), which is unusually large. Display lifts to 60px / 700 with line-height 1.4; we floor body line-height to 1.6 even though the live site ships `normal` (≈1.2) — at 20px / 1.2 kanji still reads, but 1.6 is safer in this token system.

## Layout

- 8-based spacing scale — 4 / 8 / 16 / 24 / 40 / 64
- Container max-width 1120px with 24px horizontal padding
- 12-column grid with 24px gutter
- Section-to-section vertical rhythm uses the 64px slot for major breaks
- Breakpoints — Mobile ≤ 767px, Tablet ≤ 1024px, Desktop > 1024px

## Elevation & Depth

Soft, marketing-style shadows. Level-1 (`0 2px 8px rgba(0,0,0,0.08)`) for cards and dropdowns; level-2 (`0 4px 16px rgba(0,0,0,0.12)`) for modals and popovers; level-3 (`0 8px 24px rgba(0,0,0,0.16)`) for dialogs. The site is not flat — shadows are part of the brand softness.

## Shapes

Border radius is 8px on buttons and inputs, 12px on cards. The slightly larger radius scale gives surfaces a friendly, app-like feel — closer to iOS than to enterprise SaaS. No pill buttons.

## Components

**Buttons** — Primary fills `#06c755` with white text, weight 700, 8px radius, 12/32 padding, 48px tall. Secondary is transparent fill with 1px `#e5e5e5` border and black text — keeps the green CTA monopolized.

**Inputs** — White fill, 1px `#e5e5e5` border, 8px radius, 16px text, 12/16 padding, 48px tall. Focus border swaps to 1px `#06c755`. Touch-friendly at 48px height.

**Cards** — White fill, 1px `#e5e5e5` border, 12px radius, 24px padding, `0 2px 8px rgba(0,0,0,0.08)` shadow.

## Do's and Don'ts

**Do**
- Use `#06c755` exclusively for primary actions
- Hold body at 20px on the marketing site; this is the brand's posture
- Lead the chain with Inter / SFPro and include Noto Sans KR for Korean fallback
- Use 60–70px headings on hero sections — the scale is the point
- Keep buttons and inputs at 48px height for thumb comfort

**Don't**
- Use any green other than `#06c755` for CTAs
- Drop body below 16px on the marketing surface
- Add custom CSS variables — the live site doesn't use them
- Apply `palt` to body — LINE explicitly disables proportional kerning
- Stack two competing accents — the design carries on green alone

## Agent Prompt Guide

**Bias toward** — LINE Green primary, oversized 60–70px headings, 20px body, Inter + Noto Sans JP + Noto Sans KR chain, 8px button radius, 12px card radius, 48px touch targets, soft `0 2px 8px` card shadow.

**Reject** — alternative green tones, body smaller than 16px, pill buttons, additional brand accents, headings under 40px on hero sections, body line-height < 1.6.
