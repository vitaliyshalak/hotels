import React from 'react';

import Header from '../Header';
import Hotels from '../Hotels';

import { HotelsProvider } from 'src/context/HotelsContext';

export const App = (): JSX.Element => (
  <HotelsProvider>
    <Header />
    <Hotels />
  </HotelsProvider>
);
