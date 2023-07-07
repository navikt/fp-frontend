import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';
import { KodeverkType } from '@navikt/fp-kodeverk';
import { createIntl } from '@navikt/ft-utils';

import {
  ArbeidsgiverOpplysningerPerId,
  StandardFaktaPanelProps,
  FodselOgTilrettelegging,
  ArbeidOgInntektsmelding,
} from '@navikt/fp-types';

import TilretteleggingFaktaForm from './components/TilretteleggingFaktaForm';

import messages from '../i18n/nb_NO.json';

import '@navikt/fp-fakta-felles/dist/style.css';

const intl = createIntl(messages);

interface OwnProps {
  svangerskapspengerTilrettelegging: FodselOgTilrettelegging;
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  erOverstyrer: boolean;
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
  erOverstyrer,
  arbeidsgiverOpplysningerPerId,
  alleKodeverk,
  formData,
  setFormData,
  arbeidOgInntekt,
}) => (
  <RawIntlProvider value={intl}>
    <TilretteleggingFaktaForm
      behandlingVersjon={behandling.versjon}
      svangerskapspengerTilrettelegging={svangerskapspengerTilrettelegging}
      // @ts-ignore fixme
      arbeidsforhold={arbeidOgInntekt.arbeidsforhold}
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

export default TilretteleggingFaktaIndex;
