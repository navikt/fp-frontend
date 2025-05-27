import type { OpptjeningAktivitetType } from '@navikt/fp-kodeverk';

export type BeregningsresultatPeriodeAndel = Readonly<{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: string;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: string;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: OpptjeningAktivitetType;
}>;

export type BeregningsresultatPeriode = Readonly<{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}>;

export type BeregningsresultatDagytelse = Readonly<{
  perioder?: BeregningsresultatPeriode[];
}>;
