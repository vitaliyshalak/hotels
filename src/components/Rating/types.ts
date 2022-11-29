import type { MouseEventHandler } from 'react';

export interface RatingPropsInterface {
  rating?: number | string;
  maxRating?: number;
  onClick?: MouseEventHandler<HTMLElement>;
}
