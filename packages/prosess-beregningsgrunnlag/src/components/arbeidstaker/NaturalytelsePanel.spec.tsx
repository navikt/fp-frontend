import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import { lagNaturalytelseTabelldata } from './NaturalytelsePanel';

const lagBGPeriode = (fom, tom, andeler) => ({
  beregningsgrunnlagPeriodeFom: fom,
  beregningsgrunnlagPeriodeTom: tom,
  beregningsgrunnlagPrStatusOgAndel: andeler,
});

const lagAndel = (orgnr, natYtelse) => ({
  aktivitetStatus: {
    kode: aktivitetStatus.ARBEIDSTAKER,
    kodeverk: 'AKTIVITET_STATUS',
  },
  arbeidsforhold: {
    arbeidsgiverIdent: orgnr,
    naturalytelseBortfaltPrÅr: natYtelse,
  },
});

const agOpplysninger = {
  999: {
    identifikator: '999',
    erPrivatPerson: false,
    navn: 'Bedrift 1',
  },
  998: {
    identifikator: '998',
    erPrivatPerson: false,
    navn: 'Bedrift 2',
  },
};

describe('<NaturalytelsePanel>', () => {
  it('Skal teste at naturalytelsemap lages korrekt ved et arbeidsforhold', () => {
    const perioder = [lagBGPeriode('2020-01-01', '2020-01-30', [lagAndel('999', 500)])];
    const { rader } = lagNaturalytelseTabelldata(perioder, agOpplysninger);
    expect(rader).toHaveLength(1);
    expect(rader[0].visningsnavn).toBe('Bedrift 1 (999)');
    expect(rader[0].naturalytelseEndringer).toHaveLength(1);
    expect(rader[0].naturalytelseEndringer[0].fom).toBe('2020-01-01');
    expect(rader[0].naturalytelseEndringer[0].tom).toBe('2020-01-30');
    expect(rader[0].naturalytelseEndringer[0].beløpPrÅr).toBe(500);
  });

  it('Skal teste at naturalytelsemap lages korrekt ved et arbeidsforhold med og et uten bortfalt ytelse', () => {
    const perioder = [lagBGPeriode('2020-01-01', '2020-01-30', [lagAndel('999', 500), lagAndel('998', null)])];
    const { rader } = lagNaturalytelseTabelldata(perioder, agOpplysninger);
    expect(rader).toHaveLength(1);
    expect(rader[0].visningsnavn).toBe('Bedrift 1 (999)');
    expect(rader[0].naturalytelseEndringer).toHaveLength(1);
    expect(rader[0].naturalytelseEndringer[0].fom).toBe('2020-01-01');
    expect(rader[0].naturalytelseEndringer[0].tom).toBe('2020-01-30');
    expect(rader[0].naturalytelseEndringer[0].beløpPrÅr).toBe(500);
  });

  it('Skal teste at naturalytelsemap lages korrekt ved to arbeidsforhold med bortfalt ytelse', () => {
    const perioder = [lagBGPeriode('2020-01-01', '2020-01-30', [lagAndel('999', 500), lagAndel('998', 300)])];
    const { rader } = lagNaturalytelseTabelldata(perioder, agOpplysninger);
    expect(rader).toHaveLength(2);

    const førsteAndel = rader.find((rad) => rad.visningsnavn === 'Bedrift 1 (999)');
    expect(førsteAndel.naturalytelseEndringer).toHaveLength(1);
    expect(førsteAndel.naturalytelseEndringer[0].fom).toBe('2020-01-01');
    expect(førsteAndel.naturalytelseEndringer[0].tom).toBe('2020-01-30');
    expect(førsteAndel.naturalytelseEndringer[0].beløpPrÅr).toBe(500);

    const andreAndel = rader.find((rad) => rad.visningsnavn === 'Bedrift 2 (998)');
    expect(andreAndel.naturalytelseEndringer).toHaveLength(1);
    expect(andreAndel.naturalytelseEndringer[0].fom).toBe('2020-01-01');
    expect(andreAndel.naturalytelseEndringer[0].tom).toBe('2020-01-30');
    expect(andreAndel.naturalytelseEndringer[0].beløpPrÅr).toBe(300);
  });

  it('Skal teste at naturalytelsemap lages korrekt ved to arbeidsforhold med bortfalt ytelse i to perioder', () => {
    const perioder = [lagBGPeriode('2020-01-01', '2020-01-31', [lagAndel('999', 500), lagAndel('998', 300)]),
      lagBGPeriode('2020-02-01', '2020-02-27', [lagAndel('999', 400), lagAndel('998', 200)])];
    const { rader } = lagNaturalytelseTabelldata(perioder, agOpplysninger);
    expect(rader).toHaveLength(2);

    const førsteAndel = rader.find((rad) => rad.visningsnavn === 'Bedrift 1 (999)');
    expect(førsteAndel.naturalytelseEndringer).toHaveLength(2);
    expect(førsteAndel.naturalytelseEndringer.some((e) => e.fom === '2020-01-01' && e.tom === '2020-01-31' && e.beløpPrÅr === 500)).toBeTruthy();
    expect(førsteAndel.naturalytelseEndringer.some((e) => e.fom === '2020-02-01' && e.tom === null && e.beløpPrÅr === 400)).toBeTruthy();

    const andreAndel = rader.find((rad) => rad.visningsnavn === 'Bedrift 2 (998)');
    expect(andreAndel.naturalytelseEndringer).toHaveLength(2);
    expect(andreAndel.naturalytelseEndringer.some((e) => e.fom === '2020-01-01' && e.tom === '2020-01-31' && e.beløpPrÅr === 300)).toBeTruthy();
    expect(andreAndel.naturalytelseEndringer.some((e) => e.fom === '2020-02-01' && e.tom === null && e.beløpPrÅr === 200)).toBeTruthy();
  });
});
