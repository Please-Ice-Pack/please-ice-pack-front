import { AxiosError } from 'axios';
import { UseQueryOptions } from '@tanstack/react-query/src/types';

import { useCustomQuery } from '@hooks/query/useCustomQuery';
import { orderListResponseType } from '@hooks/query/order/types';
import { OrderApi } from '@services/api/orderApi';
import { ORDER } from '@constants/queryKey/order';

export const useOrderList = (
  id: number | null,
  options?: Omit<
    UseQueryOptions<orderListResponseType, AxiosError<orderListResponseType>>,
    'queryKey' | 'queryFn'
  >,
) => {
  const { data, isFetched } = useCustomQuery<
    orderListResponseType,
    AxiosError<orderListResponseType>
  >([...ORDER.LIST, id], () => OrderApi.getOrderList(id), options);

  return { data, isFetched };
};
