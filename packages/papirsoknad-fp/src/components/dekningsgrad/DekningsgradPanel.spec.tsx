import React from 'react';
import { shallow } from 'enzyme';

import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import messages from '../../../i18n/nb_NO.json';
import { DekningsgradPanel } from './DekningsgradPanel';

describe('<DekningsgradPanel>', () => {
  it('skal vise dekningsgradpanel', () => {
    const wrapper = shallow(<DekningsgradPanel
      intl={getIntlMock(messages)}
      readOnly={false}
    />);

    const radios = wrapper.find('RadioOption');
    expect(radios).toHaveLength(2);
  });
});
