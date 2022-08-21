import React from 'react';

import OrderOptionSection from '@views/Order/OrderOptionSection';
import { OrderContentStyle } from './style';

const OrderContent = () => (
  <OrderContentStyle>
    <section>AI 검수결과 테이블 영역</section>
    <section>주문 비교 테이블 영역</section>
    <OrderOptionSection />
  </OrderContentStyle>
);

export default OrderContent;
