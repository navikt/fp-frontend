import React from 'react';
import { shallow } from 'enzyme';

import AvsnittSkiller from './AvsnittSkiller';

describe('AvsnittSkiller', () => {
  it('skal vise skillelinje', () => {
    const wrapper = shallow(<AvsnittSkiller />);
    const row = wrapper.find('Row');
    expect(row).toHaveLength(1);
    const div = wrapper.find('div');
    expect(div).toHaveLength(2);
  });
});
