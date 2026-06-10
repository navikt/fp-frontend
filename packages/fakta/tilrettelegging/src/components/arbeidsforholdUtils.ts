import dayjs from 'dayjs';

import type { Arbeidsforhold, VelferdspermisjonDto } from '@navikt/fp-types';

export const filtrerVelferdspermisjoner = (
  velferdspermisjoner: VelferdspermisjonDto[],
  tilretteleggingBehovFom: string,
): VelferdspermisjonDto[] =>
  velferdspermisjoner.filter(
    permisjon =>
      !dayjs(permisjon.permisjonFom).isAfter(tilretteleggingBehovFom) &&
      (permisjon.permisjonTom === undefined || !dayjs(permisjon.permisjonTom).isBefore(tilretteleggingBehovFom)),
  );

export const finnStillingsprosent = (aoiArbeidsforhold: Arbeidsforhold[], tilretteleggingBehovFom: string) => {
  const aoiListe = aoiArbeidsforhold.filter(a => erInnenforIntervall(tilretteleggingBehovFom, a.fom, a.tom));
  return aoiListe.reduce((sum, aoi) => sum + (aoi.stillingsprosent ?? 0), 0);
};

export const erInnenforIntervall = (tilretteleggingBehovFom: string, fomDato: string, tomDato: string): boolean => {
  const dato = dayjs(tilretteleggingBehovFom);
  return !(dato.isBefore(dayjs(fomDato || undefined)) || dato.isAfter(dayjs(tomDato || undefined)));
};
