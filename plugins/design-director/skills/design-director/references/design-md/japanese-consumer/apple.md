---
version: alpha
name: Apple Japan
description: Apple Japan (apple.com/jp) is the localized face of Apple's global magazine-style product site. The product itself is the only ornament — typography, generous whitespace, and full-bleed hero imagery do all the talking. The defining JP-specific detail is the `SF Pro JP` family pinned to the front of every font stack so kanji glyphs render as Apple intends, ahead of `SF Pro Display` / `SF Pro Text`. Color is restrained to near-black ink, just-off-white surface, and a single Apple Blue accent. Mood — minimal, premium, product-first, confident.

colors:
  primary: "#0071e3"
  primary-hover: "#0077ed"
  link: "#0066cc"
  link-on-dark: "#2997ff"
  ink: "#1d1d1f"
  body: "#1d1d1f"
  muted: "#6e6e73"
  canvas: "#ffffff"
  surface: "#ffffff"
  surface-alt: "#f5f5f7"
  hairline: "#d2d2d7"
  on-primary: "#ffffff"
  on-dark: "#f5f5f7"
  hero-dark: "#000000"
  nav-opened: "#fafafc"
  success: "#28a745"
  warning: "#ff9f0a"
  error: "#bf4800"

typography:
  display-xl:
    fontFamily: "SF Pro JP, SF Pro Display, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 80px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  display-lg:
    fontFamily: "SF Pro JP, SF Pro Display, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  title-lg:
    fontFamily: "SF Pro JP, SF Pro Display, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "SF Pro JP, SF Pro Text, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "SF Pro JP, SF Pro Text, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  caption:
    fontFamily: "SF Pro JP, SF Pro Text, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  label:
    fontFamily: "SF Pro JP, SF Pro Text, Noto Sans JP, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: 0.04em

rounded:
  sm: 4px
  md: 8px
  lg: 12px
  pill: 980px

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

Apple Japan is the JP locale of Apple's global product marketing site. The visual posture is identical to the global build — magazine layout, full-bleed hero photography, restrained color, dramatic type — but the font stack is reworked so Japanese glyphs render through Apple's proprietary `SF Pro JP` family before falling back to `SF Pro Display` / `SF Pro Text`. The product is the protagonist; UI chrome is reduced to ink, surface, hairline, and one Apple Blue accent.

Mood words — minimal, premium, product-first, confident.

## Colors

Apple intentionally avoids pure black on white. Body text sits at `#1d1d1f` (near-black) on `#ffffff`. Alternating sections use the off-white `#f5f5f7` to create rhythm without lines. Heavy hero sections fill `#000000`, and on those dark surfaces text drops to `#f5f5f7` rather than pure white.

Apple Blue `#0071e3` is the only saturated color and carries every CTA, focus ring, and outline button. Inline text links use `#0066cc` on light, `#2997ff` on dark. Glyph gray `#6e6e73` is the secondary ink for captions and footer categories.

## Typography

Every font-family chain is led by `SF Pro JP`. Display tier (`SF Pro Display` ahead of `SF Pro Text`) kicks in at 20px and above; smaller sizes use the Text optical. Hiragino Kaku Gothic Pro is the macOS fallback (note: **Pro**, not ProN), with Meiryo and MS Pゴシック covering Windows.

Apple is famous for tight tracking. The upstream site uses small negative letter-spacing on body and mid-size headings — for the design-director floor we round to 0 (the actual rendered tightness comes from `SF Pro` itself). Hero ladder runs 28 / 48 / 80 px at weight 600. Body is 17px / weight 400. `palt` is **not** applied — `SF Pro JP` already kerns Japanese internally, and adding `palt` would double-correct.

## Layout

- 8px-based spacing scale — 4 / 8 / 16 / 24 / 32 / 48
- Hero content max width 1680px (`--global-content-max-width-hero`)
- Standard content max width 1260px (`--global-content-max-width`)
- Breakpoints — Small 320–833px, Medium 834–1023px, Large ≥ 1024px
- Touch targets ≥ 44px square; global nav height fixed at 44px

## Elevation & Depth

Mostly flat. The signature lift is the global navigation: a translucent black plate (`backdrop-filter: saturate(180%) blur(20px)`) that floats above content. Hover cards use a soft long-blur shadow; product detail surfaces stay flat. Focus uses an Apple Blue tinted ring rather than a hard outline.

## Shapes

Border radius is 980px (full pill) on every primary CTA and outline button — the "Apple pill" is non-negotiable. Dark fill blocks use 8px. Cards typically use 12px. Tables and inline tags rarely exist on this site; when they do, 4px.

## Components

**Buttons** — Primary fills `#0071e3` with white text, weight 400, pill radius (980px), 8/22 padding, 17px. Outline is transparent with 1px `#0071e3` border + Apple Blue text, same pill radius. Dark Fill is `#1d1d1f` background + white text at 8px radius for in-card secondary actions.

**Navigation** — Black-translucent plate with `saturate(180%) blur(20px)`. Category links 12px / weight 400 / `rgba(0,0,0,0.8)` ink (rendered as `#1d1d1f` for token purposes here). Mobile expands to a `#fafafc` panel.

**Hero typography** — Page-title h1 lives at 80px / 600 / line-height 1.4. Subtitle at 28px / 400. Body 17px / 400. The 80px hero uses the Display optical; 17px body uses the Text optical.

## Do's and Don'ts

**Do**
- Pin `SF Pro JP` to the front of every font-family declaration
- Use ink `#1d1d1f` instead of pure `#000` for text
- Use `#f5f5f7` (not `#fff`) for text on dark hero sections
- Use the 980px pill radius on primary and outline CTAs
- Keep nav as glass with `backdrop-filter: blur(20px)`
- Prefer `Hiragino Kaku Gothic Pro` (the **Pro** variant, not ProN) as the macOS JP fallback

**Don't**
- Drop `SF Pro JP` from the stack — kanji rendering quality regresses
- Add `palt` or other `font-feature-settings` — `SF Pro JP` already handles JP kerning
- Use pure black `#000` for body text, or pure white `#fff` on dark surfaces
- Use square or sm-radius buttons for primary CTAs — Apple is pill-shaped
- Ship more than one saturated accent on a surface; Apple Blue is the only chrome color

## Agent Prompt Guide

**Bias toward** — `SF Pro JP` led font stacks, near-black `#1d1d1f` ink, alternating `#fff` / `#f5f5f7` sections, single Apple Blue accent, 980px pill CTAs, glass nav with backdrop-filter, full-bleed hero imagery, magazine-style spacing.

**Reject** — pure black/white text, `palt` or `font-feature-settings` overrides, square CTAs, multiple saturated accents, line-height < 1.6 on body, ProN as the JP fallback (Apple JP uses Pro), drop-shadow-heavy cards.
