import React from 'react';
import { expect } from 'chai';
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
    />);

    const form = wrapper.find(TilleggsopplysningerFaktaForm);
    expect(form).to.have.length(1);
    expect(form.prop('readOnly')).is.false;
    expect(form.prop('submitting')).is.false;
  });

  it('skal vise readonly form når ingen åpne aksjonspunkter', () => {
    const wrapper = shallow(<TilleggsopplysningerInfoPanel
      {...reduxFormPropsMock}
      hasOpenAksjonspunkter={false}
      readOnly={false}
      behandlingId={1}
      behandlingVersjon={1}
    />);

    const form = wrapper.find(TilleggsopplysningerFaktaForm);
    expect(form.prop('readOnly')).is.true;
  });

  it('skal vise readonly form når ikke rettigheter', () => {
    const wrapper = shallow(<TilleggsopplysningerInfoPanel
      {...reduxFormPropsMock}
      hasOpenAksjonspunkter
      readOnly
      behandlingId={1}
      behandlingVersjon={1}
    />);

    const form = wrapper.find(TilleggsopplysningerFaktaForm);
    expect(form.prop('readOnly')).is.true;
  });
});
