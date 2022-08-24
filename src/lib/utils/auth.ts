import { AUTH_KEYS } from '@constants/common/auth';

/**
 * 인증 정보 가져오기
 */
export const getAuth = () => {
  const token = localStorage.getItem(AUTH_KEYS.USER);
  const isLogin = token !== null;

  return { token, isLogin };
};

/**
 * 인증 정보 삭제오기
 */
export const removeAuth = () => {
  localStorage.removeItem(AUTH_KEYS.USER);
};
