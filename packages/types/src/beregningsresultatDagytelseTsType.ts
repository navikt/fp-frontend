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
  arbeidsforholdType: string;
}>;

export type BeregningsresultatPeriode = Readonly<{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}>;

type BeregningsresultatDagytelse = Readonly<{
  opphoersdato?: string;
  perioder?: BeregningsresultatPeriode[];
}>;

export default BeregningsresultatDagytelse;
