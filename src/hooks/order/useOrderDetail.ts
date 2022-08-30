import { useState } from 'react';
import { Modal } from 'antd';

import { useOrderListUpdate } from '@hooks/query/order/useOrderListUpdate';
import useSessionStorage from '@hooks/common/useSessionStorage';
import { packingInfoType } from '@hooks/query/order/types';
import { ORDER_LIST_KEY, ORDER_PACKING_STATUS } from '@constants/order/order';

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
   * 포장 리스트 정보 및 작업 상태
   */
  const {
    sessionState: packingListState,
    setSessionState: setPackingListState,
  } = useSessionStorage<packingInfoType[]>(ORDER_LIST_KEY.PACKING, []);

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

        /**
         * 마지막 주문 정보를 삭제 후 새로운 정보(주문 처리 여부, 처리 상태)를 넣어서 덮어씌우기
         */
        const prevPackingId =
          packingListState[packingListState.length - 1].packingId;
        const prevIsMatched =
          packingListState[packingListState.length - 1].isMatched;

        packingListState.pop();

        setPackingListState(prev => [
          ...prev,
          {
            packingId: prevPackingId,
            isMatched: prevIsMatched,
            isChecked: true,
            status: ORDER_PACKING_STATUS.DONE,
          },
        ]);
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

        /**
         * 마지막 주문 정보를 삭제 후 새로운 정보(주문 처리 여부, 처리 상태)를 넣어서 덮어씌우기
         */
        const prevPackingId =
          packingListState[packingListState.length - 1].packingId;
        const prevIsMatched =
          packingListState[packingListState.length - 1].isMatched;

        packingListState.pop();

        setPackingListState(prev => [
          ...prev,
          {
            packingId: prevPackingId,
            isMatched: prevIsMatched,
            isChecked: true,
            status: ORDER_PACKING_STATUS.HOLD,
          },
        ]);
      },
    });
  };

  return {
    orderId,
    setOrderId,
    onPackingDone,
    onPackingHold,
    packingListState,
    setPackingListState,
  };
};
