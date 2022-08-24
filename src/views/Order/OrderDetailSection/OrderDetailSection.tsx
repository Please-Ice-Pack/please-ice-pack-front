import React, { FC } from 'react';

import Table from '@components/Table';
import { useOrderList } from '@hooks/query/order/useOrderList';
import { OrderDetailSectionStyle } from '@views/Order/OrderDetailSection/style';
import OrderContainer from '@views/Order/common/OrderContainer';
import OrderColumn from '@views/Order/column/OrderColumn';
import OrderQaColumn from '@views/Order/column/OrderQaColumn';

interface IOrderDetailSectionProps {
  orderId: number | null;
}

const OrderDetailSection: FC<IOrderDetailSectionProps> = props => {
  const { orderId } = props;

  const { data } = useOrderList(orderId, {
    enabled: orderId !== null && orderId > 0,
  });

  return (
    <OrderDetailSectionStyle>
      <OrderContainer className="order-detail-section" title="스캔된 주문">
        <div className="order-detail-left-section">
          <div className="order-number">
            <span className="order-detail-title">주문번호 : </span>
            {data?.data?.orderInfo.orderId}
          </div>
          <div className="invoice-number">
            <span className="order-detail-title">송장번호 : </span>
            {data?.data?.orderInfo.trackingNumber}
          </div>
        </div>
        <div className="order-detail-right-section">
          <div className="order-user">
            <span className="order-detail-title">주문자명 : </span>
            {data?.data?.orderInfo.customerName}
          </div>
          <div className="order-date">
            <span className="order-detail-title">주문일시 : </span>
            {data?.data?.orderInfo.orderDate &&
              `${data?.data?.orderInfo.orderDate.split('T')[0]} (${
                data?.data?.orderInfo.orderDate.split('T')[1]
              })`}
          </div>
        </div>
      </OrderContainer>
      <div className="compare-order-detail">
        <OrderContainer title="주문상세">
          <Table
            columns={OrderColumn()}
            dataSource={data?.data?.orderDetails}
            scroll={{
              y: 500,
            }}
          />
        </OrderContainer>
        <OrderContainer title="Ai 인식결과">
          <Table
            columns={OrderQaColumn()}
            dataSource={data?.data?.recognitionResults}
            scroll={{
              y: 500,
            }}
          />
        </OrderContainer>
      </div>
    </OrderDetailSectionStyle>
  );
};

export default OrderDetailSection;
