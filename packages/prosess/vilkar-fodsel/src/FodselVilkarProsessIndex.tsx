import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { Vilkar } from '@navikt/fp-types';

import { FodselVilkarForm } from './components/FodselVilkarForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  status: string;
  vilkårForPanel: Vilkar[];
}

export const FodselVilkarProsessIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <FodselVilkarForm {...props} />
  </RawIntlProvider>
);
