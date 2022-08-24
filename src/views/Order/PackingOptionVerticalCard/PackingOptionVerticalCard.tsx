import React, { FC } from 'react';

import {
  CardContentStyle,
  CardTitleStyle,
  CardImageWrapStyle,
  PackingOptionVerticalCardStyle,
} from './style';

interface IPackingOptionVerticalCardProps {
  title: string;
  isFetched: boolean;
  size?: string | null;
  number?: number | null;
  imgUrl: string;
}

const PackingOptionVerticalCard: FC<
  IPackingOptionVerticalCardProps
> = props => {
  const { title, isFetched, size, number, imgUrl } = props;

  return (
    <PackingOptionVerticalCardStyle>
      <CardTitleStyle>{title}</CardTitleStyle>
      <CardImageWrapStyle>
        <img src={imgUrl} alt={title} width={50} height={50} />
      </CardImageWrapStyle>
      <CardContentStyle>
        {((!!size || title === '드라이아이스') && !!number) || isFetched ? (
          <>
            <div className="size-option">
              <div className="size-title">권장 사이즈</div>
              <div className="value">{size || '-'}</div>
            </div>
            <div className="number-option">
              <div className="number-title">권장 사용 개수</div>
              <div className="value">{!!number ? `${number}개` : '-'}</div>
            </div>
          </>
        ) : (
          <div className="size-description">
            {`${title}의 권장 사이즈와 개수가\n여기에 표시됩니다`}
          </div>
        )}
      </CardContentStyle>
    </PackingOptionVerticalCardStyle>
  );
};

export default PackingOptionVerticalCard;
