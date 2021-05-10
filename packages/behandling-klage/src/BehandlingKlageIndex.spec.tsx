import React from 'react';
import { shallow } from 'enzyme';

import { BehandlingContainer } from '@fpsak-frontend/behandling-felles';
import { AksessRettigheter, AlleKodeverk, Fagsak } from '@fpsak-frontend/types';

import BehandlingKlageIndex from './BehandlingKlageIndex';

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

describe('<BehandlingKlageIndex>', () => {
  it('skal rendre korrekt', () => {
    const wrapper = shallow(<BehandlingKlageIndex
      behandlingEventHandler={{
        setHandler: () => {},
        clear: () => {},
      }}
      behandlingUuid="1"
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
