import React from 'react';

import TilbakekrevingProsessIndex from '@fpsak-frontend/prosess-tilbakekreving';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import { getAlleMerknaderFraBeslutter, ProsessStegDef, ProsessStegPanelDef } from '@fpsak-frontend/behandling-felles';
import aksjonspunktCodesTilbakekreving from '@fpsak-frontend/kodeverk/src/aksjonspunktCodesTilbakekreving';
import {
  Aksjonspunkt, Behandling, FeilutbetalingPerioderWrapper, Kodeverk,
} from '@fpsak-frontend/types';

import { TilbakekrevingBehandlingApiKeys } from '../../data/tilbakekrevingBehandlingApi';

interface Data {
  behandling: Behandling;
  aksjonspunkterForSteg: Aksjonspunkt[];
  perioderForeldelse: FeilutbetalingPerioderWrapper;
  fagsakKjønn: Kodeverk;
  beregnBelop: () => number;
}

class PanelDef extends ProsessStegPanelDef {
  getKomponent = (props) => <TilbakekrevingProsessIndex {...props} />

  getOverstyrVisningAvKomponent = () => true

  getAksjonspunktKoder = () => [
    aksjonspunktCodesTilbakekreving.VURDER_TILBAKEKREVING,
  ]

  getEndepunkter = () => [
    TilbakekrevingBehandlingApiKeys.VILKARVURDERINGSPERIODER,
    TilbakekrevingBehandlingApiKeys.VILKARVURDERING,
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

class TilbakekrevingProsessStegPanelDef extends ProsessStegDef {
  getUrlKode = () => prosessStegCodes.TILBAKEKREVING

  getTekstKode = () => 'Behandlingspunkt.Tilbakekreving'

  getPanelDefinisjoner = () => [new PanelDef()]
}

export default TilbakekrevingProsessStegPanelDef;
