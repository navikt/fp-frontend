import { type ReactRenderer } from '@storybook/react';
import type { DecoratorFunction } from 'storybook/internal/types';

import { ReadOnlyProvider } from '@navikt/fp-utils';

export type ReadOnlyArgs = {
  readOnly?: boolean;
};

export const withReadOnly: DecoratorFunction<ReactRenderer> = (Story, context) => {
  const { readOnly } = context.args as ReadOnlyArgs;

  return (
    <ReadOnlyProvider readOnly={readOnly ?? false}>
      <Story />
    </ReadOnlyProvider>
  );
};
