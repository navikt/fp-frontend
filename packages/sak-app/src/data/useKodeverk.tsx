import { KodeverkMedNavn, AlleKodeverk, AlleKodeverkTilbakekreving } from '@fpsak-frontend/types';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';

import { FpsakApiKeys, restApiHooks } from './fpsakApi';

/**
 * Hook som henter kodeverk knyttet til behandlingstype
 */
export function useKodeverk(behandlingType: string): AlleKodeverk | AlleKodeverkTilbakekreving {
  const alleKodeverkFpSak = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.KODEVERK);
  const alleKodeverkFpTilbake = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.KODEVERK_FPTILBAKE);

  const erTilbakekreving = BehandlingType.TILBAKEKREVING === behandlingType || BehandlingType.TILBAKEKREVING_REVURDERING === behandlingType;
  return erTilbakekreving ? alleKodeverkFpTilbake : alleKodeverkFpSak;
}

/**
 * Hook som henter et gitt FPSAK-kodeverk fra respons som allerede er hentet fra backend. For å kunne bruke denne
 * må @see useGlobalStateRestApi først brukes for å hente data fra backend
 */
export function useFpSakKodeverk<T = KodeverkMedNavn>(kodeverkType: string): T[] {
  const alleKodeverk = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.KODEVERK);
  return alleKodeverk[kodeverkType];
}

/**
 * Hook som henter et gitt FPTILBAKE-kodeverk fra respons som allerede er hentet fra backend. For å kunne bruke denne
 * må @see useGlobalStateRestApi først brukes for å hente data fra backend
 */
export function useFpTilbakeKodeverk<T = KodeverkMedNavn>(kodeverkType: string): T[] {
  const alleKodeverk = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.KODEVERK_FPTILBAKE);
  return alleKodeverk ? alleKodeverk[kodeverkType] : undefined;
}

/**
 * Hook som brukes når en har behov for å slå opp navn-attributtet til et bestemt kodeverk. For å kunne bruke denne
 * må @see useGlobalStateRestApi først brukes for å hente data fra backend
 */
export function useFpSakKodeverkMedNavn(kodeverkOjekt: string): KodeverkMedNavn {
  const kodeverkType = kodeverkTyper[kodeverkOjekt.kodeverk];
  const kodeverkForType = useFpSakKodeverk<KodeverkMedNavn>(kodeverkType);

  if (!kodeverkForType || kodeverkForType.length === 0) {
    throw Error(`Det finnes ingen kodeverk for type ${kodeverkType} med kode ${kodeverkOjekt}`);
  }

  return kodeverkForType.find((k) => k.kode === kodeverkOjekt);
}

/**
 * Hook som brukes når en har behov for en funksjon som slår opp kodeverknavn. For å kunne bruke denne
 * må @see useGlobalStateRestApi først brukes for å hente data fra backend
 */
export function useGetKodeverkFn() {
  const alleFpSakKodeverk = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.KODEVERK);
  const alleFpTilbakeKodeverk = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.KODEVERK_FPTILBAKE);

  return (kodeverkOjekt: string, behandlingType: string = BehandlingType.FORSTEGANGSSOKNAD) => {
    const kodeverkType = kodeverkTyper[kodeverkOjekt];
    const kodeverkForType = behandlingType === BehandlingType.TILBAKEKREVING || behandlingType === BehandlingType.TILBAKEKREVING_REVURDERING
      ? alleFpTilbakeKodeverk[kodeverkType] : alleFpSakKodeverk[kodeverkType];
    if (!kodeverkForType || kodeverkForType.length === 0) {
      throw Error(`Det finnes ingen kodeverk for type ${kodeverkType} med kode ${kodeverkOjekt}`);
    }
    return kodeverkForType.find((k) => k.kode === kodeverkOjekt);
  };
}
