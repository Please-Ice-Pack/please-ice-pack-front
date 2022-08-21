import React, { FC, ReactNode } from 'react';

import {
  OrderContainerContent,
  OrderContainerStyle,
  OrderContainerTitle,
} from './style';

interface IOrderContainerProps {
  className?: string;
  title: string;
  children?: ReactNode;
}

const OrderContainer: FC<IOrderContainerProps> = props => {
  const { className, title, children } = props;
  return (
    <OrderContainerStyle className={className}>
      <OrderContainerTitle>{title}</OrderContainerTitle>
      <OrderContainerContent>{children}</OrderContainerContent>
    </OrderContainerStyle>
  );
};
export default OrderContainer;
