import React from 'react';

import { OrderHeaderStyle } from './style';

const OrderHeader = () => (
  <OrderHeaderStyle>
    <div className="packing-btn">포장</div>
    <div className="packing-stage-number">현재 작업대 No: 1</div>
    <div className="packing-time">Lead Time : 00 00</div>
  </OrderHeaderStyle>
);

export default OrderHeader;
