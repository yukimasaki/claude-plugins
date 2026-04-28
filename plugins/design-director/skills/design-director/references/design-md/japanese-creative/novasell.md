---
version: alpha
name: Novasell
description: A Japanese AI marketing-agency site (Raksul group) that pushes typography and color to extremes. Neon green (`#00fa27`) and pure black anchor every surface, headline display type runs from 100px to nearly 500px set in `gazzetta-variable`, and every text token — body, label, nav — is rendered at weight 700. The site is a portfolio of typographic confidence — large sizes, tight tracking that turns negative as scale grows, and a Zen Kaku Gothic New Japanese face that holds its own next to the European display face. Monochrome plus one neon, no shadows, no gradients. Mood — bold, neon, oversized, energetic.

colors:
  primary: "#00fa27"
  ink: "#000000"
  body: "#101112"
  muted: "#525459"
  disabled: "#cdcfd4"
  canvas: "#ffffff"
  surface: "#ffffff"
  surface-soft: "#f1f5f9"
  surface-mid: "#e9eef3"
  surface-dark: "#000000"
  hairline: "#cdcfd4"
  hairline-strong: "#7e8085"
  on-primary: "#000000"
  on-dark: "#ffffff"
  button-text-dark: "#222426"
  placeholder: "#7e8085"
  green-link: "#00aa14"
  success: "#00aa14"
  warning: "#f2c94c"
  error: "#e4250e"

typography:
  display-xl:
    fontFamily: "gazzetta-variable, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 160px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  display-lg:
    fontFamily: "gazzetta-variable, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 100px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  title-lg:
    fontFamily: "neue-haas-grotesk-display, Zen Kaku Gothic New, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 70px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "Zen Kaku Gothic New, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.75
    letterSpacing: 0
  body-sm:
    fontFamily: "Zen Kaku Gothic New, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.7
    letterSpacing: 0
  caption:
    fontFamily: "Zen Kaku Gothic New, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: 0
  label:
    fontFamily: "neue-haas-grotesk-display, Zen Kaku Gothic New, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: 0

rounded:
  sm: 4px
  md: 8px
  lg: 16px
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

Novasell (novasell.com) is the marketing site for an AI marketing agency in the Raksul group. The visual posture is "agency portfolio that wants to be remembered": one huge headline per section, neon-green and black alternating as ground, and a relentless `font-weight: 700` discipline that gives every line of copy the same density.

Mood words — bold, neon, oversized, energetic.

## Colors

The palette is two-tone with one neon accent. **Neon green `#00fa27`** is the brand and is used on both backgrounds and text — fearlessly. Black and white alternate as the other two grounds. The tonal greys (`#525459` Davy's gray, `#cdcfd4` silver, `#f1f5f9` whitegrey, `#e9eef3` light grey) are reserved for forms, disabled states, and subtle background ramps; they never dilute the brand statement.

A darker green `#00aa14` is reserved for inline text links where the neon green would be too saturated against white.

## Typography

Three faces, three roles. **`gazzetta-variable`** carries the giant display text — section banners and hero callouts at 100–500px. **`neue-haas-grotesk-display`** carries mid-size English labels and headings (70px, 12px, etc.). **`Zen Kaku Gothic New`** carries every Japanese line of copy and every UI label.

The defining rule is that **every token is `font-weight: 700`**. The schema flattens this — body, caption, label all live at weight 700. Lighter weights only appear on the `gazzetta-variable` display tier, where the variable axis is set elsewhere in CSS.

Letter-spacing turns increasingly negative as scale grows on display text (down to about `-7.8px` at hero size); body remains at `0`. Display line-heights compress to as low as 0.5–0.8 in the live site (so giant headlines visually overlap their own descenders); the schema uses 1.4 to satisfy the lint floor.

## Layout

- Viewport-driven scale — base width 1440 (`--base-vw: 1440`)
- One section, one message — vertical rhythm with very generous spacing (32 / 64 / 96)
- No standard column grid; sections compose with hero text + supporting block
- Touch targets ≥ 44px square
- Breakpoints — viewport-scaled, no fixed media query stops

## Elevation & Depth

No shadows, no gradients. Depth is purely tonal — black grounds against neon green grounds, with white type or black type chosen to maximize contrast. Custom easing `cubic-bezier(0.32, 0.48, 0, 1)` on transitions, but the static page is strictly flat.

## Shapes

16px radius on small pill buttons (`16.5px` in the live site, normalized to 16px here). Cards and panels use sharp corners or large 16px radii — never the medium 8–12px range that reads "soft web app." The pill buttons are deliberately small (12px text inside a 16.5px radius pill).

## Components

**Display headlines** — `gazzetta-variable` at 100px+, weight 700, line-height 1.4 (compressed in production), tight or negative letter-spacing.

**Buttons** — Primary fills `#000000` with white text at 12px / weight 700, 16.5px (pill) radius. Secondary fills `#ffffff` with black text, same shape. CTAs are intentionally small relative to surrounding type.

**Navigation** — Transparent header that may darken on scroll. Zen Kaku Gothic New, 12px, weight 700, black text on white sections.

**Body copy** — Zen Kaku Gothic New, 16px, weight 700, line-height 1.75. Note that "body" still reads as bold here — Novasell uses no regular weight in copy.

## Do's and Don'ts

**Do**
- Set every text token to `font-weight: 700` — including body
- Use `#00fa27` aggressively on both text and background
- Push display type past 100px and let line-height compress
- Alternate black and neon-green grounds across sections
- Let CTAs stay small (12px); the type does the heavy lifting elsewhere
- Use `Zen Kaku Gothic New` for all Japanese; `gazzetta-variable` for hero English; `neue-haas-grotesk-display` for English labels

**Don't**
- Use `font-weight: 400` anywhere — it breaks the brand discipline
- Soften `#00fa27` to a muted green — the neon edge is the identity
- Add a fourth typeface or any decorative font
- Use shadows or gradients — flat is doctrine
- Make headlines smaller than 40px on desktop — restraint is not the brief

## Agent Prompt Guide

**Bias toward** — neon-green + black + white tri-color, `font-weight: 700` on every token, oversized display headlines (100px+), pill micro-CTAs, sharp corners or large 16px radii, three-typeface system (gazzetta / neue-haas / Zen Kaku Gothic New), flat surfaces.

**Reject** — regular-weight body, muted greens, decorative drop shadows or gradients, multi-color CTAs, soft 8px-radius "web app" shapes, conservative headline sizes, font stacks without a CJK fallback after the brand display face.
