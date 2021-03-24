import React from 'react';
import { shallow } from 'enzyme';

import { BehandlingContainer } from '@fpsak-frontend/behandling-felles';
import { AksessRettigheter, Fagsak } from '@fpsak-frontend/types';

import BehandlingForeldrepengerIndex from './BehandlingForeldrepengerIndex';
import { requestFpApi, FpBehandlingApiKeys } from './data/fpBehandlingApi';

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

describe('<BehandlingForeldrepengerIndex>', () => {
  it('skal rendre korrekt', () => {
    requestFpApi.mock(FpBehandlingApiKeys.ARBEIDSGIVERE_OVERSIKT.name, {});
    requestFpApi.mock(FpBehandlingApiKeys.BEHANDLING_PERSONOVERSIKT.name, {});

    const wrapper = shallow(<BehandlingForeldrepengerIndex
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
