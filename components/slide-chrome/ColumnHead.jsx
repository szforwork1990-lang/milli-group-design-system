import React from 'react';

/** Mango gradient dot + 13pt Montserrat Medium label — the template's column heading unit. */
export function ColumnHead({ children, color = 'inherit', style, ...rest }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)', ...style }} {...rest}>
      <span
        aria-hidden="true"
        style={{
          flex: '0 0 auto',
          width: 'var(--dot-size)',
          height: 'var(--dot-size)',
          marginTop: 2,
          borderRadius: 'var(--radius-pill)',
          background: 'var(--gradient-mango-dot)',
        }}
      />
      <span
        style={{
          fontFamily: 'var(--font-en)',
          fontWeight: 'var(--fw-medium)',
          fontSize: 'var(--fs-column-head)',
          lineHeight: 'var(--lh-tight)',
          color,
        }}
      >
        {children}
      </span>
    </div>
  );
}
