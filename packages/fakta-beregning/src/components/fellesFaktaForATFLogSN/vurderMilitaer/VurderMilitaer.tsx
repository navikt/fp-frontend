import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';
import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { required } from '@fpsak-frontend/utils';
import { FaktaOmBeregning } from '@fpsak-frontend/types';
import {VurderMilitærValues} from "../../../typer/FaktaBeregningTypes";

/**
 * VurderMilitær
 *
 * Presentasjonskomponent. Setter opp fakta om beregning tilfelle VURDER_MILITAER som ber
 * saksbehandler bestemme om en søker har inntekt fra militær eller siviltjeneste.
 */
export const vurderMilitaerField = 'vurderMilitær';

type OwnProps = {
    readOnly: boolean;
    isAksjonspunktClosed: boolean;
};

interface StaticFunctions {
  buildInitialValues: (faktaOmBeregning: FaktaOmBeregning) => VurderMilitærValues;
  transformValues: (values: any) => any;
}

const VurderMilitaer: FunctionComponent<OwnProps> & StaticFunctions = ({ readOnly, isAksjonspunktClosed }) => (
  <div>
    <Normaltekst>
      <FormattedMessage id="BeregningInfoPanel.VurderMilitaer.HarSøkerMilitærinntekt" />
    </Normaltekst>
    <RadioGroupField
      name={vurderMilitaerField}
      validate={[required]}
      readOnly={readOnly}
      isEdited={isAksjonspunktClosed}
    >
      <RadioOption label={<FormattedMessage id="BeregningInfoPanel.FormAlternativ.Ja" />} value />
      <RadioOption label={<FormattedMessage id="BeregningInfoPanel.FormAlternativ.Nei" />} value={false} />
    </RadioGroupField>
  </div>
);

VurderMilitaer.buildInitialValues = (faktaOmBeregning: FaktaOmBeregning): VurderMilitærValues => {
  const initialValues = {};
  if (!faktaOmBeregning || !faktaOmBeregning.vurderMilitaer) {
    return initialValues;
  }
  initialValues[vurderMilitaerField] = faktaOmBeregning.vurderMilitaer.harMilitaer;
  return initialValues;
};

VurderMilitaer.transformValues = (values) => ({
  vurderMilitaer: { harMilitaer: values[vurderMilitaerField] },
});

export default VurderMilitaer;
