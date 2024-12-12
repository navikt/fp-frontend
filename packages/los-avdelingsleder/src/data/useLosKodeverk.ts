import { useQuery } from '@tanstack/react-query';

import { KodeverkMedNavn } from '@navikt/fp-types';

import { losKodeverkOptions } from './fplosAvdelingslederApi';

/**
 * Hook som henter et gitt kodeverk fra respons som allerede er hentet fra backend.
 */
export const useLosKodeverk = <T = KodeverkMedNavn>(kodeverkType: string): T[] => {
  const alleKodeverk = useQuery(losKodeverkOptions()).data;

  //@ts-expect-error Fiks denne
  return alleKodeverk?.[kodeverkType] ?? [];
};
