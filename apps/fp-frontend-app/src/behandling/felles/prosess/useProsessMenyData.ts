import { use, useState } from 'react';

import type { ProsessPanelMenyData } from '../typer/prosessPanelMenyData';
import { BehandlingDataContext } from '../utils/behandlingDataContext';

export const useProsessMenyData = (valgtFaktaSteg: string | undefined) => {
  const { oppdaterProsessStegOgFaktaPanelIUrl } = use(BehandlingDataContext);

  const [panelMenyData, setPanelMenyData] = useState<ProsessPanelMenyData[]>([]);

  const settProsessPanelMenyData = (data: ProsessPanelMenyData) => {
    setPanelMenyData(oldData => {
      const newData = [...oldData];
      const index = newData.findIndex(d => d.id === data.id);
      if (index >= 0) {
        newData.splice(index, 1, data);
      } else {
        newData.push(data);
      }
      return newData;
    });
  };

  const oppdaterProsessPanelUrl = (index: number) => {
    const panel = panelMenyData[index];
    const nyvalgtProsessSteg = panel.erAktiv ? undefined : panel.id;
    oppdaterProsessStegOgFaktaPanelIUrl(nyvalgtProsessSteg, valgtFaktaSteg);
  };

  return {
    prosessPanelMenyData: panelMenyData,
    oppdaterProsessPanelIUrl: oppdaterProsessPanelUrl,
    registrerProsessPanel: settProsessPanelMenyData,
  };
};
