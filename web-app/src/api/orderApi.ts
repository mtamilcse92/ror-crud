import createUrlWithParams from '../helper/createUrlWithParams';
import { ProductListResponse, OrderPayload, OrderListResponse } from '../types/order';
import axiosInstance from './axiosInstance';

export const getProductList = async () => {
    const response = await axiosInstance.get<ProductListResponse>('/products');
    return response.data;
}

export const getOrderList = async (id?: string) => {
    const response = await axiosInstance.get<OrderListResponse>(
        createUrlWithParams({ url: '/orders', params: id && { id } })
        );
    return response.data;
}

export const createOrder = async (payload: OrderPayload) => {
    const response = await axiosInstance.post<ProductListResponse>('/orders', payload);
    return response.data;
}