import React from 'react';

export interface FeatureCtaProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 15px bold white, e.g. "Nem tudod, melyik ütő a tiéd?" */
  title: string;
  /** 12px sky-teal support line. */
  subtitle?: string;
  /** <Icon /> at 24px — rendered coral inside a translucent white tile. */
  icon?: React.ReactNode;
}

/** Full-width teal feature CTA card. */
export declare function FeatureCta(props: FeatureCtaProps): JSX.Element;
