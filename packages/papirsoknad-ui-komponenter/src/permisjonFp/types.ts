import type {
  Arbeidskategori,
  GraderingDto,
  OppholdDto,
  OverføringsperiodeDto,
  PermisjonPeriodeDto,
  UtsettelseDto,
} from '@navikt/fp-types';

import {
  GRADERING_PERIODE_FIELD_ARRAY_NAME,
  OPPHOLD_PERIODE_FIELD_ARRAY_NAME,
  OVERFØRING_PERIODE_FIELD_ARRAY_NAME,
  PERMISJON_PERIODE_FIELD_ARRAY_NAME,
  TIDSROM_PERMISJON_FORM_NAME_PREFIX,
  UTSETTELSE_PERIODE_FIELD_ARRAY_NAME,
} from './constants';

type VirtuellFeilType = {
  notRegisteredInput?: string;
  periodeOverlapper?: string;
};

export type GraderingPeriode = Omit<GraderingDto, 'erArbeidstaker' | 'erFrilanser' | 'erSelvstNæringsdrivende'> & {
  arbeidskategoriType?: Arbeidskategori;
};

export type UtsettelsPeriode = UtsettelseDto & {
  // TODO(siri): erArbeidstaker hører nok ikke hjemme i dtoen. Tror dette skal være morsAktivitet
  erArbeidstaker?: string;
};

export type FormValuesUtsettelse = {
  skalUtsette?: boolean;
  [UTSETTELSE_PERIODE_FIELD_ARRAY_NAME]?: UtsettelsPeriode[];
};
export type FormValuesOpphold = {
  skalHaOpphold?: boolean;
  [OPPHOLD_PERIODE_FIELD_ARRAY_NAME]?: OppholdDto[];
};

export type FormValuesOverforing = {
  skalOvertaKvote: boolean;
  [OVERFØRING_PERIODE_FIELD_ARRAY_NAME]?: OverføringsperiodeDto[];
};
export type FormValuesGradering = {
  skalGradere?: boolean;
  [GRADERING_PERIODE_FIELD_ARRAY_NAME]?: GraderingPeriode[];
};

export type FromValuesFulltUttak = {
  fulltUttak: boolean;
  [PERMISJON_PERIODE_FIELD_ARRAY_NAME]?: PermisjonPeriodeDto[];
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
