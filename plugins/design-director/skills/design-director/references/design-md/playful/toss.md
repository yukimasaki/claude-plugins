---
version: alpha
name: Toss
description: A Korean-fintech interface that reads like a friend explaining money — bright white surfaces, one confident Toss Blue, generous radii, and flat-vector illustrations of cards and coins. Toss Product Sans pairs with Noto Sans KR so Korean and Latin glyphs share metrics; tabular numerals appear on every monetary value. Mobile-first with 64px tap-target row heights, the canvas stays warm without being childish — type stays geometric, copy stays plainspoken, and every CTA invites a tap. Mood — friendly, approachable, confident, never sterile.

colors:
  primary: "#3182f6"
  primary-hover: "#1b64da"
  primary-deep: "#1e40af"
  primary-soft: "#e8f3ff"
  ink: "#191f28"
  body: "#333d4b"
  muted: "#6b7684"
  dim: "#8b95a1"
  canvas: "#ffffff"
  surface-alt: "#f9fafb"
  surface-soft: "#f2f4f6"
  surface-callout: "#e8f3ff"
  hairline: "#e5e8eb"
  hairline-strong: "#d1d6db"
  on-primary: "#f9fafb"
  success: "#00c896"
  warning: "#ff9500"
  error: "#f04452"
  info: "#3182f6"

typography:
  display-xl:
    fontFamily: "Toss Product Sans, Pretendard, -apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Noto Sans KR, system-ui, sans-serif"
    fontSize: 66px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.66px
  display-lg:
    fontFamily: "Toss Product Sans, Pretendard, -apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Noto Sans KR, system-ui, sans-serif"
    fontSize: 50px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.5px
  display-md:
    fontFamily: "Toss Product Sans, Pretendard, -apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Noto Sans KR, system-ui, sans-serif"
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.4px
  title-lg:
    fontFamily: "Toss Product Sans, Pretendard, -apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Noto Sans KR, system-ui, sans-serif"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.32px
  title-md:
    fontFamily: "Toss Product Sans, Pretendard, -apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Noto Sans KR, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  title-sm:
    fontFamily: "Toss Product Sans, Pretendard, -apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Noto Sans KR, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: 0
  body-lg:
    fontFamily: "Toss Product Sans, Pretendard, -apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Noto Sans KR, system-ui, sans-serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-md:
    fontFamily: "Toss Product Sans, Pretendard, -apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Noto Sans KR, system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "Toss Product Sans, Pretendard, -apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Noto Sans KR, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  label:
    fontFamily: "Toss Product Sans, Pretendard, -apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Noto Sans KR, system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  caption:
    fontFamily: "Toss Product Sans, Pretendard, -apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Noto Sans KR, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  numerals-tabular:
    fontFamily: "Toss Product Sans, Pretendard, -apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Noto Sans KR, system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.5
    fontFeature: "tnum"
  code:
    fontFamily: "JetBrains Mono, SF Mono, ui-monospace, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  sm: 7px
  md: 12px
  lg: 16px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 12px
  "4": 16px
  "5": 20px
  "6": 24px
  "8": 32px
  "12": 48px
---

## Overview

Toss reads like a friend explaining money — bright white surfaces, one confident blue, generous radii, illustrations of cards and coins rendered in flat vector. The brand is warm without being childish; type stays geometric, copy stays plainspoken, and every CTA invites a tap. Korean-first, but the system holds in Latin script.

Mood words — friendly, approachable, confident, never sterile.

## Colors

The canvas is bright white (`canvas` `#ffffff`) with cool grays (`surface-alt`, `surface-soft`) for soft surface lifts. Toss Blue (`primary` `#3182f6`) is the only branded hue and the primary action. The tinted blue wash (`surface-callout` / `primary-soft` `#e8f3ff`) is the brand's softening move — it carries callouts and secondary buttons, paired with deep blue text for the signature two-step blue hierarchy.

Status colors are reserved for state — `success` mint for positive balance, `warning` amber for attention, `error` coral red for decline or loss. Never reuse status hues for decoration. Gradient fills are out — flat fills only.

## Typography

- **Headlines and display** use `Toss Product Sans` (fallback `Pretendard`, `-apple-system`, `BlinkMacSystemFont`, `Apple SD Gothic Neo`, `Noto Sans KR`, system). Weight 600–700 with tight tracking at large sizes.
- **Body and UI** use Toss Product Sans, fallback as above. Weight 400/500. Line-height 1.5–1.6. Korean glyphs render via `Noto Sans KR` and `Apple SD Gothic Neo` fallbacks.
- **UI labels** use Toss Product Sans weight 500, 13–15px.
- **Numerals** use tabular figures globally on balances, transaction lists, and charts via the `tnum` OpenType feature.
- **Mono** uses `JetBrains Mono`, fallback `SF Mono` for transaction IDs, code samples, and OTPs.

Hero headlines run 50–66px on desktop. Korean and Latin glyphs share metrics within Toss Product Sans.

Type scale ladder — 12 / 14 / 15 / 17 / 20 / 24 / 32 / 40 / 50 / 66 px.

## Layout

- Mobile-first — 360–430px primary canvas
- Web mirrors the mobile column at 480px max content width inside a 1200px shell
- Spacing scale rooted on 4px — 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48
- Generous vertical rhythm between content blocks (32–48px)
- Dense list views at 64px row height for tap-target compliance
- Headlines scale 66 → 28 on mobile
- Bottom-tab nav on mobile becomes top nav with the same 5 destinations on web
- Modals become full-screen sheets below 640px
- Lists become full-bleed at 360px viewport

## Elevation & Depth

Soft shadows appear sparingly — single `0 1px 3px rgba(25, 31, 40, 0.04)` on cards, `0 8px 24px rgba(25, 31, 40, 0.08)` on modals and bottom sheets. No neumorphism. No stacked shadows. Tap targets get a brief `scale(0.98)` press feedback (96ms ease-out).

## Shapes

- **Buttons** — 7px radius
- **Cards / list items** — 12px radius
- **Inputs** — 12px radius, no border at rest, focus 2px primary ring with no offset
- **Modals / bottom sheets** — 16px top radius on mobile

Toss tops out at 12–16px on cards and 7px on buttons — softer corners are out.

## Components

**Buttons**
- Primary — Toss Blue fill (`primary` `#3182f6`), white text `#f9fafb`, 7px radius, padding 14/20, weight 500. Hover `primary-hover`, pressed `primary-deep`. No lift, no scale.
- Secondary — tinted blue fill (`primary-soft` `#e8f3ff`), deep blue text (`primary-hover`), 7px radius. The two-step blue is Toss's signature hierarchy.
- Tertiary / link — `body` text, blue underline on hover
- Destructive — `error` fill, white text, only on confirm modals

**Cards / list items**
- White fill, 1px `hairline`, 12px radius, padding 20
- Soft shadow `0 1px 3px rgba(25, 31, 40, 0.04)` only
- Transaction rows — 1px hairline divider, no card chrome, 64px row height for tap targets
- Hover — 1px `hairline-strong`, no lift

**Inputs**
- `surface-soft` fill, no border at rest, 12px radius, padding 16/20 (large tap targets)
- Focus — 2px `primary` ring, no offset; label floats above on focus
- Currency inputs use right-aligned tabular numerals

**Nav**
- Mobile bottom-tab nav primary, 56px tall, 5 icons max, blue active state
- Web top nav — white fill, 1px bottom `hairline`, blue underline on active

**Illustrations**
- Flat vector — cards, coins, characters
- 2–3 hues per illustration drawn from blue plus soft neutrals
- Avoid photorealism, avoid drop shadows on illustration art

## Do's and Don'ts

**Do**
- Use Toss Blue as the single confident accent
- Pair primary blue with the tinted blue secondary — the two-step is the signature
- Ship bottom-sheet modals on mobile, not page-pushed dialogs
- Render every monetary value in tabular numerals
- Write copy in plainspoken Korean / English — short sentences, friendly verbs

**Don't**
- Introduce a second saturated brand hue
- Soften corners past 16px (Toss tops out at 12–16px on cards, 7px on buttons)
- Use dark mode as the default canvas
- Fill backgrounds with gradients (flat fills only)
- Mix more than two type weights per screen

## Agent Prompt Guide

**Bias toward** — bright white `#ffffff` canvas, single Toss Blue `#3182f6` accent paired with a tinted blue `#e8f3ff` secondary, Toss Product Sans with Noto Sans KR fallback, 7px radii on buttons and 12px on cards, mobile-first 480px content lane, 64px tap-target row heights, tabular numerals on every monetary value, flat-vector illustrations of cards / coins, bottom-sheet modals on mobile.

**Reject** — dark-mode marketing as default, multi-accent palettes, gradient fills, drop-shadow heavy cards, photorealistic imagery, soft-pill buttons over 16px radius, dense desktop-first dashboards, decorative emoji in chrome.
