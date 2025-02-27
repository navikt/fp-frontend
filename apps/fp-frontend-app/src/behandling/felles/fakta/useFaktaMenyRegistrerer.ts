import { use, useEffect } from 'react';

import { FaktaMenyContext } from './FaktaMeny';

const DEFAULT_PANEL_VALGT = 'default';

export const useFaktaMenyRegistrerer = (
  id: string,
  tekst: string,
  skalVisesImeny: boolean,
  harApneAksjonspunkter: boolean,
) => {
  const { valgtFaktaSteg, settFaktaPanelMenyData } = use(FaktaMenyContext);

  const erAktiv =
    skalVisesImeny && (valgtFaktaSteg === id || (harApneAksjonspunkter && valgtFaktaSteg === DEFAULT_PANEL_VALGT));

  useEffect(() => {
    if (skalVisesImeny) {
      settFaktaPanelMenyData({
        id,
        tekst,
        erAktiv,
        harApneAksjonspunkter,
      });
    }
  }, [skalVisesImeny, erAktiv, harApneAksjonspunkter]);

  return skalVisesImeny && erAktiv;
};
