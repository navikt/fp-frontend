import React from 'react';
import { shallow } from 'enzyme';

import { LoadingPanel } from '@fpsak-frontend/shared-components';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import FaktaPanelWrapper from './FaktaPanelWrapper';

describe('<FaktaMeny>', () => {
  it('skal ikke vise panel når det ikke er valgt', () => {
    const wrapper = shallow(
      <FaktaPanelWrapper
        erPanelValgt={false}
        dataState={RestApiState.LOADING}
      >
        <div>test</div>
      </FaktaPanelWrapper>,
    );

    const spinner = wrapper.find(LoadingPanel);
    expect(spinner).toHaveLength(0);
    const div = wrapper.find('div');
    expect(div).toHaveLength(0);
  });

  it('skal vise spinner når data ikke er hentet', () => {
    const wrapper = shallow(
      <FaktaPanelWrapper
        erPanelValgt
        dataState={RestApiState.LOADING}
      >
        <div>test</div>
      </FaktaPanelWrapper>,
    );

    const spinner = wrapper.find(LoadingPanel);
    expect(spinner).toHaveLength(1);
  });

  it('skal vise data i meny', () => {
    const wrapper = shallow(
      <FaktaPanelWrapper
        erPanelValgt
        dataState={RestApiState.SUCCESS}
      >
        <div>test</div>
      </FaktaPanelWrapper>,
    );

    const div = wrapper.find('div');
    expect(div).toHaveLength(1);
  });
});
