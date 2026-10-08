import React from 'react';

export interface ManiaPriceBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Member price in HUF — the app computes it as price × (1 − discountRate). */
  memberPrice: number | string;
  /** Delta versus the shopper's current price. Shown to non-members as "spórolj X-t". */
  savings?: number | string;
  /** Active member → green treatment, free-shipping note, no CTA. */
  isMember?: boolean;
  /** Path to the Mánia+ app icon (40px, 8px radius). */
  markSrc?: string;
  /** Join handler — renders the coral "Csatlakozz" button. Non-members only. */
  onJoin?: () => void;
}

/** Mánia+ member-price callout on product detail. */
export declare function ManiaPriceBox(props: ManiaPriceBoxProps): JSX.Element;
