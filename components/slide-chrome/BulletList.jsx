import React from 'react';

/** Body copy list: Arial bullet, 12pt Montserrat, 90% leading, 10pt space before each item. */
export function BulletList({ items = [], size = 'var(--fs-body)', color = 'inherit', style, ...rest }) {
  return (
    <ul style={{ margin: 0, paddingInlineStart: '17px', listStyle: 'none', ...style }} {...rest}>
      {items.map((it, i) => (
        <li
          key={i}
          style={{
            position: 'relative',
            fontFamily: 'var(--font-en)',
            fontWeight: 'var(--fw-regular)',
            fontSize: size,
            lineHeight: 'var(--lh-body)',
            color,
            marginTop: i === 0 ? 0 : 'var(--space-3)',
          }}
        >
          <span aria-hidden="true" style={{ position: 'absolute', left: '-17px', fontFamily: 'Arial, sans-serif' }}>•</span>
          {it}
        </li>
      ))}
    </ul>
  );
}
