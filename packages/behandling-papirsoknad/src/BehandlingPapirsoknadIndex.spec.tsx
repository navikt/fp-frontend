import React from 'react';
import { shallow } from 'enzyme';

import { AksessRettigheter, AlleKodeverk, Fagsak } from '@fpsak-frontend/types';

import RegistrerPapirsoknad from './components/RegistrerPapirsoknad';
import BehandlingPapirsoknadIndex from './BehandlingPapirsoknadIndex';

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

describe('<BehandlingPapirsoknadIndex>', () => {
  it('skal rendre korrekt', () => {
    const wrapper = shallow(<BehandlingPapirsoknadIndex
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
      fagsakPersonnummer="1224342"
    />);

    expect(wrapper.find(RegistrerPapirsoknad)).toHaveLength(1);
  });
});
