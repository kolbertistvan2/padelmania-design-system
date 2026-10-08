import React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style'> {
  /** Field label above the control — 13px medium, gray-700. */
  label?: string;
  /** Helper line below in caption size. */
  hint?: string;
  /** Error message. Turns the border red and replaces the hint. */
  error?: string;
  /** Leading <Icon /> inside the shell — search glass, map pin. */
  iconLeft?: React.ReactNode;
  /** Trailing element — password eye toggle, clear button. */
  iconRight?: React.ReactNode;
  /** Translucent white-on-teal variant for fields inside the app header. */
  onDark?: boolean;
  style?: React.CSSProperties;
}

/** Text field. */
export declare function Input(props: InputProps): JSX.Element;
