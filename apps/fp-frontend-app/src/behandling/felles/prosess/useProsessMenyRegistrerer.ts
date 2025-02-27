import { useEffect, useState } from 'react';

import type { ProsessPanelMenyData } from '../typer/prosessPanelMenyData';

const DEFAULT_PANEL_VALGT = 'default';

export const useProsessMenyRegistrerer = (
  settProsessPanelMenyData: (data: ProsessPanelMenyData) => void,
  id: string,
  tekst: string,
  skalVisesImeny: boolean,
  harApentAksjonspunkt: boolean,
  status: string,
  skalMarkeresSomAktiv: boolean,
  valgtProsessSteg?: string,
) => {
  const [erPanelValgt, setPanelValgt] = useState(false);

  const erAktiv =
    skalVisesImeny && (valgtProsessSteg === id || (skalMarkeresSomAktiv && valgtProsessSteg === DEFAULT_PANEL_VALGT));

  useEffect(() => {
    if (skalVisesImeny) {
      settProsessPanelMenyData({
        id,
        tekst,
        erAktiv,
        harApentAksjonspunkt,
        status,
      });
    }
    setPanelValgt(erAktiv);
  }, [skalVisesImeny, erAktiv, harApentAksjonspunkt, status]);

  return skalVisesImeny && erPanelValgt;
};
