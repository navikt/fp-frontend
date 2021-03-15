import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import {
  ArbeidsgiverOpplysningerPerId, StandardFaktaPanelProps, InntektArbeidYtelse,
} from '@fpsak-frontend/types';

import ArbeidsforholdInfoPanel from './components/ArbeidsforholdInfoPanel';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  inntektArbeidYtelse: InntektArbeidYtelse;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const ArbeidsforholdFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  behandling,
  inntektArbeidYtelse,
  alleKodeverk,
  alleMerknaderFraBeslutter,
  aksjonspunkter,
  harApneAksjonspunkter,
  submitCallback,
  readOnly,
  arbeidsgiverOpplysningerPerId,
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
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />
  </RawIntlProvider>
);

export default ArbeidsforholdFaktaIndex;
