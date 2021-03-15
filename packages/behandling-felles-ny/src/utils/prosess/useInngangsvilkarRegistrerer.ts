import { useState, useCallback, useEffect } from 'react';

import InngangsvilkarPanelData from '../../types/inngangsvilkarPanelData';

const useInngangsvilkarRegistrerer = (
  registrerInngangsvilkarPanel: (data: InngangsvilkarPanelData) => void,
  behandlingVersjon: number,
  id: string,
  aksjonspunktTekst: string,
  skalVises: boolean,
  erAksjonspunktApent: boolean,
  status: string,
) => {
  const [erOverstyrt, setOverstyrt] = useState(false);
  const toggleOverstyring = useCallback(() => setOverstyrt(!erOverstyrt), [erOverstyrt]);

  useEffect(() => {
    setOverstyrt(false);
  }, [behandlingVersjon]);

  useEffect(() => {
    if (skalVises) {
      registrerInngangsvilkarPanel({
        id,
        status,
        harApentAksjonspunkt: erOverstyrt || erAksjonspunktApent,
        aksjonspunktTekst: erOverstyrt || erAksjonspunktApent ? aksjonspunktTekst : undefined,
      });
    }
  }, [erAksjonspunktApent, skalVises, erOverstyrt]);

  return { erOverstyrt, toggleOverstyring };
};

export default useInngangsvilkarRegistrerer;
