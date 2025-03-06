import { use, useEffect } from 'react';

import { InngangsvilkårPanelDataContext } from './InngangsvilkarDefaultInitWrapper';

export const useInngangsvilkarRegistrerer = (
  id: string,
  aksjonspunktTekst: string,
  skalVises: boolean,
  erAksjonspunktApent: boolean,
  status: string,
  erOverstyrt: boolean,
) => {
  const { settIngangsvilkårPanelData } = use(InngangsvilkårPanelDataContext);

  useEffect(() => {
    if (skalVises) {
      settIngangsvilkårPanelData({
        id,
        status,
        harApentAksjonspunkt: erOverstyrt || erAksjonspunktApent,
        aksjonspunktTekst: erOverstyrt || erAksjonspunktApent ? aksjonspunktTekst : undefined,
      });
    }
  }, [erAksjonspunktApent, skalVises, erOverstyrt]);
};
