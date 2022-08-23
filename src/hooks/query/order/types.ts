/**
 * 추천 박스 타입
 */
type boxOptionType = {
  size: string;
  amount: number;
};

/**
 * 추천 냉매재 타입
 */
export type refrigerantsOptionType = {
  type: 'ICE_PACK' | 'DRY_ICE';
  size: string | null;
  amount: number | null;
};

/**
 * 주문 패킹 리스트 응답 데이터 타입
 */
export type orderListResponseDataType = {
  orderInfo: {
    orderId: number;
    customerName: string;
    trackingNumber: string;
    orderDate: string;
  };

  packingInfo: {
    packingId: number;
    isMatched: boolean;
  };

  orderDetails: {
    productId: number;
    productName: string;
    amount: number;
    coldType: string;
  }[];

  recognitionResults: {
    productId: number;
    productName: string;
    amount: number;
    coldType: string;
    isMatched: boolean;
  }[];

  recommendedPackingOption: {
    box: boxOptionType;
    refrigerants: refrigerantsOptionType[];
  };
};
