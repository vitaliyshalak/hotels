import React from 'react';

import { RoomsItem } from './RoomsItem';

import type { RoomsPropsInterface } from './types';

import './styles.scss';

export const Rooms = ({ rooms = [] }: RoomsPropsInterface):JSX.Element => (
  <div className="rooms" data-testid="rooms">
    {rooms.map((room) => (
      <RoomsItem key={room.id} {...room} />
    ))}
  </div>
);
