import React from 'react';
import cx from 'classnames';

import type { ContainerPropsInterface } from './types';

import './styles.scss';

export const Container = ({ className, children, ...props }: ContainerPropsInterface): JSX.Element => {
  const containerClass: string = cx('container', className);

  return (
    <div className={containerClass} {...props}>
      {children}
    </div>
  );
};
