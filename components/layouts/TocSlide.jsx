import React from 'react';
import { SlideFrame } from '../slide-chrome/SlideFrame.jsx';

/** "Table of Content" — black field, two columns of five numbered entries, numbers in mango. */
export function TocSlide({ heading = 'Contents', items = [], dir = 'ltr' }) {
  const rtl = dir === 'rtl';
  const headFont = rtl ? "'Yekan Bakh VF Black','Yekan Bakh VF',sans-serif" : undefined;
  const rows = [123, 233, 340, 448, 555];
  const cols = rtl ? [1138, 561] : [129, 704];
  return (
    <SlideFrame surface="black" dir={dir}>
      <div style={{ position: 'absolute', left: rtl ? 'auto' : 129, right: rtl ? 129 : 'auto', top: 33, fontFamily: headFont, fontSize: 'var(--fs-toc-heading)', fontWeight: 'var(--fw-bold)' }}>{heading}</div>
      {items.slice(0, 10).map((it, i) => {
        const col = i < 5 ? 0 : 1;
        const y = rows[i % 5];
        const x = col === 0 ? (rtl ? 705 : 129) : (rtl ? 129 : 705);
        return (
          <div key={i} style={{ position: 'absolute', left: x, top: y, width: 512, display: 'flex', flexDirection: rtl ? 'row-reverse' : 'row', alignItems: 'center', gap: 20 }}>
            <span style={{ width: 79, textAlign: 'center', fontFamily: headFont, fontSize: 'var(--fs-toc-number)', fontWeight: 'var(--fw-bold)', color: 'var(--milli-mango)', lineHeight: 1 }}>{String(i + 1).padStart(2, '0')}</span>
            <span style={{ fontFamily: headFont, fontSize: 'var(--fs-toc-heading)', fontWeight: 'var(--fw-medium)', lineHeight: 'var(--lh-tight)' }}>{it}</span>
          </div>
        );
      })}
    </SlideFrame>
  );
}
