import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { useOrderDetail } from '@hooks/order/useOrderDetail';
import OrderOptionSection from '@views/Order/OrderOptionSection';
import OrderAiQaSection from '@views/Order/OrderAiQaSection';
import OrderDetailSection from '@views/Order/OrderDetailSection';
import { OrderContentStyle } from './style';

const OrderContent = () => {
  const {
    orderId,
    setOrderId,
    packingOrderList,
    setPackingOrderList,
    onPackingDone,
    onPackingHold,
  } = useOrderDetail();

  return (
    <OrderContentStyle>
      <ErrorBoundary fallback={<div>에러 발생!</div>}>
        <Suspense fallback={<div>로딩중...</div>}>
          {/* AI 검수결과 테이블 영역 */}
          <OrderAiQaSection
            orderId={orderId}
            packingOrderList={packingOrderList}
            setPackingOrderList={setPackingOrderList}
          />
          {/* 주문 비교 테이블 영역 */}
          <OrderDetailSection orderId={orderId} />
          {/* 주문 검수 결과 옵션 영역 */}
          <OrderOptionSection
            orderId={orderId}
            setOrderId={setOrderId}
            onPackingDone={onPackingDone}
            onPackingHold={onPackingHold}
          />
        </Suspense>
      </ErrorBoundary>
    </OrderContentStyle>
  );
};

export default OrderContent;
