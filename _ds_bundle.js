/* @ds-bundle: {"format":4,"namespace":"MilliGroupDesignSystem_fda590","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"ChapterDots","sourcePath":"components/decision-deck/ChapterDots.jsx"},{"name":"ChapterOpener","sourcePath":"components/decision-deck/ChapterOpener.jsx"},{"name":"ChipRow","sourcePath":"components/decision-deck/ChipRow.jsx"},{"name":"ContentSlide","sourcePath":"components/decision-deck/ContentSlide.jsx"},{"name":"DeckContents","sourcePath":"components/decision-deck/DeckContents.jsx"},{"name":"DeckCover","sourcePath":"components/decision-deck/DeckCover.jsx"},{"name":"DeckFooter","sourcePath":"components/decision-deck/DeckFooter.jsx"},{"name":"Diamond","sourcePath":"components/decision-deck/Diamond.jsx"},{"name":"DotScale","sourcePath":"components/decision-deck/DotScale.jsx"},{"name":"FunnelBars","sourcePath":"components/decision-deck/FunnelBars.jsx"},{"name":"NumberedPoint","sourcePath":"components/decision-deck/NumberedPoint.jsx"},{"name":"RowBadge","sourcePath":"components/decision-deck/RowBadge.jsx"},{"name":"RowTable","sourcePath":"components/decision-deck/RowTable.jsx"},{"name":"StatBlock","sourcePath":"components/decision-deck/StatBlock.jsx"},{"name":"Takeaway","sourcePath":"components/decision-deck/Takeaway.jsx"},{"name":"ThanksSlide","sourcePath":"components/decision-deck/ThanksSlide.jsx"},{"name":"CoverSlide","sourcePath":"components/layouts/CoverSlide.jsx"},{"name":"EndSlide","sourcePath":"components/layouts/EndSlide.jsx"},{"name":"GradientSlide","sourcePath":"components/layouts/GradientSlide.jsx"},{"name":"SectionSlide","sourcePath":"components/layouts/SectionSlide.jsx"},{"name":"ThreeColumnSlide","sourcePath":"components/layouts/ThreeColumnSlide.jsx"},{"name":"TocSlide","sourcePath":"components/layouts/TocSlide.jsx"},{"name":"TwoColumnSlide","sourcePath":"components/layouts/TwoColumnSlide.jsx"},{"name":"WatermarkSlide","sourcePath":"components/layouts/WatermarkSlide.jsx"},{"name":"BulletList","sourcePath":"components/slide-chrome/BulletList.jsx"},{"name":"ColumnHead","sourcePath":"components/slide-chrome/ColumnHead.jsx"},{"name":"SectionBar","sourcePath":"components/slide-chrome/SectionBar.jsx"},{"name":"SlideFooter","sourcePath":"components/slide-chrome/SlideFooter.jsx"},{"name":"SlideFrame","sourcePath":"components/slide-chrome/SlideFrame.jsx"},{"name":"SlideTitle","sourcePath":"components/slide-chrome/SlideTitle.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"ca06bc75e17d","components/brand/Wordmark.jsx":"5ceecc92eceb","components/decision-deck/ChapterDots.jsx":"272019b365dc","components/decision-deck/ChapterOpener.jsx":"c11878d612e3","components/decision-deck/ChipRow.jsx":"e370a19f75fd","components/decision-deck/ContentSlide.jsx":"f32047bcb79d","components/decision-deck/DeckContents.jsx":"4ac0094b50a4","components/decision-deck/DeckCover.jsx":"e691fb714aa9","components/decision-deck/DeckFooter.jsx":"336071b85995","components/decision-deck/Diamond.jsx":"105d42264e87","components/decision-deck/DotScale.jsx":"f6411a917b97","components/decision-deck/FunnelBars.jsx":"7084b6fa9f2f","components/decision-deck/NumberedPoint.jsx":"6330bca7af9b","components/decision-deck/RowBadge.jsx":"e299f408cb76","components/decision-deck/RowTable.jsx":"499026c1b9b6","components/decision-deck/StatBlock.jsx":"504961407f4d","components/decision-deck/Takeaway.jsx":"ad8c47faab0f","components/decision-deck/ThanksSlide.jsx":"a98b3ab5b453","components/layouts/CoverSlide.jsx":"b184592bca07","components/layouts/EndSlide.jsx":"955becdf5e1a","components/layouts/GradientSlide.jsx":"546118f3ff74","components/layouts/SectionSlide.jsx":"3acbd9f791b4","components/layouts/ThreeColumnSlide.jsx":"040edb00b64f","components/layouts/TocSlide.jsx":"a04c78d07819","components/layouts/TwoColumnSlide.jsx":"d3bcb7142361","components/layouts/WatermarkSlide.jsx":"890b1dc77bc9","components/slide-chrome/BulletList.jsx":"a217970798e7","components/slide-chrome/ColumnHead.jsx":"1aae632e713a","components/slide-chrome/SectionBar.jsx":"b101cd39c6e0","components/slide-chrome/SlideFooter.jsx":"a87cbd4a8bb0","components/slide-chrome/SlideFrame.jsx":"152de03f546f","components/slide-chrome/SlideTitle.jsx":"76a2a3d6bd10"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MilliGroupDesignSystem_fda590 = window.MilliGroupDesignSystem_fda590 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FILES = {
  'lockup-white': 'milli-lockup-white.svg',
  'lockup-black': 'milli-lockup-black.svg',
  'lockup-light-white': 'milli-lockup-light-white.svg',
  'lockup-light-black': 'milli-lockup-light-black.svg',
  'mark-white': 'milli-mark-white.svg',
  'mark-black': 'milli-mark-black.svg',
  'wordmark-white': 'milli-wordmark-white.svg',
  'wordmark-black': 'milli-wordmark-black.svg'
};
function Logo({
  variant = 'lockup-white',
  height,
  width,
  base = 'assets/logo',
  style,
  alt = 'Milli Group',
  ...rest
}) {
  const file = FILES[variant] || FILES['lockup-white'];
  return /*#__PURE__*/React.createElement("img", _extends({
    src: base + '/' + file,
    alt: alt,
    style: {
      display: 'block',
      height: height || (width ? 'auto' : 48),
      width: width || 'auto',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The typeset footer lockup the template itself uses: "Milli" bold + " Group" medium, one colour. */
function Wordmark({
  size = 'var(--fs-wordmark)',
  color = 'var(--text-muted)',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-en)',
      fontSize: size,
      color,
      letterSpacing: 'var(--tracking-tight)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-bold)'
    }
  }, "Milli"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-medium)'
    }
  }, " Group"));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/decision-deck/ChapterDots.jsx
try { (() => {
/**
 * Position within a chapter: one rounded diamond per slide, gold up to the current one.
 * The deck's squares are all 45deg-rotated squares (rot="2700000" in the source), so the
 * shape is a rounded diamond and the layout box stays the unrotated side length.
 * RTL decks read right to left, so the first slide is the rightmost diamond.
 */
function ChapterDots({
  total = 3,
  active = 1,
  size = 22,
  tone = 'light',
  style
}) {
  const rest = tone === 'dark' ? 'rgba(255,255,255,.28)' : 'var(--milli-black)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row-reverse',
      gap: 13,
      ...style
    }
  }, Array.from({
    length: total
  }, (_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: size,
      height: size,
      borderRadius: Math.round(size * 0.28),
      transform: 'rotate(45deg)',
      background: i < active ? 'var(--milli-mango)' : rest
    }
  })));
}
Object.assign(__ds_scope, { ChapterDots });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/decision-deck/ChapterDots.jsx", error: String((e && e.message) || e) }); }

// components/decision-deck/ChapterOpener.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Four nested rounded diamonds stepping in from the bottom-left corner, dark grey to
 * mango — the chapter-divider signature. Positions are the unrotated top-left corners as
 * in the source deck; the slide's overflow clips what runs off the edge.
 */
function Concentric() {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: -220,
      top: 320,
      width: 560,
      height: 560,
      borderRadius: 112,
      transform: 'rotate(45deg)',
      background: 'var(--milli-ink-75)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: -140,
      top: 400,
      width: 400,
      height: 400,
      borderRadius: 80,
      transform: 'rotate(45deg)',
      background: 'var(--milli-gray-56)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: -60,
      top: 480,
      width: 240,
      height: 240,
      borderRadius: 48,
      transform: 'rotate(45deg)',
      background: 'var(--milli-mango-dark)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      top: 554,
      width: 92,
      height: 92,
      borderRadius: 18,
      transform: 'rotate(45deg)',
      background: 'var(--milli-mango)'
    }
  }));
}

/**
 * Chapter divider. Black ground, chapter numeral and title on the outer half, a short
 * abstract underneath, and an "in this chapter" contents list on the inner half.
 */
function ChapterOpener({
  number = '01',
  title = '',
  abstract = '',
  contentsLabel = '',
  contents = [],
  dir = 'rtl',
  style,
  ...rest
}) {
  const rtl = dir === 'rtl';
  return /*#__PURE__*/React.createElement("div", _extends({
    dir: dir,
    style: {
      position: 'relative',
      width: 1280,
      height: 720,
      overflow: 'hidden',
      background: 'var(--milli-black)',
      color: 'var(--milli-white)',
      fontFamily: 'var(--font-fa-body)',
      direction: rtl ? 'rtl' : 'ltr',
      textAlign: rtl ? 'right' : 'left',
      unicodeBidi: 'isolate',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(Concentric, null), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      [rtl ? 'right' : 'left']: 0,
      top: 120,
      width: 660,
      height: 5,
      background: 'var(--milli-mango)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      [rtl ? 'right' : 'left']: 64,
      top: 172,
      width: 12,
      height: 118,
      borderRadius: 6,
      background: 'var(--milli-mango)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      [rtl ? 'right' : 'left']: 102,
      top: 168,
      width: 556
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-fa-head)',
      fontSize: 'var(--fs-dm-chapter-num)',
      fontWeight: 'var(--fw-black)',
      color: 'var(--milli-mango)'
    }
  }, number), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: 'var(--font-fa-head)',
      fontSize: 'var(--fs-dm-chapter)',
      fontWeight: 'var(--fw-black)',
      lineHeight: 1.05
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '26px 0 0',
      fontSize: 'var(--fs-dm-body)',
      lineHeight: 'var(--lh-dm-body)',
      textWrap: 'pretty'
    }
  }, abstract)), contents.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      [rtl ? 'right' : 'left']: 756,
      top: 168,
      width: 462
    }
  }, contentsLabel ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-dm-label)',
      opacity: .78
    }
  }, contentsLabel) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, contents.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: rtl ? 'row' : 'row-reverse',
      alignItems: 'flex-start',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      width: 20,
      height: 20,
      marginTop: 6,
      borderRadius: 6,
      transform: 'rotate(45deg)',
      background: 'var(--milli-mango)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 'var(--fs-dm-lede)',
      lineHeight: 1.35
    }
  }, item))))) : null);
}
Object.assign(__ds_scope, { ChapterOpener });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/decision-deck/ChapterOpener.jsx", error: String((e && e.message) || e) }); }

// components/decision-deck/ChipRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  chosen: {
    background: 'var(--milli-mango)',
    color: 'var(--milli-black)',
    fontWeight: 'var(--fw-bold)',
    border: '1px solid var(--milli-mango)'
  },
  viable: {
    background: 'var(--milli-mango-light)',
    color: 'var(--milli-black)',
    fontWeight: 'var(--fw-bold)',
    border: '1px solid var(--milli-mango-light)'
  },
  option: {
    background: 'transparent',
    color: 'var(--milli-ink-70)',
    fontWeight: 'var(--fw-regular)',
    border: '1px solid var(--milli-black)'
  },
  rejected: {
    background: 'transparent',
    color: 'var(--milli-ink-54)',
    fontWeight: 'var(--fw-regular)',
    border: '1px solid var(--milli-ink-54)'
  }
};

/** The option space along one dimension: every choice shown, the recommended one gold. */
function ChipRow({
  chips = [],
  dir = 'rtl',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: dir === 'rtl' ? 'row-reverse' : 'row',
      flexWrap: 'wrap',
      gap: 9,
      ...style
    }
  }, rest), chips.map((chip, i) => {
    const c = typeof chip === 'string' ? {
      label: chip,
      tone: 'option'
    } : chip;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        padding: '7px 12px',
        fontSize: 'var(--fs-dm-caption)',
        lineHeight: 1.5,
        whiteSpace: 'nowrap',
        ...(TONES[c.tone] || TONES.option)
      }
    }, c.label);
  }));
}
Object.assign(__ds_scope, { ChipRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/decision-deck/ChipRow.jsx", error: String((e && e.message) || e) }); }

// components/decision-deck/ContentSlide.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SURFACES = {
  white: {
    bg: 'var(--milli-white)',
    ink: 'var(--milli-black)',
    foot: 'light',
    dots: 'light'
  },
  panel: {
    bg: 'var(--milli-gray-panel)',
    ink: 'var(--milli-black)',
    foot: 'tint',
    dots: 'light'
  },
  wash: {
    bg: 'var(--milli-mango-wash-solid)',
    ink: 'var(--milli-black)',
    foot: 'tint',
    dots: 'light'
  },
  gold: {
    bg: 'var(--milli-mango)',
    ink: 'var(--milli-black)',
    foot: 'gold',
    dots: 'light'
  },
  black: {
    bg: 'var(--milli-black)',
    ink: 'var(--milli-white)',
    foot: 'dark',
    dots: 'dark'
  }
};

/**
 * Corner ornament: two nested rounded diamonds bleeding off the bottom-left. Positions
 * are the unrotated top-left corners, as in the source deck; the 45deg rotation happens
 * about each shape's centre, so the visual extent is 1.41x the side length and the slide's
 * own overflow does the clipping.
 */
function Ornament() {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: -70,
      top: 560,
      width: 202,
      height: 202,
      borderRadius: 40,
      transform: 'rotate(45deg)',
      background: 'var(--milli-black)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: -26,
      top: 604,
      width: 114,
      height: 114,
      borderRadius: 23,
      transform: 'rotate(45deg)',
      background: 'var(--milli-mango)'
    }
  }));
}

/**
 * The workhorse content slide: chapter dots, eyebrow, headline, the header hairline
 * with its gold segment, and the footer. Body content is placed absolutely by the caller,
 * usually starting at y=190 inside the 64px margins.
 */
function ContentSlide({
  title = '',
  eyebrow = '',
  dots,
  page,
  total,
  label = '',
  surface = 'white',
  ornament = false,
  dir = 'rtl',
  titleSize = 'var(--fs-dm-title)',
  titleInset = 226,
  children,
  style,
  ...rest
}) {
  const s = SURFACES[surface] || SURFACES.white;
  const rtl = dir === 'rtl';
  const hair = surface === 'black' ? 'rgba(255,255,255,.5)' : 'var(--milli-black)';
  return /*#__PURE__*/React.createElement("div", _extends({
    dir: dir,
    style: {
      position: 'relative',
      width: 1280,
      height: 720,
      overflow: 'hidden',
      background: s.bg,
      color: s.ink,
      fontFamily: "'B Yekan','Yekan Bakh VF',sans-serif",
      direction: rtl ? 'rtl' : 'ltr',
      textAlign: rtl ? 'right' : 'left',
      unicodeBidi: 'isolate',
      ...style
    }
  }, rest), ornament ? /*#__PURE__*/React.createElement(Ornament, null) : null, dots ? /*#__PURE__*/React.createElement(ChapterDotsSlot, {
    dots: dots,
    tone: s.dots,
    rtl: rtl
  }) : null, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      [rtl ? 'right' : 'left']: 64,
      top: 44,
      fontSize: 'var(--fs-dm-caption)',
      color: surface === 'black' ? 'rgba(255,255,255,.7)' : 'var(--milli-ink-58)'
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      position: 'absolute',
      [rtl ? 'left' : 'right']: titleInset,
      [rtl ? 'right' : 'left']: 64,
      top: 68,
      margin: 0,
      fontFamily: 'var(--font-fa-head)',
      fontSize: titleSize,
      fontWeight: 'var(--fw-black)',
      lineHeight: 'var(--lh-dm-title)',
      textWrap: 'pretty'
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 158,
      height: 1,
      background: hair
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      [rtl ? 'right' : 'left']: 0,
      top: 155,
      width: 'var(--dm-gold-rule-w)',
      height: 6,
      background: 'var(--milli-mango)'
    }
  }), children, /*#__PURE__*/React.createElement(DeckFooterSlot, {
    label: label,
    page: page,
    total: total,
    tone: s.foot,
    dir: dir
  }));
}

/* The dots sit on the edge OPPOSITE the eyebrow — in the source deck the eyebrow is on
   the reading edge and the dots on the far one, which is what leaves the title its inset. */
function ChapterDotsSlot({
  dots,
  tone,
  rtl
}) {
  const rest = tone === 'dark' ? 'rgba(255,255,255,.28)' : 'var(--milli-black)';
  const total = dots.total || 3,
    active = dots.active || 1;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      [rtl ? 'left' : 'right']: 64,
      top: 54,
      display: 'flex',
      flexDirection: rtl ? 'row-reverse' : 'row',
      gap: 13
    }
  }, Array.from({
    length: total
  }, (_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 22,
      height: 22,
      borderRadius: 6,
      transform: 'rotate(45deg)',
      background: i < active ? 'var(--milli-mango)' : rest
    }
  })));
}
function DeckFooterSlot({
  label,
  page,
  total,
  tone,
  dir
}) {
  const ink = tone === 'gold' ? 'var(--milli-black)' : tone === 'dark' ? 'rgba(255,255,255,.72)' : tone === 'tint' ? 'var(--milli-ink-70)' : 'var(--milli-ink-75)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 40,
      right: 40,
      top: 671,
      display: 'flex',
      flexDirection: dir === 'rtl' ? 'row-reverse' : 'row',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 24,
      color: ink
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-dm-page)',
      letterSpacing: '.02em'
    }
  }, page != null && total != null ? page + ' / ' + total : ''), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontSize: 'var(--fs-dm-label)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-en)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-dm-body-sm)',
      letterSpacing: '-.01em',
      whiteSpace: 'nowrap',
      direction: 'ltr'
    }
  }, "MilliGroup"));
}
Object.assign(__ds_scope, { ContentSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/decision-deck/ContentSlide.jsx", error: String((e && e.message) || e) }); }

// components/decision-deck/DeckContents.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Contents slide as three bands, not one long list. Each band groups the chapters that
 * do one job — the answer, the evidence, the plan — and carries its own footnote.
 */
function DeckContents({
  title = '',
  subtitle = '',
  bands = [],
  dir = 'rtl',
  style,
  ...rest
}) {
  const rtl = dir === 'rtl';
  return /*#__PURE__*/React.createElement("div", _extends({
    dir: dir,
    style: {
      position: 'relative',
      width: 1280,
      height: 720,
      overflow: 'hidden',
      background: 'var(--milli-black)',
      color: 'var(--milli-white)',
      fontFamily: 'var(--font-fa-body)',
      direction: rtl ? 'rtl' : 'ltr',
      textAlign: rtl ? 'right' : 'left',
      unicodeBidi: 'isolate',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      [rtl ? 'right' : 'left']: 64,
      top: 48,
      fontFamily: 'var(--font-fa-head)',
      fontSize: 'var(--fs-dm-title)',
      fontWeight: 'var(--fw-black)'
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      [rtl ? 'left' : 'right']: 64,
      top: 60,
      fontSize: 'var(--fs-dm-caption)'
    }
  }, subtitle) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 64,
      right: 64,
      top: 128,
      height: 1,
      background: 'var(--milli-white)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 64,
      right: 64,
      top: 128,
      display: 'flex',
      flexDirection: rtl ? 'row-reverse' : 'row',
      gap: 'var(--dm-gutter)'
    }
  }, bands.map((band, bi) => /*#__PURE__*/React.createElement("div", {
    key: bi,
    style: {
      flex: 1,
      position: 'relative',
      height: 516
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: bi === 0 ? 'var(--milli-mango)' : 'var(--milli-white)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: 'flex',
      flexDirection: rtl ? 'row-reverse' : 'row',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-dm-caption)',
      color: bi === 0 ? 'var(--milli-mango)' : 'var(--milli-white)'
    }
  }, band.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-dm-label-sm)',
      opacity: .8
    }
  }, band.range)), (band.items || []).map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginTop: 22,
      paddingTop: 22,
      borderTop: '1px solid rgba(255,255,255,.55)',
      display: 'flex',
      flexDirection: rtl ? 'row-reverse' : 'row',
      alignItems: 'baseline',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      minWidth: 44,
      fontFamily: 'var(--font-fa-head)',
      fontSize: 'var(--fs-dm-toc-num)',
      fontWeight: 'var(--fw-black)',
      color: bi === 0 ? 'var(--milli-mango)' : 'var(--milli-white)'
    }
  }, item.number), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 'var(--fs-dm-toc-item)'
    }
  }, item.title))), band.note ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      paddingTop: 19,
      borderTop: '1px solid rgba(255,255,255,.55)',
      fontSize: 'var(--fs-dm-caption)',
      lineHeight: 1.4
    }
  }, band.note) : null))));
}
Object.assign(__ds_scope, { DeckContents });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/decision-deck/DeckContents.jsx", error: String((e && e.message) || e) }); }

// components/decision-deck/DeckCover.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Deck cover: black ground, kicker, title, the decision question, logo and year. */
function DeckCover({
  kicker = '',
  title = '',
  question = '',
  note = '',
  year = '',
  logo = null,
  dir = 'rtl',
  style,
  ...rest
}) {
  const rtl = dir === 'rtl';
  return /*#__PURE__*/React.createElement("div", _extends({
    dir: dir,
    style: {
      position: 'relative',
      width: 1280,
      height: 720,
      overflow: 'hidden',
      background: 'var(--milli-black)',
      color: 'var(--milli-white)',
      fontFamily: 'var(--font-fa-body)',
      direction: rtl ? 'rtl' : 'ltr',
      textAlign: rtl ? 'right' : 'left',
      unicodeBidi: 'isolate',
      ...style
    }
  }, rest), note ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      [rtl ? 'right' : 'left']: 64,
      top: 52,
      fontSize: 'var(--fs-dm-body-sm)'
    }
  }, note) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      [rtl ? 'right' : 'left']: 64,
      top: 246,
      width: 1112
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: rtl ? 'row' : 'row-reverse',
      alignItems: 'center',
      gap: 12,
      justifyContent: rtl ? 'flex-start' : 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: 'var(--gradient-mango-dot)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-dm-body)',
      color: 'var(--milli-mango)'
    }
  }, kicker)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26,
      fontFamily: 'var(--font-fa-head)',
      fontSize: 'var(--fs-dm-cover)',
      fontWeight: 'var(--fw-black)',
      lineHeight: 1.1
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      maxWidth: 726,
      marginInlineStart: rtl ? 'auto' : 0,
      fontSize: 'var(--fs-dm-cover-sub)',
      lineHeight: 1.45,
      textWrap: 'pretty'
    }
  }, question)), logo ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      [rtl ? 'left' : 'right']: 104,
      top: 262
    }
  }, logo) : null, year ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      [rtl ? 'right' : 'left']: 104,
      top: 640,
      fontSize: 'var(--fs-dm-body)'
    }
  }, year) : null);
}
Object.assign(__ds_scope, { DeckCover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/decision-deck/DeckCover.jsx", error: String((e && e.message) || e) }); }

// components/decision-deck/DeckFooter.jsx
try { (() => {
/** The three-part slide footer: Latin logotype, deck label, page counter. */
function DeckFooter({
  label = '',
  page,
  total,
  tone = 'light',
  dir = 'rtl',
  style
}) {
  const ink = tone === 'gold' ? 'var(--milli-black)' : tone === 'dark' ? 'rgba(255,255,255,.72)' : tone === 'tint' ? 'var(--milli-ink-70)' : 'var(--milli-ink-75)';
  const body = "'B Yekan','Yekan Bakh VF',sans-serif";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 40,
      right: 40,
      top: 671,
      display: 'flex',
      flexDirection: dir === 'rtl' ? 'row-reverse' : 'row',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 24,
      color: ink,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-dm-page)',
      fontFamily: body,
      letterSpacing: '.02em'
    }
  }, page != null && total != null ? page + ' / ' + total : ''), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontSize: 'var(--fs-dm-label)',
      fontFamily: body
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-en)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-dm-body-sm)',
      letterSpacing: '-.01em',
      whiteSpace: 'nowrap',
      direction: 'ltr'
    }
  }, "MilliGroup"));
}
Object.assign(__ds_scope, { DeckFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/decision-deck/DeckFooter.jsx", error: String((e && e.message) || e) }); }

// components/decision-deck/Diamond.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The deck's signature shape: a rounded square rotated 45 degrees. Every square in the
 * source deck carries rot="2700000", so nothing in this system is ever a plain square.
 * Any label inside is counter-rotated so it reads upright, exactly as the .pptx does.
 * The layout box is the unrotated side length; the shape spans size x 1.41 visually.
 */
function Diamond({
  size = 34,
  fill = 'var(--milli-mango)',
  radius,
  children,
  labelStyle,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto',
      width: size,
      height: size,
      borderRadius: radius != null ? radius : Math.round(size * 0.28),
      transform: 'rotate(45deg)',
      background: fill,
      ...style
    }
  }, rest), children != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      transform: 'rotate(-45deg)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: 1,
      ...labelStyle
    }
  }, children) : null);
}
Object.assign(__ds_scope, { Diamond });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/decision-deck/Diamond.jsx", error: String((e && e.message) || e) }); }

// components/decision-deck/DotScale.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * A rating read from the outer edge inwards. The deck uses two idioms: short bars for a
 * three-step qualitative rank, and diamonds for a four-step weight.
 */
function DotScale({
  value = 0,
  max = 3,
  shape = 'bar',
  size = 15,
  tone = 'light',
  dir = 'rtl',
  style,
  ...rest
}) {
  const empty = tone === 'muted' ? 'var(--milli-gray-panel)' : 'var(--milli-black)';
  const diamond = shape === 'diamond';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: dir === 'rtl' ? 'row-reverse' : 'row',
      alignItems: 'center',
      gap: diamond ? 7 : 3,
      ...style
    }
  }, rest), Array.from({
    length: max
  }, (_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: diamond ? {
      width: size,
      height: size,
      borderRadius: Math.round(size * 0.28),
      transform: 'rotate(45deg)',
      background: i < value ? 'var(--milli-mango)' : empty
    } : {
      width: 18,
      height: 5,
      borderRadius: 2.5,
      background: i < value ? 'var(--milli-mango)' : empty
    }
  })));
}
Object.assign(__ds_scope, { DotScale });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/decision-deck/DotScale.jsx", error: String((e && e.message) || e) }); }

// components/decision-deck/FunnelBars.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The narrowing stack — population to target, or TAM to SOM. Each step names the filter
 * that removed the previous step's people, so the reader can argue with the arithmetic.
 */
function FunnelBars({
  steps = [],
  dir = 'rtl',
  style,
  ...rest
}) {
  const rtl = dir === 'rtl';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      ...style
    }
  }, rest), steps.map((step, i) => {
    const tone = step.tone || (i === steps.length - 1 ? 'gold' : 'black');
    const bg = tone === 'gold' ? 'var(--milli-mango)' : tone === 'grey' ? 'var(--milli-gray-56)' : 'var(--milli-black)';
    return /*#__PURE__*/React.createElement("div", {
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: rtl ? 'row-reverse' : 'row',
        alignItems: 'baseline',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 'var(--fw-bold)',
        fontSize: 'var(--fs-dm-body)'
      }
    }, step.label), step.meta ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-dm-label)',
        color: 'var(--milli-ink-58)'
      }
    }, step.meta) : null, step.flag ? /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '2px 8px',
        background: 'var(--milli-mango)',
        fontSize: 'var(--fs-dm-label-sm)',
        fontWeight: 'var(--fw-bold)'
      }
    }, step.flag) : null), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8,
        display: 'flex',
        flexDirection: rtl ? 'row-reverse' : 'row',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: '0 0 auto',
        width: (step.width || 100) + '%',
        maxWidth: '100%',
        height: 22,
        background: bg
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 'var(--fw-bold)',
        fontSize: 'var(--fs-dm-body-sm)',
        whiteSpace: 'nowrap'
      }
    }, step.value)));
  }));
}
Object.assign(__ds_scope, { FunnelBars });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/decision-deck/FunnelBars.jsx", error: String((e && e.message) || e) }); }

// components/decision-deck/NumberedPoint.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * A numbered claim. 'stacked' puts the diamond above a 2px rule with the claim under it —
 * three across the slide. 'row' runs the diamond beside a full-width rule, for a list.
 */
function NumberedPoint({
  number,
  title = '',
  body = '',
  variant = 'stacked',
  tone = 'light',
  dir = 'rtl',
  style,
  ...rest
}) {
  const rtl = dir === 'rtl';
  const ink = tone === 'dark' ? 'var(--milli-white)' : 'var(--milli-black)';
  const sub = tone === 'dark' ? 'rgba(255,255,255,.78)' : 'var(--milli-ink-80)';
  const rule = tone === 'dark' ? 'rgba(255,255,255,.5)' : 'var(--milli-black)';
  const s = variant === 'stacked' ? 52 : 34;
  const badge = /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto',
      width: s,
      height: s,
      borderRadius: Math.round(s * 0.28),
      transform: 'rotate(45deg)',
      background: 'var(--milli-mango)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      transform: 'rotate(-45deg)',
      color: 'var(--milli-black)',
      fontFamily: 'var(--font-fa-head)',
      fontWeight: 'var(--fw-black)',
      fontSize: variant === 'stacked' ? 24 : 16,
      lineHeight: 1
    }
  }, number));
  if (variant === 'row') {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: 'flex',
        flexDirection: rtl ? 'row' : 'row-reverse',
        alignItems: 'flex-start',
        gap: 26,
        ...style
      }
    }, rest), badge, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        paddingTop: 2
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 2,
        background: rule,
        marginBottom: 14
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 'var(--fw-bold)',
        fontSize: 'var(--fs-dm-lead)',
        color: ink,
        lineHeight: 1.3
      }
    }, title), body ? /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8,
        fontSize: 'var(--fs-dm-caption)',
        color: sub,
        lineHeight: 1.5,
        textWrap: 'pretty'
      }
    }, body) : null));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: rtl ? 'row-reverse' : 'row',
      justifyContent: 'flex-start',
      paddingBottom: 11
    }
  }, badge), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 25,
      height: 2,
      background: rule
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26,
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-dm-lead)',
      color: ink,
      lineHeight: 1.3,
      textWrap: 'pretty'
    }
  }, title), body ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 'var(--fs-dm-caption)',
      color: sub,
      lineHeight: 1.5,
      textWrap: 'pretty'
    }
  }, body) : null);
}
Object.assign(__ds_scope, { NumberedPoint });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/decision-deck/NumberedPoint.jsx", error: String((e && e.message) || e) }); }

// components/decision-deck/RowBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 28,
  md: 34,
  lg: 42,
  xl: 52,
  xxl: 86
};

/** The gold diamond carrying a numeral, an option letter, or a +/- sign. */
function RowBadge({
  children,
  size = 'lg',
  tone = 'gold',
  style,
  ...rest
}) {
  const px = SIZES[size] || SIZES.lg;
  const bg = tone === 'black' ? 'var(--milli-black)' : tone === 'outline' ? 'transparent' : 'var(--milli-mango)';
  const fg = tone === 'black' ? 'var(--milli-white)' : 'var(--milli-black)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto',
      width: px,
      height: px,
      borderRadius: Math.round(px * 0.28),
      transform: 'rotate(45deg)',
      background: bg,
      border: tone === 'outline' ? '2px solid var(--milli-black)' : undefined,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      transform: 'rotate(-45deg)',
      color: fg,
      fontFamily: 'var(--font-fa-head)',
      fontWeight: 'var(--fw-black)',
      fontSize: Math.max(12, Math.round(px * 0.42)),
      lineHeight: 1
    }
  }, children));
}
Object.assign(__ds_scope, { RowBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/decision-deck/RowBadge.jsx", error: String((e && e.message) || e) }); }

// components/decision-deck/RowTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The striped comparison table. Column labels in grey above a 2px rule, then rows of a
 * fixed height alternating white and near-white, separated by hairlines. Any cell can be
 * a node, so badges, dot scales and chips drop straight in.
 */
function RowTable({
  columns = [],
  rows = [],
  rowHeight = 79,
  highlight = -1,
  dir = 'rtl',
  style,
  ...rest
}) {
  const rtl = dir === 'rtl';
  const track = columns.map(c => c.width ? typeof c.width === 'number' ? c.width + 'px' : c.width : 'minmax(0,1fr)').join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      direction: rtl ? 'rtl' : 'ltr',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: track,
      alignItems: 'baseline',
      columnGap: 20,
      paddingBottom: 8
    }
  }, columns.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontSize: 'var(--fs-dm-label)',
      color: 'var(--milli-ink-58)',
      textAlign: c.align || (rtl ? 'right' : 'left')
    }
  }, c.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '2px solid var(--milli-black)'
    }
  }, rows.map((row, ri) => {
    const cells = Array.isArray(row) ? row : row.cells || [];
    const isHi = ri === highlight;
    return /*#__PURE__*/React.createElement("div", {
      key: ri,
      style: {
        display: 'grid',
        gridTemplateColumns: track,
        alignItems: 'center',
        columnGap: 20,
        minHeight: rowHeight,
        padding: '10px 16px',
        background: isHi ? 'var(--milli-mango)' : ri % 2 ? 'var(--milli-panel-97)' : 'var(--milli-white)',
        borderBottom: '1px solid var(--milli-black)',
        boxShadow: isHi ? 'inset 4px 0 0 0 var(--milli-mango-dark)' : undefined
      }
    }, cells.map((cell, ci) => /*#__PURE__*/React.createElement("div", {
      key: ci,
      style: {
        textAlign: columns[ci] && columns[ci].align ? columns[ci].align : rtl ? 'right' : 'left',
        fontSize: 'var(--fs-dm-body-sm)',
        color: 'var(--milli-ink-80)',
        lineHeight: 1.4
      }
    }, cell)));
  })));
}
Object.assign(__ds_scope, { RowTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/decision-deck/RowTable.jsx", error: String((e && e.message) || e) }); }

// components/decision-deck/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** One number in a diamond with its caption — the market-size and unit-economics figures. */
function StatBlock({
  value = '',
  caption = '',
  tone = 'black',
  size = 118,
  dir = 'rtl',
  style,
  ...rest
}) {
  const rtl = dir === 'rtl';
  const bg = tone === 'gold' ? 'var(--milli-mango)' : tone === 'outline' ? 'var(--milli-white)' : 'var(--milli-black)';
  const fg = tone === 'black' ? 'var(--milli-white)' : 'var(--milli-black)';
  const box = Math.round(size * 1.415);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: rtl ? 'row' : 'row-reverse',
      alignItems: 'center',
      gap: 24,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      width: box,
      height: box,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: Math.round(size * 0.24),
      transform: 'rotate(45deg)',
      background: bg,
      border: tone === 'outline' ? '2px solid var(--milli-black)' : undefined
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      transform: 'rotate(-45deg)',
      color: fg,
      fontFamily: 'var(--font-fa-head)',
      fontWeight: 'var(--fw-black)',
      fontSize: 26,
      lineHeight: 1,
      whiteSpace: 'nowrap'
    }
  }, value))), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 36,
      height: 2,
      background: tone === 'gold' ? 'var(--milli-mango)' : 'var(--milli-black)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 11,
      fontSize: 'var(--fs-dm-caption)',
      color: 'var(--milli-ink-80)',
      lineHeight: 1.5,
      textWrap: 'pretty'
    }
  }, caption)));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/decision-deck/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/decision-deck/Takeaway.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  black: {
    background: 'var(--milli-black)',
    color: 'var(--milli-white)'
  },
  gold: {
    background: 'var(--milli-mango)',
    color: 'var(--milli-black)'
  },
  grey: {
    background: 'var(--milli-panel-83)',
    color: 'var(--milli-black)'
  },
  panel: {
    background: 'var(--milli-panel-96)',
    color: 'var(--milli-black)'
  }
};

/**
 * The full-width band that closes a slide with what the reader should take away.
 * One per slide at most; if two claims compete, the slide is doing two jobs.
 */
function Takeaway({
  children,
  tone = 'black',
  accent = false,
  bleed = false,
  dir = 'rtl',
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.black;
  const rtl = dir === 'rtl';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: rtl ? 'row' : 'row-reverse',
      alignItems: 'center',
      gap: 22,
      padding: bleed ? '22px 64px' : '22px 26px',
      fontFamily: 'var(--font-fa-head)',
      fontWeight: 'var(--fw-black)',
      fontSize: 'var(--fs-dm-lead)',
      lineHeight: 1.4,
      textWrap: 'pretty',
      ...t,
      ...style
    }
  }, rest), accent ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: '0 0 auto',
      width: 12,
      height: 44,
      borderRadius: 6,
      background: 'var(--milli-mango)'
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: tone === 'black' && accent ? 'var(--milli-mango)' : undefined
    }
  }, children));
}
Object.assign(__ds_scope, { Takeaway });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/decision-deck/Takeaway.jsx", error: String((e && e.message) || e) }); }

// components/decision-deck/ThanksSlide.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PATTERN_ROWS = 4,
  PATTERN_COLS = 13;

/** Closing slide: the gold-and-white diamond lattice fading into black, thanks line, logo. */
function ThanksSlide({
  title = '',
  label = '',
  logo = null,
  dir = 'rtl',
  style,
  ...rest
}) {
  const rtl = dir === 'rtl';
  const cells = [];
  for (let r = 0; r < PATTERN_ROWS; r++) {
    for (let c = 0; c < PATTERN_COLS; c++) {
      const white = (r * 2 + c) % 3 === 2;
      cells.push(/*#__PURE__*/React.createElement("span", {
        key: r + '-' + c,
        style: {
          position: 'absolute',
          left: 64 + c * 54 + (r % 2 ? 27 : 0),
          top: 470 + r * 54,
          width: 44,
          height: 44,
          borderRadius: 12,
          transform: 'rotate(45deg)',
          background: white ? 'var(--milli-white)' : 'var(--milli-mango)'
        }
      }));
    }
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    dir: dir,
    style: {
      position: 'relative',
      width: 1280,
      height: 720,
      overflow: 'hidden',
      background: 'var(--milli-black)',
      color: 'var(--milli-white)',
      fontFamily: 'var(--font-fa-body)',
      direction: rtl ? 'rtl' : 'ltr',
      textAlign: rtl ? 'right' : 'left',
      unicodeBidi: 'isolate',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0
    }
  }, cells), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 460,
      height: 260,
      background: 'linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,.35) 60%,rgba(0,0,0,.72) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      [rtl ? 'right' : 'left']: 104,
      top: 300,
      width: 12,
      height: 89,
      borderRadius: 6,
      background: 'var(--milli-mango)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      [rtl ? 'right' : 'left']: 140,
      top: 306,
      fontFamily: 'var(--font-fa-head)',
      fontSize: 'var(--fs-dm-chapter)',
      fontWeight: 'var(--fw-black)'
    }
  }, title), logo ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      [rtl ? 'left' : 'right']: 104,
      top: 312
    }
  }, logo) : null, label ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      [rtl ? 'right' : 'left']: 104,
      top: 641,
      fontSize: 'var(--fs-dm-body-sm)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { ThanksSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/decision-deck/ThanksSlide.jsx", error: String((e && e.message) || e) }); }

// components/slide-chrome/BulletList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Body copy list: Arial bullet, 12pt Montserrat, 90% leading, 10pt space before each item. */
function BulletList({
  items = [],
  size = 'var(--fs-body)',
  color = 'inherit',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ul", _extends({
    style: {
      margin: 0,
      paddingInlineStart: '17px',
      listStyle: 'none',
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      position: 'relative',
      fontFamily: 'var(--font-en)',
      fontWeight: 'var(--fw-regular)',
      fontSize: size,
      lineHeight: 'var(--lh-body)',
      color,
      marginTop: i === 0 ? 0 : 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '-17px',
      fontFamily: 'Arial, sans-serif'
    }
  }, "\u2022"), it)));
}
Object.assign(__ds_scope, { BulletList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slide-chrome/BulletList.jsx", error: String((e && e.message) || e) }); }

// components/slide-chrome/ColumnHead.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Mango gradient dot + 13pt Montserrat Medium label — the template's column heading unit. */
function ColumnHead({
  children,
  color = 'inherit',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: '0 0 auto',
      width: 'var(--dot-size)',
      height: 'var(--dot-size)',
      marginTop: 2,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--gradient-mango-dot)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-en)',
      fontWeight: 'var(--fw-medium)',
      fontSize: 'var(--fs-column-head)',
      lineHeight: 'var(--lh-tight)',
      color
    }
  }, children));
}
Object.assign(__ds_scope, { ColumnHead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slide-chrome/ColumnHead.jsx", error: String((e && e.message) || e) }); }

// components/slide-chrome/SectionBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The mango accent bar that sits beside section-slide titles (12x89, 2px radius). */
function SectionBar({
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: {
      display: 'block',
      width: 'var(--section-bar-w)',
      height: 'var(--section-bar-h)',
      borderRadius: 'var(--radius-bar)',
      background: 'var(--milli-mango)',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { SectionBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slide-chrome/SectionBar.jsx", error: String((e && e.message) || e) }); }

// components/slide-chrome/SlideFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Bottom chrome: page number bottom-left, optional file label centre-right, wordmark bottom-right. */
function SlideFooter({
  page,
  total,
  label,
  onDark = false,
  style,
  ...rest
}) {
  const muted = onDark ? 'rgba(255,255,255,.7)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'absolute',
      left: 'var(--footer-pad-x)',
      right: 'var(--footer-pad-x)',
      top: 'var(--footer-y)',
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 'var(--space-5)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-en)',
      fontSize: 'var(--fs-footer)',
      color: muted,
      letterSpacing: '.04em'
    }
  }, page != null ? total != null ? page + ' / ' + total : String(page) : ''), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: 'right',
      fontFamily: 'var(--font-en)',
      fontSize: 'var(--fs-eyebrow)',
      color: muted
    }
  }, label) : null, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    color: onDark ? 'var(--text-on-dark)' : 'var(--text-muted)'
  }));
}
Object.assign(__ds_scope, { SlideFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slide-chrome/SlideFooter.jsx", error: String((e && e.message) || e) }); }

// components/slide-chrome/SlideFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SURFACES = {
  black: {
    background: 'var(--surface-dark)',
    color: 'var(--text-on-dark)'
  },
  white: {
    background: 'var(--surface-light)',
    color: 'var(--text-primary)'
  },
  panel: {
    background: 'var(--surface-panel)',
    color: 'var(--text-primary)'
  },
  wash: {
    background: 'var(--gradient-mango-wash), var(--surface-light)',
    color: 'var(--text-primary)'
  }
};

/* dir="rtl" alone does not survive a PPTX export — the computed text-align arrives as
   `start` and PowerPoint rebuilds the paragraph as left-aligned LTR. These three
   properties must be explicit and inline on every RTL slide root. */
const RTL = {
  direction: 'rtl',
  textAlign: 'right',
  unicodeBidi: 'isolate'
};

/** The 1280x720 slide canvas. Every slide layout in this system sits inside one. */
function SlideFrame({
  surface = 'white',
  dir = 'ltr',
  children,
  style,
  ...rest
}) {
  const s = SURFACES[surface] || SURFACES.white;
  const rtl = dir === 'rtl';
  return /*#__PURE__*/React.createElement("div", _extends({
    dir: dir,
    style: {
      position: 'relative',
      width: 'var(--slide-w)',
      height: 'var(--slide-h)',
      overflow: 'hidden',
      fontFamily: rtl ? "'B Yekan','Yekan Bakh VF',sans-serif" : 'var(--font-en)',
      ...(rtl ? RTL : null),
      ...s,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { SlideFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slide-chrome/SlideFrame.jsx", error: String((e && e.message) || e) }); }

// components/layouts/CoverSlide.jsx
try { (() => {
/** "2_Cover Slide" — black field, left-set title and description, logo lockup on the right. */
function CoverSlide({
  title = 'Enter Presentation Title',
  description = 'Write a Description about File',
  logoBase = 'assets/logo',
  dir = 'ltr'
}) {
  const rtl = dir === 'rtl';
  const headFont = rtl ? "'Yekan Bakh VF Black','Yekan Bakh VF',sans-serif" : undefined;
  return /*#__PURE__*/React.createElement(__ds_scope.SlideFrame, {
    surface: "black",
    dir: dir
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: rtl ? 'auto' : 'var(--slide-pad-x-wide)',
      right: rtl ? 'var(--slide-pad-x-wide)' : 'auto',
      top: 275,
      width: 749
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: headFont,
      fontSize: 'var(--fs-cover-title)',
      fontWeight: 'var(--fw-regular)',
      lineHeight: 'var(--lh-tight)',
      letterSpacing: 'var(--tracking-cover)',
      textAlign: rtl ? 'right' : 'left'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      fontSize: 'var(--fs-cover-sub)',
      fontWeight: 'var(--fw-regular)',
      lineHeight: 'var(--lh-tight)',
      letterSpacing: 'var(--tracking-cover)',
      color: 'rgba(255,255,255,.82)',
      textAlign: rtl ? 'right' : 'left'
    }
  }, description)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: rtl ? 104 : 839,
      top: 262
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "lockup-white",
    width: 360,
    base: logoBase
  })));
}
Object.assign(__ds_scope, { CoverSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layouts/CoverSlide.jsx", error: String((e && e.message) || e) }); }

// components/layouts/EndSlide.jsx
try { (() => {
/** "2_End Slide" — black field, thanks line left, logo lockup right. */
function EndSlide({
  text = 'Thank You',
  logoBase = 'assets/logo',
  dir = 'ltr'
}) {
  const rtl = dir === 'rtl';
  const headFont = rtl ? "'Yekan Bakh VF Black','Yekan Bakh VF',sans-serif" : undefined;
  return /*#__PURE__*/React.createElement(__ds_scope.SlideFrame, {
    surface: "black",
    dir: dir
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: rtl ? 'auto' : 87,
      right: rtl ? 87 : 'auto',
      top: 524,
      fontFamily: headFont,
      fontSize: 'var(--fs-thanks)',
      fontWeight: 'var(--fw-medium)',
      lineHeight: 'var(--lh-tight)'
    }
  }, text), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: rtl ? 87 : 912,
      top: 487
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "lockup-white",
    width: 263,
    base: logoBase
  })));
}
Object.assign(__ds_scope, { EndSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layouts/EndSlide.jsx", error: String((e && e.message) || e) }); }

// components/layouts/GradientSlide.jsx
try { (() => {
/** "Gradient Slide" — same chrome as the watermarked slide over the mango corner wash. */
function GradientSlide({
  title = 'Slide title',
  chapter = 'Chapter title',
  children,
  page,
  total,
  label
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.SlideFrame, {
    surface: "wash"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 48,
      top: 71
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 59,
      top: 34,
      width: 674,
      textAlign: 'right',
      fontSize: 'var(--fs-chapter)',
      color: 'var(--text-muted)'
    }
  }, chapter), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 137,
      top: 58,
      width: 1084,
      fontSize: 'var(--fs-slide-title)',
      fontWeight: 'var(--fw-medium)',
      lineHeight: 'var(--lh-tight)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 137,
      top: 150,
      width: 1084,
      height: 490
    }
  }, children), /*#__PURE__*/React.createElement(__ds_scope.SlideFooter, {
    page: page,
    total: total,
    label: label
  }));
}
Object.assign(__ds_scope, { GradientSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layouts/GradientSlide.jsx", error: String((e && e.message) || e) }); }

// components/layouts/SectionSlide.jsx
try { (() => {
/** "White / Blue Section Slide" — a numbered divider with the mango bar beside a large title. */
function SectionSlide({
  title = 'TITLE',
  number = 1,
  label = 'Sec',
  surface = 'white',
  dir = 'ltr'
}) {
  const dark = surface === 'black';
  const rtl = dir === 'rtl';
  const headFont = rtl ? "'Yekan Bakh VF Black','Yekan Bakh VF',sans-serif" : undefined;
  return /*#__PURE__*/React.createElement(__ds_scope.SlideFrame, {
    surface: surface,
    dir: dir
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: rtl ? 'auto' : 92,
      right: rtl ? 92 : 'auto',
      top: 440,
      display: 'flex',
      flexDirection: rtl ? 'row-reverse' : 'row',
      alignItems: 'flex-start',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionBar, {
    style: {
      marginTop: 51
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: rtl ? 'row-reverse' : 'row',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: headFont,
      fontSize: 'var(--fs-section-num)',
      fontWeight: 'var(--fw-black)',
      color: 'var(--milli-navy-ink)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-section-num)',
      fontWeight: 'var(--fw-regular)',
      color: dark ? 'var(--milli-mango)' : 'var(--text-muted)'
    }
  }, number)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: headFont,
      marginTop: 8,
      fontSize: 'var(--fs-section-title)',
      fontWeight: 'var(--fw-regular)',
      lineHeight: 'var(--lh-tight)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, title))));
}
Object.assign(__ds_scope, { SectionSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layouts/SectionSlide.jsx", error: String((e && e.message) || e) }); }

// components/layouts/TocSlide.jsx
try { (() => {
/** "Table of Content" — black field, two columns of five numbered entries, numbers in mango. */
function TocSlide({
  heading = 'Contents',
  items = [],
  dir = 'ltr'
}) {
  const rtl = dir === 'rtl';
  const headFont = rtl ? "'Yekan Bakh VF Black','Yekan Bakh VF',sans-serif" : undefined;
  const rows = [123, 233, 340, 448, 555];
  const cols = rtl ? [1138, 561] : [129, 704];
  return /*#__PURE__*/React.createElement(__ds_scope.SlideFrame, {
    surface: "black",
    dir: dir
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: rtl ? 'auto' : 129,
      right: rtl ? 129 : 'auto',
      top: 33,
      fontFamily: headFont,
      fontSize: 'var(--fs-toc-heading)',
      fontWeight: 'var(--fw-bold)'
    }
  }, heading), items.slice(0, 10).map((it, i) => {
    const col = i < 5 ? 0 : 1;
    const y = rows[i % 5];
    const x = col === 0 ? rtl ? 705 : 129 : rtl ? 129 : 705;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: 'absolute',
        left: x,
        top: y,
        width: 512,
        display: 'flex',
        flexDirection: rtl ? 'row-reverse' : 'row',
        alignItems: 'center',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 79,
        textAlign: 'center',
        fontFamily: headFont,
        fontSize: 'var(--fs-toc-number)',
        fontWeight: 'var(--fw-bold)',
        color: 'var(--milli-mango)',
        lineHeight: 1
      }
    }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: headFont,
        fontSize: 'var(--fs-toc-heading)',
        fontWeight: 'var(--fw-medium)',
        lineHeight: 'var(--lh-tight)'
      }
    }, it));
  }));
}
Object.assign(__ds_scope, { TocSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layouts/TocSlide.jsx", error: String((e && e.message) || e) }); }

// components/layouts/WatermarkSlide.jsx
try { (() => {
/** "Watermarked Slide" — wordmark top-left, chapter label top-right, free content area below. */
function WatermarkSlide({
  title = 'Slide title',
  chapter = 'Chapter title',
  children,
  page,
  total,
  label,
  surface = 'white'
}) {
  const dark = surface === 'black';
  return /*#__PURE__*/React.createElement(__ds_scope.SlideFrame, {
    surface: surface
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 48,
      top: 71
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    color: dark ? 'var(--text-on-dark)' : 'var(--text-muted)'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 59,
      top: 34,
      width: 674,
      textAlign: 'right',
      fontSize: 'var(--fs-chapter)',
      color: dark ? 'var(--milli-mango)' : 'var(--text-muted)'
    }
  }, chapter), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 137,
      top: 58,
      width: 1084,
      fontSize: 'var(--fs-slide-title)',
      fontWeight: 'var(--fw-medium)',
      lineHeight: 'var(--lh-tight)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 137,
      top: 150,
      width: 1084,
      height: 490
    }
  }, children), /*#__PURE__*/React.createElement(__ds_scope.SlideFooter, {
    page: page,
    total: total,
    label: label,
    onDark: dark
  }));
}
Object.assign(__ds_scope, { WatermarkSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layouts/WatermarkSlide.jsx", error: String((e && e.message) || e) }); }

// components/slide-chrome/SlideTitle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Slide title placeholder: 24pt Montserrat Medium, 90% leading, at x=64 y=52, two lines max. */
function SlideTitle({
  children,
  align = 'left',
  color = 'inherit',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("h2", _extends({
    style: {
      position: 'absolute',
      left: 'var(--slide-pad-x)',
      top: 'var(--title-y)',
      width: 'calc(var(--slide-w) - var(--slide-pad-x) * 2)',
      minHeight: 'var(--title-h)',
      margin: 0,
      fontFamily: 'var(--font-en)',
      fontWeight: 'var(--fw-medium)',
      fontSize: 'var(--fs-slide-title)',
      lineHeight: 'var(--lh-tight)',
      textAlign: align,
      color,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { SlideTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slide-chrome/SlideTitle.jsx", error: String((e && e.message) || e) }); }

// components/layouts/ThreeColumnSlide.jsx
try { (() => {
/** "1_Main Slide" — title plus three 370px columns at x=64, 455, 846. */
function ThreeColumnSlide({
  title = 'Title (two lines max)',
  columns = [],
  page,
  total,
  label,
  surface = 'white'
}) {
  const xs = [64, 455, 846];
  return /*#__PURE__*/React.createElement(__ds_scope.SlideFrame, {
    surface: surface
  }, /*#__PURE__*/React.createElement(__ds_scope.SlideTitle, null, title), columns.slice(0, 3).map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      left: xs[i],
      top: 148,
      width: 'var(--col3-w)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ColumnHead, null, c.head), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 53,
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)'
    }
  }, c.body))), /*#__PURE__*/React.createElement(__ds_scope.SlideFooter, {
    page: page,
    total: total,
    label: label
  }));
}
Object.assign(__ds_scope, { ThreeColumnSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layouts/ThreeColumnSlide.jsx", error: String((e && e.message) || e) }); }

// components/layouts/TwoColumnSlide.jsx
try { (() => {
/** "Main Slide" — title plus two 552px columns at x=64 and x=664. */
function TwoColumnSlide({
  title = 'Title (two lines max)',
  columns = [],
  page,
  total,
  label,
  surface = 'white'
}) {
  const cols = columns.slice(0, 2);
  return /*#__PURE__*/React.createElement(__ds_scope.SlideFrame, {
    surface: surface
  }, /*#__PURE__*/React.createElement(__ds_scope.SlideTitle, null, title), cols.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      left: i === 0 ? 64 : 664,
      top: 148,
      width: 'var(--col2-w)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ColumnHead, null, c.head), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 53,
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)'
    }
  }, c.body))), /*#__PURE__*/React.createElement(__ds_scope.SlideFooter, {
    page: page,
    total: total,
    label: label
  }));
}
Object.assign(__ds_scope, { TwoColumnSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layouts/TwoColumnSlide.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.ChapterDots = __ds_scope.ChapterDots;

__ds_ns.ChapterOpener = __ds_scope.ChapterOpener;

__ds_ns.ChipRow = __ds_scope.ChipRow;

__ds_ns.ContentSlide = __ds_scope.ContentSlide;

__ds_ns.DeckContents = __ds_scope.DeckContents;

__ds_ns.DeckCover = __ds_scope.DeckCover;

__ds_ns.DeckFooter = __ds_scope.DeckFooter;

__ds_ns.Diamond = __ds_scope.Diamond;

__ds_ns.DotScale = __ds_scope.DotScale;

__ds_ns.FunnelBars = __ds_scope.FunnelBars;

__ds_ns.NumberedPoint = __ds_scope.NumberedPoint;

__ds_ns.RowBadge = __ds_scope.RowBadge;

__ds_ns.RowTable = __ds_scope.RowTable;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Takeaway = __ds_scope.Takeaway;

__ds_ns.ThanksSlide = __ds_scope.ThanksSlide;

__ds_ns.CoverSlide = __ds_scope.CoverSlide;

__ds_ns.EndSlide = __ds_scope.EndSlide;

__ds_ns.GradientSlide = __ds_scope.GradientSlide;

__ds_ns.SectionSlide = __ds_scope.SectionSlide;

__ds_ns.ThreeColumnSlide = __ds_scope.ThreeColumnSlide;

__ds_ns.TocSlide = __ds_scope.TocSlide;

__ds_ns.TwoColumnSlide = __ds_scope.TwoColumnSlide;

__ds_ns.WatermarkSlide = __ds_scope.WatermarkSlide;

__ds_ns.BulletList = __ds_scope.BulletList;

__ds_ns.ColumnHead = __ds_scope.ColumnHead;

__ds_ns.SectionBar = __ds_scope.SectionBar;

__ds_ns.SlideFooter = __ds_scope.SlideFooter;

__ds_ns.SlideFrame = __ds_scope.SlideFrame;

__ds_ns.SlideTitle = __ds_scope.SlideTitle;

})();
