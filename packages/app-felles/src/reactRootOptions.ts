import type { RootOptions } from 'react-dom/client';

import { captureException } from '@nais/apm';

const onCaughtError: NonNullable<RootOptions['onCaughtError']> = (error, errorInfo) => {
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console -- Preserve React's local reporting when APM is not initialized.
    console.error(error);
    return;
  }

  captureException(error, {
    context: {
      componentStack: errorInfo.componentStack,
      errorBoundary: errorInfo.errorBoundary?.constructor.name,
    },
  });
};

export const reactRootOptions = { onCaughtError } satisfies RootOptions;
