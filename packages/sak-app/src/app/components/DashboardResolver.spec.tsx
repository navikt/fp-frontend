import React from 'react';
import { shallow } from 'enzyme';

import { LoadingPanel } from '@fpsak-frontend/shared-components';

import FagsakSearchIndex from '../../fagsakSearch/FagsakSearchIndex';
import { DashboardResolver } from './DashboardResolver';

describe('<DashboardResolver>', () => {
  it('skal vise fremsiden til fpsak når miljø er lik development', () => {
    const wrapper = shallow(<DashboardResolver />);

    expect(wrapper.find(FagsakSearchIndex)).toHaveLength(1);
    expect(wrapper.find(LoadingPanel)).toHaveLength(0);
  });
});
