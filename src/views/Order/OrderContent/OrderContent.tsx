import React from 'react';

import OrderOptionSection from '@views/Order/OrderOptionSection';
import OrderAiQaSection from '@views/Order/OrderAiQaSection';
import OrderDetailSection from '@views/Order/OrderDetailSection';
import { OrderContentStyle } from './style';

const OrderContent = () => (
  <OrderContentStyle>
    {/* AI 검수결과 테이블 영역 */}
    <OrderAiQaSection />
    {/* 주문 비교 테이블 영역 */}
    <OrderDetailSection />
    {/* 주문 검수 결과 옵션 영역 */}
    <OrderOptionSection />
  </OrderContentStyle>
);

export default OrderContent;
