import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { Ytelsefordeling } from '@navikt/fp-types';

import { SakenFaktaPanel } from './components/SakenFaktaPanel';

import messages from '../i18n/nb_NO.json';

interface Props {
  ytelsefordeling?: Ytelsefordeling;
  utlandDokStatus?: {
    dokStatus?: string;
  };
  kanOverstyreAccess: boolean;
}

const intl = createIntl(messages);

export const SakenFaktaIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <SakenFaktaPanel {...props} />
  </RawIntlProvider>
);
