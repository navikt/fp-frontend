import React from 'react';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import ForeldelseProsessIndex from '@fpsak-frontend/prosess-foreldelse';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import aksjonspunktCodesTilbakekreving from '@fpsak-frontend/kodeverk/src/aksjonspunktCodesTilbakekreving';
import { getAlleMerknaderFraBeslutter, ProsessStegDef, ProsessStegPanelDef } from '@fpsak-frontend/behandling-felles';
import {
  Aksjonspunkt, Behandling, FeilutbetalingPerioderWrapper, Kodeverk,
} from '@fpsak-frontend/types';

interface Data {
  behandling: Behandling;
  aksjonspunkterForSteg: Aksjonspunkt[];
  perioderForeldelse: FeilutbetalingPerioderWrapper;
  fagsakKjønn: Kodeverk;
  beregnBelop: () => number;
}

class PanelDef extends ProsessStegPanelDef {
  getKomponent = (props) => <ForeldelseProsessIndex {...props} />

  getOverstyrVisningAvKomponent = () => true

  getOverstyrtStatus = ({ perioderForeldelse }) => (perioderForeldelse ? vilkarUtfallType.OPPFYLT : vilkarUtfallType.IKKE_VURDERT);

  getAksjonspunktKoder = () => [
    aksjonspunktCodesTilbakekreving.VURDER_FORELDELSE,
  ]

  getData = ({
    behandling, aksjonspunkterForSteg, perioderForeldelse, fagsakKjønn, beregnBelop,
  }: Data) => ({
    perioderForeldelse,
    beregnBelop,
    navBrukerKjonn: fagsakKjønn.kode,
    alleMerknaderFraBeslutter: getAlleMerknaderFraBeslutter(behandling, aksjonspunkterForSteg),
  })
}

class ForeldelseProsessStegPanelDef extends ProsessStegDef {
  getUrlKode = () => prosessStegCodes.FORELDELSE

  getTekstKode = () => 'Behandlingspunkt.Foreldelse'

  getPanelDefinisjoner = () => [new PanelDef()]
}

export default ForeldelseProsessStegPanelDef;
