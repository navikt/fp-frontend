import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import {
  StandardFaktaPanelProps, KontrollerFaktaPeriode, Ytelsefordeling, ArbeidsgiverOpplysningerPerId, FaktaArbeidsforhold,
} from '@fpsak-frontend/types';
import { createIntl } from '@navikt/ft-utils';

import UttakFaktaForm from './components/UttakFaktaForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  ytelsefordeling: Ytelsefordeling;
  uttakKontrollerFaktaPerioder: KontrollerFaktaPeriode[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  faktaArbeidsforhold: FaktaArbeidsforhold[];
  kanOverstyre: boolean;
}

const UttakFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  aksjonspunkter,
  submitCallback,
  ytelsefordeling,
  uttakKontrollerFaktaPerioder,
  arbeidsgiverOpplysningerPerId,
  faktaArbeidsforhold,
  alleKodeverk,
  readOnly,
  kanOverstyre,
  submittable,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <UttakFaktaForm
      ytelsefordeling={ytelsefordeling}
      uttakKontrollerFaktaPerioder={uttakKontrollerFaktaPerioder}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      faktaArbeidsforhold={faktaArbeidsforhold}
      alleKodeverk={alleKodeverk}
      aksjonspunkter={aksjonspunkter}
      submittable={submittable}
      formData={formData}
      setFormData={setFormData}
      readOnly={readOnly}
      submitCallback={submitCallback}
      kanOverstyre={kanOverstyre}
    />
  </RawIntlProvider>
);

export default UttakFaktaIndex;
