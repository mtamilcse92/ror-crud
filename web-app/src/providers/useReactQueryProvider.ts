import { useCallback } from 'react';
import { useSnackbar } from 'notistack';

export default function useReactQueryProvider() {
  const { enqueueSnackbar } = useSnackbar();
  const onError = useCallback(
    (error: any) =>
    enqueueSnackbar(error?.message || 'Network Error', { variant: 'error' }),
    [enqueueSnackbar],
  );

  const onSuccess = useCallback(
    (info: any) => {
      if (info?.message) {
        enqueueSnackbar(info?.message || 'Successfully Saved', { variant:'success' });
      }
      return info.data;
    },
    [enqueueSnackbar],
  );

  return { onError, onSuccess };
}
