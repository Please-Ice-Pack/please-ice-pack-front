import React from 'react';
import { ColumnType } from 'antd/lib/table';

/**
 * 포장 완료 목록 테이블에 사용되는 column
 * @constructor
 */
const AiQaColumn = () =>
  [
    {
      key: 'packingId',
      dataIndex: 'packingId',
      title: '주문번호',
    },
    {
      key: 'isMatched',
      dataIndex: 'isMatched',
      title: 'AI 검수결과',
    },
  ].map(item => ({
    ...item,
    align: 'center' as ColumnType<never>['align'],
  }));

export default AiQaColumn;
