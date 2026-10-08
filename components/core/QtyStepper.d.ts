import React from 'react';

export interface QtyStepperProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  min?: number;
  max?: number;
  onChange?: (next: number) => void;
}

/** Quantity stepper — 34px cream squares either side of the count. */
export declare function QtyStepper(props: QtyStepperProps): JSX.Element;
