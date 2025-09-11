import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { AdopsjonFamilieHendelse, InntektArbeidYtelse, Personoversikt, Soknad } from '@navikt/fp-types';

import { OmsorgOgForeldreansvarInfoPanel } from './components/OmsorgOgForeldreansvarInfoPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  adopsjon: AdopsjonFamilieHendelse;
  soknad: Soknad;
  personoversikt: Personoversikt;
  inntektArbeidYtelse: InntektArbeidYtelse;
}

export const OmsorgOgForeldreansvarFaktaIndex = ({ adopsjon, soknad, personoversikt, inntektArbeidYtelse }: Props) => (
  <RawIntlProvider value={intl}>
    <OmsorgOgForeldreansvarInfoPanel
      adopsjon={adopsjon}
      soknad={soknad}
      personoversikt={personoversikt}
      innvilgetRelatertTilgrensendeYtelserForAnnenForelder={
        inntektArbeidYtelse.innvilgetRelatertTilgrensendeYtelserForAnnenForelder
      }
    />
  </RawIntlProvider>
);
