import { renderHook, act } from '@testing-library/react';

import useFilter from './useFilter';

describe('useFilter hook', () => {
  it('should change counts', () => {
    const { result } = renderHook(() => useFilter());

    act(() => {
      result.current.rating.setValue(1);
    });

    expect(result.current.rating.value).toBe(1);

    act(() => {
      result.current.maxAdults.setValue(1);
    });

    expect(result.current.maxAdults.value).toBe(1);

    act(() => {
      result.current.maxChildren.setValue(1);
    });

    expect(result.current.maxChildren.value).toBe(1);
  });
});
