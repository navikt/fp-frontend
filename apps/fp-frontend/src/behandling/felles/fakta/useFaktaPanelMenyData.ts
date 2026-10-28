import { useEffect, useState } from 'react';

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
      if (index === -1) {
        newData.push(data);
      } else {
        newData.splice(index, 1, data);
      }
      return newData;
    });
  };

  const panelMedÅpentAp = faktaPanelMenyData.find(d => d.skalVisesIMeny && d.harÅpentAksjonspunkt);
  const åpentApUrlCode = panelMedÅpentAp?.id;
  const åpentApTekst = panelMedÅpentAp?.tekst;

  useEffect(() => {
    setFaktaPanelMedÅpentApInfo?.(
      åpentApUrlCode !== undefined && åpentApTekst !== undefined
        ? { urlCode: åpentApUrlCode, text: åpentApTekst }
        : undefined,
    );
  }, [åpentApUrlCode, åpentApTekst, setFaktaPanelMedÅpentApInfo]);

  return {
    faktaPanelMenyData: faktaPanelMenyData.filter(d => d.skalVisesIMeny),
    settFaktaPanelMenyData,
  };
};
