import {
  BeregningsresultatFp, Aksjonspunkt, Vilkar, Soknad, InntektArbeidYtelse,
  Beregningsgrunnlag, SimuleringResultat,
} from '@fpsak-frontend/types';

interface FetchedData {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
  soknad: Soknad;
  inntektArbeidYtelse: InntektArbeidYtelse;
  beregningresultatForeldrepenger: BeregningsresultatFp;
  beregningsgrunnlag: Beregningsgrunnlag;
  simuleringResultat: SimuleringResultat;
}

export default FetchedData;
