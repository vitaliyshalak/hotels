import { renderHook } from '@testing-library/react-hooks';

import mockHotels from 'src/mock/mockHotels';
import mockRooms from 'src/mock/mockRooms';

import ApiService from 'src/services/ApiService';

import useHotelsData, { HotelsHookInterface } from './useHotelsData';

jest.mock('src/services/ApiService');

const mockResultData: HotelsHookInterface = {
  hotelsData: mockHotels()
    .map((hotel) => ({
      ...hotel,
      rooms: mockRooms()
    })),
  loading: false,
};

describe('useHotelsData hook', () => {
  it('should return hotels data', async () => {
    (ApiService.getHotels as any).mockImplementation(() => mockHotels());
    (ApiService.getHotelRooms as any).mockImplementation(() => mockRooms());

    const { result, waitForNextUpdate } = renderHook(() => useHotelsData());

    await waitForNextUpdate();

    expect(result.current).toStrictEqual(mockResultData);
  });
});
