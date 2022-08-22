import React from 'react';
import classNames from 'classnames';

import Form from '@components/Form';
import Input from '@components/Input';
import Button from '@components/Button';
import { AUTH_MAX_LENGTH } from '@constants/common/auth';
import { useLoginForm } from '@hooks/login/useLoginForm';
import { LoginFormContainer } from './style';

const LoginForm = () => {
  const { form, isDisabled, login, identification, password } = useLoginForm();
  return (
    <LoginFormContainer>
      <Form
        name="login"
        form={form}
        onFinish={login}
        initialValues={{
          remember: true,
        }}
      >
        <div className="login-label">아이디</div>
        <Input
          className={classNames('login-input', {
            active: identification?.length,
          })}
          name="identification"
          initialValue=""
          maxLength={AUTH_MAX_LENGTH.EMAIL}
          placeholder="아이디"
          rules={[{ type: 'email', message: '이메일 형식이 맞지 않습니다' }]}
        />

        <div className="login-label">비밀번호</div>
        <Input
          className={classNames('login-input', { active: password?.length })}
          name="password"
          initialValue=""
          maxLength={AUTH_MAX_LENGTH.PASSWORD}
          placeholder="비밀번호"
          type="password"
        />
        <Button
          className="login-button"
          htmlType="submit"
          radius={5}
          disabled={isDisabled}
        >
          로그인
        </Button>
      </Form>
    </LoginFormContainer>
  );
};

export default LoginForm;
