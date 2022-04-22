import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId, StandardFaktaPanelProps } from '@fpsak-frontend/types';
import { createIntl } from '@navikt/ft-utils';

import PermisjonFaktaPanel from './components/PermisjonFaktaPanel';
import messages from '../i18n/nb_NO.json';

interface OwnProps {
  saksnummer: string;
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const intl = createIntl(messages);

const PermisjonFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  saksnummer,
  submitCallback,
  aksjonspunkter,
  readOnly,
  formData,
  setFormData,
  arbeidOgInntekt,
  arbeidsgiverOpplysningerPerId,
  alleKodeverk,
}) => (
  <RawIntlProvider value={intl}>
    <PermisjonFaktaPanel
      saksnummer={saksnummer}
      aksjonspunkter={aksjonspunkter}
      readOnly={readOnly}
      formData={formData}
      lagreCallback={submitCallback}
      setFormData={setFormData}
      arbeidOgInntekt={arbeidOgInntekt}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      alleKodeverk={alleKodeverk}
    />
  </RawIntlProvider>
);

export default PermisjonFaktaIndex;
