import type {
  foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_OppholdÅrsak,
  foreldrepenger_behandlingslager_behandling_ytelsefordeling_periode_UttakPeriodeType,
  foreldrepenger_behandlingslager_uttak_fp_GraderingAvslagÅrsak,
  foreldrepenger_behandlingslager_uttak_fp_PeriodeResultatÅrsak,
} from '@navikt/fp-types';

export type UttakAktivitet = {
  stønadskontoType: foreldrepenger_behandlingslager_behandling_ytelsefordeling_periode_UttakPeriodeType;
  weeks: string;
  days: string;
  utbetalingsgrad: string;
};

export type UttakAktivitetType = {
  begrunnelse?: string;
  erOppfylt?: boolean;
  periodeAarsak: foreldrepenger_behandlingslager_uttak_fp_PeriodeResultatÅrsak;
  graderingInnvilget: boolean;
  graderingAvslagAarsak: foreldrepenger_behandlingslager_uttak_fp_GraderingAvslagÅrsak;
  samtidigUttaksprosent?: string;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  oppholdArsak: foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_OppholdÅrsak;
  aktiviteter: UttakAktivitet[];
};
