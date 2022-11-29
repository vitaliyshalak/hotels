import React from 'react';

import Slider from '../Slider';
import Rating from '../Rating';
import Rooms from '../Rooms';

import type { HotelWithRoomsInterface } from './types';

export const HotelsItem = (props: HotelWithRoomsInterface): JSX.Element => {
  const { name, address1, address2, images, starRating, rooms, onImageClick } = props;

  return (
    <div className="hotels__item">
      <div className="hotels__item-header">
        {!!images.length && (
          <div className="hotels__item-images">
            <Slider>
              {images.map((img) => (
                <img
                  onClick={onImageClick}
                  data-url={img.url}
                  data-testid="hotel-image"
                  key={img.url}
                  src={img.url}
                  alt=""
                />
              ))}
            </Slider>
          </div>
        )}
        <div className="hotels__item-info">
          <div className="hotels__item-name">{name}</div>
          {address1 && <div className="hotels__item-address">{address1}</div>}
          {address2 && <div className="hotels__item-address">{address2}</div>}
        </div>
        <div className="hotels__item-rating">
          <Rating rating={starRating} />
        </div>
      </div>
      <Rooms rooms={rooms} />
    </div>
  );
};
