import React, { FC } from 'react';
import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd';

import theme from '@styles/theme';
import { ButtonStyle } from './style';

interface IButtonProps extends AntdButtonProps {
  radius?: number;
}

const Button: FC<IButtonProps> = props => {
  const {
    children,
    size,
    color = theme.color.pip_purple_01,
    radius,
    ...rest
  } = props;
  return (
    <ButtonStyle radius={radius} color={color}>
      <AntdButton className={size} {...rest}>
        {children}
      </AntdButton>
    </ButtonStyle>
  );
};

export default Button;
