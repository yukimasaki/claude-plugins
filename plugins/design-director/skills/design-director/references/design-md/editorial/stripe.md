---
version: alpha
name: Stripe
description: |
  Stripe's website is the gold standard of fintech design — simultaneously technical and luxurious, precise and warm. The page opens on clean white canvas (`#ffffff`) with **deep navy headings (`#061b31`)** instead of black, and a signature **purple (`#533afd`)** that functions as both brand anchor and interactive accent. The custom **`sohne-var`** variable font with OpenType **`"ss01"` enabled globally** is the defining typographic element — every text element runs ss01, transforming sohne-var into Stripe's distinct geometric face. The headline weight is **300 (light)** at display sizes — confidence through lightness, not weight. **`"tnum"` tabular numerals** appear in financial data displays. Negative letter-spacing tightens proportionally with size: -1.4px at 56px, -0.96px at 48px, -0.64px at 32px. The signature visual move is the **blue-tinted multi-layer shadow** — `rgba(50,50,93,0.25)` at distance + `rgba(0,0,0,0.1)` close — creating shadows with a cool atmospheric depth that ties to the navy-purple brand palette. Border-radius stays conservatively in the **4–8px** range; never pill, never harsh. Ruby (`#ea2261`) and magenta (`#f96bee`) accents appear in decorative gradients only. Mood — premium, technical, atmospheric, type-foundry-grade.

colors:
  primary: "#533afd"
  primary-hover: "#4434d4"
  primary-deep: "#2e2b8c"
  primary-light: "#b9b9f9"
  primary-mid: "#665efd"
  ink: "#061b31"
  body: "#64748d"
  label: "#273951"
  canvas: "#ffffff"
  surface: "#ffffff"
  surface-dark: "#1c1e54"
  surface-darkest: "#0d253d"
  hairline: "#e5edf5"
  hairline-soft: "#f6f9fc"
  hairline-purple: "#b9b9f9"
  hairline-soft-purple: "#d6d9fc"
  hairline-magenta: "#ffd7ef"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  link: "#533afd"
  accent-ruby: "#ea2261"
  accent-magenta: "#f96bee"
  accent-magenta-soft: "#ffd7ef"
  success: "#15be53"
  success-text: "#108c3d"
  warning: "#9b6829"
  info: "#2874ad"

typography:
  display-hero:
    fontFamily: "sohne-var, 'SF Pro Display', -apple-system, system-ui, sans-serif"
    fontSize: 56px
    fontWeight: 300
    lineHeight: 1.03
    letterSpacing: -1.4px
  display-lg:
    fontFamily: "sohne-var, 'SF Pro Display', -apple-system, system-ui, sans-serif"
    fontSize: 48px
    fontWeight: 300
    lineHeight: 1.15
    letterSpacing: -0.96px
  section-heading:
    fontFamily: "sohne-var, 'SF Pro Display', -apple-system, system-ui, sans-serif"
    fontSize: 32px
    fontWeight: 300
    lineHeight: 1.10
    letterSpacing: -0.64px
  sub-heading-lg:
    fontFamily: "sohne-var, 'SF Pro Display', -apple-system, system-ui, sans-serif"
    fontSize: 26px
    fontWeight: 300
    lineHeight: 1.12
    letterSpacing: -0.26px
  sub-heading:
    fontFamily: "sohne-var, 'SF Pro Display', -apple-system, system-ui, sans-serif"
    fontSize: 22px
    fontWeight: 300
    lineHeight: 1.10
    letterSpacing: -0.22px
  body-lg:
    fontFamily: "sohne-var, 'SF Pro Display', -apple-system, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 300
    lineHeight: 1.40
    letterSpacing: 0
  body:
    fontFamily: "sohne-var, 'SF Pro Display', -apple-system, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  button:
    fontFamily: "sohne-var, 'SF Pro Display', -apple-system, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.00
    letterSpacing: 0
  button-sm:
    fontFamily: "sohne-var, 'SF Pro Display', -apple-system, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.00
    letterSpacing: 0
  link:
    fontFamily: "sohne-var, 'SF Pro Display', -apple-system, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.00
    letterSpacing: 0
  caption:
    fontFamily: "sohne-var, 'SF Pro Display', -apple-system, system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  caption-tabular:
    fontFamily: "sohne-var, 'SF Pro Display', -apple-system, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: -0.36px
  micro:
    fontFamily: "sohne-var, 'SF Pro Display', -apple-system, system-ui, sans-serif"
    fontSize: 10px
    fontWeight: 300
    lineHeight: 1.15
    letterSpacing: 0.1px
  mono-code:
    fontFamily: "SourceCodePro, 'SFMono-Regular', ui-monospace, monospace"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 2.00
    letterSpacing: 0
  mono-bold:
    fontFamily: "SourceCodePro, 'SFMono-Regular', ui-monospace, monospace"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 2.00
    letterSpacing: 0

rounded:
  none: 0px
  xs: 1px
  sm: 4px
  md: 5px
  lg: 6px
  xl: 8px

spacing:
  "0": 0px
  "1": 1px
  "2": 2px
  "3": 4px
  "4": 6px
  "5": 8px
  "6": 10px
  "7": 12px
  "8": 14px
  "9": 16px
  "10": 18px
  "11": 20px
  section: 64px
  section-lg: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 8px 16px
  button-ghost:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 8px 16px
  button-info:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.info}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 8px 16px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  card-feature:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 32px
  card-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 32px
  input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
  badge-neutral:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: 0px 6px
  badge-success:
    backgroundColor: "{colors.hairline-soft}"
    textColor: "{colors.success-text}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: 1px 6px
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.link}"
    rounded: "{rounded.lg}"
    padding: 8px 16px
---

## Overview

Stripe's marketing surface is what happens when a financial institution is redesigned by a world-class type foundry. The cool/precise side: deep navy `#061b31` headings (never `#000`), conservative 4–8px button radii, blue-tinted shadow stacks. The premium/warm side: sohne-var weight 300 at display sizes — extraordinary lightness for headlines that creates an ethereal, almost whispered authority. Where everyone else shouts at 700+, Stripe is so confident it whispers at 300.

Mood — premium, technical, atmospheric, type-foundry-grade.

## Colors

**Stripe Purple** (`#533afd`) is the brand anchor — every primary CTA, every link, every active state. **Deep Navy** (`#061b31`) is the heading color — warm, premium, financial-grade. The purple family extends through hover (`#4434d4`), deep (`#2e2b8c`), light (`#b9b9f9`), and mid (`#665efd`).

**Brand Dark** (`#1c1e54`) is the immersive dark-section background — not black, not gray, but a deep branded indigo. Dark Navy (`#0d253d`) provides the darkest neutral for maximum depth.

**Decorative accents** (`#ea2261` ruby, `#f96bee` magenta) appear in gradients and hero decorations only — never on buttons or links. **Magenta Light** (`#ffd7ef`) is the tinted-pink surface for magenta-themed cards.

The signature **shadow color is `rgba(50,50,93,0.25)`** — a blue-tinted primary that echoes the navy palette, paired with `rgba(0,0,0,0.1)` close-shadow for parallax depth.

## Typography

**`sohne-var` with `"ss01"` everywhere** is the brand's typographic DNA. The ss01 stylistic set modifies specific glyphs (alternate `a`, `g`, `l` forms) to create a more geometric feel. Skipping ss01 turns it into generic sohne — the alternate forms ARE the personality.

**Weight 300 at display sizes** is Stripe's most distinctive typographic choice. The lightness IS the luxury. Buttons and links use weight 400 (slightly heavier for interaction). Bold (700) appears only in SourceCodePro for code contrast.

**Two OpenType modes**: `"ss01"` for display/body text, `"tnum"` for tabular numerals in financial data — they never overlap. A number in a paragraph runs ss01; a number in a data table runs tnum.

**Progressive tracking**: -1.4px at 56px → -0.96px at 48px → -0.64px at 32px → -0.26px at 26px → 0 at 16px and below.

**SourceCodePro** at 12px / weight 500 / 2.00 line-height (very generous) handles code blocks. The relaxed line-height is intentional — code is meant to be read carefully.

## Layout

8px base, but the scale is dense at the small end (every 2px from 4–12). This reflects Stripe's precision UI for financial data. Section vertical rhythm sits at 64–96px. Max content width approximately 1080px (tighter than most marketing systems — Stripe values measured density).

White sections alternate with dark brand sections (`#1c1e54`), creating a dramatic light/dark cadence that prevents monotony without introducing arbitrary color.

## Elevation & Depth

**Blue-tinted multi-layer shadows** are the system's signature.

| Level | Treatment | Use |
|---|---|---|
| Flat (0) | No shadow | Page background, inline text |
| Ambient (1) | `rgba(23,23,23,0.06) 0px 3px 6px` | Subtle card lift, hover hints |
| Standard (2) | `rgba(23,23,23,0.08) 0px 15px 35px` | Standard cards |
| Elevated (3) | `rgba(50,50,93,0.25) 0px 30px 45px -30px, rgba(0,0,0,0.1) 0px 18px 36px -18px` | Featured cards, dropdowns, popovers |
| Deep (4) | `rgba(3,3,39,0.25) 0px 14px 21px -14px, rgba(0,0,0,0.1) 0px 8px 17px -8px` | Modals, floating panels |
| Focus | `2px solid #533afd` | Keyboard focus |

The multi-layer approach pairs the blue-tinted shadow at distance with a neutral close-shadow, creating parallax depth where the branded shadow sits farther from the element. Negative spread values (-30px, -18px) keep elevation vertical and controlled.

## Shapes

**Conservative 4–8px range** — never pill, never harsh.

- **xs (1px)**: fine-grained subtle rounding
- **sm (4px)**: buttons, inputs, badges — the workhorse
- **md (5px)**: standard card containers
- **lg (6px)**: navigation, larger interactive elements
- **xl (8px)**: featured cards, hero elements

Pill shapes (12px+ or 9999px) are explicitly off-system. Stripe's conservative rounding signals "professional financial software," not consumer app.

## Components

**Button primary**: `#533afd` Stripe Purple fill, white text, **4px radius**, 8×16 padding, sohne-var 16px / weight 400 / `"ss01"`. Hover shifts to `#4434d4`.

**Button ghost / outlined**: white fill, `#533afd` text, 1px solid `#b9b9b9` border, 4px radius. Hover shifts background to `rgba(83,58,253,0.05)`.

**Button info**: white fill, `#2874ad` text, 1px solid `rgba(43,145,223,0.2)` border, 4px radius. Tertiary informational action.

**Card**: white fill, 1px solid `#e5edf5` border, **6px radius** (or **5px / 8px** for tighter / featured). Standard cards use the multi-layer blue-tinted shadow at Level 3.

**Card dark**: `#1c1e54` Brand Dark fill, white text, 6px radius. The immersive dark section card.

**Input**: white fill, ink text, 1px solid `#e5edf5` border, 4px radius. Focus shifts to `1px solid #533afd`.

**Badge neutral**: white fill, ink text, 1px solid `#f6f9fc` border, 4px radius, 11px / weight 400.

**Badge success**: `rgba(21,190,83,0.2)` background (approximated here using the soft hairline tone), `#108c3d` text, 4px radius, 1×6 padding, 10px / weight 300.

**Nav bar**: white sticky header with backdrop blur, sohne-var 14px / weight 400 links with `"ss01"`, 6px radius on the container.

## Do's and Don'ts

**Do**

- Set `font-feature-settings: "ss01"` on every sohne-var text element
- Use weight 300 for all headlines and body text — lightness is the signature
- Apply blue-tinted shadows (`rgba(50,50,93,0.25)`) for elevated elements
- Use `#061b31` deep navy for headings instead of `#000` — the warmth matters
- Keep border-radius between 4–8px — conservative rounding is intentional
- Use `"tnum"` for any tabular / financial number display
- Layer shadows: blue-tinted far + neutral close for depth parallax
- Use `#533afd` purple as the primary interactive / CTA color
- Use `#1c1e54` Brand Dark for dark sections — not black, not gray

**Don't**

- Don't use weight 600–700 for sohne-var headlines — 300 is the brand voice
- Don't use large border-radius (12px+, pill shapes)
- Don't use neutral gray shadows — always tint with blue
- Don't skip `"ss01"` — the alternate glyphs define personality
- Don't use pure black for headings — `#061b31` deep navy
- Don't use warm accent colors for interactive elements — purple is primary
- Don't apply positive letter-spacing at display sizes
- Don't use ruby/magenta for buttons or links — they are decorative-only

## Agent Prompt Guide

**Bias toward** — sohne-var with `"ss01"` globally, weight 300 at display, deep navy `#061b31` headings, Stripe Purple `#533afd` for primary actions, blue-tinted multi-layer shadows, conservative 4–8px radii, `#1c1e54` Brand Dark for immersive sections, SourceCodePro at 2.00 line-height for code, `"tnum"` for financial numbers.

**Reject** — bold (600+) headings, pill or large radii, neutral gray shadows, pure black text, warm accent colors on interactive elements, ruby/magenta buttons, positive letter-spacing on display, missing `"ss01"`.
