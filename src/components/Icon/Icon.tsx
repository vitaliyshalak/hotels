import React from 'react';
import cx from 'classnames';
import Feather from 'feather-icons/dist/feather-sprite.svg';

import type { IconPropsInterface } from './types';

import './styles.scss';

export const Icon = (
  {
    name,
    size = 20,
    fill = 'none',
    color = 'currentColor',
    className,
    onClick,
    ...props
  }: IconPropsInterface
): JSX.Element => {
  const iconClass: string = cx(
    'icon',
    className,
    { 'icon--pointer': !!onClick }
  );

  return (
    <i
      className={iconClass}
      onClick={onClick}
      style={{ width: size, height: size }}
      {...props}
    >
      <svg
        width={size}
        height={size}
        fill={fill}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <use href={`${Feather}#${name}`} />
      </svg>
    </i>
  );
};
