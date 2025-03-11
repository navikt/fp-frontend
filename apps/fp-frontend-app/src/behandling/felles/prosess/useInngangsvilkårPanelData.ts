import { useState } from 'react';

import type { InngangsvilkarPanelData } from '../typer/inngangsvilkarPanelData';

export const useInngangsvilkårPanelData = () => {
  const [inngangsvilkårPanelData, setInngangsvilkårPanelData] = useState<InngangsvilkarPanelData[]>([]);
  const settIngangsvilkårPanelData = (nyData: InngangsvilkarPanelData) => {
    setInngangsvilkårPanelData(oldData => {
      const newData = [...oldData];
      const index = newData.findIndex(d => d.id === nyData.id);
      if (index >= 0) {
        newData.splice(index, 1, nyData);
      } else {
        newData.push(nyData);
      }
      return newData;
    });
  };

  return {
    inngangsvilkårPanelData,
    settIngangsvilkårPanelData,
  };
};
