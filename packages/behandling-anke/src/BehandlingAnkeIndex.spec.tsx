import React from 'react';
import { shallow } from 'enzyme';

import { BehandlingContainer } from '@fpsak-frontend/behandling-felles';
import { AksessRettigheter, AlleKodeverk, Fagsak } from '@fpsak-frontend/types';

import BehandlingAnkeIndex from './BehandlingAnkeIndex';

jest.mock('@fpsak-frontend/behandling-felles', () => {
  const felles = jest.requireActual('@fpsak-frontend/behandling-felles');
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

describe('<BehandlingAnkeIndex>', () => {
  it('skal rendre korrekt', () => {
    const wrapper = shallow(<BehandlingAnkeIndex
      behandlingEventHandler={{
        setHandler: () => {},
        clear: () => {},
      }}
      behandlingId={1}
      oppdaterBehandlingVersjon={() => {}}
      kodeverk={{} as AlleKodeverk}
      fagsak={{} as Fagsak}
      rettigheter={{} as AksessRettigheter}
      oppdaterProsessStegOgFaktaPanelIUrl={() => {}}
      valgtProsessSteg="default"
      valgtFaktaSteg="default"
      opneSokeside={() => {}}
      setRequestPendingMessage={() => {}}
      alleBehandlinger={[]}
    />);

    const panel = wrapper.find(BehandlingContainer);

    expect(panel).toHaveLength(1);
  });
});
