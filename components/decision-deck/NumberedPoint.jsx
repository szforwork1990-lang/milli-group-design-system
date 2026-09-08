import React from 'react';

/**
 * A numbered claim. 'stacked' puts the diamond above a 2px rule with the claim under it —
 * three across the slide. 'row' runs the diamond beside a full-width rule, for a list.
 */
export function NumberedPoint({
  number, title = '', body = '', variant = 'stacked', tone = 'light', dir = 'rtl', style, ...rest
}) {
  const rtl = dir === 'rtl';
  const ink = tone === 'dark' ? 'var(--milli-white)' : 'var(--milli-black)';
  const sub = tone === 'dark' ? 'rgba(255,255,255,.78)' : 'var(--milli-ink-80)';
  const rule = tone === 'dark' ? 'rgba(255,255,255,.5)' : 'var(--milli-black)';
  const s = variant === 'stacked' ? 52 : 34;
  const badge = (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto',
      width: s, height: s, borderRadius: Math.round(s * 0.28),
      transform: 'rotate(45deg)', background: 'var(--milli-mango)',
    }}>
      <span style={{
        transform: 'rotate(-45deg)', color: 'var(--milli-black)',
        fontFamily: 'var(--font-fa-head)', fontWeight: 'var(--fw-black)',
        fontSize: variant === 'stacked' ? 24 : 16, lineHeight: 1,
      }}>{number}</span>
    </span>
  );
  if (variant === 'row') {
    return (
      <div style={{ display: 'flex', flexDirection: rtl ? 'row' : 'row-reverse', alignItems: 'flex-start', gap: 26, ...style }} {...rest}>
        {badge}
        <div style={{ flex: 1, paddingTop: 2 }}>
          <div style={{ height: 2, background: rule, marginBottom: 14 }} />
          <div style={{ fontWeight: 'var(--fw-bold)', fontSize: 'var(--fs-dm-lead)', color: ink, lineHeight: 1.3 }}>{title}</div>
          {body ? <div style={{ marginTop: 8, fontSize: 'var(--fs-dm-caption)', color: sub, lineHeight: 1.5, textWrap: 'pretty' }}>{body}</div> : null}
        </div>
      </div>
    );
  }
  return (
    <div style={{ ...style }} {...rest}>
      <div style={{ display: 'flex', flexDirection: rtl ? 'row-reverse' : 'row', justifyContent: 'flex-start', paddingBottom: 11 }}>{badge}</div>
      <div style={{ marginTop: 25, height: 2, background: rule }} />
      <div style={{ marginTop: 26, fontWeight: 'var(--fw-bold)', fontSize: 'var(--fs-dm-lead)', color: ink, lineHeight: 1.3, textWrap: 'pretty' }}>{title}</div>
      {body ? <div style={{ marginTop: 10, fontSize: 'var(--fs-dm-caption)', color: sub, lineHeight: 1.5, textWrap: 'pretty' }}>{body}</div> : null}
    </div>
  );
}
