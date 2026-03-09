import { useEffect, useState } from 'react';

import { type ReactRenderer } from '@storybook/react';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { action } from 'storybook/actions';
import type { DecoratorFunction } from 'storybook/internal/types';

export const withQueryClient: DecoratorFunction<ReactRenderer> = Story => {
  const Wrapper = () => {
    const [queryClient] = useState(
      () =>
        new QueryClient({
          defaultOptions: {
            queries: {
              retry: false,
            },
          },
          queryCache: new QueryCache({
            onError: action('Query error'),
          }),
          mutationCache: new MutationCache({
            onError: action('Mutation error'),
          }),
        }),
    );
    useEffect(() => {
      // cleanup on unmount
      return () => {
        queryClient.clear();
        queryClient.removeQueries();
      };
    }, [queryClient]);

    return (
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Story />
      </QueryClientProvider>
    );
  };

  return <Wrapper />;
};
