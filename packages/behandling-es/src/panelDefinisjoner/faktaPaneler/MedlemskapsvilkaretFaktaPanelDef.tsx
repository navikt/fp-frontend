import React from 'react';

import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import MedlemskapFaktaIndex from '@fpsak-frontend/fakta-medlemskap';
import { Rettigheter, readOnlyUtils, FaktaPanelDef } from '@fpsak-frontend/behandling-felles';
import {
  Behandling, Fagsak, InntektArbeidYtelse, Personopplysninger, Soknad,
} from '@fpsak-frontend/types';

import { EsBehandlingApiKeys } from '../../data/esBehandlingApi';

interface Data {
  fagsak: Fagsak;
  behandling: Behandling;
  hasFetchError: boolean;
  personopplysninger: Personopplysninger;
  soknad: Soknad;
  inntektArbeidYtelse: InntektArbeidYtelse;
  rettigheter: Rettigheter
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

  getEndepunkter = () => [EsBehandlingApiKeys.MEDLEMSKAP]

  getKomponent = (props) => <MedlemskapFaktaIndex {...props} />

  getOverstyrVisningAvKomponent = ({ personopplysninger, soknad }) => personopplysninger && soknad

  getData = ({
    fagsak, behandling, hasFetchError, personopplysninger, soknad, inntektArbeidYtelse, rettigheter,
  }: Data) => ({
    isForeldrepengerFagsak: false,
    fagsakPerson: fagsak.person,
    readOnlyForStartdatoForForeldrepenger: !rettigheter.writeAccess.isEnabled
      || hasFetchError
      || behandling.behandlingPaaVent
      || readOnlyUtils.harBehandlingReadOnlyStatus(behandling),
    personopplysninger,
    soknad,
    inntektArbeidYtelse,
  })
}

export default MedlemskapsvilkaretFaktaPanelDef;
