import React from 'react';
import { Tooltip } from 'antd';
import { ColumnType } from 'antd/lib/table';

import { orderDetailType } from '@hooks/query/order/types';
import theme from '@styles/theme';
import { COLD_TYPE } from '@constants/order/order';

/**
 * 주문상세 테이블에 해당하는 column
 * @constructor
 */
const OrderColumn = () =>
  [
    {
      key: 'isMatched',
      dataIndex: 'isMatched',
      title: '일치여부',
      width: 30,
      render: (record: boolean) => ({
        props: {
          style: {
            backgroundColor: record
              ? theme.color.pip_green
              : theme.color.pip_red,
            fontWeight: 'bold',
          },
        },
        children: record ? '일치' : '불일치',
      }),
      sorter: (a: orderDetailType, b: orderDetailType) =>
        a.isMatched === b.isMatched ? 0 : a.isMatched ? 1 : -1,
    },
    {
      key: 'productId',
      dataIndex: 'productId',
      title: '상품번호',
      width: 30,
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
      width: 20,
    },
    {
      key: 'coldType',
      dataIndex: 'coldType',
      title: '타입',
      width: 20,
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

export default OrderColumn;
