import { useEffect, useState } from 'react';

import { usePrevious } from '@navikt/ft-ui-komponenter';
import ProsessPanelMenyData from '../typer/prosessPanelMenyData';

const DEFAULT_PANEL_VALGT = 'default';

const useProsessMenyRegistrerer = (
  registrerProsessPanel: (data: ProsessPanelMenyData) => void,
  id: string,
  tekst: string,
  skalVisesImeny: boolean,
  harApentAksjonspunkt: boolean,
  status: string,
  skalMarkeresSomAktiv: boolean,
  valgtProsessSteg?: string,
) => {
  const [erPanelValgt, setPanelValgt] = useState(false);
  useEffect(() => {
    registrerProsessPanel({
      id,
    });
  }, []);

  const erAktiv =
    skalVisesImeny && (valgtProsessSteg === id || (skalMarkeresSomAktiv && valgtProsessSteg === DEFAULT_PANEL_VALGT));

  const forrigeSkalVisesIMeny = usePrevious(skalVisesImeny);

  useEffect(() => {
    if (skalVisesImeny) {
      registrerProsessPanel({
        id,
        tekst,
        erAktiv,
        harApentAksjonspunkt,
        status,
      });
    } else if (!skalVisesImeny && forrigeSkalVisesIMeny) {
      registrerProsessPanel({
        id,
      });
    }
    setPanelValgt(erAktiv);
  }, [skalVisesImeny, forrigeSkalVisesIMeny, erAktiv, harApentAksjonspunkt, status]);

  return skalVisesImeny && erPanelValgt;
};

export default useProsessMenyRegistrerer;
