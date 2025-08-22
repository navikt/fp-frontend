import { OpptjeningAktivitetType } from '@navikt/fp-kodeverk';
import type { Beregningsgrunnlag, BeregningsgrunnlagAndel, Besteberegninggrunnlag } from '@navikt/fp-types';

const besteberegninggrunnlag: Besteberegninggrunnlag = {
  besteMåneder: [
    {
      fom: '2020-01-01',
      tom: '2020-01-31',
      inntekter: [
        {
          opptjeningAktivitetType: OpptjeningAktivitetType.DAGPENGER,
          inntekt: 5531,
        },
        {
          opptjeningAktivitetType: OpptjeningAktivitetType.ARBEID,
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
          opptjeningAktivitetType: OpptjeningAktivitetType.DAGPENGER,
          inntekt: 5531,
        },
      ],
    },
    {
      fom: '2020-03-01',
      tom: '2020-03-31',
      inntekter: [
        {
          opptjeningAktivitetType: OpptjeningAktivitetType.DAGPENGER,
          inntekt: 5531,
        },
        {
          opptjeningAktivitetType: OpptjeningAktivitetType.ARBEID,
          arbeidsgiverId: '974652269',
          inntekt: 4321,
        },
        {
          opptjeningAktivitetType: OpptjeningAktivitetType.DAGPENGER,
          inntekt: 354,
        },
        {
          opptjeningAktivitetType: OpptjeningAktivitetType.ARBEID,
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
          opptjeningAktivitetType: OpptjeningAktivitetType.DAGPENGER,
          inntekt: 5531,
        },
        {
          opptjeningAktivitetType: OpptjeningAktivitetType.ARBEID,
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
          opptjeningAktivitetType: OpptjeningAktivitetType.DAGPENGER,
          inntekt: 354,
        },
        {
          opptjeningAktivitetType: OpptjeningAktivitetType.DAGPENGER,
          inntekt: 5531,
        },
      ],
    },
    {
      fom: '2020-06-01',
      tom: '2020-06-30',
      inntekter: [
        {
          opptjeningAktivitetType: OpptjeningAktivitetType.DAGPENGER,
          inntekt: 5531,
        },
        {
          opptjeningAktivitetType: OpptjeningAktivitetType.DAGPENGER,
          inntekt: 354,
        },
      ],
    },
  ],
  avvik: 0,
};

export const beregningsgrunnlag: Beregningsgrunnlag = {
  avklaringsbehov: [],
  skjaeringstidspunktBeregning: '2020-01-13',
  aktivitetStatus: ['AT', 'DP'],
  beregningsgrunnlagPeriode: [
    {
      beregningsgrunnlagPeriodeFom: '2020-01-13',
      beregnetPrAar: 560000.0,
      bruttoPrAar: 750000.0,
      bruttoInkludertBortfaltNaturalytelsePrAar: 0,
      avkortetPrAar: 600000.0,
      redusertPrAar: 600000.0,
      periodeAarsaker: [],
      beregningsgrunnlagPrStatusOgAndel: [
        {
          aktivitetStatus: 'AT',
          beregningsperiodeFom: '2019-10-01',
          beregningsperiodeTom: '2019-12-31',
          beregnetPrAar: 360000.0,
          andelsnr: 1,
          besteberegningPrAar: 400000.0,
          inntektskategori: 'ARBEIDSTAKER',
          arbeidsforhold: {
            arbeidsgiverIdent: '974652269',
            startdato: '2019-02-03',
            opphoersdato: '2020-02-03',
            arbeidsforholdType: 'ARBEID',
            belopFraInntektsmeldingPrMnd: 30000.0,
            organisasjonstype: 'VIRKSOMHET',
          },
          lagtTilAvSaksbehandler: false,
          erTilkommetAndel: false,
          skalFastsetteGrunnlag: false,
        },
        {
          beregningsperiodeFom: '2019-10-01',
          beregningsperiodeTom: '2019-12-31',
          aktivitetStatus: 'DP',
          beregnetPrAar: 200000.0,
          andelsnr: 2,
          besteberegningPrAar: 350000.0,
          inntektskategori: 'DAGPENGER',
          fastsattAvSaksbehandler: false,
          lagtTilAvSaksbehandler: false,
          belopPrMndEtterAOrdningen: 10000.0,
          belopPrAarEtterAOrdningen: 120000.0,
          erTilkommetAndel: false,
          skalFastsetteGrunnlag: false,
        } as BeregningsgrunnlagAndel,
      ],
    },
  ],
  ytelsesspesifiktGrunnlag: {
    besteberegninggrunnlag,
    ytelsetype: 'FP',
  },
  sammenligningsgrunnlagPrStatus: [],
  grunnbeløp: 99858,
  dekningsgrad: 100,
  erOverstyrtInntekt: false,
};
