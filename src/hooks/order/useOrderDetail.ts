import { useState } from 'react';
import { packingInfoType } from '@hooks/query/order/types';

/**
 * 주문 번호를 관리하는 커스텀 훅
 */
export const useOrderDetail = () => {
  /**
   * 주문 번호 상태
   */
  const [orderId, setOrderId] = useState<number | null>(null);

  /**
   * 패킹한 주문리스트
   */
  const [packingOrderList, setPackingOrderList] = useState<packingInfoType[]>(
    [],
  );

  return { orderId, setOrderId, packingOrderList, setPackingOrderList };
};
