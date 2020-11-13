import React from 'react';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import OpptjeningFaktaIndex from '@fpsak-frontend/fakta-opptjening';
import { FaktaPanelDef } from '@fpsak-frontend/behandling-felles';
import { ArbeidsgiverOpplysningerPerId } from '@fpsak-frontend/types';

import { SvpBehandlingApiKeys } from '../../data/svpBehandlingApi';

type Data = {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

class OpptjeningsvilkaretFaktaPanelDef extends FaktaPanelDef {
  getUrlKode = () => faktaPanelCodes.OPPTJENINGSVILKARET

  getTekstKode = () => 'OpptjeningInfoPanel.KontrollerFaktaForOpptjening'

  getAksjonspunktKoder = () => [aksjonspunktCodes.VURDER_PERIODER_MED_OPPTJENING];

  getEndepunkter = () => [SvpBehandlingApiKeys.OPPTJENING, SvpBehandlingApiKeys.UTLAND_DOK_STATUS]

  getKomponent = (props) => <OpptjeningFaktaIndex {...props} />

  getOverstyrVisningAvKomponent = ({ vilkar }) => vilkar.some((v) => v.vilkarType.kode === vilkarType.OPPTJENINGSVILKARET)
    && vilkar.some((v) => v.vilkarType.kode === vilkarType.MEDLEMSKAPSVILKARET && v.vilkarStatus.kode === vilkarUtfallType.OPPFYLT)

  getData = ({ arbeidsgiverOpplysningerPerId }): Data => ({
    arbeidsgiverOpplysningerPerId,
  })
}

export default OpptjeningsvilkaretFaktaPanelDef;
