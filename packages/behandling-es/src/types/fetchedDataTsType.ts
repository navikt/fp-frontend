import {
  BeregningsresultatEs, Aksjonspunkt, Vilkar, Soknad, InntektArbeidYtelse, SimuleringResultat,
} from '@fpsak-frontend/types';

interface FetchedData {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
  soknad: Soknad;
  inntektArbeidYtelse: InntektArbeidYtelse;
  simuleringResultat: SimuleringResultat;
  beregningresultatEngangsstonad: BeregningsresultatEs;
}

export default FetchedData;
