import { BOX_TYPE, COLD_TYPE, REFRIGERANT_TYPE } from '@constants/order/order';

/**
 * 추천 박스 사이즈 타입
 */
export type boxType = typeof BOX_TYPE[keyof typeof BOX_TYPE];

/**
 * 냉매재 종류 타입
 */
export type refrigerantType =
  typeof REFRIGERANT_TYPE[keyof typeof REFRIGERANT_TYPE];

/**
 * 냉장 보관 종류 타입
 */
export type coldType = typeof COLD_TYPE[keyof typeof COLD_TYPE];

/**
 * 추천 박스 옵션 타입
 */
type boxOptionType = {
  size: string;
  amount: number;
  type: boxType;
};

/**
 * 추천 냉매재 타입
 */
export type refrigerantsOptionType = {
  type: refrigerantType;
  size: string | null;
  amount: number | null;
};

/**
 * 주문 번호와 해당 주문과 Ai 검출 결과가 일치하는지 여부
 */
export type packingInfoType = {
  packingId: number;
  isMatched: boolean | string;
};

/**
 * 주문 상세 정보 타입
 */
export type orderDetailType = {
  productId: number;
  productName: string;
  amount: number;
  coldType: string;
  isMatched: boolean;
};

/**
 * 주문 패킹 리스트 응답 데이터 타입
 */
export type orderListResponseDataType = {
  /**
   * 스캔된 주문 기본 정보
   */
  orderInfo: {
    orderId: number;
    customerName: string;
    trackingNumber: string;
    orderDate: string;
  };

  /**
   * 포장 완료 목록
   */
  packingInfo: packingInfoType;

  /**
   * 주문 상세 정보
   */
  orderDetails: orderDetailType[];

  /**
   * Ai가 검수한 주문 정보 결과
   */
  recognitionResults: Omit<orderDetailType, 'isMatched'>[];

  /**
   * 권장 포장 옵션
   */
  recommendedPackingOption: {
    box: boxOptionType;
    refrigerants: refrigerantsOptionType[];
  };
};
