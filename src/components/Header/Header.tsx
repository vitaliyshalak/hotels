import React from 'react';

import Banner from '../Banner';
import Filter from '../Filter';

import './styles.scss';

export const Header = (): JSX.Element => (
  <header className="header">
    <Banner />
    <Filter />
  </header>
);
