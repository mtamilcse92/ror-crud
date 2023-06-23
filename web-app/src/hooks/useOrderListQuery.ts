import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { OrderListResponse } from '../types/order';
import { getOrderList } from '../api/orderApi';

export const productListQueryKey = 'orderListQuery';

export default function useOrderListQuery() {
  return useQuery<OrderListResponse, AxiosError>(
    [productListQueryKey], 
    getOrderList,
  );
}
