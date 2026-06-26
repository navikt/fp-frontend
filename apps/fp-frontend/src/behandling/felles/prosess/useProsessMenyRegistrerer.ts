import { use, useEffect } from 'react';

import type { VilkårUtfallType } from '@navikt/fp-types';

import { ProsessMenyContext } from './ProsessMeny';

const DEFAULT_PANEL_VALGT = 'default';

export const useProsessMenyRegistrerer = (
  id: string,
  tekst: string,
  skalVisesIMeny: boolean,
  harÅpentAksjonspunkt: boolean,
  status: VilkårUtfallType,
  skalMarkeresSomAktiv: boolean,
) => {
  const { valgtProsessSteg, settProsessPanelMenyData } = use(ProsessMenyContext);

  const erAktiv =
    skalVisesIMeny && (valgtProsessSteg === id || (skalMarkeresSomAktiv && valgtProsessSteg === DEFAULT_PANEL_VALGT));

  useEffect(() => {
    settProsessPanelMenyData({
      id,
      tekst,
      erAktiv,
      harÅpentAksjonspunkt,
      status,
      skalVisesIMeny,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- skal kun oppdatere menydata når visningstilstand/status endrar seg; id/tekst er konstante for panelet og setter frå context er stabil
  }, [skalVisesIMeny, erAktiv, harÅpentAksjonspunkt, status]);

  return skalVisesIMeny && erAktiv;
};
