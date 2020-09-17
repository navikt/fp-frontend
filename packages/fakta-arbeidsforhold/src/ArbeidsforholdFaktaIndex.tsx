import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import {
  Aksjonspunkt, Behandling, InntektArbeidYtelse, KodeverkMedNavn,
} from '@fpsak-frontend/types';

import ArbeidsforholdInfoPanel from './components/ArbeidsforholdInfoPanel';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  behandling: Behandling;
  inntektArbeidYtelse: InntektArbeidYtelse;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (...args: any[]) => any;
  readOnly: boolean;
  harApneAksjonspunkter: boolean;
}

const ArbeidsforholdFaktaIndex: FunctionComponent<OwnProps> = ({
  behandling,
  inntektArbeidYtelse,
  alleKodeverk,
  alleMerknaderFraBeslutter,
  aksjonspunkter,
  harApneAksjonspunkter,
  submitCallback,
  readOnly,
}) => (
  <RawIntlProvider value={intl}>
    <ArbeidsforholdInfoPanel
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
      arbeidsforhold={inntektArbeidYtelse.arbeidsforhold}
      skalKunneLeggeTilNyeArbeidsforhold={inntektArbeidYtelse.skalKunneLeggeTilNyeArbeidsforhold}
      alleKodeverk={alleKodeverk}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      aksjonspunkter={aksjonspunkter}
      hasOpenAksjonspunkter={harApneAksjonspunkter}
      submitCallback={submitCallback}
      readOnly={readOnly}
    />
  </RawIntlProvider>
);

export default ArbeidsforholdFaktaIndex;
