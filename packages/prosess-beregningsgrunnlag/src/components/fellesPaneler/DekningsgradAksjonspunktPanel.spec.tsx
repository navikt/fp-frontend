import React from 'react';
import { shallow } from 'enzyme';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { Aksjonspunkt, Beregningsgrunnlag } from '@fpsak-frontend/types';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { RadioOption, RadioGroupField } from '@fpsak-frontend/form';
import dekningsgrad from '@fpsak-frontend/kodeverk/src/dekningsgrad';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { DekningsgradAksjonspunktPanelImpl } from './DekningsgradAksjonspunktPanel';
import messages from '../../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<SkjeringspunktOgStatusPanel>', () => {
  it('Skal teste at komponenten renderes', () => {
    const wrapper = shallow(<DekningsgradAksjonspunktPanelImpl
      intl={intlMock}
      readOnly={false}
    />);
    const radioField = wrapper.find(RadioGroupField);
    expect(radioField).toHaveLength(1);
    const radioOption = wrapper.find(RadioOption);
    expect(radioOption).toHaveLength(2);
    expect(radioOption.at(0).first().props().value).toBe(dekningsgrad.ATTI);
    expect(radioOption.at(1).first().props().value).toBe(dekningsgrad.HUNDRE);
  });

  it('Skal teste buildInitialValues når aksjonspunkt ikke er løst før', () => {
    const ap = {
      definisjon: { kode: aksjonspunktCodes.VURDER_DEKNINGSGRAD, kodeverk: 'test' },
      status: { kode: aksjonspunktStatus.OPPRETTET, kodeverk: 'test' },
    } as Aksjonspunkt;
    const bg = {
      dekningsgrad: 100,
    } as Beregningsgrunnlag;
    const initialValues = DekningsgradAksjonspunktPanelImpl.buildInitialValues(bg, [ap]);
    expect(initialValues.dekningsgrad).toBeNull();
  });

  it('Skal teste buildInitialValues når aksjonspunkt er løst', () => {
    const ap = {
      definisjon: { kode: aksjonspunktCodes.VURDER_DEKNINGSGRAD, kodeverk: 'test' },
      status: { kode: aksjonspunktStatus.UTFORT, kodeverk: 'test' },
      begrunnelse: 'Testing testing',
    } as Aksjonspunkt;
    const bg = {
      dekningsgrad: 100,
    } as Beregningsgrunnlag;
    const initialValues = DekningsgradAksjonspunktPanelImpl.buildInitialValues(bg, [ap]);
    expect(initialValues.dekningsgrad).toBe(100);
    expect(initialValues.begrunnDekningsgradEndring).toBe('Testing testing');
  });

  it('Skal teste transformValues ved løst aksjonspunkt', () => {
    const values = {
      dekningsgrad: 80,
      begrunnDekningsgradEndring: 'Dette er en test',
    };
    const transformedValues = DekningsgradAksjonspunktPanelImpl.transformValues(values);
    expect(transformedValues.begrunnelse).toBe('Dette er en test');
    expect(transformedValues.kode).toBe(aksjonspunktCodes.VURDER_DEKNINGSGRAD);
    expect(transformedValues.dekningsgrad).toBe(80);
  });
});
