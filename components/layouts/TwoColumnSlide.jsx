import React from 'react';
import { SlideFrame } from '../slide-chrome/SlideFrame.jsx';
import { SlideTitle } from '../slide-chrome/SlideTitle.jsx';
import { ColumnHead } from '../slide-chrome/ColumnHead.jsx';
import { SlideFooter } from '../slide-chrome/SlideFooter.jsx';

/** "Main Slide" — title plus two 552px columns at x=64 and x=664. */
export function TwoColumnSlide({ title = 'Title (two lines max)', columns = [], page, total, label, surface = 'white' }) {
  const cols = columns.slice(0, 2);
  return (
    <SlideFrame surface={surface}>
      <SlideTitle>{title}</SlideTitle>
      {cols.map((c, i) => (
        <div key={i} style={{ position: 'absolute', left: i === 0 ? 64 : 664, top: 148, width: 'var(--col2-w)' }}>
          <ColumnHead>{c.head}</ColumnHead>
          <div style={{ marginTop: 53, fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-body)' }}>{c.body}</div>
        </div>
      ))}
      <SlideFooter page={page} total={total} label={label} />
    </SlideFrame>
  );
}
