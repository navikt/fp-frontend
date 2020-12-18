import React from 'react';
import { shallow } from 'enzyme';
import { Normaltekst } from 'nav-frontend-typografi';
import Label from '@fpsak-frontend/form/src/Label';
import ReadOnlyField from './ReadOnlyField';

describe('ReadOnlyField', () => {
  it('skal vise feltverdi', () => {
    const wrapper = shallow(<ReadOnlyField label="Dette er en test" input={{ value: '123' }} />);

    const label = wrapper.find(Label);
    expect(label).toHaveLength(1);
    expect(label.prop('input')).toEqual('Dette er en test');

    const value = wrapper.find(Normaltekst);
    expect(value).toHaveLength(1);
    expect(value.childAt(0).text()).toEqual('123');
  });

  it('skal vise feltverdi som editert med endret info', () => {
    const wrapper = shallow(<ReadOnlyField label="Dette er en test" input={{ value: '123' }} endrettekst="EndretText" />);
    const flexContainer = wrapper.find('FlexContainer');
    expect(flexContainer).toHaveLength(1);
    expect(flexContainer.find('EditedIcon')).toHaveLength(1);

    const endretTekst = wrapper.find('Undertekst');
    expect(endretTekst).toHaveLength(1);
    expect(endretTekst.childAt(0).text()).toEqual('EndretText');
  });

  it('skal ikke vise label når verdi er tom', () => {
    const wrapper = shallow(<ReadOnlyField label="Dette er en test" input={{ value: '' }} />);
    expect(wrapper.children()).toHaveLength(0);
  });
});
