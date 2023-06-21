import { useMutation, useQueryClient } from 'react-query';
import { userQueryKey } from './useUserDetailQuery';
import { createOrder } from '../api/orderApi';
import { useNavigate } from 'react-router-dom';

export default function useOrderCreateMutation() {
  const navigation = useNavigate()
  const queryClient = useQueryClient();
  
  return useMutation(createOrder, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(userQueryKey);
      navigation('/');
    },
  });
}
