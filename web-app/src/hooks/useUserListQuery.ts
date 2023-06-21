import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { UserListResponse } from '../types/users';
import { getUserList } from '../api/userApi';

export const userListQueryKey = 'UserListQuery';

export default function useUserListQuery(searchText?: string) {
  return useQuery<UserListResponse, AxiosError>(
    [userListQueryKey, searchText],
    () => getUserList(searchText),
    {
      suspense: false
    }
  );
}
