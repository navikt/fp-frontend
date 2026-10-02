import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type VurderArbeidsforholdInntektsmeldingAp = AksjonspunktFraBackend<
  typeof AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING
>;
