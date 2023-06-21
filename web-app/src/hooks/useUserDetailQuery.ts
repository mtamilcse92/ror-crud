import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { UserInfo } from '../types/users';
import { getUserDetail } from '../api/userApi';

export const userQueryKey = 'UserQuery';

export default function useUserDetailQuery(id: number) {
  return useQuery<UserInfo, AxiosError>(
    userQueryKey,
    () => getUserDetail(id),
  );
}
