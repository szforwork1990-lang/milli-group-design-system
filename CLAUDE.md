# Milli Group — project rules

## Farsi / RTL decks

Two rules that PowerPoint export depends on. Both are in `readme.md` under VISUAL
FOUNDATIONS → Type; repeated here so they apply in every conversation.

### 1. Font family names

PowerPoint on the user's machine resolves fonts by family name, not by the weight the
browser picked. Author Farsi decks with these exact stacks:

- **Headings** (slide title, chapter title, cover, contents heading, section numeral):
  `font-family:'Yekan Bakh VF Black','Yekan Bakh VF',sans-serif`
- **All other text**: `font-family:'B Yekan','Yekan Bakh VF',sans-serif`
- **Latin logotype**: `Montserrat`

Never use `'Yekan Bakh VF'` alone as the family name — PowerPoint reads it as a single
Regular weight and flattens every weight in the deck. The VF name stays at the end of the
stack only so the browser preview renders.

### 2. Right-to-left

`dir="rtl"` alone does not survive a PPTX export: the computed `text-align` arrives as
`start` and PowerPoint rebuilds the paragraph as left-aligned LTR, breaking Farsi
punctuation and alignment. Every RTL slide root carries this explicitly and inline:

```css
direction:rtl;text-align:right;unicode-bidi:isolate
```

Children that need a different alignment declare their own `text-align`.

`SlideFrame dir="rtl"` already applies both the body stack and all three RTL properties;
headings inside it still set the Black stack themselves.
