import React, { PropsWithChildren } from 'react';
import { FormProps as AntdFormProps, Form as AntdForm } from 'antd';

const Form = ({ children, ...rest }: PropsWithChildren<AntdFormProps>) => (
  <AntdForm {...rest}>{children}</AntdForm>
);

Form.Item = AntdForm.Item;
Form.useFormInstance = AntdForm.useFormInstance;

export default Form;
