import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId, StandardFaktaPanelProps } from '@navikt/fp-types';

import PermisjonFaktaPanel from './components/PermisjonFaktaPanel';

import messages from '../i18n/nb_NO.json';

interface Props {
  saksnummer: string;
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const intl = createIntl(messages);

export const PermisjonFaktaIndex = ({
  saksnummer,
  submitCallback,
  aksjonspunkter,
  readOnly,
  formData,
  setFormData,
  arbeidOgInntekt,
  arbeidsgiverOpplysningerPerId,
  alleKodeverk,
}: Props & StandardFaktaPanelProps) => (
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
