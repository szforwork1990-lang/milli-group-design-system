import React from 'react';

/**
 * Position within a chapter: one rounded diamond per slide. Slides already passed are pale
 * mango, the current slide is full mango, slides still to come are white with a hairline.
 * The deck's squares all carry rot="2700000" in the source, so the shape is a rounded
 * diamond and the layout box stays the unrotated side length. RTL decks read right to
 * left, so the first slide is the rightmost diamond.
 */
export function ChapterDots({ total = 3, active = 1, size = 22, tone = 'light', style }) {
  const ring = tone === 'dark' ? 'rgba(255,255,255,.55)' : 'rgba(0,0,0,.30)';
  return (
    <div style={{ display: 'flex', flexDirection: 'row-reverse', gap: 13, ...style }}>
      {Array.from({ length: total }, (_, i) => {
        const state = i < active - 1 ? 'past' : i === active - 1 ? 'current' : 'ahead';
        return (
          <span
            key={i}
            style={{
              width: size, height: size, flex: '0 0 auto',
              borderRadius: Math.round(size * 0.28),
              transform: 'rotate(45deg)',
              background: state === 'current' ? 'var(--milli-mango)' : state === 'past' ? 'var(--milli-mango-light)' : 'var(--milli-white)',
              boxShadow: state === 'ahead' ? `inset 0 0 0 1px ${ring}` : 'none',
            }}
          />
        );
      })}
    </div>
  );
}
