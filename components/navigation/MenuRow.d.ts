import React from 'react';

export interface MenuRowProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  /** <Icon /> inside the 36px cream disc. */
  icon?: React.ReactNode;
  /** Image URL instead of a glyph — used for the Mánia+ app-icon row. */
  iconImage?: string;
  label: string;
  /** Right-side status text, e.g. "Aktív tag", "Csatlakozz!". */
  hint?: string;
  /** Coral treatment on the icon disc and hint — draws the eye to the upsell row. */
  highlight?: boolean;
  disabled?: boolean;
  /** Set automatically by MenuSection; drops the bottom divider. */
  last?: boolean;
  style?: React.CSSProperties;
}

export interface MenuSectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Uppercase caption above the card, e.g. "FIÓK", "SZOLGÁLTATÁSOK". */
  title?: string;
  children?: React.ReactNode;
}

export declare function MenuRow(props: MenuRowProps): JSX.Element;
export declare function MenuSection(props: MenuSectionProps): JSX.Element;
