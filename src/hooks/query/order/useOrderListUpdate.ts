import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { ORDER } from '@constants/queryKey/order';
import { OrderApi } from '@services/api/orderApi';
import {
  orderStatusMutateVariableType,
  orderStatusResponseType,
} from '@hooks/query/order/types';
import { UseMutationOptions } from '@tanstack/react-query/src/types';

export const useOrderListUpdate = (
  id: number | null,
  options?: UseMutationOptions<
    orderStatusResponseType,
    AxiosError<orderStatusResponseType>,
    orderStatusMutateVariableType
  >,
) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation<
    orderStatusResponseType,
    AxiosError<orderStatusResponseType>,
    orderStatusMutateVariableType
  >(({ orderId, status }) => OrderApi.updateOrderList(orderId, status), {
    ...options,
    onSuccess: (data, variables) =>
      queryClient.removeQueries([...ORDER.LIST, variables.orderId]),
    onError: error => {
      throw error;
    },
  });

  return { mutate };
};
