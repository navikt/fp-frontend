import React from 'react';

import SokersOpplysningspliktVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-sokers-opplysningsplikt';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { ProsessStegDef, ProsessStegPanelDef } from '@fpsak-frontend/behandling-felles';
import { ArbeidsgiverOpplysningerPerId, Soknad } from '@fpsak-frontend/types';

type Data = {
  soknad: Soknad;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

class PanelDef extends ProsessStegPanelDef {
  getKomponent = (props) => <SokersOpplysningspliktVilkarProsessIndex {...props} />

  getOverstyrVisningAvKomponent = ({ vilkarForSteg }) => vilkarForSteg.length > 0

  getAksjonspunktKoder = () => [
    aksjonspunktCodes.SOKERS_OPPLYSNINGSPLIKT_OVST,
    aksjonspunktCodes.SOKERS_OPPLYSNINGSPLIKT_MANU,
  ]

  getAksjonspunktTekstkoder = () => [
    'SokersOpplysningspliktForm.UtfyllendeOpplysninger',
    'SokersOpplysningspliktForm.UtfyllendeOpplysninger',
  ]

  getVilkarKoder = () => [
    vilkarType.SOKERSOPPLYSNINGSPLIKT,
  ]

  getData = ({ soknad, arbeidsgiverOpplysningerPerId }: Data) => ({
    soknad,
    arbeidsgiverOpplysningerPerId,
  })
}

class OpplysningspliktProsessStegPanelDef extends ProsessStegDef {
  getUrlKode = () => prosessStegCodes.OPPLYSNINGSPLIKT

  getTekstKode = () => 'Behandlingspunkt.Opplysningsplikt'

  getPanelDefinisjoner = () => [new PanelDef()]
}

export default OpplysningspliktProsessStegPanelDef;
