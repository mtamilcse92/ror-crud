import { useMutation, useQueryClient } from 'react-query';
import { userQueryKey } from './useUserDetailQuery';
import { createUser } from '../api/userApi';
import { useNavigate } from 'react-router-dom';

export default function useUserCreateMutation() {
  const navigation = useNavigate()
  const queryClient = useQueryClient();
  
  return useMutation(createUser, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(userQueryKey);
      navigation('/');
    },
  });
}
