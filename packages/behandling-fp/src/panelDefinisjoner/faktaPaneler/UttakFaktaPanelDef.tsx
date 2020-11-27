import React from 'react';

import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import UttakFaktaIndex from '@fpsak-frontend/fakta-uttak';
import { FaktaPanelDef, Rettigheter } from '@fpsak-frontend/behandling-felles';
import { ArbeidsgiverOpplysningerPerId, Personopplysninger, Ytelsefordeling } from '@fpsak-frontend/types';

import { FpBehandlingApiKeys } from '../../data/fpBehandlingApi';

type Data = {
  rettigheter: Rettigheter;
  ytelsefordeling: Ytelsefordeling;
  personopplysninger: Personopplysninger;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

class UttakFaktaPanelDef extends FaktaPanelDef {
  getUrlKode = () => faktaPanelCodes.UTTAK

  getTekstKode = () => 'UttakInfoPanel.FaktaUttak'

  getAksjonspunktKoder = () => [
    aksjonspunktCodes.AVKLAR_UTTAK,
    aksjonspunktCodes.AVKLAR_FØRSTE_UTTAKSDATO,
    aksjonspunktCodes.ANNEN_FORELDER_IKKE_RETT_OG_LØPENDE_VEDTAK,
    aksjonspunktCodes.AVKLAR_ANNEN_FORELDER_RETT,
    aksjonspunktCodes.MANUELL_AVKLAR_FAKTA_UTTAK,
    aksjonspunktCodes.OVERSTYR_AVKLAR_FAKTA_UTTAK,
    aksjonspunktCodes.AVKLAR_FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET,
    aksjonspunktCodes.AVKLAR_FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG,
  ]

  getEndepunkter = () => [
    FpBehandlingApiKeys.UTTAK_KONTROLLER_FAKTA_PERIODER,
    FpBehandlingApiKeys.FAKTA_ARBEIDSFORHOLD,
    FpBehandlingApiKeys.FAMILIEHENDELSE,
  ]

  getKomponent = (props) => <UttakFaktaIndex {...props} />

  getOverstyrVisningAvKomponent = ({ personopplysninger, ytelsefordeling }) => ytelsefordeling
    && ytelsefordeling.endringsdato !== undefined
    && personopplysninger !== null
    && personopplysninger !== undefined

  getData = ({
    rettigheter, ytelsefordeling, personopplysninger, arbeidsgiverOpplysningerPerId,
  }: Data) => ({
    kanOverstyre: rettigheter.kanOverstyreAccess.isEnabled,
    ytelsefordeling,
    personopplysninger,
    arbeidsgiverOpplysningerPerId,
  })
}

export default UttakFaktaPanelDef;
