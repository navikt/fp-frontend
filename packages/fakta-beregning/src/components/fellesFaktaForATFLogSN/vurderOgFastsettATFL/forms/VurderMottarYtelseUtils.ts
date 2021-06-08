import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import { ArbeidstakerUtenIMAndel, Beregningsgrunnlag, VurderMottarYtelse } from '@fpsak-frontend/types';
import { AndelMottarYtelseMap } from '../../../../typer/AndelMottarYtelseMap';
import { FaktaOmBeregningAksjonspunktValues } from '../../../../typer/FaktaBeregningTypes';

export const mottarYtelseFieldPrefix = 'mottarYtelseField';
export const frilansSuffix = '_frilans';
export const utledArbeidsforholdFieldName = (andel: ArbeidstakerUtenIMAndel): string => mottarYtelseFieldPrefix + andel.andelsnr;
export const finnFrilansFieldName = (): string => (mottarYtelseFieldPrefix + frilansSuffix);

export const skalFastsetteInntektATUtenInntektsmelding = (values: FaktaOmBeregningAksjonspunktValues, vurderMottarYtelse: VurderMottarYtelse): boolean => {
  const atAndelerUtenIM = vurderMottarYtelse && vurderMottarYtelse.arbeidstakerAndelerUtenIM ? vurderMottarYtelse.arbeidstakerAndelerUtenIM : [];
  return atAndelerUtenIM.map((andel) => values.vurderMottarYtelseValues[utledArbeidsforholdFieldName(andel)])
    .find((mottarYtelse) => mottarYtelse) !== undefined;
};

export const frilansMottarYtelse = (values: FaktaOmBeregningAksjonspunktValues): boolean => (values.vurderMottarYtelseValues[finnFrilansFieldName()]);

export const andelsnrMottarYtelseMap = (values: FaktaOmBeregningAksjonspunktValues,
  vurderMottarYtelse: VurderMottarYtelse,
  beregningsgrunnlag: Beregningsgrunnlag): AndelMottarYtelseMap => {
  if (!vurderMottarYtelse) {
    return {};
  }
  const mottarYtelseMap = {};
  const atAndelerUtenIM = vurderMottarYtelse.arbeidstakerAndelerUtenIM ? vurderMottarYtelse.arbeidstakerAndelerUtenIM : [];
  atAndelerUtenIM.forEach((andel) => {
    const mottarYtelse = values.vurderMottarYtelseValues[utledArbeidsforholdFieldName(andel)];
    mottarYtelseMap[andel.andelsnr] = mottarYtelse;
  });
  if (!beregningsgrunnlag) {
    return mottarYtelseMap;
  }
  const frilansAndel = beregningsgrunnlag.beregningsgrunnlagPeriode[0]
    .beregningsgrunnlagPrStatusOgAndel
    .find((andel) => andel.aktivitetStatus.kode === aktivitetStatus.FRILANSER);
  if (frilansAndel) {
    mottarYtelseMap[frilansAndel.andelsnr] = frilansMottarYtelse(values);
  }
  return mottarYtelseMap;
};

export const harVurdertMottarYtelse = (values: FaktaOmBeregningAksjonspunktValues, vurderMottarYtelse: VurderMottarYtelse): boolean => {
  if (vurderMottarYtelse.erFrilans) {
    const flMottarYtelse = frilansMottarYtelse(values);
    if (flMottarYtelse === undefined || flMottarYtelse === null) {
      return false;
    }
  }
  const atAndelerUtenIM = vurderMottarYtelse.arbeidstakerAndelerUtenIM ? vurderMottarYtelse.arbeidstakerAndelerUtenIM : [];
  if (atAndelerUtenIM.length > 0) {
    const harAndelSomIkkeErVurdert = atAndelerUtenIM.map((andel) => values.vurderMottarYtelseValues[utledArbeidsforholdFieldName(andel)])
      .some((mottarYtelse) => mottarYtelse === undefined || mottarYtelse === null);
    if (harAndelSomIkkeErVurdert) {
      return false;
    }
  }
  return true;
};
