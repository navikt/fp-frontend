import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';
import { KodeverkType } from '@navikt/ft-kodeverk';
import { createIntl } from '@navikt/ft-utils';

import {
  ArbeidsgiverOpplysningerPerId, StandardFaktaPanelProps, InntektArbeidYtelse, FodselOgTilrettelegging,
} from '@fpsak-frontend/types';

import FodselOgTilretteleggingFaktaForm from './components/FodselOgTilretteleggingFaktaForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  svangerskapspengerTilrettelegging: FodselOgTilrettelegging;
  inntektArbeidYtelse: InntektArbeidYtelse;
  erOverstyrer: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const FodselOgTilretteleggingFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  behandling,
  svangerskapspengerTilrettelegging,
  inntektArbeidYtelse,
  aksjonspunkter,
  submitCallback,
  readOnly,
  harApneAksjonspunkter,
  submittable,
  erOverstyrer,
  arbeidsgiverOpplysningerPerId,
  alleKodeverk,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <FodselOgTilretteleggingFaktaForm
      behandlingVersjon={behandling.versjon}
      svangerskapspengerTilrettelegging={svangerskapspengerTilrettelegging}
      iayArbeidsforhold={inntektArbeidYtelse.arbeidsforhold}
      aksjonspunkter={aksjonspunkter}
      submitCallback={submitCallback}
      readOnly={readOnly}
      hasOpenAksjonspunkter={harApneAksjonspunkter}
      submittable={submittable}
      erOverstyrer={erOverstyrer}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      uttakArbeidTyper={alleKodeverk[KodeverkType.UTTAK_ARBEID_TYPE]}
      formData={formData}
      setFormData={setFormData}
    />
  </RawIntlProvider>
);

export default FodselOgTilretteleggingFaktaIndex;
