import React, { FC, useEffect } from 'react';

import { packingInfoType } from '@hooks/query/order/types';
import { useOrderList } from '@hooks/query/order/useOrderList';
import useSessionStorage from '@hooks/common/useSessionStorage';
import { ORDER_LIST_KEY } from '@constants/order/order';
import AiQaColumn from '@views/Order/column/AiQaColumn';
import { OrderAiQaSectionStyle, OrderQaListTableStyle } from './style';

interface IOrderAiQaSectionProps {
  orderId: number | null;
}

const OrderAiQaSection: FC<IOrderAiQaSectionProps> = props => {
  const { orderId } = props;

  const { data } = useOrderList(orderId, {
    enabled: orderId !== null && orderId > 0,
  });

  const {
    sessionState: packingListState,
    setSessionState: setPackingListState,
  } = useSessionStorage<packingInfoType[]>(ORDER_LIST_KEY.PACKING, []);

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
        rowClassName={record =>
          record.isMatched === '이상 없음' ? 'matched' : 'unmatched'
        }
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
