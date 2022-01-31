import KodeverkMedNavn from './kodeverkMedNavnTsType';

export type ArsakKodeverk = {
  gyldigFom?: string;
  gyldigTom?: string;
  uttakTyper?: string[];
  valgbarForKonto?: string[];
} & KodeverkMedNavn;

export type PeriodeSokerAktivitet = Readonly<{
  stønadskontoType?: string;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>

export type PeriodeSoker = Readonly<{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: ArsakKodeverk;
  periodeResultatÅrsakLovhjemmel?: string;
  mottattDato?: string;
  manuellBehandlingÅrsak: string;
  graderingAvslagÅrsak: ArsakKodeverk;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  graderingsAvslagÅrsakLovhjemmel?: string;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: string;
  oppholdÅrsak: string;
}>

type UttaksresultatPeriode = Readonly<{
  perioderSøker: PeriodeSoker[];
  perioderAnnenpart: PeriodeSoker[];
  annenForelderHarRett: boolean;
  aleneomsorg: boolean;
}>

export default UttaksresultatPeriode;
