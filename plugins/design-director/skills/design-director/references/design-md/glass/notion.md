---
version: alpha
name: Notion
description: |
  Notion's website embodies the philosophy of the tool itself — a blank canvas that gets out of your way. The system anchors on **warm neutrals** rather than cold grays so the page reads like quality paper, not sterile glass. Canvas is pure white (`#ffffff`) but text is a warm near-black (encoded as `#0a0a0a`, in production `rgba(0,0,0,0.95)` for the micro-warmth). The warm gray scale (`#f6f5f4` / `#31302e` / `#615d59` / `#a39e98`) carries subtle yellow-brown undertones for tactile, almost analog warmth. The custom **NotionInter** (modified Inter) runs aggressive negative letter-spacing at display sizes (-2.125px at 64px), with OpenType `"lnum"` and `"locl"` enabled on display text. The signature move is **whisper borders**: `1px solid rgba(0,0,0,0.1)` everywhere instead of heavy borders or shadows, paired with multi-layer shadow stacks that never exceed 0.05 opacity per layer — depth that's felt rather than seen. Notion Blue (`#0075de`) is the only saturated color in core UI chrome. Mood — warm, calm, paper-like, restrained.

colors:
  primary: "#0075de"
  primary-active: "#005bab"
  primary-focus: "#097fe8"
  ink: "#0a0a0a"
  body: "#0a0a0a"
  body-strong: "#0a0a0a"
  muted: "#615d59"
  muted-soft: "#a39e98"
  canvas: "#ffffff"
  surface-warm: "#f6f5f4"
  surface-dark: "#31302e"
  hairline: "#e0e0e0"
  hairline-input: "#dddddd"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  link: "#0075de"
  link-on-dark: "#62aef0"
  badge-blue-bg: "#f2f9ff"
  badge-blue-text: "#097fe8"
  brand-navy: "#213183"
  accent-teal: "#2a9d99"
  accent-green: "#1aae39"
  accent-orange: "#dd5b00"
  accent-pink: "#ff64c8"
  accent-purple: "#391c57"
  accent-brown: "#523410"
  success: "#1aae39"
  warning: "#dd5b00"
  error: "#dd5b00"

typography:
  display-xl:
    fontFamily: "NotionInter, Inter, -apple-system, system-ui, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: -2.125px
  display-lg:
    fontFamily: "NotionInter, Inter, -apple-system, system-ui, sans-serif"
    fontSize: 54px
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: -1.875px
  display-md:
    fontFamily: "NotionInter, Inter, -apple-system, system-ui, sans-serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: -1.5px
  display-sm:
    fontFamily: "NotionInter, Inter, -apple-system, system-ui, sans-serif"
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  title-lg:
    fontFamily: "NotionInter, Inter, -apple-system, system-ui, sans-serif"
    fontSize: 26px
    fontWeight: 700
    lineHeight: 1.23
    letterSpacing: -0.625px
  title-md:
    fontFamily: "NotionInter, Inter, -apple-system, system-ui, sans-serif"
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.27
    letterSpacing: -0.25px
  body-lg:
    fontFamily: "NotionInter, Inter, -apple-system, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: -0.125px
  body-md:
    fontFamily: "NotionInter, Inter, -apple-system, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-emphasis:
    fontFamily: "NotionInter, Inter, -apple-system, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  body-strong:
    fontFamily: "NotionInter, Inter, -apple-system, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0
  nav-link:
    fontFamily: "NotionInter, Inter, -apple-system, system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: 0
  caption:
    fontFamily: "NotionInter, Inter, -apple-system, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    letterSpacing: 0
  caption-light:
    fontFamily: "NotionInter, Inter, -apple-system, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  badge:
    fontFamily: "NotionInter, Inter, -apple-system, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: 0.125px
  micro:
    fontFamily: "NotionInter, Inter, -apple-system, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0.125px

rounded:
  xs: 4px
  sm: 5px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 80px
  section-lg: 120px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.xs}"
    padding: 8px 16px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.xs}"
  button-secondary:
    backgroundColor: "{colors.surface-warm}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.xs}"
    padding: 8px 16px
  button-ghost:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
  badge-pill:
    backgroundColor: "{colors.badge-blue-bg}"
    textColor: "{colors.badge-blue-text}"
    typography: "{typography.badge}"
    rounded: "{rounded.pill}"
    padding: 4px 8px
  card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-featured:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: 32px
  card-warm:
    backgroundColor: "{colors.surface-warm}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 32px
  metric-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-sm}"
    rounded: "{rounded.lg}"
    padding: 32px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 6px 12px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 64px
  feature-section-warm:
    backgroundColor: "{colors.surface-warm}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: 80px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption-light}"
    padding: 64px
---

## Overview

Notion is the textbook example of warm-neutral minimalism. The page sits on pure white (`{colors.canvas}` — #ffffff) but the text is a warm near-black — encoded here as `{colors.ink}` (#0a0a0a), but in production specifically `rgba(0,0,0,0.95)` for the imperceptible micro-warmth that softens the reading experience. The warm gray scale (#f6f5f4 / #31302e / #615d59 / #a39e98) carries subtle yellow-brown undertones, giving the interface a tactile, almost analog warmth.

The custom **NotionInter** font (a modified Inter) is the backbone. At 64px it carries -2.125px letter-spacing — the most aggressive compression in the system — relaxing progressively to -0.125px at 20px and 0 at body size. OpenType `"lnum"` (lining numerals) and `"locl"` (localized forms) are enabled at display sizes for typographic sophistication.

The signature move is **whisper borders**: `1px solid rgba(0,0,0,0.1)` everywhere — borders that exist as barely-perceptible division lines, not weighty walls. The shadow system is equally restrained: multi-layer 4-to-5-layer stacks with cumulative opacity never exceeding 0.05 per layer, creating depth that's felt rather than seen.

Mood — warm, calm, paper-like, restrained.

## Colors

Canvas is pure white. Ink is `{colors.ink}` (#0a0a0a) — the frontmatter approximation of the production `rgba(0,0,0,0.95)` near-black with micro-warmth. The warm gray scale is the system's signature: `{colors.surface-warm}` (#f6f5f4) for alternating section backgrounds, `{colors.surface-dark}` (#31302e) for occasional dark feature surfaces, `{colors.muted}` (#615d59) for secondary text, `{colors.muted-soft}` (#a39e98) for placeholder / disabled / caption.

**Notion Blue** (`{colors.primary}` — #0075de) is the only saturated color in core UI chrome. It carries every primary CTA, every link, the focus ring (`{colors.primary-focus}` — #097fe8). The `{colors.brand-navy}` (#213183) appears sparingly for emphasis. The accent palette (teal / green / orange / pink / purple / brown) is reserved for decorative feature sections, never UI chrome.

The whisper hairline (`{colors.hairline}` — #e0e0e0) is the opaque approximation of the production `rgba(0,0,0,0.1)` — in real implementations use the alpha form for true whisper-weight division.

## Typography

NotionInter (Inter fallback) carries the system. **Four weights**: 400 (body / reading), 500 (UI / interactive), 600 (emphasis / nav), 700 (display / heading). The broader weight range allows nuanced hierarchy.

- Display sizes (64 / 54 / 48px) use weight 700 with -2.125 / -1.875 / -1.5px letter-spacing — aggressive compression for billboard headlines
- Sub-headings (26 / 22px) use weight 700 with -0.625 / -0.25px tracking — denser sub-section heads
- Body (16px) uses 400 (read), 500 (UI emphasis), 600 (strong), 700 (heading-at-body-size)
- Badge text (12px / 600) uses **positive** letter-spacing (0.125px) — the only positive tracking in the system, for legibility at small sizes

Line-height tightens as size increases: 1.50 at body, 1.23–1.27 at sub-headings, 1.00–1.04 at display. OpenType `"lnum"` and `"locl"` are enabled on display.

## Layout

- Spacing base 8px (with organic micro-fractional values 5.6 / 6.4 for fine adjustments)
- Max content width ~1200px centered
- Hero: single-column centered with 80–120px top padding
- Feature sections: 2–3 column card grids
- **Warm alternation**: white sections alternate with `{colors.surface-warm}` (#f6f5f4) sections — subtle yellow-brown undertone creates rhythm without harsh color shift
- Section spacing 64–120px desktop → 48px mobile

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Page background, text blocks |
| Whisper | 1px `{colors.hairline}` (production: `rgba(0,0,0,0.1)`) | Standard borders, card outlines, dividers |
| Soft Card | 4-layer shadow stack, max per-layer opacity 0.04 | Content cards, feature blocks |
| Deep Card | 5-layer shadow stack, max per-layer opacity 0.05, 52px blur | Modals, featured panels, hero elements |
| Focus | 2px solid `{colors.primary-focus}` outline + shadow | Keyboard focus on interactive elements |

The **multi-layer shadow stack** is the signature elevation technique. The 4-layer card shadow spans 1.04 → 18px blur with cumulative low opacity (0.01–0.04) creating a gradient of depth rather than a single hard shadow. The 5-layer deep shadow extends to 52px blur, producing ambient occlusion that feels like natural light. Elements feel embedded in the page rather than floating above it.

## Shapes

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Buttons, inputs, functional interactive elements |
| `{rounded.sm}` | 5px | Links, list items, menu items |
| `{rounded.md}` | 8px | Small cards, containers, inline elements |
| `{rounded.lg}` | 12px | Standard cards, feature containers, image tops |
| `{rounded.xl}` | 16px | Hero cards, featured content |
| `{rounded.pill}` | 9999px | Badges, pills, status indicators |
| `{rounded.full}` | 9999px / 50% | Avatars, tab indicators |

The notable choice is **`{rounded.xs}` (4px) on buttons**. Notion does not use pill CTAs; the 4px functional radius keeps buttons feeling utility-grade.

## Components

**`button-primary`** — Notion Blue fill (`{colors.primary}`), white text, 4px radius (subtle, not pill), 8/16 padding. Hover darkens to `{colors.primary-active}`; active state `transform: scale(0.9)`. Focus: 2px solid blue outline.

**`button-secondary`** — Translucent warm-gray fill (production `rgba(0,0,0,0.05)`, encoded as `{colors.surface-warm}` opaque approximation), near-black text, 4px radius.

**`button-ghost`** — Transparent fill, near-black text, underline on hover. Used for tertiary inline actions.

**`badge-pill`** — Tinted blue surface system. Background `{colors.badge-blue-bg}` (#f2f9ff), text `{colors.badge-blue-text}` (#097fe8), 9999px radius, 4/8 padding, 12px / 600 with positive 0.125px tracking. Used for status / "New" tags / feature labels.

**`card`** — White fill, whisper border, 12px radius, 4-layer shadow stack. Title in `{typography.title-md}` (22px / 700 / -0.25px), body in `{typography.body-md}` (16px / 400 / `{colors.muted}`).

**`card-warm`** — Alternate-section card on `{colors.surface-warm}` ground.

**`metric-card`** — Big-number display (e.g., "$4,200 ROI") at `{typography.display-sm}` (40px / 700) with descriptive caption below in `{colors.muted}`. Whisper-bordered container.

**`text-input`** — White fill, 1px `{colors.hairline-input}` (#dddddd) border, 4px radius, 6px padding, placeholder in `{colors.muted-soft}`. Focus: blue outline ring.

**`top-nav`** — White, not sticky. Brand logo + wordmark left, NotionInter 15px / 600 links, multi-level product dropdown, blue pill CTA right-aligned ("Get Notion free"). Mobile hamburger.

**`feature-section-warm`** — `{colors.surface-warm}` band for alternating sections, 80px vertical padding.

## Do's and Don'ts

**Do**
- Use warm neutrals — Notion's grays carry yellow-brown undertones, never blue-gray
- Set headlines in NotionInter at -2.125px (64px) → -1.5px (48px) → -0.25px (22px) → 0 (16px)
- Use the four-weight system: 400 (read), 500 (interact), 600 (emphasize), 700 (announce)
- Use whisper borders (`rgba(0,0,0,0.1)`) — never heavier
- Use multi-layer shadow stacks (4–5 layers) with per-layer opacity ≤ 0.05
- Alternate white sections with `{colors.surface-warm}` for visual rhythm
- Reserve pill radius (9999px) for badges and status indicators only
- Reserve `{colors.primary}` (Notion Blue) for primary CTAs and links — the only saturated color in core UI

**Don't**
- Don't use cold gray scales — every gray bends warm
- Don't use pill radius on action buttons — 4px is the button radius
- Don't use single-layer hard drop shadows — the system is multi-layer whisper
- Don't introduce a second saturated UI color — Notion Blue is the only one
- Don't use uppercase tracking on body or display — only the 12px badge has positive tracking
- Don't go heavier than `1px solid rgba(0,0,0,0.1)` on borders
- Don't omit the warm-white alternation — it's how the page breathes

## Agent Prompt Guide

**Bias toward** — pure-white canvas with warm-near-black ink, warm gray neutrals, NotionInter with aggressive negative letter-spacing on display, whisper borders (`rgba(0,0,0,0.1)`), 4-to-5-layer multi-shadow stacks, 4px button radius, pill badges for status, white-to-warm-white section alternation, single Notion Blue accent.

**Reject** — cold blue-gray neutrals, pill radius on action buttons, single-layer drop shadows, secondary saturated UI colors, heavy borders, uppercase tracking on body or display.
