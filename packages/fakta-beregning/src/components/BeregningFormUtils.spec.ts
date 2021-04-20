import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { lagStateMedAksjonspunkterOgBeregningsgrunnlag } from './beregning-test-helper';
import { formNameVurderFaktaBeregning, getFormInitialValuesForBeregning, getFormValuesForBeregning } from './BeregningFormUtils';

const {
  VURDER_FAKTA_FOR_ATFL_SN,
  AVKLAR_AKTIVITETER,
} = aksjonspunktCodes;
const fellesAksjonspunkt = { definisjon: { kode: VURDER_FAKTA_FOR_ATFL_SN } };
const avklarAktiviteterAksjonspunkt = { definisjon: { kode: AVKLAR_AKTIVITETER } };
const aksjonspunkter = [fellesAksjonspunkt, avklarAktiviteterAksjonspunkt];

describe('<BeregningFormUtils>', () => {
  it('skal returnere udefinert om values er udefinert', () => {
    const formValues = getFormValuesForBeregning.resultFunc(undefined);
    expect(formValues).toBeUndefined();
  });

  it('skal returnere values', () => {
    const values = {
      test: 'test',
    };
    const state = lagStateMedAksjonspunkterOgBeregningsgrunnlag(aksjonspunkter, {}, formNameVurderFaktaBeregning, values);
    const formValues = getFormValuesForBeregning(state);
    // @ts-ignore
    expect(formValues.test).toBe('test');
  });

  it('skal returnere initialvalues', () => {
    const values = {
      test: 'test',
    };
    const state = lagStateMedAksjonspunkterOgBeregningsgrunnlag(aksjonspunkter, {}, formNameVurderFaktaBeregning, {}, values);
    const formValues = getFormInitialValuesForBeregning(state);
    // @ts-ignore
    expect(formValues.test).toBe('test');
  });
});
