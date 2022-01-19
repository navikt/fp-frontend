import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { Normaltekst } from 'nav-frontend-typografi';
import { required } from '@fpsak-frontend/utils';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import faktaOmBeregningTilfelle from '@fpsak-frontend/kodeverk/src/faktaOmBeregningTilfelle';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import { Beregningsgrunnlag, BeregningsgrunnlagAndel, FaktaOmBeregning } from '@fpsak-frontend/types';
import { FaktaBeregningTransformedValues } from '@fpsak-frontend/types-avklar-aksjonspunkter/src/fakta/BeregningFaktaAP';
import { FaktaOmBeregningAksjonspunktValues, LønnsendringValues } from '../../../../typer/FaktaBeregningTypes';
import { InntektTransformed } from '../../../../typer/FieldValues';

/**
 * LonnsendringForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet VURDER_FAKTA_FOR_ATFL_SN for tilfelle VURDER_LØNNSENDRING som ber
 * bruker fastsette lønnsendring for en liste med arbeidsforhold.
 * Tilhørende tilfelle for å fastsette FL inntekt er FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING.
 * Denne komponenten kan vise intektstabell under radioknappene dersom skalViseInntektstabell er satt
 */

export const lonnsendringField = 'lonnsendringField';

type OwnProps = {
    readOnly: boolean;
    isAksjonspunktClosed: boolean;
};

interface StaticFunctions {
  buildInitialValues: (beregningsgrunnlag: Beregningsgrunnlag) => LønnsendringValues;
  transformValues: (values: FaktaOmBeregningAksjonspunktValues, faktaOmBeregning: FaktaOmBeregning) => FaktaBeregningTransformedValues;
}

const LonnsendringForm: FunctionComponent<OwnProps> & StaticFunctions = ({ readOnly, isAksjonspunktClosed }) => (
  <div>
    <Normaltekst>
      <FormattedMessage id="BeregningInfoPanel.VurderOgFastsettATFL.HarSokerEndring" />
    </Normaltekst>
    <VerticalSpacer eightPx />
    <RadioGroupField
      name={lonnsendringField}
      validate={[required]}
      readOnly={readOnly}
      isEdited={isAksjonspunktClosed}
    >
      <RadioOption label={<FormattedMessage id="BeregningInfoPanel.FormAlternativ.Ja" />} value />
      <RadioOption label={<FormattedMessage id="BeregningInfoPanel.FormAlternativ.Nei" />} value={false} />
    </RadioGroupField>
  </div>
);

const buildInitialLonnsendring = (alleATAndeler: BeregningsgrunnlagAndel[]): boolean | undefined => {
  const harSattLonnsendringTilTrue = alleATAndeler.find((andel) => andel.lonnsendringIBeregningsperioden === true) !== undefined;
  const harSattLonnsendringTilFalse = alleATAndeler.find((andel) => andel.lonnsendringIBeregningsperioden === false) !== undefined;
  return harSattLonnsendringTilTrue || (harSattLonnsendringTilFalse ? false : undefined);
};

LonnsendringForm.buildInitialValues = (beregningsgrunnlag: Beregningsgrunnlag): LønnsendringValues => {
  const initialValues = {};
  if (!beregningsgrunnlag || !beregningsgrunnlag.beregningsgrunnlagPeriode) {
    return initialValues;
  }
  const alleAndeler = beregningsgrunnlag.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel;
  if (!alleAndeler || alleAndeler.length < 1) {
    return initialValues;
  }
  const alleATAndeler = alleAndeler.filter((andel) => andel.aktivitetstatus === aktivitetStatus.ARBEIDSTAKER);
  if (!alleATAndeler || alleATAndeler.length < 1) {
    return initialValues;
  }
  initialValues[lonnsendringField] = buildInitialLonnsendring(alleATAndeler);
  return initialValues;
};

export const harFieldLønnsendring = (field: InntektTransformed,
  faktaOmBeregning: FaktaOmBeregning,
  values: FaktaOmBeregningAksjonspunktValues): boolean => values[lonnsendringField] && faktaOmBeregning.arbeidsforholdMedLønnsendringUtenIM
  .find((andel) => andel.andelsnr === field.andelsnr) !== undefined;

LonnsendringForm.transformValues = (values: FaktaOmBeregningAksjonspunktValues,
  faktaOmBeregning: FaktaOmBeregning): FaktaBeregningTransformedValues => {
  const tilfeller = faktaOmBeregning.faktaOmBeregningTilfeller ? faktaOmBeregning.faktaOmBeregningTilfeller : [];
  if (!tilfeller.map(({ kode }) => kode).includes(faktaOmBeregningTilfelle.VURDER_LONNSENDRING)) {
    return {};
  }
  return ({
    faktaOmBeregningTilfeller: [faktaOmBeregningTilfelle.VURDER_LONNSENDRING],
    vurdertLonnsendring: { erLønnsendringIBeregningsperioden: values[lonnsendringField] },
  });
};

export default LonnsendringForm;
