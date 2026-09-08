import React from 'react';

/**
 * A rating read from the outer edge inwards. The deck uses two idioms: short bars for a
 * three-step qualitative rank, and diamonds for a four-step weight.
 */
export function DotScale({ value = 0, max = 3, shape = 'bar', size = 15, tone = 'light', dir = 'rtl', style, ...rest }) {
  const empty = tone === 'muted' ? 'var(--milli-gray-panel)' : 'var(--milli-black)';
  const diamond = shape === 'diamond';
  return (
    <span style={{ display: 'inline-flex', flexDirection: dir === 'rtl' ? 'row-reverse' : 'row', alignItems: 'center', gap: diamond ? 7 : 3, ...style }} {...rest}>
      {Array.from({ length: max }, (_, i) => (
        <span key={i} style={diamond
          ? { width: size, height: size, borderRadius: Math.round(size * 0.28), transform: 'rotate(45deg)', background: i < value ? 'var(--milli-mango)' : empty }
          : { width: 18, height: 5, borderRadius: 2.5, background: i < value ? 'var(--milli-mango)' : empty }} />
      ))}
    </span>
  );
}
