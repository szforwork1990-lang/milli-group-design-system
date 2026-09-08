import React from 'react';

/** Deck cover: black ground, kicker, title, the decision question, logo and year. */
export function DeckCover({
  kicker = '', title = '', question = '', note = '', year = '', logo = null, dir = 'rtl', style, ...rest
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
      {note ? <div style={{ position: 'absolute', [rtl ? 'right' : 'left']: 64, top: 52, fontSize: 'var(--fs-dm-body-sm)' }}>{note}</div> : null}
      <div style={{ position: 'absolute', [rtl ? 'right' : 'left']: 64, top: 246, width: 1112 }}>
        <div style={{ display: 'flex', flexDirection: rtl ? 'row' : 'row-reverse', alignItems: 'center', gap: 12, justifyContent: rtl ? 'flex-start' : 'flex-end' }}>
          <span aria-hidden="true" style={{ width: 18, height: 18, borderRadius: '50%', background: 'var(--gradient-mango-dot)' }} />
          <span style={{ fontSize: 'var(--fs-dm-body)', color: 'var(--milli-mango)' }}>{kicker}</span>
        </div>
        <div style={{ marginTop: 26, fontFamily: 'var(--font-fa-head)', fontSize: 'var(--fs-dm-cover)', fontWeight: 'var(--fw-black)', lineHeight: 1.1 }}>{title}</div>
        <div style={{ marginTop: 22, maxWidth: 726, marginInlineStart: rtl ? 'auto' : 0, fontSize: 'var(--fs-dm-cover-sub)', lineHeight: 1.45, textWrap: 'pretty' }}>{question}</div>
      </div>
      {logo ? <div style={{ position: 'absolute', [rtl ? 'left' : 'right']: 104, top: 262 }}>{logo}</div> : null}
      {year ? <div style={{ position: 'absolute', [rtl ? 'right' : 'left']: 104, top: 640, fontSize: 'var(--fs-dm-body)' }}>{year}</div> : null}
    </div>
  );
}
