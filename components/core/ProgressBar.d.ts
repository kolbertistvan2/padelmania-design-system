import React from 'react';

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current step (1-based in the quiz). */
  value?: number;
  /** Total steps. */
  total?: number;
}

/** Quiz step progress — 4px rail, coral fill, no radius, full bleed. */
export declare function ProgressBar(props: ProgressBarProps): JSX.Element;
