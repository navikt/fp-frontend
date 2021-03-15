import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import { LoadingPanel } from '@fpsak-frontend/shared-components';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import ProsessPanelWrapper from './ProsessPanelWrapper';

describe('<ProsessPanelWrapper>', () => {
  it('skal ikke vise panel når det ikke er valgt', () => {
    const wrapper = shallow(
      <ProsessPanelWrapper
        erPanelValgt={false}
        erAksjonspunktOpent
        status={vilkarUtfallType.IKKE_VURDERT}
        dataState={RestApiState.LOADING}
        skalSkjulePanel={false}
      >
        <div>test</div>
      </ProsessPanelWrapper>,
    );

    expect(wrapper.find(FormattedMessage)).toHaveLength(0);
    expect(wrapper.find(LoadingPanel)).toHaveLength(0);
    expect(wrapper.find('div')).toHaveLength(0);
  });

  it('skal vise panel med tekst ikke behandlet når panel er valgt men vilkar ikke er vurdert og aksjonpunkt ikke er åpent', () => {
    const wrapper = shallow(
      <ProsessPanelWrapper
        erPanelValgt
        erAksjonspunktOpent={false}
        status={vilkarUtfallType.IKKE_VURDERT}
        dataState={RestApiState.LOADING}
        skalSkjulePanel={false}
      >
        <div>test</div>
      </ProsessPanelWrapper>,
    );

    const message = wrapper.find(FormattedMessage);
    expect(message).toHaveLength(1);
  });

  it('skal vise spinner når data ikke er ferdighentet', () => {
    const wrapper = shallow(
      <ProsessPanelWrapper
        erPanelValgt
        erAksjonspunktOpent
        status={vilkarUtfallType.IKKE_VURDERT}
        dataState={RestApiState.LOADING}
        skalSkjulePanel={false}
      >
        <div>test</div>
      </ProsessPanelWrapper>,
    );

    const spinner = wrapper.find(LoadingPanel);
    expect(spinner).toHaveLength(1);
  });

  it('skal vise panel når data er hentet og en har åpent aksjonspunkt', () => {
    const wrapper = shallow(
      <ProsessPanelWrapper
        erPanelValgt
        erAksjonspunktOpent
        status={vilkarUtfallType.IKKE_VURDERT}
        dataState={RestApiState.SUCCESS}
        skalSkjulePanel={false}
      >
        <div>test</div>
      </ProsessPanelWrapper>,
    );

    const panel = wrapper.find('div');
    expect(panel).toHaveLength(1);
  });
});
