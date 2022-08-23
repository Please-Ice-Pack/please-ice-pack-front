import React, { Dispatch, SetStateAction, FC, useCallback } from 'react';
import { Modal } from 'antd';

import Button from '@components/Button';
import {
  BOX_IMAGE_PATH,
  DRY_ICE_IMAGE_PATH,
  ICE_PACK_IMAGE_PATH,
} from '@constants/url/imageUrls';
import theme from '@styles/theme';
import { useOrderList } from '@hooks/query/order/useOrderList';
import { refrigerantsOptionType } from '@hooks/query/order/types';
import OrderContainer from '@views/Order/common/OrderContainer';
import PackingOptionVerticalCard from '@views/Order/PackingOptionVerticalCard';
import { OrderOptionSectionStyle, VerticalCardSectionStyle } from './style';

interface IOrderOptionSectionProps {
  orderId: number | null;
  setOrderId: Dispatch<SetStateAction<number | null>>;
}

const OrderOptionSection: FC<IOrderOptionSectionProps> = props => {
  const { orderId, setOrderId } = props;

  /**
   * 스캔 버튼을 눌렀을 때 테스트용 주문 번호 설정
   */
  const onClickScan = useCallback(() => {
    setOrderId(1);
  }, [setOrderId]);

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

  const { data, isFetched } = useOrderList(orderId, {
    enabled: orderId !== null && orderId > 0,
  });

  /**
   * 드라이 아이스 팩에 대한 추천 정보를 담고있는 객체
   */
  const dryIce = data?.data?.recommendedPackingOption?.refrigerants.filter(
    (item: refrigerantsOptionType) => item.type === 'DRY_ICE',
  )[0];

  /**
   * 일반적인 아이스 팩에 대한 추천 정보를 담고있는 객체
   */
  const icePack = data?.data?.recommendedPackingOption?.refrigerants.filter(
    (item: refrigerantsOptionType) => item.type === 'ICE_PACK',
  )[0];

  return (
    <OrderOptionSectionStyle>
      <div className="packing-time">Lead Time : 00 00</div>
      <OrderContainer title="권장 패킹 옵션">
        <VerticalCardSectionStyle>
          <PackingOptionVerticalCard
            title="박스"
            isFetched={isFetched}
            size={data?.data?.recommendedPackingOption?.box.size}
            number={data?.data?.recommendedPackingOption?.box.amount}
            imgUrl={BOX_IMAGE_PATH}
          />
          <PackingOptionVerticalCard
            title="아이스 팩"
            isFetched={isFetched}
            size={dryIce?.size}
            number={dryIce?.amount}
            imgUrl={ICE_PACK_IMAGE_PATH}
          />
          <PackingOptionVerticalCard
            title="드라이아이스"
            isFetched={isFetched}
            size={icePack?.size}
            number={icePack?.amount}
            imgUrl={DRY_ICE_IMAGE_PATH}
          />
        </VerticalCardSectionStyle>
      </OrderContainer>
      <div className="result-option-section">
        <div className="scan-btn-section">
          <Button radius={25} onClick={onClickScan} disabled={isFetched}>
            스캔 <div className="scan-sub-title">송장번호 스캔하기</div>
          </Button>
        </div>

        <div className="submit-btn-section">
          <Button
            color={theme.color.pip_red}
            radius={25}
            onClick={onClickLater}
            disabled={!isFetched}
          >
            누락 보고 <div className="error-sub-title">나중에 작업하기</div>
          </Button>
          <Button
            color={theme.color.pip_green}
            radius={25}
            onClick={onClickSubmit}
            disabled={!isFetched}
          >
            정상 완료 <div className="submit-sub-title">다음 작업 진행하기</div>
          </Button>
        </div>
      </div>
    </OrderOptionSectionStyle>
  );
};

export default OrderOptionSection;
