import type { RoomPropsInterface } from 'src/components/Rooms/types';

const mockRooms = (count: number = 1): RoomPropsInterface[] =>
  [...Array(count)].map((_, index) => ({
    id: index.toString(),
    name: 'room',
    images: [],
    longDescription: 'long desc',
    shortDescription: 'short desc',
    occupancy: {
      maxAdults: 0,
      maxChildren: 0,
      maxOverall: 0,
    }
  }));

export default mockRooms;
