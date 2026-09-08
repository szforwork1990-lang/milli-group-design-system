import React from 'react';

/** The typeset footer lockup the template itself uses: "Milli" bold + " Group" medium, one colour. */
export function Wordmark({ size = 'var(--fs-wordmark)', color = 'var(--text-muted)', style, ...rest }) {
  return (
    <span
      style={{ fontFamily: 'var(--font-en)', fontSize: size, color, letterSpacing: 'var(--tracking-tight)', whiteSpace: 'nowrap', ...style }}
      {...rest}
    >
      <span style={{ fontWeight: 'var(--fw-bold)' }}>Milli</span>
      <span style={{ fontWeight: 'var(--fw-medium)' }}> Group</span>
    </span>
  );
}
