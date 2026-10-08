import React from 'react';

export interface CartLineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  /** Variant summary, e.g. "Grip: L2 / Szín: Fekete". */
  variant?: string;
  image?: string;
  /** Unit price in HUF. */
  price: number | string;
  quantity?: number;
  onQuantityChange?: (next: number) => void;
  onRemove?: () => void;
  /** Pass a <QtyStepper /> — the row lays it out but does not own its state. */
  stepper?: React.ReactNode;
}

/** Cart line item. */
export declare function CartLineItem(props: CartLineItemProps): JSX.Element;
