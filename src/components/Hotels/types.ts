import type { MouseEventHandler } from 'react';
import type { RoomPropsInterface } from '../Rooms/types';

export interface HotelImagesInterface {
  url: string;
}

export interface HotelPropsInterface {
  id: string;
  name: string;
  address1: string;
  address2: string;
  starRating: string;
  images: HotelImagesInterface[];
}

export interface HotelWithRoomsInterface extends HotelPropsInterface {
  onImageClick?: MouseEventHandler<HTMLElement>;
  rooms: RoomPropsInterface[];
}
