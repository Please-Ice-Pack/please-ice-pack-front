import { LoginPayloadType } from '@hooks/login/useLoginForm';
import { postFetcher } from '@services/superFetch';

export const AuthApi = {
  login: (loginInfo: LoginPayloadType) => {
    const { identification, password } = loginInfo;

    return postFetcher<LoginPayloadType>({
      url: 'v1/members/login',
      errorMessage: '로그인 실패',
      successMessage: '로그인 성공',
      data: {
        identification: identification.split('@')[0],
        password,
      },
    });
  },
};
