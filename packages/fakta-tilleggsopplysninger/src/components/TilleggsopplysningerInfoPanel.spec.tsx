import React from 'react';
import { shallow } from 'enzyme';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';

import { TilleggsopplysningerInfoPanel } from './TilleggsopplysningerInfoPanel';
import TilleggsopplysningerFaktaForm from './TilleggsopplysningerFaktaForm';

describe('<TilleggsopplysningerInfoPanel>', () => {
  it('skal vise faktapanel og form for tilleggsopplysninger', () => {
    const wrapper = shallow(<TilleggsopplysningerInfoPanel
      {...reduxFormPropsMock}
      hasOpenAksjonspunkter
      readOnly={false}
      behandlingId={1}
      behandlingVersjon={1}
      submitCallback={() => undefined}
    />);

    const form = wrapper.find(TilleggsopplysningerFaktaForm);
    expect(form).toHaveLength(1);
    expect(form.prop('readOnly')).toBe(false);
    expect(form.prop('submitting')).toBe(false);
  });

  it('skal vise readonly form når ingen åpne aksjonspunkter', () => {
    const wrapper = shallow(<TilleggsopplysningerInfoPanel
      {...reduxFormPropsMock}
      hasOpenAksjonspunkter={false}
      readOnly={false}
      behandlingId={1}
      behandlingVersjon={1}
      submitCallback={() => undefined}
    />);

    const form = wrapper.find(TilleggsopplysningerFaktaForm);
    expect(form.prop('readOnly')).toBe(true);
  });

  it('skal vise readonly form når ikke rettigheter', () => {
    const wrapper = shallow(<TilleggsopplysningerInfoPanel
      {...reduxFormPropsMock}
      hasOpenAksjonspunkter
      readOnly
      behandlingId={1}
      behandlingVersjon={1}
      submitCallback={() => undefined}
    />);

    const form = wrapper.find(TilleggsopplysningerFaktaForm);
    expect(form.prop('readOnly')).toBe(true);
  });
});
