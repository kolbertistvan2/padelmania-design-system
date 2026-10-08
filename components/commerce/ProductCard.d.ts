import React from 'react';

/**
 * Webshop product card.
 */
export interface ProductCardProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  /** Transparent product PNG. Contained in a 4:3 box on white — never cropped. */
  image?: string;
  /** Current price in HUF. Numbers are formatted with thin-space grouping + " Ft". */
  price: number | string;
  /** Full retail price — shown struck through when `onSale`. */
  regularPrice?: number | string;
  /** Mánia+ member price. Omit for the membership product itself. */
  memberPrice?: number | string;
  onSale?: boolean;
  /** "Kipróbálható" flag — the racket is available as a demo unit. */
  demo?: boolean;
  /** Path to the Mánia+ app icon shown before the member price line. */
  memberMarkSrc?: string;
  /** 152 in a horizontal rail (default); pass "100%" for grid layouts. */
  width?: number | string;
}

export declare function ProductCard(props: ProductCardProps): JSX.Element;
