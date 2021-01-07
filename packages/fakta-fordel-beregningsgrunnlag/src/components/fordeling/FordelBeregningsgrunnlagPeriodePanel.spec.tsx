import moment from 'moment';
import aktivitetStatuser from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import FordelBeregningsgrunnlagPeriodePanel from './FordelBeregningsgrunnlagPeriodePanel';

const stpBeregning = '2018-01-01';

const arbeidsforhold = {
  arbeidsgiverNavn: 'Virksomheten',
  arbeidsgiverId: '3284788923',
  arbeidsforholdId: '321378huda7e2',
  eksternArbeidsforholdId: '12345',
  startdato: '2017-01-01',
  opphoersdato: '2018-01-01',
};

const arbeidsforhold2 = {
  arbeidsgiverNavn: 'Virksomheten 2',
  arbeidsgiverId: '32847889234234233',
  arbeidsforholdId: '3534gggg4g45',
  eksternArbeidsforholdId: '234567',
  startdato: '2017-01-01',
  opphoersdato: '2018-01-01',
};

const arbeidsforholdEtterStp = {
  arbeidsgiverNavn: 'Virksomheten',
  arbeidsgiverId: '3284788923',
  arbeidsforholdId: '321378huda7e2',
  eksternArbeidsforholdId: '345678',
  startdato: '2018-05-01',
  opphoersdato: '2019-01-01',
};

const lagArbeidstakerAndelEtterStp = (andelsnr, lagtTilAvSaksbehandler, fordelingForrigeBehandlingPrAar,
  beregnetPrAar, fordeltPrAar, refusjonskravPrAar, belopFraInntektsmeldingPrAar,
  refusjonskravFraInntektsmeldingPrAar, andelIArbeid) => ({
  arbeidsforhold: arbeidsforholdEtterStp,
  aktivitetStatus: { kode: aktivitetStatuser.ARBEIDSTAKER, navn: 'Arbeidstaker', kodeverk: 'test' },
  inntektskategori: { kode: 'ARBEIDSTAKER', kodeverk: 'test' },
  andelIArbeid,
  andelsnr,
  lagtTilAvSaksbehandler,
  fordelingForrigeBehandlingPrAar,
  beregnetPrAar,
  fordeltPrAar,
  refusjonskravPrAar,
  belopFraInntektsmeldingPrAar,
  refusjonskravFraInntektsmeldingPrAar,
  nyttArbeidsforhold: true,
});

const getKodeverknavn = (kodeverk) => {
  if (kodeverk.kode === aktivitetStatuser.ARBEIDSTAKER) {
    return 'Arbeidstaker';
  }
  if (kodeverk.kode === aktivitetStatuser.FRILANSER) {
    return 'Frilanser';
  }
  if (kodeverk.kode === aktivitetStatuser.SELVSTENDIG_NAERINGSDRIVENDE) {
    return 'Selvstendig næringsdrivende';
  }
  return '';
};

const lagArbeidstakerAndel = (andelsnr, lagtTilAvSaksbehandler, fordelingForrigeBehandlingPrAar,
  beregnetPrAar, fordeltPrAar, refusjonskravPrAar, belopFraInntektsmeldingPrAar,
  refusjonskravFraInntektsmeldingPrAar, andelIArbeid) => ({
  arbeidsforhold,
  aktivitetStatus: { kode: aktivitetStatuser.ARBEIDSTAKER, navn: 'Arbeidstaker', kodeverk: 'test' },
  inntektskategori: { kode: 'ARBEIDSTAKER', kodeverk: 'test' },
  andelIArbeid,
  andelsnr,
  lagtTilAvSaksbehandler,
  fordelingForrigeBehandlingPrAar,
  fordeltPrAar,
  beregnetPrAar,
  refusjonskravPrAar,
  belopFraInntektsmeldingPrAar,
  refusjonskravFraInntektsmeldingPrAar,
});

const lagSNAndel = (andelsnr, lagtTilAvSaksbehandler, fordelingForrigeBehandlingPrAar,
  beregnetPrAar, fordeltPrAar, andelIArbeid) => ({
  arbeidsforhold,
  aktivitetStatus: { kode: aktivitetStatuser.SELVSTENDIG_NAERINGSDRIVENDE, navn: 'Selvstendig næringsdrivende', kodeverk: 'test' },
  inntektskategori: { kode: 'SN', kodeverk: 'test' },
  andelIArbeid,
  andelsnr,
  lagtTilAvSaksbehandler,
  fordelingForrigeBehandlingPrAar,
  beregnetPrAar,
  fordeltPrAar,
  refusjonskravPrAar: null,
  belopFraInntektsmeldingPrAar: null,
  refusjonskravFraInntektsmeldingPrAar: null,
});

const lagFLAndel = (andelsnr, lagtTilAvSaksbehandler, fordelingForrigeBehandlingPrAar,
  beregnetPrAar, fordeltPrAar, andelIArbeid) => ({
  aktivitetStatus: { kode: aktivitetStatuser.FRILANSER, navn: 'Frilanser', kodeverk: 'test' },
  inntektskategori: { kode: 'SN', kodeverk: 'test' },
  andelIArbeid,
  andelsnr,
  lagtTilAvSaksbehandler,
  fordelingForrigeBehandlingPrAar,
  beregnetPrAar,
  fordeltPrAar,
  refusjonskravPrAar: null,
  belopFraInntektsmeldingPrAar: null,
  refusjonskravFraInntektsmeldingPrAar: null,
});

describe('<FordelBeregningsgrunnlagPeriodePanel>', () => {
  it('skal sette initial values', () => {
    const periode = {
      skalRedigereInntekt: true,
      skalPreutfyllesMedBeregningsgrunnlag: false,
      skalKunneEndreRefusjon: true,
      fordelBeregningsgrunnlagAndeler: [
        lagArbeidstakerAndel(1, false, 10000, 10000, null, 10000, 10000, 10000, [0, 20]),
        lagArbeidstakerAndel(2, false, 20000, 10000, 10000, 10000, 20000, 10000, [0]),
        lagArbeidstakerAndel(3, false, 30000, 10000, 30000, 0, 30000, 0, [0, 20, 80]),
        lagArbeidstakerAndel(4, false, null, 1000, null, 0, null, null, [0, 20]),
        lagArbeidstakerAndelEtterStp(5, false, 20000, null, 10000, 10000, 20000, 10000, [0]),
        lagSNAndel(6, false, null, 10000, 10000, [0]),
        lagArbeidstakerAndel(7, false, null, 1000, null, null, null, null, [0]),
        lagFLAndel(8, false, null, null, null, [0]),
        lagFLAndel(9, false, null, 0, null, [0])],
    };

    const bgPeriode = {
      beregningsgrunnlagPrStatusOgAndel: [
        {
          andelsnr: 1,
          aktivitetStatus: { kode: aktivitetStatuser.ARBEIDSTAKER, kodeverk: 'test' },
          belopPrAarEtterAOrdningen: 100,
          arbeidsforhold,
          beregnetPrAar: 10000,
          bruttoPrAar: 10000,
        },
        {
          andelsnr: 2,
          aktivitetStatus: { kode: aktivitetStatuser.ARBEIDSTAKER, kodeverk: 'test' },
          belopPrAarEtterAOrdningen: 100,
          arbeidsforhold,
          beregnetPrAar: 10000,
          overstyrtPrAar: 20000,
          bruttoPrAar: 20000,
        },
        {
          andelsnr: 3,
          aktivitetStatus: { kode: aktivitetStatuser.ARBEIDSTAKER, kodeverk: 'test' },
          belopPrAarEtterAOrdningen: 100,
          arbeidsforhold,
          beregnetPrAar: 10000,
          overstyrtPrAar: 30000,
          bruttoPrAar: 30000,
        },
        {
          andelsnr: 4,
          aktivitetStatus: { kode: aktivitetStatuser.ARBEIDSTAKER, kodeverk: 'test' },
          belopPrAarEtterAOrdningen: 1000,
          arbeidsforhold,
          beregnetPrAar: 1000,
          overstyrtPrAar: null,
          bruttoPrAar: 1000,
        },
        {
          andelsnr: 5,
          aktivitetStatus: { kode: aktivitetStatuser.ARBEIDSTAKER, kodeverk: 'test' },
          belopPrAarEtterAOrdningen: 1000,
          arbeidsforhold: arbeidsforholdEtterStp,
          beregnetPrAar: null,
          overstyrtPrAar: null,
          bruttoPrAar: null,
        },
        {
          andelsnr: 6,
          aktivitetStatus: { kode: aktivitetStatuser.SELVSTENDIG_NAERINGSDRIVENDE, kodeverk: 'test' },
          beregnetPrAar: 10000,
          overstyrtPrAar: null,
          bruttoPrAar: 10000,
        },
        {
          andelsnr: 7,
          aktivitetStatus: { kode: aktivitetStatuser.ARBEIDSTAKER, kodeverk: 'test' },
          arbeidsforhold: arbeidsforhold2,
          belopPrAarEtterAOrdningen: 40000,
          beregnetPrAar: 1000,
          overstyrtPrAar: null,
          bruttoPrAar: 1000,
        },
        { andelsnr: 8, aktivitetStatus: { kode: aktivitetStatuser.FRILANSER, kodeverk: 'test' }, belopPrAarEtterAOrdningen: null },
        {
          andelsnr: 9,
          aktivitetStatus: { kode: aktivitetStatuser.FRILANSER, kodeverk: 'test' },
          belopPrAarEtterAOrdningen: null,
          beregnetPrAar: 0,
        },
      ],
    };
    const agOpplysninger = {
      3284788923: {
        navn: 'Virksomheten',
        identifikator: '3284788923',
        erPrivatPerson: false,
      },
      32847889234234233: {
        navn: 'Virksomheten 2',
        identifikator: '3284788923',
        erPrivatPerson: false,
      },
    };
    const initialValues = FordelBeregningsgrunnlagPeriodePanel.buildInitialValues(periode, bgPeriode, stpBeregning, false, getKodeverknavn, agOpplysninger);
    expect(initialValues).toHaveLength(9);
    const arbeidstakerAndelerBeforeStp = initialValues.filter(({ arbeidsperiodeFom }) => arbeidsperiodeFom !== ''
    && moment(arbeidsperiodeFom).isBefore(moment(stpBeregning)))
      .filter(({ aktivitetStatus }) => aktivitetStatus === 'AT');
    expect(arbeidstakerAndelerBeforeStp).toHaveLength(5);
    arbeidstakerAndelerBeforeStp.forEach((initialValue) => {
      expect(initialValue.andel).toBe('Virksomheten (3284788923)...2345');
      expect(initialValue.aktivitetStatus).toBe('AT');
      expect(initialValue.nyAndel).toBe(false);
      expect(initialValue.lagtTilAvSaksbehandler).toBe(false);
      expect(initialValue.inntektskategori).toBe('ARBEIDSTAKER');
      expect(initialValue.arbeidsforholdId).toBe('321378huda7e2');
      expect(initialValue.arbeidsperiodeFom).toBe('2017-01-01');
      expect(initialValue.arbeidsperiodeTom).toBe('2018-01-01');
      expect(initialValue.skalRedigereInntekt).toBe(true);
    });
    const SNAndel = initialValues.filter(({ aktivitetStatus }) => aktivitetStatus === 'SN');
    expect(SNAndel).toHaveLength(1);
    expect(SNAndel[0].andel).toBe('Selvstendig næringsdrivende');
    expect(SNAndel[0].aktivitetStatus).toBe('SN');
    expect(SNAndel[0].nyAndel).toBe(false);
    expect(SNAndel[0].lagtTilAvSaksbehandler).toBe(false);
    expect(SNAndel[0].inntektskategori).toBe('SN');
    expect(SNAndel[0].skalRedigereInntekt).toBe(true);

    const andelerEtterStp = initialValues.filter(({ nyttArbeidsforhold }) => nyttArbeidsforhold);

    expect(andelerEtterStp).toHaveLength(1);
    expect(andelerEtterStp[0].andel).toBe('Virksomheten (3284788923)...5678');
    expect(andelerEtterStp[0].aktivitetStatus).toBe('AT');
    expect(andelerEtterStp[0].nyAndel).toBe(false);
    expect(andelerEtterStp[0].lagtTilAvSaksbehandler).toBe(false);
    expect(andelerEtterStp[0].inntektskategori).toBe('ARBEIDSTAKER');
    expect(andelerEtterStp[0].arbeidsforholdId).toBe('321378huda7e2');
    expect(andelerEtterStp[0].arbeidsperiodeFom).toBe('2018-05-01');
    expect(andelerEtterStp[0].arbeidsperiodeTom).toBe('2019-01-01');
    expect(andelerEtterStp[0].skalRedigereInntekt).toBe(true);

    expect(initialValues[0].andelsnr).toBe(1);
    expect(initialValues[0].andelIArbeid).toBe('0 - 20');
    expect(initialValues[0].fordelingForrigeBehandling).toBe('10 000');
    expect(initialValues[0].fastsattBelop).toBe('');
    expect(initialValues[0].readOnlyBelop).toBe('10 000');
    expect(initialValues[0].refusjonskrav).toBe('10 000');
    expect(initialValues[0].belopFraInntektsmelding).toBe(10000);
    expect(initialValues[0].refusjonskravFraInntektsmelding).toBe(10000);
    expect(initialValues[0].skalKunneEndreRefusjon).toBe(true);
    expect(initialValues[0].beregningsgrunnlagPrAar).toBe('10 000');

    expect(initialValues[1].andelsnr).toBe(2);
    expect(initialValues[1].andelIArbeid).toBe('0.00');
    expect(initialValues[1].fordelingForrigeBehandling).toBe('20 000');
    expect(initialValues[1].fastsattBelop).toBe('10 000');
    expect(initialValues[1].readOnlyBelop).toBe('20 000');
    expect(initialValues[1].refusjonskrav).toBe('10 000');
    expect(initialValues[1].belopFraInntektsmelding).toBe(20000);
    expect(initialValues[1].refusjonskravFraInntektsmelding).toBe(10000);
    expect(initialValues[1].skalKunneEndreRefusjon).toBe(true);
    expect(initialValues[1].beregningsgrunnlagPrAar).toBe('20 000');

    expect(initialValues[2].andelsnr).toBe(3);
    expect(initialValues[2].andelIArbeid).toBe('0 - 80');
    expect(initialValues[2].fordelingForrigeBehandling).toBe('30 000');
    expect(initialValues[2].fastsattBelop).toBe('30 000');
    expect(initialValues[2].readOnlyBelop).toBe('30 000');
    expect(initialValues[2].refusjonskrav).toBe('0');
    expect(initialValues[2].belopFraInntektsmelding).toBe(30000);
    expect(initialValues[2].refusjonskravFraInntektsmelding).toBe(0);
    expect(initialValues[2].skalKunneEndreRefusjon).toBe(false);
    expect(initialValues[2].beregningsgrunnlagPrAar).toBe('30 000');

    expect(initialValues[3].andelsnr).toBe(4);
    expect(initialValues[3].andelIArbeid).toBe('0 - 20');
    expect(initialValues[3].fordelingForrigeBehandling).toBe('');
    expect(initialValues[3].fastsattBelop).toBe('');
    expect(initialValues[3].readOnlyBelop).toBe('1 000');
    expect(initialValues[3].refusjonskrav).toBe('0');
    expect(initialValues[3].belopFraInntektsmelding).toBe(null);
    expect(initialValues[3].refusjonskravFraInntektsmelding).toBe(null);
    expect(initialValues[3].skalKunneEndreRefusjon).toBe(false);
    expect(initialValues[3].beregningsgrunnlagPrAar).toBe('1 000');

    expect(initialValues[4].andelsnr).toBe(5);
    expect(initialValues[4].andelIArbeid).toBe('0.00');
    expect(initialValues[4].fordelingForrigeBehandling).toBe('20 000');
    expect(initialValues[4].fastsattBelop).toBe('10 000');
    expect(initialValues[4].readOnlyBelop).toBe(null);
    expect(initialValues[4].refusjonskrav).toBe('10 000');
    expect(initialValues[4].belopFraInntektsmelding).toBe(20000);
    expect(initialValues[4].refusjonskravFraInntektsmelding).toBe(10000);
    expect(initialValues[4].skalKunneEndreRefusjon).toBe(true);
    expect(initialValues[4].beregningsgrunnlagPrAar).toBe(null);

    expect(initialValues[5].andelsnr).toBe(6);
    expect(initialValues[5].andelIArbeid).toBe('0.00');
    expect(initialValues[5].fordelingForrigeBehandling).toBe('');
    expect(initialValues[5].fastsattBelop).toBe('10 000');
    expect(initialValues[5].readOnlyBelop).toBe('10 000');
    expect(initialValues[5].refusjonskrav).toBe('');
    expect(initialValues[5].belopFraInntektsmelding).toBe(null);
    expect(initialValues[5].refusjonskravFraInntektsmelding).toBe(null);
    expect(initialValues[5].skalKunneEndreRefusjon).toBe(false);
    expect(initialValues[5].beregningsgrunnlagPrAar).toBe('10 000');

    expect(initialValues[6].andelsnr).toBe(7);
    expect(initialValues[6].andelIArbeid).toBe('0.00');
    expect(initialValues[6].fordelingForrigeBehandling).toBe('');
    expect(initialValues[6].fastsattBelop).toBe('');
    expect(initialValues[6].readOnlyBelop).toBe('1 000');
    expect(initialValues[6].refusjonskrav).toBe('');
    expect(initialValues[6].belopFraInntektsmelding).toBe(null);
    expect(initialValues[6].refusjonskravFraInntektsmelding).toBe(null);
    expect(initialValues[6].skalKunneEndreRefusjon).toBe(false);
    expect(initialValues[6].beregningsgrunnlagPrAar).toBe('1 000');

    expect(initialValues[7].andelsnr).toBe(8);
    expect(initialValues[7].andelIArbeid).toBe('0.00');
    expect(initialValues[7].fordelingForrigeBehandling).toBe('');
    expect(initialValues[7].fastsattBelop).toBe('');
    expect(initialValues[7].readOnlyBelop).toBe(null);
    expect(initialValues[7].refusjonskrav).toBe('');
    expect(initialValues[7].belopFraInntektsmelding).toBe(null);
    expect(initialValues[7].refusjonskravFraInntektsmelding).toBe(null);
    expect(initialValues[7].skalKunneEndreRefusjon).toBe(false);
    expect(initialValues[7].beregningsgrunnlagPrAar).toBe(null);

    expect(initialValues[8].andelsnr).toBe(9);
    expect(initialValues[8].andelIArbeid).toBe('0.00');
    expect(initialValues[8].fordelingForrigeBehandling).toBe('');
    expect(initialValues[8].fastsattBelop).toBe('');
    expect(initialValues[8].readOnlyBelop).toBe('0');
    expect(initialValues[8].refusjonskrav).toBe('');
    expect(initialValues[8].belopFraInntektsmelding).toBe(null);
    expect(initialValues[8].refusjonskravFraInntektsmelding).toBe(null);
    expect(initialValues[8].skalKunneEndreRefusjon).toBe(false);
    expect(initialValues[8].beregningsgrunnlagPrAar).toBe('0');
  });
});
