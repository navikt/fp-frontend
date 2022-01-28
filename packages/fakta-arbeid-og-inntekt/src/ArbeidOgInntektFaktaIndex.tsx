import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import {
  ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId, ManglendeInntektsmeldingVurdering, ManueltArbeidsforhold, StandardFaktaPanelProps,
} from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';

import ArbeidOgInntektFaktaPanel from './components/ArbeidOgInntektFaktaPanel';
import messages from '../i18n/nb_NO.json';

interface OwnProps {
  saksnummer: string;
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  registrerArbeidsforhold: (params: ManueltArbeidsforhold) => Promise<void>;
  lagreVurdering: (params: ManglendeInntektsmeldingVurdering) => Promise<void>;
  erOverstyrer: boolean;
  settBehandlingPåVentCallback: (params: {
    frist: string;
    ventearsak: string;
  }) => Promise<any>
  åpneForNyVurdering: () => void;
}

const intl = createIntl(messages);

const ArbeidOgInntektFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  saksnummer,
  behandling,
  submitCallback,
  aksjonspunkter,
  readOnly,
  formData,
  setFormData,
  arbeidOgInntekt,
  arbeidsgiverOpplysningerPerId,
  registrerArbeidsforhold,
  lagreVurdering,
  erOverstyrer,
  settBehandlingPåVentCallback,
  alleKodeverk,
  åpneForNyVurdering,
}) => (
  <RawIntlProvider value={intl}>
    <ArbeidOgInntektFaktaPanel
      saksnummer={saksnummer}
      behandling={behandling}
      aksjonspunkter={aksjonspunkter}
      readOnly={readOnly}
      formData={formData}
      lagreCallback={submitCallback}
      setFormData={setFormData}
      arbeidOgInntekt={arbeidOgInntekt}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      registrerArbeidsforhold={registrerArbeidsforhold}
      lagreVurdering={lagreVurdering}
      erOverstyrer={erOverstyrer}
      settBehandlingPåVentCallback={settBehandlingPåVentCallback}
      alleKodeverk={alleKodeverk}
      åpneForNyVurdering={åpneForNyVurdering}
    />
  </RawIntlProvider>
);

export default ArbeidOgInntektFaktaIndex;
