import React from 'react';
import { shallow } from 'enzyme';

import { BehandlingContainer } from '@fpsak-frontend/behandling-felles-ny';
import { AksessRettigheter, Fagsak } from '@fpsak-frontend/types';

import BehandlingInnsynIndex from './BehandlingInnsynIndex';

jest.mock('@fpsak-frontend/behandling-felles-ny', () => {
  const felles = jest.requireActual('@fpsak-frontend/behandling-felles-ny');
  return {
    ...felles,
    useBehandling: () => ({
      behandling: {
        uuid: 'test-uuid',
        versjon: 1,
      },
    }),
  };
});

describe('<BehandlingInnsynIndex>', () => {
  it('skal rendre korrekt', () => {
    const wrapper = shallow(<BehandlingInnsynIndex
      behandlingEventHandler={{
        setHandler: () => {},
        clear: () => {},
      }}
      behandlingId={1}
      oppdaterBehandlingVersjon={() => {}}
      kodeverk={{}}
      fagsak={{} as Fagsak}
      rettigheter={{} as AksessRettigheter}
      oppdaterProsessStegOgFaktaPanelIUrl={() => {}}
      valgtProsessSteg="default"
      valgtFaktaSteg="default"
      opneSokeside={() => {}}
      setRequestPendingMessage={() => {}}
    />);

    const panel = wrapper.find(BehandlingContainer);

    expect(panel).toHaveLength(1);
  });
});
