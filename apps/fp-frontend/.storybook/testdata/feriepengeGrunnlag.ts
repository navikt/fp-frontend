import { AktivitetStatus } from '@navikt/fp-kodeverk';
import type { Feriepengegrunnlag } from '@navikt/fp-types';

export const feriepengeGrunnlag: Feriepengegrunnlag = {
  andeler: [
    {
      aktivitetStatus: AktivitetStatus.ARBEIDSTAKER,
      arbeidsgiverId: '992257822',
      arbeidsforholdId: 'c33a8ee0-84cb-4705-a249-40cf52b51b48',
      opptjeningsår: 2025,
      årsbeløp: 110,
      erBrukerMottaker: false,
    },
  ],
};
