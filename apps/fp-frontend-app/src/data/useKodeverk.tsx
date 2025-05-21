import { useQuery } from '@tanstack/react-query';

import { BehandlingType, TilbakekrevingKodeverkType } from '@navikt/fp-kodeverk';
import type {
  AlleKodeverk,
  AlleKodeverkTilbakekreving,
  KodeverkMedNavn,
  KodeverkReturnType,
  KodeverkType,
} from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { useFagsakApi } from './fagsakApi';

/**
 * Hook som henter kodeverk knyttet til behandlingstype
 */
export const useKodeverk = (behandlingType?: string): AlleKodeverk | AlleKodeverkTilbakekreving => {
  const api = useFagsakApi();
  const { data: alleKodeverkFpSak } = useQuery(api.kodeverkOptions());
  const { data: alleKodeverkFpTilbake } = useQuery(api.fptilbake.kodeverkOptions());

  const erTilbakekreving =
    BehandlingType.TILBAKEKREVING === behandlingType || BehandlingType.TILBAKEKREVING_REVURDERING === behandlingType;
  return notEmpty(erTilbakekreving ? alleKodeverkFpTilbake : alleKodeverkFpSak);
};

/**
 * Hook som henter et gitt FPSAK-kodeverk fra respons som allerede er hentet fra backend.
 */
export const useFpSakKodeverk = <T extends KodeverkType>(kodeverkType: T): KodeverkReturnType<T> => {
  const { kodeverkOptions } = useFagsakApi();
  const { data: alleKodeverk } = useQuery(kodeverkOptions());

  if (!alleKodeverk) {
    throw new Error('Kodeverk er ikke lastet inn');
  }
  if (!alleKodeverk[kodeverkType]) {
    throw new Error(`Kodeverk ${kodeverkType} finnes ikke`);
  }

  return alleKodeverk[kodeverkType] as KodeverkReturnType<T>;
};

//TODO (TOR) Denne blir kun brukt kun ein plass, så like greit å få den vekk
/**
 * Hook som brukes når en har behov for en funksjon som slår opp kodeverknavn.
 */
export function useGetKodeverkFn() {
  const api = useFagsakApi();
  const { data: alleFpSakKodeverk } = useQuery(api.kodeverkOptions());
  const { data: alleKodeverkFpTilbake } = useQuery(api.fptilbake.kodeverkOptions());

  return (
    kode: string,
    kodeverk: KodeverkType | TilbakekrevingKodeverkType,
    behandlingType: string = BehandlingType.FORSTEGANGSSOKNAD,
  ) => {
    const kodeverkForType =
      kodeverk in TilbakekrevingKodeverkType &&
      (behandlingType === BehandlingType.TILBAKEKREVING || behandlingType === BehandlingType.TILBAKEKREVING_REVURDERING)
        ? alleKodeverkFpTilbake?.[kodeverk as TilbakekrevingKodeverkType]
        : alleFpSakKodeverk?.[kodeverk as KodeverkType];
    if (!kodeverkForType) {
      throw Error(`Det finnes ingen kodeverk for type ${kodeverk} med kode ${kode}`);
    }
    if (!Array.isArray(kodeverkForType)) {
      throw Error(`Støtter ikke kodeverk ${kodeverk}`);
    }
    return kodeverkForType.find((k: KodeverkMedNavn<unknown>) => k.kode === kode);
  };
}
