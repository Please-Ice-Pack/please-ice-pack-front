/**
 * 박스 종류
 */
export const BOX_TYPE = {
  /**
   * 일반 상자
   */
  NORMAL: 'NORMAL',
  /**
   * 종이 파우치
   */
  POUCH: 'POUCH',
  /**
   * 퍼플 박스
   */
  PURPLE: 'PURPLE',
};

/**
 * 냉매재 종류
 */
export const REFRIGERANT_TYPE = {
  /**
   * 아이스 팩
   */
  ICE_PACK: 'ICE_PACK',
  /**
   * 드라이 아이스
   */
  DRY_ICE: 'DRY_ICE',
};

// 상품 보관 종류
export const COLD_TYPE = {
  /**
   * 상온 보관
   */
  NORMAL: 'NORMAL',
  /**
   * 냉장 보관
   */
  REFRIGERATED: 'REFRIGERATED',
  /**
   * 냉동 보관
   */
  FROZEN: 'FROZEN',
};

/**
 * 주문 포장 상태
 */
export const ORDER_PACKING_STATUS = {
  /**
   * 포장 진행 전
   */
  PRE_PROGRESS: 'PRE_PROGRESS',
  /**
   * 포장 진행 중
   */
  IN_PROGRESS: 'IN_PROGRESS',
  /**
   * 포장 완료
   */
  DONE: 'DONE',
  /**
   * 포장 보류
   */
  HOLD: 'HOLD',
};
