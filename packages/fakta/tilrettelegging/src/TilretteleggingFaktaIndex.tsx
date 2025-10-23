import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId, FodselOgTilrettelegging } from '@navikt/fp-types';

import { TilretteleggingFaktaForm } from './components/TilretteleggingFaktaForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  svangerskapspengerTilrettelegging: FodselOgTilrettelegging;
  arbeidOgInntekt?: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const TilretteleggingFaktaIndex = ({ arbeidOgInntekt, ...rest }: Props) => (
  <RawIntlProvider value={intl}>
    <TilretteleggingFaktaForm aoiArbeidsforhold={arbeidOgInntekt?.arbeidsforhold ?? []} {...rest} />
  </RawIntlProvider>
);
