import React from 'react';

/**
 * Padel court result card.
 */
export interface CourtCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Venue name from Google Places. */
  name: string;
  address: string;
  /** Opening state. Renders the Nyitva / Zárva wash badge; omit when unknown. */
  isOpen?: boolean;
  /** Distance in km — formatted as "850 m" or "12,4 km" (Hungarian decimal comma). */
  distanceKm?: number;
  /** Google rating, one decimal. */
  rating?: number;
  /** Google review count, shown in parentheses. */
  reviewCount?: number;
  /** Favourited courts get a rose wash + border and pin to the top of the list. */
  favorite?: boolean;
  /** Expanded state reveals the action row and switches the card to cream + coral border. */
  expanded?: boolean;
  onToggle?: () => void;
  onFavorite?: () => void;
  onNavigate?: () => void;
  onCall?: () => void;
  onDetail?: () => void;
}

export declare function CourtCard(props: CourtCardProps): JSX.Element;
