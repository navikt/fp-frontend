import { use, useEffect } from 'react';

import { FaktaMenyContext } from './FaktaMeny';

const DEFAULT_PANEL_VALGT = 'default';

const beregnErAktiv = (
  valgtFaktaSteg: string | undefined,
  id: string,
  skalVisesIMeny: boolean,
  harÅpentAksjonspunkt: boolean,
): boolean =>
  skalVisesIMeny && (valgtFaktaSteg === id || (harÅpentAksjonspunkt && valgtFaktaSteg === DEFAULT_PANEL_VALGT));

/**
 * Lettvekts variant av {@link useFaktaMenyRegistrerer} som berre les kontekst og
 * returnerer om panelet er aktivt, utan sideeffekten som registrerer panelet i
 * menyen. Brukast av InitPanel-komponentar som treng å vite om panelet er
 * aktivt *før* dei sjølve kallar `useFaktaMenyRegistrerer` (t.d. for å avgjere
 * om tunge `useQuery`-kall skal vere `enabled`).
 */
export const useErFaktaPanelAktiv = (id: string, skalVisesIMeny: boolean, harÅpentAksjonspunkt: boolean): boolean => {
  const { valgtFaktaSteg } = use(FaktaMenyContext);
  return beregnErAktiv(valgtFaktaSteg, id, skalVisesIMeny, harÅpentAksjonspunkt);
};

export const useFaktaMenyRegistrerer = (
  id: string,
  tekst: string,
  skalVisesIMeny: boolean,
  harÅpentAksjonspunkt: boolean,
) => {
  const { valgtFaktaSteg, settFaktaPanelMenyData } = use(FaktaMenyContext);

  const erAktiv = beregnErAktiv(valgtFaktaSteg, id, skalVisesIMeny, harÅpentAksjonspunkt);

  useEffect(() => {
    settFaktaPanelMenyData({
      id,
      tekst,
      erAktiv,
      harÅpentAksjonspunkt,
      skalVisesIMeny,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- oppdater menydata berre ved endra visningstilstand; id/tekst er konstante, setter stabil
  }, [skalVisesIMeny, erAktiv, harÅpentAksjonspunkt]);

  return skalVisesIMeny && erAktiv;
};
