import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import {
  ArbeidOgInntektsmelding,
  ArbeidsgiverOpplysningerPerId,
  ManglendeInntektsmeldingVurdering,
  ManueltArbeidsforhold,
  StandardFaktaPanelProps,
} from '@navikt/fp-types';

import { ArbeidOgInntektFaktaPanel } from './components/ArbeidOgInntektFaktaPanel';
import { DirtyFormProvider } from './DirtyFormProvider';

import messages from '../i18n/nb_NO.json';

interface Props {
  saksnummer: string;
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  registrerArbeidsforhold: (params: ManueltArbeidsforhold) => Promise<void>;
  lagreVurdering: (params: ManglendeInntektsmeldingVurdering) => Promise<void>;
  erOverstyrer: boolean;
  settBehandlingPåVentCallback: (params: { frist?: string; ventearsak: string }) => void;
  åpneForNyVurdering: () => void;
}

const intl = createIntl(messages);

export const ArbeidOgInntektFaktaIndex = ({
  saksnummer,
  behandling,
  submitCallback,
  aksjonspunkter,
  readOnly,
  arbeidOgInntekt,
  arbeidsgiverOpplysningerPerId,
  registrerArbeidsforhold,
  lagreVurdering,
  erOverstyrer,
  settBehandlingPåVentCallback,
  alleKodeverk,
  åpneForNyVurdering,
}: Props & StandardFaktaPanelProps) => (
  <RawIntlProvider value={intl}>
    <DirtyFormProvider>
      <ArbeidOgInntektFaktaPanel
        saksnummer={saksnummer}
        behandling={behandling}
        aksjonspunkt={aksjonspunkter.length > 0 ? aksjonspunkter[0] : undefined}
        readOnly={readOnly}
        lagreCallback={submitCallback}
        arbeidOgInntekt={arbeidOgInntekt}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        registrerArbeidsforhold={registrerArbeidsforhold}
        lagreVurdering={lagreVurdering}
        erOverstyrer={erOverstyrer}
        settBehandlingPåVentCallback={settBehandlingPåVentCallback}
        alleKodeverk={alleKodeverk}
        åpneForNyVurdering={åpneForNyVurdering}
      />
    </DirtyFormProvider>
  </RawIntlProvider>
);
