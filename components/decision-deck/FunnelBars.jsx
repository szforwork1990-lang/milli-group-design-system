import React from 'react';

/**
 * The narrowing stack — population to target, or TAM to SOM. Each step names the filter
 * that removed the previous step's people, so the reader can argue with the arithmetic.
 */
export function FunnelBars({ steps = [], dir = 'rtl', style, ...rest }) {
  const rtl = dir === 'rtl';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 22, ...style }} {...rest}>
      {steps.map((step, i) => {
        const tone = step.tone || (i === steps.length - 1 ? 'gold' : 'black');
        const bg = tone === 'gold' ? 'var(--milli-mango)' : tone === 'grey' ? 'var(--milli-gray-56)' : 'var(--milli-black)';
        return (
          <div key={i}>
            <div style={{ display: 'flex', flexDirection: rtl ? 'row-reverse' : 'row', alignItems: 'baseline', gap: 12 }}>
              <span style={{ fontWeight: 'var(--fw-bold)', fontSize: 'var(--fs-dm-body)' }}>{step.label}</span>
              {step.meta ? <span style={{ fontSize: 'var(--fs-dm-label)', color: 'var(--milli-ink-58)' }}>{step.meta}</span> : null}
              {step.flag ? <span style={{ padding: '2px 8px', background: 'var(--milli-mango)', fontSize: 'var(--fs-dm-label-sm)', fontWeight: 'var(--fw-bold)' }}>{step.flag}</span> : null}
            </div>
            <div style={{ marginTop: 8, display: 'flex', flexDirection: rtl ? 'row-reverse' : 'row', alignItems: 'center', gap: 14 }}>
              <span style={{ flex: '0 0 auto', width: (step.width || 100) + '%', maxWidth: '100%', height: 22, background: bg }} />
              <span style={{ fontWeight: 'var(--fw-bold)', fontSize: 'var(--fs-dm-body-sm)', whiteSpace: 'nowrap' }}>{step.value}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
