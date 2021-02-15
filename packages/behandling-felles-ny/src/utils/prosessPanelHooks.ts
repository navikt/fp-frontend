import {
  useEffect, useState,
} from 'react';

import ProsessPanelMenyData from '../types/ProsessPanelMenyData';

const useMenyRegistrerer = (
  registrerFaktaPanel: (data: ProsessPanelMenyData) => void,
  id: string,
  tekst: string,
  skalVisesImeny: boolean,
  erAktiv: boolean,
  harApentAksjonspunkt: boolean,
  status: string,
) => {
  const [erPanelValgt, setPanelValgt] = useState(false);
  useEffect(() => {
    registrerFaktaPanel({
      id,
    });
  }, []);

  useEffect(() => {
    if (skalVisesImeny) {
      registrerFaktaPanel({
        id,
        tekst,
        erAktiv,
        harApentAksjonspunkt,
        status,
      });
      setPanelValgt(erAktiv);
    } else {
      registrerFaktaPanel({
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
