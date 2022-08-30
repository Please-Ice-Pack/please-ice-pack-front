import React from 'react';
import { Tooltip } from 'antd';
import { ColumnType } from 'antd/lib/table';

import { COLD_TYPE } from '@constants/order/order';

/**
 * Ai 인식결과 테이블에 해당하는 column
 * @constructor
 */
const OrderQaColumn = () =>
  [
    {
      key: 'productId',
      dataIndex: 'productId',
      title: '상품번호',
      width: 20,
    },
    {
      key: 'productName',
      dataIndex: 'productName',
      title: '상품이름',
      width: 40,
      ellipsis: {
        showTitle: false,
      },
      render: (number: number) => (
        <Tooltip placement="topLeft" title={number}>
          {number}
        </Tooltip>
      ),
    },
    {
      key: 'amount',
      dataIndex: 'amount',
      title: '수량',
      width: 15,
    },
    {
      key: 'coldType',
      dataIndex: 'coldType',
      title: '타입',
      width: 15,
      render: (record: string) => {
        switch (record) {
          case COLD_TYPE.NORMAL:
            return '상온';
          case COLD_TYPE.REFRIGERATED:
            return '냉장';
          case COLD_TYPE.FROZEN:
            return '냉동';
          default:
            return '';
        }
      },
    },
  ].map(item => ({
    ...item,
    align: 'center' as ColumnType<never>['align'],
  }));

export default OrderQaColumn;
