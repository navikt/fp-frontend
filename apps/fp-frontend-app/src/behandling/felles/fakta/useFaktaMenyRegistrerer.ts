import { use, useEffect, useState } from 'react';

import { FaktaMenyContext } from './FaktaMeny';

const DEFAULT_PANEL_VALGT = 'default';

export const useFaktaMenyRegistrerer = (
  id: string,
  tekst: string,
  skalVisesImeny: boolean,
  harApneAksjonspunkter: boolean,
) => {
  const { valgtFaktaSteg, registrerFaktaPanel } = use(FaktaMenyContext);

  const [erPanelValgt, setPanelValgt] = useState(false);

  const erAktiv =
    skalVisesImeny && (valgtFaktaSteg === id || (harApneAksjonspunkter && valgtFaktaSteg === DEFAULT_PANEL_VALGT));

  useEffect(() => {
    if (skalVisesImeny) {
      registrerFaktaPanel({
        id,
        tekst,
        erAktiv,
        harApneAksjonspunkter,
      });
    }
    setPanelValgt(erAktiv);
  }, [skalVisesImeny, erAktiv, harApneAksjonspunkter]);

  return skalVisesImeny && erPanelValgt;
};
