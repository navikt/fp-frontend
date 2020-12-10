import React from 'react';

import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { FaktaPanelDef } from '@fpsak-frontend/behandling-felles';
import AktivitetskravFaktaIndex from '@fpsak-frontend/fakta-aktivitetskrav';
import { UttakKontrollerAktivitetskrav } from '@fpsak-frontend/types';

type Data = {
  uttakKontrollerAktivitetskrav: UttakKontrollerAktivitetskrav[];
}

class AktivitetskravFaktaPanelDef extends FaktaPanelDef {
  getUrlKode = () => faktaPanelCodes.AKTIVITETSKRAV

  getTekstKode = () => 'AktivitetskravInfoPanel.FaktaAktivitetskrav'

  getAksjonspunktKoder = () => [
    aksjonspunktCodes.KONTROLLER_AKTIVITETSKRAV,
  ]

  getKomponent = (props) => <AktivitetskravFaktaIndex {...props} />

  getOverstyrVisningAvKomponent = ({ uttakKontrollerAktivitetskrav }: Data) => !!uttakKontrollerAktivitetskrav

  getData = ({
    uttakKontrollerAktivitetskrav,
  }: Data) => ({
    uttakKontrollerAktivitetskrav,
  })
}

export default AktivitetskravFaktaPanelDef;
