import React from 'react';

/** Slide title placeholder: 24pt Montserrat Medium, 90% leading, at x=64 y=52, two lines max. */
export function SlideTitle({ children, align = 'left', color = 'inherit', style, ...rest }) {
  return (
    <h2
      style={{
        position: 'absolute',
        left: 'var(--slide-pad-x)',
        top: 'var(--title-y)',
        width: 'calc(var(--slide-w) - var(--slide-pad-x) * 2)',
        minHeight: 'var(--title-h)',
        margin: 0,
        fontFamily: 'var(--font-en)',
        fontWeight: 'var(--fw-medium)',
        fontSize: 'var(--fs-slide-title)',
        lineHeight: 'var(--lh-tight)',
        textAlign: align,
        color,
        ...style,
      }}
      {...rest}
    >
      {children}
    </h2>
  );
}
