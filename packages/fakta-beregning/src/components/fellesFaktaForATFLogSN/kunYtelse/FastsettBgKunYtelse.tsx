import React from 'react';
import faktaOmBeregningTilfelle from '@fpsak-frontend/kodeverk/src/faktaOmBeregningTilfelle';
import {
  AndelForFaktaOmBeregning,
  ArbeidsgiverOpplysningerPerId,
  AlleKodeverk,
  KunYtelse,
} from '@fpsak-frontend/types';
import KunYtelsePanel from './KunYtelsePanel';
import {FaktaOmBeregningAksjonspunktValues, KunYtelseValues} from "../../../typer/FaktaBeregningTypes";

const { FASTSETT_BG_KUN_YTELSE, VURDER_BESTEBEREGNING } = faktaOmBeregningTilfelle;

export const setFaktaPanelForKunYtelse = (faktaPanels,
  tilfeller,
  readOnly,
  isAksjonspunktClosed,
  faktaOmBeregning,
  alleKodeverk) => {
  if (tilfeller.includes(FASTSETT_BG_KUN_YTELSE)) {
    faktaPanels.push(
      <React.Fragment key="FASTSETT_BG_KUN_YTELSE">
        <KunYtelsePanel
          readOnly={readOnly}
          isAksjonspunktClosed={isAksjonspunktClosed}
          faktaOmBeregning={faktaOmBeregning}
          alleKodeverk={alleKodeverk}
        />
      </React.Fragment>,
    );
  }
};

export const transformValuesForKunYtelse = (values, kunYtelse, tilfeller) => {
  if (tilfeller.includes(FASTSETT_BG_KUN_YTELSE)) {
    const kunYtelseTransformedValues = KunYtelsePanel.transformValues(values, kunYtelse);
    const faktaOmBeregningTilfeller = [FASTSETT_BG_KUN_YTELSE];
    if (kunYtelse.fodendeKvinneMedDP) {
      faktaOmBeregningTilfeller.push(VURDER_BESTEBEREGNING);
    }
    return {
      faktaOmBeregningTilfeller,
      ...kunYtelseTransformedValues,
    };
  }
  return {};
};

export const getKunYtelseValidation = (values: FaktaOmBeregningAksjonspunktValues, kunYtelse: KunYtelse, aktivertePaneler: string[]): any => {
  if (aktivertePaneler.includes(FASTSETT_BG_KUN_YTELSE)) {
    return KunYtelsePanel.validate(values, aktivertePaneler, kunYtelse);
  }
  return {};
};

export const buildInitialValuesKunYtelse = (kunYtelse: KunYtelse,
  tilfeller: string[],
  faktaOmBeregningAndeler: AndelForFaktaOmBeregning[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  alleKodeverk: AlleKodeverk): KunYtelseValues => {
  if (tilfeller && tilfeller.includes(FASTSETT_BG_KUN_YTELSE)) {
    return KunYtelsePanel.buildInitialValues(kunYtelse, faktaOmBeregningAndeler, arbeidsgiverOpplysningerPerId, alleKodeverk);
  }
  return {};
};
