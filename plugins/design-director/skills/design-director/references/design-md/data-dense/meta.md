---
version: alpha
name: Meta Store
description: |
  The Meta Store is a product-forward retail experience built to sell hardware — Quest VR headsets, Ray-Ban Meta smart glasses, accessories — by treating product photography like museum exhibits on an expansive white canvas. Surface strategy is binary: pure white for browsing, deep `#1c1e21` near-black for immersive product moments, alternated like walking through a physical retail space. Optimistic VF (Dalton Maag, commissioned by Meta) carries every headline with `ss01`+`ss02` stylistic sets, dominating at weight 500 (Medium) with airy 300 (Light) variants at 28px subheadings. Pill-shaped CTAs in saturated Meta Blue (`#0064E0`, never Facebook Blue `#1877F2`) are unmistakable action points. Each product line owns its own accent — Ray-Ban red `#D6311F`, Quest purple `#A121CE`, Portal teal `#C8E4E8` — but never mixed in the same section. Generous 64–80px section padding signals premium retail breathing room. Mood — gallery, premium, photography-first, optimistic.

colors:
  primary: "#0064E0"
  primary-hover: "#0143B5"
  primary-pressed: "#004BB9"
  primary-on-dark: "#47A5FA"
  facebook-blue: "#1877F2"
  rayban-red: "#D6311F"
  quest-purple: "#A121CE"
  work-purple: "#6441D2"
  portal-navy: "#1B365D"
  portal-hero: "#C8E4E8"
  portal-light: "#ADD4E0"
  ink: "#050505"
  body: "#1C2B33"
  muted: "#5D6C7B"
  secondary-text: "#65676B"
  section-header: "#4B4C4F"
  icon-secondary: "#465A69"
  disabled: "#BCC0C4"
  cta-disabled-text: "#8595A4"
  canvas: "#FFFFFF"
  surface-soft: "#F1F4F7"
  surface-card: "#F7F8FA"
  surface-wash: "#F0F2F5"
  surface-linen: "#F2F0E6"
  surface-baby: "#E8F3FF"
  canvas-dark: "#1C1E21"
  surface-quest: "#181A1B"
  surface-black: "#000000"
  hairline: "#DEE3E9"
  hairline-strong: "#CED0D4"
  hairline-cta: "#CBD2D9"
  hairline-emphasis: "#909396"
  on-primary: "#FFFFFF"
  success: "#31A24C"
  success-store: "#007D1E"
  error: "#E41E3F"
  error-store: "#C80A28"
  warning: "#F7B928"
  cherry: "#F3425F"
  grape: "#9360F7"
  lime: "#45BD62"
  seafoam: "#54C7EC"
  teal: "#2ABBA7"
  tomato: "#FB724B"
  pink: "#FF66BF"

typography:
  display-1:
    fontFamily: "Optimistic, Montserrat, Helvetica, Arial, 'Noto Sans', sans-serif"
    fontSize: 64px
    fontWeight: 500
    lineHeight: 1.16
    letterSpacing: 0
  display-2:
    fontFamily: "Optimistic, Montserrat, Helvetica, Arial, 'Noto Sans', sans-serif"
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1.17
    letterSpacing: 0
  heading-1:
    fontFamily: "Optimistic, Montserrat, Helvetica, Arial, 'Noto Sans', sans-serif"
    fontSize: 36px
    fontWeight: 500
    lineHeight: 1.28
    letterSpacing: 0
  heading-2:
    fontFamily: "Optimistic, Montserrat, Helvetica, Arial, 'Noto Sans', sans-serif"
    fontSize: 28px
    fontWeight: 300
    lineHeight: 1.21
    letterSpacing: 0
  heading-3:
    fontFamily: "Optimistic, Montserrat, Helvetica, Arial, 'Noto Sans', sans-serif"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.44
    letterSpacing: 0
  body:
    fontFamily: "Optimistic, Montserrat, Helvetica, Arial, 'Noto Sans', sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.44
    letterSpacing: 0
  body-compact:
    fontFamily: "Optimistic, Montserrat, Helvetica, Arial, 'Noto Sans', sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.50
    letterSpacing: -0.16px
  caption-bold:
    fontFamily: "Optimistic, Montserrat, Helvetica, Arial, 'Noto Sans', sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.43
    letterSpacing: 0
  caption:
    fontFamily: "Optimistic, Montserrat, Helvetica, Arial, 'Noto Sans', sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: -0.14px
  small:
    fontFamily: "Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0
  button:
    fontFamily: "Optimistic, Montserrat, Helvetica, Arial, 'Noto Sans', sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: -0.14px

rounded:
  none: 0px
  sm: 8px
  md: 20px
  lg: 24px
  pill: 100px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 10px
  "4": 12px
  "5": 14px
  "6": 16px
  "7": 18px
  "8": 24px
  "9": 32px
  "10": 40px
  "11": 48px
  "12": 64px
  section: 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 10px 22px
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 10px 22px
  button-disabled:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.cta-disabled-text}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 10px 22px
  card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: 20px
  card-feature:
    backgroundColor: "{colors.surface-card}"
    rounded: "{rounded.lg}"
    padding: 24px
  input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 12px 16px
  badge-success:
    backgroundColor: "{colors.success}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.pill}"
    padding: 4px 8px
---

## Overview

The Meta Store is a product-forward retail experience: pure-white canvas as gallery wall, with deep `#1c1e21` near-black sections for immersive product moments. Optimistic VF carries every headline at weight 500 with `ss01`+`ss02` stylistic sets, while Meta Blue `#0064E0` pill CTAs (never Facebook Blue `#1877F2`) drive every action. Photography is the visual hero — UI just frames the product.

Mood — gallery, premium, photography-first, optimistic.

## Colors

The canvas is binary: pure white for information, deep `#1C1E21` near-black for immersive product moments. Soft Gray `#F1F4F7` and Warm Gray `#F7F8FA` create gentle section rhythm without leaving the white world. Quest content drops to `#181A1B` (warm dark) or `#000000` (max contrast).

Meta Blue `#0064E0` is the singular CTA color — Facebook Blue `#1877F2` is legacy and only appears as inherited de-emphasis. Each product line owns one accent: Ray-Ban red `#D6311F`, Quest purple `#A121CE`, Portal navy `#1B365D` with hero teal `#C8E4E8`. Never cross-pollinate accents within the same section.

Text hierarchy uses `#050505` (ink), `#1C2B33` (Dolly primary), `#65676B` (secondary) and `#5D6C7B` (slate). Borders are `#DEE3E9` (Dolly), `#CED0D4` (FDS), `#CBD2D9` (CTA outline).

## Typography

Optimistic VF (Dalton Maag, commissioned) is the cornerstone — humanist sans with geometric underpinnings. Weight 500 (Medium) dominates display, with weight 300 (Light) as the unexpected airy variant at 28px sub-heads. `ss01` + `ss02` stylistic sets activate Meta-specific glyphs on display text. Negative letter-spacing tightens at smaller UI sizes (-0.14px to -0.16px); display sizes use 0. Helvetica handles utility text at 12px (footer / legal).

## Layout

8px base, scale 1/4/8/10/12/14/16/24/32/40/48/64/80. Max container 1440px. Product grid 3-up desktop / 2-up tablet / 1-up mobile, 24px gap. Section vertical padding 64–80px (premium luxury signifier). Page horizontal padding scales 24–40px.

## Elevation & Depth

Primarily flat — surface differentiation comes from background color (white → soft gray → dark), not shadows. When shadows appear, they use a dual-pattern: large diffused ambient + small sharp direct. Resting cards `0 2px 4px 0 rgba(0,0,0,0.1)`; elevated cards `0 12px 28px 0 rgba(0,0,0,0.2), 0 2px 4px 0 rgba(0,0,0,0.1)`. Modal backdrop `rgba(0,0,0,0.6)`. Frosted glass nav uses `rgba(241,244,247,0.8)` with backdrop blur. Glimmer skeleton (`#979A9F` pulsating 0.25→1.0) covers loading states.

## Shapes

8px (inputs, glimmer placeholders) → 20px (standard cards, `--card-corner-radius`) → 24px (feature cards, ghost buttons) → 100px (fully rounded pills for buttons, tags, badges). Card radius stays consistent across breakpoints.

## Components

**Primary pill** — Meta Blue `#0064E0` fill, white text, 100px radius, 10/22 padding, hover `#0143B5` with `scale(1.1)`, pressed `#004BB9` with `scale(0.9)` and 0.5 opacity, 3px focus ring. **Secondary outlined pill** — transparent fill, `#1C2B33` 50% text, 2px `rgba(10,19,23,0.12)` border, 100px radius. **Disabled** — `#DEE3E9` fill, `#8595A4` text. **Ghost link** — transparent, `#385898` text, 24px radius.

**Cards** — white or `#F7F8FA` flat fill, 20px standard radius (24px for feature), elevated dual-shadow stack, hover `translateY(-2px)`. **Inputs** — white fill, `1px solid #CED0D4` border, 8px radius, focus blue ring. **Nav** — frosted-glass `rgba(241,244,247,0.8)` background with backdrop blur, sticky 56px desktop / 48px mobile, blue pill CTA right.

**Product-themed sections** apply their own surface and accent: Quest dark + purple, Ray-Ban warm linen + red, Portal teal-blue palette with navy accents.

## Do's and Don'ts

**Do**
- Use 100px pill radius for all primary and secondary CTAs
- Let product photography dominate — make images the visual hero of every section
- Alternate light and dark surface sections to create gallery rhythm
- Use Optimistic VF with `ss01`+`ss02` features for all display text
- Apply Meta Blue `#0064E0` exclusively for actionable elements
- Use generous whitespace (64–80px section padding) to convey premium feel
- Apply gradient overlay (`rgba(0,0,0,0)`→`rgba(0,0,0,0.6)`) when placing text over product photography
- Use the dual-shadow pattern (ambient + direct) when elevation is needed

**Don't**
- Use sharp corners (<8px radius) — the Meta Store is all smooth curves
- Mix product-specific accents (Ray-Ban Red with Quest Purple) in the same section
- Use Facebook Blue `#1877F2` as a primary CTA — Meta Blue `#0064E0` only
- Use weight 300 below 28px — it becomes too thin
- Place important text directly on photography without a gradient scrim
- Crowd product images — generous padding around all photography
- Use long paragraphs — limit body copy to 2–3 lines per block

## Agent Prompt Guide

**Bias toward** — pure-white canvas alternated with deep `#1C1E21` dark sections, Optimistic VF with `ss01`+`ss02`, Meta Blue `#0064E0` pill CTAs, photography as visual hero, dual-shadow elevation, 64–80px section padding, product-themed accent systems used in isolation.

**Reject** — Facebook Blue as primary CTA, sharp corners on interactive elements, mixed product accents within one section, decorative borders, weight 300 below 28px, dense data-table chrome, paragraphs over 3 lines.
