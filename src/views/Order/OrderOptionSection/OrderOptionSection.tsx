import React, { useCallback } from 'react';
import { notification, Modal } from 'antd';

import Button from '@components/Button';
import {
  BOX_IMAGE_PATH,
  DRY_ICE_IMAGE_PATH,
  ICE_PACK_IMAGE_PATH,
} from '@constants/url/imageUrls';
import theme from '@styles/theme';
import OrderContainer from '@views/Order/common/OrderContainer';
import { NotificationType } from '@views/Order/OrderOptionSection/types';
import PackingOptionVerticalCard from '@views/Order/PackingOptionVerticalCard';
import { OrderOptionSectionStyle, VerticalCardSectionStyle } from './style';

const OrderOptionSection = () => {
  /**
   * 송장번호 스캔 성공 notification 노출
   * @param type
   */
  const openScanSuccessNotification = (type: NotificationType) => {
    notification[type]({
      message: '송장번호 스캔 성공',
      duration: 2.5,
    });
  };

  /**
   * 스캔 버튼을 눌렀을 때 스캔 및 완료 notification 노출
   */
  const onClickScan = useCallback(() => {
    const modal = Modal.info({
      title: '송장번호 스캔',
      content: `스캔 중...`,
    });

    // TODO: Data Fetching

    setTimeout(() => {
      modal.destroy();
      openScanSuccessNotification('success');
    }, 2000);
  }, []);

  /**
   * 누락 보고 버튼을 눌렀을 때 모달 노출
   */
  const onClickLater = useCallback(() => {
    Modal.confirm({
      title: (
        <>
          Ai 검수 결과와 다른 결과입니다
          <br />
          그대로 진행하시겠습니까?
        </>
      ),
      okText: '예',
      cancelText: '아니오',
    });
  }, []);

  /**
   * 정상 완료 버튼을 눌렀을 때 모달 노출
   */
  const onClickSubmit = useCallback(() => {
    Modal.confirm({
      title: (
        <>
          Ai 검수 결과와 같은 결과입니다.
          <br />
          다음 작업을 진행하시겠습니까?
        </>
      ),
      okText: '예',
      cancelText: '아니오',
    });
  }, []);

  return (
    <OrderOptionSectionStyle>
      <div className="packing-time">Lead Time : 00 00</div>
      <OrderContainer title="권장 패킹 옵션">
        <VerticalCardSectionStyle>
          <PackingOptionVerticalCard
            title="박스"
            size={8}
            number={2}
            imgUrl={BOX_IMAGE_PATH}
          />
          <PackingOptionVerticalCard
            title="아이스 팩"
            size={8}
            number={2}
            imgUrl={ICE_PACK_IMAGE_PATH}
          />
          <PackingOptionVerticalCard
            title="드라이아이스"
            size={8}
            number={2}
            imgUrl={DRY_ICE_IMAGE_PATH}
          />
        </VerticalCardSectionStyle>
      </OrderContainer>
      <div className="result-option-section">
        <div className="scan-btn-section">
          <Button radius={25} onClick={onClickScan}>
            스캔 <div className="scan-sub-title">송장번호 스캔하기</div>
          </Button>
        </div>

        <div className="submit-btn-section">
          <Button
            color={theme.color.pip_red}
            radius={25}
            onClick={onClickLater}
          >
            누락 보고 <div className="error-sub-title">나중에 작업하기</div>
          </Button>
          <Button
            color={theme.color.pip_green}
            radius={25}
            onClick={onClickSubmit}
          >
            정상 완료 <div className="submit-sub-title">다음 작업 진행하기</div>
          </Button>
        </div>
      </div>
    </OrderOptionSectionStyle>
  );
};

export default OrderOptionSection;
