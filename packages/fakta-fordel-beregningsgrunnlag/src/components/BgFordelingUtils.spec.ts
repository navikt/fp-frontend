import { formatCurrencyNoKr } from '@navikt/ft-utils';
import aktivitetStatuser from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import { BeregningsgrunnlagArbeidsforhold } from '@fpsak-frontend/types';
import {
  mapToBelop,
  setArbeidsforholdInitialValues,
  setGenerellAndelsinfo,
  settAndelIArbeid,
  settFastsattBelop,
} from './BgFordelingUtils';
import { FordelBeregningsgrunnlagAndelValues } from '../types/FordelingTsType';

const arbeidsgiver = {
  arbeidsgiverIdent: '3284788923',
  startdato: '2017-01-01',
  opphoersdato: '2018-01-01',
};

const agOpplysninger = {
  3284788923: {
    identifikator: '3284788923',
    erPrivatPerson: false,
    navn: 'Virksomheten',
  },
};

const arbeidstakerIkkeFastsatt = {
  lagtTilAvSaksbehandler: false,
  aktivitetStatus: aktivitetStatuser.ARBEIDSTAKER,
  inntektskategori: 'ARBEIDSTAKER',
};

const getKodeverknavn = (kode) => {
  if (kode === aktivitetStatuser.ARBEIDSTAKER) {
    return 'Arbeidstaker';
  }
  if (kode === aktivitetStatuser.SELVSTENDIG_NAERINGSDRIVENDE) {
    return 'Selvstendig næringsdrivende';
  }
  return '';
};

describe('<BgFordelingUtils>', () => {
  it('skal sette riktig fastsatt beløp for andel i periode fastsatt bruttoPrAar og fordeltPrAar', () => {
    const fordeltPrAar = 10000;
    const bruttoPrAar = 50000;
    const skalPreutfylleMedBeregningsgrunnlag = true;
    const fastsattBelop = settFastsattBelop(fordeltPrAar, bruttoPrAar, skalPreutfylleMedBeregningsgrunnlag);
    expect(fastsattBelop).toBe(formatCurrencyNoKr(fordeltPrAar));
  });

  it('skal sette riktig fastsatt beløp for andel i periode uten fordeltBeløp og med brutto', () => {
    const fordeltPrAar = null;
    const bruttoPrAar = 50000;
    const skalPreutfylleMedBeregningsgrunnlag = true;
    const fastsattBelop = settFastsattBelop(fordeltPrAar, bruttoPrAar, skalPreutfylleMedBeregningsgrunnlag);
    expect(fastsattBelop).toBe(formatCurrencyNoKr(bruttoPrAar));
  });

  it('skal returnere tom streng om ingen andeler i arbeid', () => {
    const andelIArbeid = settAndelIArbeid([]);
    expect(andelIArbeid).toBe('');
  });

  it('skal returnere ein andel i arbeid om det finnes ein andel', () => {
    const andelIArbeid = settAndelIArbeid([50]);
    expect(andelIArbeid).toBe('50.00');
  });

  it('skal returnere min - max om fleire andeler i arbeid', () => {
    const andelIArbeid = settAndelIArbeid([20, 30, 40, 60, 10]);
    expect(andelIArbeid).toBe('10 - 60');
  });

  it('skal sette initial values for generell andelinfo med arbeidsforhold', () => {
    const andelValueFromState = {
      arbeidsforhold: {
        arbeidsgiverIdent: '3284788923',
        arbeidsforholdId: '321378huda7e2',
        eksternArbeidsforholdId: '345678',
      } as BeregningsgrunnlagArbeidsforhold,
      aktivitetStatus: aktivitetStatuser.ARBEIDSTAKER,
      andelsnr: 3,
      kilde: 'PROSESS_START',
      lagtTilAvSaksbehandler: false,
      inntektskategori: 'ARBEIDSTAKER',
    };

    const andelsInfo = setGenerellAndelsinfo(andelValueFromState, false, getKodeverknavn, agOpplysninger);
    expect(andelsInfo.andel).toBe('Virksomheten (3284788923)...5678');
    expect(andelsInfo.aktivitetStatus).toBe('AT');
    expect(andelsInfo.andelsnr).toBe(3);
    expect(andelsInfo.nyAndel).toBe(false);
    expect(andelsInfo.kilde).toBe('PROSESS_START');
    expect(andelsInfo.lagtTilAvSaksbehandler).toBe(false);
    expect(andelsInfo.inntektskategori).toBe('ARBEIDSTAKER');
  });

  it('skal sette initial values for generell andelinfo uten arbeidsforhold', () => {
    const andelValueFromState = {
      aktivitetStatus: aktivitetStatuser.SELVSTENDIG_NAERINGSDRIVENDE,
      andelsnr: 2,
      lagtTilAvSaksbehandler: true,
      inntektskategori: 'SN',
    };
    const andelsInfo = setGenerellAndelsinfo(andelValueFromState, false, getKodeverknavn, agOpplysninger);
    expect(andelsInfo.andel).toBe('Selvstendig næringsdrivende');
    expect(andelsInfo.aktivitetStatus).toBe('SN');
    expect(andelsInfo.andelsnr).toBe(2);
    expect(andelsInfo.nyAndel).toBe(false);
    expect(andelsInfo.lagtTilAvSaksbehandler).toBe(true);
    expect(andelsInfo.inntektskategori).toBe('SN');
  });

  it('skal ikkje sette arbeidsforhold initial values for andel uten arbeidsforhold', () => {
    const andelValueFromState = {
      aktivitetStatus: aktivitetStatuser.SELVSTENDIG_NAERINGSDRIVENDE,
      andelsnr: 2,
      lagtTilAvSaksbehandler: true,
      inntektskategori: 'SN',
    };
    const arbeidsforholdIV = setArbeidsforholdInitialValues(andelValueFromState);
    expect(arbeidsforholdIV.arbeidsforholdId).toBe('');
    expect(arbeidsforholdIV.arbeidsperiodeFom).toBe('');
    expect(arbeidsforholdIV.arbeidsperiodeTom).toBe('');
  });

  const arbeidstakerAndel3 = {
    arbeidsforhold: {
      ...arbeidsgiver,
      arbeidsforholdId: '321378huda7e2',
    } as BeregningsgrunnlagArbeidsforhold,
    andelsnr: 3,
    ...arbeidstakerIkkeFastsatt,
  };

  it('skal sette arbeidsforhold initial values for andel med arbeidsforhold', () => {
    const arbeidsforholdIV = setArbeidsforholdInitialValues(arbeidstakerAndel3);
    expect(arbeidsforholdIV.arbeidsforholdId).toBe('321378huda7e2');
    expect(arbeidsforholdIV.arbeidsperiodeFom).toBe('2017-01-01');
    expect(arbeidsforholdIV.arbeidsperiodeTom).toBe('2018-01-01');
  });

  it('skal mappe fastsattBeløp til beløp om inntekt skal redigeres', () => {
    const andel = {
      skalRedigereInntekt: true,
      fastsattBelop: '10 000',
      readOnlyBelop: '20 000',
    };
    const belop = mapToBelop(andel as FordelBeregningsgrunnlagAndelValues);
    expect(belop).toBe(10000);
  });

  it('skal mappe readOnlyBelop til beløp om inntekt ikke skal redigeres', () => {
    const andel = {
      skalRedigereInntekt: false,
      fastsattBelop: '10 000',
      readOnlyBelop: '20 000',
    };
    const belop = mapToBelop(andel as FordelBeregningsgrunnlagAndelValues);
    expect(belop).toBe(20000);
  });
});
