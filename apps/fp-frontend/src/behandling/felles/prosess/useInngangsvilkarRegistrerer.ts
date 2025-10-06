import { use, useEffect } from 'react';

import type { VilkarUtfallType } from '@navikt/fp-types';

import { InngangsvilkårPanelDataContext } from './InngangsvilkarDefaultInitWrapper';

export const useInngangsvilkarRegistrerer = (
  id: string,
  aksjonspunktTekst: string,
  skalVises: boolean,
  erAksjonspunktApent: boolean,
  status: VilkarUtfallType,
  erOverstyrt: boolean,
) => {
  const { settIngangsvilkårPanelData } = use(InngangsvilkårPanelDataContext);

  useEffect(() => {
    if (skalVises) {
      settIngangsvilkårPanelData({
        id,
        status,
        harÅpentAksjonspunkt: erOverstyrt || erAksjonspunktApent,
        aksjonspunktTekst: erOverstyrt || erAksjonspunktApent ? aksjonspunktTekst : undefined,
      });
    }
  }, [erAksjonspunktApent, skalVises, erOverstyrt]);
};
