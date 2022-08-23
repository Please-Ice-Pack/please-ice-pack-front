import { getFetcher } from '@services/superFetch';

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
};
