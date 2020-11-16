import React from 'react';

import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import MedlemskapFaktaIndex from '@fpsak-frontend/fakta-medlemskap';
import { readOnlyUtils, FaktaPanelDef, Rettigheter } from '@fpsak-frontend/behandling-felles';
import {
  Behandling, FagsakPerson, InntektArbeidYtelse, Personopplysninger, Soknad,
} from '@fpsak-frontend/types';

import { FpBehandlingApiKeys } from '../../data/fpBehandlingApi';

interface Data {
  fagsakPerson: FagsakPerson;
  behandling: Behandling;
  hasFetchError: boolean;
  personopplysninger: Personopplysninger;
  soknad: Soknad;
  inntektArbeidYtelse: InntektArbeidYtelse;
  rettigheter: Rettigheter;
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

  getEndepunkter = () => [FpBehandlingApiKeys.MEDLEMSKAP]

  getKomponent = (props) => <MedlemskapFaktaIndex {...props} />

  getOverstyrVisningAvKomponent = ({ personopplysninger, soknad }) => personopplysninger && soknad

  getData = ({
    fagsakPerson, behandling, hasFetchError, soknad, personopplysninger, inntektArbeidYtelse, rettigheter,
  }: Data) => ({
    isForeldrepengerFagsak: true,
    fagsakPerson,
    readOnlyForStartdatoForForeldrepenger: !rettigheter.writeAccess.isEnabled
    || hasFetchError
    || behandling.behandlingPaaVent
    || readOnlyUtils.harBehandlingReadOnlyStatus(behandling),
    soknad,
    personopplysninger,
    inntektArbeidYtelse,
  })
}

export default MedlemskapsvilkaretFaktaPanelDef;
