import { useState } from 'react';

import type { VilkårUtfallType } from '@navikt/fp-types';

export type ProsessPanelMenyData = {
  id: string;
  tekst: string;
  erAktiv: boolean;
  harÅpentAksjonspunkt: boolean;
  status: VilkårUtfallType;
  skalVisesIMeny: boolean;
};

export const useProsessPanelMenyData = () => {
  const [prosessPanelMenyData, setProsessPanelMenyData] = useState<ProsessPanelMenyData[]>([]);

  const settProsessPanelMenyData = (data: ProsessPanelMenyData) => {
    setProsessPanelMenyData(oldData => {
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

  return {
    prosessPanelMenyData: prosessPanelMenyData.filter(d => d.skalVisesIMeny),
    settProsessPanelMenyData,
  };
};
