The slide canvas. Wrap every slide in it; children are absolutely positioned against it.

```jsx
<SlideFrame surface="black"><CoverSlide title="Q3 Review" /></SlideFrame>
```

Surfaces map 1:1 to the template: `black` (Cover / Section / End), `white` (Main / Watermarked), `panel`, `wash` (Gradient Slide).

For Farsi decks pass `dir="rtl"`. That applies `direction:rtl; text-align:right; unicode-bidi:isolate` inline — required for PowerPoint export, where `dir` alone is dropped and the paragraph comes back left-aligned LTR. Headings inside an RTL slide must set `font-family:'Yekan Bakh VF Black','Yekan Bakh VF',sans-serif` themselves; the frame supplies the body stack.
