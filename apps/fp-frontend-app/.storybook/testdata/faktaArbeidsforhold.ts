import { UttakArbeidType } from '@navikt/fp-kodeverk';
import type { FaktaArbeidsforhold } from '@navikt/fp-types';

export const faktaArbeidsforhold: FaktaArbeidsforhold[] = [
  {
    arbeidsgiverReferanse: '992257822',
    arbeidType: UttakArbeidType.ORDINÆRT_ARBEID,
  },
  {
    arbeidsgiverReferanse: null,
    arbeidType: UttakArbeidType.FRILANS,
  },
];
