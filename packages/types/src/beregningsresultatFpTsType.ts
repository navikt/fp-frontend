import Kodeverk from './kodeverkTsType';

export type BeregningsresultatPeriodeAndel = Readonly<{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: string;
    periodeResultatType: string;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: Kodeverk;
  arbeidsforholdId: string;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: Kodeverk;
  stillingsprosent: number;
}>;

export type BeregningsresultatPeriode = Readonly<{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}>;

type BeregningsresultatFp = Readonly<{
  sokerErMor: boolean;
  opphoersdato?: string;
  perioder?: BeregningsresultatPeriode[];
  utbetPerioder?: BeregningsresultatPeriode[];
  skalHindreTilbaketrekk?: boolean;
}>

export default BeregningsresultatFp;
