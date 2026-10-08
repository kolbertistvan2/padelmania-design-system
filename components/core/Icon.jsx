import React from 'react';

const WEIGHTS = { thin: 'ph-thin', light: 'ph-light', regular: 'ph', bold: 'ph-bold', fill: 'ph-fill', duotone: 'ph-duotone' };

/**
 * Phosphor glyph wrapper. Padel Mánia uses Phosphor Icons and nothing else —
 * no emoji, no Unicode symbols, no second icon family.
 */
export function Icon({ name, size = 20, weight = 'regular', color = 'currentColor', title, style, className = '', ...rest }) {
  const base = WEIGHTS[weight] || WEIGHTS.regular;
  return (
    <i
      className={`${base} ph-${name} ${className}`.trim()}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      style={{ fontSize: size, width: size, height: size, lineHeight: 1, color, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, ...style }}
      {...rest}
    />
  );
}
