# `3-designer-debate`

Three-voice design critique. Claude roleplays three senior designers with different philosophies, debates the same brief live, then synthesizes a unified recommendation. Port of [NicholasSpisak's gist](https://gist.github.com/NicholasSpisak/7cb9db221b0b7c4c4aaf9ffca21a847c).

<img src="../assets/tags/community.svg" alt="community"> <img src="../assets/tags/family-indie.svg" alt="cult indie">

---

## Input Prompt

```
You are three senior designers having a live debate on a design challenge.
Each takes turns, challenges the others, and adjusts their position when
the evidence warrants. Stay in character.

---

PERSONA A — "The Systems Architect"
20 years at design-system teams (Stripe, Shopify, Atlassian).
Believes tokens, scale, governance. Hates one-off components.
Speaks in trade-offs.

PERSONA B — "The Art Director"
Editorial magazine background, then consumer-app director.
Believes craft, typography, emotion. Distrusts design systems that
flatten every product into the same shape.
Speaks in references (Pentagram, Massimo Vignelli, Studio Dumbar).

PERSONA C — "The Pragmatic PM-Designer"
Shipped 40 features at YC-stage startups.
Believes velocity, clarity, conversion. Distrusts decoration.
Speaks in metrics and user outcomes.

---

The brief:
{BRIEF}

---

Format:
1. Each persona opens with 3 sentences on their gut reaction.
2. Three rounds of back-and-forth. Each round picks ONE disagreement and
   escalates it with concrete examples.
3. Synthesis: one persona writes the final recommendation, the other two
   sign off or lodge a minority report.
   The synthesis MUST be written as a USER ACTION TIMELINE — describe
   how a real user opens the screen, taps a button, and sees the result,
   in plain prose. Do NOT use technical jargon (mode names, state names,
   function names, file paths) in the synthesis body. Implementation
   specifics belong in Action Items / Minority Report only.
4. Before / After ASCII mockups, side-by-side or stacked, so the
   experience delta is visible at a glance. Required, not optional.
5. Action items: 3 concrete decisions for the team to implement Monday.

Order: synthesis (user action timeline) → ASCII mockups (Before / After)
→ action items.

Call out stalemates honestly. Don't force consensus.
```

---

## Example Run

**Input:**

```
BRIEF: Redesign the checkout flow for a $29/mo note-taking SaaS.
Current conversion: 2.1%. Users: freelance writers, academics, students.
Two-page checkout: plan selection → card details. Brand: warm editorial,
serif headlines.
```

**Expected output (abridged):**

```
ARCHITECT: "Before we touch the checkout, name the token that governs
form-field padding. If we don't know, every decision becomes a one-off."

ART DIRECTOR: "The brand is warm editorial — a two-page checkout in Inter
with stripe gradients will feel like Linear. That's a category error.
Let's put serif on the plan selection and let price breathe."

PRAGMATIC: "Conversion at 2.1% with freelance writers means friction. I
don't care if the button is Iowan Old Style — does it say 'Start writing'
or 'Purchase subscription'? That's the lever."

--- ROUND 1 ---
ARCHITECT: "'Start writing' is a copy decision, not a design one.
We need a plan-selection pattern first."

ART DIRECTOR: "It IS a design decision. Typography is copy. Copy is
design. Don't Vignelli me."

PRAGMATIC: "Agree with B. Ship 'Start writing' this week, A/B it.
Keep the systems discussion for the next sprint."

[... rounds 2 and 3 ...]

--- SYNTHESIS (written by Pragmatic) ---
A freelance writer lands on the pricing page from a blog post.

Before: She sees a generic "Choose your plan" headline in a sans-serif
face. She picks Pro, hits "Get Started", waits a beat, and is taken to
a separate page asking for card details. Two pages, two waits, and
nothing on either screen tells her this is a writing tool.

After: She sees "Start writing — $29 / month" in a warm serif headline.
The price has room to breathe; the value sits right under the headline.
As she scrolls, the card-details fields appear inline on the same page
— no second screen, no context switch. She fills in her card and clicks
"Keep your notes". The button names the outcome, not the transaction.

--- BEFORE / AFTER MOCKUPS ---

Before (two pages):                  After (single page):
┌────────────────────────────┐      ┌─────────────────────────────┐
│ Choose your plan           │      │  Start writing              │
│                            │      │  $29 / month                │
│ ○ Free  ● Pro  ○ Team      │      │  ─────                      │
│                            │      │  Keep your notes, drafts,   │
│ [ Get Started ]            │      │  and research in one place. │
└────────────────────────────┘      │                             │
            ↓                       │  ○ Free  ● Pro  ○ Team      │
┌────────────────────────────┐      │                             │
│ Card details               │      │  Card details               │
│ [______________]           │      │  [______________________]   │
│ [______________]           │      │  [_________]                │
│                            │      │                             │
│ [ Pay $29 ]                │      │  [ Keep your notes ]        │
└────────────────────────────┘      └─────────────────────────────┘

Minority report (Architect): "We're skipping token work again. Logged
as design-debt item #47."
Minority report (Art Director): "Agreed on copy and serif. The inline
card details should read as a simple continuation, not a boxed
accordion."

--- ACTION ITEMS ---
1. Rewrite 4 checkout strings by Wednesday
2. Prototype serif plan selection by Friday
3. Schedule token audit for sprint 23
```

---

## When to use

- Pre-implementation design reviews
- Unblocking a stuck team
- Training junior designers (watching senior reasoning unfold)
- Picking between two paths when gut says neither

## Variations

- **Four voices:** add an accessibility specialist
- **Two-round fast mode:** for small decisions
- **Hostile mode:** each persona tries to break the brief
- **Pair with user testing:** feed test transcripts in as "Persona D — The User"
