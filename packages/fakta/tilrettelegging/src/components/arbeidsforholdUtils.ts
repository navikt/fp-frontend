import dayjs from 'dayjs';

import type { VelferdspermisjonDto } from '@navikt/fp-types';

export const filtrerVelferdspermisjoner = (
  velferdspermisjoner: VelferdspermisjonDto[],
  tilretteleggingBehovFom: string,
): VelferdspermisjonDto[] =>
  velferdspermisjoner.filter(
    permisjon =>
      !dayjs(permisjon.permisjonFom).isAfter(tilretteleggingBehovFom) &&
      (permisjon.permisjonTom === undefined || !dayjs(permisjon.permisjonTom).isBefore(tilretteleggingBehovFom)),
  );
