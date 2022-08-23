import { ORDER } from '@constants/queryKey/order';
import { OrderApi } from '@services/api/orderApi';
import { useCustomQuery } from '@hooks/query/useCustomQuery';

export const useOrderList = (id: number | null, options?: any) => {
  const { data, isFetched } = useCustomQuery(
    [...ORDER.LIST, id],
    () => OrderApi.getOrderList(id),
    options,
  );

  return { data, isFetched };
};
