import React from 'react';

export interface CategoryCardProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  /** Category name from WooCommerce, e.g. "Padel ütők", "Cipők". Wraps to two lines. */
  label: string;
  /** 52px square thumbnail — category image, or the first product image as fallback. */
  image?: string;
  style?: React.CSSProperties;
}

/** Category tile for the home screen's two-up grid. */
export declare function CategoryCard(props: CategoryCardProps): JSX.Element;
