import React from 'react';

const SURFACES = {
  black: { background: 'var(--surface-dark)', color: 'var(--text-on-dark)' },
  white: { background: 'var(--surface-light)', color: 'var(--text-primary)' },
  panel: { background: 'var(--surface-panel)', color: 'var(--text-primary)' },
  wash: { background: 'var(--gradient-mango-wash), var(--surface-light)', color: 'var(--text-primary)' },
};

/* dir="rtl" alone does not survive a PPTX export — the computed text-align arrives as
   `start` and PowerPoint rebuilds the paragraph as left-aligned LTR. These three
   properties must be explicit and inline on every RTL slide root. */
const RTL = { direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate' };

/** The 1280x720 slide canvas. Every slide layout in this system sits inside one. */
export function SlideFrame({ surface = 'white', dir = 'ltr', children, style, ...rest }) {
  const s = SURFACES[surface] || SURFACES.white;
  const rtl = dir === 'rtl';
  return (
    <div
      dir={dir}
      style={{
        position: 'relative',
        width: 'var(--slide-w)',
        height: 'var(--slide-h)',
        overflow: 'hidden',
        fontFamily: rtl ? "'B Yekan','Yekan Bakh VF',sans-serif" : 'var(--font-en)',
        ...(rtl ? RTL : null),
        ...s,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
