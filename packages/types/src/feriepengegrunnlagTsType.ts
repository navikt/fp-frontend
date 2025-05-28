import type { AktivitetStatus } from '@navikt/fp-kodeverk';

export type FeriepengegrunnlagAndel = Readonly<{
  aktivitetStatus: AktivitetStatus;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}>;

export type Feriepengegrunnlag = Readonly<{
  andeler: FeriepengegrunnlagAndel[];
}>;
