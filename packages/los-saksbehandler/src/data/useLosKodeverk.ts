import { useQuery } from '@tanstack/react-query';

import { KodeverkMedNavn } from '@navikt/fp-types';

import { losKodeverkOptions } from './fplosSaksbehandlerApi';

/**
 * Hook som henter et gitt kodeverk fra respons som allerede er hentet fra backend.
 */
export const useLosKodeverk = <T = KodeverkMedNavn>(kodeverkType: string): T[] => {
  const alleKodeverk = useQuery(losKodeverkOptions()).data;

  if (alleKodeverk === undefined) {
    throw new Error('Kodeverk skal være hentet');
  }

  //@ts-ignore Fiks denne
  return alleKodeverk[kodeverkType];
};
