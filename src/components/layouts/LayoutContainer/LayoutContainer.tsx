import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@components/layouts/Header';
import { LayoutStyle } from './style';

const LayoutContainer = () => (
  <LayoutStyle>
    <Header />
    <Outlet />
  </LayoutStyle>
);

export default LayoutContainer;
