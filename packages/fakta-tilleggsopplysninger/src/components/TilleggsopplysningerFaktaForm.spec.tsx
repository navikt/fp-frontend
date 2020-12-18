import React from 'react';
import { shallow } from 'enzyme';
import { Normaltekst } from 'nav-frontend-typografi';
import { Hovedknapp } from 'nav-frontend-knapper';

import TilleggsopplysningerFaktaForm from './TilleggsopplysningerFaktaForm';

describe('<TilleggsopplysningerFaktaForm>', () => {
  it('skal vise knapp ved readOnly', () => {
    const wrapper = shallow(<TilleggsopplysningerFaktaForm
      readOnly={false}
      submitting={false}
      tilleggsopplysninger="test"
    />);

    expect(wrapper.find(Normaltekst).childAt(0).text()).toEqual('test');
    const button = wrapper.find(Hovedknapp);
    expect(button.prop('spinner')).toBe(false);
    expect(button.prop('disabled')).toBe(false);
  });

  it('skal ikke vise knapp ved readOnly', () => {
    const wrapper = shallow(<TilleggsopplysningerFaktaForm
      readOnly
      submitting={false}
      tilleggsopplysninger="test"
    />);

    expect(wrapper.find(Normaltekst).childAt(0).text()).toEqual('test');
    const button = wrapper.find(Hovedknapp);
    expect(button).toHaveLength(0);
  });
});
