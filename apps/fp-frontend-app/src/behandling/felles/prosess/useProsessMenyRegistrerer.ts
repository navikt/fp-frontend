import { use, useEffect } from 'react';

import { ProsessMenyContext } from './ProsessMeny';

const DEFAULT_PANEL_VALGT = 'default';

export const useProsessMenyRegistrerer = (
  id: string,
  tekst: string,
  skalVisesIMeny: boolean,
  harÅpentAksjonspunkt: boolean,
  status: string,
  skalMarkeresSomAktiv: boolean,
) => {
  const { valgtProsessSteg, settProsessPanelMenyData } = use(ProsessMenyContext);

  const erAktiv =
    skalVisesIMeny && (valgtProsessSteg === id || (skalMarkeresSomAktiv && valgtProsessSteg === DEFAULT_PANEL_VALGT));

  useEffect(() => {
    settProsessPanelMenyData({
      id,
      tekst,
      erAktiv,
      harÅpentAksjonspunkt,
      status,
      skalVisesIMeny,
    });
  }, [skalVisesIMeny, erAktiv, harÅpentAksjonspunkt, status]);

  return skalVisesIMeny && erAktiv;
};
