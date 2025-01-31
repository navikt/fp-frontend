import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { FamilieHendelseSamling, InntektArbeidYtelse, Personoversikt, Soknad } from '@navikt/fp-types';

import { OmsorgOgForeldreansvarInfoPanel } from './components/OmsorgOgForeldreansvarInfoPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  familiehendelse: FamilieHendelseSamling;
  soknad: Soknad;
  personoversikt: Personoversikt;
  inntektArbeidYtelse: InntektArbeidYtelse;
  submittable: boolean;
}

export const OmsorgOgForeldreansvarFaktaIndex = ({
  familiehendelse,
  soknad,
  personoversikt,
  inntektArbeidYtelse,
  submittable,
}: Props) => (
  <RawIntlProvider value={intl}>
    <OmsorgOgForeldreansvarInfoPanel
      gjeldendeFamiliehendelse={familiehendelse.gjeldende}
      soknad={soknad}
      personoversikt={personoversikt}
      innvilgetRelatertTilgrensendeYtelserForAnnenForelder={
        inntektArbeidYtelse.innvilgetRelatertTilgrensendeYtelserForAnnenForelder
      }
      submittable={submittable}
    />
  </RawIntlProvider>
);
