import Kodeverk from './kodeverkTsType';
import KodeverkMedNavn from './kodeverkMedNavnTsType';

export type ArsakKodeverk = {
  gyldigFom?: string;
  gyldigTom?: string;
  uttakTyper?: string[];
  valgbarForKonto?: string[];
} & KodeverkMedNavn;

export type PeriodeSokerAktivitet = Readonly<{
  stønadskontoType?: Kodeverk;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
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
  periodeResultatÅrsak: ArsakKodeverk;
  periodeResultatÅrsakLovhjemmel?: string;
  mottattDato?: string;
  manuellBehandlingÅrsak: Kodeverk;
  graderingAvslagÅrsak: ArsakKodeverk;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  graderingsAvslagÅrsakLovhjemmel?: string;
  gradertAktivitet?: PeriodeSokerAktivitet;
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
