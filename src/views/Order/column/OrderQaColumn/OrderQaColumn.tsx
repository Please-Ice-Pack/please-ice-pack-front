import React from 'react';
import { Tooltip } from 'antd';
import { ColumnType } from 'antd/lib/table';

/**
 * Ai 검수결과 테이블에 해당하는 column
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
      render: (record: string) => (record === 'NORMAL' ? '냉장' : '냉동'),
    },
  ].map(item => ({
    ...item,
    align: 'center' as ColumnType<never>['align'],
  }));

export default OrderQaColumn;
