import { createIntl as createReactIntl, createIntlCache, IntlShape } from 'react-intl';

const cache = createIntlCache();

const createIntl = (messages: Record<string, string>): IntlShape => (
  createReactIntl({
    locale: 'nb-NO',
    messages,
  }, cache)
);

export default createIntl;
