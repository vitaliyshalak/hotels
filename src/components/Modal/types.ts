import type { MouseEventHandler } from 'react';

export interface ModalPropsInterface {
  open: boolean;
  children?: any;
  className?: string;
  onClose: MouseEventHandler<HTMLElement>;
}
