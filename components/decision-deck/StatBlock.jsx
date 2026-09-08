import React from 'react';

/** One number in a diamond with its caption — the market-size and unit-economics figures. */
export function StatBlock({ value = '', caption = '', tone = 'black', size = 118, dir = 'rtl', style, ...rest }) {
  const rtl = dir === 'rtl';
  const bg = tone === 'gold' ? 'var(--milli-mango)' : tone === 'outline' ? 'var(--milli-white)' : 'var(--milli-black)';
  const fg = tone === 'black' ? 'var(--milli-white)' : 'var(--milli-black)';
  const box = Math.round(size * 1.415);
  return (
    <div style={{ display: 'flex', flexDirection: rtl ? 'row' : 'row-reverse', alignItems: 'center', gap: 24, ...style }} {...rest}>
      <span style={{ flex: '0 0 auto', width: box, height: box, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: size, height: size, borderRadius: Math.round(size * 0.24),
          transform: 'rotate(45deg)', background: bg,
          border: tone === 'outline' ? '2px solid var(--milli-black)' : undefined,
        }}>
          <span style={{ transform: 'rotate(-45deg)', color: fg, fontFamily: 'var(--font-fa-head)', fontWeight: 'var(--fw-black)', fontSize: 26, lineHeight: 1, whiteSpace: 'nowrap' }}>{value}</span>
        </span>
      </span>
      <span style={{ flex: 1 }}>
        <span style={{ display: 'block', width: 36, height: 2, background: tone === 'gold' ? 'var(--milli-mango)' : 'var(--milli-black)' }} />
        <span style={{ display: 'block', marginTop: 11, fontSize: 'var(--fs-dm-caption)', color: 'var(--milli-ink-80)', lineHeight: 1.5, textWrap: 'pretty' }}>{caption}</span>
      </span>
    </div>
  );
}
