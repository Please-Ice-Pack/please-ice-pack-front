import React, { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Modal } from 'antd';

import { removeAuth } from '@lib/utils/auth';
import theme from '@styles/theme';
import {
  AuthOptionStyle,
  AuthTypeStyle,
  HeaderStyle,
  HeaderTitle,
  LeftSideHeaderStyle,
  LogOutButtonStyle,
  RightSideHeaderStyle,
  WorkGuideButtonStyle,
} from './style';

const Header = () => {
  const navigate = useNavigate();
  /**
   * 로그아웃 버튼을 클릭했을 때 모달 노출
   */
  const onClickLogout = useCallback(() => {
    Modal.confirm({
      title: '로그아웃',
      content: '로그아웃 하시겠습니까?',
      okText: '로그아웃',
      cancelText: '닫기',
      onOk: () => {
        removeAuth();
        navigate(0);
      },
    });
  }, [navigate]);

  /**
   * 작업 가이드 버튼을 클릭했을 때 모달 노출
   */
  const onClickWorkGuide = useCallback(() => {
    Modal.info({
      title: '작업가이드',
      content:
        '1. 계란/무거운 물건은 밑에, 연어/딸기는 맨 위에 넣는다.\n2. 채소는 얼음과 직접 닿지 않도록 한다.',
      closable: true,
      maskClosable: true,
      okText: '확인',
    });
  }, []);

  return (
    <HeaderStyle>
      <Link to="/">
        <LeftSideHeaderStyle>
          <HeaderTitle>KSPS</HeaderTitle>
        </LeftSideHeaderStyle>
      </Link>
      <RightSideHeaderStyle>
        <AuthOptionStyle>
          <AuthTypeStyle>Sign in as 로그인 타입</AuthTypeStyle>
          <LogOutButtonStyle className="middle" onClick={onClickLogout}>
            로그아웃
          </LogOutButtonStyle>
        </AuthOptionStyle>
        <WorkGuideButtonStyle
          color={theme.color.pip_gray_01}
          onClick={onClickWorkGuide}
        >
          작업 가이드
        </WorkGuideButtonStyle>
      </RightSideHeaderStyle>
    </HeaderStyle>
  );
};

export default Header;
