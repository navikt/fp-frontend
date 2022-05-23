import opptjeningAktivitetType from '@fpsak-frontend/kodeverk/src/opptjeningAktivitetType';
import { Beregningsgrunnlag, BeregningsgrunnlagAndel } from '@fpsak-frontend/types';

export const besteberegninggrunnlag = {
  besteMåneder: [{
    fom: '2020-01-01',
    tom: '2020-01-31',
    inntekter: [
      {
        opptjeningAktivitetType: opptjeningAktivitetType.DAGPENGER,
        inntekt: 5531,
      },
      {
        opptjeningAktivitetType: opptjeningAktivitetType.ARBEID,
        arbeidsgiverId: '974652269',
        inntekt: 20000,
      },
    ],
  },
  {
    fom: '2020-02-01',
    tom: '2020-02-29',
    inntekter: [
      {
        opptjeningAktivitetType: opptjeningAktivitetType.DAGPENGER,
        inntekt: 5531,
      },
    ],
  },
  {
    fom: '2020-03-01',
    tom: '2020-03-31',
    inntekter: [
      {
        opptjeningAktivitetType: opptjeningAktivitetType.DAGPENGER,
        inntekt: 5531,
      },
      {
        opptjeningAktivitetType: opptjeningAktivitetType.ARBEID,
        arbeidsgiverId: '974652269',
        inntekt: 4321,
      },
      {
        opptjeningAktivitetType: opptjeningAktivitetType.DAGPENGER,
        inntekt: 354,
      },
      {
        opptjeningAktivitetType: opptjeningAktivitetType.ARBEID,
        arbeidsgiverId: '6823424234232',
        inntekt: 32894,
      },
    ],
  },
  {
    fom: '2020-04-01',
    tom: '2020-04-30',
    inntekter: [
      {
        opptjeningAktivitetType: opptjeningAktivitetType.DAGPENGER,
        inntekt: 5531,
      },
      {
        opptjeningAktivitetType: opptjeningAktivitetType.ARBEID,
        arbeidsgiverId: '974652269',
        inntekt: 25322,
      },
    ],
  },
  {
    fom: '2020-05-01',
    tom: '2020-05-31',
    inntekter: [
      {
        opptjeningAktivitetType: opptjeningAktivitetType.DAGPENGER,
        inntekt: 354,
      },
      {
        opptjeningAktivitetType: opptjeningAktivitetType.DAGPENGER,
        inntekt: 5531,
      },
    ],
  },
  {
    fom: '2020-06-01',
    tom: '2020-06-30',
    inntekter: [
      {
        opptjeningAktivitetType: opptjeningAktivitetType.DAGPENGER,
        inntekt: 5531,
      },
      {
        opptjeningAktivitetType: opptjeningAktivitetType.DAGPENGER,
        inntekt: 354,
      },
    ],
  },
  ],
};

export const beregningsgrunnlag = {
  skjaeringstidspunktBeregning: '2020-01-13',
  skjæringstidspunkt: '2020-01-13',
  aktivitetStatus: ['AT', 'DP'],
  beregningsgrunnlagPeriode: [{
    beregningsgrunnlagPeriodeFom: '2020-01-13',
    beregnetPrAar: 560000.00,
    bruttoPrAar: 750000.00,
    bruttoInkludertBortfaltNaturalytelsePrAar: 0,
    avkortetPrAar: 600000.00,
    redusertPrAar: 600000.00,
    periodeAarsaker: [],
    beregningsgrunnlagPrStatusOgAndel: [{
      aktivitetStatus: 'AT',
      beregningsperiodeFom: '2019-10-01',
      beregningsperiodeTom: '2019-12-31',
      beregnetPrAar: 360000.00,
      andelsnr: 1,
      besteberegningPrAar: 400000.00,
      inntektskategori: 'ARBEIDSTAKER',
      arbeidsforhold: {
        arbeidsgiverNavn: 'BEDRIFT AS',
        arbeidsgiverId: '974652269',
        startdato: '2019-02-03',
        opphoersdato: '2020-02-03',
        arbeidsforholdType: 'ARBEID',
        belopFraInntektsmeldingPrMnd: 30000.00,
        organisasjonstype: 'VIRKSOMHET',
      },
      fastsattAvSaksbehandler: false,
      lagtTilAvSaksbehandler: false,
      belopPrMndEtterAOrdningen: 10000.0000000000,
      belopPrAarEtterAOrdningen: 120000.000000000000,
      erTilkommetAndel: false,
      skalFastsetteGrunnlag: false,
    },
    {
      beregningsperiodeFom: '2019-10-01',
      beregningsperiodeTom: '2019-12-31',
      aktivitetStatus: 'DP',
      beregnetPrAar: 200000.00,
      andelsnr: 2,
      besteberegningPrAar: 350000.00,
      inntektskategori: 'DAGPENGER',
      fastsattAvSaksbehandler: false,
      lagtTilAvSaksbehandler: false,
      belopPrMndEtterAOrdningen: 10000.0000000000,
      belopPrAarEtterAOrdningen: 120000.000000000000,
      erTilkommetAndel: false,
      skalFastsetteGrunnlag: false,
    } as BeregningsgrunnlagAndel],
  }],
  ytelsesspesifiktGrunnlag: {
    besteberegninggrunnlag,
    ytelsetype: 'FP',
  },
  sammenligningsgrunnlagPrStatus: [],
  halvG: 49929.0,
  grunnbeløp: 99858,
  hjemmel: '-',
  årsinntektVisningstall: 0,
  dekningsgrad: 100,
  erOverstyrtInntekt: false,
} as Beregningsgrunnlag;
