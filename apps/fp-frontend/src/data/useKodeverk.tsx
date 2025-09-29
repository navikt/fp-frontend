import { useQuery } from '@tanstack/react-query';

import type { AlleKodeverk, AlleKodeverkTilbakekreving, KodeverkType } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { useFagsakApi } from './fagsakApi';

/**
 * Hook som henter kodeverk knyttet til behandlingstype
 */
export const useKodeverk = (behandlingType?: string): AlleKodeverk | AlleKodeverkTilbakekreving => {
  const api = useFagsakApi();
  const { data: alleKodeverkFpSak } = useQuery(api.kodeverkOptions());
  const { data: alleKodeverkFpTilbake } = useQuery(api.fptilbake.kodeverkOptions());

  const erTilbakekreving = 'BT-007' === behandlingType || 'BT-009' === behandlingType;
  return notEmpty(erTilbakekreving ? alleKodeverkFpTilbake : alleKodeverkFpSak);
};

/**
 * Hook som henter et gitt FPSAK-kodeverk fra respons som allerede er hentet fra backend.
 */
export const useFpSakKodeverk = <T extends KodeverkType>(kodeverkType: T): AlleKodeverk[T] => {
  const { kodeverkOptions } = useFagsakApi();
  const { data: alleKodeverk } = useQuery(kodeverkOptions());

  if (!alleKodeverk) {
    throw new Error('Kodeverk er ikke lastet inn');
  }

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- burde ikke skje, men beholdes likevel
  if (!alleKodeverk[kodeverkType]) {
    throw new Error(`Kodeverk ${kodeverkType} finnes ikke`);
  }

  return alleKodeverk[kodeverkType];
};
