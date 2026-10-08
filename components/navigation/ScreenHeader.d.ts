import React from 'react';

export interface ScreenHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Centre label. A leading digit ("3 / 5") switches to the muted step-counter style automatically. */
  title?: string;
  /** Shows the back arrow when provided. */
  onBack?: () => void;
  /** Shows the close X when provided. */
  onClose?: () => void;
  /** Replaces the right slot entirely. */
  right?: React.ReactNode;
}

/** 56px light header for quiz, results and modal stacks. */
export declare function ScreenHeader(props: ScreenHeaderProps): JSX.Element;
