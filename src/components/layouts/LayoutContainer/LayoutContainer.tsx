import React from 'react';
import { Layout } from 'antd';

import Header from '../Header';
import { LayoutStyle } from './style';

const { Sider, Content } = Layout;

const LayoutContainer = () => (
  <>
    <Header />
    <LayoutStyle>
      <Sider>AI 검수결과 테이블</Sider>
      <Content>주문 정보 테이블</Content>
    </LayoutStyle>
  </>
);

export default LayoutContainer;
