import React from 'react';
import { shallow } from 'enzyme';

import InnsynProsessIndex from '@fpsak-frontend/prosess-innsyn';
import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps } from '@fpsak-frontend/behandling-felles-ny';
import { Aksjonspunkt, Fagsak, StandardProsessPanelProps } from '@fpsak-frontend/types';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import BehandleInnsynProsessStegInitPanel from './BehandleInnsynProsessStegInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
}

describe('<BehandleInnsynProsessStegInitPanel>', () => {
  it('skal rendre komponent korrekt', () => {
    const wrapper = shallow(<BehandleInnsynProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      fagsak={{} as Fagsak}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any>>(ProsessDefaultInitPanel);

    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(true);

    const innerElement = panel.renderProp('renderPanel')({});

    expect(innerElement.find(InnsynProsessIndex)).toHaveLength(1);
  });
});
