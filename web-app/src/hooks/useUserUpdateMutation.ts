import { useMutation, useQueryClient } from 'react-query';
import { userQueryKey } from './useUserDetailQuery';
import { updateUser } from '../api/userApi';
import { useNavigate } from 'react-router-dom';

export default function useUserUpdateMutation() {
  const navigation = useNavigate()

  const queryClient = useQueryClient();
  return useMutation(updateUser, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(userQueryKey);
      navigation('/');
    },
  });
}
