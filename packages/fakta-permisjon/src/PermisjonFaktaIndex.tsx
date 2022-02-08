import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId, StandardFaktaPanelProps } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';

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
  behandling,
  submitCallback,
  aksjonspunkter,
  readOnly,
  formData,
  setFormData,
  arbeidOgInntekt,
  arbeidsgiverOpplysningerPerId,
}) => (
  <RawIntlProvider value={intl}>
    <PermisjonFaktaPanel
      saksnummer={saksnummer}
      behandling={behandling}
      aksjonspunkter={aksjonspunkter}
      readOnly={readOnly}
      formData={formData}
      lagreCallback={submitCallback}
      setFormData={setFormData}
      arbeidOgInntekt={arbeidOgInntekt}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />
  </RawIntlProvider>
);

export default PermisjonFaktaIndex;
