import React from 'react';

import Table from '@components/Table';
import { OrderDetailSectionStyle } from '@views/Order/OrderDetailSection/style';
import OrderContainer from '@views/Order/common/OrderContainer';
import OrderColumn from '@views/Order/column/OrderColumn';

const OrderDetailSection = () => {
  const mockData = [];
  for (let i = 0; i < 10; i += 1) {
    mockData.push({
      number: `${i + 1}233-5341-3322-1233-4434`,
      name: `상품 ${i + 1}`,
      amount: `${i + 1}`,
      type: `타입 ${i}`,
    });
  }

  return (
    <OrderDetailSectionStyle>
      <div className="packing-stage-number">현재 작업대 No: 1</div>
      <OrderContainer className="order-detail-section" title="스캔된 주문">
        <div className="order-detail-left-section">
          <div className="order-number">주문번호: 12</div>
          <div className="invoice-number">송장번호: 3333-4444-2222-1111</div>
        </div>
        <div className="order-detail-right-section">
          <div className="order-user">주문자명: 이진희</div>
          <div className="order-date">주문일시: 2021-03-01</div>
        </div>
      </OrderContainer>
      <div className="compare-order-detail">
        <OrderContainer title="주문상세">
          <Table
            columns={OrderColumn()}
            dataSource={mockData}
            scroll={{
              y: 500,
            }}
          />
        </OrderContainer>
        <OrderContainer title="Ai 검수결과">
          <Table
            columns={OrderColumn()}
            dataSource={mockData}
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
