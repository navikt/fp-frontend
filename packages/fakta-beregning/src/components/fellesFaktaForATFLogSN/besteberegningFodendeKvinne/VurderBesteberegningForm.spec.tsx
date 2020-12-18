import { isRequiredMessage } from '@fpsak-frontend/utils';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import faktaOmBeregningTilfelle from '@fpsak-frontend/kodeverk/src/faktaOmBeregningTilfelle';
import VurderBesteberegningForm, { besteberegningField } from './VurderBesteberegningForm';

const {
  OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
} = aksjonspunktCodes;

describe('<VurderBesteberegning>', () => {
  it('skal ikkje validere om man ikkje har tilfelle', () => {
    const error = VurderBesteberegningForm.validate({}, [faktaOmBeregningTilfelle.VURDER_LONNSENDRING]);
    expect(Object.keys(error)).toHaveLength(0);
  });

  it('skal validere om ikkje vurdert', () => {
    const error = VurderBesteberegningForm.validate({}, [faktaOmBeregningTilfelle.VURDER_BESTEBEREGNING]);
    expect(error[besteberegningField]).toBe(isRequiredMessage());
  });

  it('skal bygge initial values', () => {
    const vurderBesteberegning = {
      skalHaBesteberegning: false,
      andeler: [{ andelsnr: 1, aktivitetStatus: { kode: 'AT' } }],
    };
    const initialValues = VurderBesteberegningForm.buildInitialValues([],
      vurderBesteberegning, [faktaOmBeregningTilfelle.VURDER_BESTEBEREGNING], false);
    expect(initialValues[besteberegningField]).toBe(false);
  });

  it('skal bygge initial values med overstyrt aksjonspunkt', () => {
    const vurderBesteberegning = {
      skalHaBesteberegning: null,
      andeler: [{ andelsnr: 1, aktivitetStatus: { kode: 'AT' } }],
    };
    const initialValues = VurderBesteberegningForm.buildInitialValues([{ definisjon: { kode: OVERSTYRING_AV_BEREGNINGSGRUNNLAG } }],
      vurderBesteberegning, [faktaOmBeregningTilfelle.VURDER_BESTEBEREGNING], false);
    expect(initialValues[besteberegningField]).toBe(false);
  });

  it('skal bygge initial values om det er overstyrt', () => {
    const vurderBesteberegning = {
      skalHaBesteberegning: null,
      andeler: [{ andelsnr: 1, aktivitetStatus: { kode: 'AT' } }],
    };
    const initialValues = VurderBesteberegningForm.buildInitialValues([], vurderBesteberegning,
      [faktaOmBeregningTilfelle.VURDER_BESTEBEREGNING], true);
    expect(initialValues[besteberegningField]).toBe(false);
  });

  it('skal transform values', () => {
    const values = {};
    values[besteberegningField] = false;
    const transformed = VurderBesteberegningForm.transformValues(values, { vurderBesteberegning: {}, andelerForFaktaOmBeregning: [] }, []);
    expect(transformed.besteberegningAndeler.besteberegningAndelListe.length).toBe(0);
  });

  it('skal transform values om besteberegning', () => {
    const values = {};
    values[besteberegningField] = true;
    const inntektPrMnd = [
      { andelsnr: 1, fastsattBelop: 10000, inntektskategori: 'ARBEIDSTAKER' },
      {
        nyAndel: true, lagtTilAvSaksbehandler: true, andelsnr: undefined, fastsattBelop: 20000, inntektskategori: 'DAGPENGER', aktivitetStatus: 'DP',
      },
    ];
    const transformed = VurderBesteberegningForm.transformValues(values, { vurderBesteberegning: {}, andelerForFaktaOmBeregning: [] }, inntektPrMnd);
    expect(transformed.besteberegningAndeler.besteberegningAndelListe.length).toBe(1);
    expect(transformed.besteberegningAndeler.besteberegningAndelListe[0].andelsnr).toBe(1);
    expect(transformed.besteberegningAndeler.besteberegningAndelListe[0].fastsatteVerdier.fastsattBeløp).toBe(10000);
    expect(transformed.besteberegningAndeler.besteberegningAndelListe[0].fastsatteVerdier.inntektskategori).toBe('ARBEIDSTAKER');
    expect(transformed.besteberegningAndeler.nyDagpengeAndel.fastsatteVerdier.inntektskategori).toBe('DAGPENGER');
    expect(transformed.besteberegningAndeler.nyDagpengeAndel.fastsatteVerdier.fastsattBeløp).toBe(20000);
  });
});
