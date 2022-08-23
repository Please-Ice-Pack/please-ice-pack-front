import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { useOrderId } from '@hooks/order/useOrderId';
import OrderOptionSection from '@views/Order/OrderOptionSection';
import OrderAiQaSection from '@views/Order/OrderAiQaSection';
import OrderDetailSection from '@views/Order/OrderDetailSection';
import { OrderContentStyle } from './style';

const OrderContent = () => {
  const { orderId, setOrderId } = useOrderId();

  return (
    <OrderContentStyle>
      <ErrorBoundary fallback={<div>에러 발생!</div>}>
        {/* AI 검수결과 테이블 영역 */}
        <OrderAiQaSection />
        {/* 주문 비교 테이블 영역 */}
        <OrderDetailSection />
        {/* 주문 검수 결과 옵션 영역 */}
        <Suspense fallback={<div>로딩중...</div>}>
          <OrderOptionSection orderId={orderId} setOrderId={setOrderId} />
        </Suspense>
      </ErrorBoundary>
    </OrderContentStyle>
  );
};

export default OrderContent;
