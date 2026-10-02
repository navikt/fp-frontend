import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type VurderArbeidsforholdInntektsmeldingAp = AksjonspunktTilBekreftelse<
  typeof AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING
>;
