import React from 'react';

/**
 * Four nested rounded diamonds stepping in from the bottom-left corner, dark grey to
 * mango — the chapter-divider signature. Positions are the unrotated top-left corners as
 * in the source deck; the slide's overflow clips what runs off the edge.
 */
function Concentric() {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      <span style={{ position: 'absolute', left: -220, top: 320, width: 560, height: 560, borderRadius: 112, transform: 'rotate(45deg)', background: 'var(--milli-ink-75)' }} />
      <span style={{ position: 'absolute', left: -140, top: 400, width: 400, height: 400, borderRadius: 80, transform: 'rotate(45deg)', background: 'var(--milli-gray-56)' }} />
      <span style={{ position: 'absolute', left: -60, top: 480, width: 240, height: 240, borderRadius: 48, transform: 'rotate(45deg)', background: 'var(--milli-mango-dark)' }} />
      <span style={{ position: 'absolute', left: 14, top: 554, width: 92, height: 92, borderRadius: 18, transform: 'rotate(45deg)', background: 'var(--milli-mango)' }} />
    </div>
  );
}

/**
 * Chapter divider. Black ground, chapter numeral and title on the outer half, a short
 * abstract underneath, and an "in this chapter" contents list on the inner half.
 */
export function ChapterOpener({
  number = '01', title = '', abstract = '', contentsLabel = '', contents = [], dir = 'rtl', style, ...rest
}) {
  const rtl = dir === 'rtl';
  return (
    <div
      dir={dir}
      style={{
        position: 'relative', width: 1280, height: 720, overflow: 'hidden',
        background: 'var(--milli-black)', color: 'var(--milli-white)',
        fontFamily: 'var(--font-fa-body)',
        direction: rtl ? 'rtl' : 'ltr', textAlign: rtl ? 'right' : 'left', unicodeBidi: 'isolate',
        ...style,
      }}
      {...rest}
    >
      <Concentric />
      <div aria-hidden="true" style={{ position: 'absolute', [rtl ? 'right' : 'left']: 0, top: 120, width: 660, height: 5, background: 'var(--milli-mango)' }} />
      <div aria-hidden="true" style={{ position: 'absolute', [rtl ? 'right' : 'left']: 64, top: 172, width: 12, height: 118, borderRadius: 6, background: 'var(--milli-mango)' }} />

      <div style={{ position: 'absolute', [rtl ? 'right' : 'left']: 102, top: 168, width: 556 }}>
        <div style={{ fontFamily: 'var(--font-fa-head)', fontSize: 'var(--fs-dm-chapter-num)', fontWeight: 'var(--fw-black)', color: 'var(--milli-mango)' }}>{number}</div>
        <div style={{ marginTop: 10, fontFamily: 'var(--font-fa-head)', fontSize: 'var(--fs-dm-chapter)', fontWeight: 'var(--fw-black)', lineHeight: 1.05 }}>{title}</div>
        <p style={{ margin: '26px 0 0', fontSize: 'var(--fs-dm-body)', lineHeight: 'var(--lh-dm-body)', textWrap: 'pretty' }}>{abstract}</p>
      </div>

      {contents.length ? (
        <div style={{ position: 'absolute', [rtl ? 'right' : 'left']: 756, top: 168, width: 462 }}>
          {contentsLabel ? <div style={{ fontSize: 'var(--fs-dm-label)', opacity: .78 }}>{contentsLabel}</div> : null}
          <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 22 }}>
            {contents.map((item, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: rtl ? 'row' : 'row-reverse', alignItems: 'flex-start', gap: 22 }}>
                <span style={{ flex: '0 0 auto', width: 20, height: 20, marginTop: 6, borderRadius: 6, transform: 'rotate(45deg)', background: 'var(--milli-mango)' }} />
                <span style={{ flex: 1, fontSize: 'var(--fs-dm-lede)', lineHeight: 1.35 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
