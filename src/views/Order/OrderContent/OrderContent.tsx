import React from 'react';

import OrderOptionSection from '@views/Order/OrderOptionSection';
import OrderAiQaSection from '@views/Order/OrderAiQaSection';
import { OrderContentStyle } from './style';

const OrderContent = () => (
  <OrderContentStyle>
    {/* AI 검수결과 테이블 영역 */}
    <OrderAiQaSection />
    <section>주문 비교 테이블 영역</section>
    {/* 주문 검수 결과 옵션 영역 */}
    <OrderOptionSection />
  </OrderContentStyle>
);

export default OrderContent;
