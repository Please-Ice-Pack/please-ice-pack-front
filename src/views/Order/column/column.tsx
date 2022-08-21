import React from 'react';
import { Tooltip } from 'antd';
import { ColumnType } from 'antd/lib/table';

const column = () =>
  [
    {
      title: '상품번호',
      dataIndex: 'number',
      width: 20,
    },
    {
      title: '상품이름',
      dataIndex: 'name',
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
      title: '수량',
      dataIndex: 'amount',
      width: 15,
    },
    {
      title: '타입',
      dataIndex: 'type',
      width: 15,
    },
  ].map(item => ({
    ...item,
    align: 'center' as ColumnType<never>['align'],
  }));

export default column;
