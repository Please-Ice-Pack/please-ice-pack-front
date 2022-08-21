import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@components/layouts/Header';
import { LayoutStyle } from './style';

const LayoutContainer = () => (
  <LayoutStyle>
    <Header />
    <main>
      <Outlet />
    </main>
  </LayoutStyle>
);

export default LayoutContainer;
