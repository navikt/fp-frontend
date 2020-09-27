import React from 'react';

import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import FormkravProsessIndex from '@fpsak-frontend/prosess-formkrav';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { ProsessStegDef, ProsessStegPanelDef } from '@fpsak-frontend/behandling-felles';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';

class PanelDef extends ProsessStegPanelDef {
  getKomponent = (props) => <FormkravProsessIndex {...props} />

  getAksjonspunktKoder = () => [
    aksjonspunktCodes.VURDERING_AV_FORMKRAV_KLAGE_KA,
  ]

  getOverstyrVisningAvKomponent = () => true

  getData = ({ alleBehandlinger, klageVurdering }) => ({
    avsluttedeBehandlinger: alleBehandlinger.filter((b) => b.status.kode === behandlingStatus.AVSLUTTET)
      .filter((b) => !b.behandlingHenlagt).filter((b) => b.type.kode !== behandlingType.KLAGE && b.type.kode !== behandlingType.ANKE),
    klageVurdering,
  })
}

class FormKravKlageInstansProsessStegPanelDef extends ProsessStegDef {
  getUrlKode = () => prosessStegCodes.FORMKRAV_KLAGE_NAV_KLAGEINSTANS

  getTekstKode = () => 'Behandlingspunkt.FormkravKlageKA'

  getPanelDefinisjoner = () => [new PanelDef()]
}

export default FormKravKlageInstansProsessStegPanelDef;
