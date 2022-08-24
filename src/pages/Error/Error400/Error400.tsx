import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@components/Button';
import { Error400Container } from './style';

interface IError400props {
  error: any;
}

const Error400: FC<IError400props> = props => {
  const { error } = props;

  const navigate = useNavigate();

  const errorMessage = error?.response?.data?.message;
  return (
    <Error400Container>
      <div className="error-box">
        <div className="error-status">400</div>
        <div className="error-title">요청에 실패했습니다.</div>
        <div className="error-message">{errorMessage}</div>
        <p className="error-desc">
          현재 요청하신 페이지에 대해서 요청을 실패했습니다.
          <br />
          아래 버튼을 눌러서
          <br />
          메인 페이지로 돌아가시기 바랍니다.
        </p>
        <Button radius={5} size="large" onClick={() => navigate(0)}>
          메인 페이지로
        </Button>
      </div>
    </Error400Container>
  );
};

export default Error400;
