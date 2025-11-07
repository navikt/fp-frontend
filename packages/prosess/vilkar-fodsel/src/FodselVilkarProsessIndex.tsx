import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { FodselVilkarForm } from './components/FodselVilkarForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export const FodselVilkarProsessIndex = () => (
  <RawIntlProvider value={intl}>
    <FodselVilkarForm />
  </RawIntlProvider>
);
