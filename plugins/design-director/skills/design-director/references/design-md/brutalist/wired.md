---
version: alpha
name: WIRED
description: |
  WIRED's homepage feels like a printed broadsheet plugged into a wall socket. The grid is dense, the rules are thin, the type is loud, and almost every surface is paper-white or pure black with **no rounded corners** and no decoration that doesn't earn its place. Image rectangles butt directly against headlines, hairline dividers separate stories the way pica rules separate columns in a real magazine, and the only colors that aren't grayscale come from the photography itself. There are no cards with shadows — the entire layout is held by typographic weight and the discipline of rules and whitespace, the same way a Condé Nast print page would be assembled in a paste-up room. The signature typographic stack runs four faces with strict roles: **WiredDisplay** (custom serif) for shouting headlines (64px / 0.93 line-height), **BreveText** (humanist serif) for reading body, **Apercu** (geometric sans) for UI affordances, and **WiredMono** (custom monospace, always UPPERCASE) for the kickers / eyebrows / timestamps that mark every story. There is exactly one accent color: a saturated link blue (`#057dbc`) that lights up on hover like a CRT scanline. Mood — printerly, brutalist, editorial, restrained.

colors:
  primary: "#000000"
  primary-active: "#1a1a1a"
  ink: "#1a1a1a"
  body: "#1a1a1a"
  body-secondary: "#757575"
  body-disabled: "#999999"
  body-on-dark: "#ffffff"
  canvas: "#ffffff"
  canvas-dark: "#1a1a1a"
  surface-card: "#ffffff"
  hairline: "#e2e8f0"
  hairline-strong: "#000000"
  hairline-soft: "#4a5568"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  link-hover: "#057dbc"
  error: "#e53e3e"

typography:
  hero-display:
    fontFamily: "WiredDisplay, Georgia, 'Times New Roman', serif"
    fontSize: 64px
    fontWeight: 400
    lineHeight: 0.93
    letterSpacing: -0.5px
  display-md:
    fontFamily: "WiredDisplay, Georgia, 'Times New Roman', serif"
    fontSize: 26px
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: 0
  section-heading:
    fontFamily: "Apercu, Helvetica, Arial, sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.28px
  subheading:
    fontFamily: "Apercu, Helvetica, Arial, sans-serif"
    fontSize: 17px
    fontWeight: 700
    lineHeight: 1.29
    letterSpacing: -0.144px
  article-deck:
    fontFamily: "BreveText, Georgia, 'Times New Roman', serif"
    fontSize: 19px
    fontWeight: 400
    lineHeight: 1.47
    letterSpacing: 0.108px
  article-body:
    fontFamily: "BreveText, Georgia, 'Times New Roman', serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.09px
  ui-heading:
    fontFamily: "Apercu, Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0.3px
  button:
    fontFamily: "Apercu, Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0.3px
  link:
    fontFamily: "Apercu, Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.29
    letterSpacing: 0.4px
  eyebrow:
    fontFamily: "WiredMono, Monaco, 'Courier New', Courier, monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.23
    letterSpacing: 0.92px
  eyebrow-bold:
    fontFamily: "WiredMono, Monaco, 'Courier New', Courier, monospace"
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.23
    letterSpacing: 0.92px
  ribbon:
    fontFamily: "WiredMono, Monaco, 'Courier New', Courier, monospace"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 1.2px
  caption:
    fontFamily: "BreveText, Georgia, 'Times New Roman', serif"
    fontSize: 13px
    fontWeight: 700
    lineHeight: 2.2
    letterSpacing: 0.108px
  timestamp:
    fontFamily: "WiredMono, Monaco, 'Courier New', Courier, monospace"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 1.1px
  footer-link:
    fontFamily: "ProximaNova, Helvetica, Arial, sans-serif"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  inter-ui-heading:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.23
    letterSpacing: 0.108px

rounded:
  none: 0px
  pill-text: 1920px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 64px

components:
  button-primary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 12px 24px
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
  button-secondary:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 12px 24px
  text-link:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.link}"
  icon-button-circle:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 40px
  pill-text-span:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.eyebrow-bold}"
    rounded: "{rounded.pill-text}"
    padding: 4px 8px
  story-tile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    rounded: "{rounded.none}"
    padding: 24px
  feature-tile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.hero-display}"
    rounded: "{rounded.none}"
    padding: 32px
  ribbon-section-header:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.ribbon}"
    rounded: "{rounded.none}"
    padding: 8px 16px
    height: 40px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 12px 16px
  utility-bar:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.timestamp}"
    height: 32px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.link}"
    height: 64px
  footer:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.body-on-dark}"
    typography: "{typography.footer-link}"
    padding: 64px
---

## Overview

WIRED's homepage reads like a printed broadsheet plugged into a wall socket — dense grid, thin rules, loud type, and a discipline so strict that nothing without an editorial reason makes it onto the page. The canvas is **Paper White** (`{colors.canvas}` — #ffffff), uninterrupted, never tinted — treat it like newsprint stock. Headlines and body type sit in **Page Ink** (`{colors.ink}` — #1a1a1a), a near-black slightly softened so long-form reading doesn't feel like staring at a power button.

The signature move is the **typographic stack**: four faces with rigorously bound roles.
- **WiredDisplay** (custom serif) — display headlines and feature titles only, at 64px with -0.5px tracking and 0.93 line-height (descenders nearly touching)
- **BreveText** (humanist serif) — article body, decks, longer captions, with generous 1.47–1.50 line-heights
- **Apercu** (geometric sans) — UI labels, buttons, navigation
- **WiredMono** (custom monospace, **always UPPERCASE**) — kickers, eyebrows, timestamps, section labels, ribbon bars

That mono kicker — usually black caps with tracking wide enough to read as a Geiger-counter tick — is what makes a WIRED page instantly recognizable from across the room.

There is exactly one accent color: **Link Blue** (`{colors.link-hover}` — #057dbc), used only on hover. Everything else lives in pure grayscale — the design's confidence comes from refusing to invent more.

Mood — printerly, brutalist, editorial, restrained.

## Colors

The palette is intentionally minimal: WIRED Black (`{colors.primary}` — #000000) for ribbons / dividers / button borders / headline rules; Page Ink (`{colors.ink}` — #1a1a1a) for headlines and body — softer than pure black for reading comfort; Paper White (`{colors.canvas}`) as the canvas; Caption Gray (`{colors.body-secondary}` — #757575) for bylines / timestamps / metadata; and a single accent — **Link Blue** (`{colors.link-hover}` — #057dbc) — used only on hover, never as a background or button fill.

Hairline dividers use `{colors.hairline}` (#e2e8f0) for quiet `<hr>` separators and `{colors.hairline-strong}` (#000000) for printerly column rules. Footer Ink (`{colors.canvas-dark}` — #1a1a1a) is the only inverted region on the homepage; paper-white type sits on top.

WIRED uses **zero gradients**. The closest thing to a gradient on the page is the tonal range inside a photograph — gradients live in the imagery, not in the chrome. The system also intentionally omits semantic success / error / warning palettes — this is editorial, not a SaaS dashboard (the rare error red `{colors.error}` is borrowed for the Fides cookie banner only).

## Typography

**Four faces, four jobs**: WiredDisplay shouts, BreveText reads, Apercu clicks, WiredMono labels. They never trade roles — this separation is what keeps the page from feeling like a typography sample.

- Display type runs as low as **0.93 line-height** (descenders nearly touching), while body BreveText opens out to 1.47–1.50 — the contrast is the editorial fingerprint
- **Mono is always UPPERCASE** with 0.9–1.2px positive tracking. Lowercase mono on a WIRED page is broken
- **Bold is rare** — Apercu uses weight 700 only for UI emphasis; the editorial layer (Display + BreveText) leans entirely on size and ink color
- Letter-spacing has two registers: positive (0.9–1.2px) for ALL-CAPS mono, negative (-0.144 to -0.5px) for large display serif. Plain 0 letter-spacing is rare on the largest type

Substitutes: Playfair Display / Libre Caslon for WiredDisplay (loosen line-height +0.10 to +0.12 to prevent collisions with the 0.93 hero); Lora / Source Serif for BreveText; Inter / Work Sans for Apercu; Space Mono / JetBrains Mono for WiredMono.

## Layout

- Spacing base 8px with sub-base values (1 / 4 / 12 / 14.11 / 15 / 25.46 / 29.66 / 32 / 40 / 48 / 64)
- Section vertical padding 32–48px between major editorial blocks
- Story tile gutters 24–32px horizontal, 16–24px vertical (no card padding — there are no cards)
- Max content width 1280–1600px centered with generous outer margins
- 12-column grid resolving into 2 / 3 / 4 column story arrangements; feature blocks often run "1 large + 2 small" with hairline rules between
- Aggressive responsive tuning: dembrandt detected breakpoints at 1280 / 1025 / 1024 / 768 / 667 / 599 / 570 / 480 / 425 / 375 / 320 — Wired tunes its grid at almost every common viewport boundary
- Mobile: WiredDisplay hero scales 64 → 36–42px; mono kickers stay locked at 12–13px (any smaller becomes unreadable)

The whitespace philosophy is **editorial silence**, not airy spacing. WIRED breathes only enough to keep adjacent stories from arguing — never enough to suggest there's nothing on the page.

## Elevation & Depth

Depth is **flat by religion**. There is exactly one shadow token in the entire site (a default `0 0 0 transparent` placeholder) and no `box-shadow` is applied to story tiles, headers, modals, or cards. Depth is communicated by **rule weight** (1px hairline → 2px hard rule → solid black ribbon), not by simulated lighting.

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Default editorial surface — text on paper |
| Quiet hairline | 1px solid `{colors.hairline}` `<hr>` | Almost-invisible section divider |
| Editorial rule | 1px solid `{colors.hairline-strong}` | Printerly column divider |
| Hard border | 2px solid `{colors.hairline-strong}` | Buttons, inputs, ribbons — interactive emphasis |
| Black ribbon | `{colors.primary}` fill bar | Section labels — the most "elevated" surface |
| Inverted footer | `{colors.canvas-dark}` zone | The only inversion on the homepage |

No gradients, no glow, no halos, no scrim overlays beyond the standard photo caption gradient. Visual interest comes from photography and typographic contrast, not chrome.

## Shapes

WIRED has **the strictest corner discipline of any major editorial property**: exactly three radii on the entire site, two of them reserved for non-rectangular shapes.

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0 | Every container, every image, every button, every input — the default |
| `{rounded.pill-text}` | 1920px | Only inside text spans that need to look like a full pill ("BREAKING", "LIVE") |
| `{rounded.full}` | 9999px / 50% | Only on round icon buttons and circular author avatars |

`border-radius: 0` is law. Round = icons only. Pill = inline text spans only. Everything else is square.

Note: WIRED uses **2px hard black borders** on buttons / inputs / ribbons, which is a printerly, structural choice. DESIGN.md `components.*` does not allow a `border` sub-token, so the 2px treatment is documented in body text and applied at implementation time.

## Components

**`button-primary`** — Paper-white fill, WIRED Black text, **2px solid black border** (the printerly hard rule, not a 1px UI border), **square corners**, 12/24 padding. Apercu 16px / 700 / 0.3px tracking. Hover **inverts** to black background with white text — pure inversion, no easing on the rule.

**`button-secondary`** — Inverted: black fill, white text, 2px solid white border, square corners. Used in dark zones (footer, dark ribbon contexts).

**`text-link`** — Editorial inline link: `{colors.body}` text, underline always present, hover swaps color to `{colors.link-hover}` while keeping the underline. No padding, no border, no background.

**`icon-button-circle`** — The only circular shape on the site (50% radius), ~32–40px square footprint, used exclusively for icon controls (search, account, social) in the header.

**`pill-text-span`** — Inline text pill at `{rounded.pill-text}` (1920px) used for "BREAKING" / "LIVE" markers. Solid black or red-accent background, white WiredMono caps inside.

**`story-tile`** — There are no cards. A story tile is just an image rectangle stacked above kicker + headline + deck, separated from neighbors by 1px hairline rules or raw whitespace. Hover: headline color shifts from `{colors.ink}` to `{colors.link-hover}` and the underline appears. Image does not zoom, lift, or shadow.

**`feature-tile`** — Larger feature module with a 64px WiredDisplay headline above an editorial deck.

**`ribbon-section-header`** — Full-bleed black ribbon with white WiredMono UPPERCASE label inside ("MOST POPULAR", "BACKCHANNEL", "GEAR"). Height 32–40px, no padding refinement, no rounded ends. Sometimes a thin 2px black rule double-frames the bar.

**`text-input`** — Newsletter input pattern: rectangular, 2px solid black border, 0 radius, white background, Apercu 16px placeholder. Focus: border stays 2px black, no glow ring — focus signaled by the blinking caret only.

**`utility-bar`** — Black full-bleed strip at the very top of the page, ~32–40px tall, mono-caps links separated by hairline dividers, white text, hover → `{colors.link-hover}`.

**`top-nav`** — Paper-white row beneath the bug logo, Apercu 14–16px / regular menu items, hover → `{colors.link-hover}` underline. The WIRED bug (~209×42px) is centered or left-aligned, never recolored, always pure black on white.

**`footer`** — `{colors.canvas-dark}` zone with paper-white type. The only inverted region on the homepage.

## Do's and Don'ts

**Do**
- Use 2px hard black borders on every primary button — no 1px softness, no rounded edges
- Put a WiredMono ALL-CAPS kicker above every story headline (4–8px above, 0.9–1.2px tracking)
- Use BreveText for any paragraph longer than two lines — Apercu is for UI, not reading
- Keep images square-cornered, edge-to-edge, with the caption hugging the bottom edge
- Separate story tiles with hairline rules or whitespace — never with cards or shadows
- Invert (black background, white type) only for footers, ribbons, and the utility nav strip
- Use `{colors.link-hover}` (#057dbc) exclusively for hover — never as a background or button fill
- Scale headlines aggressively: 64px on hero, 26px on grid blocks — never 32px "safe middle ground"

**Don't**
- Don't add `box-shadow` to anything — WIRED doesn't ship shadows
- Don't round corners on rectangular containers — `border-radius: 0` is law
- Don't mix typefaces inside one role — WiredDisplay never sets body, BreveText never sets buttons
- Don't use color outside grayscale + `{colors.link-hover}` — no orange CTAs, no green success pills
- Don't use Apercu in lowercase for kickers — that's WiredMono's job, and it must be UPPERCASE
- Don't use gradients, blurs, glassmorphism, or atmospheric effects — they break the printerly contract
- Don't rely on hover lift effects — hover is a color swap on text, nothing more
- Don't invent new pill shapes — round = icons only, pill = inline text spans only, everything else is square

## Agent Prompt Guide

**Bias toward** — Paper White canvas, four-typeface role-bound stack (WiredDisplay headline / BreveText body / Apercu UI / WiredMono UPPERCASE kicker), 2px hard black borders on buttons / inputs / ribbons, square corners (`border-radius: 0`) on every rectangular container, hairline rules as the universal divider, single Link Blue accent on hover only, full-bleed black ribbon section headers, dark inverted footer.

**Reject** — `box-shadow` of any kind, round corners on rectangular containers, color outside grayscale + Link Blue, mixing typefaces across roles, lowercase mono, gradients / blurs / glassmorphism, hover lift effects, "safe middle ground" type sizes, decorative chrome.
