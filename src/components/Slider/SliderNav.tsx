import React from 'react';
import cx from 'classnames';

import Icon from '../Icon';

import type { SliderNavPropsInterface } from './types';

const btnTypes: { forward: string; backward: string; } = {
  forward: 'chevron-right',
  backward: 'chevron-left'
};

export const SliderNav = (
  {
    type = 'forward',
    onClick,
    isVisible = true
  }: SliderNavPropsInterface
): JSX.Element | null => {
  if (!isVisible) return null;

  const navClass: string = cx(
    'slider__nav',
    `slider__nav--${type}`
  );

  return (
    <Icon
      className={navClass}
      name={btnTypes[type]}
      onClick={onClick}
      size={32}
    />
  );
};
