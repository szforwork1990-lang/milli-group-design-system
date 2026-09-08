import React from 'react';

const PATTERN_ROWS = 4, PATTERN_COLS = 13;

/** Closing slide: the gold-and-white diamond lattice fading into black, thanks line, logo. */
export function ThanksSlide({ title = '', label = '', logo = null, dir = 'rtl', style, ...rest }) {
  const rtl = dir === 'rtl';
  const cells = [];
  for (let r = 0; r < PATTERN_ROWS; r++) {
    for (let c = 0; c < PATTERN_COLS; c++) {
      const white = (r * 2 + c) % 3 === 2;
      cells.push(
        <span key={r + '-' + c} style={{ position: 'absolute', left: 64 + c * 54 + (r % 2 ? 27 : 0), top: 470 + r * 54, width: 44, height: 44, borderRadius: 12, transform: 'rotate(45deg)', background: white ? 'var(--milli-white)' : 'var(--milli-mango)' }} />
      );
    }
  }
  return (
    <div
      dir={dir}
      style={{
        position: 'relative', width: 1280, height: 720, overflow: 'hidden',
        background: 'var(--milli-black)', color: 'var(--milli-white)',
        fontFamily: 'var(--font-fa-body)',
        direction: rtl ? 'rtl' : 'ltr', textAlign: rtl ? 'right' : 'left', unicodeBidi: 'isolate',
        ...style,
      }}
      {...rest}
    >
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0 }}>{cells}</div>
      <div aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, top: 460, height: 260, background: 'linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,.35) 60%,rgba(0,0,0,.72) 100%)' }} />
      <div aria-hidden="true" style={{ position: 'absolute', [rtl ? 'right' : 'left']: 104, top: 300, width: 12, height: 89, borderRadius: 6, background: 'var(--milli-mango)' }} />
      <div style={{ position: 'absolute', [rtl ? 'right' : 'left']: 140, top: 306, fontFamily: 'var(--font-fa-head)', fontSize: 'var(--fs-dm-chapter)', fontWeight: 'var(--fw-black)' }}>{title}</div>
      {logo ? <div style={{ position: 'absolute', [rtl ? 'left' : 'right']: 104, top: 312 }}>{logo}</div> : null}
      {label ? <div style={{ position: 'absolute', [rtl ? 'right' : 'left']: 104, top: 641, fontSize: 'var(--fs-dm-body-sm)' }}>{label}</div> : null}
    </div>
  );
}
