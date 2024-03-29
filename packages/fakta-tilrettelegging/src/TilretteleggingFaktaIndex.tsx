import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';

import {
  ArbeidsgiverOpplysningerPerId,
  StandardFaktaPanelProps,
  FodselOgTilrettelegging,
  ArbeidOgInntektsmelding,
} from '@navikt/fp-types';
import { KodeverkType } from '@navikt/fp-kodeverk';

import TilretteleggingFaktaForm from './components/TilretteleggingFaktaForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  svangerskapspengerTilrettelegging: FodselOgTilrettelegging;
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const TilretteleggingFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  behandling,
  svangerskapspengerTilrettelegging,
  aksjonspunkter,
  submitCallback,
  readOnly,
  harApneAksjonspunkter,
  submittable,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
  arbeidOgInntekt,
  alleKodeverk,
}) => (
  <RawIntlProvider value={intl}>
    <TilretteleggingFaktaForm
      behandlingVersjon={behandling.versjon}
      svangerskapspengerTilrettelegging={svangerskapspengerTilrettelegging}
      aoiArbeidsforhold={arbeidOgInntekt.arbeidsforhold}
      aksjonspunkter={aksjonspunkter}
      submitCallback={submitCallback}
      readOnly={readOnly}
      hasOpenAksjonspunkter={harApneAksjonspunkter}
      submittable={submittable}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      formData={formData}
      setFormData={setFormData}
      uttakArbeidTyper={alleKodeverk[KodeverkType.UTTAK_ARBEID_TYPE]}
    />
  </RawIntlProvider>
);

export default TilretteleggingFaktaIndex;
