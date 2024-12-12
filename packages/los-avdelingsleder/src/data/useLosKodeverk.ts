import { useQuery } from '@tanstack/react-query';

import { KodeverkMedNavn } from '@navikt/fp-types';

import { losKodeverkOptions } from './fplosAvdelingslederApi';

/**
 * Hook som henter et gitt kodeverk fra respons som allerede er hentet fra backend.
 */
<<<<<<< Updated upstream
function useLosKodeverk<T = KodeverkMedNavn>(kodeverkType: string): T[] {
  const alleKodeverk = restApiHooks.useGlobalStateRestApiData(RestApiGlobalStatePathsKeys.KODEVERK_LOS);
  // @ts-expect-error Fiks
  return alleKodeverk?.[kodeverkType] ?? [];
}
=======
export const useLosKodeverk = <T = KodeverkMedNavn>(kodeverkType: string): T[] => {
  const alleKodeverk = useQuery(losKodeverkOptions()).data;
>>>>>>> Stashed changes

  //@ts-expect-error Fiks denne
  return alleKodeverk && alleKodeverk[kodeverkType] ? alleKodeverk[kodeverkType] : [];
};
