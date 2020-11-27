import React from 'react';

import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import FodselOgTilretteleggingFaktaIndex from '@fpsak-frontend/fakta-fodsel-og-tilrettelegging';
import { FaktaPanelDef, Rettigheter } from '@fpsak-frontend/behandling-felles';
import { ArbeidsgiverOpplysningerPerId, InntektArbeidYtelse } from '@fpsak-frontend/types';

import { SvpBehandlingApiKeys } from '../../data/svpBehandlingApi';

type Data = {
  rettigheter: Rettigheter;
  inntektArbeidYtelse: InntektArbeidYtelse;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

class FodseltilretteleggingFaktaPanelDef extends FaktaPanelDef {
  getUrlKode = () => faktaPanelCodes.FODSELTILRETTELEGGING

  getTekstKode = () => 'FodselOgTilretteleggingInfoPanel.FaktaFodselOgTilrettelegging'

  getAksjonspunktKoder = () => [aksjonspunktCodes.FODSELTILRETTELEGGING]

  getEndepunkter = () => [SvpBehandlingApiKeys.SVANGERSKAPSPENGER_TILRETTELEGGING]

  getKomponent = (props) => <FodselOgTilretteleggingFaktaIndex {...props} />

  getData = ({ rettigheter, inntektArbeidYtelse, arbeidsgiverOpplysningerPerId }: Data) => ({
    erOverstyrer: rettigheter.kanOverstyreAccess.isEnabled,
    inntektArbeidYtelse,
    arbeidsgiverOpplysningerPerId,
  })
}

export default FodseltilretteleggingFaktaPanelDef;
