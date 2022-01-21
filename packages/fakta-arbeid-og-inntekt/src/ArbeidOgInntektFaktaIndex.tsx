import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import {
  ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId, ManglendeInntektsmeldingVurdering, ManueltArbeidsforhold, StandardFaktaPanelProps,
} from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';

import ArbeidOgInntektFaktaPanel from './components/ArbeidOgInntektFaktaPanel';
import messages from '../i18n/nb_NO.json';

interface OwnProps {
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  registrerArbeidsforhold: (params: ManueltArbeidsforhold) => Promise<void>;
  lagreVurdering: (params: ManglendeInntektsmeldingVurdering) => Promise<void>;
  erOverstyrer: boolean;
}

const intl = createIntl(messages);

const ArbeidOgInntektFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  behandling,
  aksjonspunkter,
  readOnly,
  formData,
  setFormData,
  arbeidOgInntekt,
  arbeidsgiverOpplysningerPerId,
  registrerArbeidsforhold,
  lagreVurdering,
  erOverstyrer,
}) => (
  <RawIntlProvider value={intl}>
    <ArbeidOgInntektFaktaPanel
      behandlingUuid={behandling.uuid}
      skjæringspunktDato={behandling.behandlingsresultat.skjæringstidspunkt.dato}
      aksjonspunkter={aksjonspunkter}
      isReadOnly={readOnly}
      formData={formData}
      setFormData={setFormData}
      arbeidOgInntekt={arbeidOgInntekt}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      registrerArbeidsforhold={registrerArbeidsforhold}
      lagreVurdering={lagreVurdering}
      erOverstyrer={erOverstyrer}
    />
  </RawIntlProvider>
);

export default ArbeidOgInntektFaktaIndex;
