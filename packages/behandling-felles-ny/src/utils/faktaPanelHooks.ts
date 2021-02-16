import {
  useEffect, useState,
} from 'react';

import FaktaPanelMenyData from '../types/FaktaPanelMenyData';

const useMenyRegistrerer = (
  registrerFaktaPanel: (data: FaktaPanelMenyData) => void,
  id: string,
  tekst: string,
  skalVisesImeny: boolean,
  erAktiv: boolean,
  harAksjonspunkt: boolean,
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
        harAksjonspunkt,
      });
      setPanelValgt(erAktiv);
    } else {
      registrerFaktaPanel({
        id,
      });
    }
  }, [skalVisesImeny, erAktiv, harAksjonspunkt]);

  return erPanelValgt;
};

const prosessPanelHooks = {
  useMenyRegistrerer,
};

export default prosessPanelHooks;
