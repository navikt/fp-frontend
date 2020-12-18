import React from 'react';
import { shallow } from 'enzyme';
import { FieldArrayMetaProps } from 'redux-form';

import { MockFieldsWithContent } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { SelectField } from '@fpsak-frontend/form';
import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { PeriodFieldArray } from '@fpsak-frontend/shared-components';

import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-papirsoknad-svp';
import BehovForTilrettteleggingFieldArray from './BehovForTilrettteleggingFieldArray';

describe('<TilretteleggingForArbeidsgiverFieldArray>', () => {
  it('skal rendre komponent korrekt', () => {
    const getRemoveButton = () => undefined;
    const fields = new MockFieldsWithContent('tilrettelegging', [{ tilretteleggingType: 1 }, { tilretteleggingType: 2 }]);
    const wrapper = shallowWithIntl(<BehovForTilrettteleggingFieldArray.WrappedComponent
      intl={intlMock}
      fields={fields}
      meta={{} as FieldArrayMetaProps}
      readOnly={false}
    />);

    const fieldArray = wrapper.find(PeriodFieldArray);
    expect(fieldArray).toHaveLength(1);

    const fn = fieldArray.prop('children');
    const comp = fn('fieldId1', 0, getRemoveButton);
    // @ts-ignore
    const innerWrapper = shallow(comp);

    expect(innerWrapper.find(SelectField)).toHaveLength(1);
  });
});
