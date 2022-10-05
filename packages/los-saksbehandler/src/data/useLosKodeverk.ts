import { KodeverkMedNavn } from '@navikt/ft-types';
import { RestApiGlobalStatePathsKeys, restApiHooks } from './fplosSaksbehandlerRestApi';

/**
 * Hook som henter et gitt kodeverk fra respons som allerede er hentet fra backend. For å kunne bruke denne
 * må @see useGlobalStateRestApi først brukes for å hente data fra backend
 */
function useLosKodeverk<T = KodeverkMedNavn>(kodeverkType: string): T[] {
  const alleKodeverk = restApiHooks.useGlobalStateRestApiData(RestApiGlobalStatePathsKeys.KODEVERK);
  // @ts-ignore Fiks
  return alleKodeverk[kodeverkType];
}

export default useLosKodeverk;
