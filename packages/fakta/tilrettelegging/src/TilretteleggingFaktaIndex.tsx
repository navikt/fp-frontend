import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { FaktaPanelTittel } from '@navikt/fp-fakta-felles';
import type { ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId, SvpTilrettelegging } from '@navikt/fp-types';

import { TilretteleggingFaktaForm } from './components/TilretteleggingFaktaForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  svangerskapspengerTilrettelegging: SvpTilrettelegging;
  arbeidOgInntekt?: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const TilretteleggingFaktaIndex = ({ arbeidOgInntekt, ...rest }: Props) => (
  <RawIntlProvider value={intl}>
    <FaktaPanelTittel />
    <TilretteleggingFaktaForm aoiArbeidsforhold={arbeidOgInntekt?.arbeidsforhold ?? []} {...rest} />
  </RawIntlProvider>
);
