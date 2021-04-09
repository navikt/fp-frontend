import React from 'react';
import { shallow } from 'enzyme';

import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { DatepickerField } from '@fpsak-frontend/form';

import messages from '../../../i18n/nb_NO.json';
import TerminFodselSvpPanel from './TerminFodselSvpPanel';

describe('<TerminFodselSvpPanel>', () => {
  it('skal rendre komponent korrekt', () => {
    const wrapper = shallow(<TerminFodselSvpPanel.WrappedComponent
      intl={getIntlMock(messages)}
      readOnly={false}
    />);

    expect(wrapper.find(DatepickerField)).toHaveLength(2);
  });
});
