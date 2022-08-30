import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Error400 from '@pages/Error/Error400';
import Loading from '@components/Loading';
import { useOrderDetail } from '@hooks/order/useOrderDetail';
import OrderOptionSection from '@views/Order/OrderOptionSection';
import OrderAiQaSection from '@views/Order/OrderAiQaSection';
import OrderDetailSection from '@views/Order/OrderDetailSection';
import { OrderContentStyle } from './style';

const OrderContent = () => {
  const {
    orderId,
    setOrderId,
    onPackingDone,
    onPackingHold,
    packingListState,
    setPackingListState,
  } = useOrderDetail();

  return (
    <OrderContentStyle>
      <ErrorBoundary FallbackComponent={Error400}>
        <Suspense fallback={<Loading />}>
          {/* Ai 인식결과 테이블 영역 */}
          <OrderAiQaSection
            orderId={orderId}
            packingListState={packingListState}
            setPackingListState={setPackingListState}
          />
          {/* 주문 비교 테이블 영역 */}
          <OrderDetailSection orderId={orderId} />
          {/* 주문 인식 결과 옵션 영역 */}
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
