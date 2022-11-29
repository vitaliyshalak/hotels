import { render, screen, fireEvent } from '@testing-library/react';

import mockHotels from 'src/mock/mockHotels';
import mockRooms from 'src/mock/mockRooms';

import { Hotels } from './Hotels';
import HotelsContext, { initialState } from 'src/context/HotelsContext';

import type { HotelWithRoomsInterface } from './types';

const mockData: HotelWithRoomsInterface[] = mockHotels()
  .map((hotel) => ({
    ...hotel,
    rooms: mockRooms()
  }));

describe('Hotels component', () => {
  it('should render hotels with rooms data', () => {
    render(
      <HotelsContext.Provider
        value={{
          ...initialState,
          hotels: mockData
        }}
      >
        <Hotels />
      </HotelsContext.Provider>
    );

    expect(screen.getByTestId('hotels')).not.toBeEmptyDOMElement();
    expect(screen.getByTestId('rooms')).not.toBeEmptyDOMElement();
  });

  it('should open modal with hotel image', () => {
    render(
      <HotelsContext.Provider
        value={{
          ...initialState,
          hotels: mockData
        }}
      >
        <Hotels />
      </HotelsContext.Provider>
    );

    expect(screen.queryByTestId('modal')).toBeNull();
    const img = screen.getByTestId('hotel-image');
    expect(img).toBeVisible();
    fireEvent.click(img);
    expect(screen.getByTestId('modal')).toBeVisible();
  });
});
