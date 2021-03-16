import React from 'react';
import { shallow } from 'enzyme';

import { AksessRettigheter, Fagsak } from '@fpsak-frontend/types';

import RegistrerPapirsoknad from './components/RegistrerPapirsoknad';
import BehandlingPapirsoknadIndex from './BehandlingPapirsoknadIndex';

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

describe('<BehandlingPapirsoknadIndex>', () => {
  it('skal rendre korrekt', () => {
    const wrapper = shallow(<BehandlingPapirsoknadIndex
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
      fagsakPersonnummer="1224342"
    />);

    expect(wrapper.find(RegistrerPapirsoknad)).toHaveLength(1);
  });
});
