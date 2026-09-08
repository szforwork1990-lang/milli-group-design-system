import React from 'react';

/**
 * Position within a chapter: one rounded diamond per slide, gold up to the current one.
 * The deck's squares are all 45deg-rotated squares (rot="2700000" in the source), so the
 * shape is a rounded diamond and the layout box stays the unrotated side length.
 * RTL decks read right to left, so the first slide is the rightmost diamond.
 */
export function ChapterDots({ total = 3, active = 1, size = 22, tone = 'light', style }) {
  const rest = tone === 'dark' ? 'rgba(255,255,255,.28)' : 'var(--milli-black)';
  return (
    <div style={{ display: 'flex', flexDirection: 'row-reverse', gap: 13, ...style }}>
      {Array.from({ length: total }, (_, i) => (
        <span key={i} style={{ width: size, height: size, borderRadius: Math.round(size * 0.28), transform: 'rotate(45deg)', background: i < active ? 'var(--milli-mango)' : rest }} />
      ))}
    </div>
  );
}
