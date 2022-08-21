import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@components/layouts/Header';
import { LayoutStyle, MainStyle } from './style';

const LayoutContainer = () => (
  <LayoutStyle>
    <Header />
    <MainStyle>
      <Outlet />
    </MainStyle>
  </LayoutStyle>
);

export default LayoutContainer;
