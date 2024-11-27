import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { KodeverkType } from '@navikt/fp-kodeverk';
import {
  ArbeidOgInntektsmelding,
  ArbeidsgiverOpplysningerPerId,
  FodselOgTilrettelegging,
  StandardFaktaPanelProps,
} from '@navikt/fp-types';

import { TilretteleggingFaktaForm } from './components/TilretteleggingFaktaForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  svangerskapspengerTilrettelegging: FodselOgTilrettelegging;
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const TilretteleggingFaktaIndex = ({
  behandling,
  arbeidOgInntekt,
  alleKodeverk,
  ...rest
}: Props & StandardFaktaPanelProps) => (
  <RawIntlProvider value={intl}>
    <TilretteleggingFaktaForm
      behandlingVersjon={behandling.versjon}
      aoiArbeidsforhold={arbeidOgInntekt.arbeidsforhold}
      uttakArbeidTyper={alleKodeverk[KodeverkType.UTTAK_ARBEID_TYPE]}
      {...rest}
    />
  </RawIntlProvider>
);
