import { useState } from 'react';

export type FaktaPanelMedÅpentApInfo = {
  urlCode: string;
  text: string;
};

export type FaktaPanelMenyData = {
  id: string;
  tekst: string;
  erAktiv: boolean;
  harÅpentAksjonspunkt: boolean;
  skalVisesIMeny: boolean;
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

    setFaktaPanelMedÅpentApInfo?.(data.harÅpentAksjonspunkt ? { urlCode: data.id, text: data.tekst } : undefined);
  };

  return {
    faktaPanelMenyData: faktaPanelMenyData.filter(d => d.skalVisesIMeny),
    settFaktaPanelMenyData,
  };
};
