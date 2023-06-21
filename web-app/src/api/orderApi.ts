import { ProductListResponse, OrderPayload } from '../types/order';
import axiosInstance from './axiosInstance';

export const getProductList = async () => {
    const response = await axiosInstance.get<ProductListResponse>('/products');
    return response.data;
}

export const createOrder = async (payload: OrderPayload) => {
    const response = await axiosInstance.post<ProductListResponse>('/orders', payload);
    return response.data;
}