import { createIntl, createIntlCache } from 'react-intl';

// Create the IntlProvider to retrieve context for wrapping around.
const cache = createIntlCache();

export const getIntlObject = (moduleMessages: Record<string, string>) => {
  const selectedMessages = moduleMessages;

  return createIntl(
    {
      locale: 'nb-NO',
      defaultLocale: 'nb-NO',
      messages: selectedMessages,
    },
    cache,
  );
};

export const getIntlMock = (customMessages: Record<string, string>) => getIntlObject(customMessages);
