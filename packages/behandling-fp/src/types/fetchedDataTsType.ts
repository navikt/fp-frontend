import {
  BeregningsresultatFp,
  Aksjonspunkt,
  Vilkar,
  Personopplysninger,
  Ytelsefordeling,
  Soknad,
  InntektArbeidYtelse,
  Beregningsgrunnlag,
  UttakStonadskontoer,
  UttaksresultatPeriode,
  SimuleringResultat,
  UttakKontrollerAktivitetskrav,
  Feriepengegrunnlag,
} from '@fpsak-frontend/types';

interface FetchedData {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
  personopplysninger: Personopplysninger;
  ytelsefordeling: Ytelsefordeling;
  soknad: Soknad;
  inntektArbeidYtelse: InntektArbeidYtelse;
  beregningresultatForeldrepenger: BeregningsresultatFp;
  beregningsgrunnlag: Beregningsgrunnlag;
  uttakStonadskontoer: UttakStonadskontoer;
  uttaksresultatPerioder: UttaksresultatPeriode[];
  simuleringResultat: SimuleringResultat;
  uttakKontrollerAktivitetskrav?: UttakKontrollerAktivitetskrav[];
  feriepengegrunnlag: Feriepengegrunnlag;
}

export default FetchedData;
