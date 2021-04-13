import {
  useEffect, useState,
} from 'react';

import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { usePrevious } from '@fpsak-frontend/shared-components';
import ProsessPanelMenyData from '../../types/prosessPanelMenyData';

const DEFAULT_PANEL_VALGT = 'default';

const useProsessMenyRegistrerer = (
  registrerProsessPanel: (data: ProsessPanelMenyData) => void,
  dataState: RestApiState,
  id: string,
  tekst: string,
  valgtProsessSteg: string,
  skalVisesImeny: boolean,
  harApentAksjonspunkt: boolean,
  status: string,
  skalMarkeresSomAktiv: boolean,
) => {
  const [erPanelValgt, setPanelValgt] = useState(false);
  useEffect(() => {
    registrerProsessPanel({
      id,
      harHentetInitData: dataState === RestApiState.SUCCESS,
    });
  }, [dataState]);

  const erAktiv = skalVisesImeny && (valgtProsessSteg === id || (skalMarkeresSomAktiv && valgtProsessSteg === DEFAULT_PANEL_VALGT));

  const forrigeSkalVisesIMeny = usePrevious(skalVisesImeny);

  useEffect(() => {
    if (dataState === RestApiState.SUCCESS) {
      if (skalVisesImeny) {
        registrerProsessPanel({
          id,
          tekst,
          erAktiv,
          harApentAksjonspunkt,
          status,
          harHentetInitData: true,
        });
      } else if (!skalVisesImeny && forrigeSkalVisesIMeny) {
        registrerProsessPanel({
          id,
          harHentetInitData: true,
        });
      }
      setPanelValgt(erAktiv);
    }
  }, [dataState, skalVisesImeny, forrigeSkalVisesIMeny, erAktiv, harApentAksjonspunkt, status]);

  return skalVisesImeny && erPanelValgt;
};

export default useProsessMenyRegistrerer;
