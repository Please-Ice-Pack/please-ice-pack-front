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
   * 최근 포장 주문 정보
   */
  const recentPackingInfo = packingListState[packingListState.length - 1];

  /**
   * 정상 완료 버튼을 눌렀을 때
   */
  const onPackingDone = () => {
    Modal.confirm({
      title: `Ai 인식 결과와 ${
        recentPackingInfo.isMatched === '이상 없음' ? '같은' : '다른'
      } 결과입니다. 다음 작업을 진행하시겠습니까?`,
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
        const prevPackingId = recentPackingInfo.packingId;
        const prevIsMatched = recentPackingInfo.isMatched;

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
      title: `Ai 인식 결과와 ${
        recentPackingInfo.isMatched === '이상 없음' ? '같은' : '다른'
      } 결과입니다. 나중에 작업을 진행하시겠습니까?`,
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
        const prevPackingId = recentPackingInfo.packingId;
        const prevIsMatched = recentPackingInfo.isMatched;

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
