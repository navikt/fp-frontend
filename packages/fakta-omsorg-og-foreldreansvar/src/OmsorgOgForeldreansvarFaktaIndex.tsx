import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import {
  FamilieHendelseSamling,
  InntektArbeidYtelse,
  Personoversikt,
  Soknad,
  StandardFaktaPanelProps,
} from '@navikt/fp-types';

import { OmsorgOgForeldreansvarInfoPanel } from './components/OmsorgOgForeldreansvarInfoPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  familiehendelse: FamilieHendelseSamling;
  soknad: Soknad;
  personoversikt: Personoversikt;
  inntektArbeidYtelse: InntektArbeidYtelse;
}

const OmsorgOgForeldreansvarFaktaIndex = ({
  familiehendelse,
  soknad,
  personoversikt,
  inntektArbeidYtelse,
  ...rest
}: Props & StandardFaktaPanelProps) => (
  <RawIntlProvider value={intl}>
    <OmsorgOgForeldreansvarInfoPanel
      gjeldendeFamiliehendelse={familiehendelse.gjeldende}
      soknad={soknad}
      personoversikt={personoversikt}
      innvilgetRelatertTilgrensendeYtelserForAnnenForelder={
        inntektArbeidYtelse.innvilgetRelatertTilgrensendeYtelserForAnnenForelder
      }
      {...rest}
    />
  </RawIntlProvider>
);

export default OmsorgOgForeldreansvarFaktaIndex;
