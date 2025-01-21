import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId, StandardFaktaPanelProps } from '@navikt/fp-types';

import ArbeidsforholdInfoPanel from './components/ArbeidsforholdInfoPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const ArbeidsforholdFaktaIndex = ({
  arbeidOgInntekt,
  arbeidsgiverOpplysningerPerId,
}: Props & StandardFaktaPanelProps) => (
  <RawIntlProvider value={intl}>
    <ArbeidsforholdInfoPanel
      arbeidOgInntekt={arbeidOgInntekt}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />
  </RawIntlProvider>
);
