# Milli Group Design System

A brand and presentation system for **Milli Group**, built to make on-brand slides and
presentations. Everything here was read out of two files the company supplied — nothing
is invented, and where a value had to be substituted it is flagged.

## Sources

| Source | What was taken from it |
|---|---|
| `uploads/MilliGroup-Logo-EF-V01.pdf` | Brand guideline deck (7 pages): core colours (Mango `#FFBE00`, Black `#000000`), the typography rules — Montserrat for English, Yekan Bakh VF for Farsi, four weights each (Light / Regular / Bold / Black) |
| `uploads/Montserrat-*.ttf` (18 files), `uploads/YekanBakh-VF.ttf` | The real font binaries, self-hosted in `assets/fonts/` and declared in `tokens/fonts.css` |
| `uploads/MilliGroup-PowerPoint-Template-V01.pptx` | The operative artefact: 17 slide layouts, the "Milli" theme colour scheme, the master title and body text styles, exact placeholder geometry, and the logo artwork itself (embedded as vector inside `ppt/media/image1.emf` / `image2.emf`) |

The logo in `assets/logo/` is not a redrawing. The two EMF pictures in the template each
wrap an embedded PDF; that PDF's vector paths were converted straight to SVG, so the
outlines are the company's own artwork to the hundredth of a point.

## Company and product context

Milli Group is an Iranian group company that presents bilingually — Farsi (RTL) and
English (LTR) — and the template is built for both. Every layout ships in two cuts: a
Farsi original set in Yekan Bakh VF, right-aligned, and an English counterpart set in
Montserrat. There is no app, website or codebase in scope here. **The product this system
serves is the deck**, so the "UI kit" is a deck kit: ten sample slides in template order
under `slides/`.

Layout names as the template itself labels them, and what each becomes here:

| .pptx layout | Component |
|---|---|
| Cover Slide / 1_Cover / 2_Cover Slide | `CoverSlide` |
| Table of Content | `TocSlide` |
| Main Slide | `TwoColumnSlide` |
| 1_Main Slide / 2_Main Slide | `ThreeColumnSlide` |
| Watermarked Slide / Watermarked Slide 2 | `WatermarkSlide` |
| Gradient Slide | `GradientSlide` |
| White Section Slide 1 / Blue Section Slide 1 | `SectionSlide` (`surface="white"` / `"black"`) |
| End Slide / 1_End / 2_End Slide | `EndSlide` |
| Black Blank / White Blank | `SlideFrame surface="black" \| "white"` |

## CONTENT FUNDAMENTALS

The template's own placeholder prompts are the only copy evidence available, and they are
blunt, instructional and unadorned. Follow that register.

**Tone.** Plain, declarative, corporate-formal. No exclamation, no rhetorical questions,
no metaphor. The English prompts read `Enter Presentation Title`,
`Write a Description about File`, `Title (two lines max, for subtitle use font 16)`,
`Click to add text (two lines max, center alignment if it's title)`. The Farsi equivalents
are the same register: `عنوان فایل` ("file title"), `توضیحی در مورد فایل بنویسید`
("write a description about the file"), `عنوان بخش را بنویسید` ("write the section title").

**Person.** Neither "I" nor "you" appears in any brand-owned string. Write in the third
person or use bare noun phrases: "Revenue by channel", not "Here's how we did".

**Casing.** Title Case for slide and section titles. `Thank You`, `Enter Presentation Title`,
`Table of Content`. Sentence case for body copy. One layout sets a section title as
all-caps `TITLE` — treat that as a placeholder, not a rule.

**Length discipline.** The template states its own limits and they are worth obeying
literally: titles are **two lines maximum**; a subtitle drops to 16pt; the contents slide
holds **ten entries at most**, five per column. Body copy is 12pt — that is small, which
means short bullets, not paragraphs.

**Numbers.** Section and contents numerals are decorative and large. Zero-pad them
(`01`, `02`) and set them in Mango. Page numbers are tiny (8pt) and read `4 / 18`.

**Emoji.** None. Not in the guidelines, not in the template, not in the theme. Do not
introduce them.

**Religious opening.** Two Farsi cover layouts carry `به نام خدا` ("In the name of God")
in 11pt at the top of the slide. It is part of the Farsi cover convention; keep it on
Farsi covers and omit it on English ones.

**Vibe.** Restrained, dark, confident. Black fields, one warm accent, generous emptiness.
The deck should feel like a company that does not need to raise its voice.

## VISUAL FOUNDATIONS

**Colour.** Two core colours: Black `#000000` and Mango. Black is the dominant surface —
covers, section dividers, contents and end slides are all full black. Mango is an accent
used at the scale of a dot, a bar or a numeral, never as a field. The theme adds Blue
`#0B23B5` and Navy `#06156A` for charts and section numerals, plus Green `#00CC66` and
Red `#FF5050` as semantic values. White and `#E7E6E6` carry content slides.

*Mango has two recorded values.* The guideline deck prints `#FFBE00`; the PowerPoint theme
and the logo artwork both use `#FDB913`. This system treats **`#FDB913`** as canonical
(it is what the artwork actually contains) and keeps `#FFBE00` as `--milli-mango-guide`.
See CAVEATS.

**Type.** Montserrat for English — the full nine weights ship, Thin through Black, each
with an italic; the master's default title weight is
**Montserrat Medium (500)**, not Bold. Yekan Bakh VF (variable, 100-900) for Farsi. Line height is **90%**
everywhere — the master sets `lnSpc 90%` on both title and body styles, which is what
gives the deck its tight, stacked look. Cover titles carry `-1.5pt` tracking at 40pt
(`--tracking-cover`). Sizes are fixed by layout, not fluid: 44pt section titles, 40pt
cover titles, 24pt slide titles, 13pt column heads, 12pt body, 8pt page numbers.

**Font family names for PowerPoint export.** The browser resolves weights from the
self-hosted files above, but PowerPoint on the user's machine resolves them by *family
name*, so Farsi decks must be authored with these exact stacks:

| Role | Stack |
|---|---|
| Headings — slide title, chapter title, cover, contents heading, section numeral | `font-family:'Yekan Bakh VF Black','Yekan Bakh VF',sans-serif` |
| All other text | `font-family:'B Yekan','Yekan Bakh VF',sans-serif` |
| Latin logotype | `Montserrat` |

Never use `'Yekan Bakh VF'` alone as the family name — PowerPoint reads it as a single
Regular weight and flattens every weight in the deck to the same thing. The VF name stays
at the end of the stack only so the browser preview renders.

**Right-to-left in PowerPoint export.** `dir="rtl"` alone does not survive a PPTX export:
the computed `text-align` arrives as `start`, and PowerPoint builds the paragraph as
left-aligned LTR, which breaks Farsi punctuation and alignment. Every RTL slide root must
carry this explicitly and inline:

```css
direction:rtl;text-align:right;unicode-bidi:isolate
```

Children that need a different alignment declare their own `text-align`.

**Spacing and layout.** The canvas is 13.333 × 7.5in — **1280 × 720 px**. Content sits in
a fixed grid, not a fluid one: left margin 64px (104px on covers and section slides),
title at y=52 in a 1152 × 82 box, content from y=219 down 429px, footer line at y=671 with
48px side margins. Two columns are 552px with a 48px gutter; three columns are 370px with
a **21px** gutter. Those are the template's real numbers — do not snap them to an 8px grid.

**Backgrounds.** Solid fields, overwhelmingly. No photography, no illustration, no
pattern or texture appears anywhere in the template. There is exactly one gradient
background — the "Gradient Slide": a 46%-alpha Mango wash rising diagonally from the
lower-left, fading to 29% white by 21% of the way across. Use it once per deck at most.
If a deck needs imagery, it must come from the user; this system ships none and invents
none.

**Decoration.** Three shapes, and that is the whole vocabulary:
1. the **18px Mango dot** beside every column head (a subtle three-stop vertical gradient,
   `--gradient-mango-dot`, not a flat fill);
2. the **12 × 89px Mango bar** beside section-slide titles, 2px radius;
3. the corner **wash** above.

**Borders, radii, shadows.** Flat. There is not a single drop shadow, glow or bevel in the
template. The only rounded shape in 17 layouts is the section bar, at PowerPoint's default
roundRect adjust — **2px**. Everything else is square. Rules, where needed, are hairlines:
`--rule-on-dark` (white at 24%) and `--rule-on-light` (black at 14%).

**Cards.** There are none. The template has no card pattern — no bordered, shadowed or
tinted content containers. When content needs separating, use a 2px black rule above a
column (as `slides/watermark.html` does) or simply whitespace. Do not introduce rounded
shadowed cards; they are not this brand.

**Transparency and blur.** Only in the gradient wash and in muted footer text
(white at 70% on dark). No frosted glass, no backdrop blur.

**Imagery treatment.** No evidence in the sources. If photography is added, keep it warm
and desaturated so it sits with Mango on black, and let it run full-bleed rather than
boxed — but ask the user for direction rather than guessing.

**Animation.** The template declares no slide transitions or entrance animations at all.
For HTML surfaces, keep motion functional and short: 120–200ms on
`cubic-bezier(.4,0,.2,1)` (`--dur-fast`, `--dur-base`, `--ease-standard`). Fades and small
translations only — no bounce, no spring, no parallax.

**Hover and press.** Nothing in the source (it is a deck), so the convention here is:
hover swaps a neutral surface to Mango, or lifts white text to full opacity; press darkens
Mango to `--milli-mango-dark` (`#B78206`). No scale-down, no shadow change — there are no
shadows to change.

**Fixed elements.** Page number bottom-left, deck label along the bottom, wordmark
bottom-right — on every content slide, at the same coordinates. Covers, section dividers
and the end slide carry no footer at all. The wordmark in slide chrome is *typeset*
("Milli" bold + " Group" medium, one colour), while covers and end slides use the *vector*
lockup. Keep that distinction.

## THE DECISION-MEMO LAYOUT SYSTEM

The blank template gives 17 layouts and no opinion about how an argument is built. A real
41-slide Milli decision memo does, and the `components/decision-deck/` family is that
system measured off it. Chapter order and subject matter change from deck to deck; the
geometry below does not.

**The canvas.** 1280 x 720. Margins are 64px, so the measure is 1152px. Three columns of
370px with 21px gutters fill it exactly. Everything sits on that grid.

**The shape is a diamond, never a square.** Every one of the 376 square shapes in the
source deck carries `rot="2700000"` — a rounded square turned 45 degrees. Chapter dots,
row badges, bullet markers, stat holders, the corner ornaments and the closing lattice are
all the same shape at different sizes, and any label inside is counter-rotated so it reads
upright. `Diamond` is that primitive; drawing an un-rotated square is the fastest way to
make a slide look like it came from somewhere else. The layout box stays the unrotated
side length, so the shape overhangs its box by 41% — spacing is set with that in mind
(chapter dots sit on a 35px pitch for a 22px diamond).

**Every content slide is built the same way.** The locator (`chapter 1 · 1-2`) sits on the
reading edge at y=44; the chapter dots sit on the far edge at y=54, one diamond per slide
in the chapter, gold up to the current one. The headline runs between them, inset 226px
from the far edge for one line and 310px when it wraps, right-aligned to the reading edge
in Yekan Bakh VF Black — the inset is what keeps it clear of the dots. Then a 1px rule
across the full bleed at y=158 with a 430px gold segment riding its outer end — that rule
is the deck's most repeated element and the reason slides feel like one document. Body
content starts at y=190. The footer is three parts: page counter on the outer edge, deck
label centred, `MilliGroup` set in Montserrat on the inner edge.

**Headlines are claims, not labels.** "90% know crypto and only 25% have bought — the gap
is here" rather than "Market awareness". The headline states the finding; the body proves
it. A slide whose headline could sit on any deck is a slide with nothing to say.

**Chapters open in black.** The divider carries four nested diamonds stepping in from the
bottom-left in #404040 / #6E6E6E / #B78206 / mango, a gold rule across the outer half, the
chapter numeral in gold, the title at 56px, a short abstract of what the chapter argues,
and an "in this chapter" list. Content slides return to white. The alternation is what
gives a long deck its rhythm — no more than one or two other coloured grounds per deck
(a flat mango `#FDB913` slide for the recommendation, a `#FDEFC8` or `#E7E6E6` slide for
the strategy statement).

**Contents is three bands, not one list.** The answer, the evidence, the plan. Each band
takes one column, carries its chapter range and a line saying why those chapters belong
together. The first band's top bar is gold; the rest are white. The reader sees the shape
of the argument before its parts.

**Comparison is the deck's default verb.** `RowTable` for anything with more than two
rows: grey column labels, a 2px rule, fixed 79px rows alternating white and `#F6F6F6`,
black hairlines between. The recommended row is filled mango. `ChipRow` shows one
dimension's whole option space with the recommendation gold and the rejected options
outlined, so the trade stays visible. `DotScale` rates in three short bars rather than
words. Never hide the options you did not pick.

**The closing lattice keeps its scrim light.** The gradient over the diamond field is
alpha 0 to 35% at 60% to 72% at the bottom — a scrim, never opaque. All four rows stay
legible; painting the field out defeats the slide.

**Slides close with a takeaway band.** Full width, black by default with gold text and a
gold pill on the outer edge; `#D3D2D0` when the slide above it is already dense. One per
slide. If two claims compete for it, the slide is doing two jobs.

**Numbers get room.** `StatBlock` puts one figure in a diamond beside its caption;
`FunnelBars` narrows a population step by step and names the filter that removed each
layer, so the arithmetic can be argued with. Three stats on a slide, not nine.

## ICONOGRAPHY

**There is no icon set in either source file.** The template contains no icon font, no SVG
sprite, no PNG glyphs — its 17 layouts are built entirely from text placeholders, two
ovals, one rounded rectangle and the logo picture. Nothing has been copied in because
there was nothing to copy.

What the brand does use as marks:

- **The logo mark** — the "mi" glyph with the Mango dot, in `assets/logo/`. This is the
  only piece of brand iconography that exists.
- **The Mango dot** — an 18px filled circle. It is the template's bullet, marker and
  emphasis device all at once.
- **The Arial round bullet `•`** — the master's `buChar` for every body list level.
  Unicode, not an icon.
- **Zero-padded numerals** — `01`, `02` — do the work icons would do elsewhere, on the
  contents and section slides.
- **No emoji.** Anywhere.

If a deck genuinely needs icons, ask the user for Milli Group's icon library first. Absent
that, **Lucide** (CDN: `https://unpkg.com/lucide-static`) is the closest match to this
brand's flat, geometric, single-weight feel — 2px stroke, square-ish terminals, no fill.
That would be a **substitution, not the brand's set**, and must be flagged in any
deliverable that uses it.

## Index

Root files:

- `styles.css` — the single entry point consumers link. `@import` lines only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `decision-deck.css`, `spacing.css`,
  `effects.css`, `base.css`
- `assets/fonts/` — Montserrat (18 TTFs) and YekanBakh-VF.ttf, the brand's own binaries
- `assets/logo/` — `milli-lockup-{white,black}`, `milli-lockup-light-{white,black}`,
  `milli-mark-{white,black}`, `milli-wordmark-{white,black}`; SVG plus 2000px PNG for
  PowerPoint. `assets/image1.emf`, `assets/image2.emf` are the original artwork as shipped.
- `guidelines/` — 16 specimen cards (Colors, Type, Spacing, Brand)
- `slides/` — ten sample slides plus `index.html`, a click-through deck
- `templates/milli-deck/` — an editable starting deck (the blank template's 17 layouts)
- `templates/decision-memo/` — the ten-chapter Farsi decision-memo deck
- `thumbnail.html`, `readme.md`, `SKILL.md`

### Components

**Brand** — `Logo`, `Wordmark`

**Slide chrome** — `SlideFrame`, `SlideTitle`, `ColumnHead`, `SlideFooter`, `SectionBar`,
`BulletList`

**Slide layouts** — `CoverSlide`, `TocSlide`, `SectionSlide`, `TwoColumnSlide`,
`ThreeColumnSlide`, `WatermarkSlide`, `GradientSlide`, `EndSlide`

**Decision deck** — slides: `DeckCover`, `DeckContents`, `ChapterOpener`, `ContentSlide`,
`ThanksSlide`. Chrome: `Diamond`, `ChapterDots`, `DeckFooter`. Blocks: `RowTable`,
`RowBadge`, `DotScale`, `NumberedPoint`, `StatBlock`, `ChipRow`, `Takeaway`, `FunnelBars`.

### Intentional additions

The sources define no React components, so this inventory was authored from the template's
17 layouts. Each entry maps to a named .pptx layout or to a repeated piece of its chrome:

- `SlideFrame`, `SlideTitle`, `SlideFooter`, `ColumnHead`, `SectionBar`, `BulletList` —
  extracted because they repeat identically across layouts; keeping them separate is what
  keeps the geometry consistent.
- `Logo`, `Wordmark` — the two ways the brand signs a slide (vector artwork vs. typeset).

No general-purpose UI primitives (Button, Input, Card, Toast, …) were added. The sources
define no product UI, so inventing them would put names in consumers' hands that no Milli
Group designer would recognise.

## CAVEATS

1. **Mango is recorded twice.** `#FFBE00` in the guideline deck, `#FDB913` in the theme and
   in the logo artwork. Canonical here is `#FDB913`. Confirm which is correct.
2. **Fonts are the real thing, self-hosted.** Montserrat (9 weights x roman + italic)
   and Yekan Bakh VF (variable, 100-900) live in `assets/fonts/` and are declared in
   `tokens/fonts.css`. No CDN, no substitution — consumers get the brand's own binaries.
3. **"Blue Section Slide 1"** is named blue in the template but its background is black.
   The name is preserved in this readme; the component uses `surface="black"`.
5. **No icons, no imagery, no photography** exist in the sources, so none ship here.
