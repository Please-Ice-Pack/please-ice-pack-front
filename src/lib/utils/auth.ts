import { AUTH_KEYS } from '@constants/common/auth';

export const getAuth = () => {
  const token = localStorage.getItem(AUTH_KEYS.USER);
  const isLogin = token !== null;

  return { token, isLogin };
};
