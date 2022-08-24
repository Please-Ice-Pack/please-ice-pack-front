import { getFetcher, patchFetcher } from '@services/superFetch';
import { orderPackingStatusType } from '@hooks/query/order/types';

export const OrderApi = {
  /**
   * 패킹 데이터 리스트 조회
   * @param id
   */
  getOrderList: (id: number | null) =>
    getFetcher({
      url: `v1/packings/orders/${id}`,
      errorMessage: '패킹 데이터 조회 실패',
      successMessage: '패킹 데이터 조회 성공',
    }),

  /**
   * 패킹 데이터 업데이트
   * @param id
   * @param status
   */
  updateOrderList: (id: number | null, status: orderPackingStatusType | null) =>
    patchFetcher({
      url: `v1/packings/status/${id}`,
      errorMessage: '패킹 상태 업데이트 실패',
      successMessage: '패킹 상태 업데이트 성공',
      data: {
        status,
      },
    }),
};
