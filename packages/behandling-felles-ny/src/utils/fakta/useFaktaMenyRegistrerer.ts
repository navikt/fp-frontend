import {
  useEffect, useState,
} from 'react';

import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { usePrevious } from '@fpsak-frontend/shared-components';

import FaktaPanelMenyData from '../../types/faktaPanelMenyData';

const DEFAULT_PANEL_VALGT = 'default';

const useFaktaMenyRegistrerer = (
  registrerFaktaPanel: (data: FaktaPanelMenyData) => void,
  dataState: RestApiState,
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
      harHentetInitData: dataState === RestApiState.SUCCESS,
    });
  }, [dataState]);

  const erAktiv = valgtFaktaSteg === id
    || (harApneAksjonspunkter && valgtFaktaSteg === DEFAULT_PANEL_VALGT);

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
        setPanelValgt(erAktiv);
      } else if (!skalVisesImeny && forrigeSkalVisesIMeny) {
        registrerFaktaPanel({
          id,
          harHentetInitData: true,
        });
      }
    }
  }, [dataState, forrigeSkalVisesIMeny, skalVisesImeny, erAktiv, harApneAksjonspunkter]);

  return erPanelValgt;
};

export default useFaktaMenyRegistrerer;
