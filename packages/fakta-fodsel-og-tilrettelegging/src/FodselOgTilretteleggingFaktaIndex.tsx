import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import {
  ArbeidsgiverOpplysningerPerId, Behandling, InntektArbeidYtelse, KodeverkMedNavn,
} from '@fpsak-frontend/types';
import { StandardFaktaProps } from '@fpsak-frontend/fakta-felles';

import FodselOgTilretteleggingInfoPanel from './components/FodselOgTilretteleggingInfoPanel';
import FodselOgTilrettelegging from './types/fodselOgTilretteleggingTsType';

import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  behandling: Behandling;
  svangerskapspengerTilrettelegging: FodselOgTilrettelegging;
  inntektArbeidYtelse: InntektArbeidYtelse;
  erOverstyrer: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

const FodselOgTilretteleggingFaktaIndex: FunctionComponent<OwnProps & StandardFaktaProps> = ({
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
}) => (
  <RawIntlProvider value={intl}>
    <FodselOgTilretteleggingInfoPanel
      behandlingId={behandling.id}
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
      alleKodeverk={alleKodeverk}
    />
  </RawIntlProvider>
);

export default FodselOgTilretteleggingFaktaIndex;
