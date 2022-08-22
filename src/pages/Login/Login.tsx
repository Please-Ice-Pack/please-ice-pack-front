import React from 'react';

import { MAIN_LOGO_IMAMGE_PATH } from '@constants/url/imageUrls';
import LoginForm from '@views/Login/LoginForm';
import { LoginContainerStyle } from './style';

const Login = () => (
  <LoginContainerStyle>
    <div className="main-logo-box">
      <img
        src={MAIN_LOGO_IMAMGE_PATH}
        width={300}
        height={300}
        alt="main_logo"
      />
    </div>
    <div className="login-option-box">
      <div className="login-box">
        <LoginForm />
      </div>
      <div className="comment-box">
        신규 사용자 등록 요청은 관리자에게 별도 문의 바랍니다.
      </div>
    </div>
  </LoginContainerStyle>
);

export default Login;
