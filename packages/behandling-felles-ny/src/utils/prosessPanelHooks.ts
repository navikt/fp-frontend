import {
  useEffect, useState,
} from 'react';

import ProsessPanelMenyData from '../types/ProsessPanelMenyData';

const useMenyRegistrerer = (
  registrerProsessPanel: (data: ProsessPanelMenyData) => void,
  id: string,
  tekst: string,
  skalVisesImeny: boolean,
  erAktiv: boolean,
  harApentAksjonspunkt: boolean,
  status: string,
) => {
  const [erPanelValgt, setPanelValgt] = useState(false);
  useEffect(() => {
    registrerProsessPanel({
      id,
    });
  }, []);

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

const prosessPanelHooks = {
  useMenyRegistrerer,
};

export default prosessPanelHooks;
