import type { HotelImagesInterface } from '../Hotels/types';

export interface RoomPropsInterface {
  id: string;
  name: string;
  images: HotelImagesInterface[];
  longDescription: string;
  shortDescription: string;
  occupancy: {
    maxAdults: number;
    maxChildren: number;
    maxOverall: number;
  }
}

export interface RoomsPropsInterface {
  rooms?: RoomPropsInterface[];
}
