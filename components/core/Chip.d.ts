import React from 'react';

export interface ChipProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onClick'> {
  children?: React.ReactNode;
  /** `toggle` = selectable sort/filter pill. `chip` = static cream tag (recommendation profile chips). */
  kind?: 'toggle' | 'chip';
  /** Selected state for `toggle` — fills teal with white label. */
  selected?: boolean;
  /** Leading <Icon /> at 13–14px. */
  iconLeft?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

/** Filter / sort pill and static tag. */
export declare function Chip(props: ChipProps): JSX.Element;
