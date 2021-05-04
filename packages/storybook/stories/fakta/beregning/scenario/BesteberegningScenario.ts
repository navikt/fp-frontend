import opptjeningAktivitetType from '@fpsak-frontend/kodeverk/src/opptjeningAktivitetType';

export const besteberegninggrunnlag = {
  besteMåneder: [{
    fom: '2020-01-01',
    tom: '2020-01-31',
    inntekter: [
      {
        opptjeningAktivitetType: { kode: opptjeningAktivitetType.DAGPENGER, kodeverk: 'OPPTJENING_AKTIVITET_TYPE' },
        inntekt: 5531,
      },
      {
        opptjeningAktivitetType: { kode: opptjeningAktivitetType.ARBEID, kodeverk: 'OPPTJENING_AKTIVITET_TYPE' },
        arbeidsgiverId: '910909088',
        inntekt: 20000,
      },
    ],
  },
  {
    fom: '2020-02-01',
    tom: '2020-02-29',
    inntekter: [
      {
        opptjeningAktivitetType: { kode: opptjeningAktivitetType.DAGPENGER, kodeverk: 'OPPTJENING_AKTIVITET_TYPE' },
        inntekt: 5531,
      },
    ],
  },
  {
    fom: '2020-03-01',
    tom: '2020-03-31',
    inntekter: [
      {
        opptjeningAktivitetType: { kode: opptjeningAktivitetType.DAGPENGER, kodeverk: 'OPPTJENING_AKTIVITET_TYPE' },
        inntekt: 5531,
      },
      {
        opptjeningAktivitetType: { kode: opptjeningAktivitetType.ARBEID, kodeverk: 'OPPTJENING_AKTIVITET_TYPE' },
        arbeidsgiverId: '910909088',
        inntekt: 4321,
      },
      {
        opptjeningAktivitetType: { kode: opptjeningAktivitetType.DAGPENGER, kodeverk: 'OPPTJENING_AKTIVITET_TYPE' },
        inntekt: 354,
      },
      {
        opptjeningAktivitetType: { kode: opptjeningAktivitetType.ARBEID, kodeverk: 'OPPTJENING_AKTIVITET_TYPE' },
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
        opptjeningAktivitetType: { kode: opptjeningAktivitetType.DAGPENGER, kodeverk: 'OPPTJENING_AKTIVITET_TYPE' },
        inntekt: 5531,
      },
      {
        opptjeningAktivitetType: { kode: opptjeningAktivitetType.ARBEID, kodeverk: 'OPPTJENING_AKTIVITET_TYPE' },
        arbeidsgiverId: '910909088',
        inntekt: 25322,
      },
    ],
  },
  {
    fom: '2020-05-01',
    tom: '2020-05-31',
    inntekter: [
      {
        opptjeningAktivitetType: { kode: opptjeningAktivitetType.DAGPENGER, kodeverk: 'OPPTJENING_AKTIVITET_TYPE' },
        inntekt: 354,
      },
      {
        opptjeningAktivitetType: { kode: opptjeningAktivitetType.DAGPENGER, kodeverk: 'OPPTJENING_AKTIVITET_TYPE' },
        inntekt: 5531,
      },
    ],
  },
  {
    fom: '2020-06-01',
    tom: '2020-06-30',
    inntekter: [
      {
        opptjeningAktivitetType: { kode: opptjeningAktivitetType.DAGPENGER, kodeverk: 'OPPTJENING_AKTIVITET_TYPE' },
        inntekt: 5531,
      },
      {
        opptjeningAktivitetType: { kode: opptjeningAktivitetType.DAGPENGER, kodeverk: 'OPPTJENING_AKTIVITET_TYPE' },
        inntekt: 354,
      },
    ],
  },
  ],
};

export const beregningsgrunnlag = {
  skjaeringstidspunktBeregning: '2020-01-13',
  skjæringstidspunkt: '2020-01-13',
  aktivitetStatus: [{ kode: 'AT', kodeverk: 'AKTIVITET_STATUS' }, { kode: 'DP', kodeverk: 'AKTIVITET_STATUS' }],
  beregningsgrunnlagPeriode: [{
    beregningsgrunnlagPeriodeFom: '2020-01-13',
    beregnetPrAar: 560000.00,
    bruttoPrAar: 750000.00,
    bruttoInkludertBortfaltNaturalytelsePrAar: 0,
    avkortetPrAar: 600000.00,
    redusertPrAar: 600000.00,
    periodeAarsaker: [],
    beregningsgrunnlagPrStatusOgAndel: [{
      beregningsgrunnlagFom: '2019-10-01',
      beregningsgrunnlagTom: '2019-12-31',
      aktivitetStatus: { kode: 'AT', kodeverk: 'AKTIVITET_STATUS' },
      beregningsperiodeFom: '2019-10-01',
      beregningsperiodeTom: '2019-12-31',
      beregnetPrAar: 360000.00,
      andelsnr: 1,
      besteberegningPrAar: 400000.00,
      inntektskategori: { kode: 'ARBEIDSTAKER', kodeverk: 'INNTEKTSKATEGORI' },
      arbeidsforhold: {
        arbeidsgiverNavn: 'BEDRIFT AS',
        arbeidsgiverId: '910909088',
        startdato: '2019-02-03',
        opphoersdato: '2020-02-03',
        arbeidsforholdType: { kode: 'ARBEID', kodeverk: 'OPPTJENING_AKTIVITET_TYPE' },
        belopFraInntektsmeldingPrMnd: 30000.00,
        organisasjonstype: { kode: 'VIRKSOMHET', kodeverk: 'ORGANISASJONSTYPE' },
      },
      fastsattAvSaksbehandler: false,
      lagtTilAvSaksbehandler: false,
      belopPrMndEtterAOrdningen: 10000.0000000000,
      belopPrAarEtterAOrdningen: 120000.000000000000,
      erTilkommetAndel: false,
      skalFastsetteGrunnlag: false,
    },
    {
      beregningsgrunnlagFom: '2019-10-01',
      beregningsgrunnlagTom: '2019-12-31',
      aktivitetStatus: { kode: 'DP', kodeverk: 'AKTIVITET_STATUS' },
      beregnetPrAar: 200000.00,
      andelsnr: 2,
      besteberegningPrAar: 350000.00,
      inntektskategori: { kode: 'DAGPENGER', kodeverk: 'INNTEKTSKATEGORI' },
      fastsattAvSaksbehandler: false,
      lagtTilAvSaksbehandler: false,
      belopPrMndEtterAOrdningen: 10000.0000000000,
      belopPrAarEtterAOrdningen: 120000.000000000000,
      erTilkommetAndel: false,
      skalFastsetteGrunnlag: false,
    }],
  }],
  ytelsesspesifiktGrunnlag: {
    besteberegninggrunnlag,
    ytelsetype: 'FP',
  },
  sammenligningsgrunnlagPrStatus: [],
  halvG: 49929.0,
  grunnbeløp: 99858,
  hjemmel: { kode: '-', kodeverk: 'BG_HJEMMEL' },
  årsinntektVisningstall: 0,
  dekningsgrad: 100,
};
