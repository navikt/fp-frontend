import React from 'react';

import { StoryFn } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const withQueryClient = (Story: StoryFn) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  );
};
