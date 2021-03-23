import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { intlMock } from '../../../i18n/intl-enzyme-test-helper-behandling-felles';
import BehandlingHenlagtPanel from './BehandlingHenlagtPanel';
import ProsessPanelWrapper from './ProsessPanelWrapper';

describe('<BehandlingHenlagtPanel>', () => {
  const mockUseEffect = (useEffect) => {
    useEffect.mockImplementationOnce((f) => f());
  };

  it('skal registrere panel', () => {
    const useEffect = jest.spyOn(React, 'useEffect');

    mockUseEffect(useEffect);

    const registrerProsessPanel = sinon.spy();

    const wrapper = shallow(<BehandlingHenlagtPanel.WrappedComponent
      intl={intlMock}
      valgtProsessSteg="default"
      registrerProsessPanel={registrerProsessPanel}
    />);

    const prosessPanel = wrapper.find(ProsessPanelWrapper);
    expect(prosessPanel.props().erPanelValgt).toBe(false);
  });
});
