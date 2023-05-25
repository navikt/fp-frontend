import { BehandlingType } from '@navikt/ft-kodeverk';

import { AlleKodeverk, KodeverkMedNavn, AlleKodeverkTilbakekreving } from '@navikt/fp-types';
import { KodeverkType } from '@navikt/fp-kodeverk';

import { FagsakApiKeys, restFagsakApiHooks } from './fagsakContextApi';

/**
 * Hook som henter kodeverk knyttet til behandlingstype
 */
export function useKodeverk(behandlingType?: string): AlleKodeverk | AlleKodeverkTilbakekreving {
  const alleKodeverkFpSak = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.KODEVERK);
  const alleKodeverkFpTilbake = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.KODEVERK_FPTILBAKE);

  const erTilbakekreving =
    BehandlingType.TILBAKEKREVING === behandlingType || BehandlingType.TILBAKEKREVING_REVURDERING === behandlingType;
  return erTilbakekreving ? alleKodeverkFpTilbake : alleKodeverkFpSak;
}

/**
 * Hook som henter et gitt FPSAK-kodeverk fra respons som allerede er hentet fra backend. For å kunne bruke denne
 * må @see useGlobalStateRestApi først brukes for å hente data fra backend
 */
export function useFpSakKodeverk<T = KodeverkMedNavn>(kodeverkType: string): T[] {
  const alleKodeverk = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.KODEVERK);
  // @ts-ignore Fiks
  return alleKodeverk[kodeverkType];
}

/**
 * Hook som henter et gitt FPTILBAKE-kodeverk fra respons som allerede er hentet fra backend. For å kunne bruke denne
 * må @see useGlobalStateRestApi først brukes for å hente data fra backend
 */
export function useFpTilbakeKodeverk<T = KodeverkMedNavn>(kodeverkType: string): T[] {
  const alleKodeverk = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.KODEVERK_FPTILBAKE);
  // @ts-ignore Fiks
  return alleKodeverk ? alleKodeverk[kodeverkType] : undefined;
}

/**
 * Hook som brukes når en har behov for å slå opp navn-attributtet til et bestemt kodeverk. For å kunne bruke denne
 * må @see useGlobalStateRestApi først brukes for å hente data fra backend
 */
export function useFpSakKodeverkMedNavn(kode: string, kodeverk: KodeverkType): KodeverkMedNavn {
  const kodeverkForType = useFpSakKodeverk<KodeverkMedNavn>(kodeverk);

  const verdi = kodeverkForType.find(k => k.kode === kode);

  if (!kodeverkForType || kodeverkForType.length === 0) {
    throw Error(`Det finnes ingen kodeverk for type ${kodeverk} med kode ${kode}`);
  }
  if (!verdi) {
    throw Error(`Finner ingen verdi for kodeverk ${kodeverk} med kode ${kode}`);
  }

  return verdi;
}

/**
 * Hook som brukes når en har behov for en funksjon som slår opp kodeverknavn. For å kunne bruke denne
 * må @see useGlobalStateRestApi først brukes for å hente data fra backend
 */
export function useGetKodeverkFn() {
  const alleFpSakKodeverk = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.KODEVERK);
  const alleFpTilbakeKodeverk = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.KODEVERK_FPTILBAKE);

  return (kode: string, kodeverk: KodeverkType, behandlingType: string = BehandlingType.FORSTEGANGSSOKNAD) => {
    const kodeverkForType =
      behandlingType === BehandlingType.TILBAKEKREVING || behandlingType === BehandlingType.TILBAKEKREVING_REVURDERING
        ? // @ts-ignore Fiks
          alleFpTilbakeKodeverk[kodeverk]
        : alleFpSakKodeverk[kodeverk];
    if (!kodeverkForType || kodeverkForType.length === 0) {
      throw Error(`Det finnes ingen kodeverk for type ${kodeverk} med kode ${kode}`);
    }
    return kodeverkForType.find((k: KodeverkMedNavn) => k.kode === kode);
  };
}
