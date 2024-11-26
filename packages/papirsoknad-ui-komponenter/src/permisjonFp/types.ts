import {
  GRADERING_PERIODE_FIELD_ARRAY_NAME,
  OPPHOLD_PERIODE_FIELD_ARRAY_NAME,
  OVERFORING_PERIODE_FIELD_ARRAY_NAME,
  PERMISJON_PERIODE_FIELD_ARRAY_NAME,
  TIDSROM_PERMISJON_FORM_NAME_PREFIX,
  UTSETTELSE_PERIODE_FIELD_ARRAY_NAME,
} from './constants';

type VirtuellFeilType = {
  notRegisteredInput?: string;
};

export type GraderingPeriode = {
  periodeFom: string;
  periodeTom: string;
  periodeForGradering: string;
  prosentandelArbeid: string;
  skalGraderes: boolean;
  arbeidsgiverIdentifikator?: string;
  arbeidskategoriType?: string;
  flerbarnsdager?: boolean;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: string;
};

export type PermisjonPeriode = {
  periodeType: string;
  periodeFom: string;
  periodeTom: string;
  flerbarnsdager?: boolean;
  morsAktivitet?: string;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
};

export type UtsettelsPeriode = {
  periodeFom: string;
  periodeTom: string;
  arsakForUtsettelse: string;
  periodeForUtsettelse?: string;
  erArbeidstaker?: string;
};

export type OverforingPeriode = {
  periodeFom: string;
  periodeTom: string;
  overforingArsak: string;
};

export type OppholdPeriode = {
  periodeFom: string;
  periodeTom: string;
  årsak: string;
};

export type FormValuesUtsettelse = {
  skalUtsette?: boolean;
  [UTSETTELSE_PERIODE_FIELD_ARRAY_NAME]?: UtsettelsPeriode[];
};
export type FormValuesOpphold = {
  skalHaOpphold?: boolean;
  [OPPHOLD_PERIODE_FIELD_ARRAY_NAME]?: OppholdPeriode[];
};

export type FormValuesOverforing = {
  skalOvertaKvote: boolean;
  [OVERFORING_PERIODE_FIELD_ARRAY_NAME]?: OverforingPeriode[];
};
export type FormValuesGradering = {
  skalGradere?: boolean;
  [GRADERING_PERIODE_FIELD_ARRAY_NAME]?: GraderingPeriode[];
};

export type FromValuesFulltUttak = {
  fulltUttak: boolean;
  [PERMISJON_PERIODE_FIELD_ARRAY_NAME]?: PermisjonPeriode[];
};

type TidsromPermisjon = FromValuesFulltUttak &
  FormValuesUtsettelse &
  FormValuesOpphold &
  FormValuesOverforing &
  FormValuesGradering &
  VirtuellFeilType;

export type PermisjonFormValues = {
  [TIDSROM_PERMISJON_FORM_NAME_PREFIX]?: TidsromPermisjon;
};
