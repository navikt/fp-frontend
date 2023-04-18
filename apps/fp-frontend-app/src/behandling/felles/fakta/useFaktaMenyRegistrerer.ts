import { useEffect, useState } from 'react';

import { RestApiState } from '@navikt/fp-rest-api-hooks';
import { usePrevious } from '@navikt/ft-ui-komponenter';

import FaktaPanelMenyData from '../typer/faktaPanelMenyData';

const DEFAULT_PANEL_VALGT = 'default';

const useFaktaMenyRegistrerer = (
  registrerFaktaPanel: (data: FaktaPanelMenyData) => void,
  dataState: RestApiState,
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
      harHentetInitData: dataState === RestApiState.SUCCESS,
    });
  }, [dataState]);

  const erAktiv =
    skalVisesImeny && (valgtFaktaSteg === id || (harApneAksjonspunkter && valgtFaktaSteg === DEFAULT_PANEL_VALGT));

  const forrigeSkalVisesIMeny = usePrevious(skalVisesImeny);

  useEffect(() => {
    if (dataState === RestApiState.SUCCESS) {
      if (skalVisesImeny) {
        registrerFaktaPanel({
          id,
          tekst,
          erAktiv,
          harApneAksjonspunkter,
          harHentetInitData: true,
        });
      } else if (!skalVisesImeny && forrigeSkalVisesIMeny) {
        registrerFaktaPanel({
          id,
          harHentetInitData: true,
        });
      }
      setPanelValgt(erAktiv);
    }
  }, [dataState, forrigeSkalVisesIMeny, skalVisesImeny, erAktiv, harApneAksjonspunkter]);

  return skalVisesImeny && erPanelValgt;
};

export default useFaktaMenyRegistrerer;
