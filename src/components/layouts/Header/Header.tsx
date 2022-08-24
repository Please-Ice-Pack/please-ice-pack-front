import React, { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Modal } from 'antd';

import { removeAuth } from '@lib/utils/auth';
import theme from '@styles/theme';
import {
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
      content: (
        <p>
          <br />
          <strong>시스템 이용 가이드</strong>
          <br />
          1. 상품을 스캔하세요.
          <br />
          2. [포장 완료 목록]에서 스캔된 상품의 Ai 검수결과를 참고하세요.
          <br />
          3. [권장 패킹 옵션을 참고해 포장재를 선택하세요.
          <br />
          4. [Ai 검수결과]가 실물과 일치하고 이상이 없다면 포장 후 [정상 완료]를
          클릭해 다음 작업을 진행하세요.
          <br />
          5. [Ai 검수결과]가 실물과 맞지 않거나 상품 누락이 있다면 [누락보고]를
          클릭하세요. 해당 주문건은 나중에 작업할 수 있습니다. 상품이 보충될 수
          있도록 상자를 패킹 구역 중앙에 가져다 주세요.
          <br />
          <br />
          <strong>포장 가이드</strong>
          <br />
          1. 완충재를 사용해 안전하게 포장하세요.
          <br />
          2. 무거운 상품은 아래, 무르기 쉽거나 가벼운 상품은 위로 가도록
          포장하세요.
          <br />
          3. 냉매재를 넣을 때는 채소가 직접 닿지 않도록 하며 육류는 직접 닿거나
          최대한 가까이 있도록 합니다.
          <br />
          4. 박스의 점선에 송장을 붙이세요.
          <br />
          레일 위 박스를 놓을 때는 가로로 둡니다.
        </p>
      ),
      closable: true,
      maskClosable: true,
      okText: '확인',
      width: 800,
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
        <LogOutButtonStyle className="middle" onClick={onClickLogout}>
          로그아웃
        </LogOutButtonStyle>
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
