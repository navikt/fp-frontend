import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { FamilieHendelseSamling, tjenester_behandling_søknad_SoknadAdopsjonDto } from '@navikt/fp-types';

import { AdopsjonInfoPanel } from './components/AdopsjonInfoPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  soknad: tjenester_behandling_søknad_SoknadAdopsjonDto;
  familiehendelse: FamilieHendelseSamling;
  isForeldrepengerFagsak: boolean;
  submittable: boolean;
}

export const AdopsjonFaktaIndex = ({ soknad, familiehendelse, isForeldrepengerFagsak, submittable }: Props) => (
  <RawIntlProvider value={intl}>
    <AdopsjonInfoPanel
      soknad={soknad}
      gjeldendeFamiliehendelse={familiehendelse.gjeldende}
      isForeldrepengerFagsak={isForeldrepengerFagsak}
      submittable={submittable}
    />
  </RawIntlProvider>
);
