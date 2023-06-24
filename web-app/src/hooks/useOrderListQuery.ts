import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { OrderListResponse } from '../types/order';
import { getOrderList } from '../api/orderApi';

export const productListQueryKey = 'orderListQuery';

export default function useOrderListQuery(id?: string) {
  return useQuery<OrderListResponse, AxiosError>(
    [productListQueryKey, id], 
    () => getOrderList(id),
  );
}
