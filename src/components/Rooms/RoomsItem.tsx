import React from 'react';

import type { RoomPropsInterface } from './types';

export const RoomsItem = (props: RoomPropsInterface): JSX.Element => {
  const { name, longDescription, occupancy } = props;

  return (
    <div className="rooms__item">
      <div className="rooms__item-info">
        <div className="rooms__item-name">
          {name}
        </div>
        <div className="rooms__item-occupancy">
          Adults: {occupancy.maxAdults}
        </div>
        <div className="rooms__item-occupancy">
          Children: {occupancy.maxChildren}
        </div>
      </div>
      <div className="rooms__item-desc">
        {longDescription}
      </div>
    </div>
  );
};
