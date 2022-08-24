import React, { Dispatch, SetStateAction, FC, useCallback } from 'react';

import Button from '@components/Button';
import {
  BOX_IMAGE_PATH,
  DRY_ICE_IMAGE_PATH,
  ICE_PACK_IMAGE_PATH,
} from '@constants/url/imageUrls';
import { REFRIGERANT_TYPE } from '@constants/order/order';
import theme from '@styles/theme';
import { useOrderList } from '@hooks/query/order/useOrderList';
import { refrigerantsOptionType } from '@hooks/query/order/types';
import OrderContainer from '@views/Order/common/OrderContainer';
import PackingOptionVerticalCard from '@views/Order/PackingOptionVerticalCard';
import { OrderOptionSectionStyle, VerticalCardSectionStyle } from './style';

interface IOrderOptionSectionProps {
  orderId: number | null;
  setOrderId: Dispatch<SetStateAction<number | null>>;
  onPackingDone: () => void;
  onPackingHold: () => void;
}

const OrderOptionSection: FC<IOrderOptionSectionProps> = props => {
  const { orderId, setOrderId, onPackingDone, onPackingHold } = props;

  /**
   * 스캔 버튼을 눌렀을 때 테스트용 주문 번호 설정
   */
  const onClickScan = useCallback(() => {
    setOrderId(1);
  }, [setOrderId]);

  const { data: orderListData, isFetched: isOrderListFetched } = useOrderList(
    orderId,
    {
      enabled: orderId !== null && orderId > 0,
    },
  );

  /**
   * 드라이 아이스 팩에 대한 추천 정보를 담고있는 객체
   */
  const dryIce =
    orderListData?.data?.recommendedPackingOption?.refrigerants.filter(
      (item: refrigerantsOptionType) => item.type === REFRIGERANT_TYPE.DRY_ICE,
    )[0];

  /**
   * 일반적인 아이스 팩에 대한 추천 정보를 담고있는 객체
   */
  const icePack =
    orderListData?.data?.recommendedPackingOption?.refrigerants.filter(
      (item: refrigerantsOptionType) => item.type === REFRIGERANT_TYPE.ICE_PACK,
    )[0];

  return (
    <OrderOptionSectionStyle>
      <OrderContainer title="권장 포장 옵션">
        <VerticalCardSectionStyle>
          <PackingOptionVerticalCard
            title="박스"
            isFetched={isOrderListFetched}
            size={orderListData?.data?.recommendedPackingOption?.box.size}
            number={orderListData?.data?.recommendedPackingOption?.box.amount}
            imgUrl={BOX_IMAGE_PATH}
          />
          <PackingOptionVerticalCard
            title="아이스 팩"
            isFetched={isOrderListFetched}
            size={dryIce?.size}
            number={dryIce?.amount}
            imgUrl={ICE_PACK_IMAGE_PATH}
          />
          <PackingOptionVerticalCard
            title="드라이아이스"
            isFetched={isOrderListFetched}
            size={icePack?.size}
            number={icePack?.amount}
            imgUrl={DRY_ICE_IMAGE_PATH}
          />
        </VerticalCardSectionStyle>
      </OrderContainer>
      <div className="result-option-section">
        <div className="scan-btn-section">
          <Button
            radius={25}
            onClick={onClickScan}
            disabled={isOrderListFetched}
          >
            스캔 <div className="scan-sub-title">송장번호 스캔하기</div>
          </Button>
        </div>

        <div className="submit-btn-section">
          <Button
            color={theme.color.pip_red}
            radius={25}
            onClick={onPackingHold}
            disabled={!isOrderListFetched}
          >
            누락 보고 <div className="error-sub-title">나중에 작업하기</div>
          </Button>
          <Button
            color={theme.color.pip_green_01}
            radius={25}
            onClick={onPackingDone}
            disabled={!isOrderListFetched}
          >
            정상 완료 <div className="submit-sub-title">다음 작업 진행하기</div>
          </Button>
        </div>
      </div>
    </OrderOptionSectionStyle>
  );
};

export default OrderOptionSection;
