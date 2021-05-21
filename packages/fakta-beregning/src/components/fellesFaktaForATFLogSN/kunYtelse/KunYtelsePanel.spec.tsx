import inntektskategorier from '@fpsak-frontend/kodeverk/src/inntektskategorier';
import { AlleKodeverk } from '@fpsak-frontend/types';

import KunYtelsePanel, { brukersAndelFieldArrayName } from './KunYtelsePanel';
import { besteberegningField } from './KunYtelseBesteberegningPanel';

const faktaOmBeregningAndel1 = {
  andelsnr: 1,
  fastsattBelopPrMnd: null,
  lagtTilAvSaksbehandler: false,
  inntektskategori: { kode: inntektskategorier.UDEFINERT, kodeverk: 'test' },
  aktivitetStatus: { kode: 'BA', kodeverk: 'AKTIVITET_STATUS' },
};

const faktaOmBeregningAndel2 = {
  andelsnr: 2,
  fastsattBelopPrMnd: 10000,
  lagtTilAvSaksbehandler: true,
  inntektskategori: { kode: inntektskategorier.ARBEIDSTAKER, kodeverk: 'test' },
  aktivitetStatus: { kode: 'BA', kodeverk: 'AKTIVITET_STATUS' },
};

const alleKodeverk = {
  OpptjeningAktivitetType: [
    {
      kode: 'ARBEID',
      navn: 'Arbeid',
      kodeverk: 'OPPTJENING_AKTIVITET_TYPE',
    },
  ],
  AktivitetStatus: [
    {
      kode: 'BA',
      navn: 'Brukers andel',
      kodeverk: 'AKTIVITET_STATUS',
    },
  ],
} as AlleKodeverk;

const faktaOmBeregningAndeler = [faktaOmBeregningAndel1, faktaOmBeregningAndel2];

describe('<KunYtelsePanel>', () => {
  it('skal transform values riktig', () => {
    const kunYtelse = { fodendeKvinneMedDP: false };
    const andel1 = {
      andelsnr: 1, nyAndel: false, lagtTilAvSaksbehandler: false, fastsattBelop: '10 000', inntektskategori: inntektskategorier.ARBEIDSTAKER,
    };
    const andel2 = {
      andelsnr: null, nyAndel: true, lagtTilAvSaksbehandler: true, fastsattBelop: '20 000', inntektskategori: inntektskategorier.SJØMANN,
    };
    const values = {};
    values[`${brukersAndelFieldArrayName}`] = [andel1, andel2];
    const transformedValues = KunYtelsePanel.transformValues(values, kunYtelse);
    expect(transformedValues.kunYtelseFordeling.skalBrukeBesteberegning).toBe(null);
    expect(transformedValues.kunYtelseFordeling.andeler).toHaveLength(2);
    expect(transformedValues.kunYtelseFordeling.andeler[0].andelsnr).toBe(1);
    expect(transformedValues.kunYtelseFordeling.andeler[0].fastsattBeløp).toBe(10000);
    expect(transformedValues.kunYtelseFordeling.andeler[0].inntektskategori).toBe(inntektskategorier.ARBEIDSTAKER);
    expect(transformedValues.kunYtelseFordeling.andeler[0].nyAndel).toBe(false);
    expect(transformedValues.kunYtelseFordeling.andeler[0].lagtTilAvSaksbehandler).toBe(false);

    expect(transformedValues.kunYtelseFordeling.andeler[1].andelsnr).toBe(null);
    expect(transformedValues.kunYtelseFordeling.andeler[1].fastsattBeløp).toBe(20000);
    expect(transformedValues.kunYtelseFordeling.andeler[1].inntektskategori).toBe(inntektskategorier.SJØMANN);
    expect(transformedValues.kunYtelseFordeling.andeler[1].nyAndel).toBe(true);
    expect(transformedValues.kunYtelseFordeling.andeler[1].lagtTilAvSaksbehandler).toBe(true);
  });

  it('skal bygge initial values', () => {
    const andel1 = {
      andelsnr: 1,
      fastsattBelopPrMnd: null,
      lagtTilAvSaksbehandler: false,
      inntektskategori: { kode: inntektskategorier.UDEFINERT, kodeverk: 'test' },
      aktivitetStatus: { kode: 'BA', kodeverk: 'AKTIVITET_STATUS' },
    };
    const andel2 = {
      andelsnr: 2,
      fastsattBelopPrMnd: 10000,
      lagtTilAvSaksbehandler: true,
      inntektskategori: { kode: inntektskategorier.ARBEIDSTAKER, kodeverk: 'test' },
      aktivitetStatus: { kode: 'BA', kodeverk: 'AKTIVITET_STATUS' },
    };
    const kunYtelse = {
      fodendeKvinneMedDP: false,
      andeler: [andel1, andel2],
    };
    const initialValues = KunYtelsePanel.buildInitialValues(kunYtelse, faktaOmBeregningAndeler, {}, alleKodeverk);
    const andeler = initialValues[`${brukersAndelFieldArrayName}`];
    expect(andeler).toHaveLength(2);
    expect(andeler[0].andelsnr).toBe(1);
    expect(andeler[0].andel).toBe('Brukers andel');
    expect(andeler[0].aktivitetStatus).toBe('BA');
    expect(andeler[0].fastsattBelop).toBe('');
    expect(andeler[0].inntektskategori).toBe('');
    expect(andeler[0].nyAndel).toBe(false);
    expect(andeler[0].lagtTilAvSaksbehandler).toBe(false);

    expect(andeler[1].andelsnr).toBe(2);
    expect(andeler[1].andel).toBe('Brukers andel');
    expect(andeler[1].fastsattBelop).toBe('10 000');
    expect(andeler[1].aktivitetStatus).toBe('BA');
    expect(andeler[1].inntektskategori).toBe(inntektskategorier.ARBEIDSTAKER);
    expect(andeler[1].nyAndel).toBe(false);
    expect(andeler[1].lagtTilAvSaksbehandler).toBe(true);
  });

  it('skal bygge initial values med besteberegning', () => {
    const andel1 = {
      andelsnr: 1,
      fastsattBelopPrMnd: null,
      lagtTilAvSaksbehandler: false,
      inntektskategori: { kode: inntektskategorier.UDEFINERT, kodeverk: 'test' },
      aktivitetStatus: { kode: 'BA', kodeverk: 'test' },
    };
    const andel2 = {
      andelsnr: 2,
      fastsattBelopPrMnd: 10000,
      lagtTilAvSaksbehandler: true,
      inntektskategori: { kode: inntektskategorier.ARBEIDSTAKER, kodeverk: 'test' },
      aktivitetStatus: { kode: 'BA', kodeverk: 'test' },
    };
    const kunYtelse = {
      andeler: [andel1, andel2],
      fodendeKvinneMedDP: true,
      erBesteberegning: true,
    };
    const initialValues = KunYtelsePanel.buildInitialValues(kunYtelse, faktaOmBeregningAndeler, {}, alleKodeverk);
    const andeler = initialValues[`${brukersAndelFieldArrayName}`];
    expect(andeler).toHaveLength(2);
    expect(andeler[0].andelsnr).toBe(1);
    expect(andeler[0].andel).toBe('Brukers andel');
    expect(andeler[0].aktivitetStatus).toBe('BA');
    expect(andeler[0].fastsattBelop).toBe('');
    expect(andeler[0].inntektskategori).toBe('');
    expect(andeler[0].nyAndel).toBe(false);
    expect(andeler[0].lagtTilAvSaksbehandler).toBe(false);

    expect(andeler[1].andelsnr).toBe(2);
    expect(andeler[1].andel).toBe('Brukers andel');
    expect(andeler[1].fastsattBelop).toBe('10 000');
    expect(andeler[1].aktivitetStatus).toBe('BA');
    expect(andeler[1].inntektskategori).toBe(inntektskategorier.ARBEIDSTAKER);
    expect(andeler[1].nyAndel).toBe(false);
    expect(andeler[1].lagtTilAvSaksbehandler).toBe(true);

    const erBesteberegning = initialValues[`${besteberegningField}`];
    expect(erBesteberegning).toBe(true);
  });

  it('skal bygge initial values uten besteberegning', () => {
    const andel1 = {
      andelsnr: 1,
      fastsattBelopPrMnd: null,
      lagtTilAvSaksbehandler: false,
      inntektskategori: { kode: inntektskategorier.UDEFINERT, kodeverk: 'test' },
      aktivitetStatus: { kode: 'BA', kodeverk: 'AKTIVITET_STATUS' },
    };
    const andel2 = {
      andelsnr: 2,
      fastsattBelopPrMnd: 10000,
      lagtTilAvSaksbehandler: true,
      inntektskategori: { kode: inntektskategorier.ARBEIDSTAKER, kodeverk: 'test' },
      aktivitetStatus: { kode: 'BA', kodeverk: 'AKTIVITET_STATUS' },
    };
    const kunYtelse = {
      andeler: [andel1, andel2],
      fodendeKvinneMedDP: true,
      erBesteberegning: false,
    };
    const initialValues = KunYtelsePanel.buildInitialValues(kunYtelse, faktaOmBeregningAndeler, {}, alleKodeverk);
    const andeler = initialValues[`${brukersAndelFieldArrayName}`];
    expect(andeler).toHaveLength(2);
    expect(andeler[0].andelsnr).toBe(1);
    expect(andeler[0].andel).toBe('Brukers andel');
    expect(andeler[0].aktivitetStatus).toBe('BA');
    expect(andeler[0].fastsattBelop).toBe('');
    expect(andeler[0].inntektskategori).toBe('');
    expect(andeler[0].nyAndel).toBe(false);
    expect(andeler[0].lagtTilAvSaksbehandler).toBe(false);

    expect(andeler[1].andelsnr).toBe(2);
    expect(andeler[1].andel).toBe('Brukers andel');
    expect(andeler[1].fastsattBelop).toBe('10 000');
    expect(andeler[1].aktivitetStatus).toBe('BA');
    expect(andeler[1].inntektskategori).toBe(inntektskategorier.ARBEIDSTAKER);
    expect(andeler[1].nyAndel).toBe(false);
    expect(andeler[1].lagtTilAvSaksbehandler).toBe(true);

    const erBesteberegning = initialValues[`${besteberegningField}`];
    expect(erBesteberegning).toBe(false);
  });
});
