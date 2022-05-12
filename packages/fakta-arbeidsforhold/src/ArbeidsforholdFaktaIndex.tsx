import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import {
  ArbeidsgiverOpplysningerPerId, StandardFaktaPanelProps, InntektArbeidYtelse,
} from '@fpsak-frontend/types';
import { createIntl } from '@navikt/ft-utils';

import ArbeidsforholdInfoPanel from './components/ArbeidsforholdInfoPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  inntektArbeidYtelse: InntektArbeidYtelse;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const ArbeidsforholdFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  inntektArbeidYtelse,
  arbeidsgiverOpplysningerPerId,
}) => (
  <RawIntlProvider value={intl}>
    <ArbeidsforholdInfoPanel
      arbeidsforhold={inntektArbeidYtelse.arbeidsforhold}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />
  </RawIntlProvider>
);

export default ArbeidsforholdFaktaIndex;
