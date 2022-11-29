import type { MouseEventHandler } from 'react';

export interface IconPropsInterface {
  name: string;
  size?: number;
  fill?: string;
  color?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLElement>;
}
