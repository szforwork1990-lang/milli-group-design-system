import React from 'react';
import { SlideFrame } from '../slide-chrome/SlideFrame.jsx';
import { SlideFooter } from '../slide-chrome/SlideFooter.jsx';
import { Wordmark } from '../brand/Wordmark.jsx';

/** "Gradient Slide" — same chrome as the watermarked slide over the mango corner wash. */
export function GradientSlide({ title = 'Slide title', chapter = 'Chapter title', children, page, total, label }) {
  return (
    <SlideFrame surface="wash">
      <div style={{ position: 'absolute', left: 48, top: 71 }}><Wordmark /></div>
      <div style={{ position: 'absolute', right: 59, top: 34, width: 674, textAlign: 'right', fontSize: 'var(--fs-chapter)', color: 'var(--text-muted)' }}>{chapter}</div>
      <div style={{ position: 'absolute', left: 137, top: 58, width: 1084, fontSize: 'var(--fs-slide-title)', fontWeight: 'var(--fw-medium)', lineHeight: 'var(--lh-tight)' }}>{title}</div>
      <div style={{ position: 'absolute', left: 137, top: 150, width: 1084, height: 490 }}>{children}</div>
      <SlideFooter page={page} total={total} label={label} />
    </SlideFrame>
  );
}
