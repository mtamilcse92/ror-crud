import { useMutation, useQueryClient } from 'react-query';
import { userListQueryKey } from './useUserListQuery';
import { deleteUser } from '../api/userApi';

export default function useUserDeleteMutation() {
  const queryClient = useQueryClient();
  return useMutation(deleteUser, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(userListQueryKey);
    },
  });
}
