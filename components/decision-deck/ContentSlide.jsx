import React from 'react';

const SURFACES = {
  white: { bg: 'var(--milli-white)', ink: 'var(--milli-black)', foot: 'light', dots: 'light' },
  panel: { bg: 'var(--milli-gray-panel)', ink: 'var(--milli-black)', foot: 'tint', dots: 'light' },
  wash: { bg: 'var(--milli-mango-wash-solid)', ink: 'var(--milli-black)', foot: 'tint', dots: 'light' },
  gold: { bg: 'var(--milli-mango)', ink: 'var(--milli-black)', foot: 'gold', dots: 'light' },
  black: { bg: 'var(--milli-black)', ink: 'var(--milli-white)', foot: 'dark', dots: 'dark' },
};

/**
 * Corner ornament: two nested rounded diamonds bleeding off the bottom-left. Positions
 * are the unrotated top-left corners, as in the source deck; the 45deg rotation happens
 * about each shape's centre, so the visual extent is 1.41x the side length and the slide's
 * own overflow does the clipping.
 */
function Ornament() {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      <span style={{ position: 'absolute', left: -70, top: 560, width: 202, height: 202, borderRadius: 40, transform: 'rotate(45deg)', background: 'var(--milli-black)' }} />
      <span style={{ position: 'absolute', left: -26, top: 604, width: 114, height: 114, borderRadius: 23, transform: 'rotate(45deg)', background: 'var(--milli-mango)' }} />
    </div>
  );
}

/**
 * The workhorse content slide: chapter dots, eyebrow, headline, the header hairline
 * with its gold segment, and the footer. Body content is placed absolutely by the caller,
 * usually starting at y=190 inside the 64px margins.
 */
export function ContentSlide({
  title = '', eyebrow = '', dots, page, total, label = '', surface = 'white',
  ornament = false, dir = 'rtl', titleSize = 'var(--fs-dm-title)', titleInset = 226,
  children, style, ...rest
}) {
  const s = SURFACES[surface] || SURFACES.white;
  const rtl = dir === 'rtl';
  const hair = surface === 'black' ? 'rgba(255,255,255,.5)' : 'var(--milli-black)';
  return (
    <div
      dir={dir}
      style={{
        position: 'relative', width: 1280, height: 720, overflow: 'hidden',
        background: s.bg, color: s.ink,
        fontFamily: "'B Yekan','Yekan Bakh VF',sans-serif",
        direction: rtl ? 'rtl' : 'ltr', textAlign: rtl ? 'right' : 'left', unicodeBidi: 'isolate',
        ...style,
      }}
      {...rest}
    >
      {ornament ? <Ornament /> : null}
      {dots ? <ChapterDotsSlot dots={dots} tone={s.dots} rtl={rtl} /> : null}
      {eyebrow ? (
        <div style={{ position: 'absolute', [rtl ? 'right' : 'left']: 64, top: 44, fontSize: 'var(--fs-dm-caption)', color: surface === 'black' ? 'rgba(255,255,255,.7)' : 'var(--milli-ink-58)' }}>{eyebrow}</div>
      ) : null}
      {title ? (
        <h2 style={{ position: 'absolute', [rtl ? 'left' : 'right']: titleInset, [rtl ? 'right' : 'left']: 64, top: 68, margin: 0, fontFamily: 'var(--font-fa-head)', fontSize: titleSize, fontWeight: 'var(--fw-black)', lineHeight: 'var(--lh-dm-title)', textWrap: 'pretty' }}>{title}</h2>
      ) : null}
      <div aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, top: 158, height: 1, background: hair }} />
      <div aria-hidden="true" style={{ position: 'absolute', [rtl ? 'right' : 'left']: 0, top: 155, width: 'var(--dm-gold-rule-w)', height: 6, background: 'var(--milli-mango)' }} />
      {children}
      <DeckFooterSlot label={label} page={page} total={total} tone={s.foot} dir={dir} />
    </div>
  );
}

/* The dots sit on the edge OPPOSITE the eyebrow — in the source deck the eyebrow is on
   the reading edge and the dots on the far one, which is what leaves the title its inset. */
function ChapterDotsSlot({ dots, tone, rtl }) {
  const rest = tone === 'dark' ? 'rgba(255,255,255,.28)' : 'var(--milli-black)';
  const total = dots.total || 3, active = dots.active || 1;
  return (
    <div style={{ position: 'absolute', [rtl ? 'left' : 'right']: 64, top: 54, display: 'flex', flexDirection: rtl ? 'row-reverse' : 'row', gap: 13 }}>
      {Array.from({ length: total }, (_, i) => (
        <span key={i} style={{ width: 22, height: 22, borderRadius: 6, transform: 'rotate(45deg)', background: i < active ? 'var(--milli-mango)' : rest }} />
      ))}
    </div>
  );
}

function DeckFooterSlot({ label, page, total, tone, dir }) {
  const ink = tone === 'gold' ? 'var(--milli-black)' : tone === 'dark' ? 'rgba(255,255,255,.72)' : tone === 'tint' ? 'var(--milli-ink-70)' : 'var(--milli-ink-75)';
  return (
    <div style={{ position: 'absolute', left: 40, right: 40, top: 671, display: 'flex', flexDirection: dir === 'rtl' ? 'row-reverse' : 'row', alignItems: 'baseline', justifyContent: 'space-between', gap: 24, color: ink }}>
      <span style={{ fontSize: 'var(--fs-dm-page)', letterSpacing: '.02em' }}>{page != null && total != null ? page + ' / ' + total : ''}</span>
      <span style={{ flex: 1, textAlign: 'center', fontSize: 'var(--fs-dm-label)' }}>{label}</span>
      <span style={{ fontFamily: 'var(--font-en)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--fs-dm-body-sm)', letterSpacing: '-.01em', whiteSpace: 'nowrap', direction: 'ltr' }}>MilliGroup</span>
    </div>
  );
}
