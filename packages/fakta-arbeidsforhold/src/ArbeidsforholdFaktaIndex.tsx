import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';

import { ArbeidsforholdInfoPanel } from './components/ArbeidsforholdInfoPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const ArbeidsforholdFaktaIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <ArbeidsforholdInfoPanel {...props} />
  </RawIntlProvider>
);
