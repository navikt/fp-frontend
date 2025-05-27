import type { AktivitetStatus, OpptjeningAktivitetType, StonadskontoType } from '@navikt/fp-kodeverk';

export type BeregningsresultatPeriodeAndel = Readonly<{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: StonadskontoType;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: AktivitetStatus;
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
