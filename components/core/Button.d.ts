import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Primary action control.
 */
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  children?: React.ReactNode;
  /** primary = coral (the commit action). secondary = teal fill. outline = 1.5px teal. ghost = coral text. danger = tinted destructive. */
  variant?: ButtonVariant;
  /** sm 13px / md 15px / lg 16px. lg is the full-width screen CTA. */
  size?: ButtonSize;
  /** Fully rounded capsule — used for the compact "Csatlakozz" style promo CTA. */
  pill?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  /** Icon element rendered before the label — pass an <Icon />. */
  iconLeft?: React.ReactNode;
  /** Icon element rendered after the label — arrows sit on the right. */
  iconRight?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

export declare function Button(props: ButtonProps): JSX.Element;
