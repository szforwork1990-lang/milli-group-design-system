import React from 'react';

/** The three-part slide footer: Latin logotype, deck label, page counter. */
export function DeckFooter({ label = '', page, total, tone = 'light', dir = 'rtl', style }) {
  const ink = tone === 'gold' ? 'var(--milli-black)' : tone === 'dark' ? 'rgba(255,255,255,.72)' : tone === 'tint' ? 'var(--milli-ink-70)' : 'var(--milli-ink-75)';
  const body = "'B Yekan','Yekan Bakh VF',sans-serif";
  return (
    <div style={{ position: 'absolute', left: 40, right: 40, top: 671, display: 'flex', flexDirection: dir === 'rtl' ? 'row-reverse' : 'row', alignItems: 'baseline', justifyContent: 'space-between', gap: 24, color: ink, ...style }}>
      <span style={{ fontSize: 'var(--fs-dm-page)', fontFamily: body, letterSpacing: '.02em' }}>{page != null && total != null ? page + ' / ' + total : ''}</span>
      <span style={{ flex: 1, textAlign: 'center', fontSize: 'var(--fs-dm-label)', fontFamily: body }}>{label}</span>
      <span style={{ fontFamily: 'var(--font-en)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--fs-dm-body-sm)', letterSpacing: '-.01em', whiteSpace: 'nowrap', direction: 'ltr' }}>MilliGroup</span>
    </div>
  );
}
