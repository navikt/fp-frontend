import type { Inntektskategori } from '@navikt/fp-types';

const erGyldigKode = <T extends string>(gyldigeKoder: Record<T, true>, kode: string): kode is T =>
  Object.hasOwn(gyldigeKoder, kode);

export const lagKodeverkValidator =
  <T extends string>(kodeverk: string, gyldigeKoder: Record<T, true>) =>
  (kode: string): T => {
    if (erGyldigKode(gyldigeKoder, kode)) {
      return kode;
    }
    throw new Error(`Ukjent ${kodeverk}: ${kode}`);
  };

export const tilValgfriKode = <T>(kode: string | null | undefined, validator: (kode: string) => T): T | undefined =>
  kode === undefined || kode === null ? undefined : validator(kode);

export const tilInntektskategori = lagKodeverkValidator<Inntektskategori>('inntektskategori', {
  ARBEIDSTAKER: true,
  FRILANSER: true,
  SELVSTENDIG_NÆRINGSDRIVENDE: true,
  DAGPENGER: true,
  ARBEIDSAVKLARINGSPENGER: true,
  SJØMANN: true,
  DAGMAMMA: true,
  JORDBRUKER: true,
  FISKER: true,
  ARBEIDSTAKER_UTEN_FERIEPENGER: true,
  '-': true,
});
