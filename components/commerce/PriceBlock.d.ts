import React from 'react';

export interface PriceBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  price: number | string;
  /** Struck-through full retail price. */
  regularPrice?: number | string;
  /** lg = 24px (product detail), md = 20px (cart summary). */
  size?: 'md' | 'lg';
  /** Turns the current price coral. */
  onSale?: boolean;
  /** Hairline rule above the row. On by default — that's the product-detail treatment. */
  rule?: boolean;
}

/** Price row for product detail and order summaries. */
export declare function PriceBlock(props: PriceBlockProps): JSX.Element;
