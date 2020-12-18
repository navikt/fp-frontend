import React from 'react';
import { FieldArrayMetaProps } from 'redux-form';

import { MockFields } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { DatepickerField } from '@fpsak-frontend/form';
import { PeriodFieldArray } from '@fpsak-frontend/shared-components';

import IkkeOmsorgPeriodeField from './IkkeOmsorgPeriodeField';
import shallowWithIntl, { intlMock } from '../../i18n/intl-enzyme-test-helper-fakta-omsorg';

const getRemoveButton = () => <button id="avslutt" type="button" />;

describe('<IkkeOmsorgPeriodeField>', () => {
  it('Skal rendre IkkeOmsorgPeriodeField', () => {
    const fields = new MockFields('ikkeOmsorgPerioder', 1);

    const wrapper = shallowWithIntl(<IkkeOmsorgPeriodeField.WrappedComponent
      intl={intlMock}
      readOnly={false}
      fields={fields}
      meta={{} as FieldArrayMetaProps}
    />);

    const fieldArray = wrapper.find(PeriodFieldArray);
    expect(fieldArray).toHaveLength(1);

    const fn = fieldArray.prop('children');
    const comp = fn('fieldId1', 0, getRemoveButton);
    const innerWrapper = shallowWithIntl(comp);

    const dateFields = innerWrapper.find(DatepickerField);
    expect(dateFields).toHaveLength(2);
    expect(dateFields.first().prop('name')).toEqual('fieldId1.periodeFom');
    expect(dateFields.last().prop('name')).toEqual('fieldId1.periodeTom');
    expect(innerWrapper.find('#avslutt')).toHaveLength(1);
  });
});
