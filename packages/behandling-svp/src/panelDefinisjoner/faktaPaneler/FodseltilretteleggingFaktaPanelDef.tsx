import React from 'react';

import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import FodselOgTilretteleggingFaktaIndex from '@fpsak-frontend/fakta-fodsel-og-tilrettelegging';
import { FaktaPanelDef } from '@fpsak-frontend/behandling-felles';

import { SvpBehandlingApiKeys } from '../../data/svpBehandlingApi';

class FodseltilretteleggingFaktaPanelDef extends FaktaPanelDef {
  getUrlKode = () => faktaPanelCodes.FODSELTILRETTELEGGING

  getTekstKode = () => 'FodselOgTilretteleggingInfoPanel.FaktaFodselOgTilrettelegging'

  getAksjonspunktKoder = () => [aksjonspunktCodes.FODSELTILRETTELEGGING]

  getEndepunkter = () => [SvpBehandlingApiKeys.SVANGERSKAPSPENGER_TILRETTELEGGING]

  getKomponent = (props) => <FodselOgTilretteleggingFaktaIndex {...props} />

  getData = ({ rettigheter, inntektArbeidYtelse }) => ({
    erOverstyrer: rettigheter.kanOverstyreAccess.isEnabled,
    inntektArbeidYtelse,
  })
}

export default FodseltilretteleggingFaktaPanelDef;
