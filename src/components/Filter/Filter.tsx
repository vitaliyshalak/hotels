import React, { useContext, useCallback } from 'react';

import HotelsContext, { HotelsContextInterface } from 'src/context/HotelsContext';

import Rating from '../Rating';
import { FilterOption } from './FilterOption';

import './styles.scss';

export const Filter = (): JSX.Element => {
  const { filters } = useContext<HotelsContextInterface>(HotelsContext);

  const onRatingChange = useCallback((event: any) => {
    const { rating } = event.currentTarget.dataset;
    const { value, setValue } = filters.rating;

    setValue(value !== rating ? rating : 0);
  }, [filters.rating]);

  const onOptionChange = useCallback(
    ({ amount, name }: { amount: number; name: string }) => {
      const { setValue } = filters[name];

      setValue((current: number) => {
        if (current + amount >= 0) {
          return current + amount;
        }

        return current;
      });
    },
    [filters]
  );

  return (
    <div className="filter">
      <Rating rating={filters.rating.value} onClick={onRatingChange} />
      <FilterOption
        title="Adults"
        name="maxAdults"
        onClick={onOptionChange}
        value={filters.maxAdults.value}
      />
      <FilterOption
        title="Children"
        name="maxChildren"
        onClick={onOptionChange}
        value={filters.maxChildren.value}
      />
    </div>
  );
};
