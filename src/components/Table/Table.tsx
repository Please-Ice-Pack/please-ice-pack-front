import React from 'react';
import { Table as AntdTable, TableProps } from 'antd';

import { TableContainer } from './style';

const Table = <T extends Record<string, unknown>>({
  pagination,
  ...rest
}: Partial<TableProps<T>>) => (
  <TableContainer>
    <AntdTable
      pagination={{
        position: ['bottomCenter'],
        ...pagination,
      }}
      {...rest}
    />
  </TableContainer>
);

export default Table;
