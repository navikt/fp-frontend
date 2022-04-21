import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import {
  validateSumFastsattBelop,
  validateTotalRefusjonPrArbeidsforhold,
  validateUlikeAndeler, validerBGGraderteAndeler,
} from './ValidateFordelteAndelerUtils';
import messages from '../../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);
const fieldname = 'feltnavn';
const likeAndelerFeilmelding = 'Andeler for samme aktivitet må ha ulik inntektskategori';
const refusjonHøyereEnnKravFeilmelding = 'Total refusjon for  kan ikke være høyere enn beløpet fra inntektsmeldingen.';
const gradertAndelMåVæreFordeltMerEnn0Feilmelding = 'Fastsatt beløp for gradert andel må være høyere enn 0.';

const getKodeverknavn = (kode) => {
  if (kode === 'AAP') {
    return 'Arbeidsavklaringspenger';
  }
  return '';
};

const arbeidsgiverOppysninger = {
  36363463463: {
    identifikator: '36363463463',
    navn: 'Andersen flyttebyrå',
    erPrivatPerson: false,
  },
  658568568: {
    identifikator: '658568568',
    navn: 'Torgersen flyttebyrå',
    erPrivatPerson: false,
  },
};

describe('<ValidateAndelerUtils>', () => {
  it('skal ikke gi feil om ingen andeler er lagt til', () => {
    const andeler = [{
      andelsnr: 1,
      andel: 'Virksomheten 1',
      nyAndel: false,
      lagtTilAvSaksbehandler: false,
      aktivitetStatus: 'AT',
      inntektskategori: 'ARBEIDSTAKER',
      arbeidsforholdId: '2974239',
      arbeidsgiverId: '999999999',
    },
    {
      andelsnr: 2,
      andel: 'Virksomheten 2',
      nyAndel: false,
      lagtTilAvSaksbehandler: false,
      aktivitetStatus: 'AT',
      inntektskategori: 'ARBEIDSTAKER',
      arbeidsforholdId: '433f34',
      arbeidsgiverId: '999999998',
    },
    {
      andelsnr: 3,
      andel: 'Virksomheten 3',
      nyAndel: false,
      lagtTilAvSaksbehandler: false,
      aktivitetStatus: 'AT',
      inntektskategori: 'ARBEIDSTAKER',
      arbeidsforholdId: 'egg4g232',
      arbeidsgiverId: '999999997',
    },
    ];

    const getValues = jest.fn();

    const ulikeAndelerError = validateUlikeAndeler(getValues, fieldname, andeler, intlMock);
    expect(ulikeAndelerError()).toBe(null);
  });

  it('skal gi feil om det er lagt til identisk andel', () => {
    const andeler = [{
      andelsnr: 1,
      andel: 'Virksomheten 1',
      nyAndel: false,
      lagtTilAvSaksbehandler: false,
      aktivitetStatus: 'AT',
      inntektskategori: 'ARBEIDSTAKER',
      arbeidsforholdId: '2974239',
      arbeidsgiverId: '999999999',
    },
    {
      andelsnr: 1,
      andelsnrRef: 1,
      andel: 'Virksomheten 1',
      nyAndel: true,
      lagtTilAvSaksbehandler: false,
      aktivitetStatus: 'AT',
      arbeidsforholdId: '2974239',
      arbeidsgiverId: '999999999',
    },
    ];

    const getValues = jest.fn(() => 'ARBEIDSTAKER');

    const ulikeAndelerError = validateUlikeAndeler(getValues, fieldname, andeler, intlMock);
    expect(ulikeAndelerError()).toBe(likeAndelerFeilmelding);
  });

  it('skal ikke gi feil om det er lagt til andel med ny inntektskategori', () => {
    const andeler = [{
      andelsnr: 1,
      andel: 'Virksomheten 1',
      nyAndel: false,
      lagtTilAvSaksbehandler: false,
      aktivitetStatus: 'AT',
      inntektskategori: 'ARBEIDSTAKER',
      arbeidsforholdId: '2974239',
      arbeidsgiverId: '999999999',
    },
    {
      andelsnr: 1,
      andelsnrRef: 1,
      andel: 'Virksomheten 1',
      nyAndel: true,
      lagtTilAvSaksbehandler: false,
      aktivitetStatus: 'AT',
      arbeidsforholdId: '2974239',
      arbeidsgiverId: '999999999',
    },
    ];

    const getValues = jest.fn((): string => 'DAGPENGER');

    const ulikeAndelerError = validateUlikeAndeler(getValues, fieldname, andeler, intlMock);
    expect(ulikeAndelerError()).toBe(null);
  });

  it('skal gi feil om det er lagt til andel med samme inntektskategori uten arbeid', () => {
    const andeler = [{
      andelsnr: 1,
      andel: 'Virksomheten 1',
      nyAndel: false,
      lagtTilAvSaksbehandler: false,
      aktivitetStatus: 'AT',
      inntektskategori: 'ARBEIDSTAKER',
      arbeidsforholdId: '2974239',
      arbeidsgiverId: '999999999',
    },
    {
      andelsnr: 2,
      andel: 'Frilans',
      nyAndel: false,
      lagtTilAvSaksbehandler: false,
      aktivitetStatus: 'FL',
      inntektskategori: 'FRILANS',
    },
    {
      andelsnr: 2,
      andelsnrRef: 2,
      andel: 'Frilans',
      nyAndel: true,
      lagtTilAvSaksbehandler: false,
      aktivitetStatus: 'FL',
    },
    ];

    const getValues = jest.fn((): string => 'FRILANS');

    const ulikeAndelerError = validateUlikeAndeler(getValues, fieldname, andeler, intlMock);
    expect(ulikeAndelerError()).toBe(likeAndelerFeilmelding);
  });

  it('skal gi feil om det er lagt til flere andeler men bare en av de er duplikat', () => {
    const andeler = [{
      andelsnr: 1,
      andel: 'Virksomheten 1',
      nyAndel: false,
      lagtTilAvSaksbehandler: false,
      aktivitetStatus: 'AT',
      inntektskategori: 'ARBEIDSTAKER',
      arbeidsforholdId: '2974239',
      arbeidsgiverId: '999999999',
    },
    {
      andelsnr: 1,
      andelsnrRef: 1,
      andel: 'Virksomheten 1',
      nyAndel: true,
      lagtTilAvSaksbehandler: false,
      aktivitetStatus: 'AT',
      arbeidsforholdId: '2974239',
      arbeidsgiverId: '999999999',
    },
    {
      andelsnr: 1,
      andelsnrRef: 1,
      andel: 'Virksomheten 1',
      nyAndel: true,
      lagtTilAvSaksbehandler: false,
      aktivitetStatus: 'AT',
      arbeidsforholdId: '2974239',
      arbeidsgiverId: '999999999',
    },
    {
      andelsnr: 1,
      andelsnrRef: 1,
      andel: 'Virksomheten 1',
      nyAndel: true,
      lagtTilAvSaksbehandler: false,
      aktivitetStatus: 'AT',
      arbeidsforholdId: '2974239',
      arbeidsgiverId: '999999999',
    },
    ];

    const getValues = jest.fn((x: string): string => {
      switch (x) {
        case 'feltnavn.1.inntektskategori':
          return 'DAGPENGER';
        case 'feltnavn.2.inntektskategori':
          return 'FRILANS';
        case 'feltnavn.3.inntektskategori':
          return 'FRILANS';
        default:
          return null;
      }
    });

    const ulikeAndelerError = validateUlikeAndeler(getValues, fieldname, andeler, intlMock);
    expect(ulikeAndelerError()).toBe(likeAndelerFeilmelding);
  });

  it('skal ikke gi feil når total refusjon er lavere enn inntektsmeldingen', () => {
    const andeler = [{
      andelsnr: 1,
      andel: 'Virksomheten 1',
      nyAndel: false,
      lagtTilAvSaksbehandler: false,
      aktivitetStatus: 'AT',
      inntektskategori: 'ARBEIDSTAKER',
      arbeidsforholdId: '2974239',
      arbeidsgiverId: '999999999',
      refusjonskravFraInntektsmelding: 250000,
    },
    {
      andelsnr: 2,
      andel: 'Frilans',
      nyAndel: false,
      lagtTilAvSaksbehandler: false,
      aktivitetStatus: 'FL',
    },
    ];

    const getValues = jest.fn((x: string): number => {
      switch (x) {
        case 'feltnavn.0.refusjonskrav':
          return 250000;
        default:
          return null;
      }
    });

    const ulikeAndelerError = validateTotalRefusjonPrArbeidsforhold(andeler, fieldname, getValues, getKodeverknavn, arbeidsgiverOppysninger, intlMock);
    expect(ulikeAndelerError()).toBe(null);
  });

  it('skal gi feil når total refusjon er høyere enn inntektsmeldingen', () => {
    const andeler = [{
      andelsnr: 1,
      andel: 'Virksomheten 1',
      nyAndel: false,
      lagtTilAvSaksbehandler: false,
      aktivitetStatus: 'AT',
      inntektskategori: 'ARBEIDSTAKER',
      arbeidsforholdId: '2974239',
      arbeidsgiverId: '999999999',
      refusjonskravFraInntektsmelding: 250000,
    },
    {
      andelsnr: 2,
      andel: 'Frilans',
      nyAndel: false,
      lagtTilAvSaksbehandler: false,
      aktivitetStatus: 'FL',
    },
    ];

    const getValues = jest.fn((x: string): number => {
      switch (x) {
        case 'feltnavn.0.refusjonskrav':
          return 250001;
        default:
          return null;
      }
    });

    const ulikeAndelerError = validateTotalRefusjonPrArbeidsforhold(andeler, fieldname, getValues, getKodeverknavn, arbeidsgiverOppysninger, intlMock);
    expect(ulikeAndelerError()).toBe(refusjonHøyereEnnKravFeilmelding);
  });

  it('skal ikke validere andeler uten refusjon', () => {
    const andeler = [
      {
        andelsnr: 2,
        andel: 'Frilans',
        nyAndel: false,
        lagtTilAvSaksbehandler: false,
        aktivitetStatus: 'FL',
        refusjonskrav: null,
        refusjonskravFraInntektsmelding: 0,
      },
    ];

    const ulikeAndelerError = validateTotalRefusjonPrArbeidsforhold(andeler, fieldname, jest.fn(), getKodeverknavn, arbeidsgiverOppysninger, intlMock);
    expect(ulikeAndelerError()).toBe(null);
  });

  it('skal validere at hele beløpet er fordelt', () => {
    const andeler = [{
      andelsnr: 1,
      skalRedigereInntekt: true,
      andel: 'Virksomheten 1',
      nyAndel: false,
      lagtTilAvSaksbehandler: false,
      aktivitetStatus: 'AT',
      inntektskategori: 'ARBEIDSTAKER',
      arbeidsforholdId: '2974239',
      arbeidsgiverId: '999999999',
    },
    {
      andelsnr: 2,
      skalRedigereInntekt: true,
      andel: 'Frilans',
      nyAndel: false,
      lagtTilAvSaksbehandler: false,
      aktivitetStatus: 'FL',
      inntektskategori: 'FRILANS',
    },
    ];

    const getValues = jest.fn((x: string): number => {
      switch (x) {
        case 'feltnavn.0.fastsattBelop':
          return 300000;
        case 'feltnavn.1.fastsattBelop':
          return 200000;
        default:
          return null;
      }
    });

    const validateFastsattBeløp = validateSumFastsattBelop(getValues, fieldname, andeler, 500000, intlMock);
    expect(validateFastsattBeløp()).toBe(null);
  });

  it('skal gi feil når total fordeling er større enn tillatt beløp', () => {
    const andeler = [{
      andelsnr: 1,
      skalRedigereInntekt: true,
      andel: 'Virksomheten 1',
      nyAndel: false,
      lagtTilAvSaksbehandler: false,
      aktivitetStatus: 'AT',
      inntektskategori: 'ARBEIDSTAKER',
      arbeidsforholdId: '2974239',
      arbeidsgiverId: '999999999',
    },
    {
      andelsnr: 2,
      skalRedigereInntekt: true,
      andel: 'Frilans',
      nyAndel: false,
      lagtTilAvSaksbehandler: false,
      aktivitetStatus: 'FL',
      inntektskategori: 'FRILANS',
    },
    ];

    const getValues = jest.fn((x: string): number => {
      switch (x) {
        case 'feltnavn.0.fastsattBelop':
          return 300000;
        case 'feltnavn.1.fastsattBelop':
          return 300000;
        default:
          return null;
      }
    });

    const validateFastsattBeløp = validateSumFastsattBelop(getValues, fieldname, andeler, 500000, intlMock);
    expect(validateFastsattBeløp()).toBe('Summen må være lik 500 000');
  });

  it('skal ikke gi feil når gradert andel har mer enn 0 i fordelt beløp', () => {
    const andeler = [{
      andelsnr: 1,
      skalRedigereInntekt: true,
      andel: 'Virksomheten 1',
      nyAndel: false,
      lagtTilAvSaksbehandler: false,
      aktivitetStatus: 'AT',
      inntektskategori: 'ARBEIDSTAKER',
      arbeidsforholdId: '2974239',
      arbeidsgiverId: '999999999',
      andelIArbeid: '50',
      arbeidsperiodeTom: '9999-12-31',
    },
    {
      andelsnr: 2,
      skalRedigereInntekt: true,
      andel: 'Frilans',
      nyAndel: false,
      lagtTilAvSaksbehandler: false,
      aktivitetStatus: 'FL',
      inntektskategori: 'FRILANS',
    },
    ];

    const getValues = jest.fn((x: string): number => {
      switch (x) {
        case 'feltnavn.0.fastsattBelop':
          return 1;
        case 'feltnavn.1.fastsattBelop':
          return 499999;
        default:
          return null;
      }
    });

    const verifiserGraderteAndeler = validerBGGraderteAndeler(getValues, fieldname, andeler, '2022-04-21', intlMock);
    expect(verifiserGraderteAndeler()).toBe(null);
  });

  it('skal gi feil når gradert andel har 0 i fordelt beløp', () => {
    const andeler = [{
      andelsnr: 1,
      skalRedigereInntekt: true,
      andel: 'Virksomheten 1',
      nyAndel: false,
      lagtTilAvSaksbehandler: false,
      aktivitetStatus: 'AT',
      inntektskategori: 'ARBEIDSTAKER',
      arbeidsforholdId: '2974239',
      arbeidsgiverId: '999999999',
      andelIArbeid: '50',
      arbeidsperiodeTom: '9999-12-31',
    },
    {
      andelsnr: 2,
      skalRedigereInntekt: true,
      andel: 'Frilans',
      nyAndel: false,
      lagtTilAvSaksbehandler: false,
      aktivitetStatus: 'FL',
      inntektskategori: 'FRILANS',
    },
    ];

    const getValues = jest.fn((x: string): number => {
      switch (x) {
        case 'feltnavn.0.fastsattBelop':
          return 0;
        case 'feltnavn.1.fastsattBelop':
          return 500000;
        default:
          return null;
      }
    });

    const verifiserGraderteAndeler = validerBGGraderteAndeler(getValues, fieldname, andeler, '2022-04-21', intlMock);
    expect(verifiserGraderteAndeler()).toBe(gradertAndelMåVæreFordeltMerEnn0Feilmelding);
  });

  it('skal ikke gi feil når gradert andel har 0 i fordelt beløp men det er avsluttet', () => {
    const andeler = [{
      andelsnr: 1,
      skalRedigereInntekt: true,
      andel: 'Virksomheten 1',
      nyAndel: false,
      lagtTilAvSaksbehandler: false,
      aktivitetStatus: 'AT',
      inntektskategori: 'ARBEIDSTAKER',
      arbeidsforholdId: '2974239',
      arbeidsgiverId: '999999999',
      andelIArbeid: '50',
      arbeidsperiodeTom: '2022-04-20',
    },
    {
      andelsnr: 2,
      skalRedigereInntekt: true,
      andel: 'Frilans',
      nyAndel: false,
      lagtTilAvSaksbehandler: false,
      aktivitetStatus: 'FL',
      inntektskategori: 'FRILANS',
    },
    ];

    const getValues = jest.fn((x: string): number => {
      switch (x) {
        case 'feltnavn.0.fastsattBelop':
          return 0;
        case 'feltnavn.1.fastsattBelop':
          return 500000;
        default:
          return null;
      }
    });

    const verifiserGraderteAndeler = validerBGGraderteAndeler(getValues, fieldname, andeler, '2022-04-21', intlMock);
    expect(verifiserGraderteAndeler()).toBe(null);
  });

  it('skal tillate 0 i fordeling på andeler som ikke skal graderes', () => {
    const andeler = [{
      andelsnr: 1,
      skalRedigereInntekt: true,
      andel: 'Virksomheten 1',
      nyAndel: false,
      lagtTilAvSaksbehandler: false,
      aktivitetStatus: 'AT',
      inntektskategori: 'ARBEIDSTAKER',
      arbeidsforholdId: '2974239',
      arbeidsgiverId: '999999999',
      andelIArbeid: '0',
      arbeidsperiodeTom: '9999-12-31',
    },
    {
      andelsnr: 2,
      skalRedigereInntekt: true,
      andel: 'Frilans',
      nyAndel: false,
      lagtTilAvSaksbehandler: false,
      aktivitetStatus: 'FL',
      inntektskategori: 'FRILANS',
    },
    ];

    const getValues = jest.fn((x: string): number => {
      switch (x) {
        case 'feltnavn.0.fastsattBelop':
          return 0;
        case 'feltnavn.1.fastsattBelop':
          return 500000;
        default:
          return null;
      }
    });

    const verifiserGraderteAndeler = validerBGGraderteAndeler(getValues, fieldname, andeler, '2022-04-21', intlMock);
    expect(verifiserGraderteAndeler()).toBe(null);
  });
});
