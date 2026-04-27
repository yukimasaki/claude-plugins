---
version: alpha
name: Notion × Duolingo
description: A learning-platform interface that fuses Notion's warm-white document surface with Duolingo's saturated leaf-green progress and tactile button geometry. Notion sets the writing rhythm — warm white canvas, charcoal text, generous reading column, restrained chrome — while Duolingo brings the encouragement layer of leaf-green CTAs, rounded radius, and the signature `0 4px 0 0` bottom-shadow that makes interactive controls feel pressable. Streak orange, danger red, and XP blue are confined to their signal contexts; the body remains a Notion document. Mood — focused, warm, encouraging, study-grade.

colors:
  bg: "#ffffff"
  bg-alt: "#fbfaf8"
  surface: "#f1efea"
  text: "#37352f"
  text-muted: "#6f6b62"
  text-dim: "#a09c92"
  border: "#e9e7e2"
  border-strong: "#d6d3cc"
  accent: "#58cc02"
  accent-hover: "#4cad00"
  accent-deep: "#3d8a00"
  accent-soft: "#e8f8d8"
  streak: "#ff9600"
  danger: "#ff4b4b"
  xp: "#1cb0f6"
  bg-dark: "#25241f"
  surface-dark: "#322f29"
  text-dark: "#f1efea"
  border-dark: "#3e3a32"
  on-accent: "#ffffff"

typography:
  display-xl:
    fontFamily: "Inter Display, Inter, system-ui, sans-serif"
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -1.2px
  display-lg:
    fontFamily: "Inter Display, Inter, system-ui, sans-serif"
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.6px
  display-md:
    fontFamily: "Inter Display, Inter, system-ui, sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.4px
  title-lg:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.2px
  title-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  title-sm:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  button:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0
  caption:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  numerals-score:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 800
    lineHeight: 1.2
    fontFeature: "tnum"

rounded:
  sm: 8px
  md: 12px
  lg: 16px
  pill: 999px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 12px
  "4": 16px
  "6": 24px
  "8": 32px
  "12": 48px
  "16": 64px
  "24": 96px
---

## Overview

Notion × Duolingo is a blend of Notion's document-grade workspace and Duolingo's encouragement-driven learning surface. From Notion comes the warm-white reading canvas, the charcoal text ramp, the 720px reading column, the document callout pattern, and the discipline of border-only depth on document surfaces. From Duolingo comes the leaf-green CTA, the radius-16 tactile button with its signature `0 4px 0 0` bottom-shadow, weight-700 button typography, the progress bar pattern, and the streak / XP / danger signal palette confined to its semantic contexts.

The arbitration is clear. Notion's warm white wins all reading and document surfaces — Duolingo's pure white reads too cold for prolonged study. Duolingo's leaf green replaces Notion's blue for progress and CTAs because that's the entire point of the blend. Both parents agreed sans-serif body wins; Notion's Lyon serif felt too literary for a learning context. Duolingo's owl mascot and full categorical color palette are explicitly out — borrow the affordances, not the IP.

Mood — focused, warm, encouraging, study-grade.

## Colors

The document base is Notion's warm-white ramp — `bg` `#ffffff`, `bg-alt` `#fbfaf8` for callouts, `surface` `#f1efea` for hover states, with charcoal `text` `#37352f` and the soft border palette (`border` `#e9e7e2`, `border-strong` `#d6d3cc`).

Leaf green (`accent` `#58cc02`) is the **only chromatic action color** — used for primary CTAs, progress fills, and focus rings. `accent-deep` `#3d8a00` powers the tactile bottom-shadow under buttons, and `accent-soft` `#e8f8d8` is reserved for success-toast tints.

Three signal-only colors carry Duolingo's gamification — `streak` `#ff9600` for streak badges, `danger` `#ff4b4b` for wrong answers, and `xp` `#1cb0f6` for XP indicators. These never bleed into general UI.

Dark mode mirrors Notion's softer-than-pitch dark — `bg-dark` `#25241f` (warm not black) with matching surface and border ladders.

## Typography

- **Display headlines** use `Inter Display` (fallback `Inter`, system-ui) at weight 700, 32px+. Friendlier than Notion's Lyon serif default.
- **Titles** use `Inter` at weight 600/700.
- **Body** uses `Inter` at weight 400, 16/26 — document-feel, not chat-feel.
- **Buttons** are always weight 700, 16px — never thin weights on CTAs.
- **XP / streak / score numerals** use `Inter` at weight 800, tabular.

Type scale ladder — 12 / 14 / 16 / 18 / 20 / 24 / 32 / 40 / 56 px. No serif anywhere; both parents agreed sans wins for the learning context.

## Layout

The page operates in two zones.

- **Reading / lesson content** — Notion's 720px max column, centered, 16px body
- **Practice / exercise / dashboard** — Duolingo's 480px centered card stack on desktop, full-width on mobile, 32px+ padding inside cards
- **App shell** — 1180px max width, 240px nav rail, 8px base scale (8 / 16 / 24 / 32 / 48 / 64 / 96)

Reading column padding-only below 768px. Practice card stack goes full-width with 16px gutter on mobile. Nav rail collapses to a bottom tab bar at 768px. Tactile button bottom-shadow scales to `0 3px 0 0` below 480px so the press affordance survives compact viewports.

## Elevation & Depth

Two depth modes coexist.

- **Document surfaces** — flat and border-only, following Notion's discipline. Cards never lift.
- **Interactive controls** — buttons and exercise tiles use Duolingo's signature tactile bottom-shadow (`0 4px 0 0 var(--accent-deep)`). On press, the shadow collapses to `0 0 0 0` and the button translates 2px down — the iconic Duolingo pressable affordance.

Modals use a softer drop — `0 20px 48px rgba(55, 53, 47, 0.18)`. No glass, no blur, no card shadows — applying tactile shadow to cards would kill the document feel and is forbidden.

## Shapes

- **Buttons** — 16px radius (Duolingo geometry)
- **Cards / lesson tiles** — 12px radius (Notion geometry), 1px `border`
- **Inputs** — 8px radius, 1px `border`
- **Progress bars** — 999px pill, 12px height
- **Streak / XP badges** — 999px pill, padding 6/12

Radius below 12 on interactive elements is forbidden — it breaks the encouragement register.

## Components

**Button (primary CTA)**
- Duolingo geometry — 16px radius, padding 14/24, weight 700
- Fill `accent`, text `#ffffff`
- Tactile bottom shadow — `0 4px 0 0 var(--accent-deep)`. Pressed state shifts to `0 0 0 0` with translateY(2px)

**Button (secondary)**
- Same geometry as primary. Transparent fill, 2px `border-strong`, `text` color, weight 700
- Bottom shadow — `0 4px 0 0 var(--border-strong)` with the same pressed behavior

**Card / lesson tile**
- Notion pattern — `bg-alt` fill, 1px `border`, 12px radius
- Hover state — `surface` fill with 1px `border-strong`. No tactile shadow on cards — only on buttons.

**Input**
- 1px `border`, 8px radius, padding 10/14
- Focus state — 2px `accent` ring with 2px offset

**Progress bar**
- Track — `surface` fill, 12px height, 999px radius
- Fill — `accent`, 999px radius. Inner highlight `rgba(255, 255, 255, 0.32)` on the top 4px.

**Streak / XP badge**
- 999px pill, padding 6/12, weight 700, tabular numeral
- Streak — `streak` fill, white text. XP — `xp` fill, white text.

**Document surface**
- Notion's reading column — 720px, 16px body, 1.625 line-height
- Callouts — `bg-alt` fill with 1px `border`

## Do's and Don'ts

**Do**
- Reserve the tactile bottom-shadow for buttons and exercise tiles only
- Use leaf green for CTAs and progress fills, never decoration
- Keep streak / XP / danger colors confined to their signal contexts
- Body in Inter 16px with document-style line-height 1.625

**Don't**
- Apply tactile shadow to cards — it kills the document feel
- Use Duolingo's owl mascot literally — borrow the affordances, not the IP
- Drop multiple categorical colors into general UI
- Use serif body — it breaks the learning context
- Set button radius below 12, or use thin font weights on CTAs

## Agent Prompt Guide

**Bias toward** — warm-white document base, Inter throughout, leaf green for CTAs and progress only, tactile bottom-shadow on buttons (`0 4px 0 0` style), 720px reading column for lessons, 480px card stack for practice, streak / XP / danger colors confined to signal context, rounded radius 12–16 on interactive elements.

**Reject** — serif body, tactile shadows on cards, mascot illustrations of any kind, multi-color decoration, Notion's cold-white surfaces, button radius below 12, thin font weights on CTAs, glass / blur / drop shadows on cards.
