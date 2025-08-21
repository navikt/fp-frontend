import type {
  BeregningsresultatMedUttaksplanDto,
  BeregningsresultatPeriodeAndelDto,
  BeregningsresultatPeriodeDto,
} from './apiDtoGenerert.ts';
//
// export type BeregningsresultatPeriodeAndel = Readonly<{
//   arbeidsgiverReferanse: string;
//   refusjon: number;
//   tilSoker: number;
//   uttak: {
//     stonadskontoType: StonadskontoType;
//     gradering: boolean;
//   };
//   utbetalingsgrad: number;
//   sisteUtbetalingsdato: string;
//   aktivitetStatus: AktivitetStatus;
//   eksternArbeidsforholdId: string;
//   arbeidsforholdType: OpptjeningAktivitetType;
// }>;

export type BeregningsresultatPeriodeAndel = BeregningsresultatPeriodeAndelDto;

export type BeregningsresultatPeriode = BeregningsresultatPeriodeDto;

export type BeregningsresultatDagytelse = BeregningsresultatMedUttaksplanDto;
