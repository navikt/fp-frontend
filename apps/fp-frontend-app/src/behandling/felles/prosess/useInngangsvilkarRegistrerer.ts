import { useCallback, useEffect,useState } from 'react';

import { InngangsvilkarPanelData } from '../typer/inngangsvilkarPanelData';

export const useInngangsvilkarRegistrerer = (
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
