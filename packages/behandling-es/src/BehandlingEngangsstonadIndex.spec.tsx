import React from 'react';
import { shallow } from 'enzyme';

import { BehandlingContainer } from '@fpsak-frontend/behandling-felles-ny';
import { AksessRettigheter, Fagsak } from '@fpsak-frontend/types';

import BehandlingEngangsstonadIndex from './BehandlingEngangsstonadIndex';
import { requestEsApi, EsBehandlingApiKeys } from './data/esBehandlingApi';

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

describe('<BehandlingEngangsstonadIndex>', () => {
  it('skal rendre korrekt', () => {
    requestEsApi.mock(EsBehandlingApiKeys.ARBEIDSGIVERE_OVERSIKT, {});
    requestEsApi.mock(EsBehandlingApiKeys.BEHANDLING_PERSONOVERSIKT, {});

    const wrapper = shallow(<BehandlingEngangsstonadIndex
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
