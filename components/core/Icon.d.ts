import React from 'react';

export type IconWeight = 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  /** Phosphor icon name in kebab-case, e.g. "shopping-cart", "map-pin", "crosshair". */
  name: string;
  /** Pixel size. App uses 11–24; 22 in headers, 18 in action buttons, 14 in meta rows. */
  size?: number;
  /** Phosphor weight. App convention: regular for idle, bold for emphasis/arrows, fill for active/selected. */
  weight?: IconWeight;
  /** Glyph colour. Defaults to currentColor so it inherits the surrounding text. */
  color?: string;
  /** Accessible label. Omit for decorative glyphs (they get aria-hidden). */
  title?: string;
}

/**
 * Phosphor icon glyph — the only icon family Padel Mánia uses.
 */
export declare function Icon(props: IconProps): JSX.Element;
