import React from 'react';

const TONES = {
  chosen: { background: 'var(--milli-mango)', color: 'var(--milli-black)', fontWeight: 'var(--fw-bold)', border: '1px solid var(--milli-mango)' },
  viable: { background: 'var(--milli-mango-light)', color: 'var(--milli-black)', fontWeight: 'var(--fw-bold)', border: '1px solid var(--milli-mango-light)' },
  option: { background: 'transparent', color: 'var(--milli-ink-70)', fontWeight: 'var(--fw-regular)', border: '1px solid var(--milli-black)' },
  rejected: { background: 'transparent', color: 'var(--milli-ink-54)', fontWeight: 'var(--fw-regular)', border: '1px solid var(--milli-ink-54)' },
};

/** The option space along one dimension: every choice shown, the recommended one gold. */
export function ChipRow({ chips = [], dir = 'rtl', style, ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: dir === 'rtl' ? 'row-reverse' : 'row', flexWrap: 'wrap', gap: 9, ...style }} {...rest}>
      {chips.map((chip, i) => {
        const c = typeof chip === 'string' ? { label: chip, tone: 'option' } : chip;
        return (
          <span key={i} style={{ padding: '7px 12px', fontSize: 'var(--fs-dm-caption)', lineHeight: 1.5, whiteSpace: 'nowrap', ...(TONES[c.tone] || TONES.option) }}>{c.label}</span>
        );
      })}
    </div>
  );
}
