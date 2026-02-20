import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type {
  ArbeidsgiverOpplysningerPerId,
  FaktaArbeidsforhold,
  FaktaUttakPeriode,
  Ytelsefordeling,
} from '@navikt/fp-types';

import { UttakFaktaForm } from './components/UttakFaktaForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  ytelsefordeling: Ytelsefordeling;
  uttakKontrollerFaktaPerioder: FaktaUttakPeriode[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  faktaArbeidsforhold?: FaktaArbeidsforhold[];
  kanOverstyre: boolean;
}

export const UttakFaktaIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <UttakFaktaForm {...props} />
  </RawIntlProvider>
);
