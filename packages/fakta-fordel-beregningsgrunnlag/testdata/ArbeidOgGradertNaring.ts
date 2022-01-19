import { Beregningsgrunnlag, BeregningsgrunnlagAndel, FordelBeregningsgrunnlagAndel } from '@fpsak-frontend/types';

export const beregningsgrunnlag = {
  skjaeringstidspunktBeregning: '2019-03-05',
  skjæringstidspunkt: '2019-03-05',
  aktivitetStatus: ['AT_SN'],
  beregningsgrunnlagPeriode: [{
    beregningsgrunnlagPeriodeFom: '2019-03-05',
    beregningsgrunnlagPeriodeTom: '2019-11-03',
    beregnetPrAar: 663552.0,
    bruttoPrAar: 663552.0,
    bruttoInkludertBortfaltNaturalytelsePrAar: 663552.0,
    periodeAarsaker: [],
    dagsats: 0,
    beregningsgrunnlagPrStatusOgAndel: [{
      dtoType: 'GENERELL',
      beregningsgrunnlagTom: '2019-02-28',
      beregningsgrunnlagFom: '2018-12-01',
      aktivitetStatus: 'AT',
      beregningsperiodeFom: '2018-12-01',
      beregningsperiodeTom: '2019-02-28',
      beregnetPrAar: 663552.0,
      bruttoPrAar: 663552.0,
      andelsnr: 1,
      inntektskategori: 'ARBEIDSTAKER',
      arbeidsforhold: {
        arbeidsgiverIdent: '123456789',
        arbeidsgiverIdVisning: '123456789',
        startdato: '2017-03-01',
        arbeidsforholdType: 'ARBEID',
        refusjonPrAar: 0.0,
        belopFraInntektsmeldingPrMnd: 55296,
      },
      fastsattAvSaksbehandler: false,
      lagtTilAvSaksbehandler: false,
      belopPrMndEtterAOrdningen: 40877.6666666667,
      belopPrAarEtterAOrdningen: 490532.0,
      erTilkommetAndel: false,
      skalFastsetteGrunnlag: false,
    }, {
      dtoType: 'SN',
      beregningsgrunnlagTom: '2017-12-31',
      beregningsgrunnlagFom: '2015-01-01',
      aktivitetStatus: 'SN',
      beregningsperiodeFom: '2015-01-01',
      beregningsperiodeTom: '2017-12-31',
      beregnetPrAar: 0.0,
      overstyrtPrAar: 0.0,
      bruttoPrAar: 0.0,
      andelsnr: 2,
      inntektskategori: 'SELVSTENDIG_NÆRINGSDRIVENDE',
      arbeidsforhold: {
        arbeidsforholdType: 'NÆRING',
      },
      fastsattAvSaksbehandler: false,
      lagtTilAvSaksbehandler: false,
      dagsats: 0,
      erTilkommetAndel: false,
      skalFastsetteGrunnlag: true,
      pgiSnitt: 403557,
      pgiVerdier: [{
        beløp: 494006,
        årstall: 2017,
      }, {
        beløp: 384757,
        årstall: 2016,
      }, {
        beløp: 331908,
        årstall: 2015,
      }],
      næringer: [{
        orgnr: '991561692',
        erVarigEndret: true,
        erNyoppstartet: false,
        virksomhetType: 'ANNEN',
        endringsdato: '2017-01-01',
        kanRegnskapsførerKontaktes: false,
        erNyIArbeidslivet: false,
        oppgittInntekt: 24425,
      }],
    }],
  }, {
    beregningsgrunnlagPeriodeFom: '2019-11-04',
    beregningsgrunnlagPeriodeTom: '2019-12-09',
    beregnetPrAar: 663552.0,
    bruttoPrAar: 663552.0,
    bruttoInkludertBortfaltNaturalytelsePrAar: 663552.0,
    periodeAarsaker: ['GRADERING'],
    dagsats: 0,
    beregningsgrunnlagPrStatusOgAndel: [{
      dtoType: 'GENERELL',
      beregningsgrunnlagTom: '2019-02-28',
      beregningsgrunnlagFom: '2018-12-01',
      aktivitetStatus: 'AT',
      beregningsperiodeFom: '2018-12-01',
      beregningsperiodeTom: '2019-02-28',
      beregnetPrAar: 663552.0,
      bruttoPrAar: 663552.0,
      andelsnr: 1,
      inntektskategori: 'ARBEIDSTAKER',
      arbeidsforhold: {
        arbeidsgiverIdent: '123456789',
        arbeidsgiverIdVisning: '123456789',
        startdato: '2017-03-01',
        arbeidsforholdType: 'ARBEID',
        refusjonPrAar: 0.0,
        belopFraInntektsmeldingPrMnd: 55296,
      },
      fastsattAvSaksbehandler: false,
      lagtTilAvSaksbehandler: false,
      belopPrMndEtterAOrdningen: 40877.6666666667,
      belopPrAarEtterAOrdningen: 490532.0,
      erTilkommetAndel: false,
      skalFastsetteGrunnlag: false,
    }, {
      aktivitetStatus: 'SN',
      beregningsperiodeFom: '2015-01-01',
      beregningsperiodeTom: '2017-12-31',
      beregnetPrAar: 0.0,
      overstyrtPrAar: 0.0,
      bruttoPrAar: 0.0,
      andelsnr: 2,
      inntektskategori: 'SELVSTENDIG_NÆRINGSDRIVENDE',
      arbeidsforhold: {
        arbeidsforholdType: 'NÆRING',
      },
      fastsattAvSaksbehandler: false,
      lagtTilAvSaksbehandler: false,
      dagsats: 0,
      erTilkommetAndel: false,
      skalFastsetteGrunnlag: true,
      pgiSnitt: 403557,
      pgiVerdier: [{
        beløp: 494006,
        årstall: 2017,
      }, {
        beløp: 384757,
        årstall: 2016,
      }, {
        beløp: 331908,
        årstall: 2015,
      }],
      næringer: [{
        orgnr: '991561692',
        erVarigEndret: true,
        erNyoppstartet: false,
        virksomhetType: 'ANNEN',
        endringsdato: '2017-01-01',
        kanRegnskapsførerKontaktes: false,
        erNyIArbeidslivet: false,
        oppgittInntekt: 24425,
      }],
    } as BeregningsgrunnlagAndel],
  }, {
    beregningsgrunnlagPeriodeFom: '2019-12-10',
    beregningsgrunnlagPeriodeTom: '9999-12-31',
    beregnetPrAar: 663552.0,
    bruttoPrAar: 663552.0,
    bruttoInkludertBortfaltNaturalytelsePrAar: 663552.0,
    periodeAarsaker: ['GRADERING_OPPHØRER'],
    dagsats: 0,
    beregningsgrunnlagPrStatusOgAndel: [{
      dtoType: 'GENERELL',
      beregningsgrunnlagTom: '2019-02-28',
      beregningsgrunnlagFom: '2018-12-01',
      aktivitetStatus: 'AT',
      beregningsperiodeFom: '2018-12-01',
      beregningsperiodeTom: '2019-02-28',
      beregnetPrAar: 663552.0,
      bruttoPrAar: 663552.0,
      andelsnr: 1,
      inntektskategori: 'ARBEIDSTAKER',
      arbeidsforhold: {
        arbeidsgiverIdent: '123456789',
        arbeidsgiverIdVisning: '123456789',
        startdato: '2017-03-01',
        arbeidsforholdType: 'ARBEID',
        refusjonPrAar: 0.0,
        belopFraInntektsmeldingPrMnd: 55296,
      },
      fastsattAvSaksbehandler: false,
      lagtTilAvSaksbehandler: false,
      belopPrMndEtterAOrdningen: 40877.6666666667,
      belopPrAarEtterAOrdningen: 490532.0,
      erTilkommetAndel: false,
      skalFastsetteGrunnlag: false,
    }, {
      aktivitetStatus: 'SN',
      beregningsperiodeFom: '2015-01-01',
      beregningsperiodeTom: '2017-12-31',
      beregnetPrAar: 0.0,
      overstyrtPrAar: 0.0,
      bruttoPrAar: 0.0,
      andelsnr: 2,
      inntektskategori: 'SELVSTENDIG_NÆRINGSDRIVENDE',
      arbeidsforhold: {
        arbeidsforholdType: 'NÆRING',
      },
      fastsattAvSaksbehandler: false,
      lagtTilAvSaksbehandler: false,
      dagsats: 0,
      erTilkommetAndel: false,
      skalFastsetteGrunnlag: true,
      pgiSnitt: 403557,
      pgiVerdier: [{
        beløp: 494006,
        årstall: 2017,
      }, {
        beløp: 384757,
        årstall: 2016,
      }, {
        beløp: 331908,
        årstall: 2015,
      }],
      næringer: [{
        orgnr: '991561692',
        erVarigEndret: true,
        erNyoppstartet: false,
        virksomhetType: 'ANNEN',
        endringsdato: '2017-01-01',
        kanRegnskapsførerKontaktes: false,
        erNyIArbeidslivet: false,
        oppgittInntekt: 24425,
      }],
    }],
  }],
  sammenligningsgrunnlag: {
    sammenligningsgrunnlagFom: '2017-01-01',
    sammenligningsgrunnlagTom: '2017-01-31',
    rapportertPrAar: 687977.0,
    avvikPromille: 704.7833284,
    avvikProsent: 70.47833284,
    sammenligningsgrunnlagType: 'SAMMENLIGNING_ATFL_SN',
    differanseBeregnet: -284420.0,
  },
  sammenligningsgrunnlagPrStatus: [{
    sammenligningsgrunnlagFom: '2017-01-01',
    sammenligningsgrunnlagTom: '2017-01-31',
    rapportertPrAar: 687977.0,
    avvikPromille: 704.7833284,
    avvikProsent: 70.47833284,
    sammenligningsgrunnlagType: 'SAMMENLIGNING_ATFL_SN',
    differanseBeregnet: -284420.0,
  }],
  ledetekstBrutto: 'Brutto beregningsgrunnlag',
  ledetekstAvkortet: 'Avkortet beregningsgrunnlag (6G=581298)',
  ledetekstRedusert: 'Redusert beregningsgrunnlag (100%)',
  halvG: 48441.5,
  grunnbeløp: 96883.0,
  faktaOmBeregning: {
    avklarAktiviteter: {
      aktiviteterTomDatoMapping: [{
        tom: '2019-03-05',
        aktiviteter: [{
          fom: '2007-08-09',
          tom: '9999-12-31',
          arbeidsforholdType: 'NÆRING',
        }, {
          arbeidsgiverIdent: '123456789',
          fom: '2017-03-01',
          tom: '9999-12-31',
          arbeidsforholdType: 'ARBEID',
        }, {
          fom: '2019-02-01',
          tom: '2019-03-04',
          arbeidsforholdType: 'SVANGERSKAPSPENGER',
        }],
      }, {
        tom: '2018-09-02',
        aktiviteter: [{
          arbeidsgiverIdent: '123456700',
          fom: '2018-01-10',
          tom: '2018-09-01',
          arbeidsforholdType: 'ARBEID',
        }],
      }],
    },
    andelerForFaktaOmBeregning: [{
      belopReadOnly: 55296,
      fastsattBelop: 55296.0,
      inntektskategori: 'ARBEIDSTAKER',
      aktivitetStatus: 'AT',
      arbeidsforhold: {
        arbeidsgiverIdent: '123456789',
        arbeidsgiverIdVisning: '123456789',
        startdato: '2017-03-01',
        arbeidsforholdType: 'ARBEID',
        refusjonPrAar: 0.0,
        belopFraInntektsmeldingPrMnd: 55296,
      },
      andelsnr: 1,
      skalKunneEndreAktivitet: false,
      lagtTilAvSaksbehandler: false,
    }, {
      fastsattBelop: 0.0,
      inntektskategori: 'SELVSTENDIG_NÆRINGSDRIVENDE',
      aktivitetStatus: 'SN',
      visningsnavn: 'Næring',
      arbeidsforhold: {
        arbeidsforholdType: 'NÆRING',
      },
      andelsnr: 2,
      skalKunneEndreAktivitet: false,
      lagtTilAvSaksbehandler: false,
    }],
  },
  hjemmel: {
    kodeverk: 'BG_HJEMMEL',
    kode: 'F_14_7_8_41',
  },
  faktaOmFordeling: {
    fordelBeregningsgrunnlag: {
      fordelBeregningsgrunnlagPerioder: [{
        fom: '2019-03-05',
        tom: '2019-11-03',
        fordelBeregningsgrunnlagAndeler: [{
          andelsnr: 1,
          arbeidsforhold: {
            arbeidsgiverIdent: '123456789',
            arbeidsgiverIdVisning: '123456789',
            startdato: '2017-03-01',
            arbeidsforholdType: 'ARBEID',
            refusjonPrAar: 0.0,
          },
          inntektskategori: 'ARBEIDSTAKER',
          aktivitetStatus: 'AT',
          lagtTilAvSaksbehandler: false,
          fastsattAvSaksbehandler: false,
          andelIArbeid: [20, 20],
          refusjonskravPrAar: 0,
          belopFraInntektsmeldingPrAar: 663552,
          refusjonskravFraInntektsmeldingPrAar: 0,
          nyttArbeidsforhold: false,
          arbeidsforholdType: 'ARBEID',
        }, {
          andelsnr: 2,
          arbeidsforhold: {
            arbeidsforholdType: 'NÆRING',
          },
          inntektskategori: 'SELVSTENDIG_NÆRINGSDRIVENDE',
          aktivitetStatus: 'SN',
          lagtTilAvSaksbehandler: false,
          fastsattAvSaksbehandler: false,
          andelIArbeid: [0],
          refusjonskravPrAar: 0,
          nyttArbeidsforhold: false,
          arbeidsforholdType: 'NÆRING',
        }],
        skalRedigereInntekt: false,
        skalPreutfyllesMedBeregningsgrunnlag: false,
        skalKunneEndreRefusjon: false,
      }, {
        fom: '2019-11-04',
        tom: '2019-12-09',
        fordelBeregningsgrunnlagAndeler: [{
          andelsnr: 1,
          arbeidsforhold: {
            arbeidsgiverIdent: '123456789',
            arbeidsgiverIdVisning: '123456789',
            startdato: '2017-03-01',
            arbeidsforholdType: 'ARBEID',
            refusjonPrAar: 0.0,
          },
          inntektskategori: 'ARBEIDSTAKER',
          aktivitetStatus: 'AT',
          lagtTilAvSaksbehandler: false,
          fastsattAvSaksbehandler: false,
          andelIArbeid: [0],
          refusjonskravPrAar: 0,
          belopFraInntektsmeldingPrAar: 663552,
          refusjonskravFraInntektsmeldingPrAar: 0,
          nyttArbeidsforhold: false,
          arbeidsforholdType: 'ARBEID',
        }, {
          andelsnr: 2,
          arbeidsforhold: {
            arbeidsforholdType: 'NÆRING',
          },
          inntektskategori: 'SELVSTENDIG_NÆRINGSDRIVENDE',
          aktivitetStatus: 'SN',
          lagtTilAvSaksbehandler: false,
          fastsattAvSaksbehandler: false,
          andelIArbeid: [50],
          refusjonskravPrAar: 0,
          nyttArbeidsforhold: false,
          arbeidsforholdType: 'NÆRING',
        }],
        skalRedigereInntekt: true,
        skalPreutfyllesMedBeregningsgrunnlag: false,
        skalKunneEndreRefusjon: false,
      }, {
        fom: '2019-12-10',
        tom: '9999-12-31',
        fordelBeregningsgrunnlagAndeler: [{
          andelsnr: 1,
          arbeidsforhold: {
            arbeidsgiverIdent: '123456789',
            arbeidsgiverIdVisning: '123456789',
            startdato: '2017-03-01',
            arbeidsforholdType: 'ARBEID',
            refusjonPrAar: 0.0,
          },
          inntektskategori: 'ARBEIDSTAKER',
          aktivitetStatus: 'AT',
          lagtTilAvSaksbehandler: false,
          fastsattAvSaksbehandler: false,
          andelIArbeid: [0],
          refusjonskravPrAar: 0,
          belopFraInntektsmeldingPrAar: 663552,
          refusjonskravFraInntektsmeldingPrAar: 0,
          nyttArbeidsforhold: false,
          arbeidsforholdType: 'ARBEID',
        }, {
          andelsnr: 2,
          arbeidsforhold: {
            arbeidsforholdType: 'NÆRING',
          },
          inntektskategori: 'SELVSTENDIG_NÆRINGSDRIVENDE',
          aktivitetStatus: 'SN',
          lagtTilAvSaksbehandler: false,
          fastsattAvSaksbehandler: false,
          andelIArbeid: [0],
          refusjonskravPrAar: 0,
          nyttArbeidsforhold: false,
          arbeidsforholdType: 'NÆRING',
        } as FordelBeregningsgrunnlagAndel],
        skalRedigereInntekt: true,
        skalPreutfyllesMedBeregningsgrunnlag: true,
        skalKunneEndreRefusjon: false,
      }],
      arbeidsforholdTilFordeling: [{
        arbeidsforholdType: 'NÆRING',
        perioderMedGraderingEllerRefusjon: [{
          erRefusjon: false,
          erGradering: true,
          erSøktYtelse: false,
          fom: '2019-11-04',
          tom: '2019-12-09',
        }],
      }],
    },
  },
  årsinntektVisningstall: 403557,
  dekningsgrad: 100,
  erOverstyrtInntekt: false,
} as Beregningsgrunnlag;

export const aksjonspunkt = [
  {
    definisjon: '5046',
    status: 'OPPR',
    toTrinnsBehandling: true,
    aksjonspunktType: 'MANU',
    kanLoses: true,
    erAktivt: true,
  }];
