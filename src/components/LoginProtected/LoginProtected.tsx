import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { getAuth } from '@lib/utils/auth';
import { INTRO_PAGE_URL_PATH } from '@constants/url/internalUrl';

/**
 * 로그인을 했을 시, 무조건 메인 페이지로 이동
 * @constructor
 */
const LoginProtected = () => {
  const { isLogin } = getAuth();

  if (isLogin) {
    return <Navigate to={INTRO_PAGE_URL_PATH} replace />;
  }

  return <Outlet />;
};

export default LoginProtected;
