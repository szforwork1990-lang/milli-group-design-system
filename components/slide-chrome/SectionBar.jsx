import React from 'react';

/** The mango accent bar that sits beside section-slide titles (12x89, 2px radius). */
export function SectionBar({ style, ...rest }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: 'block',
        width: 'var(--section-bar-w)',
        height: 'var(--section-bar-h)',
        borderRadius: 'var(--radius-bar)',
        background: 'var(--milli-mango)',
        ...style,
      }}
      {...rest}
    />
  );
}
