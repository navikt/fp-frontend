import { useState } from 'react';

import type { FaktaPanelMenyData } from '../typer/faktaPanelMenyData';

export type FaktaPanelMedÅpentApInfo = {
  urlCode: string;
  text: string;
};

export const useFaktaPanelMenyData = (
  setFaktaPanelMedÅpentApInfo?: (faktaPanelMedÅpentApInfo: FaktaPanelMedÅpentApInfo | undefined) => void,
) => {
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

    setFaktaPanelMedÅpentApInfo?.(data.harApneAksjonspunkter ? { urlCode: data.id, text: data.tekst } : undefined);
  };

  return {
    faktaPanelMenyData: faktaPanelMenyData.filter(d => d.skalVisesImeny),
    settFaktaPanelMenyData,
  };
};
