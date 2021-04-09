import React from 'react';
import sinon from 'sinon';

import { shallowWithIntl, getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import BehandlingHenlagtPanel from './BehandlingHenlagtPanel';
import ProsessPanelWrapper from './ProsessPanelWrapper';
import messages from '../../../i18n/nb_NO.json';

describe('<BehandlingHenlagtPanel>', () => {
  const mockUseEffect = (useEffect) => {
    useEffect.mockImplementationOnce((f) => f());
  };

  it('skal registrere panel', () => {
    const useEffect = jest.spyOn(React, 'useEffect');

    mockUseEffect(useEffect);

    const registrerProsessPanel = sinon.spy();

    const wrapper = shallowWithIntl(<BehandlingHenlagtPanel.WrappedComponent
      intl={getIntlMock(messages)}
      valgtProsessSteg="default"
      registrerProsessPanel={registrerProsessPanel}
    />, messages);

    const prosessPanel = wrapper.find(ProsessPanelWrapper);
    expect(prosessPanel.props().erPanelValgt).toBe(false);
  });
});
