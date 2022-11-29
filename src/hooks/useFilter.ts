import { useState } from 'react';

export interface FilterHookOptionInterface {
  value: number | string;
  setValue: Function;
}

export interface FilterHookInterface {
  [rating: string]: FilterHookOptionInterface;
  maxAdults: FilterHookOptionInterface;
  maxChildren: FilterHookOptionInterface
}

const useFilter = (): FilterHookInterface => {
  const [rating, setRating] = useState(0);
  const [maxAdults, setAdults] = useState(0);
  const [maxChildren, setChildren] = useState(0);

  return {
    rating: {
      value: rating,
      setValue: setRating
    },
    maxAdults: {
      value: maxAdults,
      setValue: setAdults,
    },
    maxChildren: {
      value: maxChildren,
      setValue: setChildren,
    }
  };
};

export default useFilter;
