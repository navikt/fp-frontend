import React from 'react';
import { expect } from 'chai';

import { intlMock, shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { LoadingPanel } from '@fpsak-frontend/shared-components';

import FagsakSearchIndex from '../../fagsakSearch/FagsakSearchIndex';
import { DashboardResolver } from './DashboardResolver';

describe('<DashboardResolver>', () => {
  it('skal vise fremsiden til fpsak når miljø er lik development', () => {
    const wrapper = shallowWithIntl(<DashboardResolver
      intl={intlMock}
    />);

    expect(wrapper.find(FagsakSearchIndex)).to.have.length(1);
    expect(wrapper.find(LoadingPanel)).to.have.length(0);
  });
});
