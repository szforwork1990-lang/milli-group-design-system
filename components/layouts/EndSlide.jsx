import React from 'react';
import { SlideFrame } from '../slide-chrome/SlideFrame.jsx';
import { Logo } from '../brand/Logo.jsx';

/** "2_End Slide" — black field, thanks line left, logo lockup right. */
export function EndSlide({ text = 'Thank You', logoBase = 'assets/logo', dir = 'ltr' }) {
  const rtl = dir === 'rtl';
  const headFont = rtl ? "'Yekan Bakh VF Black','Yekan Bakh VF',sans-serif" : undefined;
  return (
    <SlideFrame surface="black" dir={dir}>
      <div style={{ position: 'absolute', left: rtl ? 'auto' : 87, right: rtl ? 87 : 'auto', top: 524, fontFamily: headFont, fontSize: 'var(--fs-thanks)', fontWeight: 'var(--fw-medium)', lineHeight: 'var(--lh-tight)' }}>{text}</div>
      <div style={{ position: 'absolute', left: rtl ? 87 : 912, top: 487 }}>
        <Logo variant="lockup-white" width={263} base={logoBase} />
      </div>
    </SlideFrame>
  );
}
