import { Form } from 'antd';
import { useNavigate } from 'react-router-dom';

import { AuthApi } from '@services/api/authApi';
import { AUTH_KEYS } from '@constants/common/auth';
import { REX_IDENTIFICATION_PATTERN } from '@constants/common/regExp';

/**
 * 로그인 버튼을 눌렀을 때 전달되는 form 타입
 */
export type LoginSubmitType = {
  email: string;
  identification: string;
  password: string;
};

/**
 * 로그인 요청시 담는 데이터 타입
 */
export type LoginPayloadType = Omit<LoginSubmitType, 'email'>;

/**
 * 로그인 폼에 사용되는 커스텀 훅
 */
export const useLoginForm = () => {
  const navigate = useNavigate();

  /**
   * hook form 사용
   */
  const [form] = Form.useForm();

  /**
   * 입력한 아이디
   */
  const identification = Form.useWatch('identification', form);

  /**
   * 입력한 비밀번호
   */
  const password = Form.useWatch('password', form);

  /**
   * 아이디 형식이 이메일 정규식과 맞지 않는 경우
   */
  const isIdFormError = !REX_IDENTIFICATION_PATTERN.test(identification);

  /**
   * 버튼이 비활성화되는 조건
   */
  const isDisabled =
    isIdFormError || identification?.length === 0 || password?.length === 0;

  /**
   * 정상적으로 로그인 시, localStorage에 토큰값을 저장하고 메인 페이지로 라우팅
   * @param loginInfo
   */
  const login = async (loginInfo: LoginSubmitType) => {
    const { identification, password } = loginInfo;
    try {
      const res = await AuthApi.login({ identification, password });
      localStorage.setItem(AUTH_KEYS.USER, res.data.accessToken);
      navigate('/');
    } catch (e) {
      console.error(e);
    }
  };
  return { form, isDisabled, login, identification, password };
};
