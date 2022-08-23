import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { getAuth } from '@lib/utils/auth';
import { LOGIN_PAGE_URL_PATH } from '@constants/url/internalUrl';

/**
 * 로그인을 하지 않을 시, 무조건 로그인 페이지로 이동
 * @constructor
 */
const AuthProtected = () => {
  const { isLogin } = getAuth();

  if (!isLogin) {
    return <Navigate to={LOGIN_PAGE_URL_PATH} replace />;
  }

  return <Outlet />;
};

export default AuthProtected;
