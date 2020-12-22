import React from 'react';

import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import BesteberegningFaktaIndex from '@fpsak-frontend/fakta-besteberegning';
import { FaktaPanelDef } from '@fpsak-frontend/behandling-felles';

class BeregningFaktaPanelDef extends FaktaPanelDef {
  getUrlKode = () => faktaPanelCodes.BESTEBEREGNING

  getTekstKode = () => 'BesteberegningInfoPanel.Title'

  getAksjonspunktKoder = () => []

  getKomponent = (props) => <BesteberegningFaktaIndex {...props} />

  getOverstyrVisningAvKomponent = ({ beregningsgrunnlag }) => {
    if (beregningsgrunnlag) {
      return !!beregningsgrunnlag.ytelsesspesifiktGrunnlag && !!beregningsgrunnlag.ytelsesspesifiktGrunnlag.besteberegninggrunnlag;
    }
    return false;
  }

  getData = ({ beregningsgrunnlag, arbeidsgiverOpplysningerPerId }) => ({
    beregningsgrunnlag,
    arbeidsgiverOpplysninger: arbeidsgiverOpplysningerPerId,
  })
}

export default BeregningFaktaPanelDef;
