import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import {
  ArbeidsgiverOpplysningerPerId, StandardFaktaPanelProps, InntektArbeidYtelse, FodselOgTilrettelegging,
} from '@fpsak-frontend/types';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { createIntl } from '@fpsak-frontend/utils';

import FodselOgTilretteleggingInfoPanel from './components/FodselOgTilretteleggingInfoPanel';

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
      uttakArbeidTyper={alleKodeverk[kodeverkTyper.UTTAK_ARBEID_TYPE]}
      intl={intl}
    />
  </RawIntlProvider>
);

export default FodselOgTilretteleggingFaktaIndex;
