import { createIntl, createIntlCache } from 'react-intl';

import messages from './nb_NO.json';

const getPackageIntl = () => {
  const cache = createIntlCache();

  return createIntl({
    locale: 'nb-NO',
    messages,
  }, cache);
};

export default getPackageIntl;
