import type {
  GraderingAvslagÅrsak,
  ManuellBehandlingÅrsak,
  PeriodeResultatÅrsak,
  StonadskontoType,
  UttakUtsettelseType,
} from '@navikt/fp-kodeverk';

export type PeriodeSokerAktivitet = Readonly<{
  stønadskontoType?: StonadskontoType;
  prosentArbeid?: number;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverReferanse?: string;
  utbetalingsgrad?: number;
  uttakArbeidType?: string;
  gradering?: boolean;
  trekkdagerDesimaler?: number;
}>;

export type PeriodeSoker = Readonly<{
  fom: string;
  tom: string;
  aktiviteter: PeriodeSokerAktivitet[];
  periodeResultatType: string;
  begrunnelse?: string;
  periodeResultatÅrsak: PeriodeResultatÅrsak;
  mottattDato?: string;
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  graderingAvslagÅrsak: GraderingAvslagÅrsak;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
  graderingInnvilget: boolean;
  gradertAktivitet?: PeriodeSokerAktivitet;
  periodeType: string;
  utsettelseType: UttakUtsettelseType;
  oppholdÅrsak: string;
}>;

export type AarsakFilter = Readonly<{
  kreverSammenhengendeUttakTom: string;
  utenMinsterett: boolean;
  søkerErMor: boolean;
}>;

export type Uttaksresultat = Readonly<{
  perioderSøker: PeriodeSoker[];
  perioderAnnenpart: PeriodeSoker[];
  årsakFilter: AarsakFilter;
  endringsdato: string;
}>;
