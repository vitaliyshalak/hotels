import type { MouseEventHandler } from 'react';

export interface SliderPropsInterface {
  children: any;
  itemsToShow?: number;
}

type SliderNavType = 'forward' | 'backward';

export interface SliderNavPropsInterface {
  type?: SliderNavType;
  onClick: MouseEventHandler<HTMLElement>;
  isVisible?: boolean;
}
