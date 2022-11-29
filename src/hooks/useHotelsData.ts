import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ApiService from '../services/ApiService';

import type {
  HotelPropsInterface,
  HotelWithRoomsInterface
} from '../components/Hotels/types';

export interface HotelsHookInterface {
  hotelsData: HotelWithRoomsInterface[],
  loading: boolean;
}

const useHotelsData = (): HotelsHookInterface => {
  const { slug } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [hotels, setHotels] = useState<HotelWithRoomsInterface[]>([]);

  const fetchHotels = async (collectionId?: string): Promise<void> => {
    try {
      const hotelsData: HotelPropsInterface[] = await ApiService.getHotels(collectionId);

      setHotels(
        await Promise.all(
          hotelsData.map(
            async (hotel: HotelPropsInterface) => ({
              ...hotel,
              rooms: await ApiService.getHotelRooms(hotel.id, collectionId)
            })
          )
        )
      );
    } catch (error) {
      // error boundary
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHotels(slug);
  }, [slug]);

  return { hotelsData: hotels, loading };
};

export default useHotelsData;
