import React from 'react';

/**
 * The striped comparison table. Column labels in grey above a 2px rule, then rows of a
 * fixed height alternating white and near-white, separated by hairlines. Any cell can be
 * a node, so badges, dot scales and chips drop straight in.
 */
export function RowTable({ columns = [], rows = [], rowHeight = 79, highlight = -1, dir = 'rtl', style, ...rest }) {
  const rtl = dir === 'rtl';
  const track = columns.map(c => c.width ? (typeof c.width === 'number' ? c.width + 'px' : c.width) : 'minmax(0,1fr)').join(' ');
  return (
    <div style={{ direction: rtl ? 'rtl' : 'ltr', ...style }} {...rest}>
      <div style={{ display: 'grid', gridTemplateColumns: track, alignItems: 'baseline', columnGap: 20, paddingBottom: 8 }}>
        {columns.map((c, i) => (
          <div key={i} style={{ fontSize: 'var(--fs-dm-label)', color: 'var(--milli-ink-58)', textAlign: c.align || (rtl ? 'right' : 'left') }}>{c.label}</div>
        ))}
      </div>
      <div style={{ borderTop: '2px solid var(--milli-black)' }}>
        {rows.map((row, ri) => {
          const cells = Array.isArray(row) ? row : row.cells || [];
          const isHi = ri === highlight;
          return (
            <div key={ri} style={{
              display: 'grid', gridTemplateColumns: track, alignItems: 'center', columnGap: 20,
              minHeight: rowHeight, padding: '10px 16px',
              background: isHi ? 'var(--milli-mango)' : ri % 2 ? 'var(--milli-panel-97)' : 'var(--milli-white)',
              borderBottom: '1px solid var(--milli-black)',
              boxShadow: isHi ? 'inset 4px 0 0 0 var(--milli-mango-dark)' : undefined,
            }}>
              {cells.map((cell, ci) => (
                <div key={ci} style={{ textAlign: columns[ci] && columns[ci].align ? columns[ci].align : (rtl ? 'right' : 'left'), fontSize: 'var(--fs-dm-body-sm)', color: 'var(--milli-ink-80)', lineHeight: 1.4 }}>{cell}</div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
