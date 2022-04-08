import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { required } from '@fpsak-frontend/utils';
import OAType from '@fpsak-frontend/kodeverk/src/opptjeningAktivitetType';
import faktaOmBeregningTilfelle from '@fpsak-frontend/kodeverk/src/faktaOmBeregningTilfelle';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import 'core-js/features/array/flat-map';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { Normaltekst } from 'nav-frontend-typografi';
import { Beregningsgrunnlag, FaktaOmBeregning } from '@fpsak-frontend/types';
import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';
import { FaktaBeregningTransformedValues } from '@fpsak-frontend/types-avklar-aksjonspunkter/src/fakta/BeregningFaktaAP';
import { InntektTransformed } from '../../../../typer/FieldValues';
import {
  FaktaOmBeregningAksjonspunktValues,
  VurderEtterlønnSluttpakkeValues,
} from '../../../../typer/FaktaBeregningTypes';

/**
 * VurderEtterlønnSluttpakkeForm
 *
 * Presentasjonskomponent. Setter opp fakta om beregning tilfelle VURDER_ETTERLØNN_SLUTTPAKKE som ber
 * saksbehandler bestemme om en søker har inntekt fra etterlønn eller sluttpakke.
 */
export const harEtterlonnSluttpakkeField = 'vurderEtterlønnSluttpakke';

type OwnProps = {
    readOnly: boolean;
    isAksjonspunktClosed: boolean;
};

interface StaticFunctions {
  buildInitialValues: (beregningsgrunnlag: Beregningsgrunnlag, faktaAksjonspunkt: Aksjonspunkt) => VurderEtterlønnSluttpakkeValues;
  transformValues: (values: FaktaOmBeregningAksjonspunktValues,
                    inntektPrMnd: InntektTransformed[],
                    faktaOmBeregning: FaktaOmBeregning,
                    fastsatteAndelsnr: number[]) => FaktaBeregningTransformedValues;
}

const VurderEtterlonnSluttpakkeForm: FunctionComponent<OwnProps> & StaticFunctions = ({ readOnly, isAksjonspunktClosed }) => (
  <div>
    <Normaltekst>
      <FormattedMessage id="BeregningInfoPanel.EtterlønnSluttpakke.HarSøkerInntekt" />
    </Normaltekst>
    <VerticalSpacer eightPx />
    <RadioGroupField
      name={harEtterlonnSluttpakkeField}
      validate={[required]}
      readOnly={readOnly}
      isEdited={isAksjonspunktClosed}
    >
      <RadioOption label={<FormattedMessage id="BeregningInfoPanel.FormAlternativ.Ja" />} value />
      <RadioOption label={<FormattedMessage id="BeregningInfoPanel.FormAlternativ.Nei" />} value={false} />
    </RadioGroupField>
  </div>
);

VurderEtterlonnSluttpakkeForm.buildInitialValues = (beregningsgrunnlag: Beregningsgrunnlag,
  faktaAksjonspunkt: Aksjonspunkt): VurderEtterlønnSluttpakkeValues => {
  const initialValues = {};
  if (!beregningsgrunnlag || !beregningsgrunnlag.beregningsgrunnlagPeriode || !faktaAksjonspunkt) {
    return {};
  }
  const apErTidligereLost = !isAksjonspunktOpen(faktaAksjonspunkt.status);
  const relevanteAndeler = beregningsgrunnlag.beregningsgrunnlagPeriode
    .flatMap((periode) => periode.beregningsgrunnlagPrStatusOgAndel)
    .filter(({ arbeidsforhold }) => arbeidsforhold
  && arbeidsforhold.arbeidsforholdType === OAType.ETTERLONN_SLUTTPAKKE);
  if (relevanteAndeler.length > 0) {
    initialValues[harEtterlonnSluttpakkeField] = apErTidligereLost ? relevanteAndeler[0].beregnetPrAar > 0 : undefined;
  }
  return initialValues;
};

const finnEtterlønnSluttpakkeAndelNr = (faktaOmBeregning: FaktaOmBeregning): number | undefined => {
  if (!faktaOmBeregning.andelerForFaktaOmBeregning) {
    return undefined;
  }
  const etterlønnSluttpakkeAndel = faktaOmBeregning.andelerForFaktaOmBeregning
    .find((andel) => andel.arbeidsforhold && andel.arbeidsforhold.arbeidsforholdType
    && andel.arbeidsforhold.arbeidsforholdType === OAType.ETTERLONN_SLUTTPAKKE);

  return etterlønnSluttpakkeAndel ? etterlønnSluttpakkeAndel.andelsnr : undefined;
};

VurderEtterlonnSluttpakkeForm.transformValues = (values: FaktaOmBeregningAksjonspunktValues,
  inntektPrMnd: InntektTransformed[],
  faktaOmBeregning: FaktaOmBeregning,
  fastsatteAndelsnr: number[]): FaktaBeregningTransformedValues => {
  const tilfeller = faktaOmBeregning.faktaOmBeregningTilfeller ? faktaOmBeregning.faktaOmBeregningTilfeller : [];
  if (!tilfeller.includes(faktaOmBeregningTilfelle.VURDER_ETTERLONN_SLUTTPAKKE)) {
    return {};
  }
  if (!inntektPrMnd || inntektPrMnd.length === 0) {
    return ({
      faktaOmBeregningTilfeller: [faktaOmBeregningTilfelle.VURDER_ETTERLONN_SLUTTPAKKE],
      vurderEtterlønnSluttpakke: { erEtterlønnSluttpakke: values[harEtterlonnSluttpakkeField] },
    });
  }
  const etterlønnSluttpakkeAndelsnr = finnEtterlønnSluttpakkeAndelNr(faktaOmBeregning);
  if (!etterlønnSluttpakkeAndelsnr) {
    return {};
  }
  const etterlonnSluttpakkeField = inntektPrMnd
    .find((field) => field.andelsnr === etterlønnSluttpakkeAndelsnr);
  if (!etterlonnSluttpakkeField) {
    return ({
      faktaOmBeregningTilfeller: [faktaOmBeregningTilfelle.VURDER_ETTERLONN_SLUTTPAKKE],
      vurderEtterlønnSluttpakke: { erEtterlønnSluttpakke: values[harEtterlonnSluttpakkeField] },
    });
  }
  if (fastsatteAndelsnr.includes(etterlonnSluttpakkeField.andelsnr)) {
    return ({
      faktaOmBeregningTilfeller: [faktaOmBeregningTilfelle.VURDER_ETTERLONN_SLUTTPAKKE],
      vurderEtterlønnSluttpakke: { erEtterlønnSluttpakke: values[harEtterlonnSluttpakkeField] },
    });
  }
  fastsatteAndelsnr.push(etterlonnSluttpakkeField.andelsnr);
  const inntekt = {
    fastsettEtterlønnSluttpakke: { fastsattPrMnd: etterlonnSluttpakkeField.fastsattBelop },
  };
  return {
    faktaOmBeregningTilfeller: [faktaOmBeregningTilfelle.VURDER_ETTERLONN_SLUTTPAKKE, faktaOmBeregningTilfelle.FASTSETT_ETTERLONN_SLUTTPAKKE],
    ...inntekt,
    vurderEtterlønnSluttpakke: { erEtterlønnSluttpakke: values[harEtterlonnSluttpakkeField] },
  };
};

export default VurderEtterlonnSluttpakkeForm;
