import React from 'react';

import { ReactRenderer } from '@storybook/react';
import { DecoratorFunction } from '@storybook/types';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const withQueryClient: DecoratorFunction<ReactRenderer> = Story => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Story />
    </QueryClientProvider>
  );
};
