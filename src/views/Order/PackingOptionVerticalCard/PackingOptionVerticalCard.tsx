import React, { FC } from 'react';

import {
  CardContentStyle,
  CardTitleStyle,
  CardImageWrapStyle,
  PackingOptionVerticalCardStyle,
} from './style';

interface IPackingOptionVerticalCardProps {
  title: string;
  size: number;
  number: number;
  imgUrl: string;
}

const PackingOptionVerticalCard: FC<
  IPackingOptionVerticalCardProps
> = props => {
  const { title, size, number, imgUrl } = props;

  return (
    <PackingOptionVerticalCardStyle>
      <CardTitleStyle>{title}</CardTitleStyle>
      <CardImageWrapStyle>
        <img src={imgUrl} alt={title} width={50} height={50} />
      </CardImageWrapStyle>
      <CardContentStyle>
        <div className="size-option">
          <div className="size-title">권장 사이즈</div>
          <div>{size}호</div>
        </div>
        <div className="number-option">
          <div className="number-title">권장 사용 개수</div>
          <div>{number}개</div>
        </div>
      </CardContentStyle>
    </PackingOptionVerticalCardStyle>
  );
};

export default PackingOptionVerticalCard;
