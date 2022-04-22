import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import {
  ArbeidsgiverOpplysningerPerId, StandardFaktaPanelProps, InntektArbeidYtelse,
} from '@fpsak-frontend/types';
import { createIntl } from '@navikt/ft-utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import ArbeidsforholdInfoPanel from './components/ArbeidsforholdInfoPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  inntektArbeidYtelse: InntektArbeidYtelse;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const ArbeidsforholdFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  inntektArbeidYtelse,
  alleKodeverk,
  alleMerknaderFraBeslutter,
  aksjonspunkter,
  harApneAksjonspunkter,
  submitCallback,
  readOnly,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="ArbeidsforholdFaktaIndex" formData={formData} setFormData={setFormData}>
      { /* @ts-ignore Fiks cannot be used as a JSX component */ }
      <ArbeidsforholdInfoPanel
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
    </ReduxWrapper>
  </RawIntlProvider>
);

export default ArbeidsforholdFaktaIndex;
