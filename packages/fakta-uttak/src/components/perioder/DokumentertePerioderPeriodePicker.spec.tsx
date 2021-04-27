import React from 'react';
import { shallow } from 'enzyme';
import { FieldArrayMetaProps } from 'redux-form';

import { MockFieldsWithContent } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { PeriodFieldArray, PeriodpickerField } from '@fpsak-frontend/form';
import DokumentertePerioderPeriodePicker from './DokumentertePerioderPeriodePicker';

const periode = {
  tom: '10-10-2017',
  fom: '01-10-2017',
};

const fields = new MockFieldsWithContent('perioder', [periode]);

const getRemoveButton = () => <button id="avslutt" type="button" />;

describe('<DokumentertePerioderPeriodePicker>', () => {
  it('skal vise DokumentertePerioderPeriodePicker', () => {
    const wrapper = shallow(<DokumentertePerioderPeriodePicker
      fields={fields}
      meta={{} as FieldArrayMetaProps}
      fraDato={periode.fom}
      tilDato={periode.tom}
      readOnly={false}
    />);

    const fieldArray = wrapper.find(PeriodFieldArray);
    expect(fieldArray).toHaveLength(1);

    const fn = fieldArray.prop('children');
    const comp = fn('fieldId1', 0, getRemoveButton);
    // @ts-ignore fiks
    const innerWrapper = shallow(comp);

    expect(innerWrapper.find(PeriodpickerField)).toHaveLength(1);
  });
});
