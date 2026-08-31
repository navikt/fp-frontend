import type { Beregningsgrunnlag } from '@navikt/fp-types';

export const beregningsgrunnlag: Beregningsgrunnlag = {
  avklaringsbehov: [
    {
      definisjon: 'FASTSETT_BG_AT_FL',
      status: 'UTFO',
      kanLoses: true,
      erTrukket: false,
      begrunnelse: 'fgnhfg',
      vurdertAv: 'S123456',
      vurdertTidspunkt: '2025-03-05T16:55:58.966',
    },
  ],
  skjaeringstidspunktBeregning: '2025-02-12',
  aktivitetStatus: ['AT_FL'],
  beregningsgrunnlagPeriode: [
    {
      beregningsgrunnlagPeriodeFom: '2025-02-12',
      beregningsgrunnlagPeriodeTom: '9999-12-31',
      beregnetPrAar: 360_000,
      bruttoPrAar: 360_000,
      bruttoInkludertBortfaltNaturalytelsePrAar: 360_000,
      periodeAarsaker: [],
      beregningsgrunnlagPrStatusOgAndel: [
        {
          dtoType: 'GENERELL',
          aktivitetStatus: 'AT',
          beregningsperiodeFom: '2024-11-01',
          beregningsperiodeTom: '2025-01-31',
          beregnetPrAar: 240_000,
          bruttoPrAar: 240_000,
          andelsnr: 2,
          inntektskategori: 'ARBEIDSTAKER',
          arbeidsforhold: {
            arbeidsgiverIdent: '992257822',
            startdato: '2024-03-05',
            arbeidsforholdId: 'c33a8ee0-84cb-4705-a249-40cf52b51b48',
            arbeidsforholdType: 'ARBEID',
            belopFraInntektsmeldingPrMnd: 20_000,
          },
          lagtTilAvSaksbehandler: false,
          erTilkommetAndel: false,
          skalFastsetteGrunnlag: true,
        },
        {
          dtoType: 'GENERELL',
          aktivitetStatus: 'FL',
          beregningsperiodeFom: '2024-11-01',
          beregningsperiodeTom: '2025-01-31',
          beregnetPrAar: 120_000,
          bruttoPrAar: 120_000,
          andelsnr: 1,
          inntektskategori: 'FRILANSER',
          arbeidsforhold: {
            arbeidsforholdType: 'FRILANS',
          },
          lagtTilAvSaksbehandler: false,
          erTilkommetAndel: false,
          skalFastsetteGrunnlag: true,
        },
      ],
    },
  ],
  sammenligningsgrunnlagPrStatus: [
    {
      sammenligningsgrunnlagFom: '2024-02-01',
      sammenligningsgrunnlagTom: '2025-01-31',
      rapportertPrAar: 560_000,
      avvikPromille: 357.1428571,
      avvikProsent: 35.71428571,
      sammenligningsgrunnlagType: 'SAMMENLIGNING_AT_FL',
      differanseBeregnet: -200_000,
    },
  ],
  grunnbeløp: 124_028,
  faktaOmBeregning: {
    avklarAktiviteter: {
      aktiviteterTomDatoMapping: [
        {
          tom: '2025-02-12',
          aktiviteter: [
            {
              fom: '2023-03-05',
              tom: '9999-12-31',
              arbeidsforholdType: 'FRILANS',
            },
            {
              arbeidsgiverIdent: '992257822',
              fom: '2024-03-05',
              tom: '9999-12-31',
              arbeidsforholdId: 'c33a8ee0-84cb-4705-a249-40cf52b51b48',
              arbeidsforholdType: 'ARBEID',
            },
          ],
        },
      ],
      skjæringstidspunkt: '',
    },
    andelerForFaktaOmBeregning: [
      {
        belopReadOnly: 10_000,
        fastsattBelop: 10_000,
        inntektskategori: 'FRILANSER',
        aktivitetStatus: 'FL',
        arbeidsforhold: {
          arbeidsforholdType: 'FRILANS',
        },
        andelsnr: 1,
        skalKunneEndreAktivitet: false,
        lagtTilAvSaksbehandler: false,
      },
      {
        belopReadOnly: 20_000,
        fastsattBelop: 20_000,
        inntektskategori: 'ARBEIDSTAKER',
        aktivitetStatus: 'AT',
        refusjonskrav: 41_666,
        arbeidsforhold: {
          arbeidsgiverIdent: '992257822',
          startdato: '2024-03-05',
          arbeidsforholdId: 'c33a8ee0-84cb-4705-a249-40cf52b51b48',
          arbeidsforholdType: 'ARBEID',
          belopFraInntektsmeldingPrMnd: 20_000,
        },
        andelsnr: 2,
        skalKunneEndreAktivitet: false,
        lagtTilAvSaksbehandler: false,
      },
    ],
  },
  dekningsgrad: 100,
  ytelsesspesifiktGrunnlag: {
    ytelsetype: 'FP',
    besteberegninggrunnlag: {
      besteMåneder: [
        {
          fom: '2024-03-01',
          tom: '2024-03-31',
          inntekter: [],
        },
        {
          fom: '2024-03-01',
          tom: '2024-03-31',
          inntekter: [],
        },
        {
          fom: '2024-03-01',
          tom: '2024-03-31',
          inntekter: [],
        },
        {
          fom: '2024-03-01',
          tom: '2024-03-31',
          inntekter: [],
        },
        {
          fom: '2024-03-01',
          tom: '2024-03-31',
          inntekter: [],
        },
        {
          fom: '2024-03-01',
          tom: '2024-03-31',
          inntekter: [],
        },
      ],
      avvik: 0,
    },
  },
  erOverstyrtInntekt: false,
  inntektsgrunnlag: {
    måneder: [
      {
        fom: '2024-09-01',
        tom: '2024-09-30',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 40_000,
          },
          {
            inntektAktivitetType: 'FRILANSINNTEKT',
            beløp: 10_000,
          },
        ],
      },
      {
        fom: '2024-12-01',
        tom: '2024-12-31',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 40_000,
          },
          {
            inntektAktivitetType: 'FRILANSINNTEKT',
            beløp: 10_000,
          },
        ],
      },
      {
        fom: '2025-01-01',
        tom: '2025-01-31',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 40_000,
          },
          {
            inntektAktivitetType: 'FRILANSINNTEKT',
            beløp: 10_000,
          },
        ],
      },
      {
        fom: '2024-11-01',
        tom: '2024-11-30',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 40_000,
          },
          {
            inntektAktivitetType: 'FRILANSINNTEKT',
            beløp: 10_000,
          },
        ],
      },
      {
        fom: '2024-10-01',
        tom: '2024-10-31',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 40_000,
          },
          {
            inntektAktivitetType: 'FRILANSINNTEKT',
            beløp: 10_000,
          },
        ],
      },
      {
        fom: '2024-08-01',
        tom: '2024-08-31',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 40_000,
          },
          {
            inntektAktivitetType: 'FRILANSINNTEKT',
            beløp: 10_000,
          },
        ],
      },
      {
        fom: '2024-07-01',
        tom: '2024-07-31',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 40_000,
          },
          {
            inntektAktivitetType: 'FRILANSINNTEKT',
            beløp: 10_000,
          },
        ],
      },
      {
        fom: '2024-06-01',
        tom: '2024-06-30',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 40_000,
          },
          {
            inntektAktivitetType: 'FRILANSINNTEKT',
            beløp: 10_000,
          },
        ],
      },
      {
        fom: '2024-05-01',
        tom: '2024-05-31',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 40_000,
          },
          {
            inntektAktivitetType: 'FRILANSINNTEKT',
            beløp: 10_000,
          },
        ],
      },
      {
        fom: '2024-04-01',
        tom: '2024-04-30',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 40_000,
          },
          {
            inntektAktivitetType: 'FRILANSINNTEKT',
            beløp: 10_000,
          },
        ],
      },
      {
        fom: '2024-03-01',
        tom: '2024-03-31',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 40_000,
          },
          {
            inntektAktivitetType: 'FRILANSINNTEKT',
            beløp: 10_000,
          },
        ],
      },
      {
        fom: '2024-02-01',
        tom: '2024-02-29',
        inntekter: [
          {
            inntektAktivitetType: 'FRILANSINNTEKT',
            beløp: 10_000,
          },
        ],
      },
    ],
    pgiGrunnlag: [],
    sammenligningsgrunnlagInntekter: [],
    beregningsgrunnlagInntekter: [],
  },
  skjæringstidspunkt: '',
  andelerMedGraderingUtenBG: [],
  forlengelseperioder: [],
};
