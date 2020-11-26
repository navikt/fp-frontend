import React from 'react';

import aksjonspunktCodesTilbakekreving from '@fpsak-frontend/kodeverk/src/aksjonspunktCodesTilbakekreving';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import FeilutbetalingFaktaIndex from '@fpsak-frontend/fakta-feilutbetaling';
import { FaktaPanelDef } from '@fpsak-frontend/behandling-felles';
import { Fagsak, KodeverkMedNavn, FeilutbetalingFakta } from '@fpsak-frontend/types';

import { TilbakekrevingBehandlingApiKeys } from '../../data/tilbakekrevingBehandlingApi';

interface Data {
  feilutbetalingFakta: FeilutbetalingFakta,
  fagsak: Fagsak;
  fpsakKodeverk: {[key: string]: KodeverkMedNavn[]};
}

class FeilutbetalingFaktaPanelDef extends FaktaPanelDef {
  getUrlKode = () => faktaPanelCodes.FEILUTBETALING

  getTekstKode = () => 'TilbakekrevingFakta.FaktaFeilutbetaling'

  getAksjonspunktKoder = () => [aksjonspunktCodesTilbakekreving.AVKLAR_FAKTA_FOR_FEILUTBETALING]

  getKomponent = (props) => <FeilutbetalingFaktaIndex {...props} />

  getEndepunkter = () => [TilbakekrevingBehandlingApiKeys.FEILUTBETALING_AARSAK]

  getOverstyrVisningAvKomponent = ({ feilutbetalingFakta }) => !!feilutbetalingFakta

  getData = ({ feilutbetalingFakta, fagsak, fpsakKodeverk }: Data) => (
    { feilutbetalingFakta, fagsakYtelseTypeKode: fagsak.sakstype.kode, fpsakKodeverk }
  )
}

export default FeilutbetalingFaktaPanelDef;
