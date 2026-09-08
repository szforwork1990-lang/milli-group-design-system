import React from 'react';
import { Wordmark } from '../brand/Wordmark.jsx';

/** Bottom chrome: page number bottom-left, optional file label centre-right, wordmark bottom-right. */
export function SlideFooter({ page, total, label, onDark = false, style, ...rest }) {
  const muted = onDark ? 'rgba(255,255,255,.7)' : 'var(--text-muted)';
  return (
    <div
      style={{
        position: 'absolute',
        left: 'var(--footer-pad-x)',
        right: 'var(--footer-pad-x)',
        top: 'var(--footer-y)',
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        gap: 'var(--space-5)',
        ...style,
      }}
      {...rest}
    >
      <span style={{ fontFamily: 'var(--font-en)', fontSize: 'var(--fs-footer)', color: muted, letterSpacing: '.04em' }}>
        {page != null ? (total != null ? page + ' / ' + total : String(page)) : ''}
      </span>
      {label ? (
        <span style={{ flex: 1, textAlign: 'right', fontFamily: 'var(--font-en)', fontSize: 'var(--fs-eyebrow)', color: muted }}>
          {label}
        </span>
      ) : null}
      <Wordmark color={onDark ? 'var(--text-on-dark)' : 'var(--text-muted)'} />
    </div>
  );
}
