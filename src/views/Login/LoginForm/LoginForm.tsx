import React from 'react';
import classNames from 'classnames';

import Form from '@components/Form';
import Input from '@components/Input';
import Button from '@components/Button';
import { AUTH_MAX_LENGTH } from '@constants/common/auth';
import { REX_IDENTIFICATION_PATTERN } from '@constants/common/regExp';
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
        <div className="login-input-section">
          <Input
            className={classNames('login-input', {
              active: identification?.length,
            })}
            name="identification"
            initialValue=""
            maxLength={AUTH_MAX_LENGTH.IDENTIFICATION}
            rules={[
              {
                required: true,
                message: '아이디를 입력하세요.',
              },
              {
                pattern: REX_IDENTIFICATION_PATTERN,
                message:
                  '영어로 시작하는 5~10글자를 입력해주세요.(특수문자 제외)',
              },
            ]}
            placeholder="아이디"
          />
          <Input
            className="login-input-fixed-email"
            name="email"
            initialValue="kurlycorp.com"
            disabled
          />
        </div>
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
