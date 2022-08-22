import axios from 'axios';
import { toast } from 'react-toastify';

import { getAuth } from '@lib/utils/auth';

export const superFetch = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

const customHeader = () => ({
  'content-Type': 'application/json',
  accept: 'application/json',
  authorization: getAuth().token ? `Bearer ${getAuth().token}` : '',
});

superFetch.interceptors.request.use(config => {
  config.headers = customHeader();

  return config;
});

type StringKeys = 'url' | 'successMessage' | 'errorMessage';
type FetcherArgs = {
  [key in StringKeys]: string;
};
type postFetchArgs<T> = {
  data: T;
} & FetcherArgs;

export const getFetcher = ({
  url,
  successMessage,
  errorMessage,
}: FetcherArgs) =>
  toast.promise(
    async () => {
      const response = await superFetch.get(url);
      return response.data;
    },
    {
      pending: '로딩중...',
      success: successMessage,
      error: {
        render({ data }: any) {
          return data?.response?.data.message || errorMessage;
        },
      },
    },
  );

export const postFetcher = <T>({
  url,
  successMessage,
  errorMessage,
  data,
}: postFetchArgs<T>) =>
  toast.promise(
    async () => {
      const response = await superFetch.post(url, data);
      console.log('res: ', response);
      return response.data;
    },
    {
      pending: '로딩중...',
      success: successMessage,
      error: {
        render({ data }: any) {
          return data?.response?.data.message || errorMessage;
        },
      },
    },
  );
