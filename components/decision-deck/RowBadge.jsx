import React from 'react';

const SIZES = { sm: 28, md: 34, lg: 42, xl: 52, xxl: 86 };

/** The gold diamond carrying a numeral, an option letter, or a +/- sign. */
export function RowBadge({ children, size = 'lg', tone = 'gold', style, ...rest }) {
  const px = SIZES[size] || SIZES.lg;
  const bg = tone === 'black' ? 'var(--milli-black)' : tone === 'outline' ? 'transparent' : 'var(--milli-mango)';
  const fg = tone === 'black' ? 'var(--milli-white)' : 'var(--milli-black)';
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto',
        width: px, height: px, borderRadius: Math.round(px * 0.28),
        transform: 'rotate(45deg)', background: bg,
        border: tone === 'outline' ? '2px solid var(--milli-black)' : undefined,
        ...style,
      }}
      {...rest}
    >
      <span style={{
        transform: 'rotate(-45deg)', color: fg,
        fontFamily: 'var(--font-fa-head)', fontWeight: 'var(--fw-black)',
        fontSize: Math.max(12, Math.round(px * 0.42)), lineHeight: 1,
      }}>{children}</span>
    </span>
  );
}
