import React from 'react';
import { SlideFrame } from '../slide-chrome/SlideFrame.jsx';
import { SlideTitle } from '../slide-chrome/SlideTitle.jsx';
import { ColumnHead } from '../slide-chrome/ColumnHead.jsx';
import { SlideFooter } from '../slide-chrome/SlideFooter.jsx';

/** "1_Main Slide" — title plus three 370px columns at x=64, 455, 846. */
export function ThreeColumnSlide({ title = 'Title (two lines max)', columns = [], page, total, label, surface = 'white' }) {
  const xs = [64, 455, 846];
  return (
    <SlideFrame surface={surface}>
      <SlideTitle>{title}</SlideTitle>
      {columns.slice(0, 3).map((c, i) => (
        <div key={i} style={{ position: 'absolute', left: xs[i], top: 148, width: 'var(--col3-w)' }}>
          <ColumnHead>{c.head}</ColumnHead>
          <div style={{ marginTop: 53, fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-body)' }}>{c.body}</div>
        </div>
      ))}
      <SlideFooter page={page} total={total} label={label} />
    </SlideFrame>
  );
}
