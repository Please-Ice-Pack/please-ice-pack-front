import React, { Dispatch, FC, SetStateAction, useEffect } from 'react';

import { packingInfoType } from '@hooks/query/order/types';
import { useOrderList } from '@hooks/query/order/useOrderList';
import { ORDER_PACKING_STATUS } from '@constants/order/order';
import AiQaColumn from '@views/Order/column/AiQaColumn';
import { OrderAiQaSectionStyle, OrderQaListTableStyle } from './style';

interface IOrderAiQaSectionProps {
  orderId: number | null;
  packingListState: packingInfoType[];
  setPackingListState: Dispatch<SetStateAction<packingInfoType[]>>;
}

const OrderAiQaSection: FC<IOrderAiQaSectionProps> = props => {
  const { orderId, packingListState, setPackingListState } = props;

  const { data } = useOrderList(orderId, {
    enabled: orderId !== null && orderId > 0,
  });

  useEffect(() => {
    if (!data?.data?.packingInfo) return;

    setPackingListState(prev => [
      ...prev,
      {
        packingId: data!.data!.packingInfo.packingId,
        isMatched: data!.data!.packingInfo.isMatched
          ? '이상 없음'
          : '이상 있음',
      },
    ]);
  }, [data, setPackingListState]);

  return (
    <OrderAiQaSectionStyle>
      <div className="packing-btn">포장 완료 목록</div>
      <OrderQaListTableStyle
        rowClassName={record => {
          /**
           * 아직 주문이 처리되지 않았을 경우
           */
          if (!record.isChecked) return '';

          /**
           * 주문 처리 상태가 정상 완료 되었을 경우
           */
          if (record.status === ORDER_PACKING_STATUS.DONE) return 'checked';

          /**
           * 주문 처리 상태가 누락 보고 되었을 경우
           */
          return 'unchecked';
        }}
        columns={AiQaColumn()}
        dataSource={packingListState}
        pagination={{ showSizeChanger: false }}
        scroll={{
          y: 900,
        }}
      />
    </OrderAiQaSectionStyle>
  );
};
export default OrderAiQaSection;
