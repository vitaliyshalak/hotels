import React, { useRef } from 'react';
import cx from 'classnames';

import Icon from '../Icon';

import useClickOutside from 'src/hooks/useClickOutside';

import type { ModalPropsInterface } from './types';

import './styles.scss';

export const Modal = (
  {
    open = false,
    className,
    children,
    onClose
  }: ModalPropsInterface): JSX.Element | null => {
  const modalRef = useRef(null);
  const modalClass: string = cx(className, 'modal');

  useClickOutside(modalRef, onClose);

  return !open ? null : (
    <div className={modalClass} data-testid="modal">
      <Icon
        data-testid="modal-close"
        className="modal__close"
        name="x"
        size={40}
        onClick={onClose}
      />
      <div className="modal__body" ref={modalRef}>
        {children}
      </div>
    </div>
  );
};
