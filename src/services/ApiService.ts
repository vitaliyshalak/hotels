import axios from 'axios';

import type { AxiosResponse, Method } from 'axios';
import type { HotelPropsInterface } from 'src/components/Hotels/types';
import type { RoomPropsInterface } from 'src/components/Rooms/types';

interface BaseRequestInterface {
  method?: Method;
  path: string;
  data?: any;
}

class ApiService {
  defaultCollectionId: string = 'OBMNG';

  private async request({ method = 'get', path, data }: BaseRequestInterface): Promise<AxiosResponse> {
    return axios({
      method,
      url: `${process.env.REACT_APP_API_URL}${path}`,
      data
    });
  }

  async getHotels(id: string = this.defaultCollectionId): Promise<HotelPropsInterface[]> {
    const { data } = await this.request({ path: `/hotels?collection-id=${id}` });

    return data;
  }

  async getHotelRooms(
    id: string,
    collectionId: string = this.defaultCollectionId
  ): Promise<RoomPropsInterface[]> {
    const { data } = await this.request({ path: `/roomRates/${collectionId}/${id}` });

    return data.rooms;
  }
}

export default new ApiService();
