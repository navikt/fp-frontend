import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { Vilkar } from '@navikt/fp-types';

import { AdopsjonVilkarForm } from './components/AdopsjonVilkarForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

type Props = {
  status: string;
  readOnlySubmitButton: boolean;
  vilkar: Vilkar[];
};

export const AdopsjonVilkarProsessIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <AdopsjonVilkarForm {...props} />
  </RawIntlProvider>
);
