import {
  useQuery,
  UseQueryResult,
  useQueryClient,
} from '@tanstack/react-query';
import { QueryFunction, QueryKey } from '@tanstack/query-core';
import { UseQueryOptions } from '@tanstack/react-query/src/types';

type UseCustomQueryResult<TData, TError> = {
  invalidate: () => void;
  isFetched: boolean;
} & UseQueryResult<TData, TError>;

export const useCustomQuery = <
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  queryKey: TQueryKey,
  queryFn: QueryFunction<TQueryFnData, TQueryKey>,
  options?: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    'queryKey' | 'queryFn'
  >,
): UseCustomQueryResult<TData, TError> => {
  const queryClient = useQueryClient();
  const results = useQuery(queryKey, queryFn, {
    ...options,
    suspense: true,
  });
  /**
   * 해당 쿼리 무효화
   */
  const invalidate = () => queryClient.invalidateQueries(queryKey);
  /**
   * 해당 쿼리가 이미 실행되었는 지
   */
  const isFetched = !!queryClient.getQueryData(queryKey);
  return { ...results, invalidate, isFetched };
};
