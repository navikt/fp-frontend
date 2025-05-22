import { useQuery } from '@tanstack/react-query';

import type { KodeverkLosReturnType, LosKodeverkType } from '@navikt/fp-types';

import { losKodeverkOptions } from './fplosAvdelingslederApi';

/**
 * Hook som henter et gitt kodeverk fra respons som allerede er hentet fra backend.
 */
export const useLosKodeverk = <T extends LosKodeverkType>(kodeverkType: T): KodeverkLosReturnType<T> => {
  const alleKodeverk = useQuery(losKodeverkOptions()).data;

  if (!alleKodeverk) {
    throw new Error('Kodeverk for LOS er ikke lastet inn');
  }
  if (!alleKodeverk[kodeverkType]) {
    throw new Error(`Kodeverk ${kodeverkType} for LOS finnes ikke`);
  }

  return alleKodeverk[kodeverkType] as KodeverkLosReturnType<T>;
};
