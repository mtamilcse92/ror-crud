import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ProductListResponse } from '../types/order';
import { getProductList } from '../api/orderApi';

export const productListQueryKey = 'ProductListQuery';

export default function useProductListQuery() {
  return useQuery<ProductListResponse, AxiosError>(
    [productListQueryKey], 
    getProductList,
  );
}
