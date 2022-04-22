import { removeSpacesFromNumber } from '@navikt/ft-utils';
import faktaOmBeregningTilfelle from '@fpsak-frontend/kodeverk/src/faktaOmBeregningTilfelle';
import { Beregningsgrunnlag, FaktaOmBeregning } from '@fpsak-frontend/types';
import { FaktaBeregningTransformedValues } from '@fpsak-frontend/types-avklar-aksjonspunkter/src/fakta/BeregningFaktaAP';
import erAndelUtenReferanseOgGrunnlagHarAndelForSammeArbeidsgiverMedReferanse from './AvsluttetArbeidsforhold';
import { harFieldKunstigArbeidsforhold } from './KunstigArbeidsforhold';
import { harFieldLønnsendring } from './LonnsendringForm';
import { FaktaOmBeregningAksjonspunktValues } from '../../../../typer/FaktaBeregningTypes';
import { InntektTransformed } from '../../../../typer/FieldValues';

const transformValuesArbeidUtenInntektsmelding = (values: FaktaOmBeregningAksjonspunktValues,
  inntektVerdier: InntektTransformed[],
  faktaOmBeregning: FaktaOmBeregning,
  bg: Beregningsgrunnlag,
  fastsatteAndelsnr: number[]): FaktaBeregningTransformedValues => {
  const tilfeller = faktaOmBeregning.faktaOmBeregningTilfeller ? faktaOmBeregning.faktaOmBeregningTilfeller : [];

  if (!tilfeller.map((kode) => kode)
    .includes(faktaOmBeregningTilfelle.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING)
    && !tilfeller.map((kode) => kode)
      .includes(faktaOmBeregningTilfelle.VURDER_LONNSENDRING)) {
    return {};
  }
  if (inntektVerdier === null) {
    return {};
  }
  const arbeidUtenInntektsmelding = inntektVerdier
    .filter((field) => !fastsatteAndelsnr.includes(field.andelsnr))
    .filter((field) => erAndelUtenReferanseOgGrunnlagHarAndelForSammeArbeidsgiverMedReferanse(field, bg, field.arbeidsforholdId)
      || harFieldKunstigArbeidsforhold(field, bg)
      || harFieldLønnsendring(field, faktaOmBeregning, values));

  arbeidUtenInntektsmelding.forEach((field) => fastsatteAndelsnr.push(field.andelsnr));
  const fastsattInntekt = arbeidUtenInntektsmelding
    .map((field) => ({
      andelsnr: field.andelsnr,
      fastsattBeløp: removeSpacesFromNumber(field.fastsattBelop),
      inntektskategori: field.inntektskategori,
    }));
  if (fastsattInntekt.length > 0) {
    return ({
      faktaOmBeregningTilfeller: [faktaOmBeregningTilfelle.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING],
      fastsattUtenInntektsmelding: { andelListe: fastsattInntekt },
    });
  }
  return {};
};

export default transformValuesArbeidUtenInntektsmelding;
