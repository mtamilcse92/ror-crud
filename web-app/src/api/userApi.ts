import createUrlWithParams from '../helper/createUrlWithParams';
import { UserListResponse, UserInfo } from '../types/users';
import axiosInstance from './axiosInstance';

export const getUserList = async (searchText?: string) => {
    const response = await axiosInstance.get<UserListResponse>(
        createUrlWithParams({ url: '/users', params: searchText && { search: searchText } }),
    );
    return response.data;
}

export const deleteUser = async (id: number) => {
    const response = await axiosInstance.delete<UserListResponse>(`/users/${id}`);
    return response.data;
}

export const getUserDetail = async (id: number) => {
    const response = await axiosInstance.get<UserInfo>(`/users/${id}`);
    return response.data;
}

export const updateUser = async (data: UserInfo) => {
    const response = await axiosInstance.put<UserListResponse>(`/users/${data.id}`, data);
    return response.data;
}

export const createUser = async (data: UserInfo) => {
    const response = await axiosInstance.post<UserListResponse>(`/users`, data);
    return { data: response.data, message: '' };
}
