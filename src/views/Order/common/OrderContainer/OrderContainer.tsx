import React, { FC, ReactNode } from 'react';

import {
  OrderContainerContent,
  OrderContainerStyle,
  OrderContainerTitle,
} from './style';

interface IOrderContainerProps {
  title: string;
  children?: ReactNode;
}

const OrderContainer: FC<IOrderContainerProps> = props => {
  const { title, children } = props;
  return (
    <OrderContainerStyle>
      <OrderContainerTitle>{title}</OrderContainerTitle>
      <OrderContainerContent>{children}</OrderContainerContent>
    </OrderContainerStyle>
  );
};
export default OrderContainer;
