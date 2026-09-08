import React from 'react';

/**
 * Contents slide as three bands, not one long list. Each band groups the chapters that
 * do one job — the answer, the evidence, the plan — and carries its own footnote.
 */
export function DeckContents({ title = '', subtitle = '', bands = [], dir = 'rtl', style, ...rest }) {
  const rtl = dir === 'rtl';
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
      <div style={{ position: 'absolute', [rtl ? 'right' : 'left']: 64, top: 48, fontFamily: 'var(--font-fa-head)', fontSize: 'var(--fs-dm-title)', fontWeight: 'var(--fw-black)' }}>{title}</div>
      {subtitle ? <div style={{ position: 'absolute', [rtl ? 'left' : 'right']: 64, top: 60, fontSize: 'var(--fs-dm-caption)' }}>{subtitle}</div> : null}
      <div style={{ position: 'absolute', left: 64, right: 64, top: 128, height: 1, background: 'var(--milli-white)' }} />
      <div style={{ position: 'absolute', left: 64, right: 64, top: 128, display: 'flex', flexDirection: rtl ? 'row-reverse' : 'row', gap: 'var(--dm-gutter)' }}>
        {bands.map((band, bi) => (
          <div key={bi} style={{ flex: 1, position: 'relative', height: 516 }}>
            <div style={{ height: 6, background: bi === 0 ? 'var(--milli-mango)' : 'var(--milli-white)' }} />
            <div style={{ marginTop: 22, display: 'flex', flexDirection: rtl ? 'row-reverse' : 'row', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
              <span style={{ fontSize: 'var(--fs-dm-caption)', color: bi === 0 ? 'var(--milli-mango)' : 'var(--milli-white)' }}>{band.label}</span>
              <span style={{ fontSize: 'var(--fs-dm-label-sm)', opacity: .8 }}>{band.range}</span>
            </div>
            {(band.items || []).map((item, i) => (
              <div key={i} style={{ marginTop: 22, paddingTop: 22, borderTop: '1px solid rgba(255,255,255,.55)', display: 'flex', flexDirection: rtl ? 'row-reverse' : 'row', alignItems: 'baseline', gap: 14 }}>
                <span style={{ flex: '0 0 auto', minWidth: 44, fontFamily: 'var(--font-fa-head)', fontSize: 'var(--fs-dm-toc-num)', fontWeight: 'var(--fw-black)', color: bi === 0 ? 'var(--milli-mango)' : 'var(--milli-white)' }}>{item.number}</span>
                <span style={{ flex: 1, fontSize: 'var(--fs-dm-toc-item)' }}>{item.title}</span>
              </div>
            ))}
            {band.note ? (
              <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, paddingTop: 19, borderTop: '1px solid rgba(255,255,255,.55)', fontSize: 'var(--fs-dm-caption)', lineHeight: 1.4 }}>{band.note}</div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
