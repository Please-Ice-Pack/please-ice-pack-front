import React, { Dispatch, FC, SetStateAction, useEffect } from 'react';

import { packingInfoType } from '@hooks/query/order/types';
import { useOrderList } from '@hooks/query/order/useOrderList';
import AiQaColumn from '@views/Order/column/AiQaColumn';
import { OrderAiQaSectionStyle, OrderQaListTableStyle } from './style';

interface IOrderAiQaSectionProps {
  orderId: number | null;
  packingOrderList: packingInfoType[];
  setPackingOrderList: Dispatch<SetStateAction<packingInfoType[]>>;
}

const OrderAiQaSection: FC<IOrderAiQaSectionProps> = props => {
  const { orderId, packingOrderList, setPackingOrderList } = props;

  const { data } = useOrderList(orderId, {
    enabled: orderId !== null && orderId > 0,
  });

  useEffect(() => {
    if (!data?.data?.packingInfo) return;

    setPackingOrderList(prev => [
      ...prev,
      {
        packingId: data!.data!.packingInfo.packingId,
        isMatched: data!.data!.packingInfo.isMatched
          ? '이상 없음'
          : '이상 있음',
      },
    ]);
  }, [data, setPackingOrderList]);

  return (
    <OrderAiQaSectionStyle>
      <div className="packing-btn">포장 완료 목록</div>
      <OrderQaListTableStyle
        rowClassName={record =>
          record.isMatched === '이상 없음' ? 'matched' : 'unmatched'
        }
        columns={AiQaColumn()}
        dataSource={packingOrderList}
        pagination={{ showSizeChanger: false }}
        scroll={{
          y: 900,
        }}
      />
    </OrderAiQaSectionStyle>
  );
};
export default OrderAiQaSection;
