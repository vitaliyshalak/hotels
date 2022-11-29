import type { HotelPropsInterface } from 'src/components/Hotels/types';

const mockHotels = (count: number = 1): HotelPropsInterface[] =>
  [...Array(count)].map((_, index) => ({
    id: index.toString(),
    name: 'hotel',
    address1: 'address1',
    address2: 'address2',
    starRating: '2',
    images: [
      { url: 'https://rl-uk2.azureedge.net/picturemanager/images/OBMNG4/hotel3.jpg' }
    ],
  }));

export default mockHotels;
