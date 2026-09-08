import React from 'react';

/**
 * The deck's signature shape: a rounded square rotated 45 degrees. Every square in the
 * source deck carries rot="2700000", so nothing in this system is ever a plain square.
 * Any label inside is counter-rotated so it reads upright, exactly as the .pptx does.
 * The layout box is the unrotated side length; the shape spans size x 1.41 visually.
 */
export function Diamond({ size = 34, fill = 'var(--milli-mango)', radius, children, labelStyle, style, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto',
        width: size, height: size,
        borderRadius: radius != null ? radius : Math.round(size * 0.28),
        transform: 'rotate(45deg)', background: fill,
        ...style,
      }}
      {...rest}
    >
      {children != null ? (
        <span style={{ transform: 'rotate(-45deg)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1, ...labelStyle }}>{children}</span>
      ) : null}
    </span>
  );
}
