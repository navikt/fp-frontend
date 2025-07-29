import { useEffect } from 'react';

import { type ReactRenderer } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { DecoratorFunction } from 'storybook/internal/types';

export const withQueryClient: DecoratorFunction<ReactRenderer> = Story => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  useEffect(() => {
    return () => {
      queryClient.clear();
      queryClient.removeQueries();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Story />
    </QueryClientProvider>
  );
};
