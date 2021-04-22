import React from 'react';
import { shallow } from 'enzyme';

import NavFrontendSpinner from 'nav-frontend-spinner';

import LoadingPanel from './LoadingPanel';

describe('<LoadingPanel>', () => {
  it('skal rendre modal', () => {
    const wrapper = shallow(<LoadingPanel />);
    expect(wrapper.find(NavFrontendSpinner)).toHaveLength(1);
  });
});
