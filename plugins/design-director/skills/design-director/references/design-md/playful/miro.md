---
version: alpha
name: Miro
description: |
  Miro's website is a clean, collaborative-tool-forward platform that communicates "visual thinking" through generous whitespace, pastel accent colors, and a confident geometric font. The design uses a predominantly white canvas with near-black `#1c1c1e` text and a distinctive pastel color palette — coral, rose, teal, orange, yellow, moss — each light/dark pair representing different collaboration contexts. Roobert PRO Medium is the primary display font with multiple OpenType character variants (`"blwf", "cv03", "cv04", "cv09", "cv11"`) and negative letter-spacing (-1.68px at 56px), while Noto Sans handles body text with its own stylistic set (`"liga" 0, "ss01", "ss04", "ss05"`). Blue 450 `#5b76fe` is the primary interactive color. The system uses generous border-radius (8px–50px) and a ring-shadow border `rgb(224,226,232) 0px 0px 0px 1px` instead of traditional CSS borders. Built with Framer for smooth motion. Mood — collaborative, pastel-warm, geometric, generous.

colors:
  primary: "#5b76fe"
  primary-pressed: "#2a41b6"
  ink: "#1c1c1e"
  body: "#555a6a"
  muted: "#a5a8b5"
  canvas: "#ffffff"
  surface-coral-light: "#ffc6c6"
  surface-coral-dark: "#600000"
  surface-rose-light: "#ffd8f4"
  surface-teal-light: "#c3faf5"
  surface-teal-dark: "#187574"
  surface-orange-light: "#ffe6cd"
  surface-yellow-dark: "#746019"
  surface-pink: "#fde0f0"
  surface-red-light: "#fbd4d4"
  surface-red-muted: "#e3c5c5"
  hairline: "#c7cad5"
  hairline-soft: "#e9eaef"
  hairline-ring: "#e0e2e8"
  on-primary: "#ffffff"
  success: "#00b473"

typography:
  display-hero:
    fontFamily: "'Roobert PRO Medium', 'Roobert PRO', system-ui, sans-serif"
    fontSize: 56px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -1.68px
  section-heading:
    fontFamily: "'Roobert PRO Medium', 'Roobert PRO', system-ui, sans-serif"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -1.44px
  card-title:
    fontFamily: "'Roobert PRO Medium', 'Roobert PRO', system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -0.72px
  sub-heading:
    fontFamily: "'Noto Sans', system-ui, sans-serif"
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: -0.44px
  feature:
    fontFamily: "'Roobert PRO Medium', 'Roobert PRO', system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: 0
  body-large:
    fontFamily: "'Noto Sans', system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  body:
    fontFamily: "'Noto Sans', system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: -0.16px
  button:
    fontFamily: "'Roobert PRO Medium', 'Roobert PRO', system-ui, sans-serif"
    fontSize: 17px
    fontWeight: 700
    lineHeight: 1.29
    letterSpacing: 0.175px
  caption:
    fontFamily: "'Roobert PRO Medium', 'Roobert PRO', system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.71
    letterSpacing: 0
  small:
    fontFamily: "'Roobert PRO Medium', 'Roobert PRO', system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -0.36px

rounded:
  none: 0px
  sm: 8px
  md: 12px
  lg: 20px
  xl: 24px
  "2xl": 40px
  "3xl": 50px
  full: 9999px

spacing:
  "0": 0px
  "1": 4px
  "2": 8px
  "3": 12px
  "4": 16px
  "5": 24px
  "6": 32px
  "7": 48px
  "8": 64px
  "9": 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 12px 24px
  button-outlined:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 7px 12px
  button-circle:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 12px
  card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: 24px
  card-pastel-coral:
    backgroundColor: "{colors.surface-coral-light}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-pastel-teal:
    backgroundColor: "{colors.surface-teal-light}"
    rounded: "{rounded.lg}"
    padding: 32px
  input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 16px
---

## Overview

Miro's site is built around generous whitespace, a confident geometric headline font (Roobert PRO Medium with multiple OpenType variants), and a distinctive pastel palette where each light/dark pair represents a different collaboration context — coral, rose, teal, orange, yellow, moss. Blue 450 `#5b76fe` carries the primary interactive moment, while a ring shadow `rgb(224,226,232) 0px 0px 0px 1px` substitutes for traditional CSS borders. Framer-built smooth motion completes the visual thinking aesthetic.

Mood — collaborative, pastel-warm, geometric, generous.

## Colors

The canvas is white `#ffffff` with near-black `#1c1c1e` text and slate `#555a6a` for body. Blue 450 `#5b76fe` is the primary interactive color (CTAs, links), with `#2a41b6` as the pressed/actionable state. Success green `#00b473`.

The pastel system uses light/dark pairs for feature sections — Coral light `#ffc6c6` / dark `#600000`, Rose light `#ffd8f4`, Teal light `#c3faf5` / dark `#187574`, Orange light `#ffe6cd`, Yellow dark `#746019`, plus soft pinks and reds. Each section can pick one pair and own that context.

Borders use `#c7cad5` (default) and `#e9eaef` (soft input border). The signature ring shadow `rgb(224,226,232) 0px 0px 0px 1px` is the shadow-as-border substitute.

## Typography

Roobert PRO Medium with OpenType character variants (`"blwf", "cv03", "cv04", "cv09", "cv11"`) handles display from 56px hero (-1.68px tracking) down to 12px small. Noto Sans handles body text with its own stylistic set (`"liga" 0, "ss01", "ss04", "ss05"`). Negative letter-spacing scales with size on Roobert (-1.68px hero → -0.36px small). Buttons use Roobert at 17.5px / weight 700 / 0.175px tracking.

## Layout

8px base, scale 4/8/12/16/24/32/48/64/80px. Generous radius range and pastel surface contrast define section rhythm.

## Elevation & Depth

Minimal — ring shadow `rgb(224,226,232) 0px 0px 0px 1px` substitutes for borders, and pastel surface contrast carries section hierarchy. No heavy drop shadows.

## Shapes

8px (buttons, inputs) → 12px (cards) → 20–24px (panels) → 40–50px (large containers, hero blocks) → 9999px (circular action buttons).

## Components

**Primary blue** — `#5b76fe` fill, white text, 8px radius, Roobert 17.5px / weight 700 / 0.175px tracking.

**Outlined** — transparent fill, `1px solid #c7cad5`, 8px radius, 7/12 padding.

**Circle white** — white fill, 9999px radius, with ring shadow.

**Cards** — 12px radius standard; 20–24px for feature pastel cards. Pastel light surfaces (coral, rose, teal, orange) define section context.

**Inputs** — white fill, `1px solid #e9eaef`, 8px radius, 16px padding.

## Do's and Don'ts

**Do**
- Use pastel light/dark pairs for feature sections — one pair per section
- Apply Roobert PRO Medium with OpenType character variants for display
- Use Blue 450 `#5b76fe` as the primary interactive color
- Apply ring shadow `rgb(224,226,232) 0px 0px 0px 1px` instead of CSS borders
- Maintain generous radius scale (8–50px) for the friendly geometric feel
- Use Noto Sans with `"liga" 0, "ss01", "ss04", "ss05"` for body

**Don't**
- Use heavy drop shadows — ring shadow + pastel surface is the depth system
- Mix more than 2 pastel accents per section — one pair owns the context
- Use sharp 0–4px radii — generous rounding is part of the brand
- Skip the OpenType features on Roobert — character variants are the identity
- Replace pastel feature sections with monochrome — the spectrum is the system

## Agent Prompt Guide

**Bias toward** — white canvas with pastel feature sections (coral / teal / rose / orange light + dark pairs), Roobert PRO Medium with OpenType character variants, Noto Sans body with stylistic sets, Blue 450 `#5b76fe` primary CTAs, ring-shadow borders, generous radii (8–50px), Framer-style smooth motion.

**Reject** — heavy drop shadows, monochrome feature sections, sharp 0–4px radii, plain Roobert without OpenType features, two competing pastel pairs in one section.
