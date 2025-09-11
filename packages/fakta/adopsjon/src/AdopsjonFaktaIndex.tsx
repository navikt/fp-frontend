import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { AdopsjonFamilieHendelse, tjenester_behandling_søknad_SoknadAdopsjonDto } from '@navikt/fp-types';

import { AdopsjonInfoPanel } from './components/AdopsjonInfoPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  soknad: tjenester_behandling_søknad_SoknadAdopsjonDto;
  adopsjon: AdopsjonFamilieHendelse;
  isForeldrepengerFagsak: boolean;
}

export const AdopsjonFaktaIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <AdopsjonInfoPanel {...props} />
  </RawIntlProvider>
);
