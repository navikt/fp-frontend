import React from 'react';
import { shallow } from 'enzyme';

import { Behandling } from '@fpsak-frontend/types';

import ProsessContainer from './prosess/ProsessContainer';
import FaktaContainer from './fakta/FaktaContainer';
import BehandlingContainer from './BehandlingContainer';

describe('<BehandlingContainer>', () => {
  const behandling = {
    uuid: '1',
  } as Behandling;

  it('skal rendre komponent korrekt', () => {
    const wrapper = shallow(<BehandlingContainer
      behandling={behandling}
      oppdaterProsessStegOgFaktaPanelIUrl={() => {}}
    />);

    expect(wrapper.find(FaktaContainer)).toHaveLength(1);
    expect(wrapper.find(ProsessContainer)).toHaveLength(1);
  });
});
