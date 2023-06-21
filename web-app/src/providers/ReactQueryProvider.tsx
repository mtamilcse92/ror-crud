import React, { useRef } from 'react';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import useReactQueryProvider from './useReactQueryProvider';

import { DefaultOptions } from 'react-query';

export const QUERY_KEYS = {
  USER_THEME: 'userTheme',
};

export const defaultReactQueryOptions: DefaultOptions = {
  queries: {
    suspense: true,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    cacheTime: 0,
  },
};

type ReactQueryProviderProps = {
  children: React.ReactNode;
};

const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => {
  const { onError, onSuccess } = useReactQueryProvider();

  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: defaultReactQueryOptions,
      queryCache: new QueryCache({
        onError,
      }),
      mutationCache: new MutationCache({
        onSuccess,
        onError,
      }),
    });
  }

  return <QueryClientProvider client={queryClientRef.current}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
