import { useState } from 'react';

import type { FaktaPanelMenyData } from '../typer/faktaPanelMenyData';

export type FaktaPanelInfo = {
  urlCode: string;
  text: string;
};

export const useFaktaMenyData = (setÅpentFaktaPanelInfo?: (panelData: FaktaPanelInfo | undefined) => void) => {
  const [faktaPanelMenyData, setFaktaPanelMenyData] = useState<FaktaPanelMenyData[]>([]);

  const settFaktaPanelMenyData = (data: FaktaPanelMenyData) => {
    setFaktaPanelMenyData(oldData => {
      const newData = [...oldData];
      const index = newData.findIndex(d => d.id === data.id);
      if (index >= 0) {
        newData.splice(index, 1, data);
      } else {
        newData.push(data);
      }
      return newData;
    });

    setÅpentFaktaPanelInfo?.(data.harApneAksjonspunkter ? { urlCode: data.id, text: data.tekst } : undefined);
  };

  return {
    faktaPanelMenyData,
    settFaktaPanelMenyData,
  };
};
