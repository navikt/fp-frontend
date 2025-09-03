import type {
  tjenester_behandling_beregningsresultat_dto_BeregningsresultatMedUttaksplanDto,
  tjenester_behandling_beregningsresultat_dto_BeregningsresultatPeriodeAndelDto,
  tjenester_behandling_beregningsresultat_dto_BeregningsresultatPeriodeDto,
} from './apiDtoGenerert';
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

export type BeregningsresultatPeriodeAndel =
  tjenester_behandling_beregningsresultat_dto_BeregningsresultatPeriodeAndelDto;

export type BeregningsresultatPeriode = tjenester_behandling_beregningsresultat_dto_BeregningsresultatPeriodeDto;

export type BeregningsresultatDagytelse =
  tjenester_behandling_beregningsresultat_dto_BeregningsresultatMedUttaksplanDto;
