import {
  useEffect, useState,
} from 'react';

import FaktaPanelMenyData from '../../types/faktaPanelMenyData';

const DEFAULT_PANEL_VALGT = 'default';

const useFaktaMenyRegistrerer = (
  registrerFaktaPanel: (data: FaktaPanelMenyData) => void,
  id: string,
  tekst: string,
  valgtFaktaSteg: string,
  skalVisesImeny: boolean,
  harApneAksjonspunkter: boolean,
) => {
  const [erPanelValgt, setPanelValgt] = useState(false);
  useEffect(() => {
    registrerFaktaPanel({
      id,
    });
  }, []);

  const erAktiv = valgtFaktaSteg === id
    || (harApneAksjonspunkter && valgtFaktaSteg === DEFAULT_PANEL_VALGT);

  useEffect(() => {
    if (skalVisesImeny) {
      registrerFaktaPanel({
        id,
        tekst,
        erAktiv,
        harAksjonspunkt: harApneAksjonspunkter,
      });
      setPanelValgt(erAktiv);
    } else {
      registrerFaktaPanel({
        id,
      });
    }
  }, [skalVisesImeny, erAktiv, harApneAksjonspunkter]);

  return erPanelValgt;
};

export default useFaktaMenyRegistrerer;
