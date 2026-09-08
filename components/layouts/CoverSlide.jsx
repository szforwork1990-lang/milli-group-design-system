import React from 'react';
import { SlideFrame } from '../slide-chrome/SlideFrame.jsx';
import { Logo } from '../brand/Logo.jsx';

/** "2_Cover Slide" — black field, left-set title and description, logo lockup on the right. */
export function CoverSlide({ title = 'Enter Presentation Title', description = 'Write a Description about File', logoBase = 'assets/logo', dir = 'ltr' }) {
  const rtl = dir === 'rtl';
  const headFont = rtl ? "'Yekan Bakh VF Black','Yekan Bakh VF',sans-serif" : undefined;
  return (
    <SlideFrame surface="black" dir={dir}>
      <div style={{ position: 'absolute', left: rtl ? 'auto' : 'var(--slide-pad-x-wide)', right: rtl ? 'var(--slide-pad-x-wide)' : 'auto', top: 275, width: 749 }}>
        <div style={{ fontFamily: headFont, fontSize: 'var(--fs-cover-title)', fontWeight: 'var(--fw-regular)', lineHeight: 'var(--lh-tight)', letterSpacing: 'var(--tracking-cover)', textAlign: rtl ? 'right' : 'left' }}>{title}</div>
        <div style={{ marginTop: 18, fontSize: 'var(--fs-cover-sub)', fontWeight: 'var(--fw-regular)', lineHeight: 'var(--lh-tight)', letterSpacing: 'var(--tracking-cover)', color: 'rgba(255,255,255,.82)', textAlign: rtl ? 'right' : 'left' }}>{description}</div>
      </div>
      <div style={{ position: 'absolute', left: rtl ? 104 : 839, top: 262 }}>
        <Logo variant="lockup-white" width={360} base={logoBase} />
      </div>
    </SlideFrame>
  );
}
