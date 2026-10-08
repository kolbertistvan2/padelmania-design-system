import React from 'react';

export type QuizOptionVariant = 'level' | 'image' | 'icon' | 'budget';

/**
 * Ütőválasztó answer card.
 */
export interface QuizOptionCardProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  /** level = numbered disc (Kezdő→Gold). image = 80px racket shot. icon = cream glyph tile. budget = price column. */
  variant?: QuizOptionVariant;
  /** 0-based position — drives the level disc number and its colour ramp (sky-tint → coral). */
  index?: number;
  /** Option label, e.g. "Bronz", "Univerzális", "Kontroll", "Középszint". */
  label: string;
  /** Body copy, 13px. In the app this is the long self-assessment sentence. */
  description?: string;
  /** Fine print, 11px medium gray — "Általában 1-3 év, heti 1-2x". */
  details?: string;
  /** Sky-tint pill on the right of the title row, e.g. "3.0-4.0". `level` variant only. */
  levelBadge?: string;
  /** <Icon /> for the `icon` variant. */
  icon?: React.ReactNode;
  /** Transparent racket PNG for the `image` variant. */
  image?: string;
  /** Price range for the `budget` variant, e.g. "50 – 75 000 Ft". */
  priceLabel?: string;
  onSelect?: () => void;
  style?: React.CSSProperties;
}

export declare function QuizOptionCard(props: QuizOptionCardProps): JSX.Element;
