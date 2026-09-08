import React from 'react';

const TONES = {
  black: { background: 'var(--milli-black)', color: 'var(--milli-white)' },
  gold: { background: 'var(--milli-mango)', color: 'var(--milli-black)' },
  grey: { background: 'var(--milli-panel-83)', color: 'var(--milli-black)' },
  panel: { background: 'var(--milli-panel-96)', color: 'var(--milli-black)' },
};

/**
 * The full-width band that closes a slide with what the reader should take away.
 * One per slide at most; if two claims compete, the slide is doing two jobs.
 */
export function Takeaway({ children, tone = 'black', accent = false, bleed = false, dir = 'rtl', style, ...rest }) {
  const t = TONES[tone] || TONES.black;
  const rtl = dir === 'rtl';
  return (
    <div
      style={{
        display: 'flex', flexDirection: rtl ? 'row' : 'row-reverse', alignItems: 'center', gap: 22,
        padding: bleed ? '22px 64px' : '22px 26px',
        fontFamily: 'var(--font-fa-head)', fontWeight: 'var(--fw-black)',
        fontSize: 'var(--fs-dm-lead)', lineHeight: 1.4, textWrap: 'pretty',
        ...t, ...style,
      }}
      {...rest}
    >
      {accent ? <span aria-hidden="true" style={{ flex: '0 0 auto', width: 12, height: 44, borderRadius: 6, background: 'var(--milli-mango)' }} /> : null}
      <span style={{ flex: 1, color: tone === 'black' && accent ? 'var(--milli-mango)' : undefined }}>{children}</span>
    </div>
  );
}
