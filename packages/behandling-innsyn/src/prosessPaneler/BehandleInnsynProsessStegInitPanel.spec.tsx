import React from 'react';
import { shallow } from 'enzyme';

import InnsynProsessIndex from '@fpsak-frontend/prosess-innsyn';
import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps, ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles';
import {
  Aksjonspunkt, Behandling, Fagsak, StandardProsessPanelProps,
} from '@fpsak-frontend/types';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import BehandleInnsynProsessStegInitPanel from './BehandleInnsynProsessStegInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
}

const behandling = {
  uuid: 'test-uuid',
  versjon: 1,
} as Behandling;

describe('<BehandleInnsynProsessStegInitPanel>', () => {
  it('skal rendre komponent korrekt', () => {
    const wrapper = shallow(<BehandleInnsynProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      fagsak={{} as Fagsak}
      behandling={behandling}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(true);

    const innerElement = panel.renderProp('renderPanel')({}, { aksjonspunkter: [] });

    expect(innerElement.find(InnsynProsessIndex)).toHaveLength(1);
  });
});
