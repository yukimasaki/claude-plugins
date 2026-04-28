---
version: alpha
name: Composio
description: |
  Composio's interface is a nocturnal command center — a developer-focused darkness punctuated by electric cyan and deep cobalt signals. The canvas is an almost-pure black (`#0f0f0f`, hair warmer than #000 for eye comfort) where content floats inside barely-visible white-opacity containment borders (4–12% alpha). The visual language leans heavily into code-editor and terminal-window aesthetics: **abcDiatype** geometric sans for marketing voice, **JetBrains Mono** for technical credibility, with negative letter-spacing on monospace (-0.28 to -0.98px) for IDE-dense code. Heading line-heights are drastically tight (0.87–1.0) — large text feels dense and commanding rather than airy. Color is rationed like a rare resource: white for primary content, semi-transparent white for secondary, and brand cobalt (`#0007cd`) or electric cyan (`#00ffff` at 12% alpha) reserved for interactive moments and bioluminescent glows. The signature elevation move is a **hard-offset brutalist shadow** (`rgba(0,0,0,0.15) 4px 4px 0px 0px`) on select cards — a raw retro-computing edge that breaks the sleek darkness. Mood — nocturnal, technical, brutalist, luminous.

colors:
  primary: "#ffffff"
  primary-active: "#e0e0e0"
  brand-cobalt: "#0007cd"
  signal-blue: "#0089ff"
  ocean-blue: "#0096ff"
  electric-cyan: "#00ffff"
  ink: "#0a0a0a"
  body: "#ffffff"
  body-secondary: "#999999"
  body-tertiary: "#808080"
  muted: "#444444"
  phantom: "#333333"
  canvas: "#0f0f0f"
  surface-card: "#000000"
  surface-charcoal: "#2c2c2c"
  hairline-mist-12: "#1f1f1f"
  hairline-mist-10: "#1a1a1a"
  hairline-mist-08: "#161616"
  hairline-mist-06: "#101010"
  hairline-light: "#e0e0e0"
  on-primary: "#0a0a0a"
  on-dark: "#ffffff"

typography:
  display-xl:
    fontFamily: "abcDiatype, 'abcDiatype Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: 64px
    fontWeight: 400
    lineHeight: 0.87
    letterSpacing: 0
  display-lg:
    fontFamily: "abcDiatype, 'abcDiatype Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0
  display-md:
    fontFamily: "abcDiatype, 'abcDiatype Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0
  title-lg:
    fontFamily: "abcDiatype, 'abcDiatype Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0
  title-md:
    fontFamily: "abcDiatype, 'abcDiatype Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
  title-sm:
    fontFamily: "abcDiatype, 'abcDiatype Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
  body-lg:
    fontFamily: "abcDiatype, 'abcDiatype Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0
  body-md:
    fontFamily: "abcDiatype, 'abcDiatype Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "abcDiatype, 'abcDiatype Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.63
    letterSpacing: 0
  caption:
    fontFamily: "abcDiatype, 'abcDiatype Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.63
    letterSpacing: 0
  label:
    fontFamily: "abcDiatype, 'abcDiatype Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  overline:
    fontFamily: "abcDiatype, 'abcDiatype Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0.3px
  code-md:
    fontFamily: "'JetBrains Mono', 'JetBrains Mono Fallback', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: -0.32px
  code-sm:
    fontFamily: "'JetBrains Mono', 'JetBrains Mono Fallback', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: -0.28px
  code-overline:
    fontFamily: "'JetBrains Mono', 'JetBrains Mono Fallback', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0.7px
  code-micro:
    fontFamily: "'JetBrains Mono', 'JetBrains Mono Fallback', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0.55px
  button:
    fontFamily: "abcDiatype, 'abcDiatype Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 8px
  pill: 37px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 40px
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 8px 24px
  button-cyan-accent:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 8px 24px
  button-ghost-blue:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 10px
  button-ghost-charcoal:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 10px
  button-phantom:
    backgroundColor: "{colors.phantom}"
    textColor: "{colors.body-tertiary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 8px 16px
  card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-md}"
    rounded: "{rounded.sm}"
    padding: 24px
  card-brutalist:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-md}"
    rounded: "{rounded.sm}"
    padding: 24px
  code-block:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.on-dark}"
    typography: "{typography.code-sm}"
    rounded: "{rounded.sm}"
    padding: 16px
  metric-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.on-dark}"
    typography: "{typography.code-md}"
    rounded: "{rounded.sm}"
    padding: 24px
  text-input:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 10px 12px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    height: 64px
  brand-display:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body-secondary}"
    typography: "{typography.body-sm}"
    padding: 64px
---

## Overview

Composio's web presence is a nocturnal developer command center. The canvas is **Void Black** (`{colors.canvas}` — #0f0f0f) — not pure black, hair warmer for reduced eye strain on dark displays. Cards sit on **Pure Black** (`{colors.surface-card}` — #000000) creating a subtle depth distinction from the canvas. Content floats inside near-invisible white-opacity containment borders (4–12% alpha) — the system's primary depth mechanism, replacing shadows.

The visual language is a code-editor / terminal-window aesthetic. **abcDiatype** carries the marketing voice (geometric, precise, friendly) and **JetBrains Mono** carries the technical voice (credible, IDE-dense, with negative letter-spacing for compact code). Heading line-heights are drastically tight — 0.87 at 64px, 1.0 at 40–48px — making large text feel compressed and authoritative.

Color is rationed: white for primary content, semi-transparent white for secondary (Ghost / Whisper / Phantom layers), Composio Cobalt (`{colors.brand-cobalt}` — #0007cd) and Electric Cyan (`{colors.electric-cyan}` — #00ffff) reserved for interactive moments and bioluminescent glows. The signature move is a **hard-offset brutalist shadow** (`rgba(0,0,0,0.15) 4px 4px 0px 0px`) on select cards — a raw retro-computing edge that prevents the sleek darkness from feeling sterile.

Mood — nocturnal, technical, brutalist, luminous.

## Colors

The canvas is **Void Black** (`{colors.canvas}` — #0f0f0f), with cards on **Pure Black** (`{colors.surface-card}`) one shade darker for elevation distinction.

The **Border Mist** ladder is the system's signature containment grammar. In production these are `rgba(255,255,255,0.04 / 0.06 / 0.08 / 0.10 / 0.12)`; the frontmatter encodes near-black opaque approximations (`{colors.hairline-mist-04}` through `{colors.hairline-mist-12}`) but real implementations should use the alpha-on-canvas form to preserve the "barely-visible white edge" effect.

Text uses a four-tier white opacity ladder: Pure White for primary, Ghost (60% alpha), Whisper (50%), Phantom (20%). The frontmatter encodes Ghost and Whisper as opaque approximations; production should use the alpha forms.

**Composio Cobalt** (`{colors.brand-cobalt}` — #0007cd) anchors the brand identity with quiet intensity. **Signal Blue** (`{colors.signal-blue}` — #0089ff) and **Ocean Blue** (`{colors.ocean-blue}` — #0096ff) are bridge tones for button borders and focus states. **Electric Cyan** (`{colors.electric-cyan}` — #00ffff) carries the bioluminescent glow — applied at 12% alpha for button backgrounds and radial halos behind feature cards.

## Typography

**Two-font identity**: abcDiatype (geometric sans) for marketing, JetBrains Mono for code and technical labels. The dual personality is the point — switching to a single font would dilute the "tool built by developers" message.

- Display sizes (64 / 48 / 40px) use weight 400 with ultra-tight line-heights (0.87–1.0)
- Most text is weight 400; weight 500 is reserved for small labels, badges, select card titles
- Weight 700 (bold) appears only in microscopic system-monospace contexts
- JetBrains Mono uses **negative letter-spacing** (-0.28 to -0.32px) for IDE-dense code feel
- Uppercase + positive letter-spacing (`{typography.overline}` 0.3px, `{typography.code-overline}` 0.7px, `{typography.code-micro}` 0.55px) is reserved for tiny overline tags only — never on headings

## Layout

- Spacing base 8px with sub-base values (1 / 2 / 4 / 6) for fine adjustments
- Section padding generous: 80–120px between major sections
- Card internal padding 24–32px
- Max content width ~1200px centered
- Hero: single-column centered for maximum impact
- Feature sections: asymmetric mixing text blocks with product screenshots
- Below 768px: single column, hamburger nav, hero scales 64 → 40 → 28px

The whitespace philosophy is **breathing room between sections, dense within components**. Cards and text blocks are internally compact (tight line-heights, minimal padding) creating focused information nodes; sections are separated by large vertical gaps. Border-opacity differences and subtle background shifts delineate content zones rather than relying solely on whitespace.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Page background, inline text |
| Contained | `rgba(255,255,255,0.04–0.08)` border, no shadow | Background groupings, subtle sections |
| Card | `rgba(255,255,255,0.10–0.12)` border, no shadow | Standard content cards, code blocks |
| Brutalist | `rgba(0,0,0,0.15) 4px 4px 0px 0px` hard-offset shadow | Select interactive cards, feature highlights |
| Floating | `rgba(0,0,0,0.5) 0px 8px 32px` soft diffuse | Modals, overlays, deeply elevated content |

The shadow philosophy is **deliberate contrast**. The hard-offset brutalist shadow is the signature — raw, almost retro-computing — applied sparingly to highlight select cards. Most depth is communicated through Border Mist opacity gradations rather than shadows.

**Decorative depth**:
- **Cyan Glow Halos** — radial gradients with Electric Cyan at low alpha behind feature cards, creating "screen glow" emission
- **Blue-to-Black Fades** — linear gradients from Composio Cobalt to Void Black for hero backgrounds
- **White Fog Horizon** — bottom-of-page gradient transitioning dark to diffused white/gray, an atmospheric "dawn" before the footer

## Shapes

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0 | Reserved |
| `{rounded.xs}` | 2px | Inline code spans, small tags, pre blocks (sharpest, signals technical precision) |
| `{rounded.sm}` | 4px | Content cards, images, standard containers (workhorse) |
| `{rounded.md}` | 8px | Larger interactive containers |
| `{rounded.pill}` | 37px | Select buttons and badges (softer, more approachable for key CTAs) |
| `{rounded.full}` | 9999px / 50% | Circular elements, decorative dots |

Border-radius larger than 4px on content cards is intentionally avoided — the precision of near-square corners is part of the technical identity.

## Components

**`button-primary`** — White fill, near-black text, 8/24 padding, 4px radius. The dominant CTA — buttons carry their own surface even on the darkest backgrounds.

**`button-cyan-accent`** — Production: Electric Cyan at 12% alpha background with 1px solid Ocean Blue border. Creates a "glowing from within" effect on dark.

**`button-ghost-blue`** / **`button-ghost-charcoal`** — Transparent fill with thin Signal Blue or Charcoal border. 10px balanced padding for secondary actions.

**`button-phantom`** — Phantom-white background (20% alpha in production) with whisper-white text — deeply de-emphasized actions.

**`card`** — Pure Black background, Border Mist 10–12 white-opacity border, 4px radius. Title in `{typography.title-md}` (24px / 500), body in `{typography.body-md}` with Ghost White (60% alpha).

**`card-brutalist`** — Same as `card` but with the hard-offset shadow (`rgba(0,0,0,0.15) 4px 4px 0px 0px`). Used on select interactive feature cards.

**`code-block`** — JetBrains Mono on Pure Black with Border Mist 10. Carries syntax-highlighted content with white and cyan tokens; horizontal scroll on small viewports rather than wrapping.

**`metric-card`** — Stat / metric display ("10k+" pattern) in JetBrains Mono with subtle label beneath in abcDiatype.

**`text-input`** — Transparent or Pure Black, Border Mist 10, 4px radius. Focus border shifts to Signal Blue or Electric Cyan; placeholder uses Ghost White.

**`top-nav`** — Sticky on Void Black, white wordmark left, 4–5 abcDiatype 16px white nav links, white-fill primary CTA right. Border Mist 06–08 bottom border. Mobile collapses to hamburger.

**`brand-display`** — Oversized "COMPOSIO" wordmark used as section divider / brand statement. Largest text on the page, stark white on black.

**`footer`** — Void Black with secondary text in Ghost White.

## Do's and Don'ts

**Do**
- Use Void Black (`{colors.canvas}` — #0f0f0f) as canvas — never pure white
- Keep heading line-heights ultra-tight (0.87–1.0)
- Use white-opacity Border Mist (4–12% alpha) for containment — borders matter more than shadows here
- Reserve Electric Cyan for high-signal moments — CTAs, glows, accents at 12% alpha
- Pair abcDiatype with JetBrains Mono — the dual identity is the developer-tool signal
- Use the hard-offset shadow (`4px 4px 0`) intentionally on select cards for brutalist edge
- Keep button text near-black even on darkest backgrounds — buttons carry their own surface
- Use uppercase + letter-spacing only for tiny overline labels (12px or smaller)
- Use negative letter-spacing on JetBrains Mono code blocks for IDE density

**Don't**
- Don't use light surfaces as primary containers
- Don't apply heavy shadows everywhere — depth comes from border opacity
- Don't use Composio Cobalt as text color — too dark on dark, too saturated on light
- Don't increase heading line-heights beyond 1.2 — compression is core
- Don't use weight 700 for body or heading — 400–500 is the ceiling
- Don't mix warm colors — the palette is strictly cool
- Don't use border-radius larger than 4px on content cards
- Don't place Electric Cyan at full opacity on large surfaces — it's an accent, max 12%
- Don't use decorative serif or handwritten fonts — geometric sans + monospace only
- Don't skip JetBrains Mono on technical content — it's a credibility signal

## Agent Prompt Guide

**Bias toward** — Void Black canvas, abcDiatype + JetBrains Mono dual identity, ultra-tight display line-heights (0.87–1.0), Border Mist white-opacity containment (4–12%), hard-offset brutalist shadow on select cards, Electric Cyan at 12% for bioluminescent glows, white-fill primary CTAs, monochrome hierarchy with rationed color.

**Reject** — pure white canvas, light surfaces as primary containers, heavy drop shadows on everything, weight 700 body/heading, warm colors, border-radius > 4px on content cards, Electric Cyan at full opacity on large surfaces, decorative serifs/scripts, missing monospace on technical content.
