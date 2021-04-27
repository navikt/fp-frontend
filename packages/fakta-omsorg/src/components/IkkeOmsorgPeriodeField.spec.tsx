import React, { ReactElement } from 'react';
import { FieldArrayMetaProps } from 'redux-form';

import { MockFields } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { PeriodFieldArray, DatepickerField } from '@fpsak-frontend/form';
import { shallowWithIntl, getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import IkkeOmsorgPeriodeField from './IkkeOmsorgPeriodeField';
import messages from '../../i18n/nb_NO.json';

const getRemoveButton = () => <button id="avslutt" type="button" />;

describe('<IkkeOmsorgPeriodeField>', () => {
  it('Skal rendre IkkeOmsorgPeriodeField', () => {
    const fields = new MockFields('ikkeOmsorgPerioder', 1);

    const wrapper = shallowWithIntl(<IkkeOmsorgPeriodeField.WrappedComponent
      intl={getIntlMock(messages)}
      readOnly={false}
      fields={fields}
      meta={{} as FieldArrayMetaProps}
    />, messages);

    const fieldArray = wrapper.find(PeriodFieldArray);
    expect(fieldArray).toHaveLength(1);

    const fn = fieldArray.prop('children');
    const comp = fn('fieldId1', 0, getRemoveButton) as ReactElement;
    const innerWrapper = shallowWithIntl(comp, messages);

    const dateFields = innerWrapper.find(DatepickerField);
    expect(dateFields).toHaveLength(2);
    expect(dateFields.first().prop('name')).toEqual('fieldId1.periodeFom');
    expect(dateFields.last().prop('name')).toEqual('fieldId1.periodeTom');
    expect(innerWrapper.find('#avslutt')).toHaveLength(1);
  });
});
