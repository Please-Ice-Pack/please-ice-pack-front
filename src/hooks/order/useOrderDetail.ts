import { useState } from 'react';
import { Modal } from 'antd';

import { useOrderListUpdate } from '@hooks/query/order/useOrderListUpdate';
import { ORDER_PACKING_STATUS } from '@constants/order/order';

/**
 * 주문 번호를 관리하는 커스텀 훅
 */
export const useOrderDetail = () => {
  /**
   * 주문 번호 상태
   */
  const [orderId, setOrderId] = useState<number | null>(null);

  /**
   * 포장 상태 변경 mutate 함수
   */
  const { mutate } = useOrderListUpdate(orderId);

  /**
   * 정상 완료 버튼을 눌렀을 때
   */
  const onPackingDone = () => {
    Modal.confirm({
      title: 'Ai 인식 결과와 같은 결과입니다. 다음 작업을 진행하시겠습니까?',
      okText: '예',
      cancelText: '아니오',
      onOk: () => {
        mutate({
          orderId,
          status: ORDER_PACKING_STATUS.DONE,
        });
        setOrderId(null);
      },
    });
  };

  /**
   * 누락 보고 버튼을 눌렀을 때
   */
  const onPackingHold = () => {
    Modal.confirm({
      title: 'Ai 인식 결과와 다른 결과입니다. 그대로 진행하시겠습니까?',
      okText: '예',
      cancelText: '아니오',
      onOk: () => {
        mutate({
          orderId,
          status: ORDER_PACKING_STATUS.HOLD,
        });
        setOrderId(null);
      },
    });
  };

  return {
    orderId,
    setOrderId,
    onPackingDone,
    onPackingHold,
  };
};
