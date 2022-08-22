import React from 'react';
import {
  Form,
  FormItemProps,
  Input as AntdInput,
  InputProps as AntdInputProps,
} from 'antd';

interface IInputProps extends Omit<AntdInputProps, 'name'> {
  type?: 'normal' | 'password';
  name: FormItemProps['name'];
  rules?: FormItemProps['rules'];
  initialValue?: FormItemProps['initialValue'];
}

const Input = ({
  type = 'normal',
  name,
  rules,
  initialValue,
  ...rest
}: IInputProps) => (
  <Form.Item name={name} rules={rules} initialValue={initialValue}>
    {type === 'password' ? (
      <AntdInput.Password visibilityToggle={false} {...rest} />
    ) : (
      <AntdInput {...rest} />
    )}
  </Form.Item>
);

export default Input;
