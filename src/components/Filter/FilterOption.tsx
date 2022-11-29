import React from 'react';

import Icon from '../Icon';

import type { FilterOptionPropsInterface } from './types';

export const FilterOption = ({ title, name, onClick, value = 0 }: FilterOptionPropsInterface): JSX.Element => (
  <div className="filter__option" data-testid={name}>
    <div className="filter__option-title">{title}:</div>
    <div className="filter__option-body">
      <Icon
        name="plus"
        data-testid={`${name}-plus`}
        onClick={() => onClick({ amount: 1, name })}
      />
      <div
        data-testid={`${name}-value`}
        className="filter__option-value"
      >
        {value}
      </div>
      <Icon
        name="minus"
        data-testid={`${name}-minus`}
        onClick={() => onClick({ amount: -1, name })}
      />
    </div>
  </div>
);
