import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { ArbeidOgInntektsmelding,ArbeidsgiverOpplysningerPerId, StandardFaktaPanelProps } from '@navikt/fp-types';

import ArbeidsforholdInfoPanel from './components/ArbeidsforholdInfoPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const ArbeidsforholdFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  arbeidOgInntekt,
  arbeidsgiverOpplysningerPerId,
}) => (
  <RawIntlProvider value={intl}>
    <ArbeidsforholdInfoPanel
      arbeidOgInntekt={arbeidOgInntekt}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />
  </RawIntlProvider>
);

export default ArbeidsforholdFaktaIndex;
