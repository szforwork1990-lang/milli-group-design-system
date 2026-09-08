import React from 'react';
import { SlideFrame } from '../slide-chrome/SlideFrame.jsx';
import { SlideFooter } from '../slide-chrome/SlideFooter.jsx';
import { Wordmark } from '../brand/Wordmark.jsx';

/** "Watermarked Slide" — wordmark top-left, chapter label top-right, free content area below. */
export function WatermarkSlide({ title = 'Slide title', chapter = 'Chapter title', children, page, total, label, surface = 'white' }) {
  const dark = surface === 'black';
  return (
    <SlideFrame surface={surface}>
      <div style={{ position: 'absolute', left: 48, top: 71 }}>
        <Wordmark color={dark ? 'var(--text-on-dark)' : 'var(--text-muted)'} />
      </div>
      <div style={{ position: 'absolute', right: 59, top: 34, width: 674, textAlign: 'right', fontSize: 'var(--fs-chapter)', color: dark ? 'var(--milli-mango)' : 'var(--text-muted)' }}>{chapter}</div>
      <div style={{ position: 'absolute', left: 137, top: 58, width: 1084, fontSize: 'var(--fs-slide-title)', fontWeight: 'var(--fw-medium)', lineHeight: 'var(--lh-tight)' }}>{title}</div>
      <div style={{ position: 'absolute', left: 137, top: 150, width: 1084, height: 490 }}>{children}</div>
      <SlideFooter page={page} total={total} label={label} onDark={dark} />
    </SlideFrame>
  );
}
