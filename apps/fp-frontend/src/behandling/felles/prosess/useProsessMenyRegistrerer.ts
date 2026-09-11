import { use, useEffect } from 'react';

import type { VilkårUtfallType } from '@navikt/fp-types';

import { ProsessMenyContext } from './ProsessMeny';

const DEFAULT_PANEL_VALGT = 'default';

const beregnErAktiv = (
  valgtProsessSteg: string | undefined,
  id: string,
  skalVisesIMeny: boolean,
  skalMarkeresSomAktiv: boolean,
): boolean =>
  skalVisesIMeny && (valgtProsessSteg === id || (skalMarkeresSomAktiv && valgtProsessSteg === DEFAULT_PANEL_VALGT));

/**
 * Lettvekts variant av {@link useProsessMenyRegistrerer} som berre les kontekst
 * og returnerer om panelet er aktivt, utan sideeffekten som registrerer panelet
 * i menyen. Brukast av InitPanel-komponentar som treng å vite om panelet er
 * aktivt *før* dei sjølve kallar `useProsessMenyRegistrerer` (t.d. for å avgjere
 * om tunge `useQuery`-kall skal vere `enabled`).
 */
export const useErProsessPanelAktiv = (id: string, skalVisesIMeny: boolean, skalMarkeresSomAktiv: boolean): boolean => {
  const { valgtProsessSteg } = use(ProsessMenyContext);
  return beregnErAktiv(valgtProsessSteg, id, skalVisesIMeny, skalMarkeresSomAktiv);
};

export const useProsessMenyRegistrerer = (
  id: string,
  tekst: string,
  skalVisesIMeny: boolean,
  harÅpentAksjonspunkt: boolean,
  status: VilkårUtfallType,
  skalMarkeresSomAktiv: boolean,
) => {
  const { valgtProsessSteg, settProsessPanelMenyData } = use(ProsessMenyContext);

  const erAktiv = beregnErAktiv(valgtProsessSteg, id, skalVisesIMeny, skalMarkeresSomAktiv);

  useEffect(() => {
    settProsessPanelMenyData({
      id,
      tekst,
      erAktiv,
      harÅpentAksjonspunkt,
      status,
      skalVisesIMeny,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- oppdater menydata berre ved endra visningstilstand/status; id/tekst konstante, setter stabil
  }, [skalVisesIMeny, erAktiv, harÅpentAksjonspunkt, status]);

  return skalVisesIMeny && erAktiv;
};
