import React from 'react';
import cx from 'classnames';

import Icon from '../Icon';

import type { RatingPropsInterface } from './types';

import './styles.scss';

export const Rating = ({ rating = 0, maxRating = 5, onClick }: RatingPropsInterface): JSX.Element => (
  <div className="rating" data-testid="rating">
    {[...Array(maxRating)].map((_, index) => (
      <Icon
        data-rating={index + 1}
        data-testid={`rating-star${index < +rating ? '-checked' : ''}`}
        className={cx('rating__star', { 'rating__star--checked': index < +rating })}
        key={index}
        name="star"
        size={30}
        onClick={onClick}
      />
    ))}
  </div>
);
