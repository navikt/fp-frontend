import Kodeverk from './kodeverkTsType';
import Arbeidsforhold from './arbeidsforholdTsType';

export type PeriodeSokerAktivitet = Readonly<{
  stønadskontoType?: Kodeverk;
  trekkdager: {
    verdi: number;
  };
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiver?: Arbeidsforhold;
  utbetalingsgrad?: number;
  uttakArbeidType?: Kodeverk;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>

export type PeriodeSoker = Readonly<{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: Kodeverk;
  begrunnelse?: string;
  periodeResultatÅrsak: Kodeverk;
  periodeResultatÅrsakLovhjemmel?: string;
  manuellBehandlingÅrsak: Kodeverk;
  graderingAvslagÅrsak: Kodeverk;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: {
    verdi: number;
  };
  graderingInnvilget: boolean;
  graderingsAvslagÅrsakLovhjemmel?: string;
  gradertAktivitet?: boolean;
  periodeType: Kodeverk;
  utsettelseType: Kodeverk;
  oppholdÅrsak: Kodeverk;
}>

type UttaksresultatPeriode = Readonly<{
  perioderSøker: PeriodeSoker[];
  perioderAnnenpart: PeriodeSoker[];
  annenForelderHarRett: boolean;
  aleneomsorg: boolean;
}>

export default UttaksresultatPeriode;
