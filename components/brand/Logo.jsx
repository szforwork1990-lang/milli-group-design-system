import React from 'react';

const FILES = {
  'lockup-white': 'milli-lockup-white.svg',
  'lockup-black': 'milli-lockup-black.svg',
  'lockup-light-white': 'milli-lockup-light-white.svg',
  'lockup-light-black': 'milli-lockup-light-black.svg',
  'mark-white': 'milli-mark-white.svg',
  'mark-black': 'milli-mark-black.svg',
  'wordmark-white': 'milli-wordmark-white.svg',
  'wordmark-black': 'milli-wordmark-black.svg',
};

export function Logo({ variant = 'lockup-white', height, width, base = 'assets/logo', style, alt = 'Milli Group', ...rest }) {
  const file = FILES[variant] || FILES['lockup-white'];
  return (
    <img
      src={base + '/' + file}
      alt={alt}
      style={{ display: 'block', height: height || (width ? 'auto' : 48), width: width || 'auto', ...style }}
      {...rest}
    />
  );
}
