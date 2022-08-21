import React from 'react';
import { ColumnType } from 'antd/lib/table';

const AiQaColumn = () =>
  [
    {
      title: '주문번호',
      dataIndex: 'number',
    },
    {
      title: 'AI 검수결과',
      dataIndex: 'result',
    },
  ].map(item => ({
    ...item,
    align: 'center' as ColumnType<never>['align'],
  }));

export default AiQaColumn;
