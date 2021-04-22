import { KodeverkMedNavn, Kodeverk } from '@fpsak-frontend/types';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';

import { FpsakApiKeys, restApiHooks } from './fpsakApi';

/**
 * Hook som henter kodeverk knyttet til behandlingstype
 */
export function useKodeverk<T = KodeverkMedNavn>(behandlingType: Kodeverk): {[key: string]: T[]} {
  const alleKodeverkFpSak = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.KODEVERK);
  const alleKodeverkFpTilbake = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.KODEVERK_FPTILBAKE);

  const erTilbakekreving = BehandlingType.TILBAKEKREVING === behandlingType?.kode || BehandlingType.TILBAKEKREVING_REVURDERING === behandlingType?.kode;
  // @ts-ignore Fiks kodeverk-type
  return erTilbakekreving ? alleKodeverkFpTilbake : alleKodeverkFpSak;
}

/**
 * Hook som henter et gitt FPSAK-kodeverk fra respons som allerede er hentet fra backend. For å kunne bruke denne
 * må @see useGlobalStateRestApi først brukes for å hente data fra backend
 */
export function useFpSakKodeverk<T = KodeverkMedNavn>(kodeverkType: string): T[] {
  const alleKodeverk = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.KODEVERK);
  // @ts-ignore Fiks kodeverk-type
  return alleKodeverk[kodeverkType];
}

/**
 * Hook som henter et gitt FPTILBAKE-kodeverk fra respons som allerede er hentet fra backend. For å kunne bruke denne
 * må @see useGlobalStateRestApi først brukes for å hente data fra backend
 */
export function useFpTilbakeKodeverk<T = KodeverkMedNavn>(kodeverkType: string): T[] {
  const alleKodeverk = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.KODEVERK_FPTILBAKE);
  // @ts-ignore Fiks kodeverk-type
  return alleKodeverk ? alleKodeverk[kodeverkType] : undefined;
}

/**
 * Hook som brukes når en har behov for å slå opp navn-attributtet til et bestemt kodeverk. For å kunne bruke denne
 * må @see useGlobalStateRestApi først brukes for å hente data fra backend
 */
export function useFpSakKodeverkMedNavn<T = KodeverkMedNavn>(kodeverkOjekt: Kodeverk, undertype?: string): T {
  const kodeverkType = kodeverkTyper[kodeverkOjekt.kodeverk];
  let kodeverkForType = useFpSakKodeverk<T>(kodeverkType);

  if (!kodeverkForType || kodeverkForType.length === 0) {
    throw Error(`Det finnes ingen kodeverk for type ${kodeverkType} med kode ${kodeverkOjekt.kode}`);
  }

  if (undertype) {
    kodeverkForType = kodeverkForType[undertype];
  }

  // @ts-ignore Fiks dette
  return kodeverkForType.find((k) => k.kode === kodeverkOjekt.kode);
}

/**
 * Hook som brukes når en har behov for en funksjon som slår opp kodeverknavn. For å kunne bruke denne
 * må @see useGlobalStateRestApi først brukes for å hente data fra backend
 */
export function useGetKodeverkFn() {
  const alleFpSakKodeverk = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.KODEVERK);
  const alleFpTilbakeKodeverk = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.KODEVERK_FPTILBAKE);

  return (kodeverkOjekt: Kodeverk, behandlingType: Kodeverk = { kode: BehandlingType.FORSTEGANGSSOKNAD, kodeverk: 'DUMMY' }) => {
    const kodeverkType = kodeverkTyper[kodeverkOjekt.kodeverk];
    const kodeverkForType = behandlingType.kode === BehandlingType.TILBAKEKREVING || behandlingType.kode === BehandlingType.TILBAKEKREVING_REVURDERING
      ? alleFpTilbakeKodeverk[kodeverkType] : alleFpSakKodeverk[kodeverkType];
    if (!kodeverkForType || kodeverkForType.length === 0) {
      throw Error(`Det finnes ingen kodeverk for type ${kodeverkType} med kode ${kodeverkOjekt.kode}`);
    }
    return kodeverkForType.find((k) => k.kode === kodeverkOjekt.kode);
  };
}
