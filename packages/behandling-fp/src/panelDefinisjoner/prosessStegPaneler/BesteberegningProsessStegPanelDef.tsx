import React from 'react';

import BesteberegningProsessIndex from '@fpsak-frontend/prosess-besteberegning';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import { ProsessStegDef, ProsessStegPanelDef } from '@fpsak-frontend/behandling-felles';

class PanelDef extends ProsessStegPanelDef {
  getKomponent = (props) => <BesteberegningProsessIndex {...props} />

  getAksjonspunktKoder = () => []

  getVilkarKoder = () => []

  getOverstyrVisningAvKomponent = ({ beregningsgrunnlag }) => {
    if (beregningsgrunnlag) {
      return !!beregningsgrunnlag.ytelsesspesifiktGrunnlag && !!beregningsgrunnlag.ytelsesspesifiktGrunnlag.besteberegninggrunnlag;
    }
    return false;
  }

  getOverstyrtStatus = () => vilkarUtfallType.OPPFYLT

  getData = ({ beregningsgrunnlag, arbeidsgiverOpplysningerPerId }) => ({
    beregningsgrunnlag,
    arbeidsgiverOpplysninger: arbeidsgiverOpplysningerPerId,
  })
}

class BesteberegningProsessStegPanelDef extends ProsessStegDef {
  getUrlKode = () => prosessStegCodes.BESTEBEREGNING

  getTekstKode = () => 'Behandlingspunkt.Besteberegning'

  getPanelDefinisjoner = () => [new PanelDef()]
}

export default BesteberegningProsessStegPanelDef;
