import { use, useEffect } from 'react';

import { FaktaMenyContext } from './FaktaMeny';

const DEFAULT_PANEL_VALGT = 'default';

export const useFaktaMenyRegistrerer = (
  id: string,
  tekst: string,
  skalVisesIMeny: boolean,
  harÅpentAksjonspunkt: boolean,
) => {
  const { valgtFaktaSteg, settFaktaPanelMenyData } = use(FaktaMenyContext);

  const erAktiv =
    skalVisesIMeny && (valgtFaktaSteg === id || (harÅpentAksjonspunkt && valgtFaktaSteg === DEFAULT_PANEL_VALGT));

  useEffect(() => {
    settFaktaPanelMenyData({
      id,
      tekst,
      erAktiv,
      harÅpentAksjonspunkt,
      skalVisesIMeny,
    });
  }, [skalVisesIMeny, erAktiv, harÅpentAksjonspunkt]);

  return skalVisesIMeny && erAktiv;
};
