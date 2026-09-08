import React from 'react';
import { SlideFrame } from '../slide-chrome/SlideFrame.jsx';
import { SectionBar } from '../slide-chrome/SectionBar.jsx';

/** "White / Blue Section Slide" — a numbered divider with the mango bar beside a large title. */
export function SectionSlide({ title = 'TITLE', number = 1, label = 'Sec', surface = 'white', dir = 'ltr' }) {
  const dark = surface === 'black';
  const rtl = dir === 'rtl';
  const headFont = rtl ? "'Yekan Bakh VF Black','Yekan Bakh VF',sans-serif" : undefined;
  return (
    <SlideFrame surface={surface} dir={dir}>
      <div style={{ position: 'absolute', left: rtl ? 'auto' : 92, right: rtl ? 92 : 'auto', top: 440, display: 'flex', flexDirection: rtl ? 'row-reverse' : 'row', alignItems: 'flex-start', gap: 20 }}>
        <SectionBar style={{ marginTop: 51 }} />
        <div>
          <div style={{ display: 'flex', flexDirection: rtl ? 'row-reverse' : 'row', alignItems: 'baseline', gap: 10 }}>
            <span style={{ fontFamily: headFont, fontSize: 'var(--fs-section-num)', fontWeight: 'var(--fw-black)', color: 'var(--milli-navy-ink)' }}>{label}</span>
            <span style={{ fontSize: 'var(--fs-section-num)', fontWeight: 'var(--fw-regular)', color: dark ? 'var(--milli-mango)' : 'var(--text-muted)' }}>{number}</span>
          </div>
          <div style={{ fontFamily: headFont, marginTop: 8, fontSize: 'var(--fs-section-title)', fontWeight: 'var(--fw-regular)', lineHeight: 'var(--lh-tight)', letterSpacing: 'var(--tracking-tight)' }}>{title}</div>
        </div>
      </div>
    </SlideFrame>
  );
}
