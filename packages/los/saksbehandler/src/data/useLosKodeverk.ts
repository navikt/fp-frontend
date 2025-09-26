import { useQuery } from '@tanstack/react-query';

import type { AlleKodeverkLos, LosKodeverkType } from '@navikt/fp-types';

import { losKodeverkOptions } from './fplosSaksbehandlerApi';

/**
 * Hook som henter et gitt kodeverk fra respons som allerede er hentet fra backend.
 */
export const useLosKodeverk = <T extends LosKodeverkType>(kodeverkType: T): AlleKodeverkLos[T] => {
  const alleKodeverk = useQuery(losKodeverkOptions()).data;

  if (!alleKodeverk) {
    throw new Error('Kodeverk for LOS er ikke lastet inn');
  }

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- burde ikke skje, men beholdes likevel
  if (!alleKodeverk[kodeverkType]) {
    throw new Error(`Kodeverk ${kodeverkType} for LOS finnes ikke`);
  }

  return alleKodeverk[kodeverkType];
};
