import React from 'react';

import AiQaColumn from '@views/Order/column/AiQaColumn';
import { OrderAiQaSectionStyle, OrderQaListTableStyle } from './style';

const OrderAiQaSection = () => {
  const mockData = [];
  for (let i = 0; i < 10; i += 1) {
    mockData.push({
      number: `${i + 1}233-5341-3322-1233-4434`,
      result: `이상없음`,
    });
  }

  return (
    <OrderAiQaSectionStyle>
      <div className="packing-btn">포장 완료 목록</div>
      <OrderQaListTableStyle
        columns={AiQaColumn()}
        dataSource={mockData}
        pagination={{ showSizeChanger: false }}
        scroll={{
          y: 900,
        }}
      />
    </OrderAiQaSectionStyle>
  );
};
export default OrderAiQaSection;
