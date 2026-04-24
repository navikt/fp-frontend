import dayjs from 'dayjs';

import type { Permisjon } from '@navikt/fp-types';

export const filtrerVelferdspermisjoner = (
  velferdspermisjoner: Permisjon[],
  tilretteleggingBehovFom: string,
): Permisjon[] =>
  velferdspermisjoner.filter(
    permisjon =>
      !dayjs(permisjon.permisjonFom).isAfter(tilretteleggingBehovFom) &&
      (permisjon.permisjonTom === undefined || !dayjs(permisjon.permisjonTom).isBefore(tilretteleggingBehovFom)),
  );
