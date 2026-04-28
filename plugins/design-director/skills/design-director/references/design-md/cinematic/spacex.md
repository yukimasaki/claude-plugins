---
version: alpha
name: SpaceX
description: |
  SpaceX's website is a full-screen cinematic experience that treats aerospace engineering like a film — every section is a scene, every photograph is a frame, and the interface disappears entirely behind the imagery. The design is pure black (`#000000`) with photography of rockets, space, and planets occupying 100% of the viewport. Text overlays sit directly on these photographs with no background panels, cards, or containers — just type on image, bold and unapologetic. The typography uses D-DIN, an industrial geometric typeface with DIN heritage (the German industrial standard). The defining characteristic is that virtually ALL text is uppercase with positive letter-spacing (0.96px–1.17px), creating a military/aerospace labeling system where every word feels stenciled onto a spacecraft hull. D-DIN-Bold at 48px with uppercase and 0.96px tracking for the hero creates headlines that feel like mission briefing titles. What makes SpaceX distinctive is its radical minimalism: no shadows, no borders (except one ghost button border), no color (only black and a spectral near-white `#f0f0fa`), no cards, no grids. The single ghost button — `rgba(240,240,250,0.1)` background with spectral border — is the sole interactive element. This isn't a design system in the traditional sense — it's a photographic exhibition with a type system and one button. Mood — aerospace-cinematic, austere, mission-briefing, void-floating.

colors:
  primary: "#f0f0fa"
  ink: "#f0f0fa"
  body: "#f0f0fa"
  canvas: "#000000"
  on-primary: "#000000"
  on-dark: "#f0f0fa"

typography:
  display-hero:
    fontFamily: "'D-DIN-Bold', 'D-DIN', Arial, Verdana, sans-serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0.96px
  body:
    fontFamily: "'D-DIN', Arial, Verdana, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  nav-bold:
    fontFamily: "'D-DIN', Arial, Verdana, sans-serif"
    fontSize: 13px
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: 1.17px
  nav-link:
    fontFamily: "'D-DIN', Arial, Verdana, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 2.0
    letterSpacing: 0
  caption-bold:
    fontFamily: "'D-DIN', Arial, Verdana, sans-serif"
    fontSize: 13px
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: 1.17px
  caption:
    fontFamily: "'D-DIN', Arial, Verdana, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0
  micro:
    fontFamily: "'D-DIN', Arial, Verdana, sans-serif"
    fontSize: 10px
    fontWeight: 400
    lineHeight: 0.94
    letterSpacing: 1px

rounded:
  none: 0px
  sm: 4px
  ghost: 32px

spacing:
  xxs: 3px
  xs: 5px
  sm: 12px
  md: 15px
  lg: 18px
  xl: 24px
  xxl: 30px
  section: 48px

components:
  button-ghost:
    backgroundColor: "{colors.on-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body}"
    rounded: "{rounded.ghost}"
    padding: 18px
  hero:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-hero}"
    padding: 48px
  nav-top:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-bold}"
    height: 64px
---

## Overview

SpaceX's website is a full-screen cinematic experience treating aerospace engineering like a film. Every section is a scene; every photograph is a frame; the interface disappears entirely behind the imagery. The design is **pure black** (`#000000`) with photography of rockets, space, and planets occupying 100% of the viewport. Text overlays sit directly on these photographs — no background panels, cards, or containers, just type on image, bold and unapologetic.

D-DIN — industrial geometric with DIN heritage — defines the typographic voice. Virtually ALL text is uppercase with positive letter-spacing (0.96–1.17px), creating a military/aerospace labeling system where every word feels stenciled onto a spacecraft hull.

Mood — aerospace-cinematic, austere, mission-briefing, void-floating.

## Colors

The palette is extreme: **two colors only**. **Space Black** (`#000000`) is the page background — the void of space. **Spectral White** (`#f0f0fa`) is the text color — not pure white, a slight blue-violet tint that mimics starlight.

Note: the ghost button uses `rgba(240,240,250,0.1)` background and `rgba(240,240,250,0.35)` border — these are alpha applications of `#f0f0fa`. The DESIGN.md frontmatter records the unfiltered hex; the alpha values are component-level treatments. Dark overlay gradients (`rgba(0,0,0,0.5)`) are similarly composition rules atop photography.

## Typography

**D-DIN-Bold** (700) for headlines and nav emphasis; **D-DIN** (400) for body. **No medium or semibold weights** exist in the system — strict two-weight binary.

**Universal uppercase**: nearly every text element uses `text-transform: uppercase`. This creates a systematic military/aerospace voice where all communication feels like official documentation. **Positive letter-spacing as identity**: 0.96px on display, 1.17px on nav — the wide tracking creates the stenciled, industrial feel that connects to DIN's heritage as a German engineering standard. Tight line-heights (0.94–1.00) — compressed, efficient, mission-critical communication.

## Layout

8px base spacing with minimal scale (3, 5, 12, 15, 18, 20, 24, 30). Spacing is not the organizing principle; **photography is**. No traditional grid — each section is a full-viewport cinematic frame. Text positioned absolutely or with generous padding over imagery; left-aligned text blocks on photography backgrounds; no max-width container — content bleeds to viewport edges.

Whitespace philosophy: **photography IS the whitespace**. Empty space is never empty — it's filled with the dark expanse of space, the curve of a planet, or the flame of a rocket engine. Vertical pacing through viewport: each section is exactly one viewport tall, creating a rhythmic scroll where each "page" reveals a new scene.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (Photography) | Full-viewport imagery | Background layer — always present |
| 1 (Overlay) | `rgba(0,0,0,0.5)` gradient | Text legibility over photography |
| 2 (Text) | Spectral white text, no shadow | Content layer — floats directly on image |
| 3 (Ghost) | `rgba(240,240,250,0.1)` surface | Barely-visible interactive layer |

SpaceX uses **ZERO shadows**. In a design built entirely on photography, shadows are meaningless — every surface is already a photograph with natural lighting. Depth comes from the photographic content itself: receding curvature of Earth, diminishing trail of a rocket, atmospheric haze around Mars.

## Shapes

Two radius values total: **4px** for small dividers and utility, and **32px** for the ghost button — the only rounded element.

## Components

**Button ghost**: `rgba(240,240,250,0.1)` fill (barely visible), spectral white text, `1px solid rgba(240,240,250,0.35)` border, 32px radius, 18px padding. The ONLY button variant — "LEARN MORE" CTAs on photography. (The frontmatter `components.button-ghost` records the base spectral white reference; the alpha is applied at runtime.)

**Cards & Containers**: NONE. SpaceX does not use cards, panels, or containers. The absence of containers IS the design.

**Hero**: full-viewport (100vh) section, photography background with dark gradient overlay, 48px D-DIN-Bold uppercase headline + 16px D-DIN body + ghost button.

**Nav top**: transparent overlay on photography. D-DIN 13px / 700 / 1.17px tracking uppercase. Spectral white text. SpaceX wordmark left-aligned.

## Do's and Don'ts

**Do**
- Use full-viewport photography as the primary design element — every section is a scene
- Apply uppercase + positive letter-spacing to ALL text — the aerospace stencil voice
- Use D-DIN exclusively — no other fonts exist in the system
- Keep the color palette to black + spectral white (`#f0f0fa`) only
- Use ghost buttons (`rgba(240,240,250,0.1)`) as the sole interactive element
- Apply dark gradient overlays for text legibility on photographs
- Let photography carry emotional weight — type system is functional, not expressive

**Don't**
- Don't add cards, panels, or containers — text sits directly on photography
- Don't use shadows — meaningless in a photographic context
- Don't introduce colors — palette is strictly achromatic with spectral tint
- Don't use sentence case — everything is uppercase
- Don't use negative letter-spacing — all tracking is positive (0.96–1.17px)
- Don't reduce photography to thumbnails — every image is full-viewport
- Don't add decorative elements (icons, badges, dividers) — design is photography + type + one button

## Agent Prompt Guide

**Bias toward** — full-viewport (100vh) photography sections, uppercase + positive letter-spacing on ALL text (0.96–1.17px), D-DIN binary weights (400/700), spectral white `#f0f0fa` (not pure white), single ghost button, dark `rgba(0,0,0,0.5)` overlay for text legibility, zero cards.

**Reject** — cards/panels/containers, shadows, additional colors, sentence case, negative letter-spacing, sub-viewport image thumbnails, decorative icons or dividers, multiple button variants.
