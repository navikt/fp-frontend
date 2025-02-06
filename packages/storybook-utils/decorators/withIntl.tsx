import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import type { ReactRenderer } from '@storybook/react';
import type { DecoratorFunction } from '@storybook/types';

export const getIntlDecorator = (messages: Record<string, string>) => {
  const intl = createIntl(
    {
      locale: 'nb-NO',
      messages,
    },
    createIntlCache(),
  );

  const withIntlProvider: DecoratorFunction<ReactRenderer> = story => (
    <RawIntlProvider value={intl}>{story()}</RawIntlProvider>
  );
  return withIntlProvider;
};
