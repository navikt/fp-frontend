import React from 'react';

import VarselOmRevurderingProsessIndex from '@fpsak-frontend/prosess-varsel-om-revurdering';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { ProsessStegDef, ProsessStegPanelDef } from '@fpsak-frontend/behandling-felles';

import { FpBehandlingApiKeys } from '../../data/fpBehandlingApi';

class PanelDef extends ProsessStegPanelDef {
  getKomponent = (props) => <VarselOmRevurderingProsessIndex {...props} />

  getAksjonspunktKoder = () => [
    aksjonspunktCodes.VARSEL_REVURDERING_MANUELL,
    aksjonspunktCodes.VARSEL_REVURDERING_ETTERKONTROLL,
  ]

  getEndepunkter = () => [
    FpBehandlingApiKeys.FAMILIEHENDELSE,
    FpBehandlingApiKeys.FAMILIEHENDELSE_ORIGINAL_BEHANDLING,
    FpBehandlingApiKeys.SOKNAD_ORIGINAL_BEHANDLING,
  ]

  getData = ({ previewCallback, soknad }) => ({
    previewCallback,
    soknad,
  })
}

class VarselProsessStegPanelDef extends ProsessStegDef {
  getUrlKode = () => prosessStegCodes.VARSEL

  getTekstKode = () => 'Behandlingspunkt.CheckVarselRevurdering'

  getPanelDefinisjoner = () => [new PanelDef()]
}

export default VarselProsessStegPanelDef;
