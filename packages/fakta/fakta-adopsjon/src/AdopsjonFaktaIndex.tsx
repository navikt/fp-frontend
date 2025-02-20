import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { FamilieHendelseSamling, Soknad } from '@navikt/fp-types';

import { AdopsjonInfoPanel } from './components/AdopsjonInfoPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  soknad: Soknad;
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
