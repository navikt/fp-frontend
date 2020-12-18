import React from 'react';
import { shallow } from 'enzyme';

import { DatepickerField } from '@fpsak-frontend/form';

import MottattDatoPanel from './MottattDatoPanel';

describe('<MottattDatoPanel>', () => {
  it('skal rendre komponent', () => {
    const wrapper = shallow(<MottattDatoPanel readOnly={false} />);
    expect(wrapper.find(DatepickerField)).toHaveLength(1);
  });
});
