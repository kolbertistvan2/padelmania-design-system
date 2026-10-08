import React from 'react';

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Headline figure — "5", "2 perc", "3". */
  value: React.ReactNode;
  /** Caption below — "kérdés", "válaszra", "ajánlás". */
  label: string;
}

export interface BenefitRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** <Icon /> at 16–22px; rendered coral. */
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  /** `coral` = 36px coral-tint circle (intro screens). `cream` = 40px cream rounded square (membership list). */
  tone?: 'coral' | 'cream';
  /** Hairline rule below the row — used in the membership benefits card. */
  divider?: boolean;
}

export declare function StatCard(props: StatCardProps): JSX.Element;
export declare function BenefitRow(props: BenefitRowProps): JSX.Element;
