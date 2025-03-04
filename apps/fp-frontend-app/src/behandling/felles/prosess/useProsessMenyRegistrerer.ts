import { use, useEffect } from 'react';

import { ProsessMenyContext } from './ProsessMeny';

const DEFAULT_PANEL_VALGT = 'default';

export const useProsessMenyRegistrerer = (
  id: string,
  tekst: string,
  skalVisesImeny: boolean,
  harApentAksjonspunkt: boolean,
  status: string,
  skalMarkeresSomAktiv: boolean,
) => {
  const { valgtProsessSteg, settProsessPanelMenyData } = use(ProsessMenyContext);

  const erAktiv =
    skalVisesImeny && (valgtProsessSteg === id || (skalMarkeresSomAktiv && valgtProsessSteg === DEFAULT_PANEL_VALGT));

  useEffect(() => {
    settProsessPanelMenyData({
      id,
      tekst,
      erAktiv,
      harApentAksjonspunkt,
      status,
      skalVisesImeny,
    });
  }, [skalVisesImeny, erAktiv, harApentAksjonspunkt, status]);

  return skalVisesImeny && erAktiv;
};
