import { useQuery } from '@tanstack/react-query';

import { BehandlingType, KodeverkType } from '@navikt/fp-kodeverk';
import { AlleKodeverk, AlleKodeverkTilbakekreving, KodeverkMedNavn } from '@navikt/fp-types';

import { useFagsakApi } from './fagsakApi';
import { notEmpty } from './notEmpty';

/**
 * Hook som henter kodeverk knyttet til behandlingstype
 */
export function useKodeverk(behandlingType?: string): AlleKodeverk | AlleKodeverkTilbakekreving {
  const api = useFagsakApi();
  const { data: alleKodeverkFpSak } = useQuery(api.kodeverkOptions());
  const { data: alleKodeverkFpTilbake } = useQuery(api.fptilbake.kodeverkOptions());

  const erTilbakekreving =
    BehandlingType.TILBAKEKREVING === behandlingType || BehandlingType.TILBAKEKREVING_REVURDERING === behandlingType;
  return notEmpty(erTilbakekreving ? alleKodeverkFpTilbake : alleKodeverkFpSak);
}

/**
 * Hook som henter et gitt FPSAK-kodeverk fra respons som allerede er hentet fra backend. For å kunne bruke denne
 * må @see useGlobalStateRestApi først brukes for å hente data fra backend
 */
export function useFpSakKodeverk<T = KodeverkMedNavn>(kodeverkType: string): T[] {
  const { kodeverkOptions } = useFagsakApi();
  const { data: alleKodeverk } = useQuery(kodeverkOptions());
  // @ts-expect-error Fiks
  return notEmpty(alleKodeverk)[kodeverkType];
}

/**
 * Hook som henter et gitt FPTILBAKE-kodeverk fra respons som allerede er hentet fra backend. For å kunne bruke denne
 * må @see useGlobalStateRestApi først brukes for å hente data fra backend
 */
export function useFpTilbakeKodeverk<T = KodeverkMedNavn>(kodeverkType: string): T[] {
  const api = useFagsakApi();
  const { data: alleKodeverk } = useQuery(api.fptilbake.kodeverkOptions());
  // @ts-expect-error Fiks
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
  const api = useFagsakApi();
  const { data: alleFpSakKodeverk } = useQuery(api.kodeverkOptions());
  const { data: alleKodeverkFpTilbake } = useQuery(api.fptilbake.kodeverkOptions());

  return (kode: string, kodeverk: KodeverkType, behandlingType: string = BehandlingType.FORSTEGANGSSOKNAD) => {
    const kodeverkForType =
      behandlingType === BehandlingType.TILBAKEKREVING || behandlingType === BehandlingType.TILBAKEKREVING_REVURDERING
        ? // @ts-expect-error Fiks
          notEmpty(alleKodeverkFpTilbake)[kodeverk]
        : notEmpty(alleFpSakKodeverk)[kodeverk];
    if (!kodeverkForType || kodeverkForType.length === 0) {
      throw Error(`Det finnes ingen kodeverk for type ${kodeverk} med kode ${kode}`);
    }
    return kodeverkForType.find((k: KodeverkMedNavn) => k.kode === kode);
  };
}
