import type { UseFormGetValues } from 'react-hook-form';

import { dateAfterOrEqual, dateBeforeOrEqual, dateRangesNotOverlapping } from '@navikt/ft-form-validators';

import type { PermisjonFormValues } from '../types';

type PeriodeMedTidsrom = { periodeFom?: string; periodeTom?: string };
type UtfyltPeriode = { periodeFom: string; periodeTom: string };

const erUtfyltPeriode = (periode: PeriodeMedTidsrom): periode is UtfyltPeriode =>
  !!periode.periodeFom && !!periode.periodeTom;

// Plukkar ut berre dei periodene som har både f.o.m. og t.o.m. utfylt, som [fom, tom]-par.
export const hentUtfylteTidsrom = (perioder?: PeriodeMedTidsrom[]): string[][] =>
  (perioder ?? []).filter(erUtfyltPeriode).map(({ periodeFom, periodeTom }) => [periodeFom, periodeTom]);

// Sjekkar om nokon periode i éi gruppe overlappar i tid med ein periode i ei anna gruppe.
// Overlapp innanfor same gruppe (same periodetype) blir ikkje rapportert her.
export const harOverlappMellomPeriodetypar = (periodeGrupper: string[][][]): boolean =>
  periodeGrupper.some((periodeGruppe, index) => {
    const andrePerioder = periodeGrupper.slice(index + 1).flat();
    return periodeGruppe.some(periode =>
      andrePerioder.some(annenPeriode => !!dateRangesNotOverlapping([periode, annenPeriode])),
    );
  });

type Prefix =
  | `tidsromPermisjon.permisjonsPerioder`
  | `tidsromPermisjon.graderingPeriode`
  | `tidsromPermisjon.oppholdPerioder`
  | `tidsromPermisjon.utsettelsePeriode`
  | `tidsromPermisjon.overføringsperioder`;

export const getValiderFørEllerEtter =
  (
    getValues: UseFormGetValues<PermisjonFormValues>,
    prefix: `${Prefix}.${number}`,
    sjekkForFelt: 'periodeFom' | 'periodeTom',
  ) =>
  () => {
    const { periodeFom, periodeTom } = getValues(prefix) ?? {};

    if (!periodeFom || !periodeTom) {
      return null;
    }

    return sjekkForFelt === 'periodeFom'
      ? dateBeforeOrEqual(periodeTom)(periodeFom)
      : dateAfterOrEqual(periodeFom)(periodeTom);
  };

export const getOverlappingValidator = (getValues: UseFormGetValues<PermisjonFormValues>, prefix: Prefix) => () => {
  const perioder = getValues(prefix) ?? [];
  const periodeMap = perioder
    .filter(({ periodeFom, periodeTom }) => periodeFom !== '' && periodeTom !== '')
    .map(({ periodeFom, periodeTom }) => [periodeFom, periodeTom]);
  return periodeMap.length > 0 ? dateRangesNotOverlapping(periodeMap) : undefined;
};
