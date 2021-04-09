import React from 'react';
import { shallow } from 'enzyme';

import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { RadioGroupField } from '@fpsak-frontend/form';

import messages from '../../../i18n/nb_NO.json';
import MigreringFraInfotrygdPanel from './MigreringFraInfotrygdPanel';

describe('<MigreringFraInfotrygdPanel>', () => {
  it('skal rendre komponent korrekt', () => {
    const wrapper = shallow(<MigreringFraInfotrygdPanel.WrappedComponent
      intl={getIntlMock(messages)}
      readOnly={false}
    />);

    expect(wrapper.find(RadioGroupField)).toHaveLength(1);
  });
});
