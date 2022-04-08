import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { Normaltekst } from 'nav-frontend-typografi';
import { required } from '@fpsak-frontend/utils';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import faktaOmBeregningTilfelle from '@fpsak-frontend/kodeverk/src/faktaOmBeregningTilfelle';
import { Beregningsgrunnlag, FaktaOmBeregning } from '@fpsak-frontend/types';
import { FaktaBeregningTransformedValues } from '@fpsak-frontend/types-avklar-aksjonspunkter/src/fakta/BeregningFaktaAP';
import { InntektTransformed } from '../../../../typer/FieldValues';
import { FaktaOmBeregningAksjonspunktValues, NyoppstartetFLValues } from '../../../../typer/FaktaBeregningTypes';

/**
 * NyOppstartetFLForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet VURDER_FAKTA_FOR_ATFL_SN for tilfelle VURDER_NYOPPSTARTET_FL som ber
 * bruker bestemme om en søker er nyoppstartet frilanser med en radioknapp.
 * Tilhørende tilfelle for å fastsette FL inntekt er FASTSETT_MAANEDSINNTEKT_FL.
 * Denne komponenten kan vise intektstabell under radioknappene dersom skalViseInntektstabell er satt
 */

export const erNyoppstartetFLField = 'NyoppstartetFLField';

type OwnProps = {
    readOnly: boolean;
    isAksjonspunktClosed: boolean;
};

interface StaticFunctions {
  buildInitialValues: (beregningsgrunnlag: Beregningsgrunnlag) => NyoppstartetFLValues;
  transformValues: (values: FaktaOmBeregningAksjonspunktValues,
                    inntektPrMnd: InntektTransformed[],
                    faktaOmBeregning: FaktaOmBeregning,
                    fastsatteAndelsnr: number[]) => FaktaBeregningTransformedValues;
}

const NyoppstartetFLForm: FunctionComponent<OwnProps> & StaticFunctions = ({ readOnly, isAksjonspunktClosed }) => (
  <div>
    <Normaltekst>
      <FormattedMessage id="BeregningInfoPanel.VurderOgFastsettATFL.ErSokerNyoppstartetFL" />
    </Normaltekst>
    <VerticalSpacer eightPx />
    <RadioGroupField
      name={erNyoppstartetFLField}
      validate={[required]}
      readOnly={readOnly}
      isEdited={isAksjonspunktClosed}
    >
      <RadioOption label={<FormattedMessage id="BeregningInfoPanel.FormAlternativ.Ja" />} value />
      <RadioOption label={<FormattedMessage id="BeregningInfoPanel.FormAlternativ.Nei" />} value={false} />
    </RadioGroupField>
  </div>
);

NyoppstartetFLForm.buildInitialValues = (beregningsgrunnlag: Beregningsgrunnlag): NyoppstartetFLValues => {
  const initialValues = {};
  if (beregningsgrunnlag === undefined || beregningsgrunnlag.beregningsgrunnlagPeriode === undefined) {
    return initialValues;
  }
  const alleAndeler = beregningsgrunnlag.beregningsgrunnlagPeriode
    .map((periode) => periode.beregningsgrunnlagPrStatusOgAndel);
  const flAndeler = alleAndeler.flat().filter((andel) => andel.aktivitetStatus === aktivitetStatus.FRILANSER);
  if (flAndeler.length > 0) {
    initialValues[erNyoppstartetFLField] = flAndeler[0].erNyoppstartet;
  }
  return initialValues;
};

NyoppstartetFLForm.transformValues = (values: FaktaOmBeregningAksjonspunktValues,
  inntektPrMnd: InntektTransformed[],
  faktaOmBeregning: FaktaOmBeregning,
  fastsatteAndelsnr: number[]): FaktaBeregningTransformedValues => {
  const tilfeller = faktaOmBeregning.faktaOmBeregningTilfeller ? faktaOmBeregning.faktaOmBeregningTilfeller : [];
  if (!tilfeller.map((kode) => kode).includes(faktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL)) {
    return {};
  }
  if (!inntektPrMnd || inntektPrMnd.length === 0) {
    return ({
      faktaOmBeregningTilfeller: [faktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL],
      vurderNyoppstartetFL: { erNyoppstartetFL: values[erNyoppstartetFLField] },
    });
  }
  const frilansField = inntektPrMnd
    .find((field) => field.aktivitetStatus === aktivitetStatus.FRILANSER);
  if (!frilansField) {
    return ({
      faktaOmBeregningTilfeller: [faktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL],
      vurderNyoppstartetFL: { erNyoppstartetFL: values[erNyoppstartetFLField] },
    });
  }
  if (fastsatteAndelsnr.includes(frilansField.andelsnr)) {
    return ({
      faktaOmBeregningTilfeller: [faktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL],
      vurderNyoppstartetFL: { erNyoppstartetFL: values[erNyoppstartetFLField] },
    });
  }
  fastsatteAndelsnr.push(frilansField.andelsnr);
  const inntekt = {
    fastsettMaanedsinntektFL: { maanedsinntekt: frilansField.fastsattBelop },
  };
  return {
    faktaOmBeregningTilfeller: [faktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL, faktaOmBeregningTilfelle.FASTSETT_MAANEDSINNTEKT_FL],
    ...inntekt,
    vurderNyoppstartetFL: { erNyoppstartetFL: values[erNyoppstartetFLField] },
  };
};

export default NyoppstartetFLForm;
