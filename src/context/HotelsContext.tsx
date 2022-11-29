import React, { createContext, useMemo } from 'react';

import useFilter from '../hooks/useFilter';
import useHotelsData from '../hooks/useHotelsData';

import type { ReactNode } from 'react';
import type { HotelsHookInterface } from '../hooks/useHotelsData';
import type { FilterHookInterface } from '../hooks/useFilter';
import type { HotelWithRoomsInterface } from '../components/Hotels/types';
import type { RoomPropsInterface } from '../components/Rooms/types';

export interface HotelsContextInterface {
  hotels: HotelWithRoomsInterface[];
  loading: boolean;
  filters: FilterHookInterface;
}

export const initialState: HotelsContextInterface = {
  hotels: [],
  loading: true,
  filters: {
    rating: {
      value: 0,
      setValue: () => {}
    },
    maxAdults: {
      value: 0,
      setValue: () => {}
    },
    maxChildren: {
      value: 0,
      setValue: () => {}
    }
  }
};

const HotelsContext = createContext<HotelsContextInterface>(initialState);

export const HotelsProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const filters: FilterHookInterface = useFilter();
  const { hotelsData, loading }: HotelsHookInterface = useHotelsData();

  const filteredData: HotelWithRoomsInterface[] = useMemo(
    () => {
      const filteredHotelsByRating = hotelsData.filter(
        (hotel: HotelWithRoomsInterface) => +hotel.starRating >= +filters.rating.value
      );

      return filteredHotelsByRating.map((hotel: HotelWithRoomsInterface) => ({
        ...hotel,
        rooms: hotel.rooms.filter((room: RoomPropsInterface) => (
          room.occupancy.maxAdults >= +filters.maxAdults.value &&
          room.occupancy.maxChildren >= +filters.maxChildren.value
        ))
      }));
    },
    [filters, hotelsData]
  );

  return (
    <HotelsContext.Provider
      value={{
        hotels: filteredData,
        loading,
        filters,
      }}
    >
      {children}
    </HotelsContext.Provider>
  );
};

export default HotelsContext;
