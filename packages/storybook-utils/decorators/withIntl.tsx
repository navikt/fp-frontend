import React from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

const getIntlDecorator = (messages: Record<string, string>) => {
  const intl = createIntl(
    {
      locale: 'nb-NO',
      messages,
    },
    createIntlCache(),
  );

  const withIntlProvider = (story: any) => <RawIntlProvider value={intl}>{story()}</RawIntlProvider>;
  return withIntlProvider;
};

export default getIntlDecorator;
