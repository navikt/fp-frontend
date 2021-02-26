import React from 'react';

import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import MedlemskapFaktaIndex from '@fpsak-frontend/fakta-medlemskap';
import { readOnlyUtils, FaktaPanelDef, Rettigheter } from '@fpsak-frontend/behandling-felles';
import {
  ArbeidsgiverOpplysningerPerId, Behandling, InntektArbeidYtelse, Soknad,
} from '@fpsak-frontend/types';

import { SvpBehandlingApiKeys } from '../../data/svpBehandlingApi';

interface Data {
  behandling: Behandling;
  hasFetchError: boolean;
  soknad: Soknad;
  inntektArbeidYtelse: InntektArbeidYtelse;
  rettigheter: Rettigheter;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

class MedlemskapsvilkaretFaktaPanelDef extends FaktaPanelDef {
  getUrlKode = () => faktaPanelCodes.MEDLEMSKAPSVILKARET

  getTekstKode = () => 'MedlemskapInfoPanel.Medlemskap'

  getAksjonspunktKoder = () => [
    aksjonspunktCodes.AVKLAR_STARTDATO_FOR_FORELDREPENGERPERIODEN,
    aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT,
    aksjonspunktCodes.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE,
    aksjonspunktCodes.AVKLAR_OPPHOLDSRETT,
    aksjonspunktCodes.AVKLAR_LOVLIG_OPPHOLD,
    aksjonspunktCodes.AVKLAR_FORTSATT_MEDLEMSKAP,
    aksjonspunktCodes.OVERSTYR_AVKLAR_STARTDATO,
  ]

  getEndepunkter = () => [SvpBehandlingApiKeys.MEDLEMSKAP]

  getKomponent = (props) => <MedlemskapFaktaIndex {...props} />

  getOverstyrVisningAvKomponent = ({ soknad }) => soknad

  getData = ({
    behandling, hasFetchError, soknad, inntektArbeidYtelse, rettigheter, arbeidsgiverOpplysningerPerId,
  }: Data) => ({
    soknad,
    inntektArbeidYtelse,
    isForeldrepengerFagsak: false,
    arbeidsgiverOpplysningerPerId,
    readOnlyForStartdatoForForeldrepenger: !rettigheter.writeAccess.isEnabled
      || hasFetchError
      || behandling.behandlingPaaVent
      || readOnlyUtils.harBehandlingReadOnlyStatus(behandling),
  })
}

export default MedlemskapsvilkaretFaktaPanelDef;
