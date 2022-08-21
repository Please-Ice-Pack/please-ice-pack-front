import React from 'react';

import column from '@views/Order/column';
import { OrderAiQaSectionStyle, OrderQaListTableStyle } from './style';

const OrderAiQaSection = () => {
  const mockData = [];
  for (let i = 0; i < 10; i += 1) {
    mockData.push({
      number: `${i + 1}`,
      name: `상품이름 ${i} 상품이름 ${i}상품이름 ${i}상품이름 ${i}상품이름 ${i} 상품이름 ${i}상품이름 ${i}상품이름 ${i}상품이름 ${i}상품이름 ${i}상품이름 ${i}상품이름 ${i}상품이름 ${i}상품이름 ${i}상품이름 ${i}`,
      amount: `${i}`,
      type: `타입 ${i}`,
    });
  }

  return (
    <OrderAiQaSectionStyle>
      <div className="packing-btn">포장 완료 목록</div>
      <OrderQaListTableStyle
        columns={column()}
        dataSource={mockData}
        pagination={{ showSizeChanger: false }}
      />
    </OrderAiQaSectionStyle>
  );
};
export default OrderAiQaSection;
