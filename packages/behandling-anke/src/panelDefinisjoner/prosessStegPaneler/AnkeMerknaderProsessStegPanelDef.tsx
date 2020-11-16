import React from 'react';

import AnkeTrygderettsbehandlingProsessIndex from '@fpsak-frontend/prosess-anke-trygderettsbehandling';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { ProsessStegDef, ProsessStegPanelDef } from '@fpsak-frontend/behandling-felles';

class PanelDef extends ProsessStegPanelDef {
  getKomponent = (props) => <AnkeTrygderettsbehandlingProsessIndex {...props} />

  getOverstyrVisningAvKomponent = () => true

  getAksjonspunktKoder = () => [
    aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE_MERKNADER,
    aksjonspunktCodes.AUTO_VENT_ANKE_MERKNADER_FRA_BRUKER,
  ]

  getData = ({
    ankeVurdering, previewCallback,
  }) => ({
    previewCallback,
    ankeVurdering,
  })
}

class AnkeMerknaderProsessStegPanelDef extends ProsessStegDef {
  getUrlKode = () => prosessStegCodes.ANKE_MERKNADER

  getTekstKode = () => 'Behandlingspunkt.AnkeMerknader'

  getPanelDefinisjoner = () => [new PanelDef()]
}

export default AnkeMerknaderProsessStegPanelDef;
