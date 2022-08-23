import { useState } from 'react';

/**
 * 주문 번호를 관리하는 커스텀 훅
 */
export const useOrderId = () => {
  const [orderId, setOrderId] = useState<number | null>(null);

  return { orderId, setOrderId };
};
