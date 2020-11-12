import React from 'react';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import AvregningProsessIndex from '@fpsak-frontend/prosess-avregning';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { ProsessStegDef, ProsessStegPanelDef } from '@fpsak-frontend/behandling-felles';
import { Fagsak, SimuleringResultat } from '@fpsak-frontend/types';

import { EsBehandlingApiKeys } from '../../data/esBehandlingApi';

interface Data {
  fagsak: Fagsak;
  previewFptilbakeCallback: (mottaker: string, brevmalkode: string, fritekst: string, saksnummer: number) => Promise<any>;
  simuleringResultat?: SimuleringResultat;
}

class PanelDef extends ProsessStegPanelDef {
  getKomponent = (props) => <AvregningProsessIndex {...props} />

  getAksjonspunktKoder = () => [
    aksjonspunktCodes.VURDER_FEILUTBETALING,
  ]

  getEndepunkter = () => [
    EsBehandlingApiKeys.TILBAKEKREVINGVALG,
  ]

  getOverstyrVisningAvKomponent = () => true

  getOverstyrtStatus = ({ simuleringResultat }) => (simuleringResultat ? vilkarUtfallType.OPPFYLT : vilkarUtfallType.IKKE_VURDERT)

  getData = ({
    fagsak, previewFptilbakeCallback, simuleringResultat,
  }: Data) => ({
    fagsak,
    previewFptilbakeCallback,
    simuleringResultat,
  })
}

class SimuleringProsessStegPanelDef extends ProsessStegDef {
  getUrlKode = () => prosessStegCodes.AVREGNING

  getTekstKode = () => 'Behandlingspunkt.Avregning'

  getPanelDefinisjoner = () => [new PanelDef()]
}

export default SimuleringProsessStegPanelDef;
