import { RefusjonTilVurderingAndel } from '@fpsak-frontend/types';
import { transformValues } from './VurderEndringRefusjonForm';
import { lagNøkkelDelvisRefusjon, lagNøkkelRefusjonsstart } from './VurderEndringRefusjonRad';

const BEGRUNNELSE_FIELD = 'VURDER_REFUSJON_BERGRUNN_BEGRUNNELSE';

const lagAndel = (agNavn: string, agOrgnr: string, arbId: string | undefined, dato: string | undefined) => ({
  aktivitetStatus: {
    kode: 'AT',
    kodeverk: 'test',
  },
  nyttRefusjonskravFom: dato,
  arbeidsgiver: {
    arbeidsgiverOrgnr: agOrgnr,
  },
  tidligsteMuligeRefusjonsdato: '01.09.2000',
  arbeidsgiverNavn: agNavn,
  internArbeidsforholdRef: arbId,
  tidligereUtbetalinger: [],
  skalKunneFastsetteDelvisRefusjon: false,
});

const lagBG = (andeler) => ({
  refusjonTilVurdering: {
    andeler,
  },
});

describe('<VurderEndringRefusjonForm>', () => {
  it('Skal utføre transformeValues korrekt med et ref.krav hos en AG', () => {
    const andel = lagAndel('Biri bakeri og saueoppdrett', '999999999', undefined, '01.09.2018') as RefusjonTilVurderingAndel;
    const values = {};
    values[lagNøkkelRefusjonsstart(andel)] = '01.10.2018';
    values[BEGRUNNELSE_FIELD] = 'En begrunnelse';
    const transformed = transformValues(values, lagBG([andel]));
    const expected = {
      kode: '5059',
      begrunnelse: 'En begrunnelse',
      fastsatteAndeler: [
        {
          arbeidsgiverOrgnr: '999999999',
          arbeidsgiverAktoerId: undefined,
          internArbeidsforholdRef: undefined,
          fastsattRefusjonFom: '01.10.2018',
          delvisRefusjonPrMndFørStart: null,
        },
      ],
    };
    expect(transformed).toEqual(expected);
  });

  it('Skal utføre transformeValues korrekt med to ref.krav hos en AG', () => {
    const andel1 = lagAndel('Biri bakeri og saueoppdrett', '999999999', 'REF-1', '01.09.2018') as RefusjonTilVurderingAndel;
    const andel2 = lagAndel('Biri bakeri og saueoppdrett', '999999999', 'REF-2', '01.10.2018') as RefusjonTilVurderingAndel;
    const values = {};
    values[lagNøkkelRefusjonsstart(andel1)] = '01.10.2018';
    values[lagNøkkelRefusjonsstart(andel2)] = '01.11.2018';
    values[BEGRUNNELSE_FIELD] = 'En begrunnelse';
    const transformed = transformValues(values, lagBG([andel1, andel2]));
    const expected = {
      kode: '5059',
      begrunnelse: 'En begrunnelse',
      fastsatteAndeler: [
        {
          arbeidsgiverOrgnr: '999999999',
          arbeidsgiverAktoerId: undefined,
          internArbeidsforholdRef: 'REF-1',
          fastsattRefusjonFom: '01.10.2018',
          delvisRefusjonPrMndFørStart: null,
        },
        {
          arbeidsgiverOrgnr: '999999999',
          arbeidsgiverAktoerId: undefined,
          internArbeidsforholdRef: 'REF-2',
          fastsattRefusjonFom: '01.11.2018',
          delvisRefusjonPrMndFørStart: null,
        },
      ],
    };
    expect(transformed).toEqual(expected);
  });
  it('Skal utføre transformeValues korrekt med to ref.krav hos forskjellig AG', () => {
    const andel1 = lagAndel('Biri bakeri og saueoppdrett', '999999999', 'REF-1', '01.09.2018') as RefusjonTilVurderingAndel;
    const andel2 = lagAndel('Biri bakeri og griseoppdrett', '999999998', 'REF-1', '01.10.2018') as RefusjonTilVurderingAndel;
    const values = {};
    values[lagNøkkelRefusjonsstart(andel1)] = '01.10.2018';
    values[lagNøkkelRefusjonsstart(andel2)] = '01.11.2018';
    values[BEGRUNNELSE_FIELD] = 'En begrunnelse';
    const transformed = transformValues(values, lagBG([andel1, andel2]));
    const expected = {
      kode: '5059',
      begrunnelse: 'En begrunnelse',
      fastsatteAndeler: [
        {
          arbeidsgiverOrgnr: '999999999',
          arbeidsgiverAktoerId: undefined,
          internArbeidsforholdRef: 'REF-1',
          fastsattRefusjonFom: '01.10.2018',
          delvisRefusjonPrMndFørStart: null,
        },
        {
          arbeidsgiverOrgnr: '999999998',
          arbeidsgiverAktoerId: undefined,
          internArbeidsforholdRef: 'REF-1',
          fastsattRefusjonFom: '01.11.2018',
          delvisRefusjonPrMndFørStart: null,
        },
      ],
    };
    expect(transformed).toEqual(expected);
  });
  it('Skal utføre transformeValues korrekt når delvis refusjon skal kunne fastsettes', () => {
    const andel1 = lagAndel('Biri bakeri og saueoppdrett', '999999999', 'REF-1', '01.09.2018');
    const andel2 = lagAndel('Biri bakeri og griseoppdrett', '999999998', 'REF-1', '01.10.2018') as RefusjonTilVurderingAndel;
    andel1.skalKunneFastsetteDelvisRefusjon = true;
    const values = {};
    values[lagNøkkelRefusjonsstart(andel1)] = '01.10.2018';
    values[lagNøkkelRefusjonsstart(andel2)] = '01.11.2018';
    values[lagNøkkelDelvisRefusjon(andel1)] = '10 000';
    values[BEGRUNNELSE_FIELD] = 'En begrunnelse';
    const transformed = transformValues(values, lagBG([andel1 as RefusjonTilVurderingAndel, andel2]));
    const expected = {
      kode: '5059',
      begrunnelse: 'En begrunnelse',
      fastsatteAndeler: [
        {
          arbeidsgiverOrgnr: '999999999',
          arbeidsgiverAktoerId: undefined,
          internArbeidsforholdRef: 'REF-1',
          fastsattRefusjonFom: '01.10.2018',
          delvisRefusjonPrMndFørStart: 10000,
        },
        {
          arbeidsgiverOrgnr: '999999998',
          arbeidsgiverAktoerId: undefined,
          internArbeidsforholdRef: 'REF-1',
          fastsattRefusjonFom: '01.11.2018',
          delvisRefusjonPrMndFørStart: null,
        },
      ],
    };
    expect(transformed).toEqual(expected);
  });
});
