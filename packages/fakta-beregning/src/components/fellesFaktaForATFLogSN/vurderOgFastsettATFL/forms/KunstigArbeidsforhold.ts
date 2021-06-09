import organisasjonstyper from '@fpsak-frontend/kodeverk/src/organisasjonstype';
import faktaOmBeregningTilfelle from '@fpsak-frontend/kodeverk/src/faktaOmBeregningTilfelle';
import { Beregningsgrunnlag } from '@fpsak-frontend/types';
import { InntektTransformed } from '../../../../typer/FieldValues';

const harAndelKunstigArbeidsforhold = (andel) => andel.arbeidsforhold
&& andel.arbeidsforhold.organisasjonstype
&& andel.arbeidsforhold.organisasjonstype.kode === organisasjonstyper.KUNSTIG;

export const harKunstigArbeidsforhold = (tilfeller, beregningsgrunnlag) => {
  if (tilfeller.includes(faktaOmBeregningTilfelle.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING)) {
    return beregningsgrunnlag.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel
      .find(harAndelKunstigArbeidsforhold) !== undefined;
  }
  return false;
};

export const harFieldKunstigArbeidsforhold = (field: InntektTransformed,
  bg: Beregningsgrunnlag): boolean => bg.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel
  .find((andel) => (andel.andelsnr === field.andelsnr)
&& andel.arbeidsforhold
&& andel.arbeidsforhold.organisasjonstype
&& andel.arbeidsforhold.organisasjonstype.kode === organisasjonstyper.KUNSTIG) !== undefined;
