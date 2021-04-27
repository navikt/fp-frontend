import React from 'react';
import { shallow } from 'enzyme';

import { metaMock, MockFields } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { DatepickerField, PeriodFieldArray } from '@fpsak-frontend/form';

import FrilansPerioderFieldArray from './FrilansPerioderFieldArray';

const fields = new MockFields('perioder', 1);

const getRemoveButton = () => <button id="avslutt" type="button" />;

describe('<FrilansPerioderFieldArray>', () => {
  it('Skal rendre FrilansPerioderFieldArray', () => {
    const wrapper = shallow(<FrilansPerioderFieldArray
      fields={fields}
      meta={metaMock}
      readOnly={false}
    />);

    const fieldArray = wrapper.find(PeriodFieldArray);
    expect(fieldArray).toHaveLength(1);

    const fn = fieldArray.prop('children');
    const comp = fn('fieldId1', 0, getRemoveButton);

    // @ts-ignore Fiks
    const innerWrapper = shallow(comp);

    const dateFields = innerWrapper.find(DatepickerField);
    expect(dateFields).toHaveLength(2);
    expect(dateFields.first().prop('name')).toEqual('fieldId1.periodeFom');
    expect(dateFields.first().prop('label')).toEqual({ id: 'Registrering.Frilans.periodeFom' });
    expect(dateFields.last().prop('name')).toEqual('fieldId1.periodeTom');
    expect(dateFields.last().prop('label')).toEqual({ id: 'Registrering.Frilans.periodeTom' });
    expect(innerWrapper.find('#avslutt')).toHaveLength(1);
  });
});
