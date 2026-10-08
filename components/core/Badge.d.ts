import React from 'react';

export type BadgeTone =
  | 'brand'   /* teal fill — AKCIÓ, section count */
  | 'action'  /* coral fill — cart count, APP source */
  | 'success' /* green fill — Kipróbálható (demo available) */
  | 'accent'  /* sky tint on teal text — quiz level (1.0-2.0) */
  | 'outline' /* white on hairline border — Készleten */
  | 'open'    /* 15% green wash — Nyitva */
  | 'closed'  /* 15% red wash — Zárva */
  | 'onBrand';/* translucent white on teal — Mánia+ tag pill in the profile header */

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  tone?: BadgeTone;
  /** The AKCIÓ treatment: uppercase, bold, 0.6px tracking, 9–10px. */
  caps?: boolean;
  size?: 'sm' | 'md';
  /** Optional leading <Icon /> — used by the verified-review and rating badges. */
  iconLeft?: React.ReactNode;
}

/** Status and label chip. */
export declare function Badge(props: BadgeProps): JSX.Element;
