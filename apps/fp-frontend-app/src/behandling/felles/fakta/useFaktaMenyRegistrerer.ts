import { useEffect, useState } from 'react';

import { usePrevious } from '@navikt/ft-ui-komponenter';

import FaktaPanelMenyData from '../typer/faktaPanelMenyData';

const DEFAULT_PANEL_VALGT = 'default';

const useFaktaMenyRegistrerer = (
  registrerFaktaPanel: (data: FaktaPanelMenyData) => void,
  id: string,
  tekst: string,
  skalVisesImeny: boolean,
  harApneAksjonspunkter: boolean,
  valgtFaktaSteg?: string,
) => {
  const [erPanelValgt, setPanelValgt] = useState(false);
  useEffect(() => {
    registrerFaktaPanel({
      id,
    });
  }, []);

  const erAktiv =
    skalVisesImeny && (valgtFaktaSteg === id || (harApneAksjonspunkter && valgtFaktaSteg === DEFAULT_PANEL_VALGT));

  const forrigeSkalVisesIMeny = usePrevious(skalVisesImeny);

  useEffect(() => {
    if (skalVisesImeny) {
      registrerFaktaPanel({
        id,
        tekst,
        erAktiv,
        harApneAksjonspunkter,
      });
    } else if (!skalVisesImeny && forrigeSkalVisesIMeny) {
      registrerFaktaPanel({
        id,
      });
    }
    setPanelValgt(erAktiv);
  }, [forrigeSkalVisesIMeny, skalVisesImeny, erAktiv, harApneAksjonspunkter]);

  return skalVisesImeny && erPanelValgt;
};

export default useFaktaMenyRegistrerer;
