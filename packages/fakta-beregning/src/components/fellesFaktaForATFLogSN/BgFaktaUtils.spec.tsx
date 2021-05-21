import aktivitetStatuser from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import organisasjonstyper from '@fpsak-frontend/kodeverk/src/organisasjonstype';
import faktaOmBeregningTilfelle from '@fpsak-frontend/kodeverk/src/faktaOmBeregningTilfelle';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { AlleKodeverk } from '@fpsak-frontend/types';
import { lonnsendringField } from './vurderOgFastsettATFL/forms/LonnsendringForm';
import { erNyoppstartetFLField } from './vurderOgFastsettATFL/forms/NyoppstartetFLForm';
import {
  mapAndelToField,
  mapToBelop,
  setArbeidsforholdInitialValues,
  setGenerellAndelsinfo,
  skalFastsetteInntektForAndel,
  kanRedigereInntektForAndel,
  skalRedigereInntektskategoriForAndel,
} from './BgFaktaUtils';
import { finnFrilansFieldName, utledArbeidsforholdFieldName } from './vurderOgFastsettATFL/forms/VurderMottarYtelseUtils';
import { MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD } from './InntektstabellPanel';

const arbeidsgiver = {
  arbeidsgiverIdent: '3284788923',
  startdato: '2017-01-01',
  opphoersdato: '2018-01-01',
};

const arbeidstakerIkkeFastsatt = {
  lagtTilAvSaksbehandler: false,
  aktivitetStatus: { kode: aktivitetStatuser.ARBEIDSTAKER, kodeverk: 'test' },
  inntektskategori: { kode: 'ARBEIDSTAKER', kodeverk: 'test' },
};

const arbeidstakerAndel1 = {
  arbeidsforhold: {
    ...arbeidsgiver,
    arbeidsforholdId: '6765756g5',
  },
  andelsnr: 1,
  ...arbeidstakerIkkeFastsatt,
};

const alleKodeverk = {
  [kodeverkTyper.AKTIVITET_STATUS]: [{
    kode: aktivitetStatuser.ARBEIDSAVKLARINGSPENGER,
    kodeverk: 'AKTIVITET_STATUS',
    navn: 'Arbeidsavklaringspenger',
  },
  {
    kode: aktivitetStatuser.DAGPENGER,
    kodeverk: 'AKTIVITET_STATUS',
    navn: 'Dagpenger',
  },
  {
    kode: aktivitetStatuser.FRILANSER,
    kodeverk: 'AKTIVITET_STATUS',
    navn: 'Frilans',
  },
  {
    kode: aktivitetStatuser.SELVSTENDIG_NAERINGSDRIVENDE,
    kodeverk: 'AKTIVITET_STATUS',
    navn: 'Selvstendig næringsdrivende',
  }],
} as AlleKodeverk;

describe('<BgFaktaUtils>', () => {
  const dagpengerAndel = {
    aktivitetStatus: { kode: aktivitetStatuser.DAGPENGER, kodeverk: 'test' },
    andelsnr: 1,
    skalKunneEndreAktivitet: false,
    lagtTilAvSaksbehandler: true,
    inntektskategori: { kode: 'DAGPENGER', kodeverk: 'test' },
    beregnetPrAar: 240000,
    fastsattBelop: 20000,
    belopReadOnly: 0,
    belopFraMeldekortPrMnd: 0,
  };

  const dagpengeField = mapAndelToField(dagpengerAndel, {}, alleKodeverk);

  it('skal mappe dagpengerandel til feltverdier', () => {
    expect(dagpengeField.aktivitetStatus).toBe('DP');
    expect(dagpengeField.andelsnr).toBe(1);
    expect(dagpengeField.nyAndel).toBe(false);
    expect(dagpengeField.lagtTilAvSaksbehandler).toBe(true);
    expect(dagpengeField.skalKunneEndreAktivitet).toBe(false);
    expect(dagpengeField.inntektskategori).toBe('DAGPENGER');
    expect(dagpengeField.fastsattBelop).toBe('20 000');
    expect(dagpengeField.belopReadOnly).toBe('0');
    expect(dagpengeField.refusjonskrav).toBe('');
  });

  it('skal mappe AAP-andel til feltverdier', () => {
    const AAPAndel = {
      aktivitetStatus: { kode: aktivitetStatuser.ARBEIDSAVKLARINGSPENGER, kodeverk: 'test' },
      andelsnr: 1,
      skalKunneEndreAktivitet: false,
      lagtTilAvSaksbehandler: false,
      inntektskategori: { kode: 'AAP', kodeverk: 'test' },
      beregnetPrAar: null,
      fastsattBelop: null,
      belopReadOnly: 10000,
      belopFraMeldekortPrMnd: 10000,
    };
    const aapField = mapAndelToField(AAPAndel, {}, alleKodeverk);
    expect(aapField.aktivitetStatus).toBe('AAP');
    expect(aapField.andelsnr).toBe(1);
    expect(aapField.nyAndel).toBe(false);
    expect(aapField.lagtTilAvSaksbehandler).toBe(false);
    expect(aapField.skalKunneEndreAktivitet).toBe(false);
    expect(aapField.inntektskategori).toBe('AAP');
    expect(aapField.fastsattBelop).toBe('');
    expect(aapField.belopReadOnly).toBe('10 000');
    expect(aapField.refusjonskrav).toBe('');
  });

  it('skal mappe AT uten inntektsmelding med FL i samme org til feltverdier', () => {
    const ATAndel = {
      aktivitetStatus: { kode: aktivitetStatuser.ARBEIDSTAKER, kodeverk: 'test' },
      andelsnr: 1,
      skalKunneEndreAktivitet: false,
      lagtTilAvSaksbehandler: false,
      inntektskategori: { kode: 'AT', kodeverk: 'test' },
      beregnetPrAar: null,
      belopFraMeldekortPrMnd: null,
    };
    const atField = mapAndelToField(ATAndel, {}, alleKodeverk);
    expect(atField.aktivitetStatus).toBe('AT');
    expect(atField.andelsnr).toBe(1);
    expect(atField.nyAndel).toBe(false);
    expect(atField.lagtTilAvSaksbehandler).toBe(false);
    expect(atField.skalKunneEndreAktivitet).toBe(false);
    expect(atField.inntektskategori).toBe('AT');
    expect(atField.fastsattBelop).toBe('');
    expect(atField.belopReadOnly).toBe('');
    expect(atField.refusjonskrav).toBe('');
  });

  it('skal mappe FL med AT i samme org til feltverdier', () => {
    const ATAndel = {
      aktivitetStatus: { kode: aktivitetStatuser.FRILANSER, kodeverk: 'test' },
      andelsnr: 1,
      skalKunneEndreAktivitet: false,
      lagtTilAvSaksbehandler: false,
      inntektskategori: { kode: 'FL', kodeverk: 'test' },
      beregnetPrAar: null,
      belopFraMeldekortPrMnd: null,
    };
    const atField = mapAndelToField(ATAndel, {}, alleKodeverk);
    expect(atField.aktivitetStatus).toBe('FL');
    expect(atField.andelsnr).toBe(1);
    expect(atField.nyAndel).toBe(false);
    expect(atField.lagtTilAvSaksbehandler).toBe(false);
    expect(atField.skalKunneEndreAktivitet).toBe(false);
    expect(atField.inntektskategori).toBe('FL');
    expect(atField.fastsattBelop).toBe('');
    expect(atField.belopReadOnly).toBe('');
    expect(atField.refusjonskrav).toBe('');
  });

  it('skal mappe AT med inntektsmelding til feltverdier', () => {
    const ATAndel = {
      aktivitetStatus: { kode: aktivitetStatuser.ARBEIDSTAKER, kodeverk: 'AKTIVITET_STATUS' },
      andelsnr: 1,
      skalKunneEndreAktivitet: false,
      lagtTilAvSaksbehandler: false,
      inntektskategori: { kode: 'AT', kodeverk: 'test' },
      beregnetPrAar: null,
      belopFraMeldekortPrMnd: null,
      fastsattBelop: null,
      belopReadOnly: 20000,
      arbeidsforhold: { belopFraInntektsmeldingPrMnd: 20000 },
    };
    const atField = mapAndelToField(ATAndel, {}, alleKodeverk);
    expect(atField.aktivitetStatus).toBe('AT');
    expect(atField.andelsnr).toBe(1);
    expect(atField.nyAndel).toBe(false);
    expect(atField.lagtTilAvSaksbehandler).toBe(false);
    expect(atField.skalKunneEndreAktivitet).toBe(false);
    expect(atField.inntektskategori).toBe('AT');
    expect(atField.fastsattBelop).toBe('');
    expect(atField.belopReadOnly).toBe('20 000');
    expect(atField.refusjonskrav).toBe('');
  });

  it('skal sette initial values for generell andelinfo med arbeidsforhold', () => {
    const andelValueFromState = {
      arbeidsforhold: {
        arbeidsgiverIdent: '3284788923',
        arbeidsforholdId: '321378huda7e2',
        eksternArbeidsforholdId: 'sdfgsdfgda7e2',
      },
      aktivitetStatus: { kode: aktivitetStatuser.ARBEIDSTAKER, kodeverk: 'test' },
      andelsnr: 3,
      lagtTilAvSaksbehandler: false,
      inntektskategori: { kode: 'ARBEIDSTAKER', kodeverk: 'test' },
    };

    const agOpplysning = {
      3284788923: {
        identifikator: '3284788923',
        navn: 'Virksomheten',
        erPrivatPerson: false,
      },
    };

    const andelsInfo = setGenerellAndelsinfo(andelValueFromState, agOpplysning, {} as AlleKodeverk);
    expect(andelsInfo.andel).toBe('Virksomheten (3284788923)...a7e2');
    expect(andelsInfo.aktivitetStatus).toBe('AT');
    expect(andelsInfo.andelsnr).toBe(3);
    expect(andelsInfo.nyAndel).toBe(false);
    expect(andelsInfo.lagtTilAvSaksbehandler).toBe(false);
    expect(andelsInfo.inntektskategori).toBe('ARBEIDSTAKER');
  });

  it('skal sette initial values for generell andelinfo uten arbeidsforhold', () => {
    const andelValueFromState = {
      aktivitetStatus: { kode: aktivitetStatuser.SELVSTENDIG_NAERINGSDRIVENDE, kodeverk: 'AKTIVITET_STATUS' },
      andelsnr: 2,
      lagtTilAvSaksbehandler: true,
      inntektskategori: { kode: 'SN', kodeverk: 'test' },
    };
    const andelsInfo = setGenerellAndelsinfo(andelValueFromState, {}, alleKodeverk);
    expect(andelsInfo.andel).toBe('Selvstendig næringsdrivende');
    expect(andelsInfo.aktivitetStatus).toBe('SN');
    expect(andelsInfo.andelsnr).toBe(2);
    expect(andelsInfo.nyAndel).toBe(false);
    expect(andelsInfo.lagtTilAvSaksbehandler).toBe(true);
    expect(andelsInfo.inntektskategori).toBe('SN');
  });

  it('skal ikkje sette arbeidsforhold initial values for andel uten arbeidsforhold', () => {
    const andelValueFromState = {
      aktivitetStatus: { kode: aktivitetStatuser.SELVSTENDIG_NAERINGSDRIVENDE, kodeverk: 'test' },
      andelsnr: 2,
      lagtTilAvSaksbehandler: true,
      inntektskategori: { kode: 'SN', kodeverk: 'test' },
    };
    const arbeidsforholdIV = setArbeidsforholdInitialValues(andelValueFromState);
    expect(arbeidsforholdIV.arbeidsforholdId).toBe(null);
    expect(arbeidsforholdIV.arbeidsperiodeFom).toBe('');
    expect(arbeidsforholdIV.arbeidsperiodeTom).toBe('');
  });

  const andelsnrKunstigArbeid = 241;

  const kunstigArbeidsgiver = {
    arbeidsgiverIdent: '42672364432',
    startdato: '2017-01-01',
    opphoersdato: '2018-01-01',
    organisasjonstype: { kode: organisasjonstyper.KUNSTIG, kodeverk: 'test' },
  };

  const kunstigArbeidstakerAndel = {
    arbeidsforhold: {
      ...kunstigArbeidsgiver,
      arbeidsforholdId: null,
    },
    andelsnr: andelsnrKunstigArbeid,
    ...arbeidstakerIkkeFastsatt,
  };

  const arbeidstakerAndel3 = {
    arbeidsforhold: {
      ...arbeidsgiver,
      arbeidsforholdId: '321378huda7e2',
    },
    andelsnr: 3,
    ...arbeidstakerIkkeFastsatt,
  };

  it('skal sette arbeidsforhold initial values for andel med arbeidsforhold', () => {
    const arbeidsforholdIV = setArbeidsforholdInitialValues(arbeidstakerAndel3);
    expect(arbeidsforholdIV.arbeidsforholdId).toBe('321378huda7e2');
    expect(arbeidsforholdIV.arbeidsperiodeFom).toBe('2017-01-01');
    expect(arbeidsforholdIV.arbeidsperiodeTom).toBe('2018-01-01');
  });

  const arbeidstakerAndel4 = {
    arbeidsforhold: {
      ...arbeidsgiver,
      arbeidsforholdId: '546546g54',
    },
    andelsnr: 4,
    inntektPrMnd: null,
    ...arbeidstakerIkkeFastsatt,
  };

  const frilansAndel = {
    aktivitetStatus: { kode: aktivitetStatuser.FRILANSER, kodeverk: 'AKTIVITET_STATUS' },
    andelsnr: 2,
    lagtTilAvSaksbehandler: false,
  };

  const beregningsgrunnlag = {
    beregningsgrunnlagPeriode: [{
      beregningsgrunnlagPrStatusOgAndel: [arbeidstakerAndel1, arbeidstakerAndel3, frilansAndel, arbeidstakerAndel4, kunstigArbeidstakerAndel],
    },
    ],
  };

  const faktaOmBeregning = {
    faktaOmBeregningTilfeller: [],
    arbeidstakerOgFrilanserISammeOrganisasjonListe: null,
    arbeidsforholdMedLønnsendringUtenIM: null,
    vurderMottarYtelse: {
      erFrilans: true,
      frilansMottarYtelse: null,
      frilansInntektPrMnd: 20000,
      arbeidstakerAndelerUtenIM: [arbeidstakerAndel3, arbeidstakerAndel1],
    },
  };

  const values = {};
  values[utledArbeidsforholdFieldName(arbeidstakerAndel3)] = true;
  values[finnFrilansFieldName()] = true;
  values[lonnsendringField] = true;

  const andelValuesUtenInntektsmelding = {
    fordelingForrigeBehandling: '',
    fastsattBelop: '',
    readOnlyBelop: 25000,
    kanRedigereInntekt: false,
    refusjonskrav: '',
    skalKunneEndreRefusjon: false,
    belopFraInntektsmelding: null,
    refusjonskravFraInntektsmelding: null,
  };

  const andelValuesMedInntektsmelding = {
    fordelingForrigeBehandling: 25000,
    fastsattBelop: 25000,
    readOnlyBelop: 25000,
    kanRedigereInntekt: false,
    refusjonskrav: '',
    skalKunneEndreRefusjon: false,
    belopFraInntektsmelding: 25000,
    refusjonskravFraInntektsmelding: null,
  };

  it('skal redigere inntektskategori for kunstig arbeid', () => {
    const agOpplysning = {
      3284788923: {
        identifikator: '3284788923',
        navn: 'Virksomheten',
        erPrivatPerson: false,
      },
    };
    const andelFieldValue = {
      ...andelValuesUtenInntektsmelding,
      ...setArbeidsforholdInitialValues(kunstigArbeidstakerAndel),
      ...setGenerellAndelsinfo(kunstigArbeidstakerAndel, agOpplysning, alleKodeverk),
    };
    const skalRedigereInntektskategori = skalRedigereInntektskategoriForAndel(beregningsgrunnlag)(andelFieldValue);
    expect(skalRedigereInntektskategori).toBe(true);
  });

  it('skal redigere inntekt ved overstyring', () => {
    const agOpplysning = {
      3284788923: {
        identifikator: '3284788923',
        navn: 'Virksomheten',
        erPrivatPerson: false,
      },
    };
    const andelFieldValue = {
      ...andelValuesMedInntektsmelding,
      ...setGenerellAndelsinfo(arbeidstakerAndel4, agOpplysning, {} as AlleKodeverk),
    };
    const copyValues = { ...values };
    copyValues[MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD] = true;
    const skalRedigereInntekt = kanRedigereInntektForAndel(copyValues, faktaOmBeregning, beregningsgrunnlag)(andelFieldValue);
    expect(skalRedigereInntekt).toBe(true);
  });

  it('skal redigere inntekt for arbeidstakerandel som mottar ytelse', () => {
    const agOpplysning = {
      3284788923: {
        identifikator: '3284788923',
        navn: 'Virksomheten',
        erPrivatPerson: false,
      },
    };
    const andelFieldValue = {
      ...andelValuesUtenInntektsmelding,
      ...setGenerellAndelsinfo(arbeidstakerAndel3, agOpplysning, {} as AlleKodeverk),
    };
    const skalRedigereInntekt = skalFastsetteInntektForAndel(values, faktaOmBeregning, beregningsgrunnlag)(andelFieldValue);
    expect(skalRedigereInntekt).toBe(true);
  });

  it('skal redigere inntekt for arbeidstakerandel som ikke mottar ytelse, men har lonnsendring', () => {
    const agOpplysning = {
      3284788923: {
        identifikator: '3284788923',
        navn: 'Virksomheten',
        erPrivatPerson: false,
      },
    };
    const andelFieldValue = {
      ...andelValuesUtenInntektsmelding,
      ...setGenerellAndelsinfo(arbeidstakerAndel1, agOpplysning, {} as AlleKodeverk),
    };
    faktaOmBeregning.arbeidsforholdMedLønnsendringUtenIM = [arbeidstakerAndel1];
    const skalRedigereInntekt = skalFastsetteInntektForAndel(values, faktaOmBeregning, beregningsgrunnlag)(andelFieldValue);
    expect(skalRedigereInntekt).toBe(true);
  });

  it('skal redigere inntekt for kun ytelse', () => {
    const brukersAndel = {
      andelsnr: 1,
      aktivitetStatus: 'BA',
    };
    const fakta = {
      ...faktaOmBeregning,
      faktaOmBeregningTilfeller: [{ kode: faktaOmBeregningTilfelle.FASTSETT_BG_KUN_YTELSE }],
    };
    const skalRedigereInntekt = skalFastsetteInntektForAndel(values, fakta, beregningsgrunnlag)(brukersAndel);
    expect(skalRedigereInntekt).toBe(true);
  });

  it('skal ikkje redigere inntekt for arbeidstakerandel med inntektsmelding i samme org som frilans', () => {
    const agOpplysning = {
      3284788923: {
        identifikator: '3284788923',
        navn: 'Virksomheten',
        erPrivatPerson: false,
      },
    };
    const andelFieldValue = {
      ...andelValuesUtenInntektsmelding,
      ...setGenerellAndelsinfo(arbeidstakerAndel4, agOpplysning, {} as AlleKodeverk),
    };
    const faktaOmBeregningCopy = { ...faktaOmBeregning };
    arbeidstakerAndel4.inntektPrMnd = 30000;
    faktaOmBeregningCopy.arbeidstakerOgFrilanserISammeOrganisasjonListe = [arbeidstakerAndel4];
    const skalRedigereInntekt = skalFastsetteInntektForAndel(values, faktaOmBeregningCopy, beregningsgrunnlag)(andelFieldValue);
    expect(skalRedigereInntekt).toBe(false);
  });

  it('skal redigere inntekt for arbeidstakerandel uten inntektsmelding i samme org som frilans', () => {
    const agOpplysning = {
      3284788923: {
        identifikator: '3284788923',
        navn: 'Virksomheten',
        erPrivatPerson: false,
      },
    };
    const andelFieldValue = {
      ...andelValuesMedInntektsmelding,
      ...setGenerellAndelsinfo(arbeidstakerAndel4, agOpplysning, {} as AlleKodeverk),
    };
    const faktaOmBeregningCopy = { ...faktaOmBeregning };
    arbeidstakerAndel4.inntektPrMnd = null;
    faktaOmBeregningCopy.arbeidstakerOgFrilanserISammeOrganisasjonListe = [arbeidstakerAndel4];
    const skalRedigereInntekt = skalFastsetteInntektForAndel(values, faktaOmBeregningCopy, beregningsgrunnlag)(andelFieldValue);
    expect(skalRedigereInntekt).toBe(true);
  });

  it('skal redigere inntekt for frilansandel som mottar ytelse', () => {
    const andelFieldValue = {
      ...andelValuesUtenInntektsmelding,
      ...setGenerellAndelsinfo(frilansAndel, {}, alleKodeverk),
    };
    const skalRedigereInntekt = skalFastsetteInntektForAndel(values, faktaOmBeregning, beregningsgrunnlag)(andelFieldValue);
    expect(skalRedigereInntekt).toBe(true);
  });

  it('skal redigere inntekt for frilansandel som ikke mottar ytelse, men er nyoppstartet', () => {
    const valuesLocalCopy = { ...values };
    valuesLocalCopy[finnFrilansFieldName()] = false;
    valuesLocalCopy[erNyoppstartetFLField] = true;
    const andelFieldValue = {
      ...andelValuesUtenInntektsmelding,
      ...setGenerellAndelsinfo(frilansAndel, {}, alleKodeverk),
    };
    const skalRedigereInntekt = skalFastsetteInntektForAndel(valuesLocalCopy, faktaOmBeregning, beregningsgrunnlag)(andelFieldValue);
    expect(skalRedigereInntekt).toBe(true);
  });

  it('skal ikke redigere inntekt for frilansandel som ikke mottar ytelse og ikke er nyoppstartet', () => {
    const valuesLocalCopy = { ...values };
    valuesLocalCopy[finnFrilansFieldName()] = false;
    valuesLocalCopy[erNyoppstartetFLField] = false;
    const andelFieldValue = {
      ...andelValuesUtenInntektsmelding,
      ...setGenerellAndelsinfo(frilansAndel, {}, alleKodeverk),
    };
    const skalRedigereInntekt = skalFastsetteInntektForAndel(valuesLocalCopy, faktaOmBeregning, beregningsgrunnlag)(andelFieldValue);
    expect(skalRedigereInntekt).toBe(false);
  });
  it('skal redigere inntekt for frilansandel i samme org som arbeidstaker', () => {
    const andelFieldValue = {
      ...andelValuesUtenInntektsmelding,
      ...setGenerellAndelsinfo(frilansAndel, {}, alleKodeverk),
    };
    faktaOmBeregning.arbeidstakerOgFrilanserISammeOrganisasjonListe = [arbeidstakerAndel4];
    const skalRedigereInntekt = skalFastsetteInntektForAndel(values, faktaOmBeregning, beregningsgrunnlag)(andelFieldValue);
    expect(skalRedigereInntekt).toBe(true);
  });

  it('skal mappe fastsattBeløp til beløp om skalRedigereInntekt er udefinert', () => {
    const andel = {
      fastsattBelop: '10 000',
      readOnlyBelop: '20 000',
    };
    const belop = mapToBelop(undefined)(andel);
    expect(belop).toBe(10000);
  });

  it('skal mappe fastsattBeløp til beløp om skalRedigereInntekt returnerer true', () => {
    const andel = {
      fastsattBelop: '10 000',
      readOnlyBelop: '20 000',
    };
    const belop = mapToBelop(() => true)(andel);
    expect(belop).toBe(10000);
  });

  it('skal mappe readOnlyBelop til beløp om skalRedigereInntekt returnerer false', () => {
    const andel = {
      fastsattBelop: '10 000',
      readOnlyBelop: '20 000',
    };
    const belop = mapToBelop(() => false)(andel);
    expect(belop).toBe(20000);
  });
});
