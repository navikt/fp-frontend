import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import {
  Behandling, FamilieHendelseSamling, InntektArbeidYtelse, KodeverkMedNavn, Personoversikt, Soknad,
} from '@fpsak-frontend/types';
import { StandardFaktaProps } from '@fpsak-frontend/fakta-felles';

import OmsorgOgForeldreansvarInfoPanel from './components/OmsorgOgForeldreansvarInfoPanel';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  behandling: Behandling;
  familiehendelse: FamilieHendelseSamling;
  soknad: Soknad;
  personoversikt: Personoversikt;
  inntektArbeidYtelse: InntektArbeidYtelse;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

const OmsorgOgForeldreansvarFaktaIndex: FunctionComponent<OwnProps & StandardFaktaProps> = ({
  behandling,
  familiehendelse,
  soknad,
  personoversikt,
  inntektArbeidYtelse,
  aksjonspunkter,
  alleMerknaderFraBeslutter,
  submitCallback,
  readOnly,
  alleKodeverk,
  harApneAksjonspunkter,
  submittable,
}) => (
  <RawIntlProvider value={intl}>
    <OmsorgOgForeldreansvarInfoPanel
      intl={intl}
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
      gjeldendeFamiliehendelse={familiehendelse.gjeldende}
      soknad={soknad}
      personoversikt={personoversikt}
      aksjonspunkter={aksjonspunkter}
      innvilgetRelatertTilgrensendeYtelserForAnnenForelder={inntektArbeidYtelse.innvilgetRelatertTilgrensendeYtelserForAnnenForelder}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      submitCallback={submitCallback}
      readOnly={readOnly}
      alleKodeverk={alleKodeverk}
      hasOpenAksjonspunkter={harApneAksjonspunkter}
      submittable={submittable}
    />
  </RawIntlProvider>
);

export default OmsorgOgForeldreansvarFaktaIndex;
