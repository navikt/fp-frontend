import {
  useEffect, useState,
} from 'react';

import ProsessPanelMenyData from '../types/prosessPanelMenyData';

const DEFAULT_PANEL_VALGT = 'default';

const useProsessMenyRegistrerer = (
  registrerProsessPanel: (data: ProsessPanelMenyData) => void,
  id: string,
  tekst: string,
  valgtProsessSteg: string,
  skalVisesImeny: boolean,
  harApentAksjonspunkt: boolean,
  status: string,
  erAktivTillegg = true,
) => {
  const [erPanelValgt, setPanelValgt] = useState(false);
  useEffect(() => {
    registrerProsessPanel({
      id,
    });
  }, []);

  const erAktiv = valgtProsessSteg === id
    || (erAktivTillegg && harApentAksjonspunkt && valgtProsessSteg === DEFAULT_PANEL_VALGT);

  useEffect(() => {
    if (skalVisesImeny) {
      registrerProsessPanel({
        id,
        tekst,
        erAktiv,
        harApentAksjonspunkt,
        status,
      });
      setPanelValgt(erAktiv);
    } else {
      registrerProsessPanel({
        id,
      });
    }
  }, [skalVisesImeny, erAktiv, harApentAksjonspunkt, status]);

  return erPanelValgt;
};

export default useProsessMenyRegistrerer;
