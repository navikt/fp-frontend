import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import {
  ArbeidOgInntektsmelding,
  ArbeidsgiverOpplysningerPerId,
  ManglendeInntektsmeldingVurdering,
  ManueltArbeidsforhold,
} from '@navikt/fp-types';

import { ArbeidOgInntektFaktaPanel } from './components/ArbeidOgInntektFaktaPanel';
import { DirtyFormProvider } from './DirtyFormProvider';

import messages from '../i18n/nb_NO.json';

interface Props {
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
  arbeidOgInntekt,
  arbeidsgiverOpplysningerPerId,
  registrerArbeidsforhold,
  lagreVurdering,
  erOverstyrer,
  settBehandlingPåVentCallback,
  åpneForNyVurdering,
}: Props) => (
  <RawIntlProvider value={intl}>
    <DirtyFormProvider>
      <ArbeidOgInntektFaktaPanel
        arbeidOgInntekt={arbeidOgInntekt}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        registrerArbeidsforhold={registrerArbeidsforhold}
        lagreVurdering={lagreVurdering}
        erOverstyrer={erOverstyrer}
        settBehandlingPåVentCallback={settBehandlingPåVentCallback}
        åpneForNyVurdering={åpneForNyVurdering}
      />
    </DirtyFormProvider>
  </RawIntlProvider>
);
